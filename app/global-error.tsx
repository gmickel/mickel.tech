'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#000',
          color: '#f5f5f5',
          fontFamily: 'system-ui, sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            {/* Error Icon */}
            <div
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #FF7A1A',
                backgroundColor: 'rgba(255, 122, 26, 0.1)',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#FF7A1A',
                  fontFamily: 'monospace',
                }}
              >
                !
              </span>
            </div>

            {/* Error Title */}
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FF7A1A',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              CRITICAL SYSTEM ERROR
            </h1>

            {/* Error Message */}
            <p
              style={{
                fontSize: '14px',
                color: '#A0A4A8',
                fontFamily: 'monospace',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              A critical error has occurred. The system is attempting recovery.
            </p>

            {/* Action Buttons */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <button
                onClick={reset}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  border: '1px solid #00E5FF',
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  color: '#00E5FF',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                type="button"
              >
                [ ATTEMPT RECOVERY ]
              </button>
              <a
                href="/"
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'transparent',
                  color: '#f5f5f5',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'block',
                  boxSizing: 'border-box',
                }}
              >
                [ RESTART SYSTEM ]
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
