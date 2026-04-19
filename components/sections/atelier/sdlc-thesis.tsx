interface SdlcThesisProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '02 / Why PDLC, not SDLC',
  heading: "The bottleneck moved. Most AI tooling rollouts pretend it didn't.",
  body: "When agents can write production code in minutes, the constraint is no longer typing speed. It moves up the value chain — to product framing, requirements engineering, specification quality, and review capacity. SDLC tools targeting just the coding layer optimise the part of the pipeline that's no longer the bottleneck.",
  pillarsLabel: 'What changes when you treat the whole product cycle',
  pillars: [
    {
      tag: 'Product → spec',
      body: 'Requirements engineering becomes the highest-leverage activity. Specs are the prompts. Bad specs produce bad agents. Good specs compound across every downstream loop.',
    },
    {
      tag: 'Coding → review',
      body: 'Agents write the first draft. Humans and other agents review. Eval gates and cross-model review enforce correctness, safety and style before anything ships.',
    },
    {
      tag: 'Tickets → context',
      body: 'The unit of work is a connected context — product docs, repo, design system, observability — not a Jira card. Everything-as-code: prompts, evals, guardrails, agent skills, all versioned and traced.',
    },
    {
      tag: 'Pilots → flywheels',
      body: "No more isolated demos that don't leave the slide deck. Production observability feeds product feedback loops which feed spec refinement. The system gets better while it runs.",
    },
  ],
};

const copyDE = {
  eyebrow: '02 / Warum PDLC, nicht SDLC',
  heading:
    'Der Engpass hat sich verschoben. Die meisten KI-Tool-Rollouts tun, als wäre nichts geschehen.',
  body: 'Wenn Agenten produktiven Code in Minuten schreiben, ist die Beschränkung nicht mehr die Tippgeschwindigkeit. Sie wandert die Wertkette hoch -- zu Produkt-Framing, Anforderungsengineering, Spezifikationsqualität und Review-Kapazität. SDLC-Tools, die nur die Coding-Schicht adressieren, optimieren den Teil der Pipeline, der nicht mehr der Engpass ist.',
  pillarsLabel: 'Was sich ändert, wenn man den ganzen Produktzyklus angeht',
  pillars: [
    {
      tag: 'Produkt → Spec',
      body: 'Anforderungsengineering wird zur Aktivität mit der grössten Hebelwirkung. Specs sind die Prompts. Schlechte Specs erzeugen schlechte Agenten. Gute Specs verstärken jede nachgelagerte Schleife.',
    },
    {
      tag: 'Coding → Review',
      body: 'Agenten schreiben den Erstentwurf. Menschen und andere Agenten reviewen. Eval-Gates und Cross-Model-Review erzwingen Korrektheit, Sicherheit und Stil, bevor etwas ausgeliefert wird.',
    },
    {
      tag: 'Tickets → Kontext',
      body: 'Die Arbeitseinheit ist ein verbundener Kontext -- Produktdokumentation, Repo, Designsystem, Observability -- kein Jira-Ticket. Everything-as-code: Prompts, Evals, Guardrails, Agent-Skills, versioniert und nachvollziehbar.',
    },
    {
      tag: 'Pilot → Schwungrad',
      body: 'Keine isolierten Demos mehr, die das Slide-Deck nicht verlassen. Observability aus dem Produktivbetrieb speist Produkt-Feedback-Schleifen, die wiederum die Spec verfeinern. Das System wird besser, während es läuft.',
    },
  ],
};

export default function AtelierSdlcThesis({ locale = 'en' }: SdlcThesisProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="sdlc-thesis-heading"
      className="atelier-paper atelier-paper-grain relative"
      id="thesis"
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
              id="sdlc-thesis-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {c.body}
            </p>
          </div>
        </header>

        <div className="border-[hsl(var(--ink))]/15 border-t pt-10">
          <span className="atelier-eyebrow mb-6 block text-[hsl(var(--paper-muted))]">
            {c.pillarsLabel}
          </span>
          <ul className="grid grid-cols-1 gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
            {c.pillars.map((p, i) => (
              <li className="bg-[hsl(var(--paper))] p-7 md:p-9" key={p.tag}>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="atelier-numerals text-[hsl(var(--rust))] text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="atelier-display font-medium text-[1.25rem] text-[hsl(var(--ink))]">
                    {p.tag}
                  </span>
                </div>
                <p className="atelier-body text-[hsl(var(--paper-muted))]">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
