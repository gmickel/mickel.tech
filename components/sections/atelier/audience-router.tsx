interface AudienceRouterProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '02 / Practice areas',
  heading: 'Three areas of work, three registers.',
  intro:
    'Each engagement has a different shape, a different audience, and a different deliverable. Pick the one closest to your problem.',
  cards: {
    pdlc: {
      number: '01',
      tag: 'For CTOs, VP Engineering, PE operating partners',
      title: 'Agentic PDLC',
      lede: 'From requirements engineering to autonomous delivery.',
      body: 'A two-stage methodology shift, not a tooling rollout. Start at product and requirements engineering. Move to spec-driven, agent-assisted delivery with eval-gated reviews. Reach L4: agents ship features, humans set priorities.',
      bullets: [
        'L0 → L4 maturity model',
        'Two-stage rollout: foundation, then methodology shift',
        'Everything-as-code: prompts, evals, guardrails, agent skills',
      ],
      metric: 'Target 3–5× cycle time, dev-org-wide',
      anchorPrice: 'Diagnostic from CHF 15–25k',
      cta: 'See agentic PDLC',
      href: '/sdlc',
    },
    expert: {
      number: '02',
      tag: 'For counsel, courts, arbitrators, boards',
      title: 'Independent expert work',
      lede: 'Parteigutachten, acceptance expert, AI/tech due diligence.',
      body: 'Twenty years of hands-on engineering means I can trace claims through code, infrastructure and contracts — not just read the summary deck. Independent, careful, written to withstand cross-examination.',
      roles: [
        {
          label: 'Parteigutachten',
          meta: 'Party expert, instructed by counsel',
        },
        {
          label: 'Werkvertrags-Gutachten',
          meta: 'Contractually named acceptance expert',
        },
        {
          label: 'AI / tech due diligence',
          meta: 'For investors, boards, M&A',
        },
      ],
      anchorPrice: 'Confidential intake',
      cta: 'Open intake',
      href: '/expert',
    },
    transform: {
      number: '03',
      tag: 'For CEOs, COOs, GMs, deal teams',
      title: 'AI systems & transformation',
      lede: 'Production AI systems that run your business, not just demo well.',
      body: 'Every engagement starts with a process map, not a tool. Where the data lives. Where the bottlenecks are. What breaks at scale. Then we build the context layer and ship production systems on top.',
      bullets: [
        'Put agents into operations that hold up',
        'Make internal knowledge actually findable',
        'Run frontier models inside your perimeter',
      ],
      anchorPrice: 'Process audit from CHF 15–25k',
      cta: 'AI transformation',
      href: '/ai-transformation',
    },
  },
};

