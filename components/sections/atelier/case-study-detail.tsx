import { CAL_DISCOVERY_30 } from '@/lib/cal';
import {
  CASE_STUDIES,
  CASE_STUDY_AREAS,
  type CaseStudy,
  type CaseStudyAreaMeta,
} from '@/lib/case-studies';

interface CaseStudyDetailProps {
  study: CaseStudy;
  locale?: 'en' | 'de';
}

export default function AtelierCaseStudyDetail({
  study,
  locale = 'en',
}: CaseStudyDetailProps) {
  const areaMeta = CASE_STUDY_AREAS.find((a) => a.id === study.area);
  if (!areaMeta) {
    return null;
  }

  const labels =
    locale === 'de'
      ? {
          eyebrow: 'Mandat',
          back: 'Alle Fallstudien',
          backHref: '/de/case-studies',
          areaLabel: 'Praxisfeld',
          metricLabel: 'Kennzahl',
          problemLabel: 'Problem',
          approachLabel: 'Vorgehen',
          outcomeLabel: 'Ergebnis',
          relatedLabel: 'Verwandte Praxis',
          ctaHeading: 'Klingt vertraut?',
          ctaBody:
            'Wenn Ihr Mandat in eine ähnliche Form passt, ist ein 30-Minuten-Erstgespräch der schnellste Weg, das festzustellen.',
          primary: '30-Minuten-Erstgespräch buchen',
          secondary: 'Vertrauliche Anfrage (Begutachtung)',
          secondaryHref: '/de/expert#intake',
          named: 'Genannt',
        }
      : {
          eyebrow: 'Engagement',
          back: 'All case studies',
          backHref: '/case-studies',
          areaLabel: 'Practice area',
          metricLabel: 'Metric',
          problemLabel: 'Problem',
          approachLabel: 'Approach',
          outcomeLabel: 'Outcome',
          relatedLabel: 'Related practice',
          ctaHeading: 'Sound familiar?',
          ctaBody:
            'If your engagement fits a similar shape, a 30-minute fit call is the cheapest way to find out.',
          primary: 'Book a 30-min fit call',
          secondary: 'Confidential expert intake',
          secondaryHref: '/expert#intake',
          named: 'Named',
        };

  const client = locale === 'de' ? study.clientDE : study.clientEN;
  const problem = locale === 'de' ? study.problemDE : study.problemEN;
  const approach = locale === 'de' ? study.approachDE : study.approachEN;
  const outcome = locale === 'de' ? study.outcomeDE : study.outcomeEN;
  const metricValue =
    locale === 'de' ? study.metricValueDE : study.metricValueEN;
  const metricLabel =
    locale === 'de' ? study.metricLabelDE : study.metricLabelEN;
  const areaLabel = locale === 'de' ? areaMeta.labelDE : areaMeta.labelEN;
  const areaHref = locale === 'de' ? areaMeta.hrefDE : areaMeta.href;

  // Find adjacent studies in the same area for related navigation
  const sameArea = CASE_STUDIES.filter(
    (s) => s.area === study.area && s.id !== study.id
  ).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="case-detail-heading"
        className="atelier-dark relative overflow-hidden"
        id="top"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 80% 12%, hsl(17 56% 43% / 0.10) 0%, transparent 55%), radial-gradient(ellipse at 5% 90%, hsl(213 51% 24% / 0.14) 0%, transparent 55%)',
          }}
        />

        <div className="relative mx-auto max-w-[1480px] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-28">
          <div className="mb-10 flex items-center justify-between gap-6">
            <a
              className="atelier-eyebrow inline-flex items-center gap-2 text-[hsl(var(--paper))]/55 transition-colors hover:text-[hsl(var(--paper))]"
              href={labels.backHref}
            >
              <span aria-hidden="true">←</span>
              {labels.back}
            </a>
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {study.number} / {labels.eyebrow}
            </span>
          </div>

          <div className="mb-12 flex items-center gap-6">
            <span className="atelier-eyebrow text-[hsl(var(--paper))]/55">
              {labels.areaLabel}
            </span>
            <a
              className="atelier-link text-[hsl(var(--paper))] text-sm"
              href={areaHref}
            >
              {areaLabel}
            </a>
            {study.named ? (
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                · {labels.named}
              </span>
            ) : null}
          </div>

          <h1
            className="atelier-display atelier-rise font-medium text-[clamp(2.2rem,1.4rem+3.8vw,5rem)] text-[hsl(var(--paper))]"
            id="case-detail-heading"
            style={{ animationDelay: '0.05s' }}
          >
            {client}
          </h1>

          <div
            className="atelier-rise mt-12 grid gap-10 border-[hsl(var(--paper))]/15 border-t pt-10 md:grid-cols-12 md:gap-14"
            style={{ animationDelay: '0.32s' }}
          >
            <div className="md:col-span-3">
              <span className="atelier-eyebrow text-[hsl(var(--paper))]/55">
                {labels.metricLabel}
              </span>
              <div className="atelier-numerals mt-3 text-[clamp(2.5rem,1.6rem+3vw,4.5rem)] text-[hsl(var(--paper))] leading-none">
                {metricValue}
              </div>
              <div className="atelier-eyebrow mt-2 text-[hsl(var(--paper))]/55">
                {metricLabel}
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="atelier-lead text-[hsl(var(--paper))]/85">
                {problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach + Outcome */}
      <section
        aria-label="Approach and outcome"
        className="atelier-paper atelier-paper-grain relative"
      >
        <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <article>
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                01 / {labels.approachLabel}
              </span>
              <h2 className="atelier-display mt-3 font-medium text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] text-[hsl(var(--ink))]">
                {labels.approachLabel}
              </h2>
              <div className="atelier-body mt-6 text-[hsl(var(--ink))]/85">
                {approach}
              </div>
            </article>
            <article>
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                02 / {labels.outcomeLabel}
              </span>
              <h2 className="atelier-display mt-3 font-medium text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] text-[hsl(var(--ink))]">
                {labels.outcomeLabel}
              </h2>
              <div className="atelier-body mt-6 text-[hsl(var(--ink))]/85">
                {outcome}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related work in the same area */}
      {sameArea.length > 0 ? (
        <RelatedSection
          areaMeta={areaMeta}
          labels={labels}
          locale={locale}
          studies={sameArea}
        />
      ) : null}

      {/* CTA */}
      <section
        aria-label={labels.ctaHeading}
        className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      >
        <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-4">
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                {labels.ctaHeading}
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="atelier-lead max-w-[60ch] text-[hsl(var(--paper))]/80">
                {labels.ctaBody}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="atelier-cta-primary"
                  href={CAL_DISCOVERY_30}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {labels.primary}
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  className="atelier-cta-secondary"
                  href={labels.secondaryHref}
                >
                  {labels.secondary}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RelatedSection({
  studies,
  areaMeta,
  locale,
  labels,
}: {
  studies: readonly CaseStudy[];
  areaMeta: CaseStudyAreaMeta;
  locale: 'en' | 'de';
  labels: { relatedLabel: string };
}) {
  const areaLabel = locale === 'de' ? areaMeta.labelDE : areaMeta.labelEN;
  const heading = locale === 'de' ? 'Verwandte Mandate' : 'Related engagements';
  const linkPrefix = locale === 'de' ? '/de/case-studies' : '/case-studies';

  return (
    <section
      aria-label={heading}
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-24">
        <header className="mb-10 flex items-baseline justify-between gap-6">
          <div>
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.relatedLabel} · {areaLabel}
            </span>
            <h2 className="atelier-display mt-2 font-medium text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] text-[hsl(var(--ink))]">
              {heading}
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-3">
          {studies.map((s) => {
            const c = locale === 'de' ? s.clientDE : s.clientEN;
            const mv = locale === 'de' ? s.metricValueDE : s.metricValueEN;
            const ml = locale === 'de' ? s.metricLabelDE : s.metricLabelEN;
            return (
              <a
                className="atelier-card-hover atelier-wash-rust group flex flex-col bg-[hsl(var(--paper))] p-7 transition-colors hover:bg-[hsl(var(--paper))]/85 md:p-8"
                href={`${linkPrefix}/${s.id}`}
                key={s.id}
              >
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                    {s.number}
                  </span>
                  <span className="atelier-numerals text-[hsl(var(--ink))] text-sm">
                    {mv}
                  </span>
                </div>
                <h3 className="atelier-display font-medium text-[1.15rem] text-[hsl(var(--ink))] leading-snug transition-colors group-hover:text-[hsl(var(--rust))]">
                  {c}
                </h3>
                <p className="atelier-eyebrow mt-2 text-[hsl(var(--paper-muted))]">
                  {ml}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
