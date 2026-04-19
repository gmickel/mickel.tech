interface TransformOffersProps {
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
    num: '01',
    name: 'Process Map + AI Opportunity Audit',
    scope:
      '2–3 weeks. Map workflows end-to-end, score automation candidates by impact and feasibility, propose 3–5 prioritised initiatives with ROI estimates and a 90-day plan.',
    price: 'CHF 15–25k fixed',
    duration: '2–3 weeks',
    outcome:
      'A defensible map of where AI pays back. Not theoretical. Tied to specific workflows with named owners and named numbers.',
    deliverables: [
      'Process map (real path, not org chart)',
      'Top 3–5 opportunities with effort + impact scoring',
      '90-day implementation plan',
      'Executive readout',
    ],
    bestFor:
      'CEOs, COOs, GMs, deal teams scoping where to invest before the build.',
  },
  {
    num: '02',
    name: 'AI System Build',
    scope:
      'Production deployment of one of the system classes (RAG, agents, voice, knowledge platform, private LLM). Requirements through go-live with operations and governance handover.',
    price: 'CHF 40–150k',
    duration: '6–16 weeks',
    outcome:
      'A system in production used by real users. Telemetry, evals, governance from day one. Internal team owns operations at handover.',
    deliverables: [
      'Architecture decision record',
      'Production system + observability + evals',
      'Internal documentation + runbooks',
      'Operations handover with KPIs',
    ],
    bestFor:
      'Companies past the audit phase, ready to ship. Often runs in parallel with a separate vendor build.',
  },
  {
    num: '03',
    name: 'Fractional AI Lead',
    scope:
      '1–2 days/week. Program governance, vendor selection, hands-on architecture review, internal capability building. For organisations not ready to hire a full-time AI lead but unwilling to outsource the strategy.',
    price: 'Monthly retainer',
    duration: 'Quarterly minimum',
    outcome:
      'Independent technical leadership without the full-time hire. Faster vendor decisions, fewer false starts, internal capability built deliberately.',
    deliverables: [
      'Weekly program steering',
      'Vendor + architecture decisions',
      'Internal team coaching + recruiting support',
      'Board-level reporting cadence',
    ],
    bestFor:
      'Mid-market companies, PE-backed portcos, family offices building portfolio capability.',
  },
];

const offersDE: readonly Offer[] = [
  {
    num: '01',
    name: 'Prozesslandkarte + KI-Opportunity-Audit',
    scope:
      '2–3 Wochen. Workflows end-to-end kartieren, Automatisierungskandidaten nach Impact und Machbarkeit bewerten, 3–5 priorisierte Initiativen mit ROI-Schätzungen und 90-Tage-Plan vorschlagen.',
    price: 'CHF 15–25k fix',
    duration: '2–3 Wochen',
    outcome:
      'Eine vertretbare Landkarte, wo KI sich auszahlt. Nicht theoretisch. An konkrete Workflows mit benannten Owners und konkreten Zahlen geknüpft.',
    deliverables: [
      'Prozesslandkarte (realer Pfad, nicht Organigramm)',
      'Top 3–5 Opportunitäten mit Aufwand- und Impact-Scoring',
      '90-Tage-Implementierungsplan',
      'Executive-Readout',
    ],
    bestFor:
      'CEOs, COOs, GMs und Deal-Teams, die vor dem Build den Investitionsumfang abstecken.',
  },
  {
    num: '02',
    name: 'KI-System-Build',
    scope:
      'Produktive Auslieferung einer der Systemklassen (RAG, Agenten, Voice, Wissensplattform, private LLM). Von den Anforderungen bis zum Go-Live, mit Übergabe an Betrieb und Governance.',
    price: 'CHF 40–150k',
    duration: '6–16 Wochen',
    outcome:
      'Ein System in Produktion, von echten Nutzern verwendet. Telemetrie, Evals, Governance ab Tag eins. Internes Team trägt den Betrieb bei Übergabe.',
    deliverables: [
      'Architektur-Entscheidungs-Record',
      'Produktivsystem + Observability + Evals',
      'Interne Dokumentation + Runbooks',
      'Betriebsübergabe mit KPIs',
    ],
    bestFor:
      'Unternehmen jenseits der Audit-Phase, bereit zum Ausliefern. Läuft oft parallel zu einem separaten Anbieter-Build.',
  },
  {
    num: '03',
    name: 'Fractional KI-Lead',
    scope:
      '1–2 Tage/Woche. Programm-Governance, Anbieterauswahl, praktische Architektur-Reviews, interner Capability-Aufbau. Für Organisationen, die noch keinen Vollzeit-KI-Lead anstellen wollen, die Strategie aber nicht auslagern.',
    price: 'Monatlicher Retainer',
    duration: 'Mindestens ein Quartal',
    outcome:
      'Unabhängige technische Führung ohne Vollzeitstelle. Schnellere Anbieterentscheidungen, weniger Fehlstarts, interne Capability bewusst aufgebaut.',
    deliverables: [
      'Wöchentliches Programm-Steering',
      'Anbieter- und Architekturentscheidungen',
      'Internes Team-Coaching + Recruiting-Unterstützung',
      'Reporting-Kadenz für den Verwaltungsrat',
    ],
    bestFor:
      'Mid-Market-Unternehmen, PE-Portcos, Family Offices beim Aufbau von Portfolio-Capability.',
  },
];

export default function AtelierTransformOffers({
  locale = 'en',
}: TransformOffersProps) {
  const offers = locale === 'de' ? offersDE : offersEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '04 / Drei Pakete',
          heading: 'Drei produktisierte Pakete.',
          intro:
            'Festpreis bei Audit und System-Build. Retainer beim Fractional Lead. Buchung über Cal.com oder direkt per E-Mail.',
          best: 'Geeignet für',
          deliv: 'Deliverables',
          duration: 'Laufzeit',
          cta: 'Discovery-Gespräch',
        }
      : {
          eyebrow: '04 / Three packages',
          heading: 'Three productised packages.',
          intro:
            'Fixed-fee on audit and system build. Retainer on fractional lead. Book via Cal.com or by direct email.',
          best: 'Best for',
          deliv: 'Deliverables',
          duration: 'Duration',
          cta: 'Discovery call',
        };

  return (
    <section
      aria-labelledby="transform-offers-heading"
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
              id="transform-offers-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
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
