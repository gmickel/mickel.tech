import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierPhased from '@/components/atelier/phased';
import AtelierShell from '@/components/layout/atelier-shell';
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  softwareAppSchema,
} from '@/lib/json-ld';

const APP_DATA = {
  name: 'Flow-Next',
  description:
    'Multi-platform AI agent orchestration with zero external dependencies. Works on Claude Code, Factory Droid, OpenAI Codex, and OpenCode. Task graphs, re-anchoring, cross-model reviews, Ralph autonomous mode.',
  slug: 'flow-next',
  category: 'DeveloperApplication',
  version: '0.38.0',
  operatingSystem: 'Cross-platform',
  programmingLanguage: 'Python',
};

export const metadata: Metadata = {
  title: 'Flow-Next -- Zero-dep agent orchestration',
  description:
    'Multi-platform AI agent orchestration. Claude Code, Factory Droid, OpenAI Codex, OpenCode. 21 named subagents, cross-model review with requirement-ID traceability + trivial-diff triage, PR feedback resolution, ranked-candidate ideation, conversation-to-spec capture with source-tagged criteria, categorized memory with overlap detection + agent-native staleness audit, Ralph autonomous mode. Zero deps.',
  keywords: [
    'Claude Code plugin',
    'Factory Droid',
    'OpenAI Codex',
    'OpenCode',
    'AI agent orchestration',
    'task tracking',
    'zero dependencies',
    'cross-model review',
    'requirement-ID traceability',
    'trivial-diff triage',
    'PR feedback resolution',
    'GitHub PR automation',
    'ideation',
    'prospect',
    'ranked candidates',
    'idea generation',
    'capture',
    'conversation to spec',
    'source-tagged criteria',
    'read-back loop',
    'categorized learnings',
    'overlap detection',
    'Ralph mode',
    'autonomous agents',
    'flowctl',
  ],
  openGraph: {
    title: 'Flow-Next · Mickel Tech',
    description:
      'Agents that finish what they start. Ralph mode, cross-model review, 21 named subagents. Claude Code, Factory Droid, OpenAI Codex, OpenCode.',
    type: 'website',
    url: 'https://mickel.tech/apps/flow-next',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow-Next · Mickel Tech',
    description:
      'Task graphs, re-anchoring, cross-model review, Ralph autonomous mode. Zero deps.',
    creator: '@gmickel',
  },
  alternates: { canonical: 'https://mickel.tech/apps/flow-next' },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    question: 'What is Flow-Next?',
    answer:
      'Multi-platform AI agent orchestration with zero external dependencies. Works on Claude Code, Factory Droid, OpenAI Codex, and OpenCode. Bundled task tracking, dependency graphs, automated cross-model code reviews, and an optional Ralph autonomous loop for AFK execution.',
  },
  {
    question: 'What is Ralph mode?',
    answer:
      'Ralph is a repo-local autonomous loop. It picks the next ready task, runs plan-review, work, impl-review, and epic-review in sequence, and repeats until the epic ships or the iteration cap is hit. Receipts gate every stage: no fake "done" status, no silent drift. YOLO=0 by default, so it pauses on ambiguity.',
  },
  {
    question: 'What is /flow-next:epic-review?',
    answer:
      'A completion gate that runs when all tasks are done, before the epic closes. It extracts requirements from the spec and verifies each against the code. Catches decomposition gaps, cross-task requirements, and scope drift that per-task impl-review misses. Loops until SHIP.',
  },
  {
    question: 'What is /flow-next:prime?',
    answer:
      'An agent-readiness assessment. Eight parallel Sonnet scouts grade your repo across eight pillars (tooling, build, testing, docs, dev env, workflow, security, observability) in ~15-20 seconds. Proposes non-destructive improvements with consent prompts and calculates a maturity level from 1 (Minimal) to 5 (Autonomous).',
  },
  {
    question: 'How do I install Flow-Next?',
    answer:
      'Claude Code: /plugin marketplace add https://github.com/gmickel/flow-next then /plugin install flow-next. Factory Droid: droid plugin marketplace add then droid plugin install. OpenAI Codex: clone and install via /plugins, or run scripts/install-codex.sh for a global install. OpenCode: see the experimental port at github.com/gmickel/flow-next-opencode.',
  },
  {
    question: 'How do I uninstall?',
    answer:
      'Delete the .flow/ directory. No hooks, no daemons, no CLAUDE.md edits to unwind. Fully reversible.',
  },
  {
    question: 'Codex CLI review vs RepoPrompt review?',
    answer:
      'Both deliver Carmack-level cross-model review with identical criteria. Codex CLI is cross-platform and runs GPT-5.2 High by default. RepoPrompt (rp-cli) is macOS-only but offers a visual builder for context selection. GitHub Copilot CLI is the third supported backend. Pick by platform and preference.',
  },
  {
    question: 'What is requirement-ID traceability?',
    answer:
      'Epic specs number their acceptance criteria as R1, R2, R3... Tasks optionally declare satisfies: [R1, R3] frontmatter. Impl-review and epic-review produce per-R-ID coverage tables (met / partial / not-addressed / deferred). Any unaddressed R-ID flips verdict to NEEDS_WORK; the receipt carries an unaddressed array so the fix loop has targeted work. Renumber-forbidden after the first review cycle. Plan and plan-sync write R-IDs automatically.',
  },
  {
    question: 'What does flowctl triage-skip do?',
    answer:
      'A deterministic whitelist pre-check that returns SHIP without calling a review backend for trivial diffs: lockfile-only bumps, pure docs changes, release chores, generated-file regenerations. The receipt records mode: triage_skip and a one-line reason. On by default in Ralph mode; opt-out via --no-triage or FLOW_RALPH_NO_TRIAGE=1. An optional fast-model LLM judge for ambiguous diffs is gated behind FLOW_TRIAGE_LLM=1. Saves rp / codex / copilot calls on trivial commits.',
  },
  {
    question:
      'What are the opt-in review flags (--validate, --deep, --interactive)?',
    answer:
      'Three opt-in flags on /flow-next:impl-review that layer extra capability on top of the default Carmack-level review. The default review shape is unchanged — all three flags are off by default. --validate (FLOW_VALIDATE_REVIEW=1) drops false-positive findings via a validator pass on NEEDS_WORK and upgrades to SHIP when all findings drop; never downgrades a SHIP or MAJOR_RETHINK verdict. --deep (FLOW_REVIEW_DEEP=1) runs primary then layers adversarial, security, and performance passes in the same backend session, with cross-pass agreement promoting confidence one anchor step. --interactive presents a per-finding walkthrough with Apply / Defer / Skip / Acknowledge plus an "LFG the rest" escape hatch; deferred findings append to .flow/review-deferred/<branch-slug>.md. --interactive is Ralph-incompatible by design and hard-errors when REVIEW_RECEIPT_PATH or FLOW_RALPH=1 is set. Phase order when flags combine: primary → deep → validate → interactive → verdict. Receipt extensions are additive.',
  },
  {
    question: 'When do I use prospect vs capture vs interview vs plan?',
    answer:
      'Four upstream-of-work commands, four different starting points. /flow-next:prospect [hint] is for the "what should I build?" phase — no target yet. It generates many candidate ideas grounded in the repo, critiques each one with explicit rejection reasons, and surfaces only the survivors bucketed by leverage (High 1-3 / Worth considering 4-7 / If you have the time 8+). Output is a ranked artifact under .flow/prospects/<slug>-<date>.md; promote a survivor to a new epic via flowctl prospect promote <id> --idea N (direct path) or hand it to /flow-next:capture for a richer conversation-driven spec. /flow-next:capture (added in 0.38.0) synthesizes the current conversation context into an epic spec at .flow/specs/<epic-id>.md — the automated alternative to manual flowctl epic create + epic set-plan. Source-tags every acceptance criterion ([user] verbatim / [paraphrase] restated / [inferred] agent fill-in); mandatory read-back loop with [inferred] count surfaced; never silently invents requirements; Ralph-blocked. /flow-next:interview is for the "I have a target, refine it" phase — 40+ deep questions writing back to a single epic spec; in 0.38.0 every question now leads with a recommendation + confidence tier ([high] / [judgment-call] / [your-call]) and codebase-answerable questions are investigated via Read/Grep/Glob before being asked. /flow-next:plan is for the "I have a target, break it down" phase — research best practices and split into sized tasks with dependencies. Lifecycle pathways supported: prospect → plan (direct via promote), prospect → capture → interview/plan, free-form → capture → interview/plan, plus the existing flows (Spec → Interview/Plan → Work, Plan → Work, Work direct). All terminate at /flow-next:work. Prospect and capture are Ralph-out by design — autonomous loops have no business deciding what to build, and capture needs conversation context that autonomous loops do not have.',
  },
  {
    question: 'How do I handle PR review comments with flow-next?',
    answer:
      '/flow-next:resolve-pr is a user-triggered command that closes out GitHub PR review threads end-to-end. It fetches unresolved threads + top-level PR comments + review submission bodies via GraphQL, triages new vs already-answered, dispatches pr-comment-resolver agents (parallel on Claude Code, serial on Codex / Copilot / Droid) with file-overlap avoidance, runs project validation once, commits + pushes fixes, then replies and resolves threads via GraphQL. Cross-invocation cluster analysis catches recurring patterns across review rounds. Flags: --dry-run (fetch + plan, no edits) and --no-cluster. Verify loop bounded at 2 fix-verify cycles. Ralph-out by design — humans review PRs on their own cadence, then run this command once per round. Zero runtime deps beyond gh + jq.',
  },
  {
    question: 'Does Flow-Next work with Factory Droid?',
    answer:
      'Yes, with full feature parity. Same task graph, same subagents, same cross-model review. Install via droid plugin marketplace add https://github.com/gmickel/flow-next.',
  },
  {
    question: 'What are the requirements?',
    answer:
      'Python 3.8+ and git. Any of Claude Code, Factory Droid, OpenAI Codex, or OpenCode as the host agent. For cross-model reviews: OpenAI Codex CLI (cross-platform), GitHub Copilot CLI, or RepoPrompt rp-cli (macOS).',
  },
];

