import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Datestamp from '@/components/atelier/datestamp';
import TagRow from '@/components/atelier/tag-row';
import AtelierShell from '@/components/layout/atelier-shell';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';
import { getAllPosts, type PostMeta } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Field notes',
  description:
    'Dispatches from the workshop on agentic PDLC, platforms and AI agents. Short, precise, from real mandates.',
  openGraph: {
    title: 'Field notes · Mickel Tech',
    description:
      'Dispatches from the workshop on agentic PDLC, platforms and AI agents.',
    type: 'website',
    url: 'https://mickel.tech/log',
  },
  alternates: {
    canonical: 'https://mickel.tech/log',
    types: {
      'application/rss+xml': 'https://mickel.tech/rss',
    },
  },
};

type Group = { year: number; posts: PostMeta[] };

function groupByYear(posts: readonly PostMeta[]): Group[] {
  const byYear = new Map<number, PostMeta[]>();
  for (const p of posts) {
    const y = new Date(p.publishedAt).getUTCFullYear();
    const arr = byYear.get(y) ?? [];
    arr.push(p);
    byYear.set(y, arr);
  }
  return Array.from(byYear.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({ year, posts: items }));
}

export default async function LogIndexPage() {
  const posts = await getAllPosts();
  const groups = groupByYear(posts);

  return (
    <AtelierShell>
      <JsonLd data={breadcrumbSchema([{ name: 'Field notes', url: '/log' }])} />

      {/* ---- Masthead ---- */}
      <section aria-labelledby="log-heading" className="atelier-paper relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-14 md:px-10 md:pt-32 md:pb-20">
          <p className="atelier-eyebrow text-[hsl(var(--rust))]">
            01 / Writing
          </p>
          <h1
            className="atelier-display mt-4 font-medium text-[clamp(2.25rem,1.6rem+3vw,4rem)] text-[hsl(var(--ink))] leading-[1.02] tracking-[-0.02em]"
            id="log-heading"
          >
            Field notes.
          </h1>
          <p className="atelier-body mt-5 max-w-[58ch] text-[1.125rem] text-[hsl(var(--ink))]/80 leading-[1.55]">
            Dispatches from the workshop. Short, precise, from real mandates.
            What worked, what broke, and the patterns that keep showing up.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-[hsl(var(--paper-muted))]">
            <span className="atelier-mono text-[11px] uppercase tracking-[0.14em]">
              {posts.length} entr{posts.length === 1 ? 'y' : 'ies'}
            </span>
            <span
              aria-hidden="true"
              className="h-3 w-px bg-[hsl(var(--ink))]/20"
            />
            <Link
              className="atelier-mono text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
              href="/rss"
            >
              RSS feed →
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Archive by year ---- */}
      <section
        aria-label="Archive"
        className="atelier-paper border-[hsl(var(--ink))]/10 border-t"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-24 md:px-10 md:pt-20 md:pb-32">
          <header className="mb-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2">
              <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                Archive
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <p className="atelier-body max-w-[60ch] text-[hsl(var(--ink))]/72">
                Every note, newest first. Years below act as section marks; the
                rust numeral in the margin runs the sequence.
              </p>
            </div>
          </header>

          {groups.map((group, gi) => (
            <div
              className={
                gi === 0
                  ? 'border-[hsl(var(--ink))]/10 border-t pt-10 md:pt-12'
                  : 'mt-16 border-[hsl(var(--ink))]/10 border-t pt-10 md:mt-24 md:pt-12'
              }
              key={group.year}
            >
              <header className="mb-8 grid grid-cols-12 items-baseline gap-6">
                <div className="col-span-12 md:col-span-2">
                  <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                    Year
                  </p>
                </div>
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-10">
                  <h2 className="atelier-numerals font-medium text-[clamp(1.75rem,1.3rem+1vw,2.4rem)] text-[hsl(var(--ink))] leading-none tracking-[-0.01em]">
                    {group.year}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-[hsl(var(--ink))]/12"
                  />
                  <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
                    {group.posts.length} entr
                    {group.posts.length === 1 ? 'y' : 'ies'}
                  </span>
                </div>
              </header>
              <ol className="divide-y divide-[hsl(var(--ink))]/10 border-[hsl(var(--ink))]/10 border-y">
                {group.posts.map((post, i) => (
                  <LogEntry i={i + 1} key={post.slug} post={post} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </AtelierShell>
  );
}

function LogEntry({ post, i }: { post: PostMeta; i: number }) {
  const idx = String(i).padStart(2, '0');
  return (
    <li className="group">
      <Link
        className="block py-8 transition-colors hover:bg-[hsl(var(--ink))]/[0.025]"
        href={`/log/${post.slug}`}
      >
        <article className="grid grid-cols-12 gap-6 px-0 md:gap-8">
          {/* Contact-sheet margin numeral */}
          <div className="col-span-2 md:col-span-1">
            <span className="atelier-numerals block font-medium text-[2.25rem] text-[hsl(var(--rust))] leading-none md:text-[2.75rem]">
              {idx}
            </span>
          </div>

          {/* Meta + datestamp */}
          <div className="col-span-10 md:col-span-3">
            <Datestamp iso={post.publishedAt} />
            {post.tags?.length ? (
              <div className="mt-2.5">
                <TagRow tags={post.tags} />
              </div>
            ) : null}
          </div>

          {/* Headline + dek */}
          <div className="col-span-12 md:col-span-7">
            <h3 className="atelier-display font-medium text-[clamp(1.3rem,1.05rem+0.85vw,1.75rem)] text-[hsl(var(--ink))] leading-[1.2] transition-colors group-hover:text-[hsl(var(--rust))]">
              {post.title}
            </h3>
            {post.summary ? (
              <p className="atelier-body mt-3 max-w-[52ch] text-[0.975rem] text-[hsl(var(--ink))]/72 leading-[1.55]">
                {post.summary}
              </p>
            ) : null}
            <span className="atelier-mono mt-4 inline-flex items-center gap-1.5 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em] transition-colors group-hover:text-[hsl(var(--ink))]">
              Read entry
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </div>

          {/* Canonical source */}
          <div className="col-span-12 md:col-span-1 md:text-right">
            {post.canonicalSource && post.canonicalSource !== 'native' ? (
              <span className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                via {post.canonicalSource}
              </span>
            ) : null}
          </div>
        </article>
      </Link>
    </li>
  );
}
