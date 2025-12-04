import { ImageResponse } from 'next/og';

import { getPostBySlug } from '@/lib/posts';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type ParamsPromise = Promise<{ slug: string }>;

export default async function LogPostOGImage({
  params,
}: {
  params: ParamsPromise;
}) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) {
      throw new Error('Post not found');
    }

    const title =
      post?.title ??
      'System Log — AI SDLC, platforms and operational agents that actually work.';
    const tags = post?.tags?.slice(0, 4) ?? [];
    const date = post
      ? new Date(post.publishedAt).toLocaleDateString('en-CH', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        })
      : '';

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'radial-gradient(circle at 20% 20%, #0b1a1f 0%, #000 55%)',
          color: '#fff',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, #00e5ff22 1px, transparent 1px), linear-gradient(to bottom, #00e5ff22 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(120deg, rgba(0,229,255,0.14), transparent 40%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 20,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#00E5FF',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '999px',
                background: '#00E5FF',
                boxShadow: '0 0 12px #00E5FF',
              }}
            />
            <span>System Log</span>
            {date ? (
              <span style={{ color: '#A0A4A8', letterSpacing: 'normal' }}>
                {date}
              </span>
            ) : null}
          </div>

          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>

          {tags.length ? (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 6,
                    fontSize: 16,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#A0A4A8',
                  }}
                >
                  # {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 18px',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(0,0,0,0.6)',
            fontSize: 16,
            color: '#A0A4A8',
          }}
        >
          mickel.tech/log/{slug}
        </div>
      </div>,
      size
    );
  } catch (_error) {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          color: '#fff',
          fontSize: 32,
          fontFamily: 'Inter, system-ui, sans-serif',
          textAlign: 'center',
          padding: '48px',
        }}
      >
        System log image unavailable
      </div>,
      size
    );
  }
}
