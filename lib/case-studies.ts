/**
 * Single source of truth for case studies surfaced across mickel.tech.
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
  /* ---------- PDLC ---------- */
  {
    id: 'pdlc-swiss-multi-org-acceleration',
    area: 'pdlc',
    number: '01',
    featured: true,
    clientEN:
      'Swiss software company · 250+ engineers across multiple dev organisations',
    clientDE:
      'Schweizer Softwarehaus · 250+ Entwickler über mehrere Engineering-Organisationen',
    problemEN:
      'An established Swiss engineering org had rolled out generative AI coding tools but seen no measurable speedup after weeks. Two underlying problems: tooling adopted without methodology change, and no review or quality discipline to convert raw AI output into shippable code. The risk was a familiar one: the tools get blamed, the rollout stalls, and the org concludes "AI does not work for us."',
    problemDE:
      'Eine etablierte Schweizer Engineering-Organisation hatte generative KI-Coding-Tools ausgerollt, aber nach Wochen keine messbare Geschwindigkeitssteigerung gesehen. Zwei Ursachen: Tooling adoptiert ohne Methodenwechsel, keine Review- und Qualitäts-Disziplin, um rohen KI-Output in lieferfähigen Code zu wandeln. Das Risiko war das vertraute -- die Tools werden beschuldigt, der Rollout stockt, die Organisation schliesst „KI funktioniert für uns nicht“.',
    approachEN:
      'Three working sessions across the engineering organisation covering the full PDLC transformation: change in ways-of-working, agentic spec writing, cross-model review pipeline, eval-driven implementation flywheels and visual QA. Tools became one ingredient in a methodology, not the methodology itself. Senior engineers reframed as agent supervisors and decision owners rather than line-by-line authors.',
    approachDE:
      'Drei Working Sessions über die Engineering-Organisation hinweg, die die gesamte PDLC-Transformation abdeckten: Veränderung der Arbeitsweise, agentisches Spec Writing, Cross-Model-Review-Pipeline, eval-getriebene Implementierungs-Schwungräder und visuelle QA. Tools wurden zu einer Zutat in einer Methodik, nicht zur Methodik selbst. Senior-Engineers neu gerahmt als Agent-Supervisoren und Entscheidungsträger statt Zeile-für-Zeile-Autoren.',
    outcomeEN:
      "Reported 200%+ improvement in cycle time across the engineering organisation, with a measurable lift in average code quality on DORA-style metrics. Methodology now operating as the dev-org standard rather than a single team's experiment. Same playbook scheduled for adjacent dev orgs inside the company.",
    outcomeDE:
      'Berichtete 200%+ Verbesserung der Cycle Time über die Engineering-Organisation, mit messbarer Steigerung der durchschnittlichen Codequalität auf DORA-ähnlichen Metriken. Methodik läuft jetzt als Standard der Engineering-Organisation, nicht als Experiment eines einzelnen Teams. Selbes Playbook für benachbarte Engineering-Organisationen im Unternehmen geplant.',
    metricValueEN: '200%+',
    metricValueDE: '200%+',
    metricLabelEN: 'Cycle-time uplift · 250+ engineers · 3 workshops',
    metricLabelDE: 'Cycle-Time-Steigerung · 250+ Entwickler · 3 Workshops',
  },
  {
    id: 'pdlc-cistec-50-engineer-rollout',
    area: 'pdlc',
    number: '02',
    clientEN:
      'CISTEC AG · 50+ engineering org · regulated clinical software production',
    clientDE:
      'CISTEC AG · 50+ Engineering · regulierte klinische Software-Produktion',
    problemEN:
      'Established engineering organisation needed to adopt AI tooling without disrupting regulated clinical delivery. Concerns: vendor sprawl, prompt drift, security and IP exposure with cloud APIs, measurement of actual productivity gain vs anecdote.',
    problemDE:
      'Etablierte Engineering-Organisation musste KI-Tooling adoptieren, ohne die regulierte klinische Auslieferung zu stören. Sorgen: Anbieter-Sprawl, Prompt-Drift, Sicherheits- und IP-Exposition mit Cloud-APIs, Messung des tatsächlichen Produktivitätsgewinns jenseits anekdotischer Aussagen.',
    approachEN:
      'Guardrailed agentic-tooling rollout across the entire 50+ engineering organisation: standard editor stack, internal playbooks, prompt patterns, code-review pattern. Reusable AI platform underneath (LLM gateway, prompt registry, observability) so the rollout was a single onboarding rather than per-team chaos. The same platform underwrote the production clinical AI features that shipped on top.',
    approachDE:
      'Guardrailed-Rollout agentischer Tools über die gesamte 50+ Engineering-Organisation: Standard-Editor-Stack, interne Playbooks, Prompt-Patterns, Code-Review-Pattern. Wiederverwendbare KI-Plattform darunter (LLM-Gateway, Prompt-Registry, Observability), damit der Rollout ein einziges Onboarding war, kein Per-Team-Chaos. Dieselbe Plattform trug die produktiven klinischen KI-Features, die darauf ausgeliefert wurden.',
    outcomeEN:
      'Measurable productivity gains across the engineering organisation, captured rather than anecdotal. Single-pattern onboarding for new use cases. The same platform powered production clinical AI in <90 days (see KISIM case); the PDLC investment directly underwrote the product investment.',
    outcomeDE:
      'Messbare Produktivitätsgewinne über die Engineering-Organisation, erfasst statt anekdotisch. Single-Pattern-Onboarding für neue Use Cases. Dieselbe Plattform trug die produktive klinische KI in <90 Tagen (siehe KISIM-Fall) -- die PDLC-Investition trug die Produktinvestition direkt mit.',
    metricValueEN: '50+ engineers',
    metricValueDE: '50+ Entwickler',
    metricLabelEN: 'Single-pattern agentic rollout',
    metricLabelDE: 'Single-Pattern-Agenten-Rollout',
  },
  {
    id: 'pdlc-uk-custom-agents-acceleration',
    area: 'pdlc',
    number: '03',
    featured: true,
    clientEN:
      'UK software company · custom agentic coding pipeline · highly competitive market',
    clientDE:
      'Britisches Softwarehaus · individuelle agentische Coding-Pipeline · hart umkämpfter Markt',
    problemEN:
      'Engineering team needed to compress shipping cadence in a market where competitors were releasing features weekly. Generic AI tooling had not moved the needle. Standard PR review was the most consistent bottleneck: senior engineers spending too much time on the lowest-leverage parts of the loop.',
    problemDE:
      'Engineering-Team musste die Liefertaktung in einem Markt komprimieren, in dem Wettbewerber wöchentlich Features ausrollten. Generisches KI-Tooling hatte den Hebel nicht bewegt. Standard-PR-Review war der konsistenteste Engpass -- Senior-Engineers verbrachten zu viel Zeit mit den niedrig-hebeligen Teilen der Schleife.',
    approachEN:
      "Multiple coaching engagements paired with custom agents built into the team's existing pipeline. Agents wired into Jira for ticket triage and refinement, and into the review pipeline to surface critical code paths needing human attention. Methodology rather than tool swap: agents replaced the lowest-leverage parts of the human review loop and freed senior engineers for the high-leverage decisions.",
    approachDE:
      'Mehrere Coaching-Mandate, kombiniert mit massgefertigten Agenten in der bestehenden Pipeline des Teams. Agenten in Jira eingebunden für Ticket-Triage und -Verfeinerung sowie in die Review-Pipeline, um kritische Code-Pfade an menschliche Aufmerksamkeit zu übergeben. Methodik statt Tool-Tausch: Agenten haben die niedrig-hebeligen Teile der menschlichen Review-Schleife übernommen und Senior-Engineers für hochhebelige Entscheidungen freigespielt.',
    outcomeEN:
      'Three new products shipped since the engagement started, in a market where features ship weekly. Reported delivery speedups of up to 500%. Custom agent stack now part of the standard internal toolchain.',
    outcomeDE:
      'Seit Mandatsbeginn drei neue Produkte ausgeliefert, in einem Markt mit wöchentlicher Feature-Frequenz. Berichtete Liefer-Beschleunigungen von bis zu 500%. Massgefertigter Agenten-Stack jetzt Teil der internen Standard-Toolchain.',
    metricValueEN: 'Up to 500%',
    metricValueDE: 'Bis zu 500%',
    metricLabelEN: 'Delivery speedup · 3 new products shipped',
    metricLabelDE: 'Liefer-Beschleunigung · 3 neue Produkte ausgeliefert',
  },

  /* ---------- Independent expert ---------- */
  {
    id: 'expert-software-acceptance-dispute',
    area: 'expert',
    number: '04',
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
      "Filed expert opinion supporting counsel's case. Retained by the instructing firm for hearings as needed.",
    outcomeDE:
      'Eingereichtes Parteigutachten zur Stützung des Mandats der Kanzlei. Bei Bedarf für Verhandlungen mandatiert.',
    metricValueEN: '7-figure',
    metricValueDE: 'Siebenstellig',
    metricLabelEN: 'Claim value · party-engaged opinion',
    metricLabelDE: 'Streitwert · Parteigutachten',
  },
  {
    id: 'expert-werkvertrag-power-platform',
    area: 'expert',
    number: '05',
    clientEN:
      'Swiss public-sector procurement · platform delivery · joint expert mandate',
    clientDE:
      'Schweizer öffentliche Beschaffung · Plattformauslieferung · gemeinsames Gutachter-Mandat',
    problemEN:
      'Procurer and supplier required an independent acceptance expert (Werkvertrags-Gutachter) named in the contract. Subject: low-code platform delivery replacing a legacy system, with multiple back-office integrations.',
    problemDE:
      'Auftraggeber und Lieferant brauchten einen vertraglich benannten unabhängigen Abnahmegutachter (Werkvertrags-Gutachter). Gegenstand: Low-Code-Plattformauslieferung als Ablösung eines Altsystems, mit mehreren Back-Office-Integrationen.',
    approachEN:
      'Pre-engagement Prüfschema developed transparently from contract annexes. 12-domain assessment framework (completeness, business reqs, governance and ALM, security, data architecture, integrations, flows, UX, tests, ops, docs, handover). Pauschal fee, split between parties.',
    approachDE:
      'Vorab-Prüfschema, transparent aus den Vertragsanhängen entwickelt. Bewertungsrahmen über 12 Domänen (Vollständigkeit, Business-Anforderungen, Governance & ALM, Security, Datenarchitektur, Integrationen, Flows, UX, Tests, Betrieb, Doku, Übergabe). Pauschalhonorar, hälftig zwischen den Parteien.',
    outcomeEN:
      'Engagement signed; both parties accepted the methodology and scoring framework. Acceptance assessment scheduled at delivery point with optional Nachprüfung after Nachbesserungen.',
    outcomeDE:
      'Mandat unterzeichnet; beide Parteien haben die Methodik und das Scoring-Framework akzeptiert. Abnahmeprüfung am Liefertermin geplant, mit optionaler Nachprüfung nach Nachbesserungen.',
    metricValueEN: '7-figure',
    metricValueDE: 'Siebenstellig',
    metricLabelEN: 'Contract value · jointly-engaged acceptance',
    metricLabelDE: 'Vertragswert · gemeinsames Abnahme-Mandat',
  },
  {
    id: 'expert-cross-language-copyright',
    area: 'expert',
    number: '06',
    clientEN:
      'Swiss legal counsel · software copyright dispute · cross-language code derivation question',
    clientDE:
      'Schweizer Anwaltschaft · Software-Urheberrechtsstreit · Frage der sprachübergreifenden Code-Ableitung',
    problemEN:
      "Counsel needed to determine whether one party's commercial productivity tooling had derived from the other party's earlier implementation, written in a different programming language. Question turned on technical comparison across program structure, modules, algorithms and data structures, and source code, not just one-to-one literal comparison.",
    problemDE:
      'Die Anwaltschaft musste klären, ob das kommerzielle Produktivitäts-Tooling einer Partei vom früheren, in einer anderen Programmiersprache geschriebenen Werk der anderen Partei abgeleitet ist. Die Frage richtete sich auf den technischen Vergleich über Programmstruktur, Module, Algorithmen und Datenstrukturen sowie Quellcode -- nicht nur auf wörtlichen Eins-zu-eins-Vergleich.',
    approachEN:
      'Technical consulting expert for counsel. Multi-layer analysis along the established Swiss copyright-infringement filtering layers: program structure and architecture, modules, algorithms and data structures, source code, object code. Cleanly separated framework / generated / platform-mandated code from custom code authored by the parties so the comparison sat on the right material.',
    approachDE:
      'Technischer Konsultativ-Experte der Anwaltschaft. Mehrschichtige Analyse entlang der etablierten Schweizer Filterungs-Ebenen für Urheberrechtsverletzungen: Programmstruktur und Architektur, Module, Algorithmen und Datenstrukturen, Quellcode, Objektcode. Framework-, generierter und plattformseitig vorgegebener Code sauber von eigens geschriebenem Code der Parteien getrennt, damit der Vergleich auf dem richtigen Material lag.',
    outcomeEN:
      "Architectural separation between the two implementations established at the structural and algorithmic layers, leaving any literal-copy claim to a much narrower factual question. Findings supported counsel's position on the record.",
    outcomeDE:
      'Architektonische Trennung zwischen den beiden Implementierungen auf struktureller und algorithmischer Ebene festgestellt, sodass eine wörtliche-Kopie-These auf eine viel engere Tatsachenfrage reduziert war. Befunde stützten die Position der Anwaltschaft im Verfahren.',
    metricValueEN: 'Cross-language',
    metricValueDE: 'Sprachübergreifend',
    metricLabelEN: 'Code-derivation analysis · multi-layer filter',
    metricLabelDE: 'Code-Ableitungs-Analyse · mehrschichtige Filterung',
  },

  /* ---------- AI systems ---------- */
  {
    id: 'systems-kisim-clinical-llm',
    area: 'systems',
    number: '07',
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
      'Head of AI & Engineering Lead at CISTEC AG. Secured C-suite mandate, authored the strategy, secured budget. Shipped KISIM AI in <90 days (generative discharge drafts, semantic retrieval, structured medical extraction, summarisation). Built the reusable platform: LLM gateway, pgvector hybrid search, two-stage context pipeline, on-prem PII masking (custom GLiNER/BERT, 97%+ accuracy). Scaled AI adoption to 50+ engineers via guardrailed agentic-tooling rollout with playbooks and prompt patterns.',
    approachDE:
      'Head of AI & Engineering Lead bei CISTEC AG. C-Level-Mandat gesichert, Strategie verfasst, Budget gesichert. KISIM AI in <90 Tagen ausgeliefert (generative Austrittsberichte, semantisches Retrieval, strukturierte medizinische Extraktion, Summarisierung). Wiederverwendbare Plattform aufgebaut: LLM-Gateway, pgvector-Hybridsuche, zweistufige Kontext-Pipeline, On-Prem-PII-Masking (eigenes GLiNER/BERT, 97%+ Genauigkeit). KI-Adoption auf 50+ Entwickler skaliert über einen Guardrail-gesicherten Rollout agentischer Tools mit Playbooks und Prompt-Patterns.',
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
    number: '08',
    named: true,
    featured: true,
    clientEN: 'DocIQ · Building Swiss legal AI since 2017',
    clientDE: 'DocIQ · Schweizer Legal-AI seit 2017',
    problemEN:
      'Build one of the first Swiss platforms applying AI and NLP to legal documents, and keep extending it as the market shifts from NLP to LLMs to court-grade anonymisation, while meeting CH/DACH expectations on data residency, multi-language, and Swiss legal-market procurement.',
    problemDE:
      'Eine der ersten Schweizer Plattformen aufbauen, die KI und NLP auf Rechtsdokumente anwendet -- und sie weiterentwickeln, während sich der Markt von NLP zu LLMs zur gerichtsfähigen Anonymisierung verschiebt. Bei gleichzeitiger Erfüllung der CH/DACH-Anforderungen an Datenhoheit, Mehrsprachigkeit und Schweizer Beschaffung.',
    approachEN:
      'Founded the company in Zug in 2017 (Contract Vault GmbH). Designed and shipped DocIQ 1.0 (2018) as enterprise document lifecycle management with contract analysis, metadata extraction and intelligent search. Scaled to production deployments at the Swiss Insurance Association (SVV), Laux Lawyers and Kaiser Odermatt & Partner. Rebuilt the platform from the ground up for the LLM era: Sphere (next-generation AI document intelligence) and Shield (court anonymisation for the Swiss judiciary, fine-tuned local NER + LLM, zero data persistence).',
    approachDE:
      'Unternehmen 2017 in Zug gegründet (Contract Vault GmbH). DocIQ 1.0 (2018) als Enterprise-Document-Lifecycle-Management mit Vertragsanalyse, Metadaten-Extraktion und intelligenter Suche entworfen und ausgeliefert. Auf produktive Einsätze beim Schweizerischen Versicherungsverband (SVV), bei Laux Lawyers und bei Kaiser Odermatt & Partner skaliert. Plattform für die LLM-Ära von Grund auf neu gebaut -- Sphere (KI-Dokumentenintelligenz der nächsten Generation) und Shield (Anonymisierung von Gerichtsdokumenten für die Schweizer Justiz, fine-tuned lokales NER + LLM, keine Datenpersistenz).',
    outcomeEN:
      'Production at the Swiss Insurance Association, Laux Lawyers, and Kaiser Odermatt & Partner since 2021. Shield v1 (court anonymisation for the Swiss judiciary, fine-tuned local NER + LLM, zero data persistence) shipped 2025. Sphere + Shield v2 launched 2026: Word-native tracked changes, six integrated legal databases, AI Playbooks, court anonymisation rebuilt from the ground up. Continuously evolved as Swiss legal AI matured around it.',
    outcomeDE:
      'Produktiv beim Schweizerischen Versicherungsverband, bei Laux Lawyers und bei Kaiser Odermatt & Partner seit 2021. Shield v1 (Anonymisierung von Gerichtsdokumenten für die Schweizer Justiz, fine-tuned lokales NER + LLM, keine Datenpersistenz) 2025 lanciert. Sphere + Shield v2 2026 lanciert -- Word-native Änderungsverfolgung, sechs integrierte Rechtsdatenbanken, KI-Playbooks, Gerichtsanonymisierung von Grund auf neu gebaut. Kontinuierlich weiterentwickelt, während die Schweizer Legal-AI-Landschaft um sie herum reifte.',
    metricValueEN: 'Since 2017',
    metricValueDE: 'Seit 2017',
    metricLabelEN: 'Founder · Swiss legal AI',
    metricLabelDE: 'Gründer · Schweizer Legal-AI',
  },
  {
    id: 'systems-generative-ai-architecture-advisory',
    area: 'systems',
    number: '09',
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
