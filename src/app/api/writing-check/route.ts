import { NextRequest, NextResponse } from 'next/server';

const PROMPT = (text: string) => `You are an expert English teacher and IELTS examiner. Analyze the student's English text below and return ONLY a raw JSON object — no markdown, no code fences, no explanation outside the JSON.

Text:
"""
${text}
"""

JSON structure (fill every field carefully):
{
  "grammar": {
    "score": <integer 0-100>,
    "feedback": "<one or two sentences summarising grammar quality>",
    "corrections": [
      { "original": "<incorrect phrase from text>", "corrected": "<corrected phrase>", "explanation": "<brief why>" }
    ]
  },
  "tenses": {
    "summary": "<2-3 sentences about overall tense usage — is it consistent? any mistakes?>",
    "sentences": [
      {
        "sentence": "<the original sentence>",
        "tenseUsed": "<e.g. Simple Past, Present Perfect, Simple Present, Past Continuous, etc.>",
        "isCorrect": <true|false>,
        "shouldBe": "<correct tense name if isCorrect is false, otherwise same as tenseUsed>",
        "explanation": "<1 sentence: why this tense is correct or incorrect in this context>",
        "structureType": "<'Independent Clause' | 'Dependent Clause' | 'Phrase (no verb)' | 'Compound Sentence' | 'Complex Sentence'>",
        "structureNote": "<1 sentence explaining the clause/phrase structure of this sentence>"
      }
    ]
  },
  "vocabulary": {
    "score": <integer 0-100>,
    "feedback": "<one or two sentences>",
    "suggestions": ["<word/phrase suggestion 1>", "<suggestion 2>"],
    "wordEnhancements": [
      {
        "wordUsed": "<word from the student's text>",
        "synonyms": ["<synonym 1>", "<synonym 2>", "<synonym 3>"],
        "bestAlternative": "<the most natural upgrade for this context>",
        "example": "<short example sentence using bestAlternative>",
        "note": "<1 short sentence: when to use this alternative vs the original>"
      }
    ]
  },
  "coherence": {
    "score": <integer 0-100>,
    "feedback": "<one or two sentences about flow and clarity>"
  },
  "style": {
    "score": <integer 0-100>,
    "feedback": "<one or two sentences about writing style>"
  },
  "level": {
    "estimated": "<A1|A2|B1|B2|C1|C2>",
    "feedback": "<one sentence explaining the level estimate>"
  },
  "overallScore": <integer 0-100, weighted average>,
  "correctedVersion": "<full text with grammar errors fixed, preserving meaning>",
  "rewriteSuggestion": "<polished native-level rewrite of the same content>"
}`;

// ─── Groq (LLaMA 3.3 70B) ────────────────────────────────────────────────────

async function callGroq(text: string, apiKey: string) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: PROMPT(text) }],
      temperature: 0.3,
      max_tokens: 2048,
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

// ─── Gemini ───────────────────────────────────────────────────────────────────

async function callGemini(text: string, apiKey: string) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: PROMPT(text) }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 2048 },
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

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.json();
  const text: string = body?.text?.trim() ?? '';

  if (!text || text.split(/\s+/).length < 5) {
    return NextResponse.json({ error: 'too_short', message: 'Write at least 5 words.' }, { status: 400 });
  }

  const groqKey   = process.env.GROQ_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (!groqKey && !geminiKey) {
    return NextResponse.json(
      { error: 'no_api_key', message: 'No AI key configured. Add GROQ_API_KEY or GEMINI_API_KEY to .env.local' },
      { status: 503 }
    );
  }

  try {
    // Prefer Groq (faster, no billing required); fall back to Gemini
    const raw = groqKey
      ? await callGroq(text, groqKey)
      : await callGemini(text, geminiKey!);

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'parse_error', message: 'Could not parse AI response.' }, { status: 500 });
    }

    return NextResponse.json(JSON.parse(jsonMatch[0]));
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg === 'quota_exceeded') {
      return NextResponse.json(
        { error: 'quota_exceeded', message: 'AI quota exceeded. Please wait a moment and try again.' },
        { status: 429 }
      );
    }
    return NextResponse.json({ error: 'server_error', message: msg }, { status: 500 });
  }
}
