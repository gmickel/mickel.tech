interface TransformProcessProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '02 / Process first',
  heading: 'AI is bespoke. Most "AI strategy" pretends it isn\'t.',
  body: 'Slide-deck AI starts with the technology and looks for a place to put it. Real AI starts with the workflow that hurts. Where the data already is. Who decides. What breaks under load. The technology answers come last and they answer different questions for different companies.',
  steps: [
    {
      tag: 'Process map',
      body: 'Map the workflow end-to-end with the people who actually do it. Not the org chart. Not the BPMN diagram. The real path. Where decisions happen, where data flows, where time is lost.',
    },
    {
      tag: 'Opportunity scoring',
      body: "Score automation candidates by impact and feasibility, not novelty. The first deployment should pay for the program — and it usually isn't the most exciting workflow.",
    },
    {
      tag: 'Context layer',
      body: 'Before any agent, build the context: knowledge graph, retrieval, tool access, identity, audit. AI inherits the quality of the context layer beneath it. Skip this and pilots fail predictably.',
    },
    {
      tag: 'Production system',
      body: 'Ship into the workflow that was mapped. Observability, evals, fallbacks, governance. No standalone copilot apps that no one opens twice.',
    },
  ],
};

const copyDE = {
  eyebrow: '02 / Prozess zuerst',
  heading:
    'KI ist massgeschneidert. Die meiste „KI-Strategie" tut, als wäre sie es nicht.',
  body: 'Slide-Deck-KI beginnt mit der Technologie und sucht einen Platz für sie. Echte KI beginnt mit dem Workflow, der wehtut. Wo die Daten bereits liegen. Wer entscheidet. Was unter Last bricht. Die Technologie-Antworten kommen zuletzt und sie beantworten unterschiedliche Fragen für unterschiedliche Unternehmen.',
  steps: [
    {
      tag: 'Prozesslandkarte',
      body: 'Den Workflow end-to-end mit den Menschen kartieren, die ihn tatsächlich machen. Nicht das Organigramm. Nicht das BPMN-Diagramm. Den echten Pfad. Wo Entscheidungen fallen, wo Daten fliessen, wo Zeit verloren geht.',
    },
    {
      tag: 'Opportunity-Scoring',
      body: 'Automatisierungskandidaten nach Impact und Machbarkeit scoren, nicht nach Neuartigkeit. Das erste Deployment sollte das Programm bezahlen — und es ist meist nicht der spannendste Workflow.',
    },
    {
      tag: 'Kontextschicht',
      body: 'Vor jedem Agenten den Kontext aufbauen: Wissensgraph, Retrieval, Tool-Zugriff, Identität, Audit. KI erbt die Qualität der Kontextschicht darunter. Wer das überspringt, liefert vorhersehbar gescheiterte Piloten.',
    },
    {
      tag: 'Produktivsystem',
      body: 'In den kartierten Workflow ausliefern. Observability, Evals, Fallbacks, Governance. Keine alleinstehenden Copilot-Apps, die niemand zweimal öffnet.',
    },
  ],
};

export default function AtelierTransformProcess({
  locale = 'en',
}: TransformProcessProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="transform-process-heading"
      className="atelier-paper atelier-paper-grain relative"
      id="process"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="atelier-eyebrow text-[hsl(var(--rust))]">
              {c.eyebrow}
            </span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--ink))]"
              id="transform-process-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {c.body}
            </p>
          </div>
        </header>

        <ol className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2 lg:grid-cols-4">
          {c.steps.map((s, i) => (
            <li
              className="flex flex-col gap-4 bg-[hsl(var(--paper))] p-7 md:p-8"
              key={s.tag}
            >
              <span className="atelier-numerals text-[hsl(var(--rust))] text-xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="atelier-display font-medium text-[1.35rem] text-[hsl(var(--ink))]">
                {s.tag}
              </h3>
              <p className="atelier-body text-[hsl(var(--paper-muted))]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
