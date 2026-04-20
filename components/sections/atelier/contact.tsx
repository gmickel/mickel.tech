interface AtelierContactProps {
  locale?: 'en' | 'de';
}

interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly note: string;
  readonly external?: boolean;
}

const channelsEN: readonly ContactChannel[] = [
  {
    label: 'Email',
    value: 'gordon@mickel.tech',
    href: 'mailto:gordon@mickel.tech',
    note: 'For new mandates, expert work, intros.',
  },
  {
    label: 'Calendar',
    value: 'cal.com/gmickel',
    href: 'https://cal.com/gmickel',
    note: '30-min discovery call · agentic PDLC and AI systems.',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gmickel',
    href: 'https://linkedin.com/in/gmickel',
    note: 'Public network · weak ties welcome.',
    external: true,
  },
  {
    label: 'Confidential intake',
    value: 'For independent expert work →',
    href: '/expert#intake',
    note: 'Counsel, courts, arbitrators · DE / EN.',
  },
] as const;

const channelsDE: readonly ContactChannel[] = [
  {
    label: 'E-Mail',
    value: 'gordon@mickel.tech',
    href: 'mailto:gordon@mickel.tech',
    note: 'Für neue Mandate, Begutachtungen, Vorstellung über Dritte.',
  },
  {
    label: 'Kalender',
    value: 'cal.com/gmickel',
    href: 'https://cal.com/gmickel',
    note: '30 Min. Erstgespräch · agentische PDLC und KI-Systeme.',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gmickel',
    href: 'https://linkedin.com/in/gmickel',
    note: 'Öffentliches Netzwerk · auch lose Kontakte willkommen.',
    external: true,
  },
  {
    label: 'Vertrauliche Anfrage',
    value: 'Für unabhängige Begutachtung →',
    href: '/de/expert#intake',
    note: 'Anwaltskanzleien, Gerichte, Schiedsrichter · DE / EN.',
  },
] as const;

export default function AtelierContact({ locale = 'en' }: AtelierContactProps) {
  const channels = locale === 'de' ? channelsDE : channelsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '06 / Kontakt',
          heading: 'Reden wir über Ihr Mandat.',
          intro:
            'Eine kleine Zahl ausgewählter Mandate pro Jahr. Erstgespräch in der Regel innerhalb von 48 Stunden. Schriftliche Anfragen schneller.',
          location: 'Binningen, Schweiz · DE / EN',
          status: 'Status',
          statusValue: 'Q2 2026 -- wenige Plätze offen',
        }
      : {
          eyebrow: '06 / Contact',
          heading: "Let's talk about the mandate.",
          intro:
            'A small number of select mandates each year. First call usually within 48 hours. Written enquiries faster.',
          location: 'Binningen, Switzerland · DE / EN',
          status: 'Status',
          statusValue: 'Q2 2026, a few slots open',
        };

  return (
    <section
      aria-labelledby="contact-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="contact"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Left: heading */}
          <div className="md:col-span-5">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrow}
            </span>
            <h2
              className="atelier-display mt-4 font-medium text-[clamp(2.2rem,1.4rem+3vw,4rem)] text-[hsl(var(--paper))]"
              id="contact-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-lead mt-6 max-w-[40ch] text-[hsl(var(--paper))]/75">
              {labels.intro}
            </p>

            <dl className="mt-10 space-y-5 border-[hsl(var(--paper))]/10 border-t pt-6">
              <div>
                <dt className="atelier-eyebrow text-[hsl(var(--paper))]/45">
                  {labels.status}
                </dt>
                <dd className="mt-1 text-[hsl(var(--paper))]">
                  <span className="mr-2 inline-block h-2 w-2 translate-y-[-2px] rounded-full bg-[hsl(var(--rust))]" />
                  {labels.statusValue}
                </dd>
              </div>
              <div>
                <dt className="atelier-eyebrow text-[hsl(var(--paper))]/45">
                  {locale === 'de' ? 'Standort' : 'Location'}
                </dt>
                <dd className="mt-1 text-[hsl(var(--paper))]">
                  {labels.location}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: channels */}
          <div className="md:col-span-7">
            <ul className="divide-y divide-[hsl(var(--paper))]/10 border-[hsl(var(--paper))]/10 border-y">
              {channels.map((ch) => (
                <li key={ch.label}>
                  <a
                    className="group block py-6 transition-colors hover:bg-[hsl(var(--paper))]/[0.04]"
                    href={ch.href}
                    {...(ch.external
                      ? { rel: 'noopener noreferrer', target: '_blank' }
                      : {})}
                  >
                    <div className="grid grid-cols-12 items-baseline gap-6">
                      <span className="atelier-eyebrow col-span-3 text-[hsl(var(--paper))]/45">
                        {ch.label}
                      </span>
                      <span className="atelier-display col-span-7 text-[1.3rem] text-[hsl(var(--paper))] transition-colors group-hover:text-[hsl(var(--rust))] md:text-[1.5rem]">
                        {ch.value}
                      </span>
                      <span
                        aria-hidden="true"
                        className="col-span-2 text-right text-[hsl(var(--paper))]/45 transition-colors group-hover:text-[hsl(var(--paper))]"
                      >
                        →
                      </span>
                    </div>
                    <p className="mt-2 text-[hsl(var(--paper))]/55 text-sm">
                      {ch.note}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
