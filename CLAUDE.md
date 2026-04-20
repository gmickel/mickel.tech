# mickel.tech -- operating manual

This file documents how mickel.tech is built, the conventions every change
must follow, and the traps to avoid. Keep it current; it is how future
changes (mine or anyone else's) go smoothly.

`AGENTS.md` is a symlink to this file.

---

## 1. What this site is

- Personal site of Gordon Mickel (gordon@mickel.tech, Binningen / Switzerland).
- Primary purposes, in priority order:
  1. **Credibility + conversion** for independent mandates: Agentic PDLC,
     Parteigutachten / Werkvertrags-Gutachten, AI transformation.
  2. **Blog (`/log`)** for technical field notes.
  3. **Product catalogue (`/apps`)** for Gordon's software (FlowNext, GNO,
     DocIQ, SmartTrim, etc.).
  4. **Bench (`/gmickel-bench`)** public benchmark dashboards.
- Audience: Swiss/DACH CTOs, PE operating partners, litigation counsel,
  engineering leaders. Professional register. Senior engineers read the blog.

## 2. Stack

- Next.js 16 App Router + React 19.2 + TypeScript 5.
- Tailwind v4 (new `@theme` block in `globals.css`, no `tailwind.config.*`).
- MDX via `next-mdx-remote/rsc`.
- Motion (`motion/react`) for animations; Framer Motion also installed.
- `next-view-transitions` for client-side navigation transitions.
- Biome + Ultracite for lint/format (enforced by lefthook pre-commit).
- **Package manager: pnpm 9 on Vercel.** Locally bun works for dev
  (`bun run dev`) but **any `bun add` / `bun remove` must be followed by
  `npx pnpm@9 install` to sync `pnpm-lock.yaml`.** Vercel runs
  `pnpm install --frozen-lockfile` and will fail the build otherwise.
- Dev server port: **3355** (`bun run dev`). Never use a different port;
  Gordon's tooling expects 3355.

---

## 3. Routing + shells

Two shells exist. New UI work goes in the **atelier** shell.

| Shell | Component | Register | Routes |
|---|---|---|---|
| **Atelier** (primary) | `components/layout/atelier-shell.tsx` | Paper cream, editorial | `/`, `/sdlc`, `/expert`, `/ai-transformation`, `/case-studies`, `/case-studies/[id]`, `/about`, `/imprint`, `/privacy`, `/log`, `/log/[slug]`, `/log/tag/[tag]`, `/apps`, `/apps/[slug]`, plus all `/de/*` equivalents |
| **Legacy / cyberpunk** | `components/layout/shell.tsx` | Dark terminal, cyan accents | `/gmickel-bench` only. Intentionally kept; benchmark dashboards earn the terminal aesthetic. |

Rules:
- Any new service/content page → AtelierShell.
- Do not create a new Shell variant.
- If you touch `/gmickel-bench`, keep the legacy register.

### Bilingual routing

- EN is primary. DE is a parallel subtree under `/de/*`.
- **Paths with DE versions** (authoritative list, keep in sync with
  `components/layout/atelier-locale-switcher.tsx` and `app/sitemap.ts`):
  `/`, `/sdlc`, `/expert`, `/ai-transformation`, `/case-studies`,
  `/case-studies/[id]`, `/about`, `/imprint`, `/privacy`.
- **Paths WITHOUT DE versions — deliberately:** `/log`, `/log/[slug]`,
  `/log/tag/[tag]`, `/apps`, `/apps/[slug]`, `/gmickel-bench*`,
  `/lead-magnets/*`. These are shared EN routes because the content is
  natively English and creating DE shadows with identical English body
  content = duplicate-content SEO risk (we tried, we reverted, don't
  redo). DE users click Notizen / Apps and land on EN with DE chrome
  restored on next internal link.
- The `AtelierShell` auto-detects locale via `usePathname().startsWith('/de')`.
  Components accept `locale?: 'en' | 'de'` prop; each branches on it
  using parallel `copyEN` / `copyDE` objects.

### Locale switcher (`components/layout/atelier-locale-switcher.tsx`)

- Two discrete clickable halves (EN, DE) with cursor pointer + active state.
- `toDeHref(path)` routes to `/de${path}` only for whitelisted paths;
  otherwise falls back to `/de` home. If you add a new translated page,
  add its path to `DE_EQUIVALENT_PATHS`. If it's a new prefix (`/foo/*`),
  add to `DE_EQUIVALENT_PREFIXES`.

