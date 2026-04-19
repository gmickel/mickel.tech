interface TransformSystemsProps {
  locale?: 'en' | 'de';
}

const systemsEN = [
  {
    title: 'Enterprise RAG & knowledge platforms',
    body: 'Document, contract and policy retrieval with citation grounding. Embeddings, hybrid search, governance and audit. Production systems that lawyers, auditors and analysts actually use day-to-day.',
  },
  {
    title: 'Autonomous agents & operations co-pilots',
    body: 'Multi-step agents that reach into systems of record, take actions, log everything, and hand back to humans on uncertainty. Operations co-pilots, service-desk automation, document review.',
  },
  {
    title: 'Voice agents & customer interaction',
    body: 'Inbound and outbound voice with hand-off to humans, conversation evaluation, compliance recording. Built for portfolios that have call-centre cost as a real line item.',
  },
  {
    title: 'Sovereign + private LLM infrastructure',
    body: 'On-prem or VPC inference for open-weight models. Custom fine-tuning of local NER and small language models on your data. GPU sizing, model routing, quota and audit-grade observability. The architecture for workflows where data cannot leave the building.',
  },
  {
    title: 'AI in regulated workflows',
    body: 'Healthcare, legal, financial, public-sector contexts where eval gates, deterministic pipelines, audit trails and provenance are not nice-to-haves. Built into the architecture, not bolted on.',
  },
  {
    title: 'AI feature integration in existing products',
    body: 'When the AI lives inside a SaaS product your users already use. Feature design, eval suites, telemetry, model selection, gradual rollout. No separate AI tab nobody clicks.',
  },
] as const;

const systemsDE = [
  {
    title: 'Enterprise-RAG & Wissensplattformen',
    body: 'Retrieval für Dokumente, Verträge und Policies, mit Zitations-Grounding. Embeddings, Hybridsuche, Governance und Audit. Produktivsysteme, die Anwälte, Auditoren und Analysten täglich tatsächlich nutzen.',
  },
  {
    title: 'Autonome Agenten & Operations-Copilots',
    body: 'Mehrschritt-Agenten, die in Systems of Record greifen, Aktionen ausführen, alles loggen und bei Unsicherheit an Menschen zurückgeben. Operations-Copilots, Service-Desk-Automatisierung, Dokumentenprüfung.',
  },
  {
    title: 'Voice-Agenten & Kundeninteraktion',
    body: 'Inbound und Outbound mit Übergabe an Menschen, Gesprächsbewertung, Compliance-Aufzeichnung. Gebaut für Portfolios, in denen Call-Center-Kosten eine reale Position sind.',
  },
  {
    title: 'Souveräne + private LLM-Infrastruktur',
    body: 'On-Prem- oder VPC-Inferenz für Open-Weight-Modelle. Custom-Finetuning lokaler NER- und kleiner Sprachmodelle auf Ihren Daten. GPU-Sizing, Modell-Routing, Quota- und Audit-Observability. Die Architektur für Workflows, in denen Daten das Haus nicht verlassen dürfen.',
  },
  {
    title: 'KI in regulierten Workflows',
    body: 'Gesundheitswesen, Recht, Finanzen, öffentliche Hand -- dort, wo Eval-Gates, deterministische Pipelines, Audit-Trails und Provenienz keine Nice-to-haves sind. In die Architektur eingebaut, nicht aufgesetzt.',
  },
  {
    title: 'KI-Features in bestehenden Produkten',
    body: 'Wenn die KI in einem SaaS-Produkt lebt, das Ihre Nutzer bereits verwenden. Feature-Design, Eval-Suiten, Telemetrie, Modellauswahl, schrittweiser Rollout. Kein separater KI-Tab, den niemand öffnet.',
  },
] as const;

export default function AtelierTransformSystems({
  locale = 'en',
}: TransformSystemsProps) {
  const systems = locale === 'de' ? systemsDE : systemsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '03 / Was ich baue',
          heading: 'Sechs Klassen produktiver KI-Systeme.',
          intro:
            'Was ich produktiv ausgeliefert habe. Andere Klassen sind möglich; hier kann ich Fit und Risiko aber schnell beurteilen.',
        }
      : {
          eyebrow: '03 / What I build',
          heading: 'Six classes of production AI systems.',
          intro:
            'What I have shipped to production. Other classes are possible, but here is where I can judge fit and risk quickly.',
        };

  return (
    <section
      aria-labelledby="transform-systems-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="systems"
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
              id="transform-systems-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/65">
              {labels.intro}
            </p>
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--paper))]/15 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <li
              className="flex flex-col gap-3 bg-[hsl(var(--graphite))] p-7 md:p-8"
              key={s.title}
            >
              <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="atelier-display font-medium text-[1.3rem] text-[hsl(var(--paper))]">
                {s.title}
              </h3>
              <p className="atelier-body text-[hsl(var(--paper))]/70">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
