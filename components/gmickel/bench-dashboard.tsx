'use client';

import { useState } from 'react';

import { BenchScoreChart } from '@/components/gmickel/bench-score-chart';
import {
  CategoryBars,
  TotalsBar,
} from '@/components/gmickel/bench-total-chart';
import { ModelFilter } from '@/components/gmickel/model-filter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { llmScores, radarData, toChartData, totals } from '@/lib/bench-data';
import {
  getDefaultVisibleModels,
  getOrderedModels,
  getShortLabel,
  MODELS,
  type ModelId,
} from '@/lib/bench-models';

function ChartLegend({ visibleModels }: { visibleModels: ModelId[] }) {
  const ordered = getOrderedModels(visibleModels);
  return (
    <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      {ordered.map((id) => (
        <div className="flex items-center gap-2" key={id}>
          <span
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: MODELS[id].color }}
          />
          <span className="font-mono text-muted-foreground text-xs">
            {getShortLabel(id)}
          </span>
        </div>
      ))}
    </div>
  );
}

export function BenchDashboard() {
  const [visibleModels, setVisibleModels] = useState<ModelId[]>(
    getDefaultVisibleModels
  );

  const handleToggle = (modelId: ModelId) => {
    setVisibleModels((prev) => {
      let next: ModelId[];
      if (prev.includes(modelId)) {
        // Don't allow deselecting all models
        if (prev.length === 1) {
          return prev;
        }
        next = prev.filter((id) => id !== modelId);
      } else {
        next = [...prev, modelId];
      }
      // Always keep sorted by order so bars match legend
      return getOrderedModels(next);
    });
  };

  const scoreData = toChartData(llmScores, visibleModels);
  const totalData = toChartData(totals, visibleModels);
  const categoryData = toChartData(radarData, visibleModels);

  return (
    <>
      {/* Scoreboard Section */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <Card className="border-primary/20 bg-card/80">
          <CardHeader className="flex flex-col gap-2 pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                SCOREBOARD // LLM + HUMAN
              </p>
              <Separator className="h-4 bg-white/10" orientation="vertical" />
              <span className="text-muted-foreground text-xs">
                Mix of LLM judge plus human evaluation/acceptance, best-of-three
                per model
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <CardTitle className="text-2xl text-white">
                Where each model shines per surface
              </CardTitle>
              <ModelFilter
                onToggle={handleToggle}
                visibleModels={visibleModels}
              />
            </div>
          </CardHeader>
          <CardContent className="pb-8">
            <BenchScoreChart
              className="h-[420px]"
              data={scoreData}
              visibleModels={visibleModels}
            />
          </CardContent>
        </Card>
      </section>

      {/* Totals & Categories Section */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <ChartLegend visibleModels={visibleModels} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-card/80">
            <CardHeader className="flex flex-col gap-2 pb-4">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  TOTALS // LLM + HUMAN
                </p>
                <Separator className="h-4 bg-white/10" orientation="vertical" />
                <span className="text-muted-foreground text-xs">
                  Sum + average across all benches (best-of-3 per model)
                </span>
              </div>
              <CardTitle className="text-2xl text-white">
                Overall score totals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TotalsBar
                className="h-[320px]"
                data={totalData}
                visibleModels={visibleModels}
              />
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-card/80">
            <CardHeader className="flex flex-col gap-2 pb-4">
              <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                CATEGORIES // NORMALIZED
              </p>
              <CardTitle className="text-2xl text-white">
                Strengths across categories
              </CardTitle>
              <span className="text-muted-foreground text-xs">
                Normalized vs. max per dimension (0–100)
              </span>
            </CardHeader>
            <CardContent>
              <CategoryBars
                className="h-[340px]"
                data={categoryData}
                visibleModels={visibleModels}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
