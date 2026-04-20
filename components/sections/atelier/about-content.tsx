import Image from 'next/image';

interface AboutContentProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '01 / About',
  headline:
    "I build AI systems, help engineering teams multiply their R&D output, and read other people's code under cross-examination for a living.",
  intro:
    "Twenty years of shipping software in regulated industries. I founded DocIQ in 2017 to apply AI to legal documents in Switzerland; led KISIM's AI program at CISTEC AG to ship the country's first production clinical LLM; and now run AI & Technology at Growth Factors (Bregal portfolio) while taking a small number of select mandates each year alongside it.",
  arcLabel: '02 / Career arc',
  arc: [
    {
      period: '2003-present',
      title: 'Engineering practice',
      body: 'Twenty-plus years of building production software across healthcare, legal, financial and public-sector contexts. Across every chapter, the same pattern: regulated environments where AI either has to be done properly or not at all.',
    },
    {
      period: '2017-present',
      title: 'Founder, DocIQ',
      body: 'Founded Contract Vault GmbH in Zug. Built and shipped DocIQ 1.0 (2018), one of the first Swiss platforms applying NLP and ML to legal document lifecycle management. Live in production at the Swiss Insurance Association, Laux Lawyers, Kaiser Odermatt & Partner. Sphere + Shield v2 launched 2026.',
    },
    {
      period: '2023-2025',
      title: 'Head of AI & Engineering Lead, CISTEC AG',
      body: "Secured C-suite mandate to transform KISIM (Switzerland's leading clinical information system). Shipped KISIM AI in <90 days. Built the reusable AI platform (LLM gateway, pgvector, two-stage context, on-prem PII masking at 97%+). Scaled AI adoption to 50+ engineers. First production clinical LLM platform in Switzerland.",
    },
    {
      period: '2025-present',
      title: 'Operating Principal, AI & Technology · Growth Factors',
      body: 'Operating Principal for AI and technology across the Growth Factors / Bregal portfolio. Active across 10+ DACH portfolio companies on agentic PDLC programmes, AI maturity assessments, and AI / tech due diligence for the deal teams. The patterns and methodology sharpened against that portfolio inform the work I bring to independent mandates here. Independent practice runs in parallel.',
    },
    {
      period: 'ongoing',
      title: 'Independent expert · ITDR-listed',
      body: 'Listed Technical Expert at the Institution for IT and Data Dispute Resolution (itdr.ch). Engaged by counsel as Parteigutachter and by procurement parties as Werkvertrags-Gutachter. AI and software matters where the technical claim materially shifts the outcome.',
    },
    {
      period: 'ongoing',
      title: 'Open source: FlowNext, MergeFoundry',
      body: 'Author of FlowNext (open-source agentic SDLC orchestrator, thousands of users). Founder of MergeFoundry, Inc, next-generation orchestration platform for agentic PDLC, currently in private beta. Both products inform the methodology I deploy in client engagements.',
    },
  ],
  recogLabel: '03 / Recognitions',
  recogIntro:
    'Public bodies that vet experts, communities that select speakers, networks that pick frontier-model collaborators.',
  recog: [
    'OpenAI Red Team Network alumnus: frontier model safety + abuse resilience',
    'ITDR-listed Technical Expert (Switzerland): ICT and AI disputes',
    'Invited speaker, SECA 2026 (Swiss Private Equity & Corporate Finance Association): AI in SME growth strategies',
    'Speaker, openEHR.ch Symposium: clinical AI and unstructured-to-openEHR pipelines',
  ],
  principlesLabel: '04 / How I work',
  principles: [
    {
      tag: 'Process before tools',
      body: 'Every engagement starts with the workflow that hurts. Not the technology catalogue.',
    },
    {
      tag: 'Eval gates from day one',
      body: 'No production deployment without measurable success criteria the system has demonstrably met.',
    },
    {
      tag: 'Internal team owns it',
      body: 'Engagements end when your team owns operations. I leave behind documentation, runbooks, and capability, not dependency.',
    },
    {
      tag: 'Honest about fit',
      body: 'If your matter falls outside what I can defensibly do well, I say so on the first call.',
    },
  ],
  ctaLabel: '05 / Talk',
  ctaHeading: 'Reach out.',
  ctaBody:
    'Discovery call for new mandates, confidential intake for expert work, or just write directly.',
  ctaPrimary: 'Discuss a mandate',
  ctaSecondary: 'Confidential expert intake',
  ctaPrimaryHref: 'https://cal.com/gmickel',
  ctaSecondaryHref: '/expert#intake',
};

