/**
 * Model configuration for gmickel-bench
 * Order determines display priority (newest first)
 * Harness = CLI tool, Model = specific LLM
 */
export type ModelId = 'claude' | 'codex' | 'codex52' | 'gemini';

export interface ModelConfig {
  id: ModelId;
  harness: string; // CLI tool name
  harnessVersion: string; // CLI version used for benchmarks
  model: string; // Specific model version
  color: string;
  order: number; // lower = newer/higher priority
  benchDate: string; // ISO date when benchmarks were run
}

export const MODELS: Record<ModelId, ModelConfig> = {
  claude: {
    id: 'claude',
    harness: 'Claude Code',
    harnessVersion: 'v2.0.64',
    model: 'Opus 4.5 thinking',
    color: '#00e5ff',
    order: 1,
    benchDate: '2025-12-09',
  },
  codex: {
    id: 'codex',
    harness: 'Codex CLI',
    harnessVersion: 'v0.66.0',
    model: 'GPT-5.1-codex-max medium',
    color: '#9ef36e',
    order: 2,
    benchDate: '2025-12-09',
  },
  codex52: {
    id: 'codex52',
    harness: 'Codex CLI',
    harnessVersion: 'v0.71.0',
    model: 'GPT-5.2 medium',
    color: '#ffd166',
    order: 4, // Move to 1 when data is ready
    benchDate: '2025-12-11',
  },
  gemini: {
    id: 'gemini',
    harness: 'Gemini CLI',
    harnessVersion: 'v0.19.4',
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
