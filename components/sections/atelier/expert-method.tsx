interface ExpertMethodProps {
  locale?: 'en' | 'de';
}

const stepsEN = [
  {
    num: '01',
    label: 'Intake',
    detail:
      'Confidential 30-minute call. Matter type, jurisdiction, deadline. Conflict declaration. Engagement letter and scope.',
    timeframe: 'Within 48 hours',
  },
  {
    num: '02',
    label: 'Review',
    detail:
      'Documents, contracts, source repositories, infrastructure access. First impressions call within 5–7 working days. Question catalogue iterated with you.',
    timeframe: 'Days 1–10',
  },
  {
    num: '03',
    label: 'Drafting',
    detail:
      'Structured opinion: Auftrag, Methodik, Sachverhalt, Befunde, Würdigung, Kernbefunde. Two review cycles standard. Track changes welcome.',
    timeframe: 'Weeks 2–6',
  },
  {
    num: '04',
    label: 'Delivery & hearings',
    detail:
      'Final report under your cover. Oral readiness for hearings or steering committees. Available DE / EN. Aftercare on follow-up questions.',
    timeframe: 'On hearing date',
  },
] as const;

const stepsDE = [
  {
    num: '01',
    label: 'Erstgespräch',
    detail:
      'Vertrauliches 30-Minuten-Gespräch. Sachverhaltstyp, Jurisdiktion, Frist. Konfliktdeklaration. Auftragsbestätigung und Umfang.',
    timeframe: 'Innerhalb 48 Stunden',
  },
  {
    num: '02',
    label: 'Aktendurchsicht',
    detail:
      'Unterlagen, Verträge, Quellcode-Repositories, Infrastruktur-Zugang. Gespräch zu ersten Eindrücken innerhalb 5–7 Arbeitstagen. Fragenkatalog gemeinsam iteriert.',
    timeframe: 'Tage 1–10',
  },
  {
    num: '03',
    label: 'Ausarbeitung',
    detail:
      'Strukturiertes Gutachten: Auftrag, Methodik, Sachverhalt, Befunde, Würdigung, Kernbefunde. Standardmässig zwei Review-Zyklen. Änderungsverfolgung willkommen.',
    timeframe: 'Wochen 2–6',
  },
  {
    num: '04',
    label: 'Lieferung & Verhandlung',
    detail:
      'Schlussbericht unter Ihrem Briefkopf. Mündliche Bereitschaft für Verhandlungen oder Steering-Committees. DE / EN. Nachbetreuung bei Folgefragen.',
    timeframe: 'Am Verhandlungstag',
  },
] as const;

export default function AtelierExpertMethod({
  locale = 'en',
}: ExpertMethodProps) {
  const steps = locale === 'de' ? stepsDE : stepsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '03 / Vorgehen',
          heading: 'Wie ein Gutachten entsteht.',
          intro:
            'Vier Phasen, klare Übergaben, dokumentierte Methodik. Auch in beschleunigten Verfahren keine Abkürzungen.',
        }
      : {
          eyebrow: '03 / Method',
          heading: 'How an opinion is produced.',
          intro:
            'Four phases, clear handovers, documented methodology. No shortcuts even on accelerated matters.',
        };

  return (
    <section
      aria-labelledby="expert-method-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="method"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrow}
            </span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
              id="expert-method-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/65">
              {labels.intro}
            </p>
          </div>
        </header>

        <ol className="grid grid-cols-1 gap-px bg-[hsl(var(--paper))]/15 md:grid-cols-4">
          {steps.map((step, i) => (
            <li
              className="relative flex flex-col gap-5 bg-[hsl(var(--graphite))] p-7 md:p-9"
              key={step.num}
            >
              <div className="flex items-baseline justify-between">
                <span className="atelier-numerals text-3xl text-[hsl(var(--rust))]">
                  {step.num}
                </span>
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="text-[hsl(var(--paper))]/35 text-lg"
                  >
                    →
                  </span>
                ) : null}
              </div>

              <h3 className="atelier-display font-medium text-[1.55rem] text-[hsl(var(--paper))]">
                {step.label}
              </h3>

              <p className="atelier-body text-[hsl(var(--paper))]/75">
                {step.detail}
              </p>

              <p className="atelier-eyebrow mt-auto text-[hsl(var(--rust))]">
                {step.timeframe}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
