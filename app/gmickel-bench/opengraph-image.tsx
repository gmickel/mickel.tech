import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'gmickel-bench — Real-World AI Coding Evaluations';
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
        background: 'radial-gradient(circle at 80% 20%, #1a0a1f 0%, #000 55%)',
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
            'linear-gradient(to right, #a855f722 1px, transparent 1px), linear-gradient(to bottom, #a855f722 1px, transparent 1px)',
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
            'linear-gradient(120deg, rgba(168,85,247,0.14), transparent 40%)',
        }}
      />

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 20,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#a855f7',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '999px',
              background: '#a855f7',
              boxShadow: '0 0 12px #a855f7',
            }}
          />
          <span>AI Coding Benchmark</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.0 }}>
          gmickel-bench
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#A0A4A8',
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Real-world evaluations for AI coding assistants. Multi-file
          refactoring, complex debugging, and production scenarios.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 32, marginTop: 16 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '12px 20px',
              border: '1px solid rgba(168,85,247,0.3)',
              background: 'rgba(168,85,247,0.1)',
            }}
          >
            <span
              style={{ fontSize: 14, color: '#a855f7', letterSpacing: '0.1em' }}
            >
              EVALS
            </span>
            <span style={{ fontSize: 28, fontWeight: 700 }}>21</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '12px 20px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{ fontSize: 14, color: '#A0A4A8', letterSpacing: '0.1em' }}
            >
              FOCUS
            </span>
            <span style={{ fontSize: 28, fontWeight: 700 }}>Real-World</span>
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
        mickel.tech/gmickel-bench
      </div>
    </div>,
    size
  );
}