---

## 4. Design system -- the atelier

### Palette (CSS vars in `app/globals.css`)

```
--paper         42 32% 89%   #ECE6D8   warm cream body bg
--ink           40 12% 8%    #15130E   text on paper
--graphite      40 7% 10%    #1B1A17   dark bg (header, codex panels)
--rust          17 56% 43%   #B25028   the single accent colour
--navy          213 51% 24%  #1F3A5C   trust signal (status "Released")
--paper-muted   40 8% 38%              muted text on paper
--graphite-muted 40 6% 65%              muted text on graphite
```

**Rust is the single accent.** It marks: section ornaments, list
markers, H1 periods in the wordmark, "view details" links, Released
status dots (actually navy), hover states, numerals. Navy is for
"Released" dots. No purple, no cyan, no gradients-on-white.

### Typography

| Class | Role | Font |
|---|---|---|
| `atelier-display` | Headings, wordmarks, pull-quote bodies | Newsreader (serif, optical-sized) |
| `atelier-body` | Body copy | Hanken Grotesk |
| `atelier-mono` | Metadata, datestamps, code, stats | JetBrains Mono |
| `atelier-eyebrow` | Small caps section labels | Mono, `letter-spacing: 0.18em` |
| `atelier-numerals` | Year stamps, index numbers | Newsreader with tabular lining numerals |

- Keep Newsreader for display only. Body is Hanken Grotesk.
- Mono is **JetBrains Mono with ss01 / ss02 / cv01 variants** for
  stylised forms. Don't use for UI chrome — only data/micro-type.

### Ornament language

- **Rust diamond** (5×5, rotated 45°): unordered list markers, section
  dividers default variant, chapter break in HR, terminal end-of-article
  mark. Do not use dashes / bullets / dots as list markers.
- **Hairline rules** (`h-px bg-[hsl(var(--ink))]/15` or `/10`): section
  separators within paper, year marker rule on /log.
- **Codex panel** (`.codex-panel`): graphite card with rust 2px top
  bar + three paper-tint dots. Used for all code blocks.

### Layout primitives (`components/atelier/*`)

- `AtelierShell` — header + footer + locale switch, persists across
  page transitions via `view-transition-name`.
- `AtelierAppHero` — editorial masthead for each `/apps/[slug]`.
- `AtelierAppSection` + `AtelierFeatureGrid` + `AtelierSpecList` —
  12-col editorial section template used across app detail pages.
- `Datestamp` — `[YYYY.MM.DD]` JetBrains Mono in navy.
- `TagRow` — mono list with rust `#` marks.
- `AtelierLoader` — Motion press-setting loading screen.
- `SmartLink` — **use this for every internal navigation link.**
  Dispatches to `Link` from `next-view-transitions` for internal routes,
  raw `<a>` for `http(s):`, `mailto:`, `tel:`, `#hash`, and file
  downloads (`.pdf`, `.zip`, `.ics`, etc.).

### Blog / MDX (`lib/mdx-components-atelier.tsx`)

- Heading rhythm: generous `mt`, tight `mb`. `mb-5` under H1, `mb-4`
  under H2, `mb-3` under H3.
- Body: `atelier-body text-[1.05rem] leading-[1.65] mb-[1.35em]`.
- First paragraph after the article start auto-renders larger
  (`1.13rem`) via `.atelier-prose > :first-child + p` (handled in
  `globals.css`). Don't manually wrap ledes.
- Blockquotes: oversized rust open-quote glyph pulled into margin,
  Newsreader italic body. No left border.
- `SectionDivider` has three variants (`default`, `gradient`, `dots`);
  each accepts an optional `label` for "§ Part II" style markers.
- `TableOfContents` renders with proper null guard — always pass an
  array, but an empty/undefined value renders nothing rather than crashing.
- `BlogImage` + `TweetEmbed` are fully atelier-ported. Never reintroduce
  the dark cyberpunk styling.

### View transitions

- Wired via `next-view-transitions` (`ViewTransitions` wraps
  `<html>` in `app/layout.tsx`).
- Keyframes in `globals.css`: outgoing page dims + drifts up with a
  paper-like blur; incoming rises 10px from below + inks in from
  blur. Total ~360ms. `prefers-reduced-motion` disables.
- **Header + footer use `view-transition-name`** (`atelier-header`,
  `atelier-footer`) so they sit still while only the content region
  animates. Do not remove these.
