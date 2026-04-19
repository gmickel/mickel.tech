interface TransformPainGainProps {
  locale?: 'en' | 'de';
}

const copyEN = {
  eyebrow: 'Reality check · Possibility',
  heading: 'Most AI programmes stall in the same five places.',
  intro:
    'A short mirror. Read the left column. If you nod twice, the right column is what the work changes.',
  painLabel: 'Where it usually breaks',
  gainLabel: 'What changes after this engagement',
  pain: [
    'Pilots that demoed brilliantly, then never crossed into production.',
    'A vendor stack that grew faster than the team could govern it.',
    'Data sitting in five systems no one has stitched together.',
    'Workflows nobody fully owns, full of human glue between tools.',
    'A board asking "what is our AI strategy" with no defensible answer.',
  ],
  gain: [
    'AI systems that quietly run real workflows every day.',
    'One context layer, one governance posture, no vendor sprawl.',
    'Knowledge your team can actually find without asking three people.',
    'Operations that scale without proportional headcount.',
    'A defensible answer to the board, with numbers, not adjectives.',
  ],
};

const copyDE = {
  eyebrow: 'Realitätscheck · Möglichkeit',
  heading:
    'Die meisten KI-Programme bleiben an den gleichen fünf Stellen stecken.',
  intro:
    'Ein kurzer Spiegel. Lesen Sie die linke Spalte. Wenn Sie zweimal nicken, ist die rechte Spalte das, was sich durch dieses Mandat verändert.',
  painLabel: 'Wo es üblicherweise bricht',
  gainLabel: 'Was sich nach dem Mandat verändert',
  pain: [
    'Pilotprojekte, die in der Demo brillierten und nie in den Produktivbetrieb kamen.',
    'Ein Vendor-Stack, der schneller gewachsen ist, als das Team ihn steuern kann.',
    'Daten in fünf Systemen, die niemand zusammengeführt hat.',
    'Workflows, für die niemand wirklich verantwortlich ist, voll mit menschlichem Klebstoff zwischen Tools.',
    'Ein Verwaltungsrat, der nach der „KI-Strategie" fragt, ohne dass jemand eine belastbare Antwort hat.',
  ],
  gain: [
    'KI-Systeme, die täglich leise echte Workflows ausführen.',
    'Eine Kontextschicht, eine Governance-Haltung, kein Vendor-Sprawl.',
    'Wissen, das Ihr Team tatsächlich findet, ohne drei Leute fragen zu müssen.',
    'Operations, die skalieren, ohne dass die Belegschaft proportional mitwächst.',
    'Eine belastbare Antwort an den Verwaltungsrat, mit Zahlen statt Adjektiven.',
  ],
};

export default function AtelierTransformPainGain({
  locale = 'en',
}: TransformPainGainProps) {
  const c = locale === 'de' ? copyDE : copyEN;

  return (
    <section
      aria-labelledby="transform-pain-gain-heading"
      className="atelier-paper relative border-[hsl(var(--ink))]/10 border-t"
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
              id="transform-pain-gain-heading"
            >
              {c.heading}
            </h2>
            <p className="atelier-body mt-6 max-w-[60ch] text-[hsl(var(--paper-muted))]">
              {c.intro}
            </p>
          </div>
        </header>

        <div className="grid gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-2">
          {/* Pain column */}
          <div className="bg-[hsl(var(--paper))] p-8 md:p-10">
            <span className="atelier-eyebrow mb-6 block text-[hsl(var(--paper-muted))]">
              {c.painLabel}
            </span>
            <ul className="space-y-5">
              {c.pain.map((line, i) => (
                <li className="flex gap-4" key={line}>
                  <span
                    aria-hidden="true"
                    className="atelier-numerals mt-1 w-6 flex-shrink-0 text-[hsl(var(--ink))]/30 text-sm tabular-nums"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="atelier-body text-[hsl(var(--ink))]/70 line-through decoration-1 decoration-[hsl(var(--rust))]/40">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gain column */}
          <div className="relative bg-[hsl(var(--paper))] p-8 md:p-10">
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-0 w-px bg-[hsl(var(--rust))]/40"
            />
            <span className="atelier-eyebrow mb-6 block text-[hsl(var(--rust))]">
              {c.gainLabel}
            </span>
            <ul className="space-y-5">
              {c.gain.map((line, i) => (
                <li className="flex gap-4" key={line}>
                  <span
                    aria-hidden="true"
                    className="atelier-numerals mt-1 w-6 flex-shrink-0 text-[hsl(var(--rust))] text-sm tabular-nums"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="atelier-body text-[hsl(var(--ink))]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