const testimonialLead = {
  quote:
    'Flow-next is simply the best coding flow, not even close, and still a side project.',
  handle: 'Tiago Freitas · @tiagoefreitas',
  url: 'https://x.com/tiagoefreitas',
};

const testimonialsRest = [
  {
    handle: '@Lat3ntG3nius',
    url: 'https://x.com/Lat3ntG3nius',
    quote:
      'Cross-model review is genius. It exploits model diversity as a feature. Different models make different mistakes, so using them as mutual reviewers creates a safety net single-model workflows can’t match.',
  },
  {
    handle: '@clairernovotny',
    url: 'https://x.com/clairernovotny',
    quote:
      'I’ve found it generating production-quality code. Far, far better than any of the other tools I’ve tried.',
  },
  {
    handle: '@BaranGuneysel',
    url: 'https://x.com/BaranGuneysel',
    quote:
      'As a designer, flow-next finally lets me ship features with confidence. The review loop catches what I miss.',
  },
  {
    handle: '@dailyreader',
    url: 'https://x.com/dailyreader',
    quote:
      'The re-anchoring is the quiet superpower. After a long session the agent still knows exactly what it’s building.',
  },
  {
    handle: '@mfeighery',
    url: 'https://x.com/mfeighery',
    quote:
      'Ralph mode at night, PRs in the morning. Zero drama. The receipts mean I trust what landed.',
  },
  {
    handle: '@ben',
    url: 'https://x.com/ben',
    quote:
      'A force multiplier. Plan once, then watch a team of scouts and reviewers do their jobs.',
  },
];

