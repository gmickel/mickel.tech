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
    id: 'pdlc-legacy-stack-modernisation',
    area: 'pdlc',
    number: '01',
    featured: true,
    clientEN:
      'European PE-backed software portco · ~25 engineers · regulated sector',
    clientDE:
      'Europäisches PE-Portfoliounternehmen, Software · ~25 Entwickler · regulierter Sektor',
    problemEN:
      'Decades-old proprietary core platform on a stack the open market has effectively abandoned. Traditional rewrite estimated at €3-5M and 18 months. Skilled engineers in the legacy stack vanishing year on year. Hiring pipeline broken.',
    problemDE:
      'Jahrzehntealte proprietäre Kernplattform auf einem Stack, den der offene Markt faktisch verlassen hat. Klassisches Rewrite auf €3-5M und 18 Monate geschätzt. Fachkräfte im Legacy-Stack verschwinden Jahr für Jahr. Recruiting-Pipeline gebrochen.',
    approachEN:
      'Spec-first agentic migration with parallel agents under a Phase 0 foundation (BAUP framework, global registry, naming conventions). Two pilots before stop/go gate.',
    approachDE:
      'Spec-getriebene agentische Migration mit parallelen Agenten auf einem Phase-0-Fundament (BAUP-Framework, globales Register, Namenskonventionen). Zwei Piloten vor dem Stop/Go-Gate.',
    outcomeEN:
      'Migration feasibility validated in 12 days. Recruitment pivot from external dev hire to internal coaching. Two product teams onboarded to agentic PDLC.',
    outcomeDE:
      'Machbarkeit der Migration in 12 Tagen validiert. Recruiting-Pivot weg von externer Entwicklereinstellung hin zu interner Coaching-Strategie. Zwei Produktteams in agentische PDLC überführt.',
    metricValueEN: '€2.9-4.9M',
    metricValueDE: '€2.9-4.9M',
    metricLabelEN: 'Cost avoidance vs traditional rewrite',
    metricLabelDE: 'Kostenvermeidung vs. klassisches Rewrite',
  },
  {
    id: 'pdlc-buildinglink-context-strategy',
    area: 'pdlc',
    number: 'P3',
    clientEN:
      'US PE-backed property-management software · 25-year product, 12-15 devs scaling to 30',
    clientDE:
      'US PE-gehaltene Property-Management-Software · 25-jähriges Produkt, 12-15 Entwickler, Skalierung auf 30',
    problemEN:
      'CEO-led replatforming under tight delivery pressure, with the team running their first AI-assisted sprint. Mixed early KPIs (productivity gains real but masked by downstream QA + upstream requirements bottlenecks). Tool sprawl across Claude Code, Cursor, VS Code with no unified governance. Engineer mindset friction on handing work to agents.',
    problemDE:
      'CEO-geführtes Re-Platforming unter Lieferdruck, das Team im ersten KI-unterstützten Sprint. Gemischte Early-KPIs (Produktivitätsgewinne real, aber durch nachgelagerten QA-Engpass und vorgelagerten Anforderungs-Engpass maskiert). Tool-Sprawl über Claude Code, Cursor, VS Code ohne einheitliche Governance. Mindset-Reibung beim Übergeben an Agenten.',
    approachEN:
      'Cross-arm advisory engagement (BU-side capacity supporting Sagemount portfolio). Strategy review session with CEO + VP Engineering + EM + Director PMO. Mapped where their AI Context Strategy was already strong (~85% aligned with my pipeline) and the three lanes still missing: requirements engineering as the upstream bottleneck, implementation verification loops with cross-model review, and downstream QA acceleration.',
    approachDE:
      'Cross-Arm-Advisory-Mandat (BU-seitige Kapazität für Sagemount-Portfolio). Strategie-Review mit CEO, VP Engineering, EM und Director PMO. Kartierung, wo die AI-Context-Strategie bereits stark ist (~85% deckungsgleich mit meinem Vorgehen), und der drei noch fehlenden Spuren: Anforderungsengineering als vorgelagerter Engpass, Implementierungs-Verifikationsschleifen mit Cross-Model-Review, nachgelagerte QA-Beschleunigung.',
    outcomeEN:
      'Concrete next-step lanes the engineering org could pick up the following week. Spec-driven development plus self-verifying implementation loop adopted as the methodology direction. Cross-model review pattern handed over.',
    outcomeDE:
      'Konkrete nächste Spuren, die das Engineering in der Folgewoche aufnehmen konnte. Spec-driven Development plus selbstverifizierende Implementierungsschleife als methodische Richtung übernommen. Cross-Model-Review-Pattern übergeben.',
    metricValueEN: '85% aligned',
    metricValueDE: '85% deckungsgleich',
    metricLabelEN: 'CEO-led PDLC strategy review',
    metricLabelDE: 'CEO-geführte PDLC-Strategie-Review',
  },
  {
    id: 'pdlc-cistec-50-engineer-rollout',
    area: 'pdlc',
    number: 'P4',
    clientEN:
      'Swiss healthcare software vendor · 50+ engineering org · regulated production',
    clientDE:
      'Schweizer Healthcare-Softwarehaus · 50+ Engineering · regulierte Produktion',
    problemEN:
      'Established engineering organisation needed to adopt AI tooling without disrupting regulated clinical delivery. Concerns: vendor sprawl, prompt drift, security and IP exposure with cloud APIs, measurement of actual productivity gain vs anecdote.',
    problemDE:
      'Etablierte Engineering-Organisation musste KI-Tooling adoptieren, ohne die regulierte klinische Auslieferung zu stören. Sorgen: Anbieter-Sprawl, Prompt-Drift, Sicherheits- und IP-Exposition mit Cloud-APIs, Messung des tatsächlichen Produktivitätsgewinns jenseits anekdotischer Aussagen.',
    approachEN:
      'Guardrailed Copilot + Cursor rollout to 50+ engineers. Internal playbooks, prompt patterns, and a code-review pattern. Reusable AI platform underneath (LLM gateway, prompt registry, observability) so that the rollout was a single onboarding rather than per-team chaos.',
    approachDE:
      'Guardrailed-Rollout von Copilot + Cursor auf 50+ Entwickler. Interne Playbooks, Prompt-Patterns und ein Code-Review-Pattern. Wiederverwendbare KI-Plattform darunter (LLM-Gateway, Prompt-Registry, Observability), damit der Rollout ein einziges Onboarding war, kein Per-Team-Chaos.',
    outcomeEN:
      'Measurable productivity gains across the engineering org, captured rather than anecdotal. Single-pattern onboarding for new use cases. Same platform powered the production AI features (clinical LLM, see KISIM case) — the PDLC investment underwrote the product investment.',
    outcomeDE:
      'Messbare Produktivitätsgewinne über die Engineering-Organisation, erfasst statt anekdotisch. Single-Pattern-Onboarding für neue Use Cases. Dieselbe Plattform trug die produktiven KI-Features (klinische LLM, siehe KISIM-Fall) -- die PDLC-Investition trug die Produktinvestition mit.',
    metricValueEN: '50+ engineers',
    metricValueDE: '50+ Entwickler',
    metricLabelEN: 'Guardrailed AI tooling rollout',
    metricLabelDE: 'Guardrailed-KI-Tooling-Rollout',
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
      'Die Gruppenstrategie verlangte KI-zuerst-Auslieferung über heterogene Portfoliounternehmen mit unterschiedlichen Stacks, Sprachen und Team-Reife. Keine Standardmethodik, keine geteilten KPIs, keine wiederverwendbare Mandatsvorlage.',
    approachEN:
      'Built a standardised agentic PDLC engagement template, KPI framework, and assessment process reusable across the group. Onboarded multiple entities in a single onsite week.',
    approachDE:
      'Standardisierte Mandatsvorlage für agentische PDLC, KPI-Framework und Assessment-Prozess gebaut, gruppenweit wiederverwendbar. Mehrere Einheiten in einer einzigen Onsite-Woche aufgesetzt.',
    outcomeEN:
      'Adopted as group standard. Each subsequent entity onboards in days, not weeks. Continuing rollout across the portfolio.',
    outcomeDE:
      'Als Gruppenstandard übernommen. Jede weitere Einheit in Tagen statt Wochen aufgesetzt. Rollout über das Portfolio läuft weiter.',
    metricValueEN: 'Group standard',
    metricValueDE: 'Gruppenstandard',
    metricLabelEN: 'Reusable PDLC engagement template',
    metricLabelDE: 'Wiederverwendbare PDLC-Mandatsvorlage',
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
      'Bedeutender Wirtschaftsstreit über die Frage, was vertraglich tatsächlich geliefert wurde, über die technische Definition der Abnahme und über die Honorarstruktur. Die Anwaltschaft brauchte eine unabhängige technische Stellungnahme, die einer sorgfältigen Gegenprüfung standhält.',
    approachEN:
      'Parteigutachter instructed by counsel. Forensic analysis of source repositories, live infrastructure and contract artefacts. Question catalogue refined iteratively with counsel until the technical narrative was airtight.',
    approachDE:
      'Parteigutachter im Auftrag der Anwaltschaft. Forensische Analyse der Quell-Repositories, der produktiven Infrastruktur und der Vertragsunterlagen. Fragenkatalog gemeinsam mit der Anwaltschaft iterativ verfeinert, bis das technische Narrativ trug.',
    outcomeEN:
      "Filed expert opinion supporting counsel's case. Sole technical authority retained by the instructing firm; available for hearings as needed.",
    outcomeDE:
      'Eingereichtes Parteigutachten zur Stützung des Mandats der Kanzlei. Alleinige technische Instanz der mandatierenden Kanzlei; bei Bedarf bereit für Verhandlungen.',
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
      'Vorab-Prüfschema, transparent aus den Vertragsanhängen entwickelt. Bewertungsrahmen über 12 Domänen (Vollständigkeit, Business-Anforderungen, Governance & ALM, Security, Datenarchitektur, Integrationen, Flows, UX, Tests, Betrieb, Doku, Übergabe). Pauschalhonorar, hälftig zwischen den Parteien.',
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
    id: 'expert-cross-language-copyright',
    area: 'expert',
    number: 'E3',
    clientEN:
      'Swiss legal counsel · software copyright dispute · cross-language code derivation question',
    clientDE:
      'Schweizer Anwaltschaft · Software-Urheberrechtsstreit · Frage der sprachübergreifenden Code-Ableitung',
    problemEN:
      "Counsel needed to determine whether one party's commercial productivity tooling had derived from the other party's earlier implementation, written in a different programming language. Question turned on technical comparison across program structure, modules, algorithms and data structures, and source code — not just one-to-one literal comparison.",
    problemDE:
      'Die Anwaltschaft musste klären, ob das kommerzielle Produktivitäts-Tooling einer Partei vom früheren, in einer anderen Programmiersprache geschriebenen Werk der anderen Partei abgeleitet ist. Die Frage richtete sich auf den technischen Vergleich über Programmstruktur, Module, Algorithmen und Datenstrukturen sowie Quellcode -- nicht nur auf wörtlichen Eins-zu-eins-Vergleich.',
    approachEN:
      'Technical consulting expert for counsel. Multi-layer analysis along the established Swiss copyright-infringement filtering layers: program structure and architecture, modules, algorithms and data structures, source code, object code. Cleanly separated framework / generated / platform-mandated code from custom code authored by the parties so the comparison sat on the right material.',
    approachDE:
      'Technischer Konsultativ-Experte der Anwaltschaft. Mehrschichtige Analyse entlang der etablierten Schweizer Filterungs-Ebenen für Urheberrechtsverletzungen: Programmstruktur und Architektur, Module, Algorithmen und Datenstrukturen, Quellcode, Objektcode. Framework-, generierter und plattformseitig vorgegebener Code sauber von eigens geschriebenem Code der Parteien getrennt, damit der Vergleich auf dem richtigen Material lag.',
    outcomeEN:
      "Defensible technical findings supporting counsel's position. Architectural separation between the two implementations established at the structural and algorithmic layers, leaving any literal-copy claim to a much narrower factual question.",
    outcomeDE:
      'Vertretbare technische Befunde zur Stützung der Position der Anwaltschaft. Architektonische Trennung zwischen den beiden Implementierungen auf struktureller und algorithmischer Ebene festgestellt, sodass eine wörtliche-Kopie-These auf eine viel engere Tatsachenfrage reduziert war.',
    metricValueEN: 'Cross-language',
    metricValueDE: 'Sprachübergreifend',
    metricLabelEN: 'Code-derivation analysis · multi-layer filter',
    metricLabelDE: 'Code-Ableitungs-Analyse · mehrschichtige Filterung',
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
      'Das Investmentkomitee verlangte eine KI- und Tech-DD bei einem schnell wachsenden Plattform-Unternehmen mit umfangreich behaupteter KI-Fähigkeit. Standard-DD-Anbieter hatten nicht die Tiefe, die Behauptungen zu verifizieren; das Deal-Team brauchte eine Stellungnahme in unter einer Woche.',
    approachEN:
      'Maturity scoring across 5 pillars. 37-claim verification matrix against vendor representations. IC slide deck plus a working annex with evidence cross-references.',
    approachDE:
      'Reifegradbewertung über 5 Säulen. Verifikationsmatrix mit 37 Aussagen, geprüft gegen die Darstellung des Anbieters. IC-Folien plus Arbeits-Annex mit Querverweisen auf die Belege.',
    outcomeEN:
      'IC-ready value creation thesis identifying EUR 3-6M EBITDA uplift, paired with a risk register. Delivered in <1 week. Used directly in deal committee.',
    outcomeDE:
      'IC-fähige Value-Creation-These mit identifiziertem EUR 3-6M EBITDA-Uplift, gepaart mit Risikoregister. Lieferung in unter einer Woche. Direkt im Deal-Komitee verwendet.',
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
      'Ein marktführendes Schweizer klinisches Informationssystem in eine produktive KI-Plattform unter DSG / DSGVO überführen, mit On-Prem-Privacy und spitalgrader Zuverlässigkeit. KI-Kompetenz über eine etablierte Engineering-Organisation mit 50+ Personen skalieren, ohne die laufende klinische Auslieferung zu stören.',
    approachEN:
      'Head of AI & Engineering Lead at CISTEC AG. Secured C-suite mandate, authored the strategy, secured budget. Shipped KISIM AI in <90 days (generative discharge drafts, semantic retrieval, structured medical extraction, summarisation). Built the reusable platform: LLM gateway, pgvector hybrid search, two-stage context pipeline, on-prem PII masking (custom GLiNER/BERT, 97%+ accuracy). Scaled AI adoption to 50+ engineers via guardrailed Copilot/Cursor rollout with playbooks and prompt patterns.',
    approachDE:
      'Head of AI & Engineering Lead bei CISTEC AG. C-Level-Mandat gesichert, Strategie verfasst, Budget gesichert. KISIM AI in <90 Tagen ausgeliefert (generative Austrittsberichte, semantisches Retrieval, strukturierte medizinische Extraktion, Summarisierung). Wiederverwendbare Plattform aufgebaut: LLM-Gateway, pgvector-Hybridsuche, zweistufige Kontext-Pipeline, On-Prem-PII-Masking (eigenes GLiNER/BERT, 97%+ Genauigkeit). KI-Adoption auf 50+ Entwickler skaliert über einen Guardrail-gesicherten Copilot-/Cursor-Rollout mit Playbooks und Prompt-Patterns.',
    outcomeEN:
      "Switzerland's first production clinical LLM platform. Live in Swiss hospitals with expanding pilot pipeline. New ARR streams. Repositioned the company as an AI-enabled market leader. Presented at the openEHR.ch Symposium.",
    outcomeDE:
      'Erste produktive klinische LLM-Plattform der Schweiz. Live in Schweizer Spitälern, mit wachsender Pilot-Pipeline. Neue ARR-Ströme. Das Unternehmen als KI-gestützter Marktführer neu positioniert. Vortrag am openEHR.ch-Symposium.',
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
      'Eine der ersten Schweizer Plattformen aufbauen, die KI und NLP auf Rechtsdokumente anwendet -- und sie weiterentwickeln, während sich der Markt von NLP zu LLMs zur gerichtsfähigen Anonymisierung verschiebt. Bei gleichzeitiger Erfüllung der CH/DACH-Anforderungen an Datenhoheit, Mehrsprachigkeit und Schweizer Beschaffung.',
    approachEN:
      'Founded the company in Zug in 2017 (Contract Vault GmbH). Designed and shipped DocIQ 1.0 (2018) as enterprise document lifecycle management with contract analysis, metadata extraction and intelligent search. Scaled to production deployments at the Swiss Insurance Association (SVV), Laux Lawyers and Kaiser Odermatt & Partner. Rebuilt the platform from the ground up for the LLM era — Sphere (next-generation AI document intelligence) and Shield (court anonymisation for the Swiss judiciary, fine-tuned local NER + LLM, zero data persistence).',
    approachDE:
      'Unternehmen 2017 in Zug gegründet (Contract Vault GmbH). DocIQ 1.0 (2018) als Enterprise-Document-Lifecycle-Management mit Vertragsanalyse, Metadaten-Extraktion und intelligenter Suche entworfen und ausgeliefert. Auf produktive Einsätze beim Schweizerischen Versicherungsverband (SVV), bei Laux Lawyers und bei Kaiser Odermatt & Partner skaliert. Plattform für die LLM-Ära von Grund auf neu gebaut -- Sphere (KI-Dokumentenintelligenz der nächsten Generation) und Shield (Anonymisierung von Gerichtsdokumenten für die Schweizer Justiz, fine-tuned lokales NER + LLM, keine Datenpersistenz).',
    outcomeEN:
      'Production at the Swiss Insurance Association, Laux Lawyers, and Kaiser Odermatt & Partner since 2021. Shield v1 (court anonymisation for the Swiss judiciary, fine-tuned local NER + LLM, zero data persistence) shipped 2025. Sphere + Shield v2 launched 2026 — Word-native tracked changes, six integrated legal databases, AI Playbooks, court anonymisation rebuilt from the ground up. Continuously evolved as Swiss legal AI matured around it.',
    outcomeDE:
      'Produktiv beim Schweizerischen Versicherungsverband, bei Laux Lawyers und bei Kaiser Odermatt & Partner seit 2021. Shield v1 (Anonymisierung von Gerichtsdokumenten für die Schweizer Justiz, fine-tuned lokales NER + LLM, keine Datenpersistenz) 2025 lanciert. Sphere + Shield v2 2026 lanciert -- Word-native Änderungsverfolgung, sechs integrierte Rechtsdatenbanken, KI-Playbooks, Gerichtsanonymisierung von Grund auf neu gebaut. Kontinuierlich weiterentwickelt, während die Schweizer Legal-AI-Landschaft um sie herum reifte.',
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
      'Europäisches Software-Services-Portco · Launch eines KI-Voice-Agent-Produkts',
    problemEN:
      "Portco wanted a new AI-first revenue line built on the firm's existing services capability. Required a hybrid voice product that could replace first-line support across multiple customer accounts.",
    problemDE:
      'Das Portco wollte eine neue KI-zuerst-Umsatzlinie aufbauen, basierend auf der bestehenden Service-Capability. Gebraucht wurde ein hybrides Voice-Produkt, das First-Line-Support über mehrere Kundenkonten ersetzen kann.',
    approachEN:
      'Architected the voice agent stack, coached the internal team through the build, cross-sold the resulting product to a sister portco as the first test customer.',
    approachDE:
      'Voice-Agent-Stack architektiert, das interne Team durch den Build gecoacht, das resultierende Produkt an ein Schwester-Portco als ersten Testkunden cross-verkauft.',
    outcomeEN:
      'Hybrid voice product live in production. Established as a standalone product line, not a feature buried in services revenue.',
    outcomeDE:
      'Hybrides Voice-Produkt produktiv im Einsatz. Als eigenständige Produktlinie etabliert, nicht als Feature, das im Services-Umsatz untergeht.',
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
      'Europäische Reiseplattform · PE-Deal-Screening · KI-Upside-Analyse',
    problemEN:
      'Deal team needed a systematic AI exposure and disruption analysis on a target before IC. Standard tech DD does not surface AI-specific upside, downside, or competitive vulnerability.',
    problemDE:
      'Das Deal-Team brauchte vor dem IC eine systematische Analyse der KI-Exposition und der Disruptionsrisiken am Target. Eine Standard-Tech-DD erfasst KI-spezifischen Upside, Downside oder Wettbewerbsverwundbarkeit nicht.',
    approachEN:
      'Built a reusable AI deal-screening framework: AI exposure surface, automation upside per workflow, model-as-competitor risk, defensibility scoring. Applied it to the target.',
    approachDE:
      'Wiederverwendbares KI-Deal-Screening-Framework aufgebaut: Oberfläche der KI-Exposition, Automatisierungs-Upside pro Workflow, Risiko Modell-als-Wettbewerber, Verteidigbarkeits-Scoring. Auf das Target angewendet.',
    outcomeEN:
      'Quantified AI upside and disruption risk surfaced for IC. Framework now applied to subsequent deals as a new GF / deal-team capability.',
    outcomeDE:
      'Quantifizierter KI-Upside und Disruptionsrisiko für das IC sichtbar gemacht. Das Framework wird jetzt bei weiteren Deals angewendet, als neue Fähigkeit von GF und Deal-Team.',
    metricValueEN: 'New capability',
    metricValueDE: 'Neue Fähigkeit',
    metricLabelEN: 'AI deal-screening framework',
    metricLabelDE: 'KI-Deal-Screening-Framework',
  },
  {
    id: 'systems-obligate-generative-ai-advisory',
    area: 'systems',
    number: 'S5',
    clientEN:
      'Swiss B2B platform company · technical advisor · generative AI product strategy',
    clientDE:
      'Schweizer B2B-Plattform-Unternehmen · technischer Beirat · Strategie für generatives KI-Produkt',
    problemEN:
      'Platform team weighing whether to build a generative AI capability in-house or license from a vendor pitching a hybrid retrieval / chat product. Concerns: defensibility, data and IP exposure, evaluation pipeline gaps, retrieval architecture quality (chunking, embedding, hybrid fusion, reranking, query rewriting / routing / decomposition), local-LLM viability, sovereignty.',
    problemDE:
      'Plattform-Team wägt ab, ob eine generative KI-Fähigkeit in-house gebaut oder von einem Anbieter lizenziert wird, der ein hybrides Retrieval-/Chat-Produkt anbietet. Sorgen: Verteidigbarkeit, Daten- und IP-Exposition, Lücken in Evaluierungspipelines, Qualität der Retrieval-Architektur (Chunking, Embedding, Hybrid-Fusion, Reranking, Query-Rewriting / -Routing / -Decomposition), Tauglichkeit lokaler LLM, Souveränität.',
    approachEN:
      "Technical advisor mandate. Independent assessment of the vendor's pitch against modern retrieval-augmented architecture practice. Build-vs-buy analysis grounded in long-term cost, future-proofing, evaluation discipline and data-pipeline ownership. Concrete written critique covering each architectural concern with the trade-offs spelled out.",
    approachDE:
      'Mandat als technischer Beirat. Unabhängige Bewertung des Anbieter-Pitches gegen moderne Retrieval-Augmented-Architektur-Praxis. Build-vs-Buy-Analyse, gestützt auf langfristige Kosten, Zukunftssicherheit, Evaluierungsdisziplin und Eigentum an der Datenpipeline. Konkrete schriftliche Kritik, die jede architektonische Sorge mit klar benannten Trade-offs adressiert.',
    outcomeEN:
      'Strategic clarity for the platform team on which path actually compounded. Internal capability path articulated end-to-end (data pipeline → embedding → hybrid retrieval → eval pipelines → on-prem viability), with the licensing path properly sized rather than dismissed.',
    outcomeDE:
      'Strategische Klarheit für das Plattform-Team, welcher Pfad tatsächlich kumuliert. Interner Capability-Pfad end-to-end formuliert (Datenpipeline → Embedding → Hybrid-Retrieval → Eval-Pipelines → On-Prem-Tauglichkeit), mit dem Lizenzierungspfad sauber gewichtet statt verworfen.',
    metricValueEN: 'Build vs buy',
    metricValueDE: 'Build vs Buy',
    metricLabelEN: 'Generative AI architecture advisory',
    metricLabelDE: 'Generative-KI-Architektur-Beirat',
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

/**
 * Pick the strongest 2-3 cases per area for the route preview surfaces.
 * Featured studies first, then fill from the rest of the area.
 */
export function getAreaPreviewCaseStudies(
  area: CaseStudyArea,
  limit = 3
): readonly CaseStudy[] {
  const inArea = CASE_STUDIES.filter((s) => s.area === area);
  const featured = inArea.filter((s) => s.featured);
  const rest = inArea.filter((s) => !s.featured);
  return [...featured, ...rest].slice(0, limit);
}
