interface SdlcMaturityProps {
  locale?: 'en' | 'de';
}

interface Level {
  num: string;
  label: string;
  shortLabel: string;
  body: string;
  signals: readonly string[];
}

const levelsEN: readonly Level[] = [
  {
    num: 'L0',
    label: 'Pre-AI',
    shortLabel: 'No AI in delivery',
    body: 'Engineering runs without AI assistance. Tickets, IDE, code review by humans only. Most legacy or compliance-bound teams start here.',
    signals: [
      'No agent or LLM in the dev loop',
      'Hand-written specs, manual review',
      'No AI tooling budget',
    ],
  },
  {
    num: 'L1',
    label: 'Assisted',
    shortLabel: 'Copilots, manual usage',
    body: 'Engineers use copilots and chat tools opportunistically. Productivity gains real but uneven. No methodology, no metrics, no portfolio strategy.',
    signals: [
      'GitHub Copilot / Cursor / similar in active use',
      'Self-service adoption, no central guidance',
      'Hard to attribute uplift; some skeptics, some converts',
    ],
  },
  {
    num: 'L2',
    label: 'Foundation',
    shortLabel: 'Tooling + methodology rolled out',
    body: 'Standard tooling, training, and a baseline KPI framework deployed. Spec-first habits forming. First measurable cycle-time wins. Centralised guardrails for prompts and data.',
    signals: [
      'License management + standard model selection',
      'Documented methodology (spec, agent, review)',
      'Cycle time and review-time baselined',
      '20–30% throughput uplift in first 90 days',
    ],
  },
  {
    num: 'L3',
    label: 'Spec-driven',
    shortLabel: 'Eval-gated agentic delivery',
    body: 'Agents drive most code production from specs. Cross-model review and eval gates enforce quality. Everything-as-code: prompts, evals, guardrails versioned. Lighthouse lanes for the most autonomous workflows.',
    signals: [
      'Specs are the unit of work',
      'Eval suites gate every meaningful change',
      'Cross-model review catches single-model blind spots',
      'Throughput 2–3x baseline, sustained',
    ],
  },
  {
    num: 'L4',
    label: 'Autonomous',
    shortLabel: 'Agents ship, humans set priorities',
    body: 'Agents own end-to-end delivery for well-bounded work. Humans focus on product framing, prioritisation, and edge-case judgement. Observability flywheels feed continuous spec refinement.',
    signals: [
      'Multi-agent factories with deterministic guarantees',
      'Production observability → spec refinement loops',
      'Most PRs reviewed (or written) by other agents',
      'Engineering org reshaped around product/spec leadership',
    ],
  },
];

