import Image from 'next/image';
import { Link } from 'next-view-transitions';

import { getLatestReleases, type Release } from '@/lib/releases';

interface ReleasesProps {
  locale?: 'en' | 'de';
}

export default function AtelierReleases({ locale = 'en' }: ReleasesProps) {
  const releases = getLatestReleases(3);
  if (!releases.length) {
    return null;
  }

  const labels =
    locale === 'de'
      ? {
          eyebrow: '05 / Aktuell ausgeliefert',
          heading: 'Was zuletzt ausgeliefert wurde.',
          intro:
            'Die Praxis lebt von versendetem Code. Drei aktuelle Auslieferungen — Open-Source-Werkzeuge und ein lokales Mac-Produkt.',
          allLink: 'Werkstatt-Katalog',
          allHref: '/de/apps',
          dateLocale: 'de-CH',
          shippedLabel: 'Ausgeliefert',
          versionLabel: 'Version',
          notesLabel: 'Was neu ist',
          detailsLink: 'Details ansehen',
        }
      : {
          eyebrow: '05 / Recently shipped',
          heading: 'Latest from the workshop.',
          intro:
            'The practice runs on code that ships. Three recent releases — open-source tools and a local-first Mac product.',
          allLink: 'Workshop catalogue',
          allHref: '/apps',
          dateLocale: 'en-CH',
          shippedLabel: 'Shipped',
          versionLabel: 'Version',
          notesLabel: 'What shipped',
          detailsLink: 'View details',
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
      aria-labelledby="releases-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="releases"
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
              id="releases-heading"
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

        <ol className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-3">
          {releases.map((release, i) => (
            <ReleaseCard
              date={formatDate(release.shippedAt)}
              i={i + 1}
              key={release.appSlug}
              labels={labels}
              locale={locale}
              release={release}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function statusAccent(status: Release['status']) {
  if (status === 'preview') {
    return {
      text: 'text-[hsl(var(--rust))]',
      dot: 'bg-[hsl(var(--rust))]',
      label: { en: 'Preview', de: 'Vorschau' },
    };
  }
  if (status === 'production') {
    return {
      text: 'text-[hsl(var(--navy))]',
      dot: 'bg-[hsl(var(--navy))]',
      label: { en: 'Production', de: 'Produktion' },
    };
  }
  return {
    text: 'text-[hsl(var(--navy))]',
    dot: 'bg-[hsl(var(--navy))]',
    label: { en: 'Released', de: 'Veröffentlicht' },
  };
}

function ReleaseCard({
  release,
  i,
  labels,
  locale,
  date,
}: {
  release: Release;
  i: number;
  labels: {
    versionLabel: string;
    notesLabel: string;
    shippedLabel: string;
    detailsLink: string;
  };
  locale: 'en' | 'de';
  date: string;
}) {
  const idx = String(i).padStart(2, '0');
  const tagline = locale === 'de' ? release.taglineDE : release.taglineEN;
  const notes = locale === 'de' ? release.notesDE : release.notesEN;
  const externalLabel =
    locale === 'de' ? release.externalLabelDE : release.externalLabelEN;
  const accent = statusAccent(release.status);
  const detailsHref =
    locale === 'de'
      ? `/de/apps/${release.appSlug}`
      : `/apps/${release.appSlug}`;

  return (
    <li className="atelier-card-hover group flex flex-col bg-[hsl(var(--paper))] p-8 transition-colors hover:bg-[hsl(var(--paper))]/80 md:p-10">
      <header className="mb-6 flex items-start justify-between gap-4 border-[hsl(var(--ink))]/15 border-b pb-5">
        <span className="atelier-numerals text-2xl text-[hsl(var(--rust))] leading-none">
          {idx}
        </span>
        <div className="text-right">
          <div className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
            {labels.shippedLabel}
          </div>
          <div className="atelier-mono mt-1 text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em]">
            {date}
          </div>
        </div>
      </header>

      <Link
        aria-label={`${release.name} ${release.version}`}
        className="block flex-1"
        href={detailsHref}
      >
        <ReleaseTile release={release} />

        <div className="mt-6 flex items-baseline justify-between gap-4">
          <h3 className="atelier-display font-medium text-[1.6rem] text-[hsl(var(--ink))] leading-[1.15] transition-colors group-hover:text-[hsl(var(--rust))]">
            {release.name}
          </h3>
          <span className="atelier-mono text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em]">
            {release.version}
          </span>
        </div>

        <p className="atelier-body mt-2 text-[0.98rem] text-[hsl(var(--ink))]/75 italic leading-[1.45]">
          {tagline}
        </p>

        <dl className="atelier-body mt-5 text-[hsl(var(--ink))]/85">
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.notesLabel}
          </dt>
          <dd className="text-[0.95rem] leading-[1.6]">{notes}</dd>
        </dl>
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-[hsl(var(--ink))]/10 border-t pt-4">
        <span
          className={`atelier-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] ${accent.text}`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
          />
          {accent.label[locale]}
        </span>
        <span aria-hidden="true" className="h-3 w-px bg-[hsl(var(--ink))]/15" />
        <ul className="atelier-mono flex flex-wrap items-center gap-x-2 gap-y-1 text-[10.5px] uppercase tracking-[0.14em]">
          {release.tags.map((tag) => (
            <li
              className="inline-flex items-center border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))]/40 px-2 py-0.5 text-[hsl(var(--ink))]/80"
              key={tag}
            >
              <span aria-hidden="true" className="mr-1 text-[hsl(var(--rust))]">
                #
              </span>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Link
          className="atelier-mono inline-flex items-center gap-1.5 text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em] transition-colors hover:text-[hsl(var(--rust))]"
          href={detailsHref}
        >
          {labels.detailsLink}
          <span aria-hidden="true">→</span>
        </Link>
        <a
          className="atelier-mono inline-flex items-center gap-1.5 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em] transition-colors hover:text-[hsl(var(--ink))]"
          href={release.externalHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {externalLabel}
        </a>
      </div>
    </li>
  );
}

function ReleaseTile({ release }: { release: Release }) {
  if (release.imageKind === 'logo') {
    return (
      <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden bg-[hsl(var(--graphite))]">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-[2px] w-12 bg-[hsl(var(--rust))]"
        />
        <div className="relative h-20 w-20 md:h-24 md:w-24">
          <Image
            alt={`${release.name} mark`}
            className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
            fill
            sizes="96px"
            src={release.image}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative aspect-[5/3] overflow-hidden border border-[hsl(var(--ink))]/12 bg-[hsl(var(--graphite))] shadow-[inset_0_0_0_1px_hsl(var(--paper)/0.04)]">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 z-10 h-[2px] w-12 bg-[hsl(var(--rust))]"
      />
      <Image
        alt={`${release.name} preview`}
        className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]"
        fill
        sizes="(min-width:1024px) 32vw, (min-width:768px) 48vw, 100vw"
        src={release.image}
      />
    </div>
  );
}