const copyDE = {
  eyebrow: '01 / Über mich',
  headline:
    'Ich baue KI-Systeme, helfe Engineering-Teams, ihren F&E-Output zu vervielfachen, und lese fremden Code unter Kreuzverhör. Beruflich.',
  intro:
    'Zwanzig Jahre Software-Auslieferung in regulierten Branchen. 2017 habe ich DocIQ gegründet, um KI auf Rechtsdokumente in der Schweiz anzuwenden; bei CISTEC AG habe ich das KI-Programm von KISIM geleitet und das erste produktive klinische LLM des Landes ausgeliefert; heute leite ich KI & Technologie bei Growth Factors (Bregal-Portfolio) und nehme parallel eine kleine Zahl ausgewählter Mandate pro Jahr an.',
  arcLabel: '02 / Werdegang',
  arc: [
    {
      period: '2003-heute',
      title: 'Engineering-Praxis',
      body: 'Zwanzig Jahre Aufbau produktiver Software über Gesundheitswesen, Recht, Finanzen und öffentliche Hand hinweg. Durch jedes Kapitel dasselbe Muster: regulierte Umgebungen, in denen KI entweder ordentlich gemacht wird oder gar nicht.',
    },
    {
      period: '2017-heute',
      title: 'Gründer, DocIQ',
      body: 'Contract Vault GmbH 2017 in Zug gegründet. DocIQ 1.0 (2018) gebaut und ausgeliefert -- eine der ersten Schweizer Plattformen, die NLP und ML auf den Vertrags- und Dokumentenlebenszyklus anwendet. Produktiv beim Schweizerischen Versicherungsverband, bei Laux Lawyers und bei Kaiser Odermatt & Partner. Sphere + Shield v2 2026 lanciert.',
    },
    {
      period: '2023-2025',
      title: 'Head of AI & Engineering Lead, CISTEC AG',
      body: 'C-Level-Mandat zur Transformation von KISIM gesichert (führendes klinisches Informationssystem der Schweiz). KISIM AI in <90 Tagen ausgeliefert. Wiederverwendbare KI-Plattform aufgebaut (LLM-Gateway, pgvector, zweistufiger Kontext, On-Prem-PII-Masking 97%+). KI-Adoption auf 50+ Entwickler skaliert. Erste produktive klinische LLM-Plattform der Schweiz.',
    },
    {
      period: '2025-heute',
      title: 'Operating Principal, KI & Technologie · Growth Factors',
      body: 'Operating Principal für KI und Technologie über das Growth-Factors-/Bregal-Portfolio. Aktiv über 10+ DACH-Portfoliounternehmen mit agentischen PDLC-Programmen, KI-Reifegradanalysen und KI- und Tech-Due-Diligence für die Deal-Teams. Die Muster und die Methodik, die in diesem Portfolio geschärft wurden, fliessen in die unabhängigen Mandate hier ein. Die unabhängige Praxis läuft parallel.',
    },
    {
      period: 'laufend',
      title: 'Unabhängiger Experte · ITDR-gelistet',
      body: 'Gelisteter technischer Experte an der Institution for IT and Data Dispute Resolution (itdr.ch). Im Auftrag der Anwaltschaft als Parteigutachter und gemeinsam von Vertragsparteien als Werkvertrags-Gutachter beauftragt. KI- und Software-Sachverhalte, in denen die technische Aussage das Ergebnis wesentlich verschiebt.',
    },
    {
      period: 'laufend',
      title: 'Open Source: FlowNext, MergeFoundry',
      body: 'Autor von FlowNext (Open-Source-Orchestrator für agentische SDLC, tausende Nutzer). Gründer von MergeFoundry, Inc. -- Plattform der nächsten Generation für agentische PDLC, aktuell in Private Beta. Beide Produkte speisen die Methodik, die ich in Mandaten einsetze.',
    },
  ],
  recogLabel: '03 / Anerkennungen',
  recogIntro:
    'Öffentliche Stellen, die Experten prüfen. Communities, die Sprecher auswählen. Netzwerke, die Frontier-Model-Mitwirkende einladen.',
  recog: [
    'OpenAI Red Team Network Alumnus -- Frontier-Model-Safety und Missbrauchsresilienz',
    'ITDR-gelisteter technischer Experte (Schweiz) -- IKT- und KI-Streitigkeiten',
    'Eingeladener Sprecher, SECA 2026 (Swiss Private Equity & Corporate Finance Association) -- KI in KMU-Wachstumsstrategien',
    'Sprecher, openEHR.ch-Symposium -- klinische KI und Pipelines von unstrukturiert zu openEHR',
  ],
  principlesLabel: '04 / Wie ich arbeite',
  principles: [
    {
      tag: 'Prozess vor Tools',
      body: 'Jedes Mandat beginnt beim Workflow, der wehtut. Nicht beim Technologiekatalog.',
    },
    {
      tag: 'Eval-Gates ab Tag eins',
      body: 'Kein produktives Deployment ohne messbare Erfolgskriterien, die das System nachweislich erfüllt hat.',
    },
    {
      tag: 'Internes Team trägt es',
      body: 'Mandate enden, wenn Ihr Team den Betrieb trägt. Ich hinterlasse Dokumentation, Runbooks und Capability -- keine Abhängigkeit.',
    },
    {
      tag: 'Ehrlich beim Fit',
      body: 'Wenn Ihr Sachverhalt ausserhalb dessen liegt, was ich vertretbar gut kann, sage ich es im ersten Gespräch.',
    },
  ],
  ctaLabel: '05 / Sprechen',
  ctaHeading: 'Melden Sie sich.',
  ctaBody:
    'Discovery-Gespräch für neue Mandate, vertrauliche Anfrage für Begutachtungsmandate oder einfach direkt schreiben.',
  ctaPrimary: 'Mandat besprechen',
  ctaSecondary: 'Vertrauliche Begutachtungsanfrage',
  ctaPrimaryHref: 'https://cal.com/gmickel',
  ctaSecondaryHref: '/de/expert#intake',
};

