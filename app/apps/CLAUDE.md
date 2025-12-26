# Apps Section SEO Rules

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
  image: '/my-app/screenshot.png', // optional
  status: 'Released', // or 'Coming Soon', date, etc.
}
```

### 2. Page Structure

Create `app/apps/[slug]/page.tsx` with:

```tsx
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'My App',
  description: 'Description for JSON-LD',
  slug: 'my-app',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'My App — Tagline',
  description: 'Meta description',
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
  alternates: { canonical: 'https://mickel.tech/apps/my-app' },
};

// In component:
<JsonLd data={softwareAppSchema(APP_DATA)} />
<JsonLd data={breadcrumbSchema([
  { name: 'Apps', url: '/apps' },
  { name: 'My App', url: '/apps/my-app' },
])} />
```

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

## Color Themes

Each app should have a distinct accent color:

| App | Accent | Hex |
|-----|--------|-----|
| SmartTrim | Amber | `#FFB432` |
| DocIQ family | Amber/Gold | `#d97706` |
| outlookctl | Blue | `#3b82f6` |
| Flow | Violet | `#8b5cf6` |

## Checklist

- [ ] Entry in `lib/apps.ts`
- [ ] Page with metadata + JSON-LD breadcrumbs + softwareAppSchema
- [ ] OG image with edge runtime
- [ ] Distinct color theme
- [ ] Links back to `/apps` and `/`
- [ ] Practical tone, no hyperbole
