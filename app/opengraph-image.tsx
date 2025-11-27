import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Mickel Tech – AI SDLC, Platforms & Operational AI Agents';
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        backgroundImage:
          'linear-gradient(to bottom right, #000000, #0a0a0a, #111111)',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
      }}
    >
      {/* Grid background effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Scanline effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)',
          backgroundSize: '100% 4px',
          opacity: 0.3,
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#00E5FF',
            }}
          />
          <span
            style={{
              color: '#00E5FF',
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Online • Mickel Tech
          </span>
        </div>

        {/* Main title */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: '64px',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 0,
            marginBottom: '24px',
            lineHeight: 1.1,
          }}
        >
          AI Systems That Actually
          <br />
          <span style={{ color: '#00E5FF', paddingLeft: '10px' }}>Work</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: '#A0A4A8',
            fontSize: '24px',
            textAlign: 'center',
            margin: 0,
            maxWidth: '800px',
          }}
        >
          AI SDLC &amp; Platforms • Operational AI Agents • Fractional CTO &amp;
          ITDR-Listed Expert
        </p>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          fontSize: '14px',
          color: '#A0A4A8',
        }}
      >
        <span>AI SDLC &amp; Platform Architect</span>
        <span style={{ color: '#00E5FF' }}>•</span>
        <span>
          Operating Principal (AI &amp; Tech), GrowthFactors / BU Bregal
        </span>
        <span style={{ color: '#00E5FF' }}>•</span>
        <span>ITDR-Listed Expert</span>
        <span style={{ color: '#00E5FF' }}>•</span>
        <span>mickel.tech</span>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
