import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Static map for eval display names (no fs access in edge runtime)
const EVAL_DISPLAY: Record<string, { title: string; shortName: string }> = {
  mcp: { title: 'Convex OAuth MCP server', shortName: 'MCP' },
  permissions: {
    title: 'Convex document & folder permissions',
    shortName: 'Permissions',
  },
  design: {
    title: 'Remote secretarial service dashboard',
    shortName: 'Design',
  },
  zig: { title: 'Tiny GPT in pure Zig', shortName: 'Zig' },
  smarttrim: {
    title: 'SmartTrim macOS menu bar utility',
    shortName: 'SmartTrim',
  },
  xlsx: { title: 'XLSX backend + agent tools', shortName: 'XLSX' },
};

type Props = { params: Promise<{ evalId: string }> };

export default async function Image({ params }: Props) {
  const { evalId } = await params;
  const evalData = EVAL_DISPLAY[evalId] ?? {
    title: evalId,
    shortName: evalId.toUpperCase(),
  };

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
          <span>gmickel bench • {evalData.shortName}</span>
        </div>

        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.2 }}>
          {evalData.title}
        </div>

        <div style={{ fontSize: 24, color: '#A0A4A8' }}>
          Real-world AI coding benchmark
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
        mickel.tech/gmickel-bench/{evalId}
      </div>
    </div>,
    size
  );
}
