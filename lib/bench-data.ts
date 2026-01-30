import type { EvalId } from './bench-evals';
import type { ModelId } from './bench-models';

export type BenchScore = {
  evalId: EvalId;
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
    evalId: 'mcp',
    name: 'Convex OAuth MCP slice',
    shortName: 'MCP',
    scores: {
      flownext: 81,
      claude: 65,
      codex: 60,
      codex52: 76,
      codex52xh: 75,
      codex52c: 72,
      gemini: 63,
    },
  },
  {
    evalId: 'permissions',
    name: 'Convex permissions (docs/folders)',
    shortName: 'Permissions',
    scores: {
      flownext: 83,
      claude: 65,
      codex: 58,
      codex52: 78,
      codex52xh: 78,
      codex52c: 66,
      gemini: 49,
    },
  },
  {
    evalId: 'design',
    name: 'Remote Secretary – Design',
    shortName: 'Design',
    scores: {
      flownext: 87,
      claude: 86,
      codex: 77,
      codex52: 80,
      codex52xh: 82,
      codex52c: 75,
      gemini: 69,
    },
  },
  {
    evalId: 'zig',
    name: 'Tiny GPT – Zig',
    shortName: 'Zig',
    scores: {
      flownext: 91,
      claude: 62,
      codex: 36,
      codex52: 70,
      codex52xh: 82,
      codex52c: 58,
      gemini: 81,
    },
  },
  {
    evalId: 'smarttrim',
    name: 'SmartTrim macOS utility',
    shortName: 'SmartTrim',
    scores: {
      flownext: 96,
      claude: 88,
      codex: 92,
      codex52: 85,
      codex52xh: 88,
      codex52c: 88,
      gemini: 67,
    },
  },
  {
    evalId: 'xlsx',
    name: 'XLSX backend + agent tools',
    shortName: 'XLSX',
    scores: {
      flownext: 92,
      claude: 70,
      codex: 70,
      codex52: 76,
      codex52xh: 90,
      codex52c: 83,
      gemini: 56,
    },
  },
];

export function getScoresForEval(evalId: EvalId): BenchScore | undefined {
  return llmScores.find((s) => s.evalId === evalId);
}

export const radarData: CategoryScore[] = [
  {
    name: 'Instruction following',
    scores: {
      flownext: 95,
      claude: 82,
      codex: 75,
      codex52: 89,
      codex52xh: 92,
      codex52c: 86,
      gemini: 72,
    },
  },
  {
    name: 'Code quality',
    scores: {
      flownext: 97,
      claude: 73,
      codex: 75,
      codex52: 87,
      codex52xh: 91,
      codex52c: 76,
      gemini: 74,
    },
  },
  {
    name: 'Change hygiene',
    scores: {
      flownext: 93,
      claude: 80,
      codex: 78,
      codex52: 90,
      codex52xh: 94,
      codex52c: 78,
      gemini: 76,
    },
  },
  {
    name: 'Functional correctness',
    scores: {
      flownext: 93,
      claude: 66,
      codex: 60,
      codex52: 77,
      codex52xh: 82,
      codex52c: 74,
      gemini: 62,
    },
  },
];

export const totals: TotalScore[] = [
  {
    name: 'Total score',
    scores: {
      flownext: 530,
      claude: 436,
      codex: 393,
      codex52: 465,
      codex52xh: 495,
      codex52c: 442,
      gemini: 385,
    },
  },
  {
    name: 'Average per task',
    scores: {
      flownext: 88.3,
      claude: 72.7,
      codex: 65.5,
      codex52: 77.5,
      codex52xh: 82.5,
      codex52c: 73.7,
      gemini: 64.2,
    },
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
    evalId?: EvalId;
  },
>(
  data: T[],
  visibleModels: ModelId[]
): Array<
  { name: string; shortName?: string; evalId?: EvalId } & Partial<
    Record<ModelId, number>
  >
> {
  return data.map((item) => {
    const result: {
      name: string;
      shortName?: string;
      evalId?: EvalId;
    } & Partial<Record<ModelId, number>> = {
      name: item.name,
      shortName: item.shortName,
      evalId: item.evalId,
    };
    for (const modelId of visibleModels) {
      result[modelId] = item.scores[modelId];
    }
    return result;
  });
}