- Every internal link must be routed through `SmartLink` (or `Link`
  from `next-view-transitions` directly) for the client-side
  transition to fire. Raw `<a href="/internal">` does a hard nav and
  misses the JS hook (cross-document `@view-transition: navigation
  auto` only fires in Chromium 111+ / Safari 18+).

---

## 5. Programmatic SEO (pSEO)

Every new page or metadata edit must pass these checks.

### Metadata (per page)

```ts
export const metadata: Metadata = {
  title: '...',                     // unique, keyword-led, <60 chars
  description: '...',               // 150-160 chars, benefit-led
  openGraph: {
    title, description,
    url: 'https://mickel.tech/...',
    siteName: 'Mickel Tech',
    locale: 'en_US' | 'de_CH',
    type: 'website' | 'article' | 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title, description,
  },
  alternates: {
    canonical: 'https://mickel.tech/...',   // absolute, not relative
    languages: {
      en: 'https://mickel.tech/...',
      de: 'https://mickel.tech/de/...',
      'x-default': 'https://mickel.tech/...',   // points to EN
    },
  },
};
```

Rules:
- **Canonical URLs must be absolute.** No `/case-studies/foo`, always
  `https://mickel.tech/case-studies/foo`.
- **x-default hreflang is required** on any page with EN + DE versions.
  It points to the EN URL.
- **No em-dashes (`—`) in body copy**. Gordon's rule. Titles ok but
  prefer `--` for consistency. Descriptions and body: `--`, commas,
  parentheses, or semicolons.
- **Descriptions 150-160 chars** — Google truncates beyond that. Don't
  stuff keywords past the first sentence.
- OG / Twitter blocks on every public page (not noindex pages like
  `/lead-magnets/[slug]`).

### Structured data (JSON-LD)

Helpers in `lib/json-ld.tsx`:

| Helper | Use on |
|---|---|
| `personSchema()` | Homepage, `/about`, any page where Gordon is the subject |
| `professionalServiceSchema()` | Homepage only |
| `serviceSchema({...})` | Service pages (/sdlc, /expert, /ai-transformation) — one per offer |
| `articleSchema(post)` | Every `/log/[slug]` |
| `blogSchema({...})` | `/log` index |
| `softwareAppSchema({...})` | Every `/apps/[slug]` |
| `itemListSchema({...})` | Index pages with lists (`/apps`, `/case-studies`) |
| `caseStudySchema({...})` | `/case-studies/[id]` — renders as Article with `about` → client org |
| `faqSchema([...])` | Pages with FAQ sections (for rich results) |
| `breadcrumbSchema([...])` | **Every page**, always |

`softwareAppSchema.offer` is optional and typed (`'commercial' | 'free' |
{ price, currency }`). Do not mark commercial apps (DocIQ Sphere/Shield)
as free — that disqualifies them from rich results. Default to
`'commercial'` if unsure.

### Canonical policy for /log/[slug]

- Default: **self-canonical** (`https://mickel.tech/log/{slug}`).
- Exception: if the post frontmatter sets `canonicalSource: 'medium'`
  or `'substack'` **and** provides the corresponding `mediumUrl` /
  `substackUrl`, canonical points to the external mirror. This is used
  when Gordon cross-posts and wants the external platform to receive
  ranking credit.
- Do not silently change this behaviour. If you think a post should
  self-canonicalize, check frontmatter, don't rewrite the logic.

### Sitemap (`app/sitemap.ts`)

- Auto-generated at build. Includes: translated pages (EN + DE pairs
  with hreflang + x-default), case study details (EN + DE), log
  posts, log tags, app detail pages, bench evals, `/log`, `/apps`,
  `/gmickel-bench`.
- Case study details were once missing; they are now emitted via
  `CASE_STUDIES.flatMap(...)`. If you add a new content type with
  public detail pages, emit them here too with appropriate
  `priority`, `changeFrequency`, and (if translated) hreflang
  alternates via the `i18nAlternates(path)` helper.

### OG images

- Every top-level route has an `opengraph-image.tsx` using the Next.js
  OG route handler.
- `articleSchema` defaults `image` to `/log/{slug}/opengraph-image` so
  Article rich-results always have one. If a post ships a custom cover,
  pass it as `image` to override.

---

## 6. Copy rules (Gordon's voice)

### Global

