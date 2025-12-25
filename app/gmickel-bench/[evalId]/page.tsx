import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getScoresForEval } from '@/lib/bench-data';
import { BENCH_EVALS, type EvalId, getEvalById } from '@/lib/bench-evals';
import {
  getOrderedModels,
  MODEL_IDS,
  MODELS,
  type ModelId,
} from '@/lib/bench-models';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';

type Props = { params: Promise<{ evalId: string }> };

export function generateStaticParams() {
  return BENCH_EVALS.map((e) => ({ evalId: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { evalId } = await params;
  const evalData = getEvalById(evalId);
  if (!evalData) {
    return {};
  }

  return {
    title: `${evalData.title} — gmickel bench`,
    description: evalData.hook,
    alternates: { canonical: `/gmickel-bench/${evalId}` },
    openGraph: {
      title: `${evalData.title} — gmickel bench`,
      description: evalData.hook,
      type: 'website',
    },
  };
}

export default async function EvalPage({ params }: Props) {
  const { evalId } = await params;
  const evalData = getEvalById(evalId);
  if (!evalData) {
    notFound();
  }

  const scoreData = getScoresForEval(evalId as EvalId);
  const orderedModels = getOrderedModels(MODEL_IDS);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'gmickel-bench', url: '/gmickel-bench' },
          { name: evalData.shortName, url: `/gmickel-bench/${evalId}` },
        ])}
      />
      <Shell>
        <div className="relative cursor-auto overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.08),transparent_25%),radial-gradient(circle_at_80%_0,rgba(255,107,214,0.08),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(158,243,110,0.08),transparent_30%)]"
          />

          <section className="relative mx-auto max-w-4xl px-6 pt-12 pb-12 md:px-10">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 font-mono text-[11px] text-muted-foreground"
            >
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link className="hover:text-primary" href="/gmickel-bench">
                gmickel-bench
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary">{evalData.shortName}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-4">
              <Badge
                className="border-primary/60 bg-primary/10 text-primary"
                variant="outline"
              >
                {evalData.shortName}
              </Badge>
              <Badge className="border-white/10 bg-white/5" variant="outline">
                Eval Details
              </Badge>
            </div>

            <h1 className="mt-6 font-bold text-3xl text-white leading-tight md:text-4xl">
              {evalData.title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {evalData.hook}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                className="glow-link font-mono text-[11px] uppercase"
                href="/gmickel-bench"
              >
                ← All Benchmarks
              </Link>
              <Separator className="h-4 bg-white/10" orientation="vertical" />
              <Link
                className="glow-link font-mono text-[11px] uppercase"
                href="/"
              >
                Main Site
              </Link>
            </div>
          </section>

          {/* Methodology */}
          <section className="relative mx-auto max-w-4xl px-6 pb-12 md:px-10">
            <Card className="border-white/10 bg-card/70">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white">
                  Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {evalData.methodology}
                </p>
                <p className="mt-4 font-mono text-muted-foreground text-sm">
                  Spec: {evalData.spec}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Scores by Model */}
          {scoreData ? (
            <section className="relative mx-auto max-w-4xl px-6 pb-12 md:px-10">
              <div className="mb-6 flex items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  RESULTS BY MODEL
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {orderedModels.map((modelId: ModelId) => {
                  const model = MODELS[modelId];
                  const score = scoreData.scores[modelId];
                  return (
                    <div
                      className="rounded-lg border border-white/10 bg-card/60 p-4"
                      key={modelId}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p
                            className="font-semibold text-sm"
                            style={{ color: model.color }}
                          >
                            {model.model}
                          </p>
                          <p className="font-mono text-muted-foreground text-xs">
                            {model.harness}
                          </p>
                        </div>
                        <span className="font-bold text-2xl text-white">
                          {score}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {/* Takeaways */}
          <section className="relative mx-auto max-w-4xl px-6 pb-12 md:px-10">
            <div className="mb-6 flex items-center gap-3">
              <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                KEY TAKEAWAYS
              </p>
            </div>
            <Card className="border-white/10 bg-card/70">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {evalData.takeaways.map((takeaway) => (
                    <li className="flex gap-3" key={takeaway}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Note if present */}
          {evalData.note ? (
            <section className="relative mx-auto max-w-4xl px-6 pb-24 md:px-10">
              <div className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-card/80 to-card/80 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="font-mono text-amber-400 text-xs uppercase tracking-wider">
                    {evalData.note.type === 'outlier' ? 'Outlier Note' : 'Note'}
                  </span>
                </div>
                <p className="font-semibold text-amber-200">
                  {evalData.note.title}
                </p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {evalData.note.content}
                </p>
              </div>
            </section>
          ) : (
            <div className="h-12" />
          )}
        </div>
      </Shell>
    </>
  );
}
