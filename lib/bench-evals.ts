// SINGLE SOURCE OF TRUTH for eval metadata
// Migrated from app/gmickel-bench/page.tsx benchmarks array

export interface BenchEval {
  id: string;
  title: string;
  shortName: string;
  spec: string;
  hook: string;
  methodology: string;
  takeaways: string[];
  note?: {
    type: 'outlier' | 'info';
    title: string;
    content: string;
  };
}

export const BENCH_EVALS: BenchEval[] = [
  {
    id: 'mcp',
    shortName: 'MCP',
    title: 'Convex OAuth MCP server',
    spec: 'Dense spec. Full vertical slice on Convex + Better Auth + MCP; discovery, scopes, admin UI, tests.',
    hook: 'Security-sensitive slice with OAuth semantics, streaming MCP transport, and admin surface.',
    methodology:
      'This evaluation tests whether a model can implement a full OAuth 2.1 MCP server from a dense specification. The task requires understanding security invariants, streaming transport, admin UI scaffolding, and test coverage. Scoring combines LLM judge assessment of code quality with human review of functional correctness.',
    takeaways: [
      'GPT-5.2 medium edges xhigh (76 vs 75); both dominate Claude (65), Gemini (63).',
      'Dense plans still leave scope edges uncovered—human review mandatory on security invariants.',
    ],
  },
  {
    id: 'permissions',
    shortName: 'Permissions',
    title: 'Convex document & folder permissions',
    spec: 'Extend existing ACL whitelist to docs/folders; inheritance, Better Auth invites, guest filtering, tests.',
    hook: 'Tests whether agents can extend ACL patterns without regressions when specs are intentionally light.',
    methodology:
      'This evaluation tests incremental ACL extension on an existing codebase. The spec is intentionally sparse, requiring the model to infer patterns from existing code. Key challenges include maintaining owner checks, implementing guest filters, and handling activation hooks without breaking existing functionality.',
    takeaways: [
      'GPT-5.2 medium and xhigh tie (78) with best ACL inference; Claude (65) solid; Gemini struggles (49).',
      'Owner checks, guest filters, activation hooks—common gaps even with light specs.',
    ],
  },
  {
    id: 'design',
    shortName: 'Design',
    title: 'Remote secretarial service dashboard',
    spec: 'High-spec UX brief; Next 16 App Router + Tailwind + shadcn; multi-page customer portal.',
    hook: 'Separates layout craft from data wiring; measures taste + speed under strong aesthetic constraints.',
    methodology:
      'This evaluation tests frontend design implementation from a detailed UX brief. The focus is on visual craft, layout fidelity, and component composition. Scoring reweighted to 70/30 split (LLM/design) to properly value aesthetic quality alongside functional implementation.',
    takeaways: [
      'Claude + frontend-design plugin wins (86) with polished visuals; xhigh second (82) despite higher LLM score.',
      'GPT-5.1 (77) had better aesthetics than 5.2 despite lower functional scores—proves taste ≠ code quality.',
      'Without explicit design prompting, models converge on AI slop—navigation completeness still lags.',
    ],
    note: {
      type: 'info',
      title: 'Design eval reweighted 11 Dec 2025',
      content:
        'Originally scored LLM 0-90 + design 0-10 = 100 max. This underweighted aesthetics—a model could score 83/90 functionally but lose only 3 pts for mediocre design. Reweighted to 70/30 split: llm_weighted = (llm/90)*70, design_weighted = (design/10)*30. High design scores now properly amplified; functional-but-boring outputs penalized.',
    },
  },
  {
    id: 'zig',
    shortName: 'Zig',
    title: 'Tiny GPT in pure Zig',
    spec: 'Medium-spec prompt; char-level GPT, AdamW, warmup/cosine, CPU-only; build/train/sample acceptance.',
    hook: "Cross-language generalisation on Karpathy's minGPT/nanoGPT lineage, rebuilt in Zig without ML libs.",
    methodology:
      'This evaluation tests low-level systems programming and ML fundamentals. The model must implement a character-level GPT from scratch in Zig, including matrix operations, AdamW optimizer, and learning rate scheduling. The acceptance criteria include successful build, training, and sample generation.',
    takeaways: [
      'GPT-5.2 xhigh (82) beats Gemini (81)—first OpenAI model to win Zig; medium (70) also solid.',
      'Claude (62) succeeded on 3rd attempt via self-correction; Codex 5.1 (36) still crashes on matmul.',
    ],
    note: {
      type: 'info',
      title: 'Claude recovers via best-of-3',
      content:
        'GPT-5.2 xhigh (82) beats Gemini 3.0 Pro (81) on the Zig eval—first OpenAI model to win Zig. Claude (62) initially crashed but succeeded on 3rd attempt through self-correction. Codex 5.1 (36) still crashes on matmul assertions.',
    },
  },
  {
    id: 'smarttrim',
    shortName: 'SmartTrim',
    title: 'SmartTrim macOS menu bar utility',
    spec: 'Swift 6 LSUIElement MenuBarExtra with TextHealer heuristic, clipboard monitor, tests, hotkey, login item.',
    hook: 'System-integration slice: macOS menu bar UI, clipboard healing, global hotkey, launch-at-login.',
    methodology:
      'This evaluation tests macOS system integration with Swift 6 strict concurrency. The model must implement a menu bar utility with clipboard monitoring, text healing heuristics, global hotkey registration, and launch-at-login functionality. SwiftUI MenuBarExtra patterns are critical.',
    takeaways: [
      'GPT-5.1 wins (92), Claude/xhigh tied (88), medium (85); Gemini lags (67) with ghost indentation.',
      'Swift 6 strict concurrency + SwiftUI tractable; heuristics still need human-tuned edges.',
    ],
  },
  {
    id: 'xlsx',
    shortName: 'XLSX',
    title: 'XLSX backend + agent tools',
    spec: 'Python FastAPI routes + Convex tool wiring + agent prompts + tests/evals for Excel manipulation.',
    hook: 'Full-stack agent integration: Python service, TypeScript tools, prompt engineering, formula recalc.',
    methodology:
      'This evaluation tests cross-stack agent integration. The model must implement Python FastAPI routes for Excel manipulation, wire Convex TypeScript tools, and write agent prompts. Formula recalculation via LibreOffice is specified but often stubbed.',
    takeaways: [
      'GPT-5.2 xhigh dominates (90); medium (76), Claude/5.1 tied (70); Gemini struggles (56).',
      'Formula recalculation common gap—models stub it rather than integrating LibreOffice.',
      'Gemini regressed existing tools (dropped refetchParagraphs) showing change hygiene risks.',
    ],
    note: {
      type: 'info',
      title: 'Cross-stack complexity',
      content:
        'This eval touches Python (FastAPI, openpyxl, pandas), TypeScript (Convex actions, agent tools), and prompt engineering. Even with detailed instructions on Excel manipulation, none of the models fully integrated formula recalculation via LibreOffice as specified. The pattern: models implement the happy path but skip the hard system integration.',
    },
  },
];

// Single source of truth for eval IDs
export const EVAL_IDS = [
  'mcp',
  'permissions',
  'design',
  'zig',
  'smarttrim',
  'xlsx',
] as const;

export type EvalId = (typeof EVAL_IDS)[number];

export function getEvalById(id: string): BenchEval | undefined {
  return BENCH_EVALS.find((e) => e.id === id);
}

export function getEvalIds(): string[] {
  return BENCH_EVALS.map((e) => e.id);
}
