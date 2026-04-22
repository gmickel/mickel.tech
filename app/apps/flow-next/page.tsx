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
  version: '0.29.0',
  operatingSystem: 'Cross-platform',
  programmingLanguage: 'Python',
};

export const metadata: Metadata = {
  title: 'Flow-Next -- Zero-dep agent orchestration',
  description:
    'Multi-platform AI agent orchestration. Claude Code, Factory Droid, OpenAI Codex, OpenCode. 17 subagents, cross-model review, Ralph autonomous mode. Zero deps.',
  keywords: [
    'Claude Code plugin',
    'Factory Droid',
    'OpenAI Codex',
    'OpenCode',
    'AI agent orchestration',
    'task tracking',
    'zero dependencies',
    'cross-model review',
    'Ralph mode',
    'autonomous agents',
    'flowctl',
  ],
  openGraph: {
    title: 'Flow-Next · Mickel Tech',
    description:
      'Agents that finish what they start. Ralph mode, cross-model review, 17 subagents. Claude Code, Factory Droid, OpenAI Codex, OpenCode.',
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
      'An agent-readiness assessment. Six parallel Haiku scouts grade your repo across 6 pillars (style, build, testing, docs, dev env, code quality) in ~15 seconds. Proposes non-destructive improvements and calculates a maturity level from 1 (Minimal) to 5 (Autonomous).',
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
      '17 subagents (9 Haiku scouts, 8 Opus specialists)',
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
    role: 'Community port',
    install: `# See the port at:
# github.com/gmickel/flow-next-opencode`,
    features: [
      'Core plan / work / review loop',
      'Community-maintained',
      'Feature parity drifts behind',
    ],
    uninstall: 'rm -rf .flow/',
  },
];

const scouts = [
  {
    name: 'repo-scout',
    kind: 'Haiku',
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
    kind: 'Haiku',
    description: 'Surfaces modern best practices and common pitfalls.',
  },
  {
    name: 'docs-scout',
    kind: 'Haiku',
    description: 'Finds the exact framework/library docs relevant to the ask.',
  },
  {
    name: 'docs-gap-scout',
    kind: 'Haiku',
    description:
      'Flags which docs, comments, or READMEs will need updates after the change.',
  },
  {
    name: 'github-scout',
    kind: 'Haiku',
    description:
      'Searches public + private GitHub for implementations and examples.',
  },
  {
    name: 'epic-scout',
    kind: 'Haiku',
    description:
      'Cross-references other epics for dependencies and shared scope.',
  },
  {
    name: 'memory-scout',
    kind: 'Haiku',
    description:
      'Searches .flow/memory/ for pitfalls and conventions from prior work.',
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
    name: 'worker',
    kind: 'Opus',
    description:
      'Implements a single task with a fresh context window, re-anchored.',
  },
];

const primeScouts = [
  {
    name: 'tooling-scout',
    kind: 'Haiku',
    description: 'Biome, ESLint, Prettier, formatter config.',
  },
  {
    name: 'build-scout',
    kind: 'Haiku',
    description: 'Scripts, CI config, reproducible builds.',
  },
  {
    name: 'testing-scout',
    kind: 'Haiku',
    description: 'Test framework, coverage config, commands.',
  },
  {
    name: 'claude-md-scout',
    kind: 'Haiku',
    description: 'CLAUDE.md / AGENTS.md quality, completeness.',
  },
  {
    name: 'env-scout',
    kind: 'Haiku',
    description: 'Env templates, Docker, devcontainer setup.',
  },
  {
    name: 'workflow-scout',
    kind: 'Haiku',
    description: 'PR + issue templates, automation.',
  },
  {
    name: 'security-scout',
    kind: 'Haiku',
    description: 'GitHub settings, CODEOWNERS, dep updates.',
  },
  {
    name: 'observability-scout',
    kind: 'Haiku',
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
      'Persistent learnings survive compaction. Auto-captures pitfalls from NEEDS_WORK reviews.',
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
      '.flow/memory/ stores pitfalls.md, conventions.md, decisions.md. Auto-captures learnings from NEEDS_WORK reviews so the next task doesn’t repeat them.',
  },
  {
    title: 'DESIGN.md awareness',
    description:
      'Scouts read DESIGN.md if present. Pairs well with Google Stitch for design-system-aware frontend work. Opt-in at /flow-next:prime time.',
  },
];

const commands = [
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
    title: '/flow-next:prime',
    description: 'Assess codebase agent-readiness; propose fixes.',
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
          { label: 'Subagents', value: '17 (Haiku + Opus)' },
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
        lede="Twelve named subagents, split between Haiku for breadth and Opus for depth. Run in parallel so planning finishes in seconds, not minutes."
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
        lede="Six Haiku scouts grade your repo across six pillars in ~15 seconds. Target the Standardized level; go further only if agents live here full-time."
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
└── memory/
    ├── pitfalls.md
    ├── conventions.md
    └── decisions.md`}
          </pre>
        </div>
        <p className="atelier-body mt-6 max-w-[60ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.55]">
          One file per task means merge conflicts are local, not global. JSON
          metadata on top, Markdown content below. Teams work parallel branches
          without coordination servers.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="11 / Commands"
        lede="Nine verbs. One disciplined workflow."
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
              { label: 'Subagents', value: '17 (9 Haiku, 8 Opus)' },
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
