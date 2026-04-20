import Image from 'next/image';
import { Link } from 'next-view-transitions';

interface AtelierAppHeroProps {
  idx: string;
  category: string;
  name: string;
  tagline: string;
  status: string;
  description: string;
  image?: string;
  imageKind?: 'logo' | 'shot';
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  meta?: Array<{ label: string; value: string }>;
}

/**
 * Editorial masthead for each /apps/[slug] detail page.
 * Paper cream, rust numeral, Newsreader title, Hanken italic tagline,
 * mono status + meta, two CTAs.
 */
export default function AtelierAppHero({
  idx,
  category,
  name,
  tagline,
  status,
  description,
  image,
  imageKind = 'logo',
  primaryCta,
  secondaryCta,
  meta,
}: AtelierAppHeroProps) {
  return (
    <section className="atelier-paper relative">
      <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-6 px-6 pt-24 pb-10 md:gap-8 md:px-10 md:pt-32 md:pb-16">
        {/* Left: index + category */}
        <div className="col-span-12 md:col-span-2">
          <p className="atelier-eyebrow text-[hsl(var(--rust))]">{category}</p>
          <span className="atelier-numerals mt-3 block font-medium text-[3rem] text-[hsl(var(--rust))] leading-none md:text-[3.5rem]">
            {idx}
          </span>
        </div>

        {/* Main headline column */}
        <header className="col-span-12 md:col-span-7">
          <nav
            aria-label="Breadcrumb"
            className="atelier-mono mb-5 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.12em]"
          >
            <Link
              className="transition-colors hover:text-[hsl(var(--ink))]"
              href="/apps"
            >
              Workshop
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className="text-[hsl(var(--ink))]">{name}</span>
          </nav>

          <h1 className="atelier-display font-medium text-[clamp(2rem,1.4rem+3vw,3.75rem)] text-[hsl(var(--ink))] leading-[1.02] tracking-[-0.02em]">
            {name}
          </h1>

          <p className="atelier-display mt-5 max-w-[60ch] font-[400] text-[clamp(1.15rem,1rem+0.5vw,1.45rem)] text-[hsl(var(--ink))]/80 italic leading-[1.4]">
            {tagline}
          </p>

          <p className="atelier-body mt-6 max-w-[62ch] text-[1.02rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            {description}
          </p>

          {/* Meta strip */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <StatusPin status={status} />
            {meta?.map((m, i) => (
              <div
                className="flex items-baseline gap-2"
                key={`${m.label}-${i}`}
              >
                <span
                  aria-hidden="true"
                  className="h-3 w-px bg-[hsl(var(--ink))]/20"
                />
                <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                  {m.label}
                </span>
                <span className="atelier-mono text-[11px] text-[hsl(var(--ink))] tracking-[0.08em]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <a
                  className="atelier-cta-primary group inline-flex items-center gap-2 border border-[hsl(var(--ink))] bg-[hsl(var(--ink))] px-5 py-3 font-medium text-[0.95rem] text-[hsl(var(--paper))] transition-colors hover:bg-[hsl(var(--rust))]"
                  href={primaryCta.href}
                  {...(primaryCta.external
                    ? { rel: 'noopener noreferrer', target: '_blank' }
                    : {})}
                >
                  {primaryCta.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              )}
              {secondaryCta && (
                <a
                  className="atelier-cta-secondary inline-flex items-center gap-2 border border-[hsl(var(--ink))]/25 bg-transparent px-5 py-3 font-medium text-[0.95rem] text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--rust))] hover:text-[hsl(var(--rust))]"
                  href={secondaryCta.href}
                  {...(secondaryCta.external
                    ? { rel: 'noopener noreferrer', target: '_blank' }
                    : {})}
                >
                  {secondaryCta.label}
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Plate on right */}
        {image && (
          <div className="col-span-12 md:col-span-3">
            {imageKind === 'logo' ? (
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[hsl(var(--graphite))]">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[2px] w-12 bg-[hsl(var(--rust))]"
                />
                <span
                  aria-hidden="true"
                  className="atelier-mono absolute top-3 right-3 text-[9.5px] text-[hsl(var(--paper))]/50 uppercase tracking-[0.18em]"
                >
                  Mark
                </span>
                <div className="relative h-28 w-28 md:h-32 md:w-32">
                  <Image
                    alt={`${name} mark`}
                    className="object-contain"
                    fill
                    priority
                    sizes="128px"
                    src={image}
                  />
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--graphite))]">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 z-10 h-[2px] w-12 bg-[hsl(var(--rust))]"
                />
                <span
                  aria-hidden="true"
                  className="atelier-mono absolute top-3 right-3 z-10 text-[9.5px] text-[hsl(var(--paper))]/70 uppercase tracking-[0.18em]"
                >
                  Plate
                </span>
                <Image
                  alt={`${name} preview`}
                  className="object-cover object-top"
                  fill
                  priority
                  sizes="(min-width:768px) 25vw, 100vw"
                  src={image}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function pinAccent(status: string) {
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

function StatusPin({ status }: { status: string }) {
  const { text, dot } = pinAccent(status);
  return (
    <span
      className={`atelier-mono inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.16em] ${text}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}
