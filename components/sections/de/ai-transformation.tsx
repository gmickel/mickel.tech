import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  {
    value: '10+',
    label: 'Unternehmen transformiert',
    detail: 'Mittelstand B2B',
  },
  {
    value: '2',
    label: 'AI-Plattformen gegründet',
    detail: 'DocIQ CLM + KISIM Clinical AI',
  },
  { value: '20+', label: 'Jahre in Produktion', detail: 'regulierte Branchen' },
] as const;

const phases = [
  {
    tag: 'PHASE 1',
    name: 'Prozess-Mapping',
    timeline: 'Woche 1-2',
    items: [
      'Workflows End-to-End mappen: wo Daten liegen, wo Engpässe sind, was bei Skalierung bricht',
      'Automatisierungskandidaten identifizieren, nach Impact und Machbarkeit bewerten',
      'Ist-Architektur-Review: Datenflüsse, Integrationen, Vendor Lock-in',
      'Schmerzpunkt-Heatmap mit quantifiziertem Business-Impact',
    ],
  },
  {
    tag: 'PHASE 2',
    name: 'Kontextschicht',
    timeline: 'Woche 2-4',
    items: [
      'Sichere Wissensbasis: Enterprise Search, Dokumenten-Retrieval, strukturierte + unstrukturierte Daten',
      'RAG-Architektur: Embeddings, Chunking-Strategie, Retrieval-Evaluation, Zitat-Grounding',
      'Data Governance: Zugriffskontrollen, PII-Handling, Audit Trails, Aufbewahrungsrichtlinien',
      'Integrationsschicht: CRM-Anreicherung, Transkriptions-Pipelines, Knowledge Graph',
    ],
  },
  {
    tag: 'PHASE 3',
    name: 'Agentische Systeme',
    timeline: 'Woche 4-8',
    items: [
      'Produktive Agenten auf der Kontextschicht: Co-Pilots, Automatisierung, autonome Workflows',
      'Eval-Harnesses: Gold-Set-Tests, Regressions-Suiten, Quality Gates vor Deployment',
      'Observability: Nutzungstelemetrie, Kosten-Tracking, Latenz-Budgets, Drift-Erkennung',
      'Guardrails: Safety-Filter, Human-in-the-Loop-Gates, Rollback-Verfahren',
    ],
  },
  {
    tag: 'PHASE 4',
    name: 'Skalieren und messen',
    timeline: 'Monat 2-6',
    items: [
      'Bewährte Muster über Abteilungen und Use Cases ausrollen',
      'Monatliches Steering mit quantifiziertem ROI gegen Baseline',
      'Wissenstransfer: Ihr Team besitzt und entwickelt die Systeme weiter',
      'Vendor-Posture-Review: Build vs Buy, Lock-in vermeiden, wo nötig nachverhandeln',
    ],
  },
] as const;

const valueThemes = [
  {
    tag: '01',
    name: 'Schneller liefern',
    desc: 'AI-Agenten im SDLC: planen, coden, reviewen, testen, betreiben. Von Wochen zu Tagen.',
    metric: 'Delivery-Velocity 2-3x',
  },
  {
    tag: '02',
    name: 'Besser bedienen',
    desc: 'Support-Co-Pilots, intelligente Triage, proaktive Alerts. L1-Deflection, schnellere Lösung.',
    metric: 'Ticket-Deflection 40-60%',
  },
  {
    tag: '03',
    name: 'Mehr verkaufen',
    desc: 'Sales-Co-Pilots, automatische RFP/Angebote, Renewal-Signale, Deal-Coaching in der Pipeline.',
    metric: 'RFP-Turnaround 30-50% schneller',
  },
  {
    tag: '04',
    name: 'Schlanker operieren',
    desc: 'Workflow-Automatisierung, AI-Suche, Bots-first-Handling. Swivel-Chair-Prozesse eliminieren.',
    metric: 'Back-Office-Stunden -30-40%',
  },
  {
    tag: '05',
    name: 'Mehr wissen',
    desc: 'Kontextbewusste AI, gegründet auf echten Unternehmensdaten. Enterprise Search, CRM-Hygiene, Knowledge Graph.',
    metric: '20-30% Knowledge-Worker-Uplift',
  },
] as const;

