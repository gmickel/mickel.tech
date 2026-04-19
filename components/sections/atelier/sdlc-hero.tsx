import { CAL_DISCOVERY_30 } from '@/lib/cal';

interface SdlcHeroProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '01 / Agentic PDLC',
  headline: 'From requirements to autonomous delivery.',
  underline: 'autonomous',
  intro:
    "Most engineering orgs are still running yesterday's methodology against agents that already outpace them. Agentic PDLC closes that gap. Start at product and requirements engineering, not at the IDE. Spec-driven, agent-assisted delivery, gated by evals and reviewed by other agents. End state: agents ship features, humans set priorities.",
  primaryCta: 'Book a 30-min discovery call',
  secondaryCta: 'Read the maturity model',
  primaryHref: CAL_DISCOVERY_30,
  secondaryHref: '#maturity',
  metaList: [
    { label: 'Strategy session', value: 'CHF 3–5k' },
    { label: 'Diagnostic', value: 'CHF 15–25k' },
    { label: 'Foundation', value: 'CHF 40–60k' },
    { label: 'Full shift', value: 'CHF 80–150k+' },
  ],
};

const copyDE = {
  eyebrow: '01 / Agentische PDLC',
  headline: 'Von Anforderungen bis zur autonomen Auslieferung.',
  underline: 'autonomen',
  intro:
    'Die meisten Engineering-Organisationen fahren noch die Methodik von gestern, während die Agenten sie längst überholt haben. Agentische PDLC schliesst diese Lücke. Start beim Produkt- und Anforderungsengineering, nicht bei der IDE. Spec-getriebene, agentengestützte Auslieferung, abgesichert durch Evals und Review weiterer Agenten. Endzustand: Agenten liefern Features, Menschen setzen Prioritäten.',
  primaryCta: '30-Minuten-Discovery-Call buchen',
  secondaryCta: 'Reifegradmodell lesen',
  primaryHref: CAL_DISCOVERY_30,
  secondaryHref: '#maturity',
  metaList: [
    { label: 'Strategie-Session', value: 'CHF 3–5k' },
    { label: 'Diagnose', value: 'CHF 15–25k' },
    { label: 'Fundament', value: 'CHF 40–60k' },
    { label: 'Methodenwechsel', value: 'CHF 80–150k+' },
  ],
};

export default function AtelierSdlcHero({ locale = 'en' }: SdlcHeroProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="sdlc-hero-heading"
      className="atelier-dark relative overflow-hidden"
      id="top"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 85% 8%, hsl(17 56% 43% / 0.18) 0%, transparent 50%), radial-gradient(ellipse at 8% 92%, hsl(213 51% 24% / 0.14) 0%, transparent 55%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--paper)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--paper)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 80%)',
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
              id="sdlc-hero-heading"
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
