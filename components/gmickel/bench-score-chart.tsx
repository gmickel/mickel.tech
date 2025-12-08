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
import { cn } from '@/lib/utils';

type BenchScore = {
  name: string;
  claude: number;
  gemini: number;
  codex: number;
};

const config: ChartConfig = {
  claude: { label: 'Claude Opus 4.5', color: '#00e5ff' },
  gemini: { label: 'Gemini 3 Pro', color: '#ff6bd6' },
  codex: { label: 'OpenAI Codex', color: '#9ef36e' },
};

interface BenchScoreChartProps {
  data: BenchScore[];
  className?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    dataKey: string;
    color?: string;
    fill?: string;
  }>;
  label?: string;
}) {
  if (!(active && payload?.length)) {
    return null;
  }

  return (
    <div className="rounded-lg border border-border/50 bg-background/95 px-3 py-2.5 shadow-xl backdrop-blur-sm">
      <p className="mb-2 font-medium text-sm text-white">{label}</p>
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

export function BenchScoreChart({ data, className }: BenchScoreChartProps) {
  return (
    <ChartContainer className={cn('w-full', className)} config={config}>
      <BarChart
        barCategoryGap={24}
        data={data}
        margin={{ top: 8, right: 28, left: 8, bottom: 48 }}
      >
        <CartesianGrid
          stroke="hsl(var(--border))"
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="name"
          interval={0}
          tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', dy: 10 }}
          tickLine={false}
          tickMargin={12}
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
          formatter={(value) => (
            <span className="text-muted-foreground text-xs">{value}</span>
          )}
          iconSize={10}
          wrapperStyle={{ paddingTop: 16 }}
        />
        <Bar
          dataKey="claude"
          fill="var(--color-claude)"
          name="Claude Opus 4.5"
          radius={[4, 4, 0, 0]}
        >
          {data.map((entry) => (
            <Cell
              className="cursor-pointer transition-opacity hover:opacity-80"
              key={`claude-${entry.name}`}
            />
          ))}
        </Bar>
        <Bar
          dataKey="gemini"
          fill="var(--color-gemini)"
          name="Gemini 3 Pro"
          radius={[4, 4, 0, 0]}
        >
          {data.map((entry) => (
            <Cell
              className="cursor-pointer transition-opacity hover:opacity-80"
              key={`gemini-${entry.name}`}
            />
          ))}
        </Bar>
        <Bar
          dataKey="codex"
          fill="var(--color-codex)"
          name="OpenAI Codex"
          radius={[4, 4, 0, 0]}
        >
          {data.map((entry) => (
            <Cell
              className="cursor-pointer transition-opacity hover:opacity-80"
              key={`codex-${entry.name}`}
            />
          ))}
        </Bar>
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
