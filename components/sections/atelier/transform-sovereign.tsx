interface TransformSovereignProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: 'Specialism · Sovereign + private AI',
  heading: "When the data can't leave the building.",
  body: 'In addition to everything above. The full transformation work, RAG, agents, voice and the rest applies as usual — and where regulation requires it (FADP, GDPR, EU AI Act, Swiss Berufsgeheimnis, public-sector procurement), I deploy the sovereign and private-AI variant: custom fine-tuning where off-the-shelf models cannot see the data, on-prem or VPC inference, audit-grade provenance from day one. Few practices in CH/EU do both the strategy and the implementation; I do both, in production.',
  pillars: [
    {
      tag: 'Custom-trained local models',
      body: 'Fine-tuning small NER and language models on your sensitive entities, your terminology, your edge cases. Production accuracy where general-purpose APIs cannot match the domain — and never see the data. Reference: 97%+ accuracy on PII detection in Swiss clinical text, zero data persistence (DocIQ Shield + KISIM AI).',
    },
    {
      tag: 'On-prem and VPC inference',
      body: 'Open-weight models hosted in your data centre, your private cloud, or air-gapped infrastructure. GPU sizing for the actual workload. Model routing across cost/latency/quality tiers. No outbound calls to vendor APIs unless you explicitly choose to.',
    },
    {
      tag: 'Audit and provenance by default',
      body: 'Every model output traces to inputs, model identifier, prompt version, retrieval sources, and timestamp. Regulator-ready trails for healthcare, legal, financial and public-sector deployments. Designed in from day one, not bolted on.',
    },
    {
      tag: 'Eval pipelines for fine-tuned models',
      body: 'Continuous regression suites, quality/safety/latency/cost gates, drift detection, observability across both proprietary and fine-tuned model paths. Confidence to ship and confidence to keep shipping.',
    },
  ],
  proofLabel: 'Shipped in production',
  proofItems: [
    'DocIQ Shield — court anonymisation for the Swiss judiciary, fine-tuned local NER + LLM, zero data persistence (live since 2025, v2 2026)',
    'KISIM AI — on-prem PII masking at 97%+ accuracy enabling FADP / GDPR-compliant clinical AI in Swiss hospitals (50+ engineering org, <90 days)',
    'Multiple AI / tech due-diligence engagements assessing private-LLM strategy and vendor lock-in risk for PE deal teams',
  ],
};

const copyDE = {
  eyebrow: 'Spezialdisziplin · Souveräne + private KI',
  heading: 'Wenn die Daten das Haus nicht verlassen dürfen.',
  body: 'Zusätzlich zu allem oben. Die volle Transformationsarbeit -- RAG, Agenten, Voice und der Rest -- gilt wie üblich. Und dort, wo die Regulierung es verlangt (DSG, DSGVO, EU AI Act, Schweizer Berufsgeheimnis, öffentliche Beschaffung), liefere ich die souveräne und private KI-Variante: Custom-Finetuning dort, wo Off-the-shelf-Modelle die Daten nicht sehen dürfen, On-Prem- oder VPC-Inferenz, Audit-fähige Provenienz ab Tag eins. Wenige Praxen in der Schweiz und in der EU decken sowohl Strategie als auch Umsetzung ab; ich mache beides, produktiv.',
  pillars: [
    {
      tag: 'Eigens trainierte lokale Modelle',
      body: 'Finetuning kleiner NER- und Sprachmodelle auf Ihre sensiblen Entitäten, Ihre Terminologie, Ihre Randfälle. Produktive Genauigkeit dort, wo generische APIs die Domäne nicht treffen -- und die Daten nie sehen. Referenz: 97%+ Genauigkeit bei der PII-Erkennung in Schweizer klinischem Text, keine Datenpersistenz (DocIQ Shield + KISIM AI).',
    },
    {
      tag: 'On-Prem- und VPC-Inferenz',
      body: 'Open-Weight-Modelle in Ihrem Rechenzentrum, in Ihrer Private Cloud oder in einer air-gapped Infrastruktur. GPU-Sizing für die reale Last. Modell-Routing über Kosten-, Latenz- und Qualitätsstufen. Keine Outbound-Calls an Anbieter-APIs, ausser Sie wählen es explizit.',
    },
    {
      tag: 'Audit und Provenienz per Default',
      body: 'Jeder Modell-Output ist rückverfolgbar auf Inputs, Modell-Identifier, Prompt-Version, Retrieval-Quellen und Zeitstempel. Aufsichtsfähige Spuren für Gesundheitswesen, Recht, Finanzen und öffentliche Hand. Ab Tag eins eingebaut, nicht aufgesetzt.',
    },
    {
      tag: 'Eval-Pipelines für fine-tuned Modelle',
      body: 'Kontinuierliche Regressionssuiten, Gates für Qualität, Safety, Latenz und Kosten, Drift-Detection, Observability über proprietäre wie über fine-tuned Modellpfade. Vertrauen, um auszuliefern -- und Vertrauen, um weiter auszuliefern.',
    },
  ],
  proofLabel: 'Produktiv im Einsatz',
  proofItems: [
    'DocIQ Shield -- Anonymisierung von Gerichtsdokumenten für die Schweizer Justiz, fine-tuned lokales NER + LLM, keine Datenpersistenz (live seit 2025, v2 2026)',
    'KISIM AI -- On-Prem-PII-Masking mit 97%+ Genauigkeit, ermöglicht DSG-/DSGVO-konforme klinische KI in Schweizer Spitälern (50+ Engineering, <90 Tage)',
    'Mehrere KI- und Tech-Due-Diligence-Mandate zur Bewertung von Private-LLM-Strategie und Vendor-Lock-in-Risiko für PE-Deal-Teams',
  ],
};

export default function AtelierTransformSovereign({
  locale = 'en',
}: TransformSovereignProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="transform-sovereign-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="sovereign"
    >
      {/* navy-tinted accent — distinguishes the specialism from the surrounding sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 8% 12%, hsl(213 51% 24% / 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {c.eyebrow}
            </span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="transform-sovereign-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[68ch] text-[hsl(var(--paper-muted))]">
              {c.body}
            </p>
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
          {c.pillars.map((p, i) => (
            <li
              className="flex flex-col gap-3 bg-[hsl(var(--paper))] p-7 md:p-9"
              key={p.tag}
            >
              <div className="flex items-baseline gap-3">
                <span className="atelier-numerals text-[hsl(var(--navy))] text-xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="atelier-display font-medium text-[1.3rem] text-[hsl(var(--ink))]">
                  {p.tag}
                </h3>
              </div>
              <p className="atelier-body text-[hsl(var(--paper-muted))]">
                {p.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-[hsl(var(--ink))]/15 border-t pt-8">
          <span className="atelier-eyebrow text-[hsl(var(--navy))]">
            {c.proofLabel}
          </span>
          <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {c.proofItems.map((item, i) => (
              <li
                className="atelier-body flex gap-4 text-[hsl(var(--ink))]/85"
                key={item}
              >
                <span
                  aria-hidden="true"
                  className="atelier-numerals text-[hsl(var(--rust))] text-sm"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
