interface SdlcOffersProps {
  locale?: 'en' | 'de';
}

interface Offer {
  num: string;
  name: string;
  scope: string;
  price: string;
  duration: string;
  outcome: string;
  deliverables: readonly string[];
  bestFor: string;
}

const offersEN: readonly Offer[] = [
  {
    num: '00',
    name: 'Strategy Session',
    scope:
      'A focused half- to full-day working session, on-site or remote. One specific question — agentic PDLC introduction, vendor selection, architecture review, "should we even build this." Written notes and a clear next-step recommendation by end of day.',
    price: 'CHF 3–5k',
    duration: '1 day',
    outcome:
      'A defensible answer to your specific question — not a generic deck. The cheapest way to test whether we work well together. Fee fully creditable against any follow-on engagement within 90 days.',
    deliverables: [
      'Working session (4–8 hours) with the right people in the room',
      'Written notes plus a clear next-step recommendation',
      'Optional 30-min follow-up call within two weeks',
    ],
    bestFor:
      'Anyone wanting to test the fit before committing to a longer engagement, or to get an outside read on a specific decision.',
  },
  {
    num: '01',
    name: 'PDLC Diagnostic',
    scope:
      'Two weeks. L0–L4 maturity scoring across 5 pillars (product, spec, code, review, ops). Process map, opportunity scoring, 90-day roadmap, board-ready report.',
    price: 'CHF 15–25k fixed',
    duration: '2 weeks',
    outcome:
      'A defensible diagnosis. You leave with a quantified baseline and a sequenced plan that survives a board review. At senior consultant day rates this is roughly 8–12 days of work — and it pays itself back the first time it stops you funding a low-impact pilot.',
    deliverables: [
      'Maturity scorecard (L0–L4 across 5 pillars)',
      'Top 5 prioritised opportunities with effort + impact',
      '90-day rollout plan with KPIs',
      'Executive readout',
    ],
    bestFor:
      'CTOs, VP Engineering, PE operating partners assessing portfolio-wide AI capability.',
  },
  {
    num: '02',
    name: 'Foundation Sprint',
    scope:
      'Six to eight weeks. Tooling rollout, methodology training, 1–2 quick-win lanes shipped, KPI baseline locked. Bring your team from L1 → L2 with hands-on co-shipping.',
    price: 'CHF 40–60k fixed',
    duration: '6–8 weeks',
    outcome:
      '20–30% measurable cycle-time reduction in the first 90 days. A team that owns the methodology, not a vendor that owns it for them. At Davos AI-engineer-EBITDA assumptions, the throughput uplift on a 20-engineer org alone covers the engagement inside a quarter.',
    deliverables: [
      'Standard tooling deployed (model selection, license management, prompt registry)',
      '1–2 lighthouse lanes co-shipped end-to-end',
      'Cycle-time + review-time baseline locked',
      'Internal methodology playbook',
    ],
    bestFor:
      'Teams with copilots in active use but no measurable uplift, no central guidance.',
  },
  {
    num: '03',
    name: 'Full Methodology Shift',
    scope:
      'Three to six months. L2 → L3/L4 transformation. Eval gates, cross-model review, everything-as-code, observability flywheels. Multiple lanes, multiple teams, sustained throughput uplift.',
    price: 'CHF 80–150k+',
    duration: '3–6 months',
    outcome:
      '2–3x sustained throughput. Most production code reviewed (or written) by agents. Engineering organisation reshaped around product/spec leadership. The investment is in the same range as one senior hire — and it compounds across every engineer in the org rather than adding one more.',
    deliverables: [
      'Eval-gated agentic delivery in production',
      'Cross-model review pipeline (FlowNext / MergeFoundry pattern)',
      'Everything-as-code repository for prompts, evals, guardrails',
      'Monthly steering until the team owns the system end-to-end',
    ],
    bestFor:
      'Software-led companies treating PDLC as a strategic capability, not a dev-tools refresh.',
  },
];

