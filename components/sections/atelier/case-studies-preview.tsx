import { type CaseStudy, getFeaturedCaseStudies } from '@/lib/case-studies';

interface CaseStudiesPreviewProps {
  locale?: 'en' | 'de';
}

export default function AtelierCaseStudiesPreview({
  locale = 'en',
}: CaseStudiesPreviewProps) {
  const studies = getFeaturedCaseStudies();

  const labels =
    locale === 'de'
      ? {
          eyebrow: '03 / Auswahl an Mandaten',
          heading: 'Vier Beispiele aus der Praxis.',
          intro:
            'Anonymisiert, wo Vertraulichkeit gilt. Genannt nur, wo es meine eigene Arbeit ist. Benennung verändert nichts an den Zahlen.',
          allLink: 'Alle Fallstudien',
          allHref: '/de/case-studies',
          problemLabel: 'Problem',
          approachLabel: 'Vorgehen',
          outcomeLabel: 'Ergebnis',
        }
      : {
          eyebrow: '03 / Selected work',
          heading: 'Four examples from real engagements.',
          intro:
            'Anonymised where confidentiality applies. Named only where the work is fully mine. Naming does not change the numbers.',
          allLink: 'All case studies',
          allHref: '/case-studies',
          problemLabel: 'Problem',
          approachLabel: 'Approach',
          outcomeLabel: 'Outcome',
        };

  return (
    <section
      aria-labelledby="case-studies-heading"
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
              id="case-studies-heading"
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

        <div className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
          {studies.map((study) => (
            <CaseStudyEntry
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

function CaseStudyEntry({
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
  };
}) {
  const client = locale === 'de' ? study.clientDE : study.clientEN;
  const problem = locale === 'de' ? study.problemDE : study.problemEN;
  const approach = locale === 'de' ? study.approachDE : study.approachEN;
  const outcome = locale === 'de' ? study.outcomeDE : study.outcomeEN;
  const metricValue =
    locale === 'de' ? study.metricValueDE : study.metricValueEN;
  const metricLabel =
    locale === 'de' ? study.metricLabelDE : study.metricLabelEN;
  const namedTag = locale === 'de' ? ' · genannt' : ' · named';

  return (
    <article className="relative flex flex-col bg-[hsl(var(--paper))] p-8 transition-colors hover:bg-[hsl(var(--paper))]/80 md:p-12">
      <header className="mb-6 flex items-baseline justify-between gap-4 border-[hsl(var(--ink))]/15 border-b pb-5">
        <div className="flex items-baseline gap-4">
          <span className="atelier-numerals text-2xl text-[hsl(var(--rust))]">
            {study.number}
          </span>
          <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
            {areaLabel(study.area, locale)}
            {study.named ? namedTag : ''}
          </span>
        </div>
        <div className="text-right">
          <div className="atelier-numerals text-[1.65rem] text-[hsl(var(--ink))] leading-none">
            {metricValue}
          </div>
          <div className="mt-1 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-wider">
            {metricLabel}
          </div>
        </div>
      </header>

      <h3 className="atelier-display font-medium text-[1.45rem] text-[hsl(var(--ink))] leading-snug">
        {client}
      </h3>

      <dl className="atelier-body mt-6 space-y-5 text-[hsl(var(--ink))]/85">
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.problemLabel}
          </dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.approachLabel}
          </dt>
          <dd>{approach}</dd>
        </div>
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.outcomeLabel}
          </dt>
          <dd>{outcome}</dd>
        </div>
      </dl>
    </article>
  );
}

function areaLabel(area: CaseStudy['area'], locale: 'en' | 'de'): string {
  if (locale === 'de') {
    if (area === 'pdlc') return 'Agentische PDLC';
    if (area === 'expert') return 'Unabhängige Begutachtung';
    return 'KI-Systeme';
  }
  if (area === 'pdlc') return 'Agentic PDLC';
  if (area === 'expert') return 'Independent expert';
  return 'AI systems';
}
