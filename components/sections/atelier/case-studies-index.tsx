import SmartLink from '@/components/atelier/smart-link';
import {
  CASE_STUDIES,
  CASE_STUDY_AREAS,
  type CaseStudy,
  type CaseStudyArea,
} from '@/lib/case-studies';

interface CaseStudiesIndexProps {
  locale?: 'en' | 'de';
}

export default function AtelierCaseStudiesIndex({
  locale = 'en',
}: CaseStudiesIndexProps) {
  const labels =
    locale === 'de'
      ? {
          eyebrowHero: '01 / Auswahl an Mandaten',
          headingHero: 'Mandate, gruppiert nach Praxisfeld.',
          introHero:
            'Ausgewählte Mandate aus den drei Praxisfeldern -- agentische PDLC, unabhängige Begutachtung, KI-Systeme und Transformation. Reale Ergebnisse, reale Zahlen.',
          legend:
            'Insgesamt {count} Mandate · {pdlc} agentische PDLC · {expert} Begutachtung · {systems} KI-Systeme',
          problem: 'Problem',
          approach: 'Vorgehen',
          outcome: 'Ergebnis',
          named: 'Genannt',
          related: 'Verwandte Praxis',
        }
      : {
          eyebrowHero: '01 / Selected work',
          headingHero: 'Engagements grouped by practice area.',
          introHero:
            'Selected engagements across the three areas: agentic PDLC, independent expert work, AI systems and transformation. Real outcomes, real numbers.',
          legend:
            '{count} engagements total · {pdlc} agentic PDLC · {expert} expert · {systems} AI systems',
          problem: 'Problem',
          approach: 'Approach',
          outcome: 'Outcome',
          named: 'Named',
          related: 'Related practice',
        };

  const counts: Record<CaseStudyArea, number> = {
    pdlc: CASE_STUDIES.filter((s) => s.area === 'pdlc').length,
    expert: CASE_STUDIES.filter((s) => s.area === 'expert').length,
    systems: CASE_STUDIES.filter((s) => s.area === 'systems').length,
  };

  const legend = labels.legend
    .replace('{count}', String(CASE_STUDIES.length))
    .replace('{pdlc}', String(counts.pdlc))
    .replace('{expert}', String(counts.expert))
    .replace('{systems}', String(counts.systems));

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="case-studies-hero-heading"
        className="atelier-dark relative overflow-hidden"
        id="top"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% -10%, hsl(17 56% 43% / 0.10) 0%, transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-[1480px] px-6 pt-16 pb-20 md:px-10 md:pt-28 md:pb-24">
          <div className="mb-12 flex items-center gap-6">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrowHero}
            </span>
            <span
              aria-hidden="true"
              className="atelier-sweep h-px flex-1 origin-left bg-[hsl(var(--paper))]/25"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-9">
              <h1
                className="atelier-display atelier-rise font-medium text-[clamp(2.4rem,1.4rem+4.4vw,5.5rem)] text-[hsl(var(--paper))]"
                id="case-studies-hero-heading"
                style={{ animationDelay: '0.05s' }}
              >
                {labels.headingHero}
              </h1>

              <p
                className="atelier-rise atelier-lead mt-10 max-w-[60ch] text-[hsl(var(--paper))]/80"
                style={{ animationDelay: '0.32s' }}
              >
                {labels.introHero}
              </p>

              <p
                className="atelier-rise atelier-eyebrow mt-8 text-[hsl(var(--paper))]/55"
                style={{ animationDelay: '0.5s' }}
              >
                {legend}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Per-area sections */}
      {CASE_STUDY_AREAS.map((areaMeta, areaIdx) => {
        const studies = CASE_STUDIES.filter((s) => s.area === areaMeta.id);
        if (!studies.length) {
          return null;
        }
        const isLight = areaIdx % 2 === 0;
        return (
          <AreaSection
            areaMeta={areaMeta}
            isLight={isLight}
            key={areaMeta.id}
            labels={labels}
            locale={locale}
            studies={studies}
          />
        );
      })}
    </>
  );
}

