import { ImageResponse } from 'next/og';

/**
 * Shared OG image template for the atelier (commercial) surface.
 * Editorial graphite background, warm rust accent, Newsreader serif headline.
 *
 * Use from a route's `opengraph-image.tsx`:
 *
 *   export const runtime = 'edge';
 *   export const size = { width: 1200, height: 630 };
 *   export const contentType = 'image/png';
 *   export const alt = '...';
 *   export default async function OG() {
 *     return await renderAtelierOG({ eyebrow: '...', title: '...', tagline: '...' });
 *   }
 */

export interface AtelierOGOptions {
  eyebrow: string;
  title: string;
  tagline?: string;
  /** Locale label shown in the bottom strip. Default 'EN'. */
  locale?: 'EN' | 'DE';
}

export const ATELIER_OG_SIZE = { width: 1200, height: 630 } as const;
export const ATELIER_OG_CONTENT_TYPE = 'image/png';

const COLOR_GRAPHITE = '#1B1A17';
const COLOR_PAPER = '#ECE6D8';
const COLOR_RUST = '#B25028';
const COLOR_PAPER_55 = 'rgba(236, 230, 216, 0.55)';
const COLOR_PAPER_75 = 'rgba(236, 230, 216, 0.75)';

const FONT_URL_RE = /src:\s*url\(([^)]+)\)\s*format/;

async function loadGoogleFont(
  family: string,
  weight = 400
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;
  // Satori only supports WOFF, OTF, TTF — not WOFF2. Google Fonts serves
  // WOFF2 to modern browsers; sending a very old User-Agent forces TTF.
  const css = await (
    await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
      },
    })
  ).text();
  const match = css.match(FONT_URL_RE);
  if (!match) {
    throw new Error(`Could not locate font src for ${family}`);
  }
  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) {
    throw new Error(`Font fetch failed for ${family}`);
  }
  return await fontResponse.arrayBuffer();
}

export async function renderAtelierOG({
  eyebrow,
  title,
  tagline,
  locale = 'EN',
}: AtelierOGOptions): Promise<ImageResponse> {
  // Load fonts at request time (cached at the edge after first hit per route).
  const [newsreader, hankenSans, hankenMedium] = await Promise.all([
    loadGoogleFont('Newsreader', 500),
    loadGoogleFont('Hanken Grotesk', 400),
    loadGoogleFont('Hanken Grotesk', 500),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: COLOR_GRAPHITE,
        fontFamily: 'Hanken Grotesk',
        position: 'relative',
        padding: '64px 72px',
        color: COLOR_PAPER,
      }}
    >
      {/* Subtle warm radial — atmospheric, not flat */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 80% 18%, rgba(178,80,40,0.10) 0%, transparent 55%), radial-gradient(ellipse at 8% 92%, rgba(31,58,92,0.12) 0%, transparent 60%)',
          display: 'flex',
        }}
      />

      {/* Top: eyebrow + accent rule */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
          marginBottom: '64px',
        }}
      >
        <span
          style={{
            fontFamily: 'Hanken Grotesk',
            fontWeight: 500,
            fontSize: '20px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: COLOR_RUST,
          }}
        >
          {eyebrow}
        </span>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(236,230,216,0.25)',
            display: 'flex',
          }}
        />
      </div>

      {/* Title — Newsreader serif, large */}
      <h1
        style={{
          position: 'relative',
          fontFamily: 'Newsreader',
          fontWeight: 500,
          fontSize: title.length > 60 ? '72px' : '88px',
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          color: COLOR_PAPER,
          margin: 0,
          maxWidth: '1000px',
          display: 'flex',
        }}
      >
        {title}
      </h1>

      {/* Tagline */}
      {tagline ? (
        <p
          style={{
            position: 'relative',
            marginTop: '36px',
            fontFamily: 'Hanken Grotesk',
            fontWeight: 400,
            fontSize: '28px',
            lineHeight: 1.4,
            color: COLOR_PAPER_75,
            maxWidth: '900px',
            display: 'flex',
          }}
        >
          {tagline}
        </p>
      ) : null}

      {/* Spacer to push footer down */}
      <div style={{ flex: 1, display: 'flex' }} />

      {/* Footer strip: brand · domain · locale */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          paddingTop: '24px',
          borderTop: '1px solid rgba(236,230,216,0.18)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '20px',
          }}
        >
          <span
            style={{
              fontFamily: 'Newsreader',
              fontWeight: 500,
              fontSize: '32px',
              color: COLOR_PAPER,
            }}
          >
            Mickel
            <span style={{ color: COLOR_RUST }}>.</span>
            tech
          </span>
          <span
            style={{
              fontFamily: 'Hanken Grotesk',
              fontWeight: 500,
              fontSize: '15px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: COLOR_PAPER_55,
            }}
          >
            Independent practice
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Hanken Grotesk',
            fontWeight: 500,
            fontSize: '15px',
            letterSpacing: '0.18em',
            color: COLOR_PAPER_55,
          }}
        >
          {locale} · CH
        </span>
      </div>
    </div>,
    {
      ...ATELIER_OG_SIZE,
      fonts: [
        {
          name: 'Newsreader',
          data: newsreader,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Hanken Grotesk',
          data: hankenSans,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Hanken Grotesk',
          data: hankenMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  );
}
