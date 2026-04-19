interface HowIWorkProps {
  locale?: 'en' | 'de';
}

const stepsEN = [
  {
    num: '01',
    label: 'Assess',
    desc: 'Map the current state — processes, architecture, team maturity, pain points. No assumptions. Data first.',
    detail:
      'Baseline metrics · L0–L4 maturity scoring · process map · risk heatmap',
  },
  {
    num: '02',
    label: 'Design',
    desc: 'Architecture and methodology tailored to your constraints. Brownfield-first. Regulated-industry aware.',
    detail:
      'Blueprint · tool selection · team structure · rollback strategy · success criteria',
  },
  {
    num: '03',
    label: 'Implement',
    desc: 'Hands-on delivery alongside your team. Not a slide deck handoff. I co-ship the first lane, then hand it back clean.',
    detail:
      'Lighthouse lane · eval-driven gating · everything-as-code · pair delivery',
  },
  {
    num: '04',
    label: 'Measure',
    desc: 'Quantified outcomes tied to the baseline. Cycle time, quality, cost. Monthly steering until the team owns it.',
    detail:
      'DORA + custom metrics · before / after · steering cadence · knowledge transfer',
  },
] as const;

const stepsDE = [
  {
    num: '01',
    label: 'Erfassen',
    desc: 'Den Ist-Zustand kartieren — Prozesse, Architektur, Team-Reife, Schmerzpunkte. Keine Annahmen. Daten zuerst.',
    detail:
      'Baseline-Metriken · L0–L4 Reifegrad · Prozesslandkarte · Risiko-Heatmap',
  },
  {
    num: '02',
    label: 'Entwerfen',
    desc: 'Architektur und Methodik, zugeschnitten auf Ihre Randbedingungen. Brownfield zuerst. Regulatorisch bewusst.',
    detail:
      'Blueprint · Tool-Auswahl · Teamstruktur · Rollback-Strategie · Erfolgskriterien',
  },
  {
    num: '03',
    label: 'Umsetzen',
    desc: 'Praktische Auslieferung an der Seite Ihres Teams. Keine Slide-Übergabe. Ich liefere die erste Spur mit, dann übergebe ich sauber.',
    detail:
      'Leuchtturm-Spur · eval-getriebene Gates · everything-as-code · Pair-Delivery',
  },
  {
    num: '04',
    label: 'Messen',
    desc: 'Quantifizierte Ergebnisse gegen die Baseline. Cycle Time, Qualität, Kosten. Monatliches Steering, bis das Team selbst trägt.',
    detail:
      'DORA + eigene Metriken · vorher / nachher · Steering-Kadenz · Wissenstransfer',
  },
] as const;

export default function AtelierHowIWork({ locale = 'en' }: HowIWorkProps) {
  const steps = locale === 'de' ? stepsDE : stepsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '04 / Vorgehen',
          heading: 'Jedes Mandat folgt derselben Disziplin.',
          intro:
            'Erfassen, entwerfen, umsetzen, messen. Vier Schritte, keine Demos, keine Pilotfriedhöfe.',
        }
      : {
          eyebrow: '04 / Method',
          heading: 'Every engagement follows the same discipline.',
          intro:
            'Assess, design, implement, measure. Four steps, no demos, no pilot graveyards.',
        };

  return (
    <section
      aria-labelledby="how-i-work-heading"
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
          <div className="md:col-span-7 md:col-start-4">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
              id="how-i-work-heading"
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
                {step.desc}
              </p>

              <p className="atelier-eyebrow mt-auto text-[hsl(var(--paper))]/45">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
