import type { ModelId } from './bench-models';

export type BenchScore = {
  name: string;
  shortName: string;
  scores: Record<ModelId, number>;
};

export type CategoryScore = {
  name: string;
  scores: Record<ModelId, number>;
};

export type TotalScore = {
  name: string;
  scores: Record<ModelId, number>;
};

export const llmScores: BenchScore[] = [
  {
    name: 'Convex OAuth MCP slice',
    shortName: 'MCP',
    scores: { claude: 65, codex: 60, codex52: 0, gemini: 63 },
  },
  {
    name: 'Convex permissions (docs/folders)',
    shortName: 'Permissions',
    scores: { claude: 65, codex: 58, codex52: 0, gemini: 49 },
  },
  {
    name: 'Remote Secretary – Design',
    shortName: 'Design',
    scores: { claude: 78, codex: 68, codex52: 0, gemini: 70 },
  },
  {
    name: 'Tiny GPT – Zig',
    shortName: 'Zig',
    scores: { claude: 40, codex: 36, codex52: 0, gemini: 73 },
  },
  {
    name: 'SmartTrim macOS utility',
    shortName: 'SmartTrim',
    scores: { claude: 79, codex: 83, codex52: 0, gemini: 61 },
  },
  {
    name: 'XLSX backend + agent tools',
    shortName: 'XLSX',
    scores: { claude: 70, codex: 70, codex52: 0, gemini: 56 },
  },
];

export const radarData: CategoryScore[] = [
  {
    name: 'Instruction following',
    scores: { claude: 82, codex: 75, codex52: 0, gemini: 72 },
  },
  {
    name: 'Code quality',
    scores: { claude: 73, codex: 75, codex52: 0, gemini: 74 },
  },
  {
    name: 'Change hygiene',
    scores: { claude: 80, codex: 78, codex52: 0, gemini: 76 },
  },
  {
    name: 'Functional correctness',
    scores: { claude: 66, codex: 60, codex52: 0, gemini: 62 },
  },
];

export const totals: TotalScore[] = [
  {
    name: 'Total score',
    scores: { claude: 397, codex: 375, codex52: 0, gemini: 372 },
  },
  {
    name: 'Average per task',
    scores: { claude: 66.2, codex: 62.5, codex52: 0, gemini: 62.0 },
  },
];

/**
 * Transform data for recharts - converts scores record to flat object with model keys
 */
export function toChartData<
  T extends {
    name: string;
    scores: Record<ModelId, number>;
    shortName?: string;
  },
>(
  data: T[],
  visibleModels: ModelId[]
): Array<
  { name: string; shortName?: string } & Partial<Record<ModelId, number>>
> {
  return data.map((item) => {
    const result: { name: string; shortName?: string } & Partial<
      Record<ModelId, number>
    > = {
      name: item.name,
      shortName: item.shortName,
    };
    for (const modelId of visibleModels) {
      result[modelId] = item.scores[modelId];
    }
    return result;
  });
}
