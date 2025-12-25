# feat: SEO Improvements & Programmatic SEO Implementation

## Overview

Comprehensive SEO overhaul: fix sitemap gaps, add programmatic SEO pages (tag pages, individual benchmark eval pages), implement JSON-LD structured data, improve internal linking, and optimize Core Web Vitals.

---

## CRITICAL: Design & Styling Requirements

Use the **frontend-design plugin/skill** for all visual/UI implementation. Preserve the existing site aesthetic - match styling patterns from `app/page.tsx`, `app/log/page.tsx`, `app/gmickel-bench/page.tsx`.

---

## Review Issues Addressed

This plan addresses all issues from Carmack-level review:

| # | Severity | Issue | Resolution |
|---|----------|-------|------------|
| 1 | Critical | Duplicate eval data sources | Single canonical `lib/bench-evals.ts` |
| 2 | Critical | Type mismatch `Post[]` vs `PostMeta[]` | Return `PostMeta[]` from tag functions |
| 3 | Critical | Draft posts statically generated | Add `getPublishedSlugs()`, filter drafts |
| 4 | Major | Missing canonical for mirrored posts | Add canonical logic based on `canonicalSource` |
| 5 | Major | Tag slugging lossy/irreversible | Build tag index with `Map<slug, displayName>` |
| 6 | Major | O(tags × posts) build cost | Memoize with React `cache()` |
| 7 | Major | JSON-LD XSS via `</script>` | Add `safeJsonLd()` helper |
| 8 | Major | Breadcrumbs JSON-LD missing Home | Include Home in JSON-LD items |
| 9 | Major | Hardcoded APPS list | Export canonical list from `lib/apps.ts` |
| 10 | Minor | Over-componentization | Reduce files, inline simple components |
| 11 | Minor | Params convention inconsistent | Use `Promise<{}>` pattern everywhere |
| 12 | Nitpick | schema-dts dependency | Skip dependency, use inline types |

---

## Problem Statement

Current state has SEO gaps:
- **Sitemap incomplete**: Missing `/apps/*`, `/gmickel-bench` pages
- **No pSEO**: Tags exist in posts but no `/log/tag/[tag]` pages
- **No structured data**: No JSON-LD (Person, Article, SoftwareApplication)
- **Weak internal linking**: No cross-linking between related content
- **Benchmark evals buried**: 6 detailed evals exist but aren't individually indexable
- **Draft pages generated**: Wasting build time on 404 routes
- **Canonicals broken**: Mirrored posts (Medium/Substack) don't emit correct canonical

---

## Technical Approach

### Phase 0: Foundation Fixes (SEO Correctness)

#### 0.1 Fix Draft Post Generation

```tsx
// lib/posts.ts - add memoization + published-only helpers
import { cache } from 'react'

// Memoize to avoid re-parsing MDX on every call
export const getAllPosts = cache(async (): Promise<PostMeta[]> => {
  // existing implementation
})

export const getPublishedPosts = cache(async (): Promise<PostMeta[]> => {
  const posts = await getAllPosts()
  return posts.filter((p) => p.status !== 'draft')
})

export async function getPublishedSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts()
  return posts.map((p) => p.slug)
}
```

Update `app/log/[slug]/page.tsx`:

```tsx
// app/log/[slug]/page.tsx
export async function generateStaticParams() {
  const slugs = await getPublishedSlugs() // was: getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}
```

#### 0.2 Fix Canonical URLs for Mirrored Posts

```tsx
// app/log/[slug]/page.tsx - update generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  // Determine canonical based on source
  let canonical: string
  if (post.canonicalSource === 'medium' && post.mediumUrl) {
    canonical = post.mediumUrl
  } else if (post.canonicalSource === 'substack' && post.substackUrl) {
    canonical = post.substackUrl
  } else {
    canonical = `/log/${slug}`
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical },
    // ... rest of metadata
  }
}
```

---

### Phase 1: Tag Infrastructure

#### 1.1 Tag Index with Proper Display Names

