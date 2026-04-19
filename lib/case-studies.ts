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
      'European multi-entity software group · agentic PDLC standardisation across portfolio',
    clientDE:
      'Europäische Software-Gruppe · agentische PDLC-Standardisierung über das Portfolio',
    problemEN:
      'Group strategy required AI-first delivery across heterogeneous portfolio companies with different stacks, languages, and team maturity. No standard methodology, no shared KPIs, no reusable engagement template.',
    problemDE:
      'Gruppenstrategie verlangte KI-zuerst-Auslieferung über heterogene Portfoliounternehmen mit unterschiedlichen Stacks, Sprachen und Team-Reife. Keine Standardmethodik, keine geteilten KPIs, keine wiederverwendbare Engagement-Vorlage.',
    approachEN:
      'Built a standardised agentic PDLC engagement template, KPI framework, and assessment process reusable across the group. Onboarded multiple entities in a single onsite week.',
    approachDE:
      'Standardisierte agentische PDLC-Engagement-Vorlage, KPI-Framework und Assessment-Prozess, wiederverwendbar über die Gruppe hinweg. Mehrere Einheiten in einer Onsite-Woche aufgesetzt.',
    outcomeEN:
      'Adopted as group standard. Each subsequent entity onboards in days, not weeks. Continuing rollout across the portfolio.',
    outcomeDE:
      'Als Gruppenstandard übernommen. Jede weitere Einheit in Tagen statt Wochen aufgesetzt. Laufende Ausrollung über das Portfolio.',
    metricValueEN: 'Group standard',
    metricValueDE: 'Gruppenstandard',
    metricLabelEN: 'Reusable PDLC engagement template',
    metricLabelDE: 'Wiederverwendbare PDLC-Engagement-Vorlage',
  },
  {
    id: 'expert-software-acceptance-dispute',
    area: 'expert',
    number: '03',
    featured: true,
    clientEN: 'Swiss commercial counsel · 7-figure software acceptance dispute',
    clientDE: 'Schweizer Wirtschaftskanzlei · siebenstelliger Software-Streit',
    problemEN:
      'Significant commercial dispute centred on what was actually delivered against contract, the technical definition of acceptance, and the fee structure. Counsel needed an independent technical opinion that would hold up against careful adversarial scrutiny.',
    problemDE:
      'Bedeutender Wirtschaftsstreit zur Frage, was vertraglich tatsächlich geliefert wurde, zur technischen Definition der Abnahme und zur Honorarstruktur. Die Anwaltschaft brauchte eine unabhängige technische Stellungnahme, die einer sorgfältigen gegnerischen Prüfung standhält.',
    approachEN:
      'Parteigutachter instructed by counsel. Forensic analysis of source repositories, live infrastructure and contract artefacts. Question catalogue refined iteratively with counsel until the technical narrative was airtight.',
    approachDE:
      'Parteigutachter im Auftrag der Anwaltschaft. Forensische Analyse der Quell-Repositories, der produktiven Infrastruktur und der Vertragsunterlagen. Fragenkatalog gemeinsam mit der Anwaltschaft iterativ verfeinert, bis das technische Narrativ trug.',
    outcomeEN:
      "Filed expert opinion supporting counsel's case. Sole technical authority retained by the instructing firm; available for hearings as needed.",
    outcomeDE:
      'Eingereichtes Parteigutachten zur Stützung des Mandats der Kanzlei. Alleinige technische Instanz der mandatierenden Kanzlei; bereit für Verhandlungen bei Bedarf.',
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
    id: 'systems-kisim-clinical-llm',
    area: 'systems',
    number: '06',
    named: true,
    featured: true,
    clientEN:
      "KISIM (CISTEC AG) · Switzerland's leading clinical information system",
    clientDE:
      'KISIM (CISTEC AG) · führendes klinisches Informationssystem der Schweiz',
    problemEN:
      'Transform a market-leading Swiss clinical information system into a production AI platform under FADP / GDPR, with on-prem privacy and hospital-grade reliability. Scale AI fluency across an established 50+ engineering organisation without disrupting existing clinical delivery.',
    problemDE:
      'Ein marktführendes Schweizer klinisches Informationssystem in eine produktive KI-Plattform unter FADP / GDPR überführen, mit On-Prem-Privacy und spitalgrad-Zuverlässigkeit. KI-Kompetenz über eine etablierte 50+ Engineering-Organisation skalieren, ohne die laufende klinische Auslieferung zu stören.',
    approachEN:
      'Head of AI & Engineering Lead at CISTEC AG. Secured C-suite mandate, authored the strategy, secured budget. Shipped KISIM AI in <90 days (generative discharge drafts, semantic retrieval, structured medical extraction, summarisation). Built the reusable platform: LLM gateway, pgvector hybrid search, two-stage context pipeline, on-prem PII masking (custom GLiNER/BERT, 97%+ accuracy). Scaled AI adoption to 50+ engineers via guardrailed Copilot/Cursor rollout with playbooks and prompt patterns.',
    approachDE:
      'Head of AI & Engineering Lead bei CISTEC AG. C-Level-Mandat gesichert, Strategie verfasst, Budget gesichert. KISIM AI in <90 Tagen ausgeliefert (generative Austrittsberichte, semantisches Retrieval, strukturierte medizinische Extraktion, Summarisation). Wiederverwendbare Plattform aufgebaut: LLM-Gateway, pgvector-Hybridsuche, zweistufige Kontext-Pipeline, On-Prem-PII-Masking (eigenes GLiNER/BERT, 97%+ Genauigkeit). KI-Adoption auf 50+ Entwickler skaliert via guardrailed Copilot/Cursor-Rollout mit Playbooks und Prompt-Patterns.',
    outcomeEN:
      "Switzerland's first production clinical LLM platform. Live in Swiss hospitals with expanding pilot pipeline. New ARR streams. Repositioned the company as an AI-enabled market leader. Presented at the openEHR.ch Symposium.",
    outcomeDE:
      'Erste produktive klinische LLM-Plattform der Schweiz. Live in Schweizer Spitälern mit wachsender Pilot-Pipeline. Neue ARR-Ströme. Das Unternehmen als KI-gestützter Marktführer neu positioniert. Vortrag am openEHR.ch-Symposium.',
    metricValueEN: '<90 days',
    metricValueDE: '<90 Tage',
    metricLabelEN: 'First production clinical LLM in CH',
    metricLabelDE: 'Erste produktive klinische LLM in CH',
  },
  {
    id: 'systems-dociq-swiss-legaltech-clm',
    area: 'systems',
    number: '07',
    named: true,
    featured: true,
    clientEN: 'DocIQ · Building Swiss legal AI since 2017',
    clientDE: 'DocIQ · Schweizer Legal-AI seit 2017',
    problemEN:
      'Build one of the first Swiss platforms applying AI and NLP to legal documents — and keep extending it as the market shifts from NLP to LLMs to court-grade anonymisation, while meeting CH/DACH expectations on data residency, multi-language, and Swiss legal-market procurement.',
    problemDE:
      'Eine der ersten Schweizer Plattformen aufbauen, die KI und NLP auf Rechtsdokumente anwendet — und sie weiterentwickeln, während sich der Markt von NLP zu LLMs zur gerichtsfähigen Anonymisierung verschiebt, bei gleichzeitiger Erfüllung der CH/DACH-Anforderungen an Datenhoheit, Mehrsprachigkeit und Schweizer Beschaffung.',
    approachEN:
      'Founded the company in Zug in 2017 (Contract Vault GmbH). Designed and shipped DocIQ 1.0 (2018) as enterprise document lifecycle management with contract analysis, metadata extraction and intelligent search. Scaled to production deployments at the Swiss Insurance Association (SVV), Laux Lawyers and Kaiser Odermatt & Partner. Rebuilt the platform from the ground up for the LLM era — Sphere (next-generation AI document intelligence) and Shield (court anonymisation for the Swiss judiciary, fine-tuned local NER + LLM, zero data persistence).',
    approachDE:
      'Unternehmen 2017 in Zug gegründet (Contract Vault GmbH). DocIQ 1.0 (2018) entworfen und ausgeliefert als Enterprise-Document-Lifecycle-Management mit Vertragsanalyse, Metadaten-Extraktion und intelligenter Suche. Auf produktive Einsätze beim Schweizerischen Versicherungsverband (SVV), Laux Lawyers und Kaiser Odermatt & Partner skaliert. Plattform für die LLM-Ära von Grund auf neu gebaut — Sphere (KI-Dokumentenintelligenz der nächsten Generation) und Shield (Anonymisierung von Gerichtsdokumenten für die Schweizer Justiz, fine-tuned lokales NER + LLM, keine Datenpersistenz).',
    outcomeEN:
      'Live in Swiss enterprise production since 2018, deepening with each LLM-era upgrade. Sphere + Shield v2 launched 2026, including word-native tracked changes, six legal databases, AI Playbooks, and court anonymisation rebuilt from the ground up.',
    outcomeDE:
      'Live in Schweizer Enterprise-Produktion seit 2018, mit jeder LLM-Ära-Iteration vertieft. Sphere + Shield v2 2026 lanciert, inklusive Word-nativer Änderungsverfolgung, sechs Rechtsdatenbanken, KI-Playbooks und neu aufgebaute Gerichtsanonymisierung.',
    metricValueEN: 'Since 2017',
    metricValueDE: 'Seit 2017',
    metricLabelEN: 'Founder · Swiss legal AI',
    metricLabelDE: 'Gründer · Schweizer Legal-AI',
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
