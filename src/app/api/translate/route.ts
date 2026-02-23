import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const word = req.nextUrl.searchParams.get('word')?.toLowerCase().trim();
  const text = req.nextUrl.searchParams.get('text')?.trim();

  // ── Long text mode ─────────────────────────────────────────────────────────
  if (text) {
    try {
      const gRes = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=id&dt=t&q=${encodeURIComponent(text)}`
      );
      if (!gRes.ok) throw new Error('google translate failed');
      const data = await gRes.json();
      const chunks: string[] = (data?.[0] ?? []).map((c: unknown[]) => c?.[0] ?? '');
      const translated = chunks.join('');
      if (!translated) throw new Error('empty result');
      return NextResponse.json({ translated, source: 'google' });
    } catch {
      return NextResponse.json({ error: 'translation failed' }, { status: 500 });
    }
  }

  // ── Single word mode — Cambridge Dictionary only ───────────────────────────
  if (!word) return NextResponse.json({ error: 'missing word or text' }, { status: 400 });

  try {
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

    if (!res.ok) throw new Error(`cambridge http ${res.status}`);

    const html = await res.text();
    const stripTags = (s: string) => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

    interface Sense {
      partOfSpeech: string;
      ipa: string;
      definition: string;
      translated: string;
      examples: string[];
    }

    interface EntryResult {
      partOfSpeech: string;
      ipa: string;
      conjugations: string; // e.g. "past tense spoke | past participle spoken"
      senses: Sense[];
    }

    // ── Find real entry-body__el divs using class-attribute regex ─────────────
    // Using regex (not indexOf) to avoid false matches in JS/aria attributes.
    const entryOpenRe = /<div[^>]+class="[^"]*entry-body__el[^"]*"[^>]*>/g;
    const entryStarts: number[] = [];
    let em: RegExpExecArray | null;
    while ((em = entryOpenRe.exec(html)) !== null) {
      entryStarts.push(em.index);
    }

    const entries: EntryResult[] = [];

    const processEntry = (chunk: string): EntryResult => {
      // Part of speech
      const posMatch = chunk.match(/<span[^>]+class="[^"]*\bpos\b[^"]*"[^>]*>([\s\S]*?)<\/span>/);
      const entryPos = posMatch ? stripTags(posMatch[1]) : '';

      // IPA — look only in pos-header section to avoid picking up other words' IPA
      const posHeaderMatch = chunk.match(/<div[^>]+class="[^"]*pos-header[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      const headerChunk = posHeaderMatch ? posHeaderMatch[0] : chunk.slice(0, 800);

      // US pronunciation first, then UK
      const ipaUS = headerChunk.match(/<span[^>]+class="[^"]*ipa[^"]*lpr-2 lpl-1[^"]*"[^>]*>([\s\S]*?)<\/span>/);
      const ipaUK = headerChunk.match(/<span[^>]+class="[^"]*ipa[^"]*"[^>]*>([\s\S]*?)<\/span>/);
      const rawIpa = stripTags((ipaUS || ipaUK)?.[1] ?? '');
      const entryIpa = rawIpa ? `/${rawIpa}/` : '';

      // Conjugations / irregular forms (e.g. past tense, past participle, comparative)
      // Cambridge puts these in spans/divs with class containing "irreg" or "inf"
      const conjChunk = chunk.match(/<[^>]+class="[^"]*irreg-infls[^"]*"[^>]*>([\s\S]*?)<\/(?:span|div)>/);
      let conjugations = '';
      if (conjChunk) {
        conjugations = stripTags(conjChunk[1]).replace(/\s+/g, ' ').trim();
      }

      // ── Split into def-blocks using class-attribute regex ──────────────────
      const defBlockRe = /<div[^>]+class="[^"]*\bddef_block\b[^"]*"[^>]*>/g;
      const defBlockStarts: number[] = [];
      let dm: RegExpExecArray | null;
      while ((dm = defBlockRe.exec(chunk)) !== null) {
        defBlockStarts.push(dm.index);
      }

      const senses: Sense[] = [];
      for (let bi = 0; bi < defBlockStarts.length; bi++) {
        const bStart = defBlockStarts[bi];
        const bEnd = bi + 1 < defBlockStarts.length ? defBlockStarts[bi + 1] : chunk.length;
        const block = chunk.slice(bStart, bEnd);

        // Definition (English)
        const defMatch = block.match(/<div[^>]+class="[^"]*\bddef_d\b[^"]*"[^>]*>([\s\S]*?)<\/div>/);
        const definition = defMatch ? stripTags(defMatch[1]).replace(/:$/, '').trim() : '';

        // Indonesian translation(s)
        const transRe = /<span[^>]+class="[^"]*\bdtrans\b[^"]*"[^>]*>([\s\S]*?)<\/span>/g;
        const transMatches: string[] = [];
        let tm: RegExpExecArray | null;
        while ((tm = transRe.exec(block)) !== null) {
          const t = stripTags(tm[1]);
          if (t && !transMatches.includes(t)) transMatches.push(t);
        }
        const translated = transMatches[0] || '';

        // Example sentences
        const egRe = /<span[^>]+class="[^"]*\bdeg\b[^"]*"[^>]*>([\s\S]*?)<\/span>/g;
        const examples: string[] = [];
        let xm: RegExpExecArray | null;
        while ((xm = egRe.exec(block)) !== null) {
          const eg = stripTags(xm[1]);
          if (eg) examples.push(eg);
        }

        if (definition || translated) {
          senses.push({ partOfSpeech: entryPos, ipa: entryIpa, definition, translated, examples });
        }
      }

      return { partOfSpeech: entryPos, ipa: entryIpa, conjugations, senses };
    };

    // Process each real entry block
    for (let i = 0; i < entryStarts.length; i++) {
      const chunk = html.slice(entryStarts[i], entryStarts[i + 1] ?? html.length);
      entries.push(processEntry(chunk));
    }

    // Fallback: flat parse if no entry blocks found
    if (entries.length === 0) {
      const flatPos = stripTags(html.match(/<span[^>]+class="[^"]*\bpos\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? '');
      const flatIpaRaw = stripTags(html.match(/<span[^>]+class="[^"]*\bipa\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? '');
      const flatIpa = flatIpaRaw ? `/${flatIpaRaw}/` : '';
      const flatTrans = stripTags(html.match(/<span[^>]+class="[^"]*\bdtrans\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? '');
      const flatDef = stripTags(html.match(/<div[^>]+class="[^"]*\bddef_d\b[^"]*"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '').replace(/:$/, '');
      const flatEg = stripTags(html.match(/<span[^>]+class="[^"]*\bdeg\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? '');
      if (flatTrans) {
        entries.push({
          partOfSpeech: flatPos,
          ipa: flatIpa,
          conjugations: '',
          senses: [{ partOfSpeech: flatPos, ipa: flatIpa, definition: flatDef, translated: flatTrans, examples: flatEg ? [flatEg] : [] }],
        });
      }
    }

    if (entries.length === 0 || entries.every(e => e.senses.length === 0)) {
      return NextResponse.json(
        { error: 'not_found', message: `"${word}" not found in Cambridge Dictionary.` },
        { status: 404 }
      );
    }

    // Cambridge audio URL (US pronunciation)
    const audioMatch = html.match(/src="(\/media\/english\/us_pron[^"]+\.mp3)"/);
    const audioUrl = audioMatch ? `https://dictionary.cambridge.org${audioMatch[1]}` : '';

    // Flatten all senses for convenience
    const allSenses: Sense[] = entries.flatMap(e => e.senses);
    const first = allSenses[0];
    const firstEntry = entries[0];

    return NextResponse.json({
      word,
      translated: first.translated,
      partOfSpeech: firstEntry.partOfSpeech,
      ipa: firstEntry.ipa,
      conjugations: firstEntry.conjugations,
      definition: first.definition,
      examples: first.examples,
      audioUrl,
      entries,      // grouped by POS entry
      senses: allSenses,
      source: 'cambridge',
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: 'cambridge_error', message: msg }, { status: 500 });
  }
}
