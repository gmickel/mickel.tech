interface ExpertHeroProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '01 / Independent expert',
  headlineParts: [
    'Twenty years of code that ships.',
    'Now read carefully, and on the record.',
  ] as const,
  intro:
    'Independent technical expert (ITDR-listed) for software and AI matters. Engaged by counsel, courts, arbitrators and boards across Switzerland and Germany. I trace claims through code, infrastructure and contracts — not just through the management summary.',
  primaryCta: 'Open a confidential intake',
  secondaryCta: 'How an opinion is produced',
  primaryHref: '#intake',
  secondaryHref: '#method',
  metaList: [
    { label: 'Listing', value: 'ITDR (CH)' },
    { label: 'Languages', value: 'DE / EN' },
    { label: 'Jurisdictions', value: 'CH · DE · AT · EU' },
    { label: 'Engineering', value: '20+ years' },
  ],
};

const copyDE = {
  eyebrow: '01 / Unabhängige Begutachtung',
  headlineParts: [
    'Zwanzig Jahre Code, der ausgeliefert wurde.',
    'Jetzt sorgfältig gelesen, und zu Protokoll gegeben.',
  ] as const,
  intro:
    'Unabhängiger technischer Experte (ITDR-gelistet) für Software- und KI-Sachverhalte. Im Auftrag von Anwaltskanzleien, Gerichten, Schiedsrichtern und Verwaltungsräten in der Schweiz und in Deutschland. Ich verfolge Behauptungen durch Code, Infrastruktur und Verträge, nicht nur durch das Management-Summary.',
  primaryCta: 'Vertrauliche Anfrage öffnen',
  secondaryCta: 'Wie ein Gutachten entsteht',
  primaryHref: '#intake',
  secondaryHref: '#method',
  metaList: [
    { label: 'Listung', value: 'ITDR (CH)' },
    { label: 'Sprachen', value: 'DE / EN' },
    { label: 'Jurisdiktionen', value: 'CH · DE · AT · EU' },
    { label: 'Engineering', value: '20+ Jahre' },
  ],
};

export default function AtelierExpertHero({ locale = 'en' }: ExpertHeroProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="expert-hero-heading"
      className="atelier-dark relative overflow-hidden"
      id="top"
    >
      {/* Restrained navy + rust glow — calm, almost-legal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 12% 95%, hsl(213 51% 24% / 0.18) 0%, transparent 55%), radial-gradient(ellipse at 90% 5%, hsl(17 56% 43% / 0.08) 0%, transparent 50%)',
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
          {/* Headline */}
          <div className="md:col-span-9">
            <h1
              className="atelier-display font-medium text-[clamp(2.4rem,1.4rem+4.4vw,5.5rem)] text-[hsl(var(--paper))]"
              id="expert-hero-heading"
            >
              <span
                className="atelier-rise block"
                style={{ animationDelay: '0.05s' }}
              >
                {c.headlineParts[0]}
              </span>
              <span
                className="atelier-rise mt-2 block text-[hsl(var(--paper))]/65 italic"
                style={{ animationDelay: '0.22s' }}
              >
                {c.headlineParts[1]}
              </span>
            </h1>

            <p
              className="atelier-rise atelier-lead mt-10 max-w-[58ch] text-[hsl(var(--paper))]/80"
              style={{ animationDelay: '0.45s' }}
            >
              {c.intro}
            </p>

            <div
              className="atelier-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.6s' }}
            >
              <a className="atelier-cta-primary" href={c.primaryHref}>
                {c.primaryCta}
                <span aria-hidden="true">→</span>
              </a>
              <a className="atelier-cta-secondary" href={c.secondaryHref}>
                {c.secondaryCta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right column: ITDR meta panel */}
          <div className="md:col-span-3">
            <dl
              className="atelier-rise mt-1 space-y-5 border-[hsl(var(--paper))]/15 border-l pl-5"
              style={{ animationDelay: '0.55s' }}
            >
              {c.metaList.map((m) => (
                <div key={m.label}>
                  <dt className="atelier-eyebrow text-[hsl(var(--paper))]/45">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-[hsl(var(--paper))]">{m.value}</dd>
                </div>
              ))}
              <div className="border-[hsl(var(--paper))]/10 border-t pt-5">
                <a
                  className="atelier-link inline-flex items-center gap-2 text-sm"
                  href="https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {locale === 'de'
                    ? 'ITDR-Profil ansehen'
                    : 'View ITDR profile'}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
