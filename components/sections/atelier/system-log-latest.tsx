import { Link } from 'next-view-transitions';

import { getLatestPosts } from '@/lib/posts';

interface SystemLogProps {
  locale?: 'en' | 'de';
}

export default async function AtelierSystemLogLatest({
  locale = 'en',
}: SystemLogProps) {
  const posts = await getLatestPosts(3);
  if (!posts.length) {
    return null;
  }

  const labels =
    locale === 'de'
      ? {
          eyebrow: '06 / Notizen',
          heading: 'Aktuelle Notizen aus der Praxis.',
          intro:
            'Kurze, technische Beiträge zu agentischer PDLC, Plattformen und KI-Systemen. Aus echter Arbeit, nicht aus der Theorie.',
          allLink: 'Alle Beiträge',
          allHref: '/log',
          entryLabel: 'Beitrag lesen',
          dateLocale: 'de-CH',
        }
      : {
          eyebrow: '06 / Writing',
          heading: 'Recent notes from the field.',
          intro:
            'Short, technical dispatches on agentic PDLC, platforms and AI systems. From real work, not theory.',
          allLink: 'All entries',
          allHref: '/log',
          entryLabel: 'Read entry',
          dateLocale: 'en-CH',
        };

  const formatDate = (iso: string): string => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) {
      return iso;
    }
    return date.toLocaleDateString(labels.dateLocale, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  return (
    <section
      aria-labelledby="writing-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="writing"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrow}
            </span>
          </div>
          <div className="md:col-span-7 md:col-start-4">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="writing-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
          <div className="md:col-span-2 md:flex md:items-end md:justify-end">
            <Link
              className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
              href={labels.allHref}
            >
              {labels.allLink}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <ol className="border-[hsl(var(--ink))]/15 border-t">
          {posts.map((post, i) => (
            <li
              className="border-[hsl(var(--ink))]/15 border-b"
              key={post.slug}
            >
              <Link
                className="group grid grid-cols-1 gap-6 py-8 transition-colors hover:bg-[hsl(var(--ink))]/[0.025] md:grid-cols-12 md:gap-8 md:py-10"
                href={`/log/${post.slug}`}
              >
                <div className="md:col-span-2">
                  <span className="atelier-numerals text-2xl text-[hsl(var(--rust))]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="atelier-eyebrow mt-2 text-[hsl(var(--paper-muted))]">
                    {formatDate(post.publishedAt)}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h3 className="atelier-display font-medium text-[1.5rem] text-[hsl(var(--ink))] leading-snug transition-colors group-hover:text-[hsl(var(--rust))] md:text-[1.85rem]">
                    {post.title}
                  </h3>
                  {post.summary ? (
                    <p className="atelier-body mt-3 text-[hsl(var(--paper-muted))]">
                      {post.summary}
                    </p>
                  ) : null}
                  {post.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                      {post.tags.map((tag) => (
                        <span
                          className="atelier-eyebrow text-[hsl(var(--paper-muted))]"
                          key={tag}
                        >
                          / {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="md:col-span-2 md:flex md:items-end md:justify-end">
                  <span className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm">
                    {labels.entryLabel}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
