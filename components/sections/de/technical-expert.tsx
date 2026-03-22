import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  {
    value: 'ITDR',
    label: 'Gelisteter Experte',
    detail: 'Swiss IT Dispute Resolution',
  },
  {
    value: '20+',
    label: 'Jahre Engineering',
    detail: 'Hands-on, nicht nur beratend',
  },
  {
    value: '7+',
    label: 'Regulierte Branchen',
    detail: 'Healthcare, Legal, Finanz, Public Sector',
  },
] as const;

const services = [
  {
    tag: '01',
    name: 'Gutachten',
    desc: 'Unabhängige technische Expertenmeinungen für Gerichte, Schiedstribunale und Streitschlichtungsstellen. Strukturierte Analyse anhand definierter Fragen mit klaren, verteidigungsfähigen Schlussfolgerungen.',
    items: [
      'Forensische Code- und Systemanalyse: Ansprüche durch Quellcode, Infrastruktur, Logs und Deployment-Historie nachverfolgen',
      'Vertrag-vs-Implementierung-Vergleich: Erfüllt das gelieferte System die vertraglichen und technischen Spezifikationen?',
      'Schriftliche Stellungnahmen, die einer Kreuzbefragung standhalten: präzise Sprache, zeitliche Verankerung, evidenzbasierte Schlussfolgerungen',
      'Live-Präsentation für Anwälte, Tribunal oder Verwaltungsrat mit Q&A',
    ],
  },
  {
    tag: '02',
    name: 'AI- & Technologie-Due-Diligence',
    desc: 'Für Investoren, Verwaltungsräte und Acquirer, die eine nüchterne technische Bewertung brauchen, bevor sie Kapital einsetzen. Kein Checkbox-Audit. Ein Senior-Ingenieur, der den Code liest.',
    items: [
      'AI-Reife und Readiness: Modellqualität, Data Governance, Evaluations-Pipelines, Produktionshärtung',
      'Architektur-Review: Skalierbarkeit, Security, Tech Debt, Bus-Faktor-Risiken',
      'SDLC- und Team-Assessment: Delivery-Velocity, Quality Gates, Prozessreife (L0-L4)',
      'Vendor- und Stack-Risiko: Lock-in-Analyse, Lizenz-Exposure, Migrationskomplexität',
    ],
  },
  {
    tag: '03',
    name: 'Unabhängige Projektbewertung',
    desc: 'Wenn ein grosses IT-Projekt vom Kurs abgekommen ist, das Budget überschritten hat oder auf einen Streit zusteuert. Unabhängige Bewertung gegen vertragliche Pflichten, Abnahmekriterien und Industriestandards.',
    items: [
      'Quality-Gate-Review: Sind die definierten Meilensteine wirklich erreicht oder nur abgezeichnet?',
      'KPI- und SLA-Validierung: Entsprechen die gelieferten Metriken den vertraglichen Zusagen?',
      'Abnahmeprüfung: Unabhängige Verifikation, dass das System leistet, was versprochen wurde',
      'Klare Ja/Nein-Empfehlung mit Belegen und Risikobewertung',
    ],
  },
  {
    tag: '04',
    name: 'Streitunterstützung & Schiedsverfahren',
    desc: 'Technische Unterstützung über den gesamten Streit-Lebenszyklus. Von der initialen Fallbewertung bis zur abschliessenden Aussage. Komplexes technisches Material verständlich für Juristen und Richter aufbereitet.',
    items: [
      'Copyright- und Open-Source-Analyse: Lizenzcompliance, Code-Provenienz, Attribution',
      'Honorar- und Scope-Streitigkeiten: Wurde die Arbeit erbracht, entsprach sie der Spezifikation, war der Preis angemessen?',
      'Plattform- und SaaS-Streitigkeiten: Performance-Claims, Uptime-Verpflichtungen, Datenhandling',
      'Vor-Streit-Bewertung: Stärke der Ansprüche evaluieren, bevor man sich auf einen Prozess einlässt',
    ],
  },
] as const;

