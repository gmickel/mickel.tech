/**
 * Model configuration for gmickel-bench
 * Order determines display priority (newest first)
 * Harness = CLI tool, Model = specific LLM
 */
export type ModelId = 'claude' | 'codex' | 'gemini';

export interface ModelConfig {
  id: ModelId;
  harness: string; // CLI tool name
  model: string; // Specific model version
  color: string;
  order: number; // lower = newer/higher priority
  benchDate: string; // ISO date when benchmarks were run
}

export const MODELS: Record<ModelId, ModelConfig> = {
  claude: {
    id: 'claude',
    harness: 'Claude Code',
    model: 'Opus 4.5',
    color: '#00e5ff',
    order: 1,
    benchDate: '2025-12-09',
  },
  codex: {
    id: 'codex',
    harness: 'Codex CLI',
    model: 'GPT-5.1-codex-max',
    color: '#9ef36e',
    order: 2,
    benchDate: '2025-12-09',
  },
  gemini: {
    id: 'gemini',
    harness: 'Gemini CLI',
    model: 'Gemini 3 Pro',
    color: '#ff6bd6',
    order: 3,
    benchDate: '2025-12-09',
  },
} as const;

/** Full label: "Harness / Model" */
export function getFullLabel(id: ModelId): string {
  const m = MODELS[id];
  return `${m.harness} / ${m.model}`;
}

/** Short label for compact displays */
export function getShortLabel(id: ModelId): string {
  return MODELS[id].model;
}

export const MODEL_IDS = Object.keys(MODELS) as ModelId[];

export const DEFAULT_VISIBLE_COUNT = 3;

export function getDefaultVisibleModels(): ModelId[] {
  return MODEL_IDS.slice()
    .sort((a, b) => MODELS[a].order - MODELS[b].order)
    .slice(0, DEFAULT_VISIBLE_COUNT);
}

export function getOrderedModels(ids: ModelId[]): ModelId[] {
  return ids.slice().sort((a, b) => MODELS[a].order - MODELS[b].order);
}
