import { NextRequest, NextResponse } from 'next/server';

const BASE = 'http://mini-ielts.com';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  let url: string;

  if (type === 'list') {
    const page = searchParams.get('page') || '1';
    url = `${BASE}/listening?page=${page}`;
  } else if (type === 'test') {
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    if (!id || !slug) {
      return NextResponse.json({ error: 'Missing id or slug' }, { status: 400 });
    }
    url = `${BASE}/${id}/listening/${slug}`;
  } else {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: `mini-ielts returned ${res.status}` }, { status: 502 });
    }

    const html = await res.text();
    return NextResponse.json({ html }, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch {
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
