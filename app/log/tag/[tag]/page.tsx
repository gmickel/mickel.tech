import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from 'next-view-transitions';
import Datestamp from '@/components/atelier/datestamp';
import TagRow from '@/components/atelier/tag-row';
import AtelierShell from '@/components/layout/atelier-shell';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';
import { getPostsByTag, getTagDisplayName, getTagIndex } from '@/lib/posts';

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
    title: `Tag: ${displayName}`,
    description: `Field notes tagged ${displayName} by Gordon Mickel.`,
    alternates: { canonical: `/log/tag/${tag}` },
    openGraph: {
      title: `${displayName} · Field notes · mickel.tech`,
      description: `Field notes tagged ${displayName}.`,
      url: `/log/tag/${tag}`,
      type: 'website',
    },
  };
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
    <AtelierShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Field notes', url: '/log' },
          { name: displayName, url: `/log/tag/${tag}` },
        ])}
      />

      <section className="atelier-paper relative">
        <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-6 px-6 pt-24 pb-14 md:gap-8 md:px-10 md:pt-32 md:pb-20">
          <div className="col-span-12 md:col-span-2">
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">Tag</p>
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
              <span className="text-[hsl(var(--ink))]">#{displayName}</span>
            </nav>
            <h1 className="atelier-display font-medium text-[clamp(2rem,1.5rem+2.5vw,3.25rem)] text-[hsl(var(--ink))] leading-[1.05] tracking-[-0.02em]">
              <span className="text-[hsl(var(--rust))]">#</span>
              {displayName}
            </h1>
            <p className="atelier-body mt-4 text-[hsl(var(--ink))]/70">
              {posts.length} {posts.length === 1 ? 'entry' : 'entries'} on this
              thread.
            </p>
          </header>
        </div>
      </section>

      <section className="atelier-paper border-[hsl(var(--ink))]/10 border-t">
        <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24 md:px-10 md:pt-16 md:pb-32">
          <ol className="divide-y divide-[hsl(var(--ink))]/10 border-[hsl(var(--ink))]/10 border-y">
            {posts.map((post, i) => {
              const idx = String(i + 1).padStart(2, '0');
              return (
                <li className="group" key={post.slug}>
                  <Link
                    className="block py-8 transition-colors hover:bg-[hsl(var(--ink))]/[0.025]"
                    href={`/log/${post.slug}`}
                  >
                    <article className="grid grid-cols-12 gap-6 px-0 md:gap-8">
                      <div className="col-span-2 md:col-span-1">
                        <span className="atelier-numerals block font-medium text-[2.25rem] text-[hsl(var(--rust))] leading-none md:text-[2.75rem]">
                          {idx}
                        </span>
                      </div>
                      <div className="col-span-10 md:col-span-3">
                        <Datestamp iso={post.publishedAt} />
                        {post.tags?.length ? (
                          <div className="mt-2.5">
                            <TagRow tags={post.tags} />
                          </div>
                        ) : null}
                      </div>
                      <div className="col-span-12 md:col-span-8">
                        <h2 className="atelier-display font-medium text-[clamp(1.3rem,1.05rem+0.85vw,1.75rem)] text-[hsl(var(--ink))] leading-[1.2] transition-colors group-hover:text-[hsl(var(--rust))]">
                          {post.title}
                        </h2>
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
                    </article>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </AtelierShell>
  );
}
