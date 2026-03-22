import SectionTitle from '@/components/ui/section-title';

const steps = [
  {
    num: '01',
    label: 'ANALYSIEREN',
    desc: 'Ist-Zustand erfassen: Prozesse, Architektur, Team-Reife, Schmerzpunkte. Keine Annahmen. Daten zuerst.',
    detail:
      'Baseline-Metriken, L0-L4 Reifegradmessung, Prozess-Mapping, Risiko-Heatmap',
  },
  {
    num: '02',
    label: 'DESIGNEN',
    desc: 'Architektur und Methodik massgeschneidert auf Ihre Rahmenbedingungen. Brownfield-first. Regulierungsbewusst.',
    detail:
      'Blueprint, Tool-Auswahl, Teamstruktur, Rollback-Strategie, Erfolgskriterien',
  },
  {
    num: '03',
    label: 'UMSETZEN',
    desc: 'Hands-on Delivery gemeinsam mit Ihrem Team. Kein Slide-Deck-Handoff. Ich liefere die erste Lane mit, dann saubere Übergabe.',
    detail:
      'Lighthouse-Lane, Eval-getriebenes Gating, Everything-as-Code, Pair Delivery',
  },
  {
    num: '04',
    label: 'MESSEN',
    desc: 'Quantifizierte Ergebnisse gegen die Baseline. Cycle Time, Qualität, Kosten. Monatliches Steering bis das Team es selbst trägt.',
    detail:
      'DORA-Metriken, Vorher/Nachher-Vergleich, Steering-Kadenz, Wissenstransfer',
  },
] as const;

export default function HowIWork() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 md:px-20">
      {/* Subtle grid bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            PROZESS
          </p>
          <SectionTitle
            className="mb-4 font-bold text-4xl text-white"
            text="SO ARBEITE ICH"
          />
          <p className="text-lg text-muted-foreground">
            Jedes Engagement folgt derselben Disziplin. Ist-Zustand erfassen,
            Design für Ihre Rahmenbedingungen, Hands-on umsetzen, gegen die
            Baseline messen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              className="group relative bg-black p-8 transition-colors hover:bg-primary/[0.03]"
              key={step.num}
            >
              {/* Step number -- large watermark */}
              <div className="mb-6 font-bold font-mono text-5xl text-primary/20 transition-colors group-hover:text-primary/40">
                {step.num}
              </div>

              <h3 className="mb-3 font-bold font-mono text-lg text-white tracking-tight">
                {step.label}
              </h3>

              <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>

              <p className="font-mono text-[11px] text-primary/50 leading-relaxed">
                {step.detail}
              </p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="-right-2 -translate-y-1/2 absolute top-1/2 z-10 hidden font-mono text-lg text-primary/30 md:block"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
