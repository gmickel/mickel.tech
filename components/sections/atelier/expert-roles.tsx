interface ExpertRolesProps {
  locale?: 'en' | 'de';
}

interface RoleEntry {
  number: string;
  title: string;
  subtitle: string;
  whenUsed: string;
  whatYouGet: string;
  format: string;
  audience: string;
}

const rolesEN: readonly RoleEntry[] = [
  {
    number: '01',
    title: 'Parteigutachten',
    subtitle: 'Party expert, instructed by counsel.',
    whenUsed:
      'Civil litigation, commercial court matters, international arbitration. When you need a defensible technical opinion that supports a specific legal theory while remaining honest enough to survive cross-examination.',
    whatYouGet:
      'Written expert opinion (Gutachten), oral readiness for hearings, supporting analyses (forensic code review, infrastructure forensics, contract-vs-implementation comparison), iterative refinement of the question catalogue with you.',
    format:
      'Typically 30–80 pages, structured per Swiss / German Gutachten convention: Auftrag, Methodik, Sachverhalt, Befunde, Würdigung, Kernbefunde. Filed under your firm cover.',
    audience: 'Litigation counsel, in-house counsel, arbitration teams.',
  },
  {
    number: '02',
    title: 'Werkvertrags-Gutachten',
    subtitle: 'Independent acceptance expert, named by both parties.',
    whenUsed:
      'Software procurement and works contracts where parties contractually designate an independent expert to assess delivery against specification. Quasi-arbitral function — both sides rely on the opinion.',
    whatYouGet:
      'Pre-engagement Prüfschema (test schema) developed transparently from the contract annexes. Structured Abnahmeprüfung against the contractually defined criteria. Written Gutachten with Bewertungsmatrix. Optional Nachprüfung after Nachbesserungen.',
    format:
      'Pauschal fixed fee, split between parties. Methodology committed in writing before delivery. Hearings only if requested.',
    audience:
      'Contracting parties (procurer + supplier), public sector procurement.',
  },
  {
    number: '03',
    title: 'AI / technology due diligence',
    subtitle: 'Independent technical assessment for capital decisions.',
    whenUsed:
      'M&A buy-side or sell-side, primary investments, board-level risk reviews, post-acquisition value creation diagnosis. When the technical claim materially shifts valuation, integration cost or post-deal plan.',
    whatYouGet:
      'Maturity scoring across 5 pillars (architecture, team, ops, security, AI exposure). Verification matrix against vendor claims. IC-ready value creation thesis or risk register. Live walkthrough with deal team.',
    format:
      '3–10 working days depending on scope. Fixed-fee, often <1 week turnaround on follow-up DDs once a relationship is established.',
    audience: 'PE / VC investment teams, boards, family offices, M&A advisors.',
  },
];

