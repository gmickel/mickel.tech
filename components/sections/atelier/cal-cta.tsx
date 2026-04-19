interface CalCtaProps {
  locale?: 'en' | 'de';
  variant: 'pdlc' | 'transformation';
}

const copyEN = {
  pdlc: {
    eyebrow: '07 / Book a session',
    heading: 'A 30-minute fit call is the cheapest way in.',
    body: "On the call we agree whether agentic PDLC is the right shape for your team, what an engagement looks like, and what the next step would be. No deck. No pre-work. If it isn't a fit, I say so on the call.",
    primary: 'Book a 30-min fit call',
    secondary: 'Email gordon@mickel.tech',
  },
  transformation: {
    eyebrow: '07 / Book a session',
    heading: 'A 30-minute discovery call is the cheapest way in.',
    body: "On the call we map your highest-friction workflow, talk through what an AI system would actually do for you, and agree whether it's worth a process audit. No vendor pitch.",
    primary: 'Book a 30-min discovery call',
    secondary: 'Email gordon@mickel.tech',
  },
};

const copyDE = {
  pdlc: {
    eyebrow: '07 / Termin buchen',
    heading: 'Ein 30-Minuten-Erstgespräch ist der einfachste Einstieg.',
    body: 'Im Gespräch klären wir, ob agentische PDLC die richtige Form für Ihr Team ist, wie ein Mandat aussieht und welcher nächste Schritt sinnvoll wäre. Kein Deck. Keine Vorbereitung. Wenn es nicht passt, sage ich es im Gespräch.',
    primary: '30-Minuten-Erstgespräch buchen',
    secondary: 'E-Mail an gordon@mickel.tech',
  },
  transformation: {
    eyebrow: '07 / Termin buchen',
    heading: 'Ein 30-Minuten-Discovery-Gespräch ist der einfachste Einstieg.',
    body: 'Im Gespräch kartieren wir Ihren reibungsstärksten Workflow, sprechen darüber, was ein KI-System für Sie tatsächlich leisten würde, und klären, ob ein Prozess-Audit lohnt. Keine Anbieterpräsentation.',
    primary: '30-Minuten-Discovery-Gespräch buchen',
    secondary: 'E-Mail an gordon@mickel.tech',
  },
};

export default function AtelierCalCta({ locale = 'en', variant }: CalCtaProps) {
  const c = (locale === 'de' ? copyDE : copyEN)[variant];

  return (
    <section
      aria-labelledby={`cal-cta-${variant}-heading`}
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="book"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {c.eyebrow}
            </span>
          </div>
          <div className="md:col-span-8">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
              id={`cal-cta-${variant}-heading`}
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/75">
              {c.body}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                className="atelier-cta-primary"
                href="https://cal.com/gmickel"
                rel="noopener noreferrer"
                target="_blank"
              >
                {c.primary}
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="atelier-cta-secondary"
                href="mailto:gordon@mickel.tech"
              >
                {c.secondary}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