const problems = [
  {
    title: 'Coding before understanding',
    description: 'Starting work without reading the codebase.',
  },
  {
    title: 'Reinventing patterns',
    description: 'Ignoring conventions that already exist in the repo.',
  },
  {
    title: 'Losing the plan',
    description: 'Drifting mid-implementation after context compaction.',
  },
  {
    title: 'Missing edge cases',
    description: 'Gaps that were obvious in hindsight.',
  },
];

const platforms = [
  {
    name: 'Claude Code',
    status: 'Primary',
    role: 'Anthropic’s official CLI',
    install: `/plugin marketplace add \\
  https://github.com/gmickel/flow-next
/plugin install flow-next`,
    features: [
      '21 named subagents (Sonnet for breadth, Opus for depth)',
      'Full Ralph autonomous mode',
      'TUI monitor support',
    ],
    uninstall: 'rm -rf .flow/',
  },
  {
    name: 'Factory Droid',
    status: 'Full',
    role: 'Factory.ai’s coding agent',
    install: `droid plugin marketplace add \\
  https://github.com/gmickel/flow-next
droid plugin install flow-next`,
    features: [
      'Full command + subagent parity',
      'Bash|Execute hook matchers',
      'Same .flow/ format, portable',
    ],
    uninstall: 'rm -rf .flow/',
  },
  {
    name: 'OpenAI Codex',
    status: 'Full',
    role: 'OpenAI’s terminal-native agent',
    install: `git clone https://github.com/gmickel/flow-next
./scripts/install-codex.sh flow-next
# or open Codex and /plugins install`,
    features: [
      '20 multi-agent roles',
      'Native GPT-5.2 High reviews',
      'Works on Linux/macOS/Windows',
    ],
    uninstall: 'rm -rf .flow/ ~/.codex/plugins/flow-next',
  },
  {
    name: 'OpenCode',
    status: 'Experimental',
    role: 'Open-source terminal agent',
    install: `# Experimental port of flow-next by me:
# github.com/gmickel/flow-next-opencode`,
    features: [
      'Core plan / work / review loop',
      'Experimental port of flow-next by me',
      'Feature parity drifts behind',
    ],
    uninstall: 'rm -rf .flow/',
  },
];

const scouts = [
  {
    name: 'repo-scout',
    kind: 'Opus',
    description: 'Scans repo for prior patterns, conventions, related modules.',
  },
  {
    name: 'context-scout',
    kind: 'Opus',
    description:
      'Deep RepoPrompt slice. Token-efficient exploration for ambiguous asks.',
  },
  {
    name: 'practice-scout',
    kind: 'Opus',
    description: 'Surfaces modern best practices and common pitfalls.',
  },
  {
    name: 'docs-scout',
    kind: 'Opus',
    description: 'Finds the exact framework/library docs relevant to the ask.',
  },
  {
    name: 'docs-gap-scout',
    kind: 'Sonnet',
    description:
      'Flags which docs, comments, or READMEs will need updates after the change.',
  },
  {
    name: 'github-scout',
    kind: 'Opus',
    description:
      'Searches public + private GitHub for implementations and examples.',
  },
  {
    name: 'epic-scout',
    kind: 'Sonnet',
    description:
      'Cross-references other epics for dependencies and shared scope.',
  },
  {
    name: 'memory-scout',
    kind: 'Sonnet',
    description:
      'Searches .flow/memory/ categorized bug + knowledge entries, prioritizing module-matched hits.',
  },
  {
    name: 'flow-gap-analyst',
    kind: 'Opus',
    description: 'Maps user flows, edge cases, and missing requirements.',
  },
  {
    name: 'quality-auditor',
    kind: 'Opus',
    description:
      'Reviews changes for correctness, simplicity, security, coverage.',
  },
  {
    name: 'plan-sync',
    kind: 'Opus',
    description:
      'Updates downstream task specs after an implementation diverges.',
  },
  {
    name: 'pr-comment-resolver',
    kind: 'Inherit',
    description:
      'Resolves a single PR review thread: validate, fix or reply, mark resolved. Spawned by /flow-next:resolve-pr.',
  },
  {
    name: 'worker',
    kind: 'Inherit',
    description:
      'Implements a single task with a fresh context window, re-anchored.',
  },
];