- **No em-dashes in body copy.** Use `--`, commas, semicolons, or
  parentheses. Metadata titles may use `--`; never `—`.
- **No eszett (ß) in German.** Swiss orthography: always `ss`.
  `Strasse`, not `Straße`. `grösser`, not `größer`.
- **Proper umlauts required** in all German text. `ü ö ä`, never
  `ue / oe / ae` substitutions. `für` not `fuer`.
- **German quotes**: always `„…"` (low-9 open + left-double-high
  close, U+201E + U+201C). Never mix `„…"` (straight close) or use
  `"…"` / `«…»` in body copy.
- **No internal process rules in customer copy.** Never say
  "anonymised where confidentiality applies", "I don't use em-dashes",
  "I vouch for my own work" -- these read as meta-disclaimers and
  undermine credibility. Apply rules silently.
- **Outcomes, not tasks.** "20% cycle-time reduction in 90 days" beats
  "implement CI/CD pipelines". Applies to every service card and
  offer description.

### Terminology (consistency across pages)

| Concept | Use | Do not use |
|---|---|---|
| Gordon's methodology | **Agentic PDLC** / **Agentische PDLC** | SDLC, Agentic SDLC, KI-SDLC |
| The blog surface | **Field notes** (EN) / **Notizen** (DE) | Writing, Schriften, Blog, Posts |
| Intro call | **30-Minuten-Erstgespräch** (DE) / **30-minute discovery call** (EN) | "Discovery-Call" (half-English hybrid in DE) |
| Independent expert role | **Parteigutachter** / **Parteigutachten** | "court-appointed expert" (he is not) |
| Named acceptance expert | **Werkvertrags-Gutachter** / **Werkvertrags-Gutachten** | "arbitrator" |
| AI transformation | **KI-Transformation** | "AI-Transformation", "AI Transformation" (German) |
| Case studies | **Fallstudien** | "Case Studies" in German |
| Legal AI | **Legal-AI** (consistent) | "Legal-KI" in some places and "Legal AI" in others |
| Context layers (external copy) | **"context layers for knowledge work"** | "MCP tooling" / "MCP servers" externally |

### Brand names

- Gordon's products: **DocIQ Sphere**, **DocIQ Shield**, **DocIQ 1.0**,
  **FlowNext**, **Flow**, **GNO**, **sheets-cli**, **outlookctl**,
  **SmartTrim**. Capitalisation matters.
- Employer: **Growth Factors** (not "Growth Factors Global").
- PE context: Gordon serves **BU portcos** (Bregal Unternehmerkapital).
  Sagemount-side work via Ben Willis / Curt Witte is occasional, not
  the mainline.

---

## 7. Lead magnets

- Registry: `lib/lead-magnets.ts`. Each entry has EN + DE fields
  (`title / titleDE`, `subtitle / subtitleDE`, `audience /
  audienceDE`). Rendered via `components/sections/atelier/lead-magnet.tsx`
  which picks locale-appropriate fields.
- PDFs live in `/public/lead-magnets/*.pdf`. HTML previews at
  `/lead-magnets/[slug]`. Preview pages use dedicated print CSS at
  `app/lead-magnets/print.css`.
- PDFs are English only by design (dual-language doubles production
  cost with no demand signal). Only the card surface is localised.
- Regenerate PDFs with headless Chrome:
  ```
  /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
    --headless --disable-gpu --print-to-pdf-no-header \
    --print-to-pdf=PATH URL --virtual-time-budget=5000
  ```
- Print CSS uses padding-based page flow (not flexbox + min-height),
  which would create orphan blank pages at A4 boundary.

---

## 8. Build / deploy

- **Local build**: `bun run build` (fast, matches what Turbopack does
  in dev). Must be clean before commit.
- **Vercel**: runs `pnpm install --frozen-lockfile` then `next build`
  under Turbopack.
- **pnpm-lock.yaml is frozen on Vercel.** If you add a dep via
  `bun add <pkg>`, package.json changes but pnpm-lock.yaml doesn't,
  and Vercel fails with `ERR_PNPM_OUTDATED_LOCKFILE`. Always run:
  ```
  npx pnpm@9 install
  ```
  after adding/removing deps. Commit **both** lockfiles (`bun.lock`
  and `pnpm-lock.yaml`) and `package.json` together.
- **Pre-commit hook**: lefthook runs `bun x ultracite fix` on staged
  files. Fails the commit on lint errors. Fix them; don't `--no-verify`.