const offersDE: readonly Offer[] = [
  {
    num: '00',
    name: 'Strategie-Session',
    scope:
      'Eine fokussierte halb- bis ganztägige Arbeitssitzung, vor Ort oder remote. Eine konkrete Frage -- Einführung in agentische PDLC, Anbieterauswahl, Architektur-Review, "sollten wir das überhaupt bauen". Schriftliche Notizen und eine klare Empfehlung für den nächsten Schritt am Ende des Tages.',
    price: 'CHF 3–5k',
    duration: '1 Tag',
    outcome:
      'Eine vertretbare Antwort auf Ihre konkrete Frage -- kein generisches Deck. Der günstigste Weg, um zu prüfen, ob die Zusammenarbeit passt. Honorar ist innerhalb von 90 Tagen vollständig auf eine Folgeauftrag anrechenbar.',
    deliverables: [
      'Arbeitssitzung (4–8 Stunden) mit den richtigen Leuten im Raum',
      'Schriftliche Notizen plus klare Empfehlung für den nächsten Schritt',
      'Optionales 30-min Folge-Telefonat innerhalb von zwei Wochen',
    ],
    bestFor:
      'Wer den Fit testen möchte, bevor er sich auf ein längeres Mandat festlegt -- oder wer eine externe Einschätzung zu einer konkreten Entscheidung braucht.',
  },
  {
    num: '01',
    name: 'PDLC-Diagnose',
    scope:
      'Zwei Wochen. L0–L4-Reifegradbewertung über 5 Säulen (Produkt, Spec, Code, Review, Betrieb). Prozesslandkarte, Opportunity-Scoring, 90-Tage-Roadmap, Bericht für den Verwaltungsrat.',
    price: 'CHF 15–25k fix',
    duration: '2 Wochen',
    outcome:
      'Eine vertretbare Diagnose. Sie gehen mit einer quantifizierten Baseline und einem sequenzierten Plan, der einer Prüfung im Verwaltungsrat standhält. Bei senioren Berater-Tagessätzen entspricht das ungefähr 8–12 Arbeitstagen -- und das Ganze zahlt sich beim ersten Mal aus, wenn es Sie davon abhält, einen wirkungsschwachen Piloten zu finanzieren.',
    deliverables: [
      'Reifegrad-Scorecard (L0–L4 über 5 Säulen)',
      'Top 5 priorisierte Opportunitäten mit Aufwand und Impact',
      '90-Tage-Rollout-Plan mit KPIs',
      'Executive-Readout',
    ],
    bestFor:
      'CTOs, VP Engineering, PE-Operating-Partner, die KI-Fähigkeit über das gesamte Portfolio bewerten.',
  },
  {
    num: '02',
    name: 'Foundation Sprint',
    scope:
      'Sechs bis acht Wochen. Tooling-Rollout, Methodikschulung, 1–2 Quick-Win-Spuren ausgeliefert, KPI-Baseline fixiert. Ihr Team von L1 → L2, mit Co-Shipping aus erster Hand.',
    price: 'CHF 40–60k fix',
    duration: '6–8 Wochen',
    outcome:
      '20–30% messbare Cycle-Time-Reduktion in den ersten 90 Tagen. Ein Team, das die Methodik selbst trägt -- kein Anbieter, der sie für das Team trägt. Bei den Davos-Annahmen für KI-Engineer-EBITDA deckt der Durchsatzgewinn allein bei einer 20-köpfigen Engineering-Organisation das Mandat innerhalb eines Quartals.',
    deliverables: [
      'Standard-Tooling deployed (Modellauswahl, Lizenzmanagement, Prompt-Registry)',
      '1–2 Leuchtturm-Spuren end-to-end mit-ausgeliefert',
      'Cycle-Time- und Review-Zeit-Baseline fixiert',
      'Internes Methodik-Playbook',
    ],
    bestFor:
      'Teams mit Copilots im aktiven Einsatz, aber ohne messbaren Uplift und ohne zentrale Steuerung.',
  },
  {
    num: '03',
    name: 'Voller Methodenwechsel',
    scope:
      'Drei bis sechs Monate. Transformation von L2 → L3/L4. Eval-Gates, Cross-Model-Review, Everything-as-code, Observability-Schwungräder. Mehrere Spuren, mehrere Teams, anhaltender Durchsatzgewinn.',
    price: 'CHF 80–150k+',
    duration: '3–6 Monate',
    outcome:
      '2–3× anhaltender Durchsatz. Der Grossteil des produktiven Codes wird von Agenten reviewt (oder geschrieben). Engineering-Organisation neu zugeschnitten auf Produkt- und Spec-Führung. Die Investition liegt im Bereich einer einzelnen senioren Einstellung -- und sie kumuliert über jeden Entwickler in der Organisation, statt einen weiteren hinzuzufügen.',
    deliverables: [
      'Eval-gesicherte agentische Auslieferung in Produktion',
      'Cross-Model-Review-Pipeline (FlowNext- / MergeFoundry-Pattern)',
      'Everything-as-code-Repository für Prompts, Evals, Guardrails',
      'Monatliches Steering, bis das Team das System end-to-end selbst trägt',
    ],
    bestFor:
      'Software-getriebene Unternehmen, die PDLC als strategische Fähigkeit behandeln, nicht als Dev-Tools-Refresh.',
  },
];

