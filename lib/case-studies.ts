/**
 * Single source of truth for anonymised case studies surfaced across mickel.tech.
 *
 * Anonymisation rules (locked Phase 0 / Q4):
 *   - Named: only DocIQ, FlowNext, MergeFoundry, KISIM, ITDR, OpenAI Red Team,
 *     SECA, Growth Factors at role level only.
 *   - Anonymised: all BU portcos (SHD, Systabuild, eGroup/Audelia, Nexus,
 *     GENII, MAGELLAN, etc.) and all Gutachten counterparties.
 *   - Sector + size + outcome only for anonymised entries.
 */

export type CaseStudyArea = 'pdlc' | 'expert' | 'systems';

export interface CaseStudyAreaMeta {
  id: CaseStudyArea;
  labelEN: string;
  labelDE: string;
  href: string;
  hrefDE: string;
}

export const CASE_STUDY_AREAS: readonly CaseStudyAreaMeta[] = [
  {
    id: 'pdlc',
    labelEN: 'Agentic PDLC',
    labelDE: 'Agentische PDLC',
    href: '/sdlc',
    hrefDE: '/de/sdlc',
  },
  {
    id: 'expert',
    labelEN: 'Independent expert',
    labelDE: 'Unabhängige Begutachtung',
    href: '/expert',
    hrefDE: '/de/expert',
  },
  {
    id: 'systems',
    labelEN: 'AI systems',
    labelDE: 'KI-Systeme',
    href: '/ai-transformation',
    hrefDE: '/de/ai-transformation',
  },
];