const credentials: Array<{
  label: string;
  detail: string;
  href?: string;
}> = [
  {
    label: 'ITDR-gelisteter technischer Experte',
    detail:
      'Swiss IT Dispute Resolution Center. Unabhängiger Experte für ICT- und AI-System-Streitigkeiten.',
    href: 'https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html',
  },
  {
    label: 'Produktive AI in regulierten Domänen',
    detail:
      'Klinische AI für Schweizer Spitäler (KISIM CIS), AI-natives Vertragsmanagement (DocIQ) für Unternehmen und Kanzleien.',
  },
  {
    label: 'OpenAI Red-Teaming Alumnus',
    detail:
      'Modellsicherheits- und Missbrauchsresilienz-Evaluation für Frontier-AI-Systeme.',
  },
  {
    label: 'Hands-on-Engineering-Hintergrund',
    detail:
      '20+ Jahre Systembau in Healthcare, Legal, Banking, Versicherung, IoT, Verteidigung und Public Sector. Ich lese den Code, nicht nur das Summary.',
  },
];

const approach = [
  {
    step: '01',
    name: 'Scope & Evidenz',
    desc: 'Fragen definieren. Verträge, Spezifikationen, Code, Infrastruktur, Logs, Korrespondenz sichten. Evidenzbasis schaffen.',
  },
  {
    step: '02',
    name: 'Technische Analyse',
    desc: 'Hands-on-Untersuchung. Code ausführen, Architektur inspizieren, Ansprüche durch das System nachverfolgen. Kein Verlassen auf Zusammenfassungen.',
  },
  {
    step: '03',
    name: 'Schriftliches Gutachten',
    desc: 'Strukturiertes Gutachten mit Beantwortung jeder definierten Frage, Evidenzreferenzen, zeitlicher Verankerung und verteidigungsfähigen Schlussfolgerungen.',
  },
  {
    step: '04',
    name: 'Präsentation & Aussage',
    desc: 'Live-Präsentation für Anwälte, Tribunal oder Verwaltungsrat. Vorbereitet auf Kreuzbefragung. Komplexes technisches Material verständlich aufbereitet.',
  },
] as const;