const domains = [
  {
    tag: '01',
    name: 'Enterprise RAG & Wissenssysteme',
    desc: 'Semantische Suche, Dokumenten-Retrieval und zitatbasierte Q&A über Ihre eigenen Daten. Kein Chatbot-Wrapper. Produktives Retrieval mit Evaluation, Observability und Governance.',
    examples: [
      'Interne Wissensbasen mit rollenbasierten Zugriffskontrollen',
      'Dokumenten-Review und -Vergleich (Legal, Compliance, Procurement)',
      'Kundensupport mit fundierten Antworten und Quellenangaben',
      'Research- und Intelligence-Plattformen mit strukturierter Aufnahme',
    ],
    outcomes: [
      'First-Contact-Resolution erhöht',
      'Knowledge-Worker-Produktivität +20-30%',
      'Auditfähige, zitatbasierte Antworten',
    ],
  },
  {
    tag: '02',
    name: 'AI-Agenten & autonome Systeme',
    desc: 'Agenten, die echte Arbeit leisten: Dokumente verarbeiten, Anfragen triagieren, Reports generieren, Systeme überwachen. Eval-getrieben, beobachtbar, mit Human-in-the-Loop wo es zählt.',
    examples: [
      'Operations-Co-Pilots für Back-Office-Workflows',
      'Service-Desk-Automatisierung mit Eskalation und HITL',
      'Dokumentenverarbeitungs- und Extraktions-Pipelines',
      'Monitoring-Agenten, die Systeme überwachen und handlungsrelevante Reports erstellen',
    ],
    outcomes: [
      'Agent Handle Time -30%',
      'L1-Ticket-Deflection 40-60%',
      'Supportkosten-Reduktion bei gleichbleibender CSAT',
    ],
  },
  {
    tag: '03',
    name: 'Private AI & LLM-Infrastruktur',
    desc: 'On-Prem oder VPC Model Deployment für Unternehmen, die keine Daten an Drittanbieter-APIs senden können. Architektur, Modell-Auswahl, Fine-Tuning und Inference-Optimierung. Vendor-neutral.',
    examples: [
      'Selbst gehostete LLM-Infrastruktur (GPU-Fleet, Inference-Server)',
      'Modell-Evaluation und -Auswahl für Ihre Domäne und Sprache',
      'Fine-Tuning-Pipelines für domänenspezifische Performance',
      'Hybride Architekturen: lokal für sensible Daten, Cloud für allgemeine Aufgaben',
    ],
    outcomes: [
      'Volle Datensouveränität, kein Vendor Lock-in',
      'Domänenspezifische Modell-Performance',
      'TCO-Reduktion vs. Per-Token-API-Pricing bei Skalierung',
    ],
  },
  {
    tag: '04',
    name: 'Prozessautomatisierung & Workflow AI',
    desc: 'AI-gestützte Automatisierung, identifiziert beim Prozess-Mapping. Kein RPA. Intelligente Systeme, die Variabilität, Ausnahmen und Randfälle mit Supervision bewältigen.',
    examples: [
      'Rechnungsverarbeitung mit Validierung und Anomalie-Erkennung',
      'RFQ/RFP-Generierung und Response-Automatisierung',
      'Datenanreicherung, CRM-Hygiene, Stammdaten-Abgleich',
      'Voice Bots und Conversational Interfaces mit Eskalation',
    ],
    outcomes: [
      'Angebotserstellung -60% Zeitaufwand',
      'Manuelle Bearbeitungsstunden -30-40%',
      'Fehlerrate reduziert, Lead-to-Cash-Zyklus verkürzt',
    ],
  },
] as const;

const painPoints = [
  'AI-Piloten, die es nie in die Produktion geschafft haben',
  'Daten verstreut über Systeme ohne einheitliche Zugriffsschicht',
  'Teams kaufen AI-Tools ad-hoc ohne kohärente Strategie',
  'Vendor-Lock-in bei einem einzigen Anbieter ohne Exit-Plan',
  'Manuelle Prozesse, die seit Jahren automatisiert sein sollten',
  'Keine Möglichkeit zu messen, ob AI-Investitionen sich auszahlen',
  'Niedrige AI-Reife, keine Governance oder Policy vorhanden',
  'Verwaltungsräte, die AI-Vorschläge nicht bewerten können (kein gemeinsames Framework)',
] as const;

const opportunityTriggers = [
  {
    area: 'Software-Entwicklung',
    trigger: 'Engineering-Headcount >20 oder signifikante Tech Debt',
  },
  {
    area: 'Daten & Wissen',
    trigger: 'Mitarbeiterzahl >50 oder verstreute Wissensbasen',
  },
  {
    area: 'Service & Support',
    trigger: '>1.000 Tickets/Monat oder L1 bindet teure Kapazität',
  },
  {
    area: 'Sales & Wachstum',
    trigger: 'Sales-Team >10 Reps oder manueller RFP-/Angebotsprozess',
  },
  {
    area: 'Back Office',
    trigger: '>100 Lieferanten oder >500 Rechnungen/Monat',
  },
] as const;

