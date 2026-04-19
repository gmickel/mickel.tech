import Image from 'next/image';

interface AtelierHeroProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '01 / Practice',
  headlineParts: ['I design AI', 'systems that', 'actually work.'] as const,
  underline: 'actually',
  intro:
    'Operating Principal, AI & Technology at Growth Factors (Bregal portfolio). Independent practice for a small number of select mandates each year — agentic PDLC, production AI systems, and party-engaged technical opinion.',
  primaryCta: 'Discuss a mandate',
  secondaryCta: 'Independent expert work',
  caption: 'Gordon Mickel · Basel, Switzerland',
  captionMeta: '20+ years · DE / EN',
};

const copyDE = {
  eyebrow: '01 / Praxis',
  headlineParts: [
    'Ich entwerfe KI-',
    'Systeme, die',
    'wirklich funktionieren.',
  ] as const,
  underline: 'wirklich',
  intro:
    'Operating Principal, KI & Technologie bei Growth Factors (Bregal-Portfolio). Unabhängige Praxis für eine kleine Anzahl ausgewählter Mandate jedes Jahr — agentische PDLC, produktive KI-Systeme und parteiisch beauftragte technische Begutachtung.',
  primaryCta: 'Mandat besprechen',
  secondaryCta: 'Unabhängige Begutachtung',
  caption: 'Gordon Mickel · Basel, Schweiz',
  captionMeta: '20+ Jahre · DE / EN',
};

export default function AtelierHero({ locale = 'en' }: AtelierHeroProps) {
  const c = locale === 'de' ? copyDE : copyEN;
  const expertHref = locale === 'de' ? '/de/expert' : '/expert';

  return (
    <section
      aria-labelledby="hero-heading"
      className="atelier-dark relative overflow-hidden"
      id="top"
    >
      {/* Subtle warm radial — atmosphere, not vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 78% 18%, hsl(17 56% 43% / 0.10) 0%, transparent 55%)',
        }}
      />

      {/* Subtle 1px grid that fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--paper)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--paper)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 pt-14 pb-20 md:px-10 md:pt-24 md:pb-28">
        {/* Eyebrow + diagonal rule sweep */}
        <div className="mb-12 flex items-center gap-6">
          <span className="atelier-eyebrow text-[hsl(var(--rust))]">
            {c.eyebrow}
          </span>
          <span
            aria-hidden="true"
            className="atelier-sweep h-px flex-1 origin-left bg-[hsl(var(--paper))]/25"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          {/* Left: editorial content */}
          <div className="md:col-span-7">
            <h1
              className="atelier-display font-medium text-[clamp(2.8rem,1.6rem+5.4vw,6.5rem)] text-[hsl(var(--paper))]"
              id="hero-heading"
            >
              <span
                className="atelier-rise block"
                style={{ animationDelay: '0.05s' }}
              >
                {c.headlineParts[0]}
              </span>
              <span
                className="atelier-rise block"
                style={{ animationDelay: '0.18s' }}
              >
                {c.headlineParts[1]}
              </span>
              <span
                className="atelier-rise block"
                style={{ animationDelay: '0.32s' }}
              >
                {renderUnderlinedHeadline(c.headlineParts[2], c.underline)}
              </span>
            </h1>

            <p
              className="atelier-rise atelier-lead mt-9 max-w-[44ch] text-[hsl(var(--paper))]/80"
              style={{ animationDelay: '0.55s' }}
            >
              {c.intro}
            </p>

            <div
              className="atelier-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.7s' }}
            >
              <a className="atelier-cta-primary" href="#contact">
                {c.primaryCta}
                <span aria-hidden="true">→</span>
              </a>
              <a className="atelier-cta-secondary" href={expertHref}>
                {c.secondaryCta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right: portrait card */}
          <div className="md:col-span-5">
            <figure
              className="atelier-rise relative ml-auto max-w-md"
              style={{ animationDelay: '0.4s' }}
            >
              {/* Card frame */}
              <div className="relative aspect-[4/5] overflow-hidden border border-[hsl(var(--paper))]/20 bg-[hsl(var(--graphite-border))]">
                <Image
                  alt={
                    locale === 'de'
                      ? 'Gordon Mickel, KI-Systemarchitekt'
                      : 'Gordon Mickel, AI systems architect'
                  }
                  className="h-full w-full object-cover object-top"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                  src="/portraits/gordon-mickel.jpg"
                />
                {/* Subtle warm overlay to harmonize with palette */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 65%, hsl(var(--graphite) / 0.55) 100%)',
                  }}
                />
                {/* Corner brand mark */}
                <span
                  aria-hidden="true"
                  className="atelier-eyebrow pointer-events-none absolute top-3 left-3 text-[hsl(var(--paper))]/80"
                >
                  GM / 2026
                </span>
              </div>

              <figcaption className="mt-4 flex items-baseline justify-between border-[hsl(var(--paper))]/10 border-t pt-3">
                <span className="atelier-body text-[hsl(var(--paper))]/85">
                  {c.caption}
                </span>
                <span className="atelier-eyebrow text-[hsl(var(--paper))]/45">
                  {c.captionMeta}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the third headline line with a rust underline beneath the emphasis word.
 * Keeps the underline an artisan typographic accent, not a link.
 */
function renderUnderlinedHeadline(line: string, emphasis: string) {
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
