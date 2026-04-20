import type { ReactNode } from 'react';

interface AtelierAppSectionProps {
  eyebrow?: string;
  title?: string;
  lede?: string;
  children: ReactNode;
  /** true = subtle rust rule at top, tighter frame */
  accent?: boolean;
}

/**
 * Content section within /apps/[slug] detail pages.
 * Editorial 12-col grid: eyebrow/title in left 2 cols, body in right 10.
 */
export default function AtelierAppSection({
  eyebrow,
  title,
  lede,
  children,
  accent = false,
}: AtelierAppSectionProps) {
  return (
    <section className="atelier-paper border-[hsl(var(--ink))]/10 border-t">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <header className="col-span-12 md:col-span-3">
            {eyebrow ? (
              <p
                className={`atelier-eyebrow ${
                  accent
                    ? 'text-[hsl(var(--rust))]'
                    : 'text-[hsl(var(--paper-muted))]'
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="atelier-display mt-3 font-medium text-[clamp(1.6rem,1.1rem+1.3vw,2.25rem)] text-[hsl(var(--ink))] leading-[1.1] tracking-[-0.01em]">
                {title}
              </h2>
            ) : null}
            {lede ? (
              <p className="atelier-body mt-4 max-w-[34ch] text-[0.96rem] text-[hsl(var(--ink))]/70 leading-[1.6]">
                {lede}
              </p>
            ) : null}
          </header>
          <div className="col-span-12 md:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}

interface AtelierFeatureGridProps {
  items: Array<{
    title: string;
    description: string;
    mark?: string;
  }>;
  cols?: 2 | 3;
}

/**
 * Grid of small atelier "cards" (no borders; divided by thin rules).
 */
export function AtelierFeatureGrid({
  items,
  cols = 2,
}: AtelierFeatureGridProps) {
  return (
    <ul
      className={`grid gap-x-8 gap-y-10 ${
        cols === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2'
      }`}
    >
      {items.map((item, i) => (
        <li
          className="border-[hsl(var(--ink))]/10 border-t pt-5"
          key={`${item.title}-${i}`}
        >
          <div className="flex items-baseline gap-3">
            <span className="atelier-numerals text-[0.95rem] text-[hsl(var(--rust))]">
              {String(i + 1).padStart(2, '0')}
            </span>
            {item.mark ? (
              <span className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                {item.mark}
              </span>
            ) : null}
          </div>
          <h3 className="atelier-display mt-2 font-medium text-[1.2rem] text-[hsl(var(--ink))] leading-[1.2]">
            {item.title}
          </h3>
          <p className="atelier-body mt-2 text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

interface AtelierSpecListProps {
  items: Array<{ label: string; value: string }>;
}

/**
 * Definition-list style spec block. Mono labels, Hanken values,
 * dotted leader line between.
 */
export function AtelierSpecList({ items }: AtelierSpecListProps) {
  return (
    <dl className="divide-y divide-[hsl(var(--ink))]/10 border-[hsl(var(--ink))]/10 border-y">
      {items.map((item) => (
        <div
          className="flex items-baseline justify-between gap-6 py-3"
          key={item.label}
        >
          <dt className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
            {item.label}
          </dt>
          <dd className="atelier-body text-[0.95rem] text-[hsl(var(--ink))]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
