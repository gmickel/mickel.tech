interface ExpertDomainsProps {
  locale?: 'en' | 'de';
}

const domainsEN = [
  {
    title: 'Healthcare & clinical software',
    body: 'Clinical information systems, regulated medical software, hospital deployments, data residency, multi-disciplinary teams. Multi-year operational experience inside the largest CIS in Switzerland.',
  },
  {
    title: 'Financial services',
    body: 'Payment platforms, regtech, AML / fraud automation, fintech AI features. Production AI in regulated environments. Risk-aware vendor and architecture review for boards.',
  },
  {
    title: 'Legal technology & contract automation',
    body: 'Contract lifecycle management, document review automation, legal-grade RAG. Founded an AI-native CLM platform — fluent in both the platform side and the regulator-facing side.',
  },
  {
    title: 'Public sector & procurement',
    body: 'Software acceptance for cantonal and federal contracts, Power Platform, ERP modernisations. Werkvertrags-Gutachten experience for joint procurer / supplier mandates.',
  },
  {
    title: 'AI safety & frontier model risk',
    body: 'OpenAI Red Team Network alumnus. AI policy and abuse-resilience review, model card analysis, safety governance for portfolios deploying frontier models.',
  },
  {
    title: 'Sovereign + private AI',
    body: 'Production experience deploying on-prem and VPC inference for regulated workflows: custom-trained local NER, fine-tuned small language models, audit and provenance by default. I review private-AI strategy because I have shipped it (DocIQ Shield, KISIM AI), not because I read about it.',
  },
  {
    title: 'Mid-market software, PE-backed',
    body: 'AI maturity assessments, agentic PDLC introduction, post-acquisition value creation diagnosis. Daily exposure to portfolio software companies across DACH.',
  },
] as const;

const domainsDE = [
  {
    title: 'Gesundheitswesen & klinische Software',
    body: 'Klinische Informationssysteme, regulierte Medizinsoftware, Spitaleinsatz, Datenhoheit, multidisziplinäre Teams. Mehrjährige operative Erfahrung im grössten CIS der Schweiz.',
  },
  {
    title: 'Finanzdienstleistungen',
    body: 'Zahlungsplattformen, RegTech, AML- und Betrugsautomatisierung, Fintech-KI-Features. Produktive KI in regulierten Umgebungen. Risikobewusste Anbieter- und Architektur-Reviews für Verwaltungsräte.',
  },
  {
    title: 'Legal Tech & Vertragsautomatisierung',
    body: 'Contract Lifecycle Management, Dokumentenprüfungs-Automatisierung, Legal-Grade-RAG. Habe eine KI-native CLM-Plattform gegründet — sicher auf der Plattform- wie auf der regulatorischen Seite.',
  },
  {
    title: 'Öffentliche Hand & Beschaffung',
    body: 'Software-Abnahme für kantonale und Bundesverträge, Power Platform, ERP-Modernisierungen. Werkvertrags-Gutachten-Erfahrung für gemeinsame Auftraggeber-/Lieferanten-Mandate.',
  },
  {
    title: 'KI-Safety & Frontier-Model-Risiko',
    body: 'OpenAI Red Team Network Alumnus. KI-Policy- und Abuse-Resilience-Review, Model-Card-Analyse, Safety-Governance für Portfolios mit Frontier-Modellen.',
  },
  {
    title: 'Souveräne + private KI',
    body: 'Produktive Erfahrung mit On-Prem- und VPC-Inferenz für regulierte Workflows: custom-trainiertes lokales NER, fine-tuned kleine Sprachmodelle, Audit und Provenienz per Default. Ich begutachte Private-KI-Strategien, weil ich sie ausgeliefert habe (DocIQ Shield, KISIM AI), nicht weil ich darüber gelesen habe.',
  },
  {
    title: 'Mid-Market-Software, PE-gehalten',
    body: 'KI-Reifegradanalysen, Einführung agentischer PDLC, Post-Acquisition-Value-Creation-Diagnose. Tägliche Exposition gegenüber Portfolio-Software-Unternehmen im DACH-Raum.',
  },
] as const;

export default function AtelierExpertDomains({
  locale = 'en',
}: ExpertDomainsProps) {
  const domains = locale === 'de' ? domainsDE : domainsEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '04 / Domänen',
          heading: 'Wo ich tief Bescheid weiss.',
          intro:
            'Sechs Bereiche, in denen meine technische Tiefe einer Würdigung im Verfahren standhält. Bei Sachverhalten ausserhalb dieser Bereiche sage ich es vorab.',
        }
      : {
          eyebrow: '04 / Domains',
          heading: 'Where I know the ground.',
          intro:
            'Six areas where my technical depth holds up under examination. For matters outside these, I say so up front.',
        };

  return (
    <section
      aria-labelledby="expert-domains-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="domains"
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
              id="expert-domains-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <li
              className="relative flex flex-col gap-3 bg-[hsl(var(--paper))] p-7 md:p-8"
              key={d.title}
            >
              <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="atelier-display font-medium text-[1.35rem] text-[hsl(var(--ink))]">
                {d.title}
              </h3>
              <p className="atelier-body text-[hsl(var(--paper-muted))]">
                {d.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