export default function AtelierSdlcOffers({ locale = 'en' }: SdlcOffersProps) {
  const offers = locale === 'de' ? offersDE : offersEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '04 / Drei Pakete',
          heading: 'Drei produktisierte Pakete.',
          intro:
            'Festpreis bei Phase 1 und 2. Phase 3 individuell. Buchung über Cal.com oder direkt per E-Mail.',
          best: 'Geeignet für',
          deliv: 'Deliverables',
          duration: 'Laufzeit',
          cta: 'Erstgespräch buchen',
        }
      : {
          eyebrow: '04 / Three packages',
          heading: 'Three productised packages.',
          intro:
            'Fixed-fee on phases 1 and 2. Customised on phase 3. Book via Cal.com or by direct email.',
          best: 'Best for',
          deliv: 'Deliverables',
          duration: 'Duration',
          cta: 'Book a fit call',
        };

  return (
    <section
      aria-labelledby="sdlc-offers-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="offers"
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
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="sdlc-offers-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          {offers.map((offer) => (
            <article
              className="atelier-card-hover flex h-full flex-col border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))] p-7 md:p-9"
              key={offer.num}
            >
              <div className="mb-6 flex items-baseline justify-between">
                <span className="atelier-numerals text-2xl text-[hsl(var(--rust))]">
                  {offer.num}
                </span>
                <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                  {offer.duration}
                </span>
              </div>

              <h3 className="atelier-display font-medium text-[1.65rem] text-[hsl(var(--ink))] leading-tight">
                {offer.name}
              </h3>
              <p className="atelier-numerals mt-3 text-[hsl(var(--ink))]">
                {offer.price}
              </p>

              <p className="atelier-body mt-5 text-[hsl(var(--paper-muted))]">
                {offer.scope}
              </p>

              <div className="mt-6 border-[hsl(var(--ink))]/10 border-t pt-5">
                <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                  {labels.deliv}
                </p>
                <ul className="mt-3 space-y-2 text-[hsl(var(--ink))]/85 text-sm">
                  {offer.deliverables.map((d) => (
                    <li className="flex gap-3" key={d}>
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-px w-3 flex-shrink-0 bg-[hsl(var(--rust))]"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-[hsl(var(--ink))]/10 border-t pt-5">
                <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                  {labels.best}
                </p>
                <p className="atelier-body mt-2 text-[hsl(var(--paper-muted))]">
                  {offer.bestFor}
                </p>
              </div>

              <div className="mt-auto pt-7">
                <a
                  className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
                  href="https://cal.com/gmickel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {labels.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