function AreaSection({
  areaMeta,
  studies,
  isLight,
  locale,
  labels,
}: {
  areaMeta: (typeof CASE_STUDY_AREAS)[number];
  studies: readonly CaseStudy[];
  isLight: boolean;
  locale: 'en' | 'de';
  labels: {
    problem: string;
    approach: string;
    outcome: string;
    named: string;
    related: string;
  };
}) {
  const sectionClass = isLight
    ? 'atelier-paper border-t border-[hsl(var(--ink))]/10'
    : 'atelier-dark border-t border-[hsl(var(--paper))]/10';
  const dividerClass = isLight
    ? 'bg-[hsl(var(--ink))]/12'
    : 'bg-[hsl(var(--paper))]/15';
  const cardClass = isLight
    ? 'bg-[hsl(var(--paper))]'
    : 'bg-[hsl(var(--graphite))]';
  const headingColor = isLight
    ? 'text-[hsl(var(--ink))]'
    : 'text-[hsl(var(--paper))]';
  const mutedColor = isLight
    ? 'text-[hsl(var(--paper-muted))]'
    : 'text-[hsl(var(--paper))]/70';
  const ruleColor = isLight
    ? 'border-[hsl(var(--ink))]/15'
    : 'border-[hsl(var(--paper))]/15';

  const areaLabel = locale === 'de' ? areaMeta.labelDE : areaMeta.labelEN;
  const areaHref = locale === 'de' ? areaMeta.hrefDE : areaMeta.href;
  const headingId = `area-${areaMeta.id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={`relative ${sectionClass}`}
      id={areaMeta.id}
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header
          className={`mb-12 flex flex-col gap-6 border-b ${ruleColor} pb-8 md:flex-row md:items-end md:justify-between md:pb-10`}
        >
          <div>
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {`0${CASE_STUDY_AREAS.findIndex((a) => a.id === areaMeta.id) + 2} / ${areaLabel}`}
            </span>
            <h2
              className={`atelier-display mt-3 font-medium text-[clamp(1.85rem,1.3rem+2vw,3rem)] ${headingColor}`}
              id={headingId}
            >
              {areaLabel}
            </h2>
          </div>
          <SmartLink
            className={`inline-flex items-center gap-2 ${headingColor} font-medium text-sm transition-colors hover:text-[hsl(var(--rust))]`}
            href={areaHref}
          >
            {labels.related}
            <span aria-hidden="true">→</span>
          </SmartLink>
        </header>

        <div
          className={`grid grid-cols-1 gap-px md:grid-cols-2 ${dividerClass}`}
        >
          {studies.map((study) => (
            <CaseStudyEntry
              cardClass={cardClass}
              headingColor={headingColor}
              key={study.id}
              labels={labels}
              locale={locale}
              mutedColor={mutedColor}
              ruleClass={ruleColor}
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
  cardClass,
  headingColor,
  mutedColor,
  ruleClass,
  labels,
}: {
  study: CaseStudy;
  locale: 'en' | 'de';
  cardClass: string;
  headingColor: string;
  mutedColor: string;
  ruleClass: string;
  labels: {
    problem: string;
    approach: string;
    outcome: string;
    named: string;
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

  return (
    <article className={`flex flex-col p-8 md:p-12 ${cardClass}`}>
      <header
        className={`mb-6 flex items-baseline justify-between gap-4 border-b ${ruleClass} pb-5`}
      >
        <div className="flex items-baseline gap-4">
          <span className="atelier-numerals text-2xl text-[hsl(var(--rust))]">
            {study.number}
          </span>
          {study.named ? (
            <span className="atelier-eyebrow text-[hsl(var(--rust))]/85">
              {labels.named}
            </span>
          ) : null}
        </div>
        <div className="text-right">
          <div
            className={`atelier-numerals text-[1.65rem] leading-none ${headingColor}`}
          >
            {metricValue}
          </div>
          <div
            className={`mt-1 text-[11px] uppercase tracking-wider ${mutedColor}`}
          >
            {metricLabel}
          </div>
        </div>
      </header>

      <h3
        className={`atelier-display font-medium text-[1.45rem] leading-snug ${headingColor}`}
      >
        {client}
      </h3>

      <dl className={`atelier-body mt-6 space-y-5 ${mutedColor}`}>
        <div>
          <dt className={`atelier-eyebrow mb-1 ${mutedColor}`}>
            {labels.problem}
          </dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt className={`atelier-eyebrow mb-1 ${mutedColor}`}>
            {labels.approach}
          </dt>
          <dd>{approach}</dd>
        </div>
        <div>
          <dt className={`atelier-eyebrow mb-1 ${mutedColor}`}>
            {labels.outcome}
          </dt>
          <dd>{outcome}</dd>
        </div>
      </dl>
    </article>
  );
}
