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
import type { EvalId } from '@/lib/bench-evals';
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
  evalId?: EvalId;
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

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
    index: number;
  };
  data: BenchScore[];
}

function CustomXAxisTick({ x, y, payload, data }: CustomTickProps) {
  if (!payload || x === undefined || y === undefined) {
    return null;
  }

  const item = data[payload.index];
  const evalId = item?.evalId;
  const label = payload.value;

  if (evalId) {
    return (
      <g className="eval-link-tick" transform={`translate(${x},${y})`}>
        <a href={`/gmickel-bench/${evalId}`}>
          <text
            dy={16}
            fill="hsl(var(--muted-foreground))"
            fontSize={11}
            textAnchor="middle"
          >
            {label}
          </text>
        </a>
        <style>
          {`
            .eval-link-tick a { cursor: pointer; }
            .eval-link-tick a text {
              transition: fill 0.2s ease, filter 0.2s ease;
            }
            .eval-link-tick a:hover text {
              fill: hsl(var(--primary));
              filter: drop-shadow(0 0 6px hsl(var(--primary) / 0.5));
            }
          `}
        </style>
      </g>
    );
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        dy={16}
        fill="hsl(var(--muted-foreground))"
        fontSize={11}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
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
          tick={<CustomXAxisTick data={data} />}
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
          content={() => (
            <div className="mb-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {ordered.map((id) => (
                <div className="flex items-center gap-2" key={id}>
                  <span
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: MODELS[id].color }}
                  />
                  <span className="text-muted-foreground text-xs">
                    {getFullLabel(id)}
                  </span>
                </div>
              ))}
            </div>
          )}
          verticalAlign="top"
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