const primeScouts = [
  {
    name: 'tooling-scout',
    kind: 'Sonnet',
    description: 'Biome, ESLint, Prettier, formatter config.',
  },
  {
    name: 'build-scout',
    kind: 'Sonnet',
    description: 'Scripts, CI config, reproducible builds.',
  },
  {
    name: 'testing-scout',
    kind: 'Sonnet',
    description: 'Test framework, coverage config, commands.',
  },
  {
    name: 'claude-md-scout',
    kind: 'Sonnet',
    description: 'CLAUDE.md / AGENTS.md quality, completeness.',
  },
  {
    name: 'env-scout',
    kind: 'Sonnet',
    description: 'Env templates, Docker, devcontainer setup.',
  },
  {
    name: 'workflow-scout',
    kind: 'Sonnet',
    description: 'PR + issue templates, automation.',
  },
  {
    name: 'security-scout',
    kind: 'Sonnet',
    description: 'GitHub settings, CODEOWNERS, dep updates.',
  },
  {
    name: 'observability-scout',
    kind: 'Sonnet',
    description: 'Logging, tracing, metrics, health endpoints.',
  },
];

const maturityLevels = [
  {
    name: 'Minimal',
    range: 'under 30%',
    description:
      'Agent can run but misses most guardrails. High drift, high review cost.',
  },
  {
    name: 'Functional',
    range: '30–49%',
    description:
      'Basic lint/test/format in place. Most changes land; edge cases still leak.',
  },
  {
    name: 'Standardized',
    range: '50–69%',
    description:
      'CLAUDE.md, pre-commit, CI all wired. Agents follow conventions without babysitting.',
    target: true,
  },
  {
    name: 'Optimized',
    range: '70–84%',
    description:
      'Coverage gates, security scans, observability hooks. Cross-model review on hot paths.',
  },
  {
    name: 'Autonomous',
    range: '85%+',
    description:
      'Ralph-ready. Full receipt trail, epic-review gates, zero-trust shipping.',
  },
];

const phases = [
  {
    command: '/flow-next:plan',
    name: 'Research before code.',
    steps: [
      'Seven research scouts in parallel (repo, context, practice, docs, gap, security, epic).',
      'Gap analysis surfaces missing flows and edge cases.',
      'Epic drafted with dependency-ordered tasks and doc-update criteria.',
      'Optional Carmack-level plan-review via Codex, Copilot, or RepoPrompt.',
    ],
  },
  {
    command: '/flow-next:work',
    name: 'Task-by-task, re-anchored.',
    steps: [
      'Re-read epic, task, and git state before the first line of code.',
      'Pre-implementation search: reuse > extend > create.',
      'Implement and test. Follow existing patterns. Verify acceptance.',
      'Optional impl-review loops until SHIP.',
      'Record evidence via flowctl. Claim the next ready task.',
    ],
  },
  {
    command: '/flow-next:epic-review',
    name: 'Completion gate before close.',
    steps: [
      'Extract requirements from the epic spec.',
      'Verify each requirement against the code.',
      'Flag decomposition gaps and scope drift.',
      'Loop the responsible tasks until every line of spec maps to code.',
      'Close the epic only when review returns SHIP.',
    ],
  },
];

