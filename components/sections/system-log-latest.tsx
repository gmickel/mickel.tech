import Link from 'next/link';

import { getLatestPosts } from '@/lib/posts';

export default async function SystemLogLatest() {
  const posts = await getLatestPosts(3);

  if (!posts.length) {
    return null;
  }

  const formatDate = (iso: string): string => {
    const date = new Date(iso);

    if (Number.isNaN(date.getTime())) {
      return iso;
    }

    return date.toLocaleDateString('en-CH', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  return (
    <section
      className="relative border-white/5 border-y bg-black/60 px-6 py-24 md:px-20"
      id="log"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-[11px] text-primary tracking-[0.25em]">
              SYSTEM_LOG // LATEST ENTRIES
            </p>
            <h2 className="font-bold text-3xl text-white md:text-4xl">
              Recent signals from the field
            </h2>
            <p className="max-w-xl text-muted-foreground text-sm">
              Short, technical dispatches on AI SDLC, platforms and agents from
              real work rather than theory.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-end font-mono text-primary text-xs hover:text-white"
            href="/log"
          >
            [ VIEW FULL LOG ]
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              className="group interactive relative flex flex-col justify-between border border-white/10 bg-background/70 p-6 transition-all duration-300 hover:border-primary/60 hover:bg-background/90"
              key={post.slug}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="text-primary">• LOG ENTRY</span>
                </div>
                <h3 className="font-bold text-lg text-white leading-snug">
                  <Link
                    className="text-white transition-colors hover:text-primary"
                    href={`/log/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </h3>
                {post.summary ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.summary}
                  </p>
                ) : null}
                {post.tags?.length ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        className="inline-flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase"
                        key={tag}
                      >
                        # {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <Link
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] text-primary transition-colors group-hover:text-white"
                href={`/log/${post.slug}`}
              >
                VIEW ENTRY
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