export default function AtelierAbout({ locale = 'en' }: AboutContentProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="atelier-dark relative overflow-hidden"
        id="top"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 80% 12%, hsl(17 56% 43% / 0.10) 0%, transparent 55%), radial-gradient(ellipse at 5% 90%, hsl(213 51% 24% / 0.14) 0%, transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-[1480px] px-6 pt-16 pb-20 md:px-10 md:pt-28 md:pb-24">
          <div className="mb-12 flex items-center gap-6">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {c.eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="atelier-sweep h-px flex-1 origin-left bg-[hsl(var(--paper))]/25"
            />
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-8">
              <h1
                className="atelier-display atelier-rise font-medium text-[clamp(2.4rem,1.4rem+4vw,5rem)] text-[hsl(var(--paper))]"
                id="about-hero-heading"
                style={{ animationDelay: '0.05s' }}
              >
                {c.headline}
              </h1>
              <p
                className="atelier-rise atelier-lead mt-10 max-w-[60ch] text-[hsl(var(--paper))]/80"
                style={{ animationDelay: '0.32s' }}
              >
                {c.intro}
              </p>
            </div>
            <div className="md:col-span-4">
              <figure
                className="atelier-rise relative ml-auto max-w-sm"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-[hsl(var(--paper))]/20 bg-[hsl(var(--graphite-border))]">
                  <Image
                    alt="Gordon Mickel"
                    className="h-full w-full object-cover object-top"
                    fill
                    priority
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 35vw, 100vw"
                    src="/portraits/gordon-mickel.jpg"
                  />
                </div>
                <figcaption className="atelier-eyebrow mt-3 text-[hsl(var(--paper))]/55">
                  Gordon Mickel · Binningen, CH
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Career arc */}
      <section
        aria-labelledby="about-arc-heading"
        className="atelier-paper atelier-paper-grain relative"
        id="arc"
      >
        <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
          <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                {c.arcLabel}
              </span>
            </div>
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))] md:col-span-9"
              id="about-arc-heading"
            >
              {locale === 'de'
                ? 'Sechs Kapitel, ein Muster.'
                : 'Six chapters, one pattern.'}
            </h2>
          </header>

          <ol className="border-[hsl(var(--ink))]/15 border-t">
            {c.arc.map((item) => (
              <li
                className="grid grid-cols-1 gap-6 border-[hsl(var(--ink))]/15 border-b py-8 md:grid-cols-12 md:gap-10 md:py-10"
                key={item.title}
              >
                <div className="md:col-span-3">
                  <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                    {item.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="atelier-display font-medium text-[1.45rem] text-[hsl(var(--ink))] md:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="atelier-body mt-3 text-[hsl(var(--paper-muted))]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Recognitions */}
      <section
        aria-labelledby="about-recog-heading"
        className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
        id="recognitions"
      >
        <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
          <header className="mb-12 grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                {c.recogLabel}
              </span>
            </div>
            <div className="md:col-span-9">
              <h2
                className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
                id="about-recog-heading"
              >
                {locale === 'de'
                  ? 'Externe Bestätigung.'
                  : 'External confirmation.'}
              </h2>
              <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/65">
                {c.recogIntro}
              </p>
            </div>
          </header>
          <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--paper))]/15 md:grid-cols-2">
            {c.recog.map((r, i) => (
              <li
                className="flex gap-5 bg-[hsl(var(--graphite))] p-7 md:p-8"
                key={r}
              >
                <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="atelier-body text-[hsl(var(--paper))]/85">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section
        aria-labelledby="about-principles-heading"
        className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
        id="principles"
      >
        <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
          <header className="mb-12 grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                {c.principlesLabel}
              </span>
            </div>
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))] md:col-span-9"
              id="about-principles-heading"
            >
              {locale === 'de' ? 'Vier Prinzipien.' : 'Four principles.'}
            </h2>
          </header>
          <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
            {c.principles.map((p, i) => (
              <li className="bg-[hsl(var(--paper))] p-7 md:p-9" key={p.tag}>
                <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="atelier-display mt-3 font-medium text-[1.3rem] text-[hsl(var(--ink))]">
                  {p.tag}
                </h3>
                <p className="atelier-body mt-3 text-[hsl(var(--paper-muted))]">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
        id="cta"
      >
        <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-4">
              <span className="atelier-eyebrow text-[hsl(var(--rust))]">
                {c.ctaLabel}
              </span>
            </div>
            <div className="md:col-span-8">
              <h2
                className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
                id="about-cta-heading"
              >
                {c.ctaHeading}
              </h2>
              <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/75">
                {c.ctaBody}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  className="atelier-cta-primary"
                  href={c.ctaPrimaryHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {c.ctaPrimary}
                  <span aria-hidden="true">→</span>
                </a>
                <a className="atelier-cta-secondary" href={c.ctaSecondaryHref}>
                  {c.ctaSecondary}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
