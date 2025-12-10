import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'DocIQ 1.0 — Pioneering Document Intelligence (2017-2020)';
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
        background: 'radial-gradient(circle at 20% 40%, #1f150a 0%, #000 55%)',
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
            'linear-gradient(to right, #d9770622 1px, transparent 1px), linear-gradient(to bottom, #d9770622 1px, transparent 1px)',
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
            'linear-gradient(120deg, rgba(217,119,6,0.14), transparent 40%)',
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
            color: '#f59e0b',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '999px',
              background: '#f59e0b',
              boxShadow: '0 0 12px #f59e0b',
            }}
          />
          <span>Pioneering • Legal Tech • 2017-2020</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.0 }}>
          DocIQ 1.0
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 32, color: '#f59e0b' }}>
          Where the DocIQ journey began
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
          One of the first legal tech platforms to use NLP and machine learning
          for document lifecycle management. Still in production today.
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
              border: '1px solid rgba(34,197,94,0.4)',
              background: 'rgba(34,197,94,0.1)',
              fontSize: 14,
              color: '#22c55e',
              letterSpacing: '0.1em',
            }}
          >
            STILL IN PRODUCTION
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
            Vue.js • Node.js • PostgreSQL
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
        mickel.tech/apps/dociq
      </div>
    </div>,
    size
  );
}