export interface CaseStudy {
  id: string;
  area: CaseStudyArea;
  number: string;
  named?: boolean;
  /** Full client identifier (named or anonymised). */
  clientEN: string;
  clientDE: string;
  problemEN: string;
  problemDE: string;
  approachEN: string;
  approachDE: string;
  outcomeEN: string;
  outcomeDE: string;
  metricValueEN: string;
  metricValueDE: string;
  metricLabelEN: string;
  metricLabelDE: string;
  /** Short flag for the hero / preview list. */
  featured?: boolean;
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'pdlc-mumps-modernisation',
    area: 'pdlc',
    number: '01',
    featured: true,
    clientEN:
      'European PE-backed software portco · ~25 engineers · regulated sector',
    clientDE:
      'Europäisches PE-Portfoliounternehmen Software · ~25 Entwickler · regulierter Sektor',
    problemEN:
      'Legacy core platform written in MUMPS / Caché. Traditional rewrite estimated at €3-5M and 18 months. Skilled MUMPS engineers extinct. Hiring pipeline broken.',
    problemDE:
      'Legacy-Kernplattform in MUMPS / Caché. Klassisches Rewrite auf €3-5M und 18 Monate geschätzt. MUMPS-Expertise am Markt nicht mehr verfügbar. Recruiting-Pipeline gebrochen.',
    approachEN:
      'Spec-first agentic migration with parallel agents under a Phase 0 foundation (BAUP framework, global registry, naming conventions). Two pilots before stop/go gate.',
    approachDE:
      'Spec-getriebene agentische Migration mit parallelen Agenten unter Phase-0-Fundament (BAUP-Framework, globales Register, Namenskonventionen). Zwei Piloten vor dem Stop/Go-Gate.',
    outcomeEN:
      'Migration feasibility validated in 12 days. Recruitment pivot from external dev hire to internal coaching. Two product teams onboarded to agentic PDLC.',
    outcomeDE:
      'Migrationstauglichkeit in 12 Tagen validiert. Recruiting-Pivot von externer Entwickler-Einstellung zu interner Coaching-Strategie. Zwei Produktteams in agentische PDLC überführt.',
    metricValueEN: '€2.9-4.9M',
    metricValueDE: '€2.9-4.9M',
    metricLabelEN: 'Cost avoidance vs traditional rewrite',
    metricLabelDE: 'Kostenvermeidung vs. klassisches Rewrite',
  },
  {
    id: 'pdlc-multi-entity-standardisation',
    area: 'pdlc',
    number: '02',
    clientEN:
      'European multi-entity software group · 3 entities scoped, more in pipeline',
    clientDE:
      'Europäische Software-Gruppe mit mehreren Einheiten · 3 Einheiten gescoped, weitere in Pipeline',
    problemEN:
      'Group strategy required AI-first delivery across heterogeneous portfolio companies with very different stacks, languages and team maturity. No standard methodology, no shared KPIs, no reusable engagement template.',
    problemDE:
      'Gruppenstrategie verlangte KI-zuerst-Auslieferung über heterogene Portfoliounternehmen mit sehr unterschiedlichen Stacks, Sprachen und Team-Reife. Keine Standardmethodik, keine geteilten KPIs, keine wiederverwendbare Engagement-Vorlage.',
    approachEN:
      'Built standardised agentic PDLC engagement letter, KPI framework (Cycle Time + 4 supporting metrics), and assessment deck reusable across all entities. Onboarded 3 entities in one onsite week.',
    approachDE:
      'Standardisierte Agentische-PDLC-Auftragsvorlage, KPI-Framework (Cycle Time + 4 unterstützende Metriken) und Assessment-Deck, wiederverwendbar über alle Einheiten. 3 Einheiten in einer Onsite-Woche aufgesetzt.',
    outcomeEN:
      'Reusable template adopted as group standard. Each subsequent entity onboards in days, not weeks. CEO-level commitment to portfolio-wide rollout.',
    outcomeDE:
      'Wiederverwendbare Vorlage als Gruppenstandard übernommen. Jede weitere Einheit in Tagen statt Wochen aufgesetzt. CEO-Commitment zum portfolio-weiten Rollout.',
    metricValueEN: '50%',
    metricValueDE: '50%',
    metricLabelEN: 'Productivity uplift target (CEO-set)',
    metricLabelDE: 'Produktivitätsziel (CEO-gesetzt)',
  },
  {
    id: 'expert-handelsgericht-mvp-dispute',
    area: 'expert',
    number: '03',
    featured: true,
    clientEN:
      'Top-tier Swiss law firm · Handelsgericht · 7-figure software dispute',
    clientDE:
      'Schweizer Top-Anwaltskanzlei · Handelsgericht · siebenstelliger Softwarestreit',
    problemEN:
      'Plaintiff alleges defendant delivered a non-functional MVP and demands invoice clawback plus damages. Question turns on technical definition of MVP, acceptance criteria, fee structure, and feature delivery.',
    problemDE:
      'Klägerin behauptet, die Beklagte habe eine nicht funktionsfähige MVP geliefert, und fordert Rechnungskorrektur plus Schadensersatz. Streitfrage: technische Definition von MVP, Abnahmekriterien, Honorarstruktur, Feature-Lieferung.',
    approachEN:
      'Parteigutachter instructed by counsel. Forensic analysis of source repositories, live Azure infrastructure (5 subscriptions, 6 AKS clusters), 1530+ ACR builds, contract artefacts, audit logs. 3 iterations of question catalogue with counsel.',
    approachDE:
      'Parteigutachter im Auftrag der Anwaltschaft. Forensische Analyse der Quell-Repositories, Live-Azure-Infrastruktur (5 Subscriptions, 6 AKS-Cluster), 1530+ ACR-Builds, Vertragsunterlagen, Audit-Logs. Drei Iterationen des Fragenkatalogs mit der Anwaltschaft.',
    outcomeEN:
      'Final 70-page Gutachten covering 36 questions, with 5 Kernbefunde led by the MVP-not-delivered finding. Filed at Handelsgericht. Sole technical authority for the case.',
    outcomeDE:
      'Finales 70-seitiges Gutachten zu 36 Fragen, mit 5 Kernbefunden, geführt von der MVP-nicht-geliefert-Feststellung. Eingereicht beim Handelsgericht. Alleinige technische Instanz im Fall.',
    metricValueEN: '7-figure',
    metricValueDE: 'Siebenstellig',
    metricLabelEN: 'Claim value · party-engaged opinion',
    metricLabelDE: 'Streitwert · Parteigutachten',
  },
  {
    id: 'expert-werkvertrag-power-platform',
    area: 'expert',
    number: '04',
    clientEN:
      'Swiss public-sector procurement · Power Platform delivery · joint expert mandate',
    clientDE:
      'Schweizer öffentliche Beschaffung · Power-Platform-Lieferung · gemeinsames Gutachter-Mandat',
    problemEN:
      'Procurer and supplier required an independent acceptance expert (Werkvertrags-Gutachter) named in the contract. Subject: Power Platform delivery (Power Apps, Power Automate, Dataverse, PowerPages) replacing a legacy system, integrations into ZSR/SASIS and Abacus.',
    problemDE:
      'Auftraggeber und Lieferant brauchten einen vertraglich benannten unabhängigen Abnahmegutachter (Werkvertrags-Gutachter). Gegenstand: Power-Platform-Lieferung (Power Apps, Power Automate, Dataverse, PowerPages) als Ablösung eines Altsystems, Integrationen in ZSR/SASIS und Abacus.',
    approachEN:
      'Pre-engagement Prüfschema developed transparently from contract annexes. 12-domain assessment framework (completeness, business reqs, governance & ALM, security, data architecture, integrations, flows, UX, tests, ops, docs, handover). Pauschal fee, split between parties.',
    approachDE:
      'Vorab-Prüfschema, transparent aus den Vertragsanhängen entwickelt. 12-Domänen-Bewertungsrahmen (Vollständigkeit, Business-Anforderungen, Governance & ALM, Security, Datenarchitektur, Integrationen, Flows, UX, Tests, Betrieb, Doku, Übergabe). Pauschalhonorar, hälftig zwischen den Parteien.',
    outcomeEN:
      'Engagement signed; both parties accepted the methodology and scoring framework. Acceptance assessment scheduled at delivery point with optional Nachprüfung after Nachbesserungen.',
    outcomeDE:
      'Mandat unterzeichnet; beide Parteien haben die Methodik und das Scoring-Framework akzeptiert. Abnahmeprüfung am Liefertermin geplant, mit optionaler Nachprüfung nach Nachbesserungen.',
    metricValueEN: 'CHF 24k',
    metricValueDE: 'CHF 24k',
    metricLabelEN: 'Pauschal · split between parties',
    metricLabelDE: 'Pauschal · hälftig zwischen Parteien',
  },
  {
    id: 'expert-tech-dd-platform-business',
    area: 'expert',
    number: '05',
    clientEN: 'European platform business · PE buy-side AI / tech DD',
    clientDE: 'Europäisches Plattform-Unternehmen · PE-Buy-Side-KI-/Tech-DD',
    problemEN:
      'Investment committee required an AI / tech due diligence on a fast-growing platform business with significant claimed AI capability. Standard DD vendors lacked the depth to verify the claims; deal team needed an opinion in under a week.',
    problemDE:
      'Investment-Komitee verlangte KI- / Tech-DD bei einem schnell wachsenden Plattform-Unternehmen mit erheblich behaupteter KI-Fähigkeit. Standard-DD-Anbieter hatten nicht die Tiefe, die Behauptungen zu verifizieren; Deal-Team brauchte eine Stellungnahme in unter einer Woche.',
    approachEN:
      'Maturity scoring across 5 pillars. 37-claim verification matrix against vendor representations. IC slide deck plus a working annex with evidence cross-references.',
    approachDE:
      'Reifegradbewertung über 5 Säulen. 37-Punkte-Verifikationsmatrix gegen Anbieter-Aussagen. IC-Folien plus Arbeits-Annex mit Beweis-Cross-References.',
    outcomeEN:
      'IC-ready value creation thesis identifying EUR 3-6M EBITDA uplift, paired with a risk register. Delivered in <1 week. Used directly in deal committee.',
    outcomeDE:
      'IC-fähige Value-Creation-These mit identifiziertem EUR 3-6M EBITDA-Uplift, gepaart mit Risikoregister. Lieferung in <1 Woche. Direkt im Deal-Komitee verwendet.',
    metricValueEN: '€3-6M',
    metricValueDE: '€3-6M',
    metricLabelEN: 'EBITDA uplift identified',
    metricLabelDE: 'EBITDA-Uplift identifiziert',
  },
  {
    id: 'systems-clinical-ai-program',
    area: 'systems',
    number: '06',
    named: true,
    featured: true,
    clientEN: "KISIM · Switzerland's leading clinical information system",
    clientDE: 'KISIM · führendes klinisches Informationssystem der Schweiz',
    problemEN:
      'Multi-year clinical AI program for the largest CIS in Switzerland. Production constraints: regulated healthcare, hospital deployment, multi-disciplinary teams, data residency.',
    problemDE:
      'Mehrjähriges klinisches KI-Programm für das grösste CIS der Schweiz. Produktionsbedingungen: reguliertes Gesundheitswesen, Spitaleinsatz, multidisziplinäre Teams, Datenhoheit.',
    approachEN:
      'Led the AI program end-to-end: architecture, model selection, integration with the underlying CIS, governance and clinical safety review, rollout coordination across hospital sites.',
    approachDE:
      'Leitung des KI-Programms end-to-end: Architektur, Modellauswahl, Integration mit dem zugrunde liegenden CIS, Governance und klinische Sicherheitsprüfung, Rollout-Koordination über Spitalstandorte.',
    outcomeEN:
      "AI capability deployed inside the CIS used by Switzerland's largest university hospital. Production-grade, regulator-aware, integrated with existing clinical workflows.",
    outcomeDE:
      'KI-Fähigkeit produktiv im CIS des grössten Universitätsspitals der Schweiz im Einsatz. Produktionsreif, regulatorisch bewusst, in bestehende klinische Workflows integriert.',
    metricValueEN: 'Production',
    metricValueDE: 'Produktiv',
    metricLabelEN: 'Multi-year clinical AI program',
    metricLabelDE: 'Mehrjähriges klinisches KI-Programm',
  },
  {
    id: 'systems-dociq-swiss-legaltech-clm',
    area: 'systems',
    number: '07',
    named: true,
    featured: true,
    clientEN: 'DocIQ · Swiss legal-tech contract lifecycle management platform',
    clientDE: 'DocIQ · Schweizer Legal-Tech-CLM-Plattform',
    problemEN:
      'Build a Swiss-grounded contract lifecycle platform that competes with global legacy incumbents on AI-native architecture, while meeting Swiss legal-market expectations on data residency, language and procurement.',
    problemDE:
      'Eine schweizerisch verankerte Contract-Lifecycle-Plattform aufbauen, die mit globalen Legacy-Anbietern auf KI-nativer Architektur konkurriert und gleichzeitig die Erwartungen des Schweizer Rechtsmarkts an Datenhoheit, Sprache und Beschaffung erfüllt.',
    approachEN:
      'Founded the company in 2017. Designed the platform architecture, built the team, raised funding, sold into legal and compliance teams across Switzerland and DACH, navigated procurement and regulatory requirements.',
    approachDE:
      'Unternehmen 2017 gegründet. Plattform-Architektur entworfen, Team aufgebaut, Finanzierung eingeworben, Vertrieb in Legal- und Compliance-Teams in der Schweiz und im DACH-Raum, Procurement und regulatorische Anforderungen navigiert.',
    outcomeEN:
      'Stalwart of the Swiss legal-tech scene since 2017. Live in production with enterprise customers, repeatedly upgraded with new AI-native capability as the market matured.',
    outcomeDE:
      'Stalwart der Schweizer Legal-Tech-Szene seit 2017. Produktiv bei Enterprise-Kunden im Einsatz, mit fortlaufender KI-nativer Weiterentwicklung im Takt des Marktes.',
    metricValueEN: 'Since 2017',
    metricValueDE: 'Seit 2017',
    metricLabelEN: 'Founder · Swiss legal-tech stalwart',
    metricLabelDE: 'Gründer · Schweizer Legal-Tech-Stalwart',
  },
  {
    id: 'systems-voice-spinout',
    area: 'systems',
    number: '08',
    clientEN:
      'European software services portco · AI voice agent product launch',
    clientDE:
      'Europäisches Software-Services-Portco · KI-Voice-Agent-Produkt-Launch',
    problemEN:
      "Portco wanted a new AI-first revenue line built on the firm's existing services capability. Required a hybrid voice product that could replace first-line support across multiple customer accounts.",
    problemDE:
      'Portco wollte eine neue KI-zuerst-Umsatzlinie aufbauend auf der bestehenden Service-Capability. Brauchte ein hybrides Voice-Produkt, das First-Line-Support über mehrere Kundenkonten ersetzen kann.',
    approachEN:
      'Architected the voice agent stack, coached the internal team through the build, cross-sold the resulting product to a sister portco as the first test customer.',
    approachDE:
      'Voice-Agent-Stack architektiert, internes Team durch den Build gecoacht, das resultierende Produkt an eine Schwester-Portco als ersten Test-Kunden cross-verkauft.',
    outcomeEN:
      'Hybrid voice product live in production. Established as a standalone product line, not a feature buried in services revenue.',
    outcomeDE:
      'Hybrides Voice-Produkt produktiv im Einsatz. Als eigenständige Produktlinie etabliert, nicht als Feature im Services-Umsatz vergraben.',
    metricValueEN: 'Live',
    metricValueDE: 'Live',
    metricLabelEN: 'New revenue line · production',
    metricLabelDE: 'Neue Umsatzlinie · produktiv',
  },
  {
    id: 'systems-ai-deal-screening',
    area: 'systems',
    number: '09',
    clientEN:
      'European travel platform · PE deal screening · AI upside analysis',
    clientDE:
      'Europäische Reise-Plattform · PE-Deal-Screening · KI-Upside-Analyse',
    problemEN:
      'Deal team needed a systematic AI exposure and disruption analysis on a target before IC. Standard tech DD does not surface AI-specific upside, downside, or competitive vulnerability.',
    problemDE:
      'Deal-Team brauchte eine systematische KI-Exposition- und Disruption-Analyse zum Target vor dem IC. Standard-Tech-DD erfasst KI-spezifischen Upside, Downside oder Wettbewerbsverwundbarkeit nicht.',
    approachEN:
      'Built a reusable AI deal-screening framework: AI exposure surface, automation upside per workflow, model-as-competitor risk, defensibility scoring. Applied it to the target.',
    approachDE:
      'Wiederverwendbares KI-Deal-Screening-Framework aufgebaut: KI-Expositions-Oberfläche, Automatisierungs-Upside pro Workflow, Modell-als-Wettbewerber-Risiko, Verteidigbarkeit-Scoring. Auf das Target angewendet.',
    outcomeEN:
      'Quantified AI upside and disruption risk surfaced for IC. Framework now applied to subsequent deals as a new GF / deal-team capability.',
    outcomeDE:
      'Quantifizierter KI-Upside und Disruption-Risiko für IC sichtbar gemacht. Framework jetzt bei weiteren Deals angewendet als neue GF-/Deal-Team-Fähigkeit.',
    metricValueEN: 'New capability',
    metricValueDE: 'Neue Fähigkeit',
    metricLabelEN: 'AI deal-screening framework',
    metricLabelDE: 'KI-Deal-Screening-Framework',
  },
];

export function getFeaturedCaseStudies(): readonly CaseStudy[] {
  return CASE_STUDIES.filter((s) => s.featured);
}

export function getCaseStudiesByArea(
  area: CaseStudyArea
): readonly CaseStudy[] {
  return CASE_STUDIES.filter((s) => s.area === area);
}
