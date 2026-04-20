import { getLeadMagnet } from '@/lib/lead-magnets';

interface LeadMagnetCardProps {
  slug: string;
  locale?: 'en' | 'de';
  /** Section number prefix shown in the eyebrow, e.g. "06". */
  sectionNumber?: string;
}

const labelsEN = {
  eyebrow: 'Field guide',
  pages: 'PDF',
  audience: 'For',
  download: 'Download PDF',
  preview: 'Read in browser',
};

const labelsDE = {
  eyebrow: 'Field guide',
  pages: 'PDF',
  audience: 'Für',
  download: 'PDF herunterladen',
  preview: 'Im Browser lesen',
};

export default function AtelierLeadMagnetCard({
  slug,
  locale = 'en',
  sectionNumber = '06',
}: LeadMagnetCardProps) {
  const magnet = getLeadMagnet(slug);
  if (!magnet) {
    return null;
  }
  const labels = locale === 'de' ? labelsDE : labelsEN;

  return (
    <section
      aria-labelledby={`lm-${slug}-heading`}
      className="atelier-paper border-[hsl(var(--ink))]/10 border-t"
    >
      <div className="mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {sectionNumber} / {labels.eyebrow}
            </span>
            <p className="atelier-mono mt-4 text-[hsl(var(--paper-muted))] text-xs uppercase tracking-[0.18em]">
              {magnet.pages} {labels.pages}
            </p>
          </div>
          <div className="md:col-span-8">
            <h2
              className="atelier-display font-medium text-[clamp(1.75rem,1.2rem+1.8vw,2.75rem)] text-[hsl(var(--ink))] leading-[1.1] tracking-[-0.01em]"
              id={`lm-${slug}-heading`}
            >
              {magnet.title}
            </h2>
            <p className="atelier-body mt-5 max-w-[60ch] text-[hsl(var(--ink))]/80">
              {magnet.subtitle}
            </p>
            <dl className="mt-7 flex flex-wrap items-baseline gap-x-10 gap-y-3">
              <div>
                <dt className="atelier-mono text-[0.7rem] text-[hsl(var(--paper-muted))] uppercase tracking-[0.18em]">
                  {labels.audience}
                </dt>
                <dd className="atelier-body mt-1 text-[hsl(var(--ink))]">
                  {magnet.audience}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="atelier-cta-primary"
                download={magnet.pdfFilename}
                href={magnet.pdfHref}
              >
                {labels.download}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                className="atelier-cta-secondary"
                href={magnet.previewHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {labels.preview}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