```tsx
// lib/posts.ts - add tag index

export interface TagIndex {
  /** Map from slug to original display name (first occurrence) */
  slugToDisplay: Map<string, string>
  /** Map from slug to posts with that tag */
  postsBySlug: Map<string, PostMeta[]>
  /** All unique tag slugs */
  slugs: string[]
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export const getTagIndex = cache(async (): Promise<TagIndex> => {
  const posts = await getPublishedPosts()
  const slugToDisplay = new Map<string, string>()
  const postsBySlug = new Map<string, PostMeta[]>()
  const collisions: Array<{ slug: string; tags: string[] }> = []

  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      const slug = slugifyTag(tag)

      // COLLISION DETECTION: Check if different tag maps to same slug
      const existingDisplay = slugToDisplay.get(slug)
      if (existingDisplay && existingDisplay !== tag) {
        // Find or create collision entry
        const collision = collisions.find((c) => c.slug === slug)
        if (collision) {
          if (!collision.tags.includes(tag)) collision.tags.push(tag)
        } else {
          collisions.push({ slug, tags: [existingDisplay, tag] })
        }
      }

      // Store first-seen display name (preserves AI, Next.js, etc.)
      if (!slugToDisplay.has(slug)) {
        slugToDisplay.set(slug, tag)
      }

      // Group posts by tag slug
      const existing = postsBySlug.get(slug) ?? []
      existing.push(post)
      postsBySlug.set(slug, existing)
    }
  }

  // FAIL BUILD ON COLLISIONS - data corruption is unacceptable
  if (collisions.length > 0) {
    const msg = collisions
      .map((c) => `  "${c.slug}" ← [${c.tags.map((t) => `"${t}"`).join(', ')}]`)
      .join('\n')
    throw new Error(
      `Tag slug collisions detected! These tags map to the same URL:\n${msg}\n` +
      `Fix by normalizing tags in frontmatter or adding disambiguation.`
    )
  }

  return {
    slugToDisplay,
    postsBySlug,
    slugs: Array.from(slugToDisplay.keys()).sort(),
  }
})

export async function getPostsByTag(tagSlug: string): Promise<PostMeta[]> {
  const index = await getTagIndex()
  return index.postsBySlug.get(tagSlug) ?? []
}

export async function getTagDisplayName(tagSlug: string): Promise<string | null> {
  const index = await getTagIndex()
  return index.slugToDisplay.get(tagSlug) ?? null
}

export async function getRelatedTags(tagSlug: string, limit = 5): Promise<string[]> {
  const index = await getTagIndex()
  const posts = index.postsBySlug.get(tagSlug) ?? []

  // Find tags that co-occur with current tag
  const cooccurrence = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      const slug = slugifyTag(tag)
      if (slug !== tagSlug) {
        cooccurrence.set(slug, (cooccurrence.get(slug) ?? 0) + 1)
      }
    }
  }

  return Array.from(cooccurrence.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([slug]) => index.slugToDisplay.get(slug) ?? slug)
}
```

#### 1.2 Tag Pages

```tsx
// app/log/tag/[tag]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTagIndex, getPostsByTag, getTagDisplayName } from '@/lib/posts'

type Props = { params: Promise<{ tag: string }> }

export async function generateStaticParams() {
  const index = await getTagIndex()
  return index.slugs.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const displayName = await getTagDisplayName(tag)
  if (!displayName) return {}

  return {
    title: `${displayName} Posts`,
    description: `Blog posts about ${displayName} by Gordon Mickel`,
    alternates: { canonical: `/log/tag/${tag}` },
    openGraph: {
      title: `${displayName} Posts | mickel.tech`,
      type: 'website',
    },
  }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const [posts, displayName] = await Promise.all([
    getPostsByTag(tag),
    getTagDisplayName(tag),
  ])

  if (posts.length === 0 || !displayName) notFound()

  return (
    <main>
      {/* Use existing PostList pattern from app/log/page.tsx */}
      <h1>Posts tagged "{displayName}"</h1>
      {/* Render posts inline - no separate component needed */}
    </main>
  )
}
```

#### 1.3 Tag OG Image

**CRITICAL: OG routes cannot use `fs`-backed helpers.** The OG image runtime (Edge-like) doesn't support Node built-ins. Use a static override map for known case-sensitive tags.

```tsx
// app/log/tag/[tag]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Static override map for case-sensitive tags (no fs access)
const TAG_DISPLAY_OVERRIDES: Record<string, string> = {
  'ai': 'AI',
  'mcp': 'MCP',
  'nextjs': 'Next.js',
  'typescript': 'TypeScript',
  'llm': 'LLM',
  'claude-code': 'Claude Code',
}

type Props = { params: Promise<{ tag: string }> }

// NOTE: generateStaticParams not needed - parent page.tsx handles static generation
// OG images are generated on-demand at build time for each statically generated page

export default async function Image({ params }: Props) {
  const { tag } = await params
  // Use override if available, otherwise title-case the slug
  const displayName = TAG_DISPLAY_OVERRIDES[tag] ??
    tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return new ImageResponse(
    (
      <div style={{ /* match existing OG styling from app/opengraph-image.tsx */ }}>
        <h1>{displayName}</h1>
        <p>Posts on mickel.tech</p>
      </div>
    ),
    { ...size }
  )
}
```