- **Biome config is the source of truth for style.** No Prettier, no
  ESLint. Run `bun x biome check --write` to auto-fix before commit.

### Biome quirks you will hit

- `useBlockStatements`: `if (x) return y;` → `if (x) { return y; }`.
- `noNestedTernary`: replace with helper function or early returns.
- `useTopLevelRegex`: hoist `const MY_RE = /.../;` above the function.
- `noBarrelFile`: DE shadow routes used to trigger this. They're gone;
  if you recreate them, add `// biome-ignore lint/performance/noBarrelFile`.
- `noUnknownTypeSelector`: `::view-transition-*` pseudo-elements trip
  it. Suppress inline with `/* biome-ignore lint/... */`.
- `noArrayIndexKey`: use stable id, not index, as React key.

---

## 9. Dev workflow

- `bun run dev` → port 3355. If the server acts stuck (stale bundles,
  unresponsive HMR), kill it and restart. Turbopack occasionally gets
  wedged after large refactors; a fresh process resolves it.
- Visual QA with `agent-browser`. Use `--session <name>` for parallel
  sessions and `set viewport W H` for mobile widths (390×844 for iPhone).
- `frontend-design` plugin (user-level) is the source of truth for
  visual judgement calls. Invoke via the Skill tool when aesthetic
  decisions are needed.

---

## 10. Traps (things that went wrong, so you don't repeat them)

1. **DE shadow routes for EN-only content.** We tried `/de/log` and
   `/de/apps` re-exporting the EN pages. Body was identical English;
   only chrome swapped. Google would have flagged duplicate content.
   Reverted. If you want German posts, translate the content for real
   (new MDX with DE body + `hreflang` pair). Don't chrome-swap.
2. **bun add without syncing pnpm-lock.yaml.** Vercel fails. Always
   run `npx pnpm@9 install` after adding deps.
3. **Turbopack dev caching.** New files returning 404, edited files
   showing stale output, `TypeError: Cannot read property 'map'` on
   MDX components that look correct on disk. Kill + restart the dev
   server.
4. **Cursor pointer on nested spans inside links.** The
   `.atelier-surface *` wildcard forces `cursor: auto` on every
   descendant. We explicitly enumerate `.atelier-surface a *`,
   `.atelier-surface button *`, etc. in `globals.css` so the pointer
   propagates. Do not remove those selectors.
5. **View-transition jarring on /log vs /apps.** Was not a transition
   bug; was a content-rhythm bug. /log used a 6rem "2026" year
   numeral that crash-landed in the viewport. Matched /apps rhythm
   (masthead → "Archive" eyebrow + lede → small inline year marker).
   If two pages feel different despite shared shell, look at
   first-screen content parity.
6. **Mixed German quote pairs (`„…"`).** Content writers insert the
   straight ASCII `"` as close-quote. Sweep with a Python script
   (utf-8 aware); avoid `perl -i -pe` which mojibakes umlauts.
7. **Shadcn/ui dead code.** 50+ unused components installed by
   shadcn init. Pruned. If you add a shadcn primitive, verify it's
   actually used before merging.
8. **Internal meta rules in customer copy.** "Anonymised where
   confidentiality applies" on /de/case-studies was a dead giveaway.
   Swept. Keep rules internal; let the work speak.
9. **Canonical URLs going off-site.** `/log/[slug]` defaulted
   canonical to `medium.com/...` when `canonicalSource === 'medium'`.
   If Gordon posts on mickel.tech first, this de-indexes his own
   page. The logic is preserved (he may cross-post), but verify
   frontmatter intent before shipping a new post.
10. **"Schriften" as nav label for writing.** Reads as old-fashioned
    / literary. Use **"Notizen"** everywhere (nav, footer, eyebrow
    labels). More current, aligns with "Field notes".
11. **Purple-gradient-on-white AI-slop look.** Never. The atelier
    uses paper cream + ink + single rust accent. Resist the urge to
    add a second accent colour.

---

## 11. Directory map