export default function AiTransformation() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 md:px-20"
      id="ai-transformation"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 4px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            GANZHEITLICHE AI-TRANSFORMATION
          </p>
          <SectionTitle
            className="mb-6 font-bold text-4xl text-white md:text-5xl"
            text="AI-SYSTEME, DIE IHR GESCHÄFT BETREIBEN"
          />
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            Jedes Engagement beginnt mit einem Prozess-Mapping, nicht mit einem
            Tool. Ich bilde ab, wie das Unternehmen tatsächlich funktioniert,
            baue die Wissens- und Datengrundlage, dann deploye ich produktive
            AI-Systeme darauf. Von Enterprise RAG über autonome Agenten bis zu
            privater LLM-Infrastruktur.
          </p>
        </div>

        {/* ── Core Thesis ── */}
        <div className="mb-24 border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            KERNTHESE
          </p>
          <h3 className="mb-4 font-bold text-2xl text-white md:text-3xl">
            Zuerst die Kontextschicht, dann die Automatisierung
          </h3>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Jeder AI-Use-Case braucht saubere, verwaltete Daten. Zuerst die
            sichere Wissens- und Kontextbasis bauen -- Enterprise Search,
            Transkription, CRM-Anreicherung, Dokumenten-Retrieval -- dann
            agentische Workflows darauf deployen. Diese Reihenfolge macht jeden
            neuen Use Case inkrementell, nicht from-scratch. Ohne Fundament ist
            jeder Agent ein Standalone-Pilot, der nie skaliert.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs">
            {[
              'Daten-Fundament',
              'Wissensschicht',
              'Agentische Workflows',
              'AI-nativer Betrieb',
            ].map((step, i) => (
              <span className="flex items-center gap-2" key={step}>
                <span className="border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary">
                  {step}
                </span>
                {i < 3 && <span className="text-primary/40">→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── Proof + Pain Points ── */}
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-4">
            {proofPoints.map((p) => (
              <div className="border-primary/30 border-l-2 pl-6" key={p.label}>
                <div className="font-bold font-mono text-5xl text-primary md:text-6xl">
                  {p.value}
                </div>
                <div className="mt-1 font-mono text-sm text-white uppercase tracking-wider">
                  {p.label}
                </div>
                <div className="font-mono text-muted-foreground text-xs">
                  {p.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8">
            <p className="mb-6 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Typische Schmerzpunkte, die ich löse
            </p>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {painPoints.map((pp) => (
                <div className="flex items-start gap-3 bg-black p-5" key={pp}>
                  <span aria-hidden="true" className="mt-1 text-alert">
                    ×
                  </span>
                  <span className="text-sm text-white/80">{pp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5 Value Themes ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            WERTBEITRÄGE
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Fünf Wege, wie AI liefert
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Jede Transformation bildet auf einen oder mehrere dieser Outcomes
            ab. Das Assessment identifiziert, welche für Ihr Geschäft den
            Unterschied machen.
          </p>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {valueThemes.map((vt) => (
              <div
                className="group bg-black p-5 transition-colors hover:bg-primary/[0.03]"
                key={vt.tag}
              >
                <span className="font-mono text-[10px] text-primary">
                  {vt.tag}
                </span>
                <h4 className="mt-1 font-bold text-sm text-white">{vt.name}</h4>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                  {vt.desc}
                </p>
                <div className="mt-3 font-bold font-mono text-success text-xs">
                  {vt.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4-Phase Approach ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            VORGEHEN
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Erst der Prozess, dann die Systeme
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            AI allein repariert keine kaputten Abläufe. Zuerst den Prozess
            verstehen, dann das Datenfundament bauen, dann Agenten deployen,
            alles messen.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div
                className="group relative border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-primary/40"
                key={phase.tag}
              >
                <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <span className="font-bold font-mono text-primary text-xs tracking-[0.2em]">
                  {phase.tag}
                </span>
                <h4 className="mt-1 font-bold text-white text-xl">
                  {phase.name}
                </h4>
                <span className="font-mono text-muted-foreground text-xs">
                  {phase.timeline}
                </span>

                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-primary/50"
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Opportunity Triage ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            TRIAGE
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Wo AI sich zuerst auszahlt
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Nicht jeder Prozess ist bereit für AI. Das Assessment identifiziert,
            wo Sie über der Schwelle liegen und wo der Impact die Investition
            rechtfertigt.
          </p>

          <div className="overflow-hidden border border-white/10">
            <div className="hidden grid-cols-2 bg-white/5 p-4 font-mono text-muted-foreground text-xs uppercase tracking-wider md:grid">
              <span>Opportunity-Bereich</span>
              <span>Auslöseschwelle</span>
            </div>
            {opportunityTriggers.map((ot) => (
              <div
                className="grid grid-cols-1 gap-1 border-white/5 border-t p-4 md:grid-cols-2 md:gap-4"
                key={ot.area}
              >
                <span className="font-bold font-mono text-sm text-white">
                  {ot.area}
                </span>
                <span className="text-muted-foreground text-sm">
                  {ot.trigger}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Domains ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            DOMÄNEN
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Was ich baue
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {domains.map((d) => (
              <div className="bg-black p-8" key={d.tag}>
                <span className="font-mono text-[10px] text-primary">
                  {d.tag}
                </span>
                <h4 className="mt-1 font-bold text-lg text-white">{d.name}</h4>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {d.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {d.examples.map((ex) => (
                    <li
                      className="flex items-start gap-2 font-mono text-white/60 text-xs"
                      key={ex}
                    >
                      <span className="mt-0.5 text-primary/40">·</span>
                      {ex}
                    </li>
                  ))}
                </ul>
                {/* Outcomes */}
                <div className="mt-4 border-white/5 border-t pt-3">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    Ziel-Outcomes
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {d.outcomes.map((o) => (
                      <span
                        className="border border-success/20 bg-success/5 px-2 py-1 font-mono text-[11px] text-success"
                        key={o}
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
