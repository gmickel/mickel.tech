import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Things I Built — Gordon Mickel';
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
        background: 'radial-gradient(circle at 20% 80%, #0a1f1a 0%, #000 55%)',
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
            'linear-gradient(to right, #00e5ff22 1px, transparent 1px), linear-gradient(to bottom, #00e5ff22 1px, transparent 1px)',
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
            'linear-gradient(120deg, rgba(0,229,255,0.12), transparent 40%)',
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
          <span>Portfolio</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.0 }}>
          Things I Built
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: '#A0A4A8',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Software I designed and built—from pioneering legal tech platforms to
          developer productivity tools.
        </div>

        {/* App badges */}
        <div
          style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}
        >
          {['DocIQ Sphere', 'DocIQ Shield', 'SmartTrim', 'DocIQ 1.0'].map(
            (app) => (
              <div
                key={app}
                style={{
                  padding: '10px 16px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(0,0,0,0.4)',
                  fontSize: 16,
                  color: '#fff',
                }}
              >
                {app}
              </div>
            )
          )}
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
        mickel.tech/apps
      </div>
    </div>,
    size
  );
}
