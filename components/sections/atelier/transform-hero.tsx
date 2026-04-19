interface TransformHeroProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '01 / AI systems & transformation',
  headline: 'AI systems that run your business, not just demo well.',
  underline: 'run',
  intro:
    'Every engagement starts with a process map, not a tool. Where the data lives. Where the bottlenecks are. What breaks at scale. Then I build the context layer and ship production systems on top — enterprise RAG, autonomous agents, voice, private LLM infrastructure.',
  primaryCta: 'Book a discovery call',
  secondaryCta: 'See three productised offers',
  primaryHref: 'https://cal.com/gmickel',
  secondaryHref: '#offers',
  metaList: [
    { label: 'Approach', value: 'Process-first' },
    { label: 'Audit', value: 'CHF 15–25k' },
    { label: 'System build', value: 'CHF 40–150k' },
    { label: 'Fractional lead', value: 'Retainer' },
  ],
};

const copyDE = {
  eyebrow: '01 / KI-Systeme & Transformation',
  headline:
    'KI-Systeme, die Ihr Geschäft tragen — nicht nur in der Demo glänzen.',
  underline: 'tragen',
  intro:
    'Jedes Mandat beginnt mit einer Prozesslandkarte, nicht mit einem Tool. Wo liegen die Daten. Wo sind die Engpässe. Was bricht im Skalierungsfall. Dann baue ich die Kontextschicht und liefere produktive Systeme darauf — Enterprise-RAG, autonome Agenten, Voice, private LLM-Infrastruktur.',
  primaryCta: 'Discovery-Gespräch buchen',
  secondaryCta: 'Drei produktisierte Pakete',
  primaryHref: 'https://cal.com/gmickel',
  secondaryHref: '#offers',
  metaList: [
    { label: 'Ansatz', value: 'Prozess zuerst' },
    { label: 'Audit', value: 'CHF 15–25k' },
    { label: 'System-Build', value: 'CHF 40–150k' },
    { label: 'Fractional Lead', value: 'Retainer' },
  ],
};

export default function AtelierTransformHero({
  locale = 'en',
}: TransformHeroProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="transform-hero-heading"
      className="atelier-dark relative overflow-hidden"
      id="top"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 6% 10%, hsl(213 51% 24% / 0.18) 0%, transparent 55%), radial-gradient(ellipse at 92% 90%, hsl(17 56% 43% / 0.10) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 pt-16 pb-24 md:px-10 md:pt-28 md:pb-32">
        <div className="mb-12 flex items-center gap-6">
          <span className="atelier-eyebrow text-[hsl(var(--rust))]">
            {c.eyebrow}
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
              id="transform-hero-heading"
              style={{ animationDelay: '0.05s' }}
            >
              {renderHeadlineWithUnderline(c.headline, c.underline)}
            </h1>

            <p
              className="atelier-rise atelier-lead mt-10 max-w-[60ch] text-[hsl(var(--paper))]/80"
              style={{ animationDelay: '0.32s' }}
            >
              {c.intro}
            </p>

            <div
              className="atelier-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                className="atelier-cta-primary"
                href={c.primaryHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {c.primaryCta}
                <span aria-hidden="true">→</span>
              </a>
              <a className="atelier-cta-secondary" href={c.secondaryHref}>
                {c.secondaryCta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <dl
              className="atelier-rise mt-1 space-y-5 border-[hsl(var(--paper))]/15 border-l pl-5"
              style={{ animationDelay: '0.4s' }}
            >
              {c.metaList.map((m) => (
                <div key={m.label}>
                  <dt className="atelier-eyebrow text-[hsl(var(--paper))]/45">
                    {m.label}
                  </dt>
                  <dd className="atelier-numerals mt-1 text-[hsl(var(--paper))]">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderHeadlineWithUnderline(line: string, emphasis: string) {
  if (!line.includes(emphasis)) {
    return line;
  }
  const [before, ...rest] = line.split(emphasis);
  const after = rest.join(emphasis);
  return (
    <>
      {before}
      <span className="relative inline-block">
        <span className="relative z-10 italic">{emphasis}</span>
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-[0.08em] left-0 h-[0.06em] bg-[hsl(var(--rust))]"
        />
      </span>
      {after}
    </>
  );
}
