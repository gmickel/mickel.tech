# Blog (Log) SEO Rules

## Adding New Blog Posts

Posts live in `content/posts/` as `.mdx` files.

### Required Frontmatter

```yaml
---
title: "Post Title"
summary: "1-2 sentence description for SEO"
publishedAt: "2025-01-15"
tags:
  - AI Coding
  - Claude Code
status: published  # or "draft" to hide
---
```

### Optional Frontmatter

```yaml
mediumUrl: "https://medium.com/..."      # Mirror link
substackUrl: "https://substack.com/..."  # Mirror link
canonicalSource: native | medium | substack  # Where canonical points
```

### Tag Rules

- Tags are case-sensitive for display but slugified for URLs
- `slugifyTag("AI Coding")` → `ai-coding`
- Collision detection: "AI Coding" and "ai-coding" will error at build
- Always use consistent casing across posts

### SEO Checklist for New Posts

1. **Frontmatter complete** — title, summary, publishedAt, tags, status
2. **Tags link to tag pages** — handled automatically via `slugifyTag()`
3. **JSON-LD** — `articleSchema()` + `breadcrumbSchema()` added automatically
4. **OG image** — generated via `opengraph-image.tsx`
5. **Sitemap** — auto-included via `app/sitemap.ts`

---

## Tag Pages (`/log/tag/[tag]`)

Auto-generated from post tags. No manual creation needed.

### What Happens Automatically

- `generateStaticParams()` builds pages for all unique tag slugs
- `getTagDisplayName()` retrieves original casing for display
- `getPostsByTag()` returns all posts with that tag
- JSON-LD breadcrumbs: Home → Log → Tag Name
- OG metadata with description and canonical URL

### Adding New Tag Categories

Just use new tags in post frontmatter. The tag index rebuilds at build time.

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/posts.ts` | `getAllPosts()`, `getTagIndex()`, `getPostsByTag()` |
| `lib/tag-utils.ts` | `slugifyTag()` |
| `app/log/page.tsx` | Blog listing with clickable tags |
| `app/log/[slug]/page.tsx` | Post detail with JSON-LD |
| `app/log/tag/[tag]/page.tsx` | Tag listing page |
| `app/log/tag/[tag]/opengraph-image.tsx` | OG image for tag pages |

---

## Common Issues

**Linter removes imports**: Add import AND usage in same edit, or use `Write` to rewrite file.

**Tag collision error**: Two tags slugify to same URL. Normalize tags in frontmatter.

**Post not showing**: Check `status: published` in frontmatter.
