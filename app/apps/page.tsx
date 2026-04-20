import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import AtelierShell from '@/components/layout/atelier-shell';
import { APPS } from '@/lib/apps';
import { breadcrumbSchema, itemListSchema, JsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Apps -- Things I built',
  description:
    'Software I designed and built: legal-tech platforms, agent orchestration, local-first knowledge tools, developer utilities. A working catalogue.',
  openGraph: {
    title: 'Apps · Mickel Tech',
    description:
      'Software I designed and built: legal-tech, agent orchestration, local-first knowledge tools, Claude Code plugins.',
    type: 'website',
    url: 'https://mickel.tech/apps',
    siteName: 'Mickel Tech',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apps · Mickel Tech',
    description:
      'Software I designed and built: legal-tech, agent orchestration, Claude Code plugins.',
  },
  alternates: { canonical: 'https://mickel.tech/apps' },
};

const apps = APPS.map((app) => ({
  id: app.slug,
  name: app.name,
  tagline: app.tagline,
  description: app.description,
  tags: [...app.tags],
  href: `/apps/${app.slug}`,
  image: app.image,
  imageKind: app.imageKind ?? 'logo',
  status: app.status,
}));

export default function AppsPage() {
  const featured = apps.slice(0, 3);
  const rest = apps.slice(3);

  return (
    <AtelierShell>
      <JsonLd data={breadcrumbSchema([{ name: 'Apps', url: '/apps' }])} />
      <JsonLd
        data={itemListSchema({
          name: 'Mickel Tech · Apps',
          url: '/apps',
          items: apps.map((app) => ({
            name: app.name,
            url: app.href,
            description: app.tagline,
          })),
        })}
      />

      {/* ---- Masthead ---- */}
      <section
        aria-labelledby="apps-heading"
        className="atelier-paper relative"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-14 md:px-10 md:pt-32 md:pb-20">
          <p className="atelier-eyebrow text-[hsl(var(--rust))]">
            02 / Workshop
          </p>
          <h1
            className="atelier-display mt-4 font-medium text-[clamp(2.25rem,1.6rem+3vw,4rem)] text-[hsl(var(--ink))] leading-[1.02] tracking-[-0.02em]"
            id="apps-heading"
          >
            Things I built.
          </h1>
          <p className="atelier-body mt-5 max-w-[60ch] text-[1.125rem] text-[hsl(var(--ink))]/80 leading-[1.55]">
            A working catalogue. Legal-tech platforms, agent orchestration,
            local-first knowledge tools, and the small utilities that keep a
            practice running. Most are open source; a few are production SaaS.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-[hsl(var(--paper-muted))]">
            <span className="atelier-mono text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em]">
              {apps.length} entries
            </span>
            <span
              aria-hidden="true"
              className="h-3 w-px bg-[hsl(var(--ink))]/20"
            />
            <span className="atelier-mono text-[11px] uppercase tracking-[0.14em]">
              Updated 2026
            </span>
            <span
              aria-hidden="true"
              className="h-3 w-px bg-[hsl(var(--ink))]/20"
            />
            <a
              className="atelier-mono text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
              href="https://github.com/gmickel"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/gmickel →
            </a>
          </div>
        </div>
      </section>

      {/* ---- Featured row ---- */}
      <section
        aria-label="Featured"
        className="atelier-paper border-[hsl(var(--ink))]/10 border-t"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-4 md:px-10 md:pt-20">
          <header className="mb-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2">
              <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                Featured
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <p className="atelier-body max-w-[60ch] text-[hsl(var(--ink))]/72">
                What I work on most and what people come here for.
              </p>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {featured.map((app, i) => (
              <FeaturedCard app={app} i={i + 1} key={app.id} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Archive list ---- */}
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
                Tools, CLIs, utilities, and earlier platforms.
              </p>
            </div>
          </header>
          <ol className="divide-y divide-[hsl(var(--ink))]/10 border-[hsl(var(--ink))]/10 border-y">
            {rest.map((app, i) => (
              <ListEntry app={app} i={featured.length + i + 1} key={app.id} />
            ))}
          </ol>
        </div>
      </section>
    </AtelierShell>
  );
}

function statusAccent(status: string) {
  if (status === 'Released') {
    return {
      text: 'text-[hsl(var(--navy))]',
      dot: 'bg-[hsl(var(--navy))]',
    };
  }
  if (status === 'In Production') {
    return {
      text: 'text-[hsl(var(--rust))]',
      dot: 'bg-[hsl(var(--rust))]',
    };
  }
  return {
    text: 'text-[hsl(var(--paper-muted))]',
    dot: 'bg-[hsl(var(--paper-muted))]',
  };
}

function StatusChip({ status }: { status: string }) {
  const { text, dot } = statusAccent(status);
  return (
    <span
      className={`atelier-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] ${text}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}

function FeaturedCard({ app, i }: { app: (typeof apps)[number]; i: number }) {
  const idx = String(i).padStart(2, '0');
  return (
    <Link
      className="group flex h-full flex-col border-[hsl(var(--ink))]/10 border-t pt-6"
      href={app.href}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="atelier-numerals block font-medium text-[2rem] text-[hsl(var(--rust))] leading-none">
          {idx}
        </span>
        <StatusChip status={app.status} />
      </div>

      {app.image ? <FeaturedImageTile app={app} /> : null}

      <h3 className="atelier-display mt-6 font-medium text-[1.6rem] text-[hsl(var(--ink))] leading-[1.15] transition-colors group-hover:text-[hsl(var(--rust))]">
        {app.name}
      </h3>
      <p className="atelier-body mt-2 text-[0.98rem] text-[hsl(var(--ink))]/75 italic leading-[1.45]">
        {app.tagline}
      </p>

      <p className="atelier-body mt-4 flex-1 text-[0.95rem] text-[hsl(var(--ink))]/70 leading-[1.6]">
        {app.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-[hsl(var(--ink))]/10 border-t pt-4">
        <ul className="atelier-mono flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] uppercase tracking-[0.14em]">
          {app.tags.map((tag) => (
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

      <span className="atelier-mono mt-5 inline-flex items-center gap-1.5 text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.14em] transition-colors group-hover:text-[hsl(var(--rust))]">
        View details
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}

function ListEntry({ app, i }: { app: (typeof apps)[number]; i: number }) {
  const idx = String(i).padStart(2, '0');
  return (
    <li className="group">
      <Link
        className="block py-8 transition-colors hover:bg-[hsl(var(--ink))]/[0.025]"
        href={app.href}
      >
        <article className="grid grid-cols-12 gap-6 px-0 md:gap-8">
          {/* Numeral */}
          <div className="col-span-2 md:col-span-1">
            <span className="atelier-numerals block font-medium text-[2.25rem] text-[hsl(var(--rust))] leading-none md:text-[2.75rem]">
              {idx}
            </span>
          </div>

          {/* Icon + status */}
          <div className="col-span-10 md:col-span-2">
            <ListIconTile app={app} />
            <div className="mt-3">
              <StatusChip status={app.status} />
            </div>
          </div>

          {/* Headline */}
          <div className="col-span-12 md:col-span-6">
            <h3 className="atelier-display font-medium text-[clamp(1.3rem,1.05rem+0.85vw,1.75rem)] text-[hsl(var(--ink))] leading-[1.2] transition-colors group-hover:text-[hsl(var(--rust))]">
              {app.name}
            </h3>
            <p className="atelier-body mt-2 text-[0.98rem] text-[hsl(var(--ink))]/75 italic">
              {app.tagline}
            </p>
            <p className="atelier-body mt-3 max-w-[60ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
              {app.description}
            </p>
            <span className="atelier-mono mt-4 inline-flex items-center gap-1.5 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em] transition-colors group-hover:text-[hsl(var(--ink))]">
              View details
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </div>

          {/* Tags */}
          <div className="col-span-12 md:col-span-3 md:text-right">
            <ul className="atelier-mono flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] uppercase tracking-[0.14em] md:justify-end">
              {app.tags.map((tag) => (
                <li
                  className="inline-flex items-center border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))]/40 px-2 py-0.5 text-[hsl(var(--ink))]/80"
                  key={tag}
                >
                  <span
                    aria-hidden="true"
                    className="mr-1 text-[hsl(var(--rust))]"
                  >
                    #
                  </span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Link>
    </li>
  );
}

function FeaturedImageTile({ app }: { app: (typeof apps)[number] }) {
  if (!app.image) {
    return null;
  }
  if (app.imageKind === 'logo') {
    return (
      <div className="relative mt-6 flex aspect-[4/3] items-center justify-center overflow-hidden bg-[hsl(var(--graphite))]">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-[2px] w-12 bg-[hsl(var(--rust))]"
        />
        <div className="relative h-20 w-20 md:h-24 md:w-24">
          <Image
            alt={`${app.name} mark`}
            className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
            fill
            sizes="96px"
            src={app.image}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-[hsl(var(--ink))]/12 bg-[hsl(var(--graphite))] shadow-[inset_0_0_0_1px_hsl(var(--paper)/0.04)]">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 z-10 h-[2px] w-12 bg-[hsl(var(--rust))]"
      />
      <Image
        alt={`${app.name} preview`}
        className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]"
        fill
        sizes="(min-width:768px) 33vw, 100vw"
        src={app.image}
      />
    </div>
  );
}

function ListIconTile({ app }: { app: (typeof apps)[number] }) {
  if (!app.image) {
    return (
      <div className="flex h-14 w-14 items-center justify-center bg-[hsl(var(--graphite))]">
        <span className="atelier-mono text-[hsl(var(--paper-muted))]">?</span>
      </div>
    );
  }
  if (app.imageKind === 'logo') {
    return (
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden bg-[hsl(var(--graphite))]">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-[2px] w-6 bg-[hsl(var(--rust))]"
        />
        <div className="relative h-9 w-9">
          <Image
            alt={`${app.name} mark`}
            className="object-contain"
            fill
            sizes="36px"
            src={app.image}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-14 w-14 overflow-hidden bg-[hsl(var(--graphite))]">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 z-10 h-[2px] w-6 bg-[hsl(var(--rust))]"
      />
      <Image
        alt={`${app.name} preview`}
        className="object-cover object-left-top"
        fill
        sizes="56px"
        src={app.image}
      />
    </div>
  );
}