---

### Phase 2: Benchmark Evals (Single Source of Truth)

#### 2.1 Canonical Eval Data Module

Create `lib/bench-evals.ts` as THE source of truth. Migrate data FROM `app/gmickel-bench/page.tsx` benchmarks array.

```tsx
// lib/bench-evals.ts - SINGLE SOURCE OF TRUTH for eval metadata
import { cache } from 'react'

export interface BenchEval {
  id: string
  title: string
  shortName: string // for table headers
  spec: string
  hook: string
  methodology: string
  takeaways: string[]
  notes?: string
}

// Migrated from app/gmickel-bench/page.tsx benchmarks array
export const BENCH_EVALS: BenchEval[] = [
  {
    id: 'mcp',
    shortName: 'MCP',
    title: 'MCP Server Implementation',
    spec: 'Build a functional MCP server from documentation',
    hook: 'Can the model implement the Model Context Protocol correctly?',
    methodology: `This evaluation tests a model's ability to read technical documentation and implement a working MCP server. The model receives the MCP specification and must produce functional code that handles tool registration, message parsing, and response formatting. Scoring considers correctness of the protocol implementation, error handling, and code quality.`,
    takeaways: ['...'],
  },
  // ... 5 more evals (mcp, permissions, smarttrim, zig, xlsx, design)
]

export const getEvalById = cache((id: string): BenchEval | undefined => {
  return BENCH_EVALS.find((e) => e.id === id)
})

export function getEvalIds(): string[] {
  return BENCH_EVALS.map((e) => e.id)
}
```

#### 2.2 Update lib/bench-data.ts

```tsx
// lib/bench-data.ts - add evalId to scores, reference BENCH_EVALS
import { BENCH_EVALS } from './bench-evals'

// Update llmScores entries to include evalId for filtering
export interface LlmScore {
  modelId: ModelId
  evalId: string // 'mcp' | 'permissions' | 'smarttrim' | 'zig' | 'xlsx' | 'design'
  score: number
  notes?: string
}

export function getScoresForEval(evalId: string): LlmScore[] {
  return llmScores.filter((s) => s.evalId === evalId)
}
```

#### 2.3 Update gmickel-bench main page

```tsx
// app/gmickel-bench/page.tsx - import from lib/bench-evals.ts
import { BENCH_EVALS } from '@/lib/bench-evals'

// Remove inline benchmarks array, use BENCH_EVALS instead
```

#### 2.4 Eval Detail Pages

```tsx
// app/gmickel-bench/[evalId]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BENCH_EVALS, getEvalById } from '@/lib/bench-evals'
import { getScoresForEval } from '@/lib/bench-data'

type Props = { params: Promise<{ evalId: string }> }

