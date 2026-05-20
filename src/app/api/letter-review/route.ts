import { NextRequest, NextResponse } from 'next/server';

const PROMPT = (type: 'formal' | 'informal', task: string, letter: string) => `
You are an expert English writing teacher. A student is practicing writing a ${type} letter in English.

Task given to student:
"${task}"

Student's letter:
"""
${letter}
"""

Evaluate the letter and return ONLY a raw JSON object — no markdown, no code fences.

${type === 'formal' ? `
Required components for a FORMAL letter:
- Date + sender's address (top left)
- Recipient name & address
- Subject line
- Formal greeting (Dear Sir/Madam, To whom it may concern, Dear Mr./Ms. Name)
- Body (at least 2 paragraphs: introduction purpose + detail/request)
- Polite final statement (Thank you. / I look forward to your response.)
- Formal closing (Sincerely, / Yours faithfully,)
- Sender's name
Tone rules: NO contractions, NO casual language, NO slang, impersonal and professional.
` : `
Required components for an INFORMAL letter:
- Date
- Greeting (Dear Name, / Hi Name, / Dearest Name,)
- Body (at least 2 paragraphs)
- Closing (Sincerely yours, / With love, / Yours truly,)
- Sender's name
Optional: address, P.S.
Tone rules: friendly, personal, contractions allowed, casual expressions OK.
`}

JSON structure:
{
  "overallScore": <integer 0-100>,
  "letterType": "${type}",
  "structure": {
    "score": <integer 0-100>,
    "feedback": "<2 sentences in Indonesian about structure completeness>",
    "components": [
      { "name": "<component name in Indonesian>", "present": <true|false>, "note": "<short note in Indonesian, or null if present and correct>" }
    ]
  },
  "grammar": {
    "score": <integer 0-100>,
    "feedback": "<2 sentences in Indonesian summarising grammar quality>",
    "corrections": [
      { "original": "<incorrect phrase from letter>", "corrected": "<corrected phrase>", "explanation": "<brief reason in Indonesian>" }
    ]
  },
  "tone": {
    "score": <integer 0-100>,
    "isAppropriate": <true if tone matches the letter type>,
    "feedback": "<2 sentences in Indonesian about tone appropriateness>",
    "flaggedPhrases": [
      { "phrase": "<phrase that doesn't match the expected tone>", "suggestion": "<better alternative>", "reason": "<why in Indonesian>" }
    ]
  },
  "vocabulary": {
    "score": <integer 0-100>,
    "feedback": "<1-2 sentences in Indonesian>",
    "enhancements": [
      { "used": "<word student used>", "better": "<stronger alternative>", "reason": "<why in Indonesian>" }
    ]
  },
  "correctedLetter": "<full corrected version of the letter with all issues fixed>",
  "generalFeedback": "<3-4 sentences in Indonesian: overall impression, strongest point, most important thing to improve>"
}`;

async function callGroq(type: 'formal' | 'informal', task: string, letter: string, apiKey: string) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: PROMPT(type, task, letter) }],
      temperature: 0.3,
      max_tokens: 3000,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    if (res.status === 429) throw new Error('quota_exceeded');
    throw new Error(err?.error?.message ?? `Groq error ${res.status}`);
  }
  const data = await res.json();
  return data?.choices?.[0]?.message?.content ?? '';
}

async function callGemini(type: 'formal' | 'informal', task: string, letter: string, apiKey: string) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: PROMPT(type, task, letter) }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 3000 },
      }),
    }
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    if (res.status === 429) throw new Error('quota_exceeded');
    throw new Error(err?.error?.message ?? `Gemini error ${res.status}`);
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const letter: string = (body?.letter ?? '').trim();
  const type: 'formal' | 'informal' = body?.type === 'formal' ? 'formal' : 'informal';
  const task: string = (body?.task ?? '').trim();

  if (!letter || letter.split(/\s+/).length < 20) {
    return NextResponse.json({ error: 'too_short', message: 'Surat terlalu pendek. Tulis minimal 20 kata.' }, { status: 400 });
  }

  const groqKey = process.env.GROQ_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (!groqKey && !geminiKey) {
    return NextResponse.json({ error: 'no_api_key', message: 'Tidak ada API key dikonfigurasi.' }, { status: 503 });
  }

  try {
    const raw = groqKey
      ? await callGroq(type, task, letter, groqKey)
      : await callGemini(type, task, letter, geminiKey!);

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return NextResponse.json({ error: 'parse_error', message: 'Gagal membaca respons AI.' }, { status: 500 });

    return NextResponse.json(JSON.parse(jsonMatch[0]));
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg === 'quota_exceeded') {
      return NextResponse.json({ error: 'quota_exceeded', message: 'Kuota AI habis, coba lagi sebentar.' }, { status: 429 });
    }
    return NextResponse.json({ error: 'server_error', message: msg }, { status: 500 });
  }
}
