interface CaseStudiesPreviewProps {
  locale?: 'en' | 'de';
}

interface CaseStudy {
  number: string;
  area: string;
  client: string;
  named?: boolean;
  problem: string;
  approach: string;
  outcome: string;
  metricValue: string;
  metricLabel: string;
  href?: string;
}

const studiesEN: readonly CaseStudy[] = [
  {
    number: '01',
    area: 'Agentic PDLC',
    client:
      'European PE-backed software portco · ~25 engineers · regulated sector',
    problem:
      'Legacy core platform written in MUMPS / Caché. Traditional rewrite estimated at €3-5M and 18 months. Skilled MUMPS engineers extinct. Hiring pipeline broken.',
    approach:
      'Spec-first agentic migration with parallel agents under a Phase 0 foundation (BAUP framework, global registry, naming conventions). Two pilots before stop/go gate.',
    outcome:
      'Migration feasibility validated in 12 days. Recruitment pivot from external dev hire to internal coaching. Two product teams onboarded to agentic PDLC.',
    metricValue: '€2.9-4.9M',
    metricLabel: 'Cost avoidance vs traditional rewrite',
  },
  {
    number: '02',
    area: 'Independent expert',
    client:
      'Top-tier Swiss law firm · Handelsgericht · 7-figure software dispute',
    problem:
      'Plaintiff alleges defendant delivered a non-functional MVP and demands invoice clawback plus damages. Question turns on technical definition of MVP, acceptance criteria, fee structure, and feature delivery.',
    approach:
      'Parteigutachter instructed by counsel. Forensic analysis of source repositories, live Azure infrastructure (5 subscriptions, 6 AKS clusters), 1530+ ACR builds, contract artefacts, audit logs. 3 iterations of question catalogue with counsel.',
    outcome:
      'Final 70-page Gutachten covering 36 questions, with 5 Kernbefunde led by the MVP-not-delivered finding. Filed at Handelsgericht. Sole technical authority for the case.',
    metricValue: '7-figure',
    metricLabel: 'Claim value · party-engaged opinion',
  },
  {
    number: '03',
    area: 'AI systems',
    client: "KISIM · Switzerland's leading clinical information system",
    named: true,
    problem:
      'Multi-year clinical AI program for the largest CIS in Switzerland. Production constraints: regulated healthcare, hospital deployment, multi-disciplinary teams, data residency.',
    approach:
      'Led the AI program end-to-end: architecture, model selection, integration with the underlying CIS, governance and clinical safety review, rollout coordination across hospital sites.',
    outcome:
      "AI capability deployed inside the CIS used by Switzerland's largest university hospital. Production-grade, regulator-aware, integrated with existing clinical workflows.",
    metricValue: 'Production',
    metricLabel: 'Multi-year clinical AI program',
  },
  {
    number: '04',
    area: 'AI systems',
    client: 'DocIQ · AI-native contract lifecycle management platform',
    named: true,
    problem:
      'Build an AI-native CLM platform from scratch. Compete in a market crowded with legacy players and AI bolt-on features. Needed defensible technical position and a credible path to enterprise revenue.',
    approach:
      'Founded and ran the company. Designed the platform architecture, built the team, raised funding, ran sales into legal and compliance functions, navigated procurement.',
    outcome:
      'Funded, took to acquisition stage. Live in production at enterprise customers. Validated the AI-native architecture thesis ahead of the broader market shift.',
    metricValue: 'Acquired',
    metricLabel: 'Founder · funded · acquisition stage',
  },
];