export function generateStaticParams() {
  return BENCH_EVALS.map((e) => ({ evalId: e.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { evalId } = await params
  const eval_ = getEvalById(evalId)
  if (!eval_) return {}

  return {
    title: `${eval_.title} Benchmark`,
    description: eval_.hook,
    alternates: { canonical: `/gmickel-bench/${evalId}` },
  }
}

export default async function EvalPage({ params }: Props) {
  const { evalId } = await params
  const eval_ = getEvalById(evalId)
  if (!eval_) notFound()

  const scores = getScoresForEval(evalId)

  return (
    <main>
      {/* Breadcrumbs inline - see Phase 4 */}
      <h1>{eval_.title}</h1>
      <p className="text-xl">{eval_.hook}</p>

      <section>
        <h2>Methodology</h2>
        <p>{eval_.methodology}</p>
      </section>

      <section>
        <h2>Results by Model</h2>
        {/* Render scores table inline */}
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          {eval_.takeaways.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </section>
    </main>
  )
}
```

---

### Phase 3: Sitemap & Apps

#### 3.1 Canonical Apps List

```tsx
// lib/apps.ts - single source of truth for apps
export interface AppMeta {
  slug: string
  name: string
  description: string
  category: string
}

export const APPS: AppMeta[] = [
  { slug: 'smarttrim', name: 'SmartTrim', description: '...', category: 'DeveloperApplication' },
  { slug: 'dociq-sphere', name: 'DocIQ Sphere', description: '...', category: 'DeveloperApplication' },
  { slug: 'dociq-shield', name: 'DocIQ Shield', description: '...', category: 'DeveloperApplication' },
  { slug: 'outlookctl', name: 'outlookctl', description: '...', category: 'DeveloperApplication' },
  { slug: 'dociq', name: 'DocIQ', description: '...', category: 'DeveloperApplication' },
]

export function getAppSlugs(): string[] {
  return APPS.map((a) => a.slug)
}
```

#### 3.2 Updated Sitemap

```tsx
// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getTagIndex, getPublishedPosts, slugifyTag } from '@/lib/posts'
import { BENCH_EVALS } from '@/lib/bench-evals'
import { getAppSlugs } from '@/lib/apps'

const BASE = 'https://mickel.tech'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, tagIndex] = await Promise.all([
    getPublishedPosts(),
    getTagIndex(),
  ])
  const appSlugs = getAppSlugs()

  const staticPages = [
    { url: BASE, priority: 1, changeFrequency: 'weekly' as const },
    { url: `${BASE}/log`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/apps`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/gmickel-bench`, priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  const appPages = appSlugs.map((slug) => ({
    url: `${BASE}/apps/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  const postPages = posts.map((p) => ({
    url: `${BASE}/log/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  const tagPages = tagIndex.slugs.map((slug) => ({
    url: `${BASE}/log/tag/${slug}`,
    priority: 0.6,
    changeFrequency: 'weekly' as const,
  }))

  const evalPages = BENCH_EVALS.map((e) => ({
    url: `${BASE}/gmickel-bench/${e.id}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...appPages, ...postPages, ...tagPages, ...evalPages]
}
```

---

### Phase 4: JSON-LD (Safe, No Dependencies)

#### 4.1 Safe JSON-LD Helper

```tsx
// lib/json-ld.ts
const BASE_URL = 'https://mickel.tech'

/** Escape < to prevent </script> injection */
export function safeJsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c')
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  )
}

// Schema generators - no schema-dts dependency
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gordon Mickel',
    url: BASE_URL,
    sameAs: [
      'https://github.com/gmickel',
      'https://twitter.com/gmickel',
      'https://linkedin.com/in/gmickel',
    ],
    jobTitle: 'Software Engineer',
  }
}

export function articleSchema(post: { title: string; summary: string; publishedAt: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: 'Gordon Mickel' },
    publisher: { '@type': 'Person', name: 'Gordon Mickel' },
    url: `${BASE_URL}/log/${post.slug}`,
  }
}

export function softwareAppSchema(app: { name: string; description: string; slug: string; category: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url: `${BASE_URL}/apps/${app.slug}`,
    applicationCategory: app.category,
    author: { '@type': 'Person', name: 'Gordon Mickel' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  // Include Home as first item
  const allItems = [{ name: 'Home', url: BASE_URL }, ...items]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      // Normalize URL: absolute stays absolute, relative gets BASE_URL prefix
      item: item.url.startsWith('http')
        ? item.url
        : `${BASE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  }
}
```

#### 4.2 Usage in Pages

```tsx
// app/page.tsx - add Person schema
import { JsonLd, personSchema } from '@/lib/json-ld'

export default function Home() {
  return (
    <>
      <JsonLd data={personSchema()} />
      {/* existing content */}
    </>
  )
}
```

```tsx
// app/log/[slug]/page.tsx - add Article schema
import { JsonLd, articleSchema } from '@/lib/json-ld'

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  // ...

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      {/* existing content */}
    </>
  )
}
```

---

### Phase 5: Breadcrumbs (Inline, Consistent)

```tsx
// Inline in pages - no separate component file needed
// Example for eval page:

import { JsonLd, breadcrumbSchema } from '@/lib/json-ld'

// In EvalPage component:
const breadcrumbs = [
  { name: 'gmickel-bench', url: '/gmickel-bench' },
  { name: eval_.title, url: `/gmickel-bench/${evalId}` },
]

return (
  <>
    <JsonLd data={breadcrumbSchema(breadcrumbs)} />
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
      <ol className="flex gap-2">
        <li><Link href="/">Home</Link></li>
        <li className="flex gap-2">
          <span>/</span>
          <Link href="/gmickel-bench">gmickel-bench</Link>
        </li>
        <li className="flex gap-2">
          <span>/</span>
          <span aria-current="page">{eval_.title}</span>
        </li>
      </ol>
    </nav>
    {/* rest of page */}
  </>
)
```

---

## Acceptance Criteria

### Functional Requirements

- [ ] Draft posts excluded from `generateStaticParams` (no 404 waste)
- [ ] Mirrored posts emit correct canonical (Medium/Substack source)
- [ ] Tag pages at `/log/tag/[tag]` with proper display names (AI, Next.js preserved)
- [ ] Eval pages at `/gmickel-bench/[evalId]` from single data source
- [ ] Sitemap includes all pages (apps, tags, evals) from canonical sources
- [ ] JSON-LD on homepage (Person), posts (Article), apps (SoftwareApplication)
- [ ] Breadcrumbs with matching JSON-LD (includes Home)
- [ ] OG images for tag and eval pages

### Non-Functional Requirements

- [ ] Build time: tag index cached, no O(n²) re-parsing
- [ ] LCP < 2.5s, CLS < 0.1 on all new pages
- [ ] All pages SSG'd at build time
- [ ] JSON-LD validates in Google Rich Results Test
- [ ] No XSS via JSON-LD injection

### Quality Gates

- [ ] `bun run build` succeeds
- [ ] `bun run lint` passes
- [ ] `bun run typecheck` passes
- [ ] Lighthouse SEO score ≥ 95

---

## File Changes Summary

### New Files

| File | Purpose |
|------|---------|
| `lib/bench-evals.ts` | Single source of truth for eval metadata |
| `lib/apps.ts` | Canonical apps list |
| `lib/json-ld.ts` | Safe JSON-LD helpers + schema generators |
| `app/log/tag/[tag]/page.tsx` | Tag listing page |
| `app/log/tag/[tag]/opengraph-image.tsx` | Dynamic OG for tags |
| `app/gmickel-bench/[evalId]/page.tsx` | Individual eval page |
| `app/gmickel-bench/[evalId]/opengraph-image.tsx` | Dynamic OG for evals |

### Modified Files

| File | Changes |
|------|---------|
| `lib/posts.ts` | Add `cache()`, tag index, `getPublishedPosts`, `getPublishedSlugs` |
| `lib/bench-data.ts` | Add `evalId` to scores, import from `bench-evals.ts` |
| `app/gmickel-bench/page.tsx` | Import `BENCH_EVALS` from `lib/bench-evals.ts` |
| `app/sitemap.ts` | Use canonical sources, add all page types |
| `app/log/[slug]/page.tsx` | Fix canonical for mirrored posts, use `getPublishedSlugs`, add Article JSON-LD |
| `app/page.tsx` | Add Person JSON-LD |
| `app/apps/*/page.tsx` | Add SoftwareApplication JSON-LD |

---

## Implementation Order

1. **Foundation fixes** - Draft filtering, canonical URLs for mirrored posts
2. **Tag infrastructure** - Cached tag index with display names
3. **Tag pages** - Route + metadata + OG
4. **Eval data consolidation** - Create `lib/bench-evals.ts`, update imports
5. **Eval pages** - Route + metadata + OG
6. **Apps consolidation** - Create `lib/apps.ts`
7. **Sitemap update** - Use all canonical sources
8. **JSON-LD** - Safe helper + schema generators + integration
9. **Breadcrumbs** - Inline in pages with JSON-LD
10. **Validation** - Build, lint, typecheck, Lighthouse

---

## Dependencies

**None added.** No `schema-dts` - using inline types.

---

## Open Questions Resolved

1. **Mirrored post canonicals**: Emit external canonical if `canonicalSource` is set
2. **Tag collisions**: Build fails with descriptive error if different tags map to same slug - forces fix at source
3. **Eval scores structure**: Add `evalId` to existing `llmScores` entries
4. **OG image fs access**: OG routes use static override map, no fs imports
5. **metadataBase dependency**: Plan assumes `metadataBase` is set in root layout (already present)

---

## References

### Internal
- `app/layout.tsx:16-77` - Root metadata config
- `app/sitemap.ts:1-34` - Current sitemap
- `lib/posts.ts` - Post utilities (to extend)
- `lib/bench-data.ts` - Score data (to update)
- `app/gmickel-bench/page.tsx:46-133` - Eval definitions (to migrate)
- `app/log/[slug]/page.tsx` - Post page (to update canonical handling)

### External
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Schema.org Article](https://schema.org/Article)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
