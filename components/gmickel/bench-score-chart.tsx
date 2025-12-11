'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
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

type BenchScore = {
  name: string;
  shortName?: string;
} & Partial<Record<ModelId, number>>;

function buildConfig(models: ModelId[]): ChartConfig {
  const cfg: ChartConfig = {};
  for (const id of models) {
    cfg[id] = { label: getFullLabel(id), color: MODELS[id].color };
  }
  return cfg;
}

interface BenchScoreChartProps {
  data: BenchScore[];
  visibleModels: ModelId[];
  className?: string;
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    dataKey: string;
    color?: string;
    fill?: string;
    payload?: { name?: string };
  }>;
  label?: string;
}) {
  if (!(active && payload?.length)) {
    return null;
  }

  // Get full name from the data point
  const fullName = payload[0]?.payload?.name;

  return (
    <div className="rounded-lg border border-border/50 bg-background/95 px-3 py-2.5 shadow-xl backdrop-blur-sm">
      <p className="mb-2 font-medium text-sm text-white">{fullName}</p>
      <div className="space-y-1.5">
        {payload.map((entry) => (
          <div
            className="flex items-center justify-between gap-6"
            key={entry.dataKey}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: entry.fill || entry.color }}
              />
              <span className="text-muted-foreground text-xs">
                {entry.name}
              </span>
            </div>
            <span className="font-bold font-mono text-sm text-white tabular-nums">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BenchScoreChart({
  data,
  visibleModels,
  className,
}: BenchScoreChartProps) {
  const ordered = getOrderedModels(visibleModels);
  const config = buildConfig(ordered);

  return (
    <ChartContainer className={cn('w-full', className)} config={config}>
      <BarChart
        barCategoryGap={24}
        data={data}
        key={ordered.join('-')}
        margin={{ top: 36, right: 28, left: 16, bottom: 56 }}
      >
        <CartesianGrid
          stroke="hsl(var(--border))"
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="shortName"
          interval={0}
          tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', dy: 10 }}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          domain={[0, 90]}
          tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
          tickLine={false}
          tickMargin={8}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'rgba(255,255,255,0.04)', radius: 4 }}
          wrapperStyle={{ outline: 'none' }}
        />
        <Legend
          align="center"
          formatter={(value) => (
            <span className="mr-4 ml-1 text-muted-foreground text-xs">
              {value}
            </span>
          )}
          height={36}
          iconSize={10}
          verticalAlign="top"
          wrapperStyle={{ paddingBottom: 12 }}
        />
        {ordered.map((modelId) => (
          <Bar
            dataKey={modelId}
            fill={`var(--color-${modelId})`}
            key={modelId}
            name={getFullLabel(modelId)}
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry) => (
              <Cell
                className="cursor-pointer transition-opacity hover:opacity-80"
                key={`${modelId}-${entry.name}`}
              />
            ))}
          </Bar>
        ))}
      </BarChart>
    </ChartContainer>
  );
}

interface RuntimeBonusChartProps {
  data: { name: string; bonus: number }[];
  className?: string;
}

export function RuntimeBonusChart({ data, className }: RuntimeBonusChartProps) {
  const cfg: ChartConfig = {
    bonus: { label: 'Human runtime bonus', color: '#ffd166' },
  };

  return (
    <ChartContainer className={cn('w-full', className)} config={cfg}>
      <BarChart
        barCategoryGap={24}
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 24, left: 48, bottom: 16 }}
      >
        <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
        <XAxis domain={[0, 10]} tickLine={false} tickMargin={8} type="number" />
        <YAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          tickLine={false}
          type="category"
          width={100}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'rgba(255,255,255,0.04)' }}
        />
        <Legend />
        <Bar
          dataKey="bonus"
          fill="var(--color-bonus)"
          name="Human runtime bonus"
          radius={[6, 6, 6, 6]}
        />
      </BarChart>
    </ChartContainer>
  );
}
