# Apps Section SEO Rules

> See root `CLAUDE.md` for site-wide rules (atelier design, copy, pSEO,
> bilingual strategy, dev workflow). `/apps` is an **EN-only shared
> route** — do not create `/de/apps/*` shadows. All app detail pages
> use `AtelierAppHero` + `AtelierAppSection` from
> `components/atelier/`. Page titles must not contain em-dashes (`—`);
> use `--`.

## Adding a New App

### 1. Registry Entry

Add to `lib/apps.ts`:

```ts
{
  slug: 'my-app',
  name: 'My App',
  tagline: 'Short compelling tagline',
  description: 'One-sentence description for cards and meta.',
  category: 'DeveloperApplication', // or BusinessApplication
  tags: ['Tag1', 'Tag2', 'Open Source'],
  image: '/my-app/screenshot.png',
  imageKind: 'logo',  // 'logo' (square mark on graphite tile) or 'shot' (screenshot)
  status: 'Released', // or 'Coming Soon', 'In Production', date, etc.
}
```

`imageKind: 'logo'` is drawn inside a dark graphite tile at contained
size (white-stroke logos read well on the dark background). `'shot'`
is object-cover in a graphite-backed frame for screenshots.

### 2. Page Structure

Copy `app/apps/smarttrim/page.tsx` as your template. The shape:

```tsx
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierShell from '@/components/layout/atelier-shell';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'My App',
  description: 'Description for JSON-LD',
  slug: 'my-app',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'My App -- Tagline',            // -- not — (em-dash); Gordon's rule.
  description: '150-160 chars, benefit-led.',
  openGraph: { title, description, url, siteName: 'Mickel Tech', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
  alternates: { canonical: 'https://mickel.tech/apps/my-app' },
};

// In component:
<AtelierShell>
  <JsonLd data={softwareAppSchema({ ...APP_DATA, offer: 'commercial' })} />
  <JsonLd data={breadcrumbSchema([
    { name: 'Apps', url: '/apps' },
    { name: 'My App', url: '/apps/my-app' },
  ])} />
  <AtelierAppHero idx="NN" category="NN / Category" {...} />
  <AtelierAppSection eyebrow="01 / Problem" title="..." lede="...">
    <AtelierFeatureGrid items={[...]} />
  </AtelierAppSection>
</AtelierShell>
```

`softwareAppSchema.offer`: use `'commercial'` for DocIQ Sphere / Shield,
`'free'` for open-source CLIs, `{ price, currency }` for a named price.
**Never omit intentionally — the default treats it as commercial.**

### 3. OG Image

Create `app/apps/[slug]/opengraph-image.tsx`:

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'My App — Tagline';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(/* ... */, size);
}
```

### 4. Sitemap

Automatic via `getAppSlugs()` in `app/sitemap.ts`.

## Colour themes (legacy)

The atelier uses a single rust accent across ALL app pages. Per-app
accent colours (amber, cyan, violet) belonged to the cyberpunk shell
and are no longer used. Do not reintroduce them.

## Checklist

- [ ] Entry in `lib/apps.ts` with `imageKind` set
- [ ] Page uses `AtelierShell` + `AtelierAppHero` + `AtelierAppSection`
- [ ] Metadata: title (`--` not `—`), 150-160 char description, OG,
      Twitter, absolute canonical
- [ ] JSON-LD: breadcrumbs + softwareAppSchema (with correct `offer`)
- [ ] OG image route (`opengraph-image.tsx`) with edge runtime
- [ ] Internal links use `SmartLink` (not raw `<a>`)
- [ ] Sitemap auto-picks up via `getAppSlugs()`
- [ ] Practical tone, no hyperbole
