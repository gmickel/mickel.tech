import { getAllPosts } from '@/lib/posts';

const siteUrl = 'https://mickel.tech';

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map((post) => {
      const link = `${siteUrl}/log/${post.slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      const description = xmlEscape(post.summary ?? '');

      return `<item>
  <title>${xmlEscape(post.title)}</title>
  <link>${link}</link>
  <guid>${link}</guid>
  <pubDate>${pubDate}</pubDate>
  <description>${description}</description>
</item>`;
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Mickel Tech — System Log</title>
  <link>${siteUrl}/log</link>
  <description>System log entries on AI SDLC, platforms and operational agents.</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
</channel>
</rss>`;

  return new Response(feed, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=3600',
    },
  });
}