export default function TechnicalExpert() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 md:px-20"
      id="technical-expert"
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
            TECHNISCHER EXPERTE &amp; DUE DILIGENCE
          </p>
          <SectionTitle
            className="mb-6 font-bold text-4xl text-white md:text-5xl"
            text="WENN SOFTWARE ZUR RECHTSFRAGE WIRD"
          />
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            Unabhängige technische Analyse für Streitigkeiten, Schiedsverfahren,
            Due Diligence und geschäftskritische Projektentscheidungen. 20+
            Jahre Hands-on-Engineering bedeuten: Ich verfolge Ansprüche durch
            Code, Infrastruktur und Verträge, nicht nur durch ein Summary-Deck.
          </p>
        </div>

        {/* Proof + Credentials */}
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

          <div className="space-y-6 lg:col-span-8">
            <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Referenzen
            </p>
            {credentials.map((c) => (
              <div
                className="border-white/5 border-b pb-4 last:border-0"
                key={c.label}
              >
                <h4 className="font-bold text-sm text-white">
                  {c.href ? (
                    <a
                      className="glow-link"
                      href={c.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )}
                </h4>
                <p className="mt-1 text-muted-foreground text-sm">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            VORGEHEN
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Von der Evidenz zum Gutachten
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {approach.map((a, i) => (
              <div
                className="group relative bg-black p-6 transition-colors hover:bg-primary/[0.03]"
                key={a.step}
              >
                <div className="mb-4 font-bold font-mono text-4xl text-primary/20 transition-colors group-hover:text-primary/40">
                  {a.step}
                </div>
                <h4 className="mb-2 font-bold font-mono text-sm text-white">
                  {a.name}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {a.desc}
                </p>
                {i < approach.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="-right-2 -translate-y-1/2 absolute top-1/2 z-10 hidden font-mono text-lg text-primary/30 md:block"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            LEISTUNGEN
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Expertenleistungen
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((s) => (
              <div className="bg-black p-8" key={s.tag}>
                <span className="font-mono text-[10px] text-primary">
                  {s.tag}
                </span>
                <h4 className="mt-1 font-bold text-lg text-white">{s.name}</h4>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li
                      className="flex items-start gap-2 font-mono text-white/60 text-xs leading-relaxed"
                      key={item}
                    >
                      <span className="mt-0.5 text-primary/40">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 border-white/10 border-t pt-4 text-muted-foreground text-xs">
            // HINWEIS: EXPERTENARBEIT IST VERTRAULICH. SPEZIFISCHE FÄLLE UND
            MANDANTEN KÖNNEN NICHT OFFENGELEGT WERDEN. REFERENZEN AUF ANFRAGE AN
            DEN RECHTSBEISTAND.
          </p>
        </div>

        {/* ── Dispute Types ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            ABDECKUNG
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Streit- und Bewertungstypen
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Komplexes technisches Material verständlich aufbereitet für
            Juristen, Richter und Schiedsrichter. Das Gutachten übersetzt Code,
            Architektur und Systeme in klare, evidenzbasierte
            Schlussfolgerungen.
          </p>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Software-Lieferstreitigkeiten',
                desc: 'Wurde das System gemäss Spezifikation geliefert? Erfüllt es vertragliche Pflichten und Abnahmekriterien?',
              },
              {
                name: 'Honorar- und Scope-Streitigkeiten',
                desc: 'Wurde die Arbeit erbracht? Entsprach sie der Spezifikation? War der Preis angemessen für das Gelieferte?',
              },
              {
                name: 'Copyright und Open Source',
                desc: 'Lizenzcompliance, Code-Provenienz, Attribution. Ist die Codebasis sauber oder birgt sie Lizenzrisiken?',
              },
              {
                name: 'AI-System-Streitigkeiten',
                desc: 'Modell-Performance-Claims, Datenhandling-Pflichten, Bias und Fairness, EU AI Act Compliance.',
              },
              {
                name: 'Plattform- und SaaS-Streitigkeiten',
                desc: 'Performance-Claims, Uptime-SLAs, Datenhandling, Migrationspflichten, Vendor Lock-in.',
              },
              {
                name: 'M&A-Technologie-Diligence',
                desc: 'Technische Bewertung vor Akquisition: Architektur, Team, Tech Debt, AI-Reife, Vendor-Risiko, IP-Sauberkeit.',
              },
            ].map((dt) => (
              <div className="bg-black p-6" key={dt.name}>
                <h4 className="font-bold text-sm text-white">{dt.name}</h4>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                  {dt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Industry Experience ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            BRANCHENERFAHRUNG
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Regulierte Domänen, echte Systeme
          </h3>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Healthcare',
                detail:
                  'Klinische AI für Schweizer Spitäler, Patientendaten-Pipelines, PII-Masking, Medizinprodukte-Regulierung',
              },
              {
                name: 'Legal & Compliance',
                detail:
                  'AI-natives Vertragsmanagement, Klausel-Analyse, Dokumenten-Review, Legal Copilots',
              },
              {
                name: 'Finanzdienstleistungen',
                detail:
                  'Banking, Versicherung, DeFi. Transaktionssysteme, regulatorische Compliance, Audit Trails',
              },
              {
                name: 'Public Sector',
                detail:
                  'Verteidigung, Government IT, Beschaffungssysteme. Sicherheitsüberprüfung, Datensouveränität',
              },
            ].map((ind) => (
              <div className="bg-black p-6" key={ind.name}>
                <h4 className="font-bold text-sm text-white">{ind.name}</h4>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                  {ind.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Differentiator ── */}
        <div className="mt-24 border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            WARUM ICH
          </p>
          <h3 className="mb-4 font-bold text-2xl text-white md:text-3xl">
            Ich lese den Code, nicht nur das Summary
          </h3>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Die meisten technischen Experten prüfen Dokumentation und befragen
            Stakeholder. Ich gehe weiter: Ich klone das Repository, führe die
            Build-Pipeline aus, inspiziere die Infrastruktur, lese die
            Deployment-Logs und verfolge Ansprüche durch den tatsächlichen Code.
            20+ Jahre im Bau produktiver Systeme bedeuten: Ich kenne den
            Unterschied zwischen einem System, das funktioniert, und einem, das
            eine Demo besteht. Diese Unterscheidung zählt, wenn das Gutachten
            einer Kreuzbefragung standhalten muss.
          </p>
        </div>
      </div>
    </section>
  );
}