const coreFeatures = [
  {
    title: 'Re-anchoring',
    description:
      'Before every task, re-reads epic + task spec + git state. Prevents drift per Anthropic guidance.',
  },
  {
    title: 'Zero dependencies',
    description:
      'Bundled flowctl.py. No external CLI, no npm packages, no services. Python 3.8+ and git.',
  },
  {
    title: 'Non-invasive',
    description:
      'No hooks, no daemons, no CLAUDE.md edits. Delete .flow/ to uninstall completely.',
  },
  {
    title: 'Multi-user safe',
    description:
      'Scan-based IDs (no counters). Soft claims via assignee. Teams work parallel branches.',
  },
  {
    title: 'Dependency graphs',
    description:
      'Tasks declare blockers. Epic-scout auto-detects cross-epic dependencies.',
  },
  {
    title: 'Memory system',
    description:
      'Categorized learnings (bug + knowledge tracks, YAML frontmatter) survive compaction. Overlap detection merges duplicates; Ralph auto-captures structured bug entries from NEEDS_WORK reviews.',
  },
  {
    title: 'Investigation targets',
    description:
      'Plan writes exact file paths workers read before coding. Required vs optional tiers.',
  },
  {
    title: 'Cross-model review',
    description:
      'Different models catch different blind spots. Same-model self-review is a blind mirror.',
  },
  {
    title: 'Requirement-ID traceability',
    description:
      'Epic specs number acceptance criteria (R1, R2, R3). Reviews emit per-R-ID coverage tables; unaddressed IDs flip verdict to NEEDS_WORK with targeted fix-loop hints.',
  },
  {
    title: 'Trivial-diff triage',
    description:
      'flowctl triage-skip detects lockfile-only, docs-only, and release-chore diffs and returns SHIP without calling a review backend. Saves cycles on trivial commits.',
  },
  {
    title: 'Opt-in review flags',
    description:
      '--validate drops false-positive findings on NEEDS_WORK. --deep layers adversarial, security, and performance passes on top of the primary review. --interactive presents a per-finding Apply/Defer/Skip walkthrough. All off by default — the default Carmack-level review is unchanged; flags add structure, validation, and deep-dives on top without replacing it.',
  },
  {
    title: 'PR feedback resolution',
    description:
      '/flow-next:resolve-pr closes out GitHub review threads end-to-end. Fetch via GraphQL, dispatch resolver agents in parallel, validate, commit, reply, resolve. Cross-invocation cluster analysis catches recurring patterns across review rounds. User-triggered only; Ralph-out by design.',
  },
  {
    title: 'Ranked-candidate ideation',
    description:
      '/flow-next:prospect [hint] fills the "what should I build?" gap above interview/plan. Persona-seeded divergent generation, two-pass critique with rejection taxonomy, prose-only bucketed ranking (High 1-3 / Worth considering 4-7 / If you have the time 8+). Output is a ranked artifact under .flow/prospects/; promote a survivor to a new epic via flowctl prospect promote. User-triggered only; Ralph-out.',
  },
  {
    title: 'CI-ready',
    description:
      'flowctl validate --all exits 1 on broken tasks. Drop it into any pipeline.',
  },
];

const optInFeatures = [
  {
    title: 'Plan-Sync',
    description:
      'When implementation drifts from spec, plan-sync updates downstream tasks. Same-epic and cross-epic modes. Off by default.',
  },
  {
    title: 'Memory system',
    description:
      '.flow/memory/ is a tree of bug/ and knowledge/ categories with YAML-frontmatter entries. Overlap detection updates existing entries instead of duplicating. /flow-next:memory-migrate lifts legacy flat files into the new schema with agent-native per-entry classification (full repo context); flowctl memory migrate is the deterministic mechanical-only fallback for automation. /flow-next:audit reviews entries against current code; the agent decides Keep / Update / Consolidate / Replace / Delete per entry. Autofix mode applies unambiguous changes and marks ambiguous as stale. Never deletes silently.',
  },
  {
    title: 'DESIGN.md awareness',
    description:
      'Scouts read DESIGN.md if present. Pairs well with Google Stitch for design-system-aware frontend work. Opt-in at /flow-next:prime time.',
  },
  {
    title: 'Opt-in review rigor (--validate / --deep / --interactive)',
    description:
      'Three additive flags on /flow-next:impl-review. --validate drops false-positive findings via a validator pass (FLOW_VALIDATE_REVIEW=1). --deep layers adversarial + auto-enabled security/performance passes on top of the primary review (FLOW_REVIEW_DEEP=1). --interactive is a per-finding Apply/Defer/Skip walkthrough with an "LFG the rest" escape hatch; Ralph-incompatible by design. Default review is unchanged — flags add structure on top without replacing the Carmack-level baseline.',
  },
];

const commands = [
  {
    title: '/flow-next:prospect',
    description:
      'Generate ranked candidate ideas grounded in the repo, upstream of plan/interview.',
  },
  {
    title: '/flow-next:plan',
    description: 'Research + epic with dependency-ordered tasks.',
  },
  {
    title: '/flow-next:work',
    description: 'Execute epic task by task with re-anchoring.',
  },
  {
    title: '/flow-next:interview',
    description: 'Deep interview to flesh out a spec.',
  },
  {
    title: '/flow-next:capture',
    description:
      'Synthesize conversation context into an epic spec. Source-tagged criteria + mandatory read-back.',
  },
  {
    title: '/flow-next:plan-review',
    description: 'Carmack-level plan review (Codex / Copilot / RepoPrompt).',
  },
  {
    title: '/flow-next:impl-review',
    description: 'Carmack-level implementation review.',
  },
  {
    title: '/flow-next:epic-review',
    description: 'Epic completion gate before close.',
  },
  {
    title: '/flow-next:resolve-pr',
    description:
      'Resolve GitHub PR review threads: fetch → triage → fix → reply → resolve.',
  },
  {
    title: '/flow-next:audit',
    description:
      'Agent-native review of .flow/memory/ entries against current code. Keep / Update / Consolidate / Replace / Delete per entry. Never deletes silently.',
  },
  {
    title: '/flow-next:memory-migrate',
    description:
      'Lift legacy flat memory files into the categorized schema; agent classifies each entry with full repo context.',
  },
  {
    title: '/flow-next:prime',
    description:
      'Eight-pillar codebase agent-readiness assessment with parallel scouts; remediation via consent prompts.',
  },
  {
    title: '/flow-next:sync',
    description: 'Update downstream tasks after drift.',
  },
  {
    title: '/flow-next:ralph-init',
    description: 'Scaffold the repo-local Ralph autonomous loop.',
  },
];