const studiesDE: readonly CaseStudy[] = [
  {
    number: '01',
    area: 'Agentische PDLC',
    client:
      'Europäisches PE-Portfoliounternehmen Software · ~25 Entwickler · regulierter Sektor',
    problem:
      'Legacy-Kernplattform in MUMPS / Caché. Klassisches Rewrite auf €3-5M und 18 Monate geschätzt. MUMPS-Expertise am Markt nicht mehr verfügbar. Recruiting-Pipeline gebrochen.',
    approach:
      'Spec-getriebene agentische Migration mit parallelen Agenten unter Phase-0-Fundament (BAUP-Framework, globales Register, Namenskonventionen). Zwei Piloten vor dem Stop/Go-Gate.',
    outcome:
      'Migrationstauglichkeit in 12 Tagen validiert. Recruiting-Pivot von externer Entwickler-Einstellung zu interner Coaching-Strategie. Zwei Produktteams in agentische PDLC überführt.',
    metricValue: '€2.9-4.9M',
    metricLabel: 'Kostenvermeidung vs. klassisches Rewrite',
  },
  {
    number: '02',
    area: 'Unabhängige Begutachtung',
    client:
      'Schweizer Top-Anwaltskanzlei · Handelsgericht · siebenstelliger Softwarestreit',
    problem:
      'Klägerin behauptet, die Beklagte habe eine nicht funktionsfähige MVP geliefert, und fordert Rechnungskorrektur plus Schadensersatz. Streitfrage: technische Definition von MVP, Abnahmekriterien, Honorarstruktur, Feature-Lieferung.',
    approach:
      'Parteigutachter im Auftrag der Anwaltschaft. Forensische Analyse der Quell-Repositories, Live-Azure-Infrastruktur (5 Subscriptions, 6 AKS-Cluster), 1530+ ACR-Builds, Vertragsunterlagen, Audit-Logs. Drei Iterationen des Fragenkatalogs mit der Anwaltschaft.',
    outcome:
      'Finales 70-seitiges Gutachten zu 36 Fragen, mit 5 Kernbefunden, geführt von der MVP-nicht-geliefert-Feststellung. Eingereicht beim Handelsgericht. Alleinige technische Instanz im Fall.',
    metricValue: 'Siebenstellig',
    metricLabel: 'Streitwert · Parteigutachten',
  },
  {
    number: '03',
    area: 'KI-Systeme',
    client: 'KISIM · führendes klinisches Informationssystem der Schweiz',
    named: true,
    problem:
      'Mehrjähriges klinisches KI-Programm für das grösste CIS der Schweiz. Produktionsbedingungen: reguliertes Gesundheitswesen, Spitaleinsatz, multidisziplinäre Teams, Datenhoheit.',
    approach:
      'Leitung des KI-Programms end-to-end: Architektur, Modellauswahl, Integration mit dem zugrunde liegenden CIS, Governance und klinische Sicherheitsprüfung, Rollout-Koordination über Spitalstandorte.',
    outcome:
      'KI-Fähigkeit produktiv im CIS des grössten Universitätsspitals der Schweiz im Einsatz. Produktionsreif, regulatorisch bewusst, in bestehende klinische Workflows integriert.',
    metricValue: 'Produktiv',
    metricLabel: 'Mehrjähriges klinisches KI-Programm',
  },
  {
    number: '04',
    area: 'KI-Systeme',
    client: 'DocIQ · KI-native Contract-Lifecycle-Management-Plattform',
    named: true,
    problem:
      'KI-native CLM-Plattform von Grund auf aufbauen. Wettbewerb in einem Markt voller Legacy-Anbieter und nachgerüsteter KI-Features. Brauchte verteidigbare technische Position und glaubwürdigen Weg zu Enterprise-Umsatz.',
    approach:
      'Unternehmen gegründet und geführt. Plattform-Architektur entworfen, Team aufgebaut, Finanzierung eingeworben, Vertrieb in Legal- und Compliance-Funktionen, Procurement-Prozesse navigiert.',
    outcome:
      'Finanziert, bis zur Übernahmephase geführt. Produktiv bei Enterprise-Kunden im Einsatz. Validierte die KI-native Architektur-These vor dem breiteren Marktwechsel.',
    metricValue: 'Übernommen',
    metricLabel: 'Gründer · finanziert · Übernahmephase',
  },
];

export default function AtelierCaseStudiesPreview({
  locale = 'en',
}: CaseStudiesPreviewProps) {
  const studies = locale === 'de' ? studiesDE : studiesEN;

  const labels =
    locale === 'de'
      ? {
          eyebrow: '03 / Auswahl an Mandaten',
          heading: 'Vier Beispiele aus der Praxis.',
          intro:
            'Anonymisiert, wo Vertraulichkeit gilt. Genannt nur, wo es meine eigene Arbeit ist. Benennung verändert nichts an den Zahlen.',
          allLink: 'Alle Fallstudien',
          allHref: '/de/case-studies',
          problemLabel: 'Problem',
          approachLabel: 'Vorgehen',
          outcomeLabel: 'Ergebnis',
        }
      : {
          eyebrow: '03 / Selected work',
          heading: 'Four examples from real engagements.',
          intro:
            'Anonymised where confidentiality applies. Named only where the work is fully mine. Naming does not change the numbers.',
          allLink: 'All case studies',
          allHref: '/case-studies',
          problemLabel: 'Problem',
          approachLabel: 'Approach',
          outcomeLabel: 'Outcome',
        };

  return (
    <section
      aria-labelledby="case-studies-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
      id="work"
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
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="case-studies-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
          <div className="md:col-span-2 md:flex md:items-end md:justify-end">
            <a
              className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
              href={labels.allHref}
            >
              {labels.allLink}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        {/* 2x2 grid of case studies — full editorial treatment */}
        <div className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
          {studies.map((study) => (
            <CaseStudyEntry key={study.number} labels={labels} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyEntry({
  study,
  labels,
}: {
  study: CaseStudy;
  labels: {
    problemLabel: string;
    approachLabel: string;
    outcomeLabel: string;
  };
}) {
  return (
    <article className="relative flex flex-col bg-[hsl(var(--paper))] p-8 transition-colors hover:bg-[hsl(var(--paper))]/80 md:p-12">
      <header className="mb-6 flex items-baseline justify-between gap-4 border-[hsl(var(--ink))]/15 border-b pb-5">
        <div className="flex items-baseline gap-4">
          <span className="atelier-numerals text-2xl text-[hsl(var(--rust))]">
            {study.number}
          </span>
          <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
            {study.area}
            {study.named ? ' · named' : ''}
          </span>
        </div>
        <div className="text-right">
          <div className="atelier-numerals text-[1.65rem] text-[hsl(var(--ink))] leading-none">
            {study.metricValue}
          </div>
          <div className="mt-1 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-wider">
            {study.metricLabel}
          </div>
        </div>
      </header>

      <h3 className="atelier-display font-medium text-[1.45rem] text-[hsl(var(--ink))] leading-snug">
        {study.client}
      </h3>

      <dl className="atelier-body mt-6 space-y-5 text-[hsl(var(--ink))]/85">
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.problemLabel}
          </dt>
          <dd>{study.problem}</dd>
        </div>
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.approachLabel}
          </dt>
          <dd>{study.approach}</dd>
        </div>
        <div>
          <dt className="atelier-eyebrow mb-1 text-[hsl(var(--paper-muted))]">
            {labels.outcomeLabel}
          </dt>
          <dd>{study.outcome}</dd>
        </div>
      </dl>
    </article>
  );
}
