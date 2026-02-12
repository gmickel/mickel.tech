import Image from 'next/image';
import Link from 'next/link';

import { APPS } from '@/lib/apps';

// Feature a curated selection of apps
const featuredSlugs = ['flow-next', 'gno', 'dociq-sphere', 'dociq-shield'];
const featuredApps = featuredSlugs
  .map((slug) => APPS.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => a !== undefined);

export default function AppsPreview() {
  return (
    <section
      className="relative border-white/5 border-y bg-secondary/30 px-6 py-24 md:px-20"
      id="apps"
    >
      {/* Diagonal line pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            white 10px,
            white 11px
          )`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-[11px] text-primary tracking-[0.25em]">
              ARTIFACT_REGISTRY // APPS
            </p>
            <h2 className="font-bold text-3xl text-white md:text-4xl">
              Things I built
            </h2>
            <p className="max-w-xl text-muted-foreground text-sm">
              Developer tools, AI platforms, and utilities. From open-source CLI
              tools to enterprise legal tech.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-end font-mono text-primary text-xs hover:text-white"
            href="/apps"
          >
            [ VIEW ALL APPS ]
          </Link>
        </header>

        {/* Apps grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredApps.map((app, idx) => (
            <Link
              className="group interactive fade-in slide-in-from-bottom-4 relative block animate-in overflow-hidden border border-white/10 bg-background/60 fill-mode-both transition-all duration-300 hover:border-primary/50 hover:bg-background/90"
              href={`/apps/${app.slug}`}
              key={app.slug}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* App image or fallback */}
              <div className="relative h-32 w-full overflow-hidden border-white/5 border-b bg-black/50">
                {app.image ? (
                  <Image
                    alt={`${app.name} preview`}
                    className="object-cover object-left-top opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    src={app.image}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-mono text-3xl text-white/20">
                      {app.name[0]}
                    </span>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`inline-block border px-2 py-0.5 font-mono text-[9px] uppercase ${
                      app.status === 'Released'
                        ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-400'
                        : app.status === 'Experimental'
                          ? 'border-amber-500/40 bg-amber-500/20 text-amber-400'
                          : 'border-white/20 bg-white/10 text-white/60'
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="mb-1 font-bold text-white transition-colors group-hover:text-primary">
                  {app.name}
                </h3>
                <p className="mb-3 font-mono text-[10px] text-primary uppercase">
                  {app.tagline}
                </p>
                <p className="line-clamp-2 text-muted-foreground text-xs leading-relaxed">
                  {app.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {app.tags.slice(0, 2).map((tag) => (
                    <span
                      className="border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/50"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-8 flex items-center justify-between border border-white/10 bg-white/[0.02] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5">
              <svg
                className="h-5 w-5 text-white/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                Open Source
              </p>
              <p className="text-sm text-white">
                Most tools are MIT licensed on GitHub
              </p>
            </div>
          </div>
          <a
            className="hidden font-mono text-primary text-xs hover:text-white md:inline-flex"
            href="https://github.com/gmickel"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/gmickel
          </a>
        </div>
      </div>
    </section>
  );
}
