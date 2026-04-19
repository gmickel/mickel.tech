interface SdlcToolsProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: '05 / Tools',
  heading: 'Fluent in the standard stack. I also build my own.',
  body: 'Most engagements run on whatever your team already uses — IDEs, model providers, CI, observability — and I am fluent across the standard PDLC tooling. Where I have hit a real ceiling in that stack, I have built two products of my own to push past it. They inform the methodology I bring; they are not a precondition for working together.',
  tools: [
    {
      name: 'FlowNext',
      tagline: 'Open-source agentic SDLC orchestrator.',
      body: 'Spec-driven workflow, multi-agent execution, eval-gated reviews, integrated with the IDEs and CI systems engineering teams already use. Thousands of users worldwide.',
      tags: ['Open source', 'TypeScript / Bun', 'IDE + CI integrations'],
      cta: 'View FlowNext on GitHub',
      href: 'https://github.com/gmickel/flow-next',
    },
    {
      name: 'MergeFoundry',
      tagline:
        'Next-generation orchestration platform for agentic PDLC. In private beta.',
      body: 'Built as a separate company (MergeFoundry, Inc). The product I would deploy if I were running PDLC for a software portfolio at scale. Standardises the L3/L4 patterns into a single platform.',
      tags: ['Private beta', 'Platform', 'Built for portfolios'],
      cta: 'mergefoundry.io',
      href: 'https://mergefoundry.io',
    },
  ],
};

const copyDE = {
  eyebrow: '05 / Tools',
  heading: 'Sattelfest im Standard-Stack. Und zwei eigene gebaut.',
  body: 'Die meisten Mandate laufen auf dem, was Ihr Team ohnehin nutzt -- IDEs, Modellanbieter, CI, Observability -- und in diesem Standard-PDLC-Stack bin ich sattelfest. Dort, wo ich an reale Grenzen gestossen bin, habe ich zwei eigene Produkte gebaut, um sie zu durchbrechen. Sie speisen die Methodik, die ich mitbringe; sie sind keine Voraussetzung für die Zusammenarbeit.',
  tools: [
    {
      name: 'FlowNext',
      tagline: 'Open-Source-Orchestrator für agentische SDLC.',
      body: 'Spec-getriebener Workflow, Multi-Agent-Execution, eval-gesicherte Reviews, integriert mit den IDEs und CI-Systemen, die Engineering-Teams ohnehin nutzen. Tausende Nutzer weltweit.',
      tags: ['Open Source', 'TypeScript / Bun', 'IDE- + CI-Integrationen'],
      cta: 'FlowNext auf GitHub',
      href: 'https://github.com/gmickel/flow-next',
    },
    {
      name: 'MergeFoundry',
      tagline:
        'Plattform der nächsten Generation für agentische PDLC. Private Beta.',
      body: 'Aufgebaut als eigenständige Firma (MergeFoundry, Inc.). Das Produkt, das ich einsetzen würde, wenn ich PDLC für ein Software-Portfolio im grossen Massstab führen würde. Standardisiert die L3/L4-Patterns in einer einzigen Plattform.',
      tags: ['Private Beta', 'Plattform', 'Für Portfolios gebaut'],
      cta: 'mergefoundry.io',
      href: 'https://mergefoundry.io',
    },
  ],
};

export default function AtelierSdlcTools({ locale = 'en' }: SdlcToolsProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="sdlc-tools-heading"
      className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t"
      id="tools"
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
              className="atelier-display font-medium text-[clamp(2rem,1.4rem+2.4vw,3.5rem)] text-[hsl(var(--paper))]"
              id="sdlc-tools-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper))]/65">
              {c.body}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {c.tools.map((t) => (
            <article
              className="atelier-card-hover atelier-wash-rust flex h-full flex-col border border-[hsl(var(--paper))]/15 bg-[hsl(var(--graphite))] p-7 md:p-10"
              key={t.name}
            >
              <h3 className="atelier-display font-medium text-[1.85rem] text-[hsl(var(--paper))]">
                {t.name}
              </h3>
              <p className="atelier-body mt-2 text-[hsl(var(--paper))]/85 italic">
                {t.tagline}
              </p>

              <p className="atelier-body mt-5 text-[hsl(var(--paper))]/70">
                {t.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {t.tags.map((tag) => (
                  <li
                    className="atelier-eyebrow text-[hsl(var(--paper))]/55"
                    key={tag}
                  >
                    / {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <a
                  className="atelier-link inline-flex items-center gap-2 text-sm"
                  href={t.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.cta}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