const levelsDE: readonly Level[] = [
  {
    num: 'L0',
    label: 'Vor-KI',
    shortLabel: 'Keine KI in der Auslieferung',
    body: 'Engineering läuft ohne KI-Unterstützung. Tickets, IDE, Code-Review nur durch Menschen. Die meisten Legacy- oder regulierungsbedingt eingegrenzten Teams starten hier.',
    signals: [
      'Kein Agent / LLM im Dev-Loop',
      'Handgeschriebene Specs, manuelle Reviews',
      'Kein Budget für KI-Tools',
    ],
  },
  {
    num: 'L1',
    label: 'Assistiert',
    shortLabel: 'Copilots, opportunistisch',
    body: 'Entwickler nutzen Copilots und Chat-Tools opportunistisch. Produktivitätsgewinne real, aber ungleichmässig. Keine Methodik, keine Metriken, keine Portfolio-Strategie.',
    signals: [
      'GitHub Copilot / Cursor o.ä. aktiv im Einsatz',
      'Selbstbedienungs-Adoption, keine zentrale Steuerung',
      'Uplift schwer zurechenbar; Skeptiker und Überzeugte gemischt',
    ],
  },
  {
    num: 'L2',
    label: 'Fundament',
    shortLabel: 'Tooling + Methodik ausgerollt',
    body: 'Standard-Tooling, Training und Baseline-KPI-Framework ausgerollt. Spec-first-Praktiken bilden sich. Erste messbare Cycle-Time-Gewinne. Zentralisierte Guardrails für Prompts und Daten.',
    signals: [
      'Lizenzmanagement + Standard-Modellauswahl',
      'Dokumentierte Methodik (Spec, Agent, Review)',
      'Cycle Time und Review-Zeit baselined',
      '20–30% Durchsatz-Uplift in den ersten 90 Tagen',
    ],
  },
  {
    num: 'L3',
    label: 'Spec-getrieben',
    shortLabel: 'Eval-gegate agentische Auslieferung',
    body: 'Agenten erzeugen den Grossteil der Code-Produktion aus Specs. Cross-Model-Review und Eval-Gates erzwingen Qualität. Everything-as-code: Prompts, Evals, Guardrails versioniert. Leuchtturm-Spuren für die autonomsten Workflows.',
    signals: [
      'Specs sind die Arbeitseinheit',
      'Eval-Suiten gaten jede bedeutsame Änderung',
      'Cross-Model-Review fängt Einzelmodell-Blindstellen',
      'Durchsatz 2–3× Baseline, anhaltend',
    ],
  },
  {
    num: 'L4',
    label: 'Autonom',
    shortLabel: 'Agenten liefern, Menschen priorisieren',
    body: 'Agenten besitzen End-to-End-Auslieferung für gut abgegrenzte Arbeit. Menschen konzentrieren sich auf Produkt-Framing, Priorisierung und Edge-Case-Urteil. Observability-Schwungräder speisen kontinuierliche Spec-Verfeinerung.',
    signals: [
      'Multi-Agent-Fabriken mit deterministischen Garantien',
      'Produktive Observability → Spec-Refinement-Loops',
      'Die meisten PRs von anderen Agenten reviewed (oder geschrieben)',
      'Engineering-Organisation umgebaut um Produkt-/Spec-Führung',
    ],
  },
];

export default function AtelierSdlcMaturity({
  locale = 'en',
}: SdlcMaturityProps) {
  const levels = locale === 'de' ? levelsDE : levelsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '03 / Reifegradmodell',
          heading: 'L0 → L4: das Reifegradmodell.',
          intro:
            'Fünf Stufen, klare Signale, klare Rollouts pro Stufe. Sie können auf einer beliebigen Stufe einsteigen — was zählt, ist die nächste.',
          signalsLabel: 'Beobachtbare Signale',
        }
      : {
          eyebrow: '03 / Maturity model',
          heading: 'L0 → L4: the maturity model.',
          intro:
            'Five levels, clear signals, clear rollout per level. You can enter at any level — what matters is the next one.',
          signalsLabel: 'Observable signals',
        };

  return (
    <section
      aria-labelledby="sdlc-maturity-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="maturity"
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
              id="sdlc-maturity-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/65">
              {labels.intro}
            </p>
          </div>
        </header>

        <ol className="space-y-px bg-[hsl(var(--paper))]/15">
          {levels.map((lvl, i) => (
            <li
              className="grid grid-cols-1 gap-6 bg-[hsl(var(--graphite))] p-7 md:grid-cols-12 md:gap-10 md:p-10"
              key={lvl.num}
            >
              <div className="md:col-span-3">
                <span className="atelier-numerals text-3xl text-[hsl(var(--rust))] md:text-4xl">
                  {lvl.num}
                </span>
                <h3 className="atelier-display mt-3 font-medium text-[1.65rem] text-[hsl(var(--paper))]">
                  {lvl.label}
                </h3>
                <p className="atelier-eyebrow mt-1 text-[hsl(var(--paper))]/55">
                  {lvl.shortLabel}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="atelier-body text-[hsl(var(--paper))]/80">
                  {lvl.body}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="atelier-eyebrow mb-3 text-[hsl(var(--paper))]/45">
                  {labels.signalsLabel}
                </p>
                <ul className="space-y-2 text-[hsl(var(--paper))]/85 text-sm">
                  {lvl.signals.map((s) => (
                    <li className="flex gap-3" key={s}>
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 flex-shrink-0 bg-[hsl(var(--rust))]"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < levels.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="hidden md:col-span-12 md:block"
                >
                  <div className="h-px w-full bg-[hsl(var(--paper))]/8" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
