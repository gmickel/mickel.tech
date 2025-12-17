import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'outlookctl — Control Outlook from the Command Line';
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
        background: '#0a0e14',
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
            'linear-gradient(to right, rgba(0, 217, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 20%, rgba(0, 217, 255, 0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(88, 166, 255, 0.1), transparent 40%)',
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
            color: '#00d9ff',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '999px',
              background: '#00d9ff',
              boxShadow: '0 0 12px #00d9ff',
            }}
          />
          <span>Windows CLI • Open Source</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.0,
            fontFamily: 'monospace',
          }}
        >
          outlookctl
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 32, color: '#00d9ff' }}>
          Control Outlook from the Command Line
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: '#8b949e',
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Local CLI bridge for Outlook Classic automation via COM. AI-assisted
          email and calendar management with Claude Code.
        </div>

        {/* Status badges */}
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
              border: '1px solid rgba(34, 197, 94, 0.4)',
              background: 'rgba(34, 197, 94, 0.1)',
              fontSize: 14,
              color: '#22c55e',
              letterSpacing: '0.1em',
            }}
          >
            RELEASED
          </div>
          <div
            style={{
              padding: '8px 16px',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              background: 'rgba(0, 217, 255, 0.1)',
              fontSize: 14,
              color: '#00d9ff',
            }}
          >
            Python + pywin32
          </div>
          <div
            style={{
              padding: '8px 16px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(0, 0, 0, 0.4)',
              fontSize: 14,
              color: '#fff',
            }}
          >
            No API Keys
          </div>
        </div>
      </div>

      {/* Terminal preview */}
      <div
        style={{
          position: 'absolute',
          right: 64,
          top: 120,
          width: 380,
          display: 'flex',
          flexDirection: 'column',
          background: '#0d1117',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 16px',
            background: '#161b22',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#ff5f56',
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#ffbd2e',
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#27c93f',
            }}
          />
          <span
            style={{
              marginLeft: 'auto',
              fontSize: 12,
              color: '#6e7681',
              fontFamily: 'monospace',
            }}
          >
            outlookctl
          </span>
        </div>
        <div
          style={{
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            fontFamily: 'monospace',
            fontSize: 13,
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <span style={{ color: '#3fb950' }}>$</span>
            <span style={{ color: '#00d9ff', marginLeft: 8 }}>
              outlookctl list
            </span>
            <span style={{ color: '#f0883e', marginLeft: 8 }}>--count</span>
            <span style={{ color: '#3fb950', marginLeft: 8 }}>3</span>
          </div>
          <div style={{ color: '#8b949e', paddingLeft: 16 }}>
            <span style={{ color: '#f0883e' }}>3 messages</span> from Inbox
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <span style={{ color: '#3fb950' }}>$</span>
            <span style={{ color: '#00d9ff', marginLeft: 8 }}>
              outlookctl calendar list
            </span>
          </div>
          <div style={{ color: '#8b949e', paddingLeft: 16 }}>
            <span style={{ color: '#f0883e' }}>5 events</span> upcoming
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
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'rgba(0, 0, 0, 0.6)',
          fontSize: 16,
          color: '#8b949e',
        }}
      >
        mickel.tech/apps/outlookctl
      </div>
    </div>,
    size
  );
}
