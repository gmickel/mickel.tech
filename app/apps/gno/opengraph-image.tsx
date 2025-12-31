import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'GNO — Local Search for Your Second Brain';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px',
        background: 'radial-gradient(circle at 25% 15%, #0a1f2e 0%, #000 60%)',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, #06b6d422 1px, transparent 1px), linear-gradient(to bottom, #06b6d422 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />

      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(6,182,212,0.15), transparent 45%)',
        }}
      />

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 18,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#22d3ee',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '999px',
              background: '#22d3ee',
              boxShadow: '0 0 12px #22d3ee',
            }}
          />
          <span>Local Search • CLI • Open Source</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.0 }}>
          GNO
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 32, color: '#22d3ee' }}>
          Local search for your second brain
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: '#A0A4A8',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Hybrid BM25 + vector search with HyDE expansion and cross-encoder
          reranking. Index Markdown, PDFs, code. Give AI agents memory.
        </div>

        {/* Status */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 8,
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              border: '1px solid rgba(6,182,212,0.4)',
              background: 'rgba(6,182,212,0.1)',
              fontSize: 14,
              color: '#22d3ee',
              letterSpacing: '0.1em',
            }}
          >
            OPEN SOURCE
          </div>
          <div
            style={{
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(0,0,0,0.4)',
              fontSize: 14,
              color: '#fff',
            }}
          >
            BM25 • Vectors • HyDE • MCP
          </div>
        </div>
      </div>

      {/* Footer */}
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
        mickel.tech/apps/gno
      </div>
    </div>,
    size
  );
}