const rolesDE: readonly RoleEntry[] = [
  {
    number: '01',
    title: 'Parteigutachten',
    subtitle: 'Parteigutachter, im Auftrag der Anwaltschaft.',
    whenUsed:
      'Zivilverfahren, handelsgerichtliche Verfahren, internationale Schiedsgerichtsbarkeit. Wenn Sie eine vertretbare technische Stellungnahme brauchen, die eine konkrete Rechtsposition stützt und gleichzeitig der mündlichen Verhandlung standhält.',
    whatYouGet:
      'Schriftliches Gutachten, mündliche Verhandlungsbereitschaft, unterstützende Analysen (forensische Code-Review, Infrastruktur-Forensik, Vertrag-vs-Implementierung-Vergleich), iterative Verfeinerung des Fragenkatalogs gemeinsam mit Ihnen.',
    format:
      'Typischerweise 30–80 Seiten, strukturiert nach CH/DE Gutachten-Konvention: Auftrag, Methodik, Sachverhalt, Befunde, Würdigung, Kernbefunde. Eingereicht unter Ihrem Kanzlei-Briefkopf.',
    audience: 'Prozessanwälte, Inhouse-Counsel, Schiedsteams.',
  },
  {
    number: '02',
    title: 'Werkvertrags-Gutachten',
    subtitle: 'Unabhängiger Abnahmegutachter, vertraglich benannt.',
    whenUsed:
      'Software-Werkverträge und Beschaffungsverträge, in denen die Parteien einen unabhängigen Gutachter zur Bewertung der Leistung gegenüber der Spezifikation benennen. Quasi-schiedsrichterliche Funktion — beide Seiten stützen sich auf die Stellungnahme.',
    whatYouGet:
      'Vorab-Prüfschema, transparent aus den Vertragsanhängen entwickelt. Strukturierte Abnahmeprüfung gegen die vertraglich definierten Kriterien. Schriftliches Gutachten mit Bewertungsmatrix. Optional: Nachprüfung nach Nachbesserungen.',
    format:
      'Pauschalhonorar, hälftig zwischen den Parteien. Methodik vor Lieferung schriftlich fixiert. Anhörungen nur auf Wunsch.',
    audience:
      'Vertragsparteien (Auftraggeber + Lieferant), öffentliche Beschaffung.',
  },
  {
    number: '03',
    title: 'KI- und Tech-Due-Diligence',
    subtitle: 'Unabhängige technische Beurteilung für Kapitalentscheidungen.',
    whenUsed:
      'M&A Buy-Side oder Sell-Side, Primärinvestitionen, Risikoprüfungen auf Verwaltungsratsebene, Post-Acquisition-Value-Creation-Diagnose. Wenn die technische Aussage Bewertung, Integrationskosten oder Post-Deal-Plan wesentlich verschiebt.',
    whatYouGet:
      'Reifegradbewertung über 5 Säulen (Architektur, Team, Betrieb, Security, KI-Exposition). Verifikationsmatrix gegen Anbieterangaben. IC-fähige Value-Creation-These oder Risikoregister. Live-Walkthrough mit dem Deal-Team.',
    format:
      '3–10 Arbeitstage je nach Scope. Festpreis, häufig <1 Woche Durchlaufzeit bei Folge-DDs sobald die Beziehung etabliert ist.',
    audience:
      'PE- / VC-Investmentteams, Verwaltungsräte, Family Offices, M&A-Berater.',
  },
];

export default function AtelierExpertRoles({
  locale = 'en',
}: ExpertRolesProps) {
  const roles = locale === 'de' ? rolesDE : rolesEN;
  const labels =
    locale === 'de'
      ? {
          eyebrow: '02 / Drei Rollen',
          heading: 'Drei klar abgegrenzte Rollen.',
          intro:
            'Im CH/DE-Rechtsmarkt unterscheiden sich diese Rollen formell in Mandat, Pflichten und Output. Wählen Sie diejenige, die zu Ihrem Anlass passt — oder fragen Sie nach, wenn der Anlass selbst noch unklar ist.',
          when: 'Wann gebraucht',
          what: 'Was Sie erhalten',
          how: 'Format',
          who: 'Auftraggeber',
        }
      : {
          eyebrow: '02 / Three roles',
          heading: 'Three clearly separated roles.',
          intro:
            'In the CH / DE legal market these roles differ formally in mandate, duties and output. Pick the one that matches your situation — or ask if the situation itself is still unclear.',
          when: 'When used',
          what: 'What you get',
          how: 'Format',
          who: 'Engaged by',
        };

  return (
    <section
      aria-labelledby="expert-roles-heading"
      className="atelier-paper atelier-paper-grain relative"
      id="roles"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-32">
        <header className="mb-16 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {labels.eyebrow}
            </span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="expert-roles-heading"
            >
              {labels.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {labels.intro}
            </p>
          </div>
        </header>

        <div className="space-y-px bg-[hsl(var(--ink))]/12">
          {roles.map((role) => (
            <article
              className="grid grid-cols-1 gap-8 bg-[hsl(var(--paper))] p-8 md:grid-cols-12 md:gap-10 md:p-12"
              key={role.number}
            >
              <header className="md:col-span-4">
                <span className="atelier-numerals text-3xl text-[hsl(var(--rust))]">
                  {role.number}
                </span>
                <h3 className="atelier-display mt-3 font-medium text-[1.85rem] text-[hsl(var(--ink))] leading-tight md:text-[2.25rem]">
                  {role.title}
                </h3>
                <p className="atelier-body mt-3 text-[hsl(var(--ink))]/85 italic">
                  {role.subtitle}
                </p>
              </header>

              <dl className="space-y-6 md:col-span-8">
                <Block body={role.whenUsed} label={labels.when} />
                <Block body={role.whatYouGet} label={labels.what} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Block body={role.format} label={labels.how} />
                  <Block body={role.audience} label={labels.who} />
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <dt className="atelier-eyebrow mb-1.5 text-[hsl(var(--paper-muted))]">
        {label}
      </dt>
      <dd className="atelier-body text-[hsl(var(--ink))]/85">{body}</dd>
    </div>
  );
}
