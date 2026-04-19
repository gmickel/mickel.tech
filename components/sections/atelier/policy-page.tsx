import type React from 'react';

interface PolicyPageProps {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  updatedDate: string;
  children: React.ReactNode;
}

/**
 * Editorial policy page frame, used by /imprint and /privacy.
 * Single-column reading layout on cream paper, restrained.
 */
export default function AtelierPolicyPage({
  eyebrow,
  title,
  updatedLabel,
  updatedDate,
  children,
}: PolicyPageProps) {
  return (
    <article className="atelier-paper relative">
      <div className="relative mx-auto max-w-[860px] px-6 py-20 md:px-8 md:py-28">
        <header className="mb-14 border-[hsl(var(--ink))]/15 border-b pb-10">
          <span className="atelier-eyebrow text-[hsl(var(--rust))]">
            {eyebrow}
          </span>
          <h1 className="atelier-display mt-4 font-medium text-[clamp(2.2rem,1.4rem+3vw,4rem)] text-[hsl(var(--ink))]">
            {title}
          </h1>
          <p className="atelier-eyebrow mt-6 text-[hsl(var(--paper-muted))]">
            {updatedLabel} · {updatedDate}
          </p>
        </header>
        <div className="atelier-body [&_a]:atelier-link [&_h2]:atelier-display [&_h3]:atelier-display space-y-7 text-[hsl(var(--ink))]/85 [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:font-medium [&_h2]:text-[1.6rem] [&_h2]:text-[hsl(var(--ink))] [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-medium [&_h3]:text-[1.2rem] [&_h3]:text-[hsl(var(--ink))] [&_li]:my-1 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </article>
  );
}