```
app/
  layout.tsx                # root metadata + fonts + ViewTransitions
  sitemap.ts                # i18n alternates + all route types
  robots.ts
  globals.css               # atelier tokens, prose rules, transitions
  page.tsx                  # EN home
  de/page.tsx               # DE home
  sdlc / expert / ai-transformation / case-studies / about / imprint / privacy
    + /de mirrors for each
  log/                      # blog (EN-only)
    page.tsx                # index with Blog schema
    [slug]/page.tsx         # post detail
    tag/[tag]/page.tsx
    layout.tsx              # <>{children}</>; shell provided per page
  apps/                     # product catalogue (EN-only)
    page.tsx                # index with ItemList schema
    [each product]/page.tsx
  gmickel-bench/            # legacy cyberpunk shell; do not port
  lead-magnets/[slug]/      # gated PDF landing pages; noindex
components/
  layout/
    atelier-shell.tsx       # primary shell + locale + footer
    atelier-locale-switcher.tsx
    shell.tsx               # legacy, /gmickel-bench only
    workshop-banner.tsx     # subway-map handoff into legacy shell
  atelier/                  # atelier primitives
    app-hero.tsx app-section.tsx datestamp.tsx loader.tsx
    smart-link.tsx tag-row.tsx
  blog/                     # atelier-compatible MDX atoms
    blog-image.tsx section-divider.tsx table-of-contents.tsx tweet-embed.tsx
  sections/atelier/*        # per-route section components, all locale-aware
  ui/                       # pruned shadcn set — only what's actually used
lib/
  apps.ts                   # single source of truth for /apps
  case-studies.ts           # single source of truth for /case-studies
  lead-magnets.ts           # PDF registry with EN + DE fields
  posts.ts                  # MDX loader with gray-matter + react cache()
  bench-evals.ts bench-data.ts bench-models.ts
  json-ld.tsx               # schema helpers — use these, don't inline
  mdx-components-atelier.tsx
  mdx-options.ts
  tag-utils.ts queryClient.ts utils.ts
  og-atelier.tsx            # shared bits for opengraph-image routes
content/posts/*.mdx         # blog posts
public/
  lead-magnets/*.pdf        # generated PDFs
  flow/ gno/ dociq/ sphere/ shield/ etc — product assets
  portraits/gordon-mickel.jpg
```

---

## 12. Non-goals / what not to do

- Don't bring back Framer Motion AnimatePresence for page transitions.
  We use native + `next-view-transitions`. Simpler, no client-boundary
  tax.
- Don't add a second accent colour. Rust carries everything.
- Don't add German translations of blog posts unless you're translating
  the body. Chrome-only localisation = duplicate content.
- Don't create DE versions of English-native sections (`/log`, `/apps`,
  `/gmickel-bench`).
- Don't use `<a href="/internal">` for internal navigation. `SmartLink`
  or `Link` from `next-view-transitions` — otherwise the view transition
  is lost.
- Don't introduce `dayjs`, `moment`, or another date lib. `date-fns`
  is present; prefer `Intl.DateTimeFormat` for locale-aware output.
- Don't add `<html>`-level inline styles. Design tokens go through
  `globals.css`.
- Don't create files in `/app` that aren't routes. Library code lives
  in `lib/`, shared UI in `components/`.

---

## 13. When a page is ready to ship

Checklist (applies to every new/changed public route):

- [ ] Title unique, under 60 chars (excluding ` | Mickel Tech`).
- [ ] Description 150-160 chars, keyword-led, benefit-framed.
- [ ] Canonical absolute; hreflang alternates (EN + DE + x-default) if
      translated.
- [ ] OG block (title, description, url, siteName, locale, type).
- [ ] Twitter block (summary_large_image, title, description).
- [ ] JSON-LD: breadcrumb + appropriate content schema (Article,
      SoftwareApplication, Service, CaseStudy, etc.).
- [ ] Single H1; H2/H3 hierarchy respected.
- [ ] Every `<Image>` has meaningful `alt` text.
- [ ] Internal links use `SmartLink` or `Link` from
      `next-view-transitions`.
- [ ] If a new route type, emit it into `app/sitemap.ts`.
- [ ] If translated, add the path to `DE_EQUIVALENT_PATHS` in
      `atelier-locale-switcher.tsx`.
- [ ] `bun run build` passes; `bun x biome check` passes.
- [ ] If you added a dep: `npx pnpm@9 install` and commit
      `pnpm-lock.yaml` with `bun.lock` and `package.json`.
- [ ] Visual QA: desktop + mobile (390×844) via agent-browser.
- [ ] German copy (if any): no ß, real umlauts, no em-dashes in body,
      `„…"` quotes, no internal rules in copy.

When all of those are true, commit. If not, fix before pushing.