export default function FlowNextPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema({ ...APP_DATA, offer: 'free' })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'Flow-Next', url: '/apps/flow-next' },
        ])}
      />
      <JsonLd data={faqSchema(FAQS)} />

      <AtelierAppHero
        category="02 / Orchestration"
        description="One task at a time with full review cycles, or throw the whole epic at it and walk away. Either way, re-anchoring, evidence, and cross-model review. Planning ensures every task fits the context window; re-anchoring after each task (and after compaction) means zero drift. Works on Claude Code, Factory Droid, OpenAI Codex, and OpenCode."
        idx="02"
        image="/flow/logo.svg"
        imageKind="logo"
        meta={[
          { label: 'Stack', value: 'Python 3' },
          { label: 'Platforms', value: '4 (Claude, Droid, Codex, OpenCode)' },
          { label: 'Subagents', value: '21 (Sonnet + Opus)' },
          { label: 'License', value: 'MIT' },
        ]}
        name="Flow-Next"
        primaryCta={{
          label: 'Marketplace',
          href: 'https://github.com/gmickel/flow-next',
          external: true,
        }}
        secondaryCta={{
          label: 'View source',
          href: 'https://github.com/gmickel/flow-next',
          external: true,
        }}
        status="Released"
        tagline="Zero-dep agent orchestration for the tools you already use."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Signal"
        lede="Shared by practitioners, not marketing."
        title="What people say."
      >
        <div className="space-y-12">
          <figure className="border-[hsl(var(--rust))]/45 border-l-2 pl-7 md:pl-10">
            <blockquote className="atelier-display text-[1.45rem] text-[hsl(var(--ink))] italic leading-[1.35] md:text-[1.75rem]">
              &ldquo;{testimonialLead.quote}&rdquo;
            </blockquote>
            <figcaption className="atelier-mono mt-4 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              <a
                className="transition-colors hover:text-[hsl(var(--rust))]"
                href={testimonialLead.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {testimonialLead.handle}
              </a>
            </figcaption>
          </figure>
          <div className="grid gap-x-8 gap-y-10 border-[hsl(var(--ink))]/10 border-t pt-10 md:grid-cols-3">
            {testimonialsRest.map((t) => (
              <figure key={t.handle}>
                <figcaption className="atelier-mono text-[10px] text-[hsl(var(--rust))] uppercase tracking-[0.18em]">
                  <a
                    className="hover:underline"
                    href={t.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t.handle}
                  </a>
                </figcaption>
                <blockquote className="atelier-body mt-2 text-[0.95rem] text-[hsl(var(--ink))]/85 italic leading-[1.5]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Problem"
        lede="Most agent failures aren’t about model capability. They’re about process."
        title="Agents fail for predictable reasons."
      >
        <AtelierFeatureGrid items={problems} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Workflow"
        lede="Plan, work, review. Three phases with their own commands and their own receipts."
        title="Plan → Work → Ship."
      >
        <AtelierPhased
          footer="Same guarantees whether you ship one task or the whole epic."
          phases={phases}
        />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Platforms"
        lede="Same .flow/ directory, same commands, zero vendor lock-in. Pick the host agent you already use."
        title="Where it runs."
      >
        <ul className="divide-y divide-[hsl(var(--ink))]/12 border-[hsl(var(--ink))]/12 border-y">
          {platforms.map((p) => (
            <li
              className="grid grid-cols-12 gap-x-6 gap-y-4 py-7 md:py-9"
              key={p.name}
            >
              <div className="col-span-12 md:col-span-3">
                <p className="atelier-mono text-[10px] text-[hsl(var(--rust))] uppercase tracking-[0.18em]">
                  {p.status}
                </p>
                <h3 className="atelier-display mt-2 font-medium text-[1.35rem] text-[hsl(var(--ink))] leading-[1.15]">
                  {p.name}
                </h3>
                <p className="atelier-body mt-1 text-[0.88rem] text-[hsl(var(--paper-muted))]">
                  {p.role}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <pre className="atelier-mono overflow-x-auto bg-[hsl(var(--graphite))] px-4 py-3 text-[12px] text-[hsl(var(--paper))] leading-[1.7]">
                  {p.install}
                </pre>
                <ul className="mt-3 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      className="atelier-body flex gap-2.5 text-[0.88rem] text-[hsl(var(--ink))]/72"
                      key={f}
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] h-[5px] w-[5px] flex-shrink-0 rotate-45 bg-[hsl(var(--rust))]"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3">
                <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
                  Uninstall
                </p>
                <code className="atelier-mono mt-1 block text-[11.5px] text-[hsl(var(--ink))]">
                  {p.uninstall}
                </code>
              </div>
            </li>
          ))}
        </ul>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Subagents"
        lede="Thirteen named subagents, split between Sonnet for breadth and Opus for depth. Worker + pr-comment-resolver inherit the host's model. Run in parallel so planning finishes in seconds, not minutes."
        title="The company of scouts."
      >
        <div className="[column-fill:balance] md:columns-2 md:gap-x-12">
          {scouts.map((s) => (
            <div
              className="break-inside-avoid border-[hsl(var(--ink))]/10 border-t py-3 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
              key={s.name}
            >
              <div className="flex items-baseline gap-3">
                <code className="atelier-mono text-[12px] text-[hsl(var(--rust))] tracking-[0.02em]">
                  {s.name}
                </code>
                <span className="atelier-mono text-[9.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
                  {s.kind}
                </span>
              </div>
              <p className="atelier-body mt-1 text-[0.88rem] text-[hsl(var(--ink))]/68 leading-[1.45]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="06 / Ralph"
        lede="AFK execution for when the epic is specced and the review gates are trusted. Picks the next ready task, loops plan-review → work → impl-review → epic-review until SHIP."
        title="Ralph mode — autonomous."
      >
        <div className="space-y-10">
          <div className="overflow-hidden border border-[hsl(var(--ink))]/10">
            <Image
              alt="Ralph mode autonomous loop"
              className="block h-auto w-full"
              height={675}
              priority={false}
              src="/ralph.avif"
              width={1200}
            />
          </div>
          <AtelierFeatureGrid
            items={[
              {
                title: 'Smart selector',
                description:
                  'Picks the next ready task that respects dependencies and skips what’s blocked.',
              },
              {
                title: 'Fresh context per task',
                description:
                  'Each iteration spawns a fresh worker with re-anchored context. No accumulated rot.',
              },
              {
                title: 'Auto backstop',
                description:
                  'Failed reviews route back to work. Three strikes and the loop pauses for a human.',
              },
              {
                title: 'Repo-local',
                description:
                  'All scripts live under scripts/ralph/. No external services, no cron, no daemons.',
              },
            ]}
          />
          <div className="codex-panel">
            <div className="codex-panel__bar flex items-center gap-2">
              <span className="codex-panel__dot" />
              <span className="codex-panel__dot" />
              <span className="codex-panel__dot" />
            </div>
            <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
              {`# scaffold the repo-local loop
/flow-next:ralph-init

# run until the epic ships
BRANCH_MODE=feature \\
PLAN_REVIEW=1 WORK_REVIEW=1 \\
MAX_ITERATIONS=30 YOLO=0 \\
./scripts/ralph/ralph.sh fn-1`}
            </pre>
          </div>
          <p className="atelier-body max-w-[60ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.55]">
            YOLO=0 is the default. Ralph pauses on ambiguity instead of
            guessing. Set YOLO=1 only when the spec is airtight.
          </p>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="07 / Monitor"
        lede="Optional TUI for live visibility into Ralph runs. Task progress, live logs, vim keys. Detach with q; Ralph keeps running."
        title="TUI monitor."
      >
        <div className="space-y-6">
          <div className="overflow-hidden border border-[hsl(var(--ink))]/10">
            <Image
              alt="Flow-Next TUI monitor"
              className="block h-auto w-full"
              height={750}
              priority={false}
              src="/flow/tui.png"
              width={1200}
            />
          </div>
          <div className="codex-panel">
            <div className="codex-panel__bar flex items-center gap-2">
              <span className="codex-panel__dot" />
              <span className="codex-panel__dot" />
              <span className="codex-panel__dot" />
            </div>
            <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.7]">
              {`bun add -g @gmickel/flow-next-tui
flow-next-tui  # auto-selects latest run`}
            </pre>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="08 / Review"
        lede="Same-model self-review is a blind mirror. Cross-model review uses a different model to read the implementer’s code. Different models make different mistakes."
        title="Cross-model review."
      >
        <div className="grid gap-px bg-[hsl(var(--ink))]/10 md:grid-cols-3">
          {[
            {
              name: 'OpenAI Codex CLI',
              reach: 'Cross-platform',
              detail:
                'GPT-5.2 High by default. Runs on Linux, macOS, Windows. Stream mode for long reviews.',
            },
            {
              name: 'GitHub Copilot CLI',
              reach: 'Cross-platform',
              detail:
                'GPT-5 + Claude Sonnet via Copilot enterprise. Native org integration.',
            },
            {
              name: 'RepoPrompt rp-cli',
              reach: 'macOS only',
              detail:
                'Visual context builder. Pick exactly which files the reviewer sees.',
            },
          ].map((b) => (
            <div className="bg-[hsl(var(--paper))] p-5 md:p-7" key={b.name}>
              <p className="atelier-mono text-[10px] text-[hsl(var(--rust))] uppercase tracking-[0.18em]">
                {b.reach}
              </p>
              <h3 className="atelier-display mt-2 font-medium text-[1.15rem] leading-[1.2]">
                {b.name}
              </h3>
              <p className="atelier-body mt-3 text-[0.9rem] text-[hsl(var(--ink))]/72 leading-[1.55]">
                {b.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="atelier-body mt-8 max-w-[62ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
          Both{' '}
          <code className="atelier-mono text-[hsl(var(--rust))]">
            plan-review
          </code>{' '}
          and{' '}
          <code className="atelier-mono text-[hsl(var(--rust))]">
            impl-review
          </code>{' '}
          loop until the reviewer returns SHIP. Configurable via{' '}
          <code className="atelier-mono text-[hsl(var(--rust))]">
            flowctl config set review.backend
          </code>
          .
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="09 / Prime"
        lede="Eight Sonnet scouts grade your repo across eight pillars in ~15-20 seconds. Target the Standardized level; go further only if agents live here full-time."
        title="/flow-next:prime — readiness."
      >
        <ol className="divide-y divide-[hsl(var(--ink))]/10 border-[hsl(var(--ink))]/10 border-y">
          {maturityLevels.map((l, i) => (
            <li
              className="grid grid-cols-12 gap-4 py-5 md:gap-6 md:py-6"
              key={l.name}
            >
              <div className="col-span-2 md:col-span-1">
                <span className="atelier-numerals text-[2.25rem] text-[hsl(var(--rust))] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-10 md:col-span-3">
                <h3 className="atelier-display font-medium text-[1.15rem] leading-[1.2]">
                  {l.name}
                </h3>
                <p className="atelier-mono mt-1 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                  {l.range}
                </p>
                {l.target ? (
                  <span className="atelier-mono mt-2 inline-block border-[hsl(var(--rust))] border-t-2 pt-1 text-[10px] text-[hsl(var(--rust))] uppercase tracking-[0.18em]">
                    Target
                  </span>
                ) : null}
              </div>
              <p className="atelier-body col-span-12 text-[0.95rem] text-[hsl(var(--ink))]/80 leading-[1.55] md:col-span-8">
                {l.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
            Eight parallel scouts
          </p>
          <div className="mt-4 [column-fill:balance] md:columns-2 md:gap-x-12">
            {primeScouts.map((s) => (
              <div
                className="break-inside-avoid border-[hsl(var(--ink))]/10 border-t py-3 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                key={s.name}
              >
                <div className="flex items-baseline gap-3">
                  <code className="atelier-mono text-[12px] text-[hsl(var(--rust))]">
                    {s.name}
                  </code>
                  <span className="atelier-mono text-[9.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
                    {s.kind}
                  </span>
                </div>
                <p className="atelier-body mt-1 text-[0.88rem] text-[hsl(var(--ink))]/68 leading-[1.45]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="10 / Storage"
        lede="Everything lives in .flow/. JSON metadata, Markdown content, one file per task. Merge-friendly, grep-friendly, diff-friendly."
        title="The .flow/ directory."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`.flow/
├── meta.json          # project config
├── config.json        # review backend, prefs
├── epics/
│   └── fn-1-add-oauth.md
├── specs/
│   └── fn-1.1-token-store.md
├── tasks/
│   └── fn-1.1-token-store.json
└── memory/             # opt-in, categorized
    ├── bug/             # build-errors, test-failures,
    │                    # runtime-errors, performance,
    │                    # security, integration, data, ui
    └── knowledge/       # architecture-patterns, conventions,
                         # tooling-decisions, workflow,
                         # best-practices`}
          </pre>
        </div>
        <p className="atelier-body mt-6 max-w-[60ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.55]">
          One file per task means merge conflicts are local, not global. JSON
          metadata on top, Markdown content below. Teams work parallel branches
          without coordination servers.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="12 / Commands"
        lede="Fourteen verbs. One disciplined workflow."
        title="Surface area."
      >
        <AtelierFeatureGrid cols={3} items={commands} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="12 / Principles"
        lede="Why it works where other orchestrators don’t."
        title="Principles, not magic."
      >
        <AtelierFeatureGrid cols={3} items={coreFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="13 / Opt-in"
        lede="Off by default. Enable via /flow-next:prime when you’re ready."
        title="Opt-in features."
      >
        <AtelierFeatureGrid items={optInFeatures} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="14 / Spec" title="Install + run.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList
            items={[
              { label: 'Runtime', value: 'Python 3.8+, git' },
              {
                label: 'Platforms',
                value: 'Claude Code, Droid, Codex, OpenCode',
              },
              {
                label: 'Review backends',
                value: 'Codex CLI, Copilot CLI, RepoPrompt',
              },
              {
                label: 'Subagents',
                value: '21 (11 Sonnet, 8 Opus, 2 Inherit)',
              },
              { label: 'Install format', value: 'Plugin marketplace' },
              { label: 'Uninstall', value: 'rm -rf .flow/' },
              { label: 'License', value: 'MIT' },
            ]}
          />
          <div className="atelier-body space-y-4 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Quick start
            </p>
            <div className="codex-panel">
              <div className="codex-panel__bar flex items-center gap-2">
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
              </div>
              <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.7]">
                {`/plugin marketplace add \\
  https://github.com/gmickel/flow-next
/plugin install flow-next

# first epic
/flow-next:plan add oauth login
/flow-next:work fn-1`}
              </pre>
            </div>
            <p className="atelier-mono pt-2 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps/flow"
              >
                See also: Flow (Beads predecessor) →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
