import type { Metadata } from 'next';
import Link from 'next/link';

import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'System Log',
  description:
    'System log of AI SDLC, platform and agentic work: short, precise write-ups from real mandates rather than theory.',
  openGraph: {
    title: 'System Log – Mickel Tech',
    description:
      'Latest writing on AI SDLC, platforms and operational agents from Gordon Mickel.',
    type: 'website',
    url: 'https://mickel.tech/log',
  },
};

function formatDate(iso: string): string {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  return date.toLocaleDateString('en-CH', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default async function LogIndexPage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-32 md:px-0">
      <header className="mb-12 space-y-4 border-white/10 border-b pb-8">
        <p className="font-mono text-[11px] text-primary tracking-[0.25em]">
          SYSTEM_LOG
        </p>
        <h1 className="font-bold text-4xl text-white md:text-5xl">
          System log: AI SDLC, platforms and agents in the field
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Short, precise notes from actual mandates—what worked, what broke and
          patterns that repeat across AI SDLC, platforms and operational agents.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="font-mono text-muted-foreground text-sm">
          // No log entries yet. First posts will land soon.
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              className="group interactive border border-white/10 bg-background/70 p-6 transition-all duration-300 hover:border-primary/60 hover:bg-background/90"
              key={post.slug}
            >
              <div className="flex items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground uppercase">
                <span>{formatDate(post.publishedAt)}</span>
                <div className="flex items-center gap-3">
                  <span className="text-primary">LOG ENTRY</span>
                  {post.canonicalSource && (
                    <span className="text-muted-foreground text-xs">
                      SOURCE: {post.canonicalSource.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 space-y-3">
                <h2 className="font-bold text-white text-xl leading-snug md:text-2xl">
                  <Link href={`/log/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.summary ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.summary}
                  </p>
                ) : null}
                {post.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        className="inline-flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase"
                        key={`${post.slug}-${tag}`}
                      >
                        # {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-primary transition-colors group-hover:text-white"
                  href={`/log/${post.slug}`}
                >
                  VIEW LOG ENTRY
                  <span aria-hidden="true">↗</span>
                </Link>
                {post.mediumUrl ? (
                  <Link
                    className="font-mono text-[11px] text-muted-foreground hover:text-primary"
                    href={post.mediumUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    MIRROR ON MEDIUM
                  </Link>
                ) : null}
                {post.substackUrl ? (
                  <Link
                    className="font-mono text-[11px] text-muted-foreground hover:text-primary"
                    href={post.substackUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    MIRROR ON SUBSTACK
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
