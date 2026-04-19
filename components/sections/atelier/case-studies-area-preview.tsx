import {
  CASE_STUDY_AREAS,
  type CaseStudy,
  type CaseStudyArea,
  getAreaPreviewCaseStudies,
} from '@/lib/case-studies';

interface CaseStudiesAreaPreviewProps {
  area: CaseStudyArea;
  locale?: 'en' | 'de';
  /** Visual section number to show in the eyebrow (depends on the parent page rhythm). */
  sectionNumber?: string;
  /** How many to show. Default 3. */
  limit?: number;
}

export default function AtelierCaseStudiesAreaPreview({
  area,
  locale = 'en',
  sectionNumber = '06',
  limit = 3,
}: CaseStudiesAreaPreviewProps) {
  const studies = getAreaPreviewCaseStudies(area, limit);
  if (!studies.length) {
    return null;
  }
  const areaMeta = CASE_STUDY_AREAS.find((a) => a.id === area);
  if (!areaMeta) {
    return null;
  }
  const areaLabel = locale === 'de' ? areaMeta.labelDE : areaMeta.labelEN;

  const labels =
    locale === 'de'
      ? {
          eyebrow: `${sectionNumber} / Aus dieser Praxis`,
          heading: `Beispiele aus der Praxis · ${areaLabel}.`,
          intro: 'Beispiele aus realen Mandaten. Reale Zahlen.',
          allLink: 'Alle Fallstudien',
          allHref: '/de/case-studies',
          problemLabel: 'Problem',
          approachLabel: 'Vorgehen',
          outcomeLabel: 'Ergebnis',
          named: ' · genannt',
          openCase: 'Fall öffnen',
        }
      : {
          eyebrow: `${sectionNumber} / From this practice`,
          heading: `Engagements from this practice · ${areaLabel}.`,
          intro: 'Examples from real engagements. Real numbers.',
          allLink: 'All case studies',
          allHref: '/case-studies',
          problemLabel: 'Problem',
          approachLabel: 'Approach',
          outcomeLabel: 'Outcome',
          named: ' · named',
          openCase: 'Open case',
        };

  return (
    <section
      aria-labelledby="case-studies-area-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="work"
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
              id="case-studies-area-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
          <div className="md:col-span-2 md:flex md:items-end md:justify-end">
            <a
              className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
              href={labels.allHref}
            >
              {labels.allLink}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-3">
          {studies.map((study) => (
            <CaseEntry
              key={study.id}
              labels={labels}
              locale={locale}
              study={study}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseEntry({
  study,
  locale,
  labels,
}: {
  study: CaseStudy;
  locale: 'en' | 'de';
  labels: {
    problemLabel: string;
    approachLabel: string;
    outcomeLabel: string;
    named: string;
    openCase: string;
  };
}) {
  const client = locale === 'de' ? study.clientDE : study.clientEN;
  const problem = locale === 'de' ? study.problemDE : study.problemEN;
  const outcome = locale === 'de' ? study.outcomeDE : study.outcomeEN;
  const metricValue =
    locale === 'de' ? study.metricValueDE : study.metricValueEN;
  const metricLabel =
    locale === 'de' ? study.metricLabelDE : study.metricLabelEN;
  const detailHref =
    locale === 'de'
      ? `/de/case-studies/${study.id}`
      : `/case-studies/${study.id}`;

  return (
    <article className="atelier-card-hover atelier-wash-rust group flex flex-col bg-[hsl(var(--paper))] p-7 md:p-9">
      <header className="mb-5 flex items-baseline justify-between gap-4 border-[hsl(var(--ink))]/15 border-b pb-4">
        <div className="flex items-baseline gap-3">
          <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
            {study.number}
          </span>
          {study.named ? (
            <span className="atelier-eyebrow text-[hsl(var(--rust))]/80">
              {labels.named.trim()}
            </span>
          ) : null}
        </div>
        <div className="text-right">
          <div className="atelier-numerals text-[1.35rem] text-[hsl(var(--ink))] leading-none">
            {metricValue}
          </div>
          <div className="mt-1 text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-wider">
            {metricLabel}
          </div>
        </div>
      </header>

      <h3 className="atelier-display font-medium text-[1.2rem] text-[hsl(var(--ink))] leading-snug">
        {client}
      </h3>

      <dl className="atelier-body mt-5 space-y-4 text-[0.95rem] text-[hsl(var(--ink))]/85">
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.problemLabel}
          </dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.outcomeLabel}
          </dt>
          <dd>{outcome}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <a
          className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
          href={detailHref}
        >
          {labels.openCase}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