const copyDE = {
  eyebrow: '02 / Praxisfelder',
  heading: 'Drei Arbeitsbereiche, drei Register.',
  intro:
    'Jedes Mandat hat eine andere Form, ein anderes Publikum, ein anderes Ergebnis. Wählen Sie den Bereich, der Ihrem Problem am nächsten kommt.',
  cards: {
    pdlc: {
      number: '01',
      tag: 'Für CTOs, VP Engineering, PE-Operating-Partner',
      title: 'Agentische PDLC',
      lede: 'Von Anforderungsengineering bis zur autonomen Auslieferung.',
      body: 'Ein zweistufiger Methodenwechsel, kein Tool-Rollout. Start beim Produkt- und Anforderungsengineering. Danach spec-getriebene, agentengestützte Auslieferung mit eval-basierten Reviews. Ziel L4: Agenten liefern Features, Menschen setzen Prioritäten.',
      bullets: [
        'L0 → L4 Reifegradmodell',
        'Zweistufiges Vorgehen: Fundament, dann Methodenwechsel',
        'Everything-as-code: Prompts, Evals, Guardrails, Agent-Skills',
      ],
      metric: 'Ziel 3–5× Cycle Time, gesamte Dev-Org',
      anchorPrice: 'Diagnose ab CHF 15–25k',
      cta: 'Agentische PDLC',
      href: '/de/sdlc',
    },
    expert: {
      number: '02',
      tag: 'Für Anwaltskanzleien, Gerichte, Schiedsrichter, Verwaltungsräte',
      title: 'Unabhängige Begutachtung',
      lede: 'Parteigutachten, Werkvertrags-Gutachten, KI- und Tech-Due-Diligence.',
      body: 'Zwanzig Jahre praktische Engineering-Erfahrung. Ich verfolge Behauptungen durch Code, Infrastruktur und Verträge, nicht nur durch das Management-Summary. Unabhängig, sorgfältig, geschrieben, um in der mündlichen Verhandlung zu bestehen.',
      roles: [
        {
          label: 'Parteigutachten',
          meta: 'Parteigutachter, im Auftrag der Anwaltschaft',
        },
        {
          label: 'Werkvertrags-Gutachten',
          meta: 'Vertraglich benannter Abnahmegutachter',
        },
        {
          label: 'KI- / Tech-Due-Diligence',
          meta: 'Für Investoren, Verwaltungsräte, M&A',
        },
      ],
      anchorPrice: 'Vertrauliche Anfrage',
      cta: 'Zur Anfrage',
      href: '/de/expert',
    },
    transform: {
      number: '03',
      tag: 'Für CEOs, COOs, GMs, Deal-Teams',
      title: 'KI-Systeme & Transformation',
      lede: 'Produktionsreife KI-Systeme, die Ihr Geschäft tragen, nicht nur in der Demo.',
      body: 'Jedes Mandat beginnt mit einer Prozesslandkarte, nicht mit einem Tool. Wo liegen die Daten. Wo sind die Engpässe. Was bricht unter Last. Danach bauen wir die Kontextschicht und liefern produktive Systeme darauf.',
      bullets: [
        'Agenten, die im operativen Alltag bestehen',
        'Internes Wissen, das wirklich auffindbar ist',
        'Frontier-Modelle innerhalb Ihres Perimeters',
      ],
      anchorPrice: 'Prozess-Audit ab CHF 15–25k',
      cta: 'KI-Transformation',
      href: '/de/ai-transformation',
    },
  },
};

