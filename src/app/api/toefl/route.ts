import { NextResponse } from 'next/server';

const BASE = 'https://toefl-api.vercel.app';

const ENDPOINTS: Record<string, string> = {
  structure: '/api/soal/structure/random',
  reading: '/api/soal/reading/random',
  listening: '/api/soal/listening/random',
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') ?? 'structure';
  const endpoint = ENDPOINTS[type] ?? ENDPOINTS.structure;

  try {
    const res = await fetch(`${BASE}${endpoint}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; toefl-proxy/1.0)' },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Upstream error: ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
