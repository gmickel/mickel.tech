import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Shell from '@/components/layout/shell';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';
import { getPostsByTag, getTagDisplayName, getTagIndex } from '@/lib/posts';
import { slugifyTag } from '@/lib/tag-utils';

type Props = { params: Promise<{ tag: string }> };

export async function generateStaticParams() {
  const index = await getTagIndex();
  return index.slugs.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const displayName = await getTagDisplayName(tag);
  if (!displayName) {
    return {};
  }

  return {
    title: `${displayName} Posts`,
    description: `Blog posts about ${displayName} by Gordon Mickel`,
    alternates: { canonical: `/log/tag/${tag}` },
    openGraph: {
      title: `${displayName} Posts | mickel.tech`,
      description: `Blog posts about ${displayName} by Gordon Mickel`,
      url: `/log/tag/${tag}`,
      type: 'website',
    },
  };
}

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

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const [posts, displayName] = await Promise.all([
    getPostsByTag(tag),
    getTagDisplayName(tag),
  ]);

  if (posts.length === 0 || !displayName) {
    notFound();
  }

  return (
    <Shell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Log', url: '/log' },
          { name: displayName, url: `/log/tag/${tag}` },
        ])}
      />
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-32 md:px-0">
        <header className="mb-12 space-y-4 border-white/10 border-b pb-8">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] text-muted-foreground"
          >
            <Link className="hover:text-primary" href="/">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link className="hover:text-primary" href="/log">
              Log
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{displayName}</span>
          </nav>
          <p className="font-mono text-[11px] text-primary tracking-[0.25em]">
            TAG // {displayName.toUpperCase()}
          </p>
          <h1 className="font-bold text-4xl text-white md:text-5xl">
            Posts tagged "{displayName}"
          </h1>
          <p className="text-base text-muted-foreground">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} on this topic
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              className="group interactive border border-white/10 bg-background/70 p-6 transition-all duration-300 hover:border-primary/60 hover:bg-background/90"
              key={post.slug}
            >
              <div className="flex items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground uppercase">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="text-primary">LOG ENTRY</span>
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
                    {post.tags.map((t) => (
                      <Link
                        className="inline-flex items-center gap-1 rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase transition-colors hover:border-primary/40 hover:text-primary"
                        href={`/log/tag/${slugifyTag(t)}`}
                        key={`${post.slug}-${t}`}
                      >
                        # {t}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mt-4">
                <Link
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-primary transition-colors group-hover:text-white"
                  href={`/log/${post.slug}`}
                >
                  VIEW LOG ENTRY
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
