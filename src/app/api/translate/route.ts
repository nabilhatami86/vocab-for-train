import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const word = req.nextUrl.searchParams.get('word')?.toLowerCase().trim();
  if (!word) return NextResponse.json({ error: 'missing word' }, { status: 400 });

  try {
    // Cambridge Dictionary English-Indonesian
    const res = await fetch(
      `https://dictionary.cambridge.org/dictionary/english-indonesian/${encodeURIComponent(word)}`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      }
    );

    if (!res.ok) throw new Error('cambridge fetch failed');

    const html = await res.text();

    // Parse with regex (server-side, no DOMParser)
    const match = (pattern: RegExp) => html.match(pattern)?.[1]?.trim() || '';
    const stripTags = (s: string) => s.replace(/<[^>]*>/g, '').trim();

    // Part of speech
    const partOfSpeech = stripTags(match(/<span class="pos dpos"[^>]*>([\s\S]*?)<\/span>/));

    // IPA
    const ipa = stripTags(match(/<span class="ipa dipa lpr-2 lpl-1"[^>]*>([\s\S]*?)<\/span>/));

    // English definition
    const definition = stripTags(match(/<div class="def ddef_d db"[^>]*>([\s\S]*?)<\/div>/)).replace(/:$/, '');

    // Indonesian translation
    const translated = stripTags(match(/<span class="trans dtrans dtrans-se break-cj"[^>]*>([\s\S]*?)<\/span>/));

    // Example sentence
    const example = stripTags(match(/<span class="eg deg"[^>]*>([\s\S]*?)<\/span>/));

    // Alternative translations
    const altRegex = /<span class="trans dtrans dtrans-se break-cj"[^>]*>([\s\S]*?)<\/span>/g;
    const alternatives: string[] = [];
    let altMatch;
    let altIdx = 0;
    while ((altMatch = altRegex.exec(html)) !== null) {
      const alt = stripTags(altMatch[1]);
      if (altIdx > 0 && alt && alt.toLowerCase() !== translated.toLowerCase() && !alternatives.includes(alt)) {
        alternatives.push(alt);
      }
      altIdx++;
    }

    if (!translated) throw new Error('no translation found');

    return NextResponse.json({
      translated,
      partOfSpeech,
      ipa: ipa ? `/${ipa}/` : '',
      definition,
      example,
      alternatives: alternatives.slice(0, 4),
    });
  } catch {
    // Fallback: Google Translate
    try {
      const gRes = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=id&dt=t&dt=at&q=${encodeURIComponent(word)}`
      );
      if (!gRes.ok) throw new Error('google translate failed');
      const data = await gRes.json();
      const mainTranslation = data?.[0]?.[0]?.[0];
      const altData = data?.[5]?.[0]?.[2];
      const alternatives: string[] = [];
      if (Array.isArray(altData)) {
        for (const alt of altData) {
          if (alt?.[0] && typeof alt[0] === 'string' && alt[0].toLowerCase() !== mainTranslation?.toLowerCase()) {
            alternatives.push(alt[0]);
          }
        }
      }

      if (mainTranslation) {
        return NextResponse.json({
          translated: mainTranslation,
          alternatives: alternatives.slice(0, 4),
          partOfSpeech: '',
          ipa: '',
          definition: '',
          example: '',
        });
      }
    } catch { /* ignore */ }

    return NextResponse.json({ error: 'translation failed' }, { status: 500 });
  }
}
