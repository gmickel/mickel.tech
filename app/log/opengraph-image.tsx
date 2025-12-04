import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function LogOGImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '64px',
        background: 'radial-gradient(circle at 20% 20%, #0b1a1f 0%, #000 55%)',
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
            'linear-gradient(120deg, rgba(0,229,255,0.12), transparent 40%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          maxWidth: '960px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
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
        </div>

        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          Latest entries on AI SDLC, platforms & operational agents.
        </div>

        <div style={{ fontSize: 22, color: '#A0A4A8' }}>
          Dispatches from Gordon Mickel on shipping AI systems that actually
          work.
        </div>
      </div>

      <div
        style={{
          marginTop: '32px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 18px',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(0,0,0,0.6)',
          fontSize: 16,
          color: '#A0A4A8',
        }}
      >
        mickel.tech/log
      </div>
    </div>,
    size
  );
}
