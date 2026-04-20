import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from 'next-view-transitions';
import Datestamp from '@/components/atelier/datestamp';
import TagRow from '@/components/atelier/tag-row';
import AtelierShell from '@/components/layout/atelier-shell';
import { articleSchema, breadcrumbSchema, JsonLd } from '@/lib/json-ld';
import { mdxComponentsAtelier } from '@/lib/mdx-components-atelier';
import { mdxOptions } from '@/lib/mdx-options';
import { getAllPosts, getPostBySlug, getPublishedSlugs } from '@/lib/posts';

type ParamsPromise = Promise<{ slug: string }>;

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const description =
    post.summary ??
    'A field note from Gordon Mickel on agentic PDLC, platforms and AI agents.';

  const url = `https://mickel.tech/log/${post.slug}`;

  let canonical: string;
  if (post.canonicalSource === 'medium' && post.mediumUrl) {
    canonical = post.mediumUrl;
  } else if (post.canonicalSource === 'substack' && post.substackUrl) {
    canonical = post.substackUrl;
  } else {
    canonical = `/log/${slug}`;
  }

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url,
      publishedTime: post.publishedAt,
      authors: ['Gordon Mickel'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  };
}

const WORD_SPLIT_RE = /\s+/;

function estimateReadTime(content: string): number {
  const words = content.split(WORD_SPLIT_RE).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export default async function LogPostPage({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const all = await getAllPosts();
  const index = all.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null;
  const readMin = estimateReadTime(post.content);

  return (
    <AtelierShell>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Field notes', url: '/log' },
          { name: post.title, url: `/log/${post.slug}` },
        ])}
      />

      {/* ---- Post masthead ---- */}
      <section className="atelier-paper relative">
        <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-6 px-6 pt-24 pb-10 md:gap-8 md:px-10 md:pt-32 md:pb-14">
          <div className="col-span-12 md:col-span-2">
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">Entry</p>
          </div>
          <header className="col-span-12 md:col-span-10">
            <nav
              aria-label="Breadcrumb"
              className="atelier-mono mb-5 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.12em]"
            >
              <Link
                className="transition-colors hover:text-[hsl(var(--ink))]"
                href="/log"
              >
                Field notes
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-[hsl(var(--ink))]">Post</span>
            </nav>
            <h1 className="atelier-display font-medium text-[clamp(2rem,1.4rem+3vw,3.75rem)] text-[hsl(var(--ink))] leading-[1.05] tracking-[-0.02em]">
              {post.title}
            </h1>
            {post.summary ? (
              <p className="atelier-display mt-6 max-w-[62ch] font-[400] text-[clamp(1.15rem,1rem+0.5vw,1.45rem)] text-[hsl(var(--ink))]/80 italic leading-[1.4]">
                {post.summary}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Datestamp iso={post.publishedAt} prefix="Filed" />
              <span
                aria-hidden="true"
                className="h-3 w-px bg-[hsl(var(--ink))]/20"
              />
              <span className="atelier-mono text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                {readMin} min read
              </span>
              {post.canonicalSource && post.canonicalSource !== 'native' ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-3 w-px bg-[hsl(var(--ink))]/20"
                  />
                  <span className="atelier-mono text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                    via {post.canonicalSource}
                  </span>
                </>
              ) : null}
            </div>
            {post.tags?.length ? (
              <div className="mt-5">
                <TagRow hrefPrefix="/log/tag" tags={post.tags} />
              </div>
            ) : null}
          </header>
        </div>
      </section>

      {/* ---- Body ---- */}
      <section className="atelier-paper border-[hsl(var(--ink))]/10 border-t">
        <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-6 px-6 pt-12 pb-20 md:gap-8 md:px-10 md:pt-16 md:pb-24">
          {/* Left rail */}
          <aside className="col-span-12 md:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div>
                <p className="atelier-eyebrow mb-2 text-[hsl(var(--paper-muted))]">
                  Filed
                </p>
                <Datestamp iso={post.publishedAt} />
              </div>
              {post.tags?.length ? (
                <div>
                  <p className="atelier-eyebrow mb-2 text-[hsl(var(--paper-muted))]">
                    Tags
                  </p>
                  <TagRow
                    className="flex-col items-start gap-2"
                    hrefPrefix="/log/tag"
                    tags={post.tags}
                  />
                </div>
              ) : null}
              <div>
                <p className="atelier-eyebrow mb-2 text-[hsl(var(--paper-muted))]">
                  Elsewhere
                </p>
                <ul className="atelier-mono space-y-2 text-[11px] uppercase tracking-[0.1em]">
                  {post.mediumUrl ? (
                    <li>
                      <a
                        className="text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--rust))]"
                        href={post.mediumUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Medium mirror →
                      </a>
                    </li>
                  ) : null}
                  {post.substackUrl ? (
                    <li>
                      <a
                        className="text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--rust))]"
                        href={post.substackUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Substack mirror →
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <Link
                      className="text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--rust))]"
                      href="/rss"
                    >
                      RSS feed →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Reading column */}
          <article className="col-span-12 md:col-span-9 md:col-start-3">
            <div className="atelier-prose max-w-[68ch]">
              <MDXRemote
                components={mdxComponentsAtelier}
                // biome-ignore lint/suspicious/noExplicitAny: MDX types are complex
                options={mdxOptions as any}
                source={post.content}
              />
            </div>
          </article>
        </div>
      </section>

      {/* ---- Prev / Next rail ---- */}
      {prev || next ? (
        <section className="atelier-paper border-[hsl(var(--ink))]/10 border-t">
          <nav
            aria-label="Adjacent entries"
            className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20"
          >
            <p className="atelier-eyebrow mb-8 text-[hsl(var(--paper-muted))]">
              Adjacent entries
            </p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
              {prev ? (
                <Link
                  className="group block border-[hsl(var(--ink))]/10 border-t pt-6"
                  href={`/log/${prev.slug}`}
                >
                  <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                    ← Previous
                  </span>
                  <h3 className="atelier-display mt-3 font-medium text-[1.25rem] text-[hsl(var(--ink))] leading-snug transition-colors group-hover:text-[hsl(var(--rust))]">
                    {prev.title}
                  </h3>
                  <div className="mt-3">
                    <Datestamp iso={prev.publishedAt} />
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  className="group block border-[hsl(var(--ink))]/10 border-t pt-6 md:text-right"
                  href={`/log/${next.slug}`}
                >
                  <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                    Next →
                  </span>
                  <h3 className="atelier-display mt-3 font-medium text-[1.25rem] text-[hsl(var(--ink))] leading-snug transition-colors group-hover:text-[hsl(var(--rust))]">
                    {next.title}
                  </h3>
                  <div className="mt-3 md:flex md:justify-end">
                    <Datestamp iso={next.publishedAt} />
                  </div>
                </Link>
              ) : null}
            </div>
          </nav>
        </section>
      ) : null}
    </AtelierShell>
  );
}
