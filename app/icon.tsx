// app/icon.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        backgroundImage:
          'radial-gradient(circle at 30% 30%, #111111, #000000 70%)',
        borderRadius: 16,
        border: '2px solid #00E5FF',
        boxSizing: 'border-box',
        boxShadow: '0 0 12px rgba(0,229,255,0.7)', // subtle halo
      }}
    >
      <span
        style={{
          color: '#00E5FF',
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: 1,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        MT
      </span>
    </div>,
    {
      ...size,
    }
  );
}