export default function AtelierAudienceRouter({
  locale = 'en',
}: AudienceRouterProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="audience-router-heading"
      className="atelier-paper atelier-paper-grain relative"
      id="practice"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-32">
        {/* Section header */}
        <header className="mb-16 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {c.eyebrow}
            </span>
          </div>
          <div className="md:col-span-7 md:col-start-4">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="audience-router-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {c.intro}
            </p>
          </div>
        </header>

        {/* Three register cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <PdlcCard card={c.cards.pdlc} />
          <ExpertCard card={c.cards.expert} />
          <TransformCard card={c.cards.transform} />
        </div>
      </div>
    </section>
  );
}

/* ---- Card variants — three distinct registers ---- */

type PdlcCardData = (typeof copyEN)['cards']['pdlc'];
type ExpertCardData = (typeof copyEN)['cards']['expert'];
type TransformCardData = (typeof copyEN)['cards']['transform'];

/** Technical-editorial register — for CTOs, eng leaders. */
function PdlcCard({ card }: { card: PdlcCardData }) {
  return (
    <article className="atelier-card-hover group relative flex h-full flex-col border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))]/60 p-7 hover:border-[hsl(var(--ink))]/40 md:p-8">
      {/* Top register strip */}
      <div className="mb-6 flex items-baseline justify-between">
        <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
          {card.number}
        </span>
        <span className="font-mono text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.18em]">
          PDLC / agentic
        </span>
      </div>

      <p className="atelier-eyebrow mb-3 text-[hsl(var(--paper-muted))]">
        {card.tag}
      </p>
      <h3 className="atelier-display font-medium text-[1.85rem] text-[hsl(var(--ink))] leading-tight">
        {card.title}
      </h3>
      <p className="mt-3 text-[1.02rem] text-[hsl(var(--ink))]/80 leading-snug">
        {card.lede}
      </p>

      <p className="atelier-body mt-5 text-[hsl(var(--paper-muted))]">
        {card.body}
      </p>

      <ul className="mt-6 space-y-2 text-[hsl(var(--ink))]/85 text-sm">
        {card.bullets.map((b, i) => (
          <li className="flex gap-3" key={b}>
            <span
              aria-hidden="true"
              className="font-mono text-[10px] text-[hsl(var(--rust))] tabular-nums tracking-wide"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <div className="atelier-paper-rule mb-4" />
        <p className="atelier-numerals mb-3 text-[0.92rem] text-[hsl(var(--rust))] leading-tight">
          {card.metric}
        </p>
        <div className="flex items-baseline justify-between gap-4">
          <span className="atelier-numerals text-[0.86rem] text-[hsl(var(--ink))]">
            {card.anchorPrice}
          </span>
          <a
            className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
            href={card.href}
          >
            {card.cta}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

/** Editorial restrained register — for lawyers, courts, boards. */
function ExpertCard({ card }: { card: ExpertCardData }) {
  return (
    <article className="atelier-card-hover group relative flex h-full flex-col border border-[hsl(var(--ink))]/20 bg-[hsl(var(--paper))]/95 p-7 hover:border-[hsl(var(--navy))]/60 md:p-8">
      {/* Restrained top — just numerals, no mono labels */}
      <div className="mb-6 flex items-baseline justify-between">
        <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
          {card.number}
        </span>
        <span className="atelier-eyebrow text-[hsl(var(--navy))]/75">
          ITDR · CH / DE
        </span>
      </div>

      <p className="atelier-eyebrow mb-3 text-[hsl(var(--paper-muted))]">
        {card.tag}
      </p>
      <h3 className="atelier-display font-medium text-[1.85rem] text-[hsl(var(--ink))] leading-tight">
        {card.title}
      </h3>
      <p className="mt-3 text-[1.02rem] text-[hsl(var(--ink))]/85 italic leading-snug">
        {card.lede}
      </p>

      <p className="atelier-body mt-5 text-[hsl(var(--paper-muted))]">
        {card.body}
      </p>

      {/* Roles list — editorial, not bulleted */}
      <ul className="mt-6 divide-y divide-[hsl(var(--ink))]/12 border-[hsl(var(--ink))]/12 border-y">
        {card.roles.map((role) => (
          <li className="py-3" key={role.label}>
            <div className="atelier-display text-[1.05rem] text-[hsl(var(--ink))]">
              {role.label}
            </div>
            <div className="mt-0.5 text-[hsl(var(--paper-muted))] text-xs">
              {role.meta}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <div className="flex items-baseline justify-between gap-4">
          <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
            {card.anchorPrice}
          </span>
          <a
            className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--navy))]"
            href={card.href}
          >
            {card.cta}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

/** Business-editorial register — for CEOs, COOs, GMs, deal teams. */
function TransformCard({ card }: { card: TransformCardData }) {
  return (
    <article className="atelier-card-hover group relative flex h-full flex-col border border-[hsl(var(--ink))]/15 bg-[hsl(var(--paper))]/60 p-7 hover:border-[hsl(var(--ink))]/40 md:p-8">
      <div className="mb-6 flex items-baseline justify-between">
        <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
          {card.number}
        </span>
        <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
          Outcomes-led
        </span>
      </div>

      <p className="atelier-eyebrow mb-3 text-[hsl(var(--paper-muted))]">
        {card.tag}
      </p>
      <h3 className="atelier-display font-medium text-[1.85rem] text-[hsl(var(--ink))] leading-tight">
        {card.title}
      </h3>
      <p className="mt-3 text-[1.02rem] text-[hsl(var(--ink))]/80 leading-snug">
        {card.lede}
      </p>

      <p className="atelier-body mt-5 text-[hsl(var(--paper-muted))]">
        {card.body}
      </p>

      <ul className="mt-6 space-y-3 text-[hsl(var(--ink))]/85 text-sm">
        {card.bullets.map((b) => (
          <li className="flex gap-3" key={b}>
            <span
              aria-hidden="true"
              className="mt-1 h-px w-3 flex-shrink-0 bg-[hsl(var(--rust))]"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <div className="atelier-paper-rule mb-4" />
        <div className="flex items-baseline justify-between gap-4">
          <span className="atelier-numerals text-[0.86rem] text-[hsl(var(--ink))]">
            {card.anchorPrice}
          </span>
          <a
            className="inline-flex items-center gap-2 font-medium text-[hsl(var(--ink))] text-sm transition-colors hover:text-[hsl(var(--rust))]"
            href={card.href}
          >
            {card.cta}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
