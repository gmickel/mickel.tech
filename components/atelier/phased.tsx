import type { ReactNode } from 'react';

interface Phase {
  name: string;
  command?: string;
  steps: string[];
}

interface AtelierPhasedProps {
  phases: Phase[];
  footer?: ReactNode;
}

export default function AtelierPhased({ phases, footer }: AtelierPhasedProps) {
  return (
    <>
      <ol className="grid gap-px bg-[hsl(var(--ink))]/12 md:grid-cols-3">
        {phases.map((phase, i) => (
          <li className="bg-[hsl(var(--paper))] p-6 md:p-7" key={phase.name}>
            <header className="flex items-baseline gap-3 border-[hsl(var(--ink))]/12 border-b pb-4">
              <span className="atelier-numerals text-[2.1rem] text-[hsl(var(--rust))] leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                {phase.command ? (
                  <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                    {phase.command}
                  </p>
                ) : null}
                <h3 className="atelier-display mt-0.5 font-medium text-[1.2rem] leading-[1.15]">
                  {phase.name}
                </h3>
              </div>
            </header>
            <ol className="mt-5 space-y-3.5">
              {phase.steps.map((step, j) => (
                <li
                  className="grid grid-cols-[auto_1fr] items-baseline gap-3"
                  key={step}
                >
                  <span className="atelier-mono text-[10.5px] text-[hsl(var(--rust))] tracking-[0.06em]">
                    {i + 1}.{j + 1}
                  </span>
                  <p className="atelier-body text-[0.9rem] text-[hsl(var(--ink))]/80 leading-[1.5]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      {footer ? (
        <p className="atelier-mono mt-6 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          {footer}
        </p>
      ) : null}
    </>
  );
}
