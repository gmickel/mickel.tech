import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Flow-Next — Zero-Dep Agent Orchestration';
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
        background: 'radial-gradient(circle at 30% 20%, #022c22 0%, #000 55%)',
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
            'linear-gradient(to right, #10b98122 1px, transparent 1px), linear-gradient(to bottom, #10b98122 1px, transparent 1px)',
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
            'linear-gradient(120deg, rgba(16,185,129,0.14), transparent 40%)',
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
            color: '#34d399',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '999px',
              background: '#10b981',
              boxShadow: '0 0 12px #10b981',
            }}
          />
          <span>Claude Code Plugin • Zero Dependencies</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.0 }}>
          Flow-Next
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 32, color: '#34d399' }}>
          Agent orchestration that actually finishes
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
          Bundled task tracking, dependency graphs, re-anchoring before every
          task, cross-model reviews. Delete a folder to uninstall.
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
              border: '1px solid rgba(16,185,129,0.4)',
              background: 'rgba(16,185,129,0.1)',
              fontSize: 14,
              color: '#34d399',
              letterSpacing: '0.1em',
            }}
          >
            EXPERIMENTAL
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
            Bundled flowctl • Multi-user Safe • CI-ready
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
        mickel.tech/apps/flow-next
      </div>
    </div>,
    size
  );
}
