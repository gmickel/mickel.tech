'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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
import { cn } from '@/lib/utils';

type TotalsDatum = {
  name: string;
  claude: number;
  gemini: number;
  codex: number;
};

const palette: ChartConfig = {
  claude: { label: 'Claude Opus 4.5', color: '#00e5ff' },
  gemini: { label: 'Gemini 3 Pro', color: '#ff6bd6' },
  codex: { label: 'GPT-5.1-codex-max', color: '#9ef36e' },
};

export function TotalsBar({
  data,
  className,
}: {
  data: TotalsDatum[];
  className?: string;
}) {
  return (
    <ChartContainer className={cn('w-full', className)} config={palette}>
      <BarChart
        data={data}
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
        <Legend
          align="center"
          height={32}
          verticalAlign="top"
          wrapperStyle={{ paddingBottom: 8 }}
        />
        <Bar
          dataKey="claude"
          fill="var(--color-claude)"
          name="Claude Opus 4.5"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="codex"
          fill="var(--color-codex)"
          name="GPT-5.1-codex-max"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="gemini"
          fill="var(--color-gemini)"
          name="Gemini 3 Pro"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}

export function RadarStrengths({
  data,
  className,
}: {
  data: TotalsDatum[];
  className?: string;
}) {
  return (
    <ChartContainer className={cn('w-full', className)} config={palette}>
      <RadarChart
        cx="50%"
        cy="50%"
        data={data}
        endAngle={-270}
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
        <Radar
          dataKey="claude"
          fill="var(--color-claude)"
          fillOpacity={0.2}
          name="Claude Opus 4.5"
          stroke="var(--color-claude)"
        />
        <Radar
          dataKey="codex"
          fill="var(--color-codex)"
          fillOpacity={0.2}
          name="GPT-5.1-codex-max"
          stroke="var(--color-codex)"
        />
        <Radar
          dataKey="gemini"
          fill="var(--color-gemini)"
          fillOpacity={0.2}
          name="Gemini 3 Pro"
          stroke="var(--color-gemini)"
        />
      </RadarChart>
    </ChartContainer>
  );
}

export function CategoryBars({
  data,
  className,
}: {
  data: TotalsDatum[];
  className?: string;
}) {
  return (
    <ChartContainer className={cn('w-full', className)} config={palette}>
      <BarChart
        data={data}
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
        <Legend
          align="center"
          height={32}
          verticalAlign="top"
          wrapperStyle={{ paddingBottom: 8 }}
        />
        <Bar
          dataKey="claude"
          fill="var(--color-claude)"
          name="Claude Opus 4.5"
          radius={[6, 6, 6, 6]}
        />
        <Bar
          dataKey="codex"
          fill="var(--color-codex)"
          name="GPT-5.1-codex-max"
          radius={[6, 6, 6, 6]}
        />
        <Bar
          dataKey="gemini"
          fill="var(--color-gemini)"
          name="Gemini 3 Pro"
          radius={[6, 6, 6, 6]}
        />
      </BarChart>
    </ChartContainer>
  );
}
