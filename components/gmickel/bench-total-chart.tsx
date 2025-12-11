'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { type ChartConfig, ChartContainer } from '@/components/ui/chart';
import {
  getFullLabel,
  getOrderedModels,
  MODELS,
  type ModelId,
} from '@/lib/bench-models';
import { cn } from '@/lib/utils';

type TotalsDatum = {
  name: string;
} & Partial<Record<ModelId, number>>;

function buildPalette(models: ModelId[]): ChartConfig {
  const cfg: ChartConfig = {};
  for (const id of models) {
    cfg[id] = { label: getFullLabel(id), color: MODELS[id].color };
  }
  return cfg;
}

export function TotalsBar({
  data,
  visibleModels,
  className,
}: {
  data: TotalsDatum[];
  visibleModels: ModelId[];
  className?: string;
}) {
  const ordered = getOrderedModels(visibleModels);
  const palette = buildPalette(ordered);

  return (
    <ChartContainer className={cn('w-full', className)} config={palette}>
      <BarChart
        data={data}
        key={ordered.join('-')}
        margin={{ top: 12, right: 16, left: 8, bottom: 28 }}
      >
        <CartesianGrid
          stroke="hsl(var(--border))"
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={false}
          tickMargin={6}
        />
        <Tooltip
          content={({ payload, label }) => (
            <div className="rounded-lg border border-border/50 bg-background/95 px-3 py-2 text-sm text-white shadow-xl backdrop-blur">
              <div className="mb-1 font-semibold">{label}</div>
              {payload?.map((item) => (
                <div
                  className="flex items-center justify-between gap-4"
                  key={item.dataKey as string}
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <span
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{ background: item.color }}
                    />
                    {item.name}
                  </div>
                  <span className="font-mono text-white">{item.value}</span>
                </div>
              ))}
            </div>
          )}
          cursor={{ fill: 'rgba(255,255,255,0.04)', radius: 4 }}
        />
        {ordered.map((modelId) => (
          <Bar
            dataKey={modelId}
            fill={`var(--color-${modelId})`}
            key={modelId}
            name={getFullLabel(modelId)}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}

export function RadarStrengths({
  data,
  visibleModels,
  className,
}: {
  data: TotalsDatum[];
  visibleModels: ModelId[];
  className?: string;
}) {
  const ordered = getOrderedModels(visibleModels);
  const palette = buildPalette(ordered);

  return (
    <ChartContainer className={cn('w-full', className)} config={palette}>
      <RadarChart
        cx="50%"
        cy="50%"
        data={data}
        endAngle={-270}
        key={ordered.join('-')}
        outerRadius="80%"
        startAngle={90}
      >
        <PolarGrid radialLines={false} stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey="name"
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <PolarRadiusAxis
          angle={90}
          axisLine={false}
          domain={[0, 100]}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
          tickCount={5}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip
          content={({ payload, label }) => (
            <div className="rounded-lg border border-border/50 bg-background/95 px-3 py-2 text-sm text-white shadow-xl backdrop-blur">
              <div className="mb-1 font-semibold">{label}</div>
              {payload?.map((item) => (
                <div
                  className="flex items-center justify-between gap-4"
                  key={item.dataKey as string}
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <span
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{ background: item.color }}
                    />
                    {item.name}
                  </div>
                  <span className="font-mono text-white">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        />
        {ordered.map((modelId) => (
          <Radar
            dataKey={modelId}
            fill={`var(--color-${modelId})`}
            fillOpacity={0.2}
            key={modelId}
            name={getFullLabel(modelId)}
            stroke={`var(--color-${modelId})`}
          />
        ))}
      </RadarChart>
    </ChartContainer>
  );
}

export function CategoryBars({
  data,
  visibleModels,
  className,
}: {
  data: TotalsDatum[];
  visibleModels: ModelId[];
  className?: string;
}) {
  const ordered = getOrderedModels(visibleModels);
  const palette = buildPalette(ordered);

  return (
    <ChartContainer className={cn('w-full', className)} config={palette}>
      <BarChart
        data={data}
        key={ordered.join('-')}
        layout="vertical"
        margin={{ top: 12, right: 16, left: 80, bottom: 12 }}
        stackOffset="none"
      >
        <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
        <XAxis
          domain={[0, 100]}
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={false}
          type="number"
        />
        <YAxis
          dataKey="name"
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          tickLine={false}
          type="category"
        />
        <Tooltip
          content={({ payload, label }) => (
            <div className="rounded-lg border border-border/50 bg-background/95 px-3 py-2 text-sm text-white shadow-xl backdrop-blur">
              <div className="mb-1 font-semibold">{label}</div>
              {payload?.map((item) => (
                <div
                  className="flex items-center justify-between gap-4"
                  key={item.dataKey as string}
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <span
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{ background: item.color }}
                    />
                    {item.name}
                  </div>
                  <span className="font-mono text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          )}
          cursor={{ fill: 'rgba(255,255,255,0.04)' }}
        />
        {ordered.map((modelId) => (
          <Bar
            dataKey={modelId}
            fill={`var(--color-${modelId})`}
            key={modelId}
            name={getFullLabel(modelId)}
            radius={[6, 6, 6, 6]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}
