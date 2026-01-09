import Link from 'next/link';

import { totals } from '@/lib/bench-data';
import { MODEL_IDS, MODELS } from '@/lib/bench-models';

// Get averages from totals (second entry is "Average per task")
const averages = totals[1].scores;
const totalScores = totals[0].scores;

// Build ranked list of models by average score
const topModels = MODEL_IDS.map((id) => ({
  modelId: id,
  average: averages[id],
  total: totalScores[id],
}))
  .sort((a, b) => b.average - a.average)
  .slice(0, 3);

export default function BenchPreview() {
  return (
    <section
      className="relative border-white/5 border-y bg-black/80 px-6 py-24 md:px-20"
      id="bench"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Glow effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,229,255,0.06),transparent_40%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-[11px] text-primary tracking-[0.25em]">
              EVAL_SUITE // LIVE BENCHMARK
            </p>
            <h2 className="font-bold text-3xl text-white md:text-4xl">
              gmickel bench
            </h2>
            <p className="max-w-xl text-muted-foreground text-sm">
              Real client-grade AI evals. Agentic coding tasks from production
              work, not synthetic puzzles.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-end font-mono text-primary text-xs hover:text-white"
            href="/gmickel-bench"
          >
            [ VIEW FULL BENCHMARK ]
          </Link>
        </header>

        {/* Leaderboard Preview */}
        <div className="grid gap-6 md:grid-cols-3">
          {topModels.map((model, idx) => {
            const modelMeta = MODELS[model.modelId];
            const rankColors = [
              'border-amber-500/60 bg-amber-500/10',
              'border-zinc-400/60 bg-zinc-400/10',
              'border-amber-700/60 bg-amber-700/10',
            ];

            return (
              <article
                className="group interactive fade-in slide-in-from-bottom-4 relative animate-in overflow-hidden border border-white/10 bg-background/50 fill-mode-both transition-all duration-300 hover:border-primary/50 hover:bg-background/80"
                key={model.modelId}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Rank indicator */}
                <div
                  className={`absolute top-0 left-0 border-r border-b px-3 py-1.5 font-mono text-[10px] uppercase ${rankColors[idx]}`}
                >
                  #{idx + 1}
                </div>

                <div className="p-6 pt-10">
                  {/* Model color bar */}
                  <div
                    aria-hidden="true"
                    className="mb-4 h-1 w-12"
                    style={{ backgroundColor: modelMeta.color }}
                  />

                  <h3 className="mb-1 font-bold text-lg text-white">
                    {modelMeta.model}
                  </h3>
                  <p className="mb-4 font-mono text-[10px] text-muted-foreground uppercase">
                    {modelMeta.harness}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="font-bold font-mono text-3xl text-primary">
                      {model.average.toFixed(1)}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      avg / 100
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>6 evals</span>
                    <span>Total: {model.total}</span>
                  </div>
                </div>

                {/* Hover effect line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-8 grid grid-cols-2 gap-4 border border-white/10 bg-white/[0.02] p-4 md:grid-cols-4">
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Evals
            </p>
            <p className="font-mono text-white text-xl">6</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Models
            </p>
            <p className="font-mono text-white text-xl">
              {Object.keys(MODELS).length}
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Stacks
            </p>
            <p className="font-mono text-white text-xl">
              Next.js, Convex, Zig, Swift
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Signal
            </p>
            <p className="font-mono text-white text-xl">LLM + Human</p>
          </div>
        </div>
      </div>
    </section>
  );
}
