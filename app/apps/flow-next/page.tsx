import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  softwareAppSchema,
} from '@/lib/json-ld';

const FLOW_NEXT_FAQS = [
  {
    question: 'What is Flow-Next?',
    answer:
      'Flow-Next is a Claude Code plugin for AI agent orchestration with zero external dependencies. It provides bundled task tracking, dependency graphs, and automated code reviews.',
  },
  {
    question: 'What is /flow-next:epic-review?',
    answer:
      'Epic-review is a completion gate that runs when all tasks are done, before the epic closes. It compares implementation against the spec to catch gaps that per-task impl-review misses: decomposition gaps (spec items that never became tasks), cross-task requirements, and scope drift. Two-phase approach: extract requirements from spec, then verify each against code. Loops until SHIP.',
  },
  {
    question: 'What is /flow-next:prime?',
    answer:
      'Prime is an agent readiness assessment command that scans your codebase across 6 pillars (Style & Validation, Build System, Testing, Documentation, Dev Environment, Code Quality) and proposes non-destructive improvements. It uses 6 parallel haiku scouts for fast assessment (~15 seconds) and calculates a maturity level from 1-5.',
  },
  {
    question: 'How do I install Flow-Next?',
    answer:
      'Run /plugin marketplace add https://github.com/gmickel/gmickel-claude-marketplace then /plugin install flow-next. Installation takes about 30 seconds.',
  },
  {
    question: 'How do I uninstall Flow-Next?',
    answer:
      'Simply delete the .flow/ directory from your project. There are no hooks, daemons, or config files to clean up.',
  },
  {
    question: 'What are the requirements for Flow-Next?',
    answer:
      'Flow-Next requires Python 3.8+ and git. For cross-model reviews, use either OpenAI Codex CLI (cross-platform, GPT 5.2 High) or RepoPrompt rp-cli (macOS).',
  },
  {
    question: 'What is the difference between Codex and RepoPrompt reviews?',
    answer:
      'Both provide Carmack-level cross-model review with identical criteria. Codex CLI works cross-platform and uses GPT 5.2 High by default. RepoPrompt (rp-cli) is macOS-only but offers a visual builder for context selection. Choose based on your platform and preference.',
  },
  {
    question: 'What is the difference between Flow-Next and Beads?',
    answer:
      'Flow-Next bundles its own task tracking (flowctl.py) with zero external dependencies. No hooks, no daemons, no CLAUDE.md edits, no config files. Beads is a separate issue tracking CLI that the original Flow plugin can optionally integrate with. Choose Flow-Next for simpler setup and clean uninstall; choose Flow with Beads if you need full issue management features.',
  },
];

import { FlowNextSchematic } from './flow-next-schematic';

const APP_DATA = {
  name: 'Flow-Next',
  description:
    'Claude Code plugin for AI agent orchestration with zero external dependencies. Bundled task tracking, dependency graphs, multi-user safety, and automated code reviews.',
  slug: 'flow-next',
  category: 'DeveloperApplication',
  version: '0.1.0',
  operatingSystem: 'Cross-platform',
  programmingLanguage: 'Python',
};

export const metadata: Metadata = {
  title:
    'Flow-Next: Zero-Dependency AI Agent Orchestration | Claude Code Plugin',
  description:
    'Claude Code plugin for AI agent orchestration with zero dependencies. Bundled task tracking, dependency graphs, re-anchoring, and cross-model reviews. Install in 30 seconds, delete a folder to uninstall.',
  keywords: [
    'Claude Code plugin',
    'AI agent orchestration',
    'task tracking',
    'zero dependencies',
    'workflow automation',
    'code review',
    'developer tools',
    'Beads alternative',
    'flowctl',
    'OpenAI Codex',
    'cross-model review',
    'RepoPrompt',
    'agent readiness',
    'codebase assessment',
  ],
  openGraph: {
    title: 'Flow-Next: Zero-Dependency AI Agent Orchestration',
    description:
      'Claude Code plugin with bundled task tracking and AI agent orchestration. Zero deps. Multi-user safe. Delete a folder to uninstall.',
    type: 'website',
    url: 'https://mickel.tech/apps/flow-next',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow-Next: AI Agent Orchestration Plugin',
    description:
      'AI agents that finish what they start. Bundled task tracking, re-anchoring, cross-model reviews. Zero dependencies.',
    creator: '@gmickel',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/flow-next',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const commands = [
  {
    name: '/flow-next:plan',
    description: 'Research + produce epic with dependency-ordered tasks',
  },
  {
    name: '/flow-next:work',
    description: 'Execute epic task by task with re-anchoring',
  },
  {
    name: '/flow-next:interview',
    description: 'Deep interview to flesh out spec (optional)',
  },
  {
    name: '/flow-next:plan-review',
    description: 'Carmack-level plan review (Codex or RepoPrompt)',
  },
  {
    name: '/flow-next:impl-review',
    description: 'Carmack-level impl review (Codex or RepoPrompt)',
  },
  {
    name: '/flow-next:epic-review',
    description: 'Epic completion review before epic closes',
    isNew: true,
  },
  {
    name: '/flow-next:prime',
    description: 'Assess codebase agent-readiness, propose fixes',
  },
  {
    name: '/flow-next:sync',
    description: 'Update downstream tasks after implementation drift',
  },
  {
    name: '/flow-next:ralph-init',
    description: 'Scaffold autonomous operation loop (Ralph mode)',
  },
];

const features = [
  {
    name: 'Re-anchoring',
    description:
      'Before EVERY task, re-reads epic + task specs + git state. Per Anthropic guidance: agents must re-anchor to prevent drift.',
    icon: '🎯',
    accent: 'emerald',
  },
  {
    name: 'Multi-user Safe',
    description:
      'Scan-based IDs (no counters). Soft claims via assignee. Auto-detects actor from git email. Teams work parallel branches.',
    icon: '👥',
    accent: 'cyan',
  },
  {
    name: 'Zero Dependencies',
    description:
      'Bundled flowctl.py. No external CLI to install. No npm packages. Just Python 3.',
    icon: '📦',
    accent: 'emerald',
  },
  {
    name: 'Non-invasive',
    description:
      'No hooks. No daemons. No CLAUDE.md edits. Delete .flow/ to uninstall completely. No traces.',
    icon: '🧹',
    accent: 'cyan',
  },
  {
    name: 'CI-ready',
    description:
      'flowctl validate --all exits 1 on errors. Drop into pre-commit hooks or GitHub Actions.',
    icon: '🔒',
    accent: 'emerald',
  },
  {
    name: 'Dependency Graphs',
    description:
      'Tasks declare blockers. Epic-scout auto-detects cross-epic dependencies during planning.',
    icon: '🔗',
    accent: 'cyan',
  },
  {
    name: 'Plan-Sync',
    description:
      'Opt-in sync keeps downstream task specs updated when implementation drifts. Cross-epic mode available.',
    icon: '🔄',
    accent: 'emerald',
  },
  {
    name: 'Memory System',
    description:
      'Persistent learnings survive context compaction. Auto-captures pitfalls from NEEDS_WORK reviews.',
    icon: '🧠',
    accent: 'cyan',
  },
];

const testimonials = [
  {
    name: 'Claire Novotny',
    handle: 'clairernovotny',
    quote:
      "I've found it generating production-quality code. Far far better than any of the other tools I've tried so far.",
    url: 'https://x.com/clairernovotny/status/1886200988044026046',
    borderColor: 'border-l-emerald-500/60',
    handleColor: 'text-emerald-400/70',
    initialBg: 'bg-emerald-500/15 text-emerald-400',
  },
  {
    name: 'David P',
    handle: 'Lat3ntG3nius',
    quote:
      "Cross-model review is genius because it exploits model diversity as a feature, not a bug. Different models make different mistakes, so using them as mutual reviewers creates a safety net that single-model workflows can't match.",
    url: 'https://x.com/Lat3ntG3nius/status/1882438011868553581',
    borderColor: 'border-l-violet-500/60',
    handleColor: 'text-violet-400/70',
    initialBg: 'bg-violet-500/15 text-violet-400',
  },
  {
    name: 'Baran Güneysel',
    handle: 'chnoblist',
    quote:
      'As a designer, I always felt a gap between prototyping and delivering production-ready code, but flow-next bridges that gap and empowers me to ship with confidence.',
    url: 'https://x.com/chnoblist/status/1889599966391750888',
    borderColor: 'border-l-cyan-500/60',
    handleColor: 'text-cyan-400/70',
    initialBg: 'bg-cyan-500/15 text-cyan-400',
  },
  {
    name: 'Tiago Freitas',
    handle: 'tiagoefreitas',
    quote:
      'Flow-next is simply the best coding flow not even close, and still a side project!',
    url: 'https://x.com/tiagoefreitas/status/1883665283568869572',
    borderColor: 'border-l-emerald-500/60',
    handleColor: 'text-emerald-400/70',
    initialBg: 'bg-emerald-500/15 text-emerald-400',
  },
  {
    name: 'Ben',
    handle: 'BuildItWithBen',
    quote:
      'RepoPrompt + flow-next combo has been a force multiplier for me. Keep the updates flowing!',
    url: 'https://x.com/BuildItWithBen/status/1881534375655604424',
    borderColor: 'border-l-cyan-500/60',
    handleColor: 'text-cyan-400/70',
    initialBg: 'bg-cyan-500/15 text-cyan-400',
  },
  {
    name: 'Mark Feighery',
    handle: 'MarkFeighery1',
    quote: "Ok never mind I used it all and it's brilliant.",
    url: 'https://x.com/MarkFeighery1/status/1880331261099487684',
    borderColor: 'border-l-violet-500/60',
    handleColor: 'text-violet-400/70',
    initialBg: 'bg-violet-500/15 text-violet-400',
  },
  {
    name: 'dailyreader',
    handle: '010110O0',
    quote: 'Been running flow-next for the last week and boy am I happy!',
    url: 'https://x.com/010110O0/status/1882438011868553581',
    borderColor: 'border-l-emerald-500/60',
    handleColor: 'text-emerald-400/70',
    initialBg: 'bg-emerald-500/15 text-emerald-400',
  },
];

const planSteps = [
  { step: '01', action: 'Run 7 research scouts in parallel' },
  { step: '02', action: 'Gap analysis for edge cases' },
  { step: '03', action: 'Create epic + set epic dependencies' },
  { step: '04', action: 'Break into tasks + add doc update criteria' },
  { step: '05', action: 'Auto-review (Codex or RepoPrompt)' },
];

const workSteps = [
  { step: '01', action: 'Re-anchor: read epic + task + git state' },
  { step: '02', action: 'Implement following existing patterns' },
  { step: '03', action: 'Test + verify acceptance criteria' },
  { step: '04', action: 'Record summary + evidence via flowctl' },
  { step: '05', action: 'Loop to next ready task' },
];

const shipSteps = [
  { step: '01', action: 'All tasks done, review not shipped' },
  { step: '02', action: 'Extract requirements from spec' },
  { step: '03', action: 'Verify each requirement vs code' },
  { step: '04', action: 'Fix gaps inline (loops until SHIP)' },
  { step: '05', action: 'Set status=ship, epic closes' },
];

export default function FlowNextPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'Flow-Next', url: '/apps/flow-next' },
        ])}
      />
      <JsonLd data={faqSchema(FLOW_NEXT_FAQS)} />
      <div className="relative cursor-auto overflow-hidden">
        {/* Complex ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 10%, rgba(16,185,129,0.15), transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(6,182,212,0.12), transparent 45%),
              radial-gradient(ellipse 50% 30% at 50% 90%, rgba(16,185,129,0.08), transparent 40%),
              linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)
            `,
          }}
        />

        {/* Animated grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hero Section - More dramatic */}
        <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24">
          {/* Floating accent line */}
          <div
            aria-hidden
            className="absolute top-8 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent md:top-12"
          />

          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className="border-emerald-400/50 bg-emerald-950/80 text-emerald-300 backdrop-blur-sm"
              variant="outline"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              CLAUDE CODE PLUGIN
            </Badge>
            <Badge
              className="border-cyan-400/50 bg-cyan-950/80 text-cyan-300 backdrop-blur-sm"
              variant="outline"
            >
              🤖 RALPH MODE AVAILABLE
            </Badge>
          </div>

          <div className="mt-10 md:mt-14">
            {/* Logo and title with more presence */}
            <div className="flex items-center gap-5">
              <div className="relative">
                {/* Glow behind icon */}
                <div
                  aria-hidden
                  className="-inset-3 absolute rounded-full bg-emerald-500/20 blur-xl"
                />
                <svg
                  aria-hidden="true"
                  className="relative h-14 w-14 text-white md:h-16 md:w-16"
                  fill="none"
                  role="img"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Flow-Next Logo</title>
                  <rect
                    fill="none"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="10"
                    x="3"
                    y="4"
                  />
                  <rect
                    fill="none"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="10"
                    x="19"
                    y="18"
                  />
                  <path
                    d="M13 9h4l6 9"
                    stroke="#10b981"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M19 18l4-2-2 4"
                    fill="#10b981"
                    stroke="#10b981"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5.5 9l2 2 3-4"
                    opacity="0.7"
                    stroke="#10b981"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-5xl text-white tracking-tight md:text-6xl">
                  Flow-Next
                </h1>
                <p className="mt-1 font-mono text-emerald-400 text-sm uppercase tracking-widest md:text-base">
                  Zero-Dep Agent Orchestration
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                className="glow-link font-mono text-[11px] uppercase tracking-wider"
                href="/apps"
              >
                ← All Apps
              </Link>
              <Separator className="h-4 bg-white/10" orientation="vertical" />
              <Link
                className="glow-link font-mono text-[11px] uppercase tracking-wider"
                href="/apps/flow"
              >
                Flow (Beads version)
              </Link>
            </div>

            {/* Value proposition - terminal style card */}
            <div className="relative mt-12 max-w-3xl">
              <div className="-inset-px absolute rounded-lg bg-gradient-to-r from-emerald-500/50 via-cyan-500/30 to-emerald-500/50 blur-sm" />
              <div className="relative rounded-lg border border-emerald-500/30 bg-black/80 p-6 backdrop-blur-sm md:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-white/40 text-xs">
                    flow-next.sh
                  </span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed md:text-xl">
                  <span className="text-emerald-400">One task at a time</span>{' '}
                  with full review cycles, or{' '}
                  <span className="text-cyan-400">throw the whole epic</span> at
                  it and walk away.{' '}
                  <span className="text-white/60">
                    Either way: re-anchoring, evidence, cross-model review.
                  </span>
                </p>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Planning ensures every task{' '}
                  <span className="font-mono text-emerald-400">
                    fits the context window
                  </span>
                  . Re-anchoring after each task—and after compaction—means{' '}
                  <span className="font-mono text-cyan-400">zero drift</span>.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 border-white/10 border-t pt-6">
                  <code className="rounded bg-emerald-500/10 px-3 py-2 font-mono text-emerald-400 text-sm">
                    /flow-next:work fn-1.1
                    <span className="block text-white/40 text-xs">
                      single task
                    </span>
                  </code>
                  <code className="rounded bg-cyan-500/10 px-3 py-2 font-mono text-cyan-400 text-sm">
                    /flow-next:work fn-1
                    <span className="block text-white/40 text-xs">
                      entire epic
                    </span>
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* OpenCode port callout */}
              <a
                className="group inline-flex items-center gap-3 rounded border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10"
                href="https://github.com/gmickel/flow-next-opencode"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-mono text-cyan-400 text-xs uppercase">
                  🧪 New
                </span>
                <span className="text-cyan-200/80 text-sm">
                  OpenCode port available
                </span>
                <svg
                  className="h-3.5 w-3.5 text-cyan-400/60 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* CTA buttons - more prominent */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded border border-emerald-500 bg-emerald-500/10 px-8 py-4 font-mono text-emerald-400 text-sm uppercase tracking-wider transition-all hover:bg-emerald-500/20"
                href="https://github.com/gmickel/gmickel-claude-marketplace"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="-translate-x-full absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-8 py-4 font-mono text-sm text-white uppercase tracking-wider transition-all hover:border-white/40 hover:bg-white/10"
                href="https://github.com/gmickel/gmickel-claude-marketplace/tree/main/plugins/flow-next"
                rel="noopener noreferrer"
                target="_blank"
              >
                Documentation →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials - Social proof wall */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Signal Intercepts
            </p>
            <h2 className="mt-3 font-bold text-3xl text-white md:text-4xl">
              What people are saying
            </h2>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonials.map((t) => (
              <a
                className={`group mb-4 block break-inside-avoid rounded-lg border border-white/10 border-l-2 bg-white/[0.02] p-4 transition-all hover:border-white/20 hover:bg-white/[0.04] ${t.borderColor}`}
                href={t.url}
                key={t.handle}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-medium text-xs ${t.initialBg}`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-sm text-white">
                      {t.name}
                    </p>
                    <p className={`font-mono text-xs ${t.handleColor}`}>
                      @{t.handle}
                    </p>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="ml-auto h-4 w-4 shrink-0 text-white/20 transition-colors group-hover:text-white/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* WHY IT WORKS - Key Differentiators */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          {/* Section header */}
          <div className="mb-12 text-center">
            <Badge
              className="mb-4 border-emerald-400/50 bg-emerald-950/80 text-emerald-300 backdrop-blur-sm"
              variant="outline"
            >
              WHY IT ACTUALLY WORKS
            </Badge>
            <h2 className="font-bold text-3xl text-white md:text-4xl">
              The secret:{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                you control the granularity
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Work task-by-task with full review cycles for maximum control. Or
              throw the whole epic at it and let Flow-Next handle everything.
              Same guarantees either way.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Pillar 1: Flexible Execution */}
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-emerald-950/20 to-transparent p-6 transition-all hover:border-emerald-500/50">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_50%)]"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl">
                    🎛️
                  </div>
                  <Badge
                    className="border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                    variant="outline"
                  >
                    YOUR CHOICE
                  </Badge>
                </div>
                <h3 className="font-bold text-white text-xl">
                  Flexible Execution
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Same workflow, different scopes. Both get re-anchoring,
                  reviews, and evidence.
                </p>

                {/* Side-by-side commands */}
                <div className="mt-5 space-y-3">
                  <div className="overflow-hidden rounded-lg border border-emerald-500/20 bg-black/60">
                    <div className="flex items-center justify-between border-emerald-500/10 border-b bg-emerald-500/5 px-3 py-1.5">
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                        Single Task
                      </span>
                      <span className="text-white/30 text-xs">
                        with reviews
                      </span>
                    </div>
                    <code className="block p-3 font-mono text-sm text-white">
                      /flow-next:work{' '}
                      <span className="text-emerald-400">fn-1.1</span>
                    </code>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-cyan-500/20 bg-black/60">
                    <div className="flex items-center justify-between border-cyan-500/10 border-b bg-cyan-500/5 px-3 py-1.5">
                      <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                        Entire Epic
                      </span>
                      <span className="text-white/30 text-xs">automated</span>
                    </div>
                    <code className="block p-3 font-mono text-sm text-white">
                      /flow-next:work{' '}
                      <span className="text-cyan-400">fn-1</span>
                    </code>
                  </div>
                </div>

                <p className="mt-4 text-white/40 text-xs">
                  → Pick your level of supervision. The workflow stays the same.
                </p>
              </div>
            </div>

            {/* Pillar 2: No Context Worries */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/60 via-cyan-950/20 to-transparent p-6 transition-all hover:border-cyan-500/50">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl">
                    🧠
                  </div>
                  <Badge
                    className="border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
                    variant="outline"
                  >
                    AUTOMATIC
                  </Badge>
                </div>
                <h3 className="font-bold text-white text-xl">
                  No Context Worries
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Planning ensures tasks fit context. Re-anchoring handles the
                  rest.
                </p>

                {/* Visual explanation */}
                <div className="mt-5 space-y-2">
                  {[
                    {
                      icon: '📐',
                      label: 'Tasks sized at planning',
                      desc: 'Every task fits one work iteration',
                    },
                    {
                      icon: '🔄',
                      label: 'Re-anchor every task',
                      desc: 'Fresh context from .flow/ specs',
                    },
                    {
                      icon: '📦',
                      label: 'Survives compaction',
                      desc: 'Re-anchor after summarization too',
                    },
                  ].map((item) => (
                    <div
                      className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                      key={item.label}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <p className="font-mono text-cyan-400 text-xs">
                          {item.label}
                        </p>
                        <p className="text-white/40 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-white/40 text-xs">
                  → Never worry about 200K token limits again.
                </p>
              </div>
            </div>

            {/* Pillar 3: Reviewer Safety Net */}
            <div className="group relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/60 via-violet-950/20 to-transparent p-6 transition-all hover:border-violet-500/50">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_50%)]"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-2xl">
                    🛡️
                  </div>
                  <Badge
                    className="border-violet-400/40 bg-violet-500/10 text-violet-300"
                    variant="outline"
                  >
                    SAFETY NET
                  </Badge>
                </div>
                <h3 className="font-bold text-white text-xl">
                  Two Models &gt; One
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  If drift happens despite re-anchoring, a different model
                  catches it.
                </p>

                {/* Flow visualization */}
                <div className="mt-5 overflow-hidden rounded-lg border border-violet-500/20 bg-black/60 p-4">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        1
                      </span>
                      <span className="text-white/70">
                        Claude implements task
                      </span>
                    </div>
                    <div className="ml-3 border-violet-500/20 border-l-2 py-1 pl-4">
                      <span className="text-white/40">
                        even with re-anchoring, drift can happen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                        2
                      </span>
                      <span className="text-white/70">
                        GPT reviews via Codex or RepoPrompt
                      </span>
                    </div>
                    <div className="ml-3 border-violet-500/20 border-l-2 py-1 pl-4">
                      <span className="text-white/40">
                        blocks until{' '}
                        <code className="text-violet-400">SHIP</code>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        ✓
                      </span>
                      <span className="text-white/70">
                        Drift caught before it compounds
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-white/40 text-xs">
                  → Two models catch what one misses.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-violet-500/5">
            <div className="flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-8">
              <div>
                <p className="font-semibold text-lg text-white">
                  The result: agents that actually finish what they start
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Pre-sized tasks + re-anchoring + cross-model review = minimal
                  drift, maximum reliability
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <code className="rounded bg-emerald-500/10 px-4 py-2 font-mono text-emerald-400 text-sm">
                  Plan
                </code>
                <span className="self-center text-white/30">→</span>
                <code className="rounded bg-cyan-500/10 px-4 py-2 font-mono text-cyan-400 text-sm">
                  Work
                </code>
                <span className="self-center text-white/30">→</span>
                <code className="rounded bg-violet-500/10 px-4 py-2 font-mono text-sm text-violet-400">
                  Review
                </code>
                <span className="self-center text-white/30">→</span>
                <code className="rounded bg-emerald-500/10 px-4 py-2 font-mono text-emerald-400 text-sm">
                  Done
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Diagonal layout */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="font-mono text-[11px] text-red-400/80 uppercase tracking-[0.3em]">
                The Problem
              </p>
              <h2 className="mt-3 font-bold text-3xl text-white leading-tight md:text-4xl">
                Process failures,
                <br />
                <span className="text-white/50">not model failures</span>
              </h2>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {[
                  'Forgetting the plan mid-implementation',
                  'Losing context in long sessions',
                  'Producing work that drifts from original intent',
                  'Skipping edge cases that were obvious in hindsight',
                ].map((problem, i) => (
                  <div
                    className="group flex items-center gap-4 rounded-lg border border-red-500/10 bg-red-500/5 p-4 transition-colors hover:border-red-500/20"
                    key={problem}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 font-mono text-red-400 text-xs">
                      ×
                    </span>
                    <span className="text-white/80">{problem}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5">
                <p className="text-white/90">
                  <span className="font-mono text-emerald-400">Flow-Next</span>{' '}
                  gives agents structured task graphs, forces re-anchoring
                  before every task, records evidence of completion, and runs
                  cross-model reviews.
                </p>
                <p className="mt-2 font-mono text-emerald-400 text-sm">
                  → Agents that finish what they start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Bento grid style */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Key Features
            </p>
            <h2 className="mt-3 font-bold text-3xl text-white md:text-4xl">
              Built for reliability
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                className={`group hover:-translate-y-1 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 ${
                  feature.accent === 'emerald'
                    ? 'border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent hover:border-emerald-500/40'
                    : 'border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent hover:border-cyan-500/40'
                }`}
                key={feature.name}
              >
                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 h-20 w-20 ${
                    feature.accent === 'emerald'
                      ? 'bg-emerald-500/5'
                      : 'bg-cyan-500/5'
                  }`}
                  style={{
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }}
                />
                <div className="relative">
                  <span className="text-3xl">{feature.icon}</span>
                  <h3
                    className={`mt-4 font-semibold text-lg ${
                      feature.accent === 'emerald'
                        ? 'text-emerald-400'
                        : 'text-cyan-400'
                    }`}
                  >
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commands - Horizontal scroll on mobile */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-8">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Commands
            </p>
            <h2 className="mt-3 font-bold text-2xl text-white md:text-3xl">
              Eight commands, complete workflow
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {commands.map((cmd, i) => (
              <div
                className="group relative rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5"
                key={cmd.name}
              >
                {'isNew' in cmd && cmd.isNew && (
                  <div className="absolute top-2 right-2">
                    <Badge
                      className="border-amber-400/40 bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-300"
                      variant="outline"
                    >
                      NEW
                    </Badge>
                  </div>
                )}
                <code className="block font-mono text-emerald-400 text-sm group-hover:text-emerald-300">
                  {cmd.name}
                </code>
                <p className="mt-2 text-sm text-white/50">{cmd.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Workflow - Three phases with connecting lines */}
        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Core Workflow
            </p>
            <h2 className="mt-3 font-bold text-3xl text-white md:text-4xl">
              Plan → Work → Ship
            </h2>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Plan */}
            <Card className="overflow-hidden border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 to-transparent">
              <CardHeader className="border-emerald-500/20 border-b pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded-full bg-emerald-500/20 px-4 py-2 font-mono text-emerald-400 text-lg">
                    /flow-next:plan
                  </code>
                  <Badge
                    className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                    variant="outline"
                  >
                    STEP 1
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-white text-xl">
                  Research and plan
                </CardTitle>
                <p className="mt-1 text-sm text-white/50">
                  Creates{' '}
                  <code className="text-emerald-400">.flow/specs/fn-N.md</code>
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3">
                  {planSteps.map((item) => (
                    <li className="flex items-start gap-4" key={item.step}>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-emerald-400 text-xs">
                        {item.step}
                      </span>
                      <span className="text-sm text-white/70">
                        {item.action}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Work */}
            <Card className="overflow-hidden border-cyan-500/30 bg-gradient-to-br from-cyan-950/50 to-transparent">
              <CardHeader className="border-cyan-500/20 border-b pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded-full bg-cyan-500/20 px-4 py-2 font-mono text-cyan-400 text-lg">
                    /flow-next:work
                  </code>
                  <Badge
                    className="border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                    variant="outline"
                  >
                    STEP 2
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-white text-xl">
                  Execute with re-anchoring
                </CardTitle>
                <p className="mt-1 text-sm text-white/50">
                  Re-reads specs before each task
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3">
                  {workSteps.map((item) => (
                    <li className="flex items-start gap-4" key={item.step}>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-cyan-400 text-xs">
                        {item.step}
                      </span>
                      <span className="text-sm text-white/70">
                        {item.action}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Ship */}
            <Card className="overflow-hidden border-amber-500/30 bg-gradient-to-br from-amber-950/50 to-transparent">
              <CardHeader className="border-amber-500/20 border-b pb-4">
                <div className="flex items-center justify-between">
                  <code className="whitespace-nowrap rounded-full bg-amber-500/20 px-3 py-2 font-mono text-amber-400 text-base">
                    /flow-next:epic-review
                  </code>
                  <Badge
                    className="border-amber-500/40 bg-amber-500/10 text-amber-400"
                    variant="outline"
                  >
                    STEP 3
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-white text-xl">
                  Verify before shipping
                </CardTitle>
                <p className="mt-1 text-sm text-white/50">
                  Catches gaps per-task review misses
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="space-y-3">
                  {shipSteps.map((item) => (
                    <li className="flex items-start gap-4" key={item.step}>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-mono text-amber-400 text-xs">
                        {item.step}
                      </span>
                      <span className="text-sm text-white/70">
                        {item.action}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Scouts - Planning Intelligence */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <Badge
              className="mb-4 border-emerald-400/50 bg-emerald-950/80 text-emerald-300 backdrop-blur-sm"
              variant="outline"
            >
              17 SUBAGENTS
            </Badge>
            <h2 className="font-bold text-3xl text-white md:text-4xl">
              Planning Intelligence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Seven research scouts run in parallel during planning, gathering
              context from multiple sources before a single line of code is
              written.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'repo-scout',
                desc: 'Finds existing patterns and conventions',
                model: 'opus',
                color: 'emerald',
              },
              {
                name: 'practice-scout',
                desc: 'Gathers modern best practices',
                model: 'opus',
                color: 'cyan',
              },
              {
                name: 'docs-scout',
                desc: 'Finds relevant framework docs',
                model: 'opus',
                color: 'emerald',
              },
              {
                name: 'github-scout',
                desc: 'Cross-repo code search',
                model: 'opus',
                color: 'cyan',
              },
              {
                name: 'epic-scout',
                desc: 'Detects epic dependencies',
                model: 'haiku',
                color: 'emerald',
                isNew: true,
              },
              {
                name: 'docs-gap-scout',
                desc: 'Identifies docs needing updates',
                model: 'haiku',
                color: 'cyan',
                isNew: true,
              },
              {
                name: 'memory-scout',
                desc: 'Retrieves project learnings',
                model: 'haiku',
                color: 'emerald',
              },
              {
                name: 'gap-analyst',
                desc: 'Finds missing requirements',
                model: 'opus',
                color: 'cyan',
              },
            ].map((scout) => (
              <div
                className={`group hover:-translate-y-1 relative overflow-hidden rounded-xl border p-4 transition-all ${
                  scout.color === 'emerald'
                    ? 'border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent hover:border-emerald-500/40'
                    : 'border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent hover:border-cyan-500/40'
                }`}
                key={scout.name}
              >
                {scout.isNew && (
                  <div className="absolute top-2 right-2">
                    <Badge
                      className="border-amber-400/40 bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-300"
                      variant="outline"
                    >
                      NEW
                    </Badge>
                  </div>
                )}
                <code
                  className={`font-mono text-sm ${
                    scout.color === 'emerald'
                      ? 'text-emerald-400'
                      : 'text-cyan-400'
                  }`}
                >
                  {scout.name}
                </code>
                <p className="mt-1 text-sm text-white/60">{scout.desc}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                      scout.model === 'haiku'
                        ? 'bg-violet-500/20 text-violet-300'
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {scout.model}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-violet-500/5">
            <div className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
              <div>
                <p className="font-semibold text-white">
                  9 scouts use Haiku for speed, 4 use Opus for depth
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Plus: worker, plan-sync, quality-auditor, context-scout = 17
                  total subagents
                </p>
              </div>
              <div className="flex gap-2">
                <span className="rounded bg-violet-500/20 px-3 py-1.5 font-mono text-sm text-violet-300">
                  haiku × 9
                </span>
                <span className="rounded bg-white/10 px-3 py-1.5 font-mono text-sm text-white/60">
                  opus × 8
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Readiness Assessment - NEW */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/50 via-emerald-950/30 to-transparent">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_40%)]"
            />

            <div className="relative p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge
                  className="border-violet-400/50 bg-violet-500/10 text-violet-300 backdrop-blur-sm"
                  variant="outline"
                >
                  <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-violet-400" />
                  NEW IN 0.18
                </Badge>
                <Badge
                  className="border-emerald-400/40 bg-emerald-950/60 text-emerald-300"
                  variant="outline"
                >
                  Inspired by Factory.ai
                </Badge>
              </div>

              <h2 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                Agent Readiness
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Assessment
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
                Agents waste cycles when codebases lack pre-commit hooks,
                documented env vars, or clear conventions. These are{' '}
                <span className="text-violet-400">environment problems</span>,
                not agent problems.{' '}
                <code className="text-emerald-400">/flow-next:prime</code> scans
                your codebase and proposes fixes.
              </p>

              {/* Two column layout */}
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                {/* Left: Six Pillars */}
                <div>
                  <h3 className="mb-4 font-semibold text-lg text-white">
                    Six Assessment Pillars
                  </h3>
                  <div className="space-y-2">
                    {[
                      {
                        name: 'Style & Validation',
                        desc: 'Linters, formatters, type checking, pre-commit',
                      },
                      {
                        name: 'Build System',
                        desc: 'Build commands, CI, lock files',
                      },
                      {
                        name: 'Testing',
                        desc: 'Test framework, coverage, E2E',
                      },
                      {
                        name: 'Documentation',
                        desc: 'README, CLAUDE.md, ADRs',
                      },
                      {
                        name: 'Dev Environment',
                        desc: '.env.example, Docker, devcontainer',
                      },
                      {
                        name: 'Code Quality',
                        desc: 'CONTRIBUTING, PR templates, CODEOWNERS',
                      },
                    ].map((pillar, i) => (
                      <div
                        className="flex items-start gap-3 rounded-lg border border-violet-500/10 bg-violet-500/5 p-3"
                        key={pillar.name}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 font-mono text-violet-400 text-xs">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-mono text-sm text-violet-400">
                            {pillar.name}
                          </p>
                          <p className="text-sm text-white/50">{pillar.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Maturity Levels + Quick Start */}
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 font-semibold text-lg text-white">
                      Maturity Levels
                    </h3>
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40">
                      <div className="divide-y divide-white/5">
                        {[
                          { level: 1, name: 'Minimal', score: '<30%' },
                          { level: 2, name: 'Functional', score: '30-49%' },
                          {
                            level: 3,
                            name: 'Standardized',
                            score: '50-69%',
                            target: true,
                          },
                          { level: 4, name: 'Optimized', score: '70-84%' },
                          { level: 5, name: 'Autonomous', score: '85%+' },
                        ].map((item) => (
                          <div
                            className={`flex items-center justify-between px-4 py-2 ${item.target ? 'bg-emerald-500/10' : ''}`}
                            key={item.level}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs ${item.target ? 'bg-emerald-500/30 text-emerald-400' : 'bg-white/10 text-white/50'}`}
                              >
                                {item.level}
                              </span>
                              <span
                                className={
                                  item.target
                                    ? 'text-emerald-400'
                                    : 'text-white/70'
                                }
                              >
                                {item.name}
                              </span>
                              {item.target && (
                                <Badge
                                  className="border-emerald-400/40 bg-emerald-500/10 text-[10px] text-emerald-300"
                                  variant="outline"
                                >
                                  TARGET
                                </Badge>
                              )}
                            </div>
                            <span className="font-mono text-sm text-white/40">
                              {item.score}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick start terminal */}
                  <div className="overflow-hidden rounded-lg border border-violet-500/30 bg-black/60">
                    <div className="flex items-center gap-2 border-violet-500/10 border-b bg-violet-500/5 px-4 py-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/60" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                      <div className="h-3 w-3 rounded-full bg-green-500/60" />
                      <span className="ml-2 font-mono text-white/40 text-xs">
                        prime.sh
                      </span>
                    </div>
                    <div className="p-4">
                      <code className="block whitespace-pre font-mono text-sm leading-relaxed">
                        <span className="text-white/40">
                          # Full assessment + interactive fixes
                        </span>
                        {'\n'}
                        <span className="text-violet-400">
                          /flow-next:prime
                        </span>
                        {'\n\n'}
                        <span className="text-white/40"># Report only</span>
                        {'\n'}
                        <span className="text-emerald-400">
                          /flow-next:prime --report-only
                        </span>
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { value: '6', label: 'Haiku scouts' },
                  { value: '36', label: 'Criteria checked' },
                  { value: '~15s', label: 'Assessment time' },
                  { value: '∞', label: 'Templates included' },
                ].map((stat) => (
                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center"
                    key={stat.label}
                  >
                    <p className="font-mono text-2xl text-violet-400">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ralph Autonomous Mode - Major Feature */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/50 via-emerald-950/30 to-transparent">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_40%)]"
            />

            {/* Header with image */}
            <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:gap-12">
              {/* Left: Text content */}
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Badge
                    className="border-cyan-400/50 bg-cyan-500/10 text-cyan-300 backdrop-blur-sm"
                    variant="outline"
                  >
                    <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    AUTONOMOUS MODE
                  </Badge>
                  <Badge
                    className="border-amber-400/40 bg-amber-950/60 text-amber-300"
                    variant="outline"
                  >
                    AFK-Ready
                  </Badge>
                </div>

                <h2 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                  Ralph Mode
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Agents that run overnight
                  </span>
                </h2>

                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  Opt-in autonomous operation built on top of the flow-next
                  plan/work loop. Orchestrates complete cycles while you
                  sleep—fresh context windows every iteration prevent drift.
                  Attempt backstops block stuck tasks automatically.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    {
                      icon: '🎯',
                      title: 'Smart Selector',
                      desc: 'flowctl next chooses plan gate vs work gate',
                    },
                    {
                      icon: '🔄',
                      title: 'Fresh Context',
                      desc: 'New session per iteration prevents 200K token drift',
                    },
                    {
                      icon: '🛡️',
                      title: 'Auto Backstop',
                      desc: 'Blocks tasks after N failed attempts',
                    },
                    {
                      icon: '📦',
                      title: 'Repo-Local',
                      desc: 'Everything in scripts/ralph/ - no external services',
                    },
                  ].map((item) => (
                    <div
                      className="flex items-start gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-colors hover:border-cyan-500/20 hover:bg-cyan-500/5"
                      key={item.title}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quality Gates - Production-grade enforcement */}
                <div className="mt-8 overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-transparent">
                  <div className="flex items-center justify-between border-emerald-500/20 border-b bg-emerald-500/5 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🔐</span>
                      <span className="font-semibold text-emerald-400 text-sm uppercase tracking-wider">
                        Quality Gates
                      </span>
                    </div>
                    <Badge
                      className="border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                      variant="outline"
                    >
                      Production-Grade
                    </Badge>
                  </div>
                  <div className="space-y-4 p-5">
                    <p className="text-sm text-white/70">
                      Deterministic enforcement prevents agents from skipping
                      steps or drifting from the workflow.
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          label: 'Receipt-Based Gating',
                          desc: 'Every review must produce a receipt proving it ran. No receipt = no progress.',
                        },
                        {
                          label: 'Review Until SHIP',
                          desc: "Reviews don't just flag issues—they block until the reviewer returns SHIP.",
                        },
                        {
                          label: 'Workflow Enforcement',
                          desc: 'Guard rails ensure the agent follows the prescribed flow exactly.',
                        },
                      ].map((gate) => (
                        <div
                          className="flex items-start gap-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 p-3"
                          key={gate.label}
                        >
                          <span className="mt-0.5 text-emerald-400">✓</span>
                          <div>
                            <p className="font-mono text-emerald-400 text-xs uppercase tracking-wide">
                              {gate.label}
                            </p>
                            <p className="mt-0.5 text-sm text-white/50">
                              {gate.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick start */}
                <div className="mt-8 overflow-hidden rounded-lg border border-emerald-500/30 bg-black/60">
                  <div className="flex items-center gap-2 border-emerald-500/10 border-b bg-emerald-500/5 px-4 py-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    <span className="ml-2 font-mono text-white/40 text-xs">
                      quickstart.sh
                    </span>
                  </div>
                  <div className="p-4">
                    <code className="block whitespace-pre font-mono text-sm leading-relaxed">
                      <span className="text-white/40">
                        # Scaffold autonomous harness
                      </span>
                      {'\n'}
                      <span className="text-cyan-400">
                        /flow-next:ralph-init
                      </span>
                      {'\n\n'}
                      <span className="text-white/40">
                        # Run one iteration (interactive)
                      </span>
                      {'\n'}
                      <span className="text-emerald-400">
                        ./scripts/ralph/ralph_once.sh
                      </span>
                      {'\n\n'}
                      <span className="text-white/40">
                        # Run overnight loop
                      </span>
                      {'\n'}
                      <span className="text-emerald-400">
                        ./scripts/ralph/ralph.sh
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              {/* Right: Image + Loop diagram */}
              <div className="relative z-10 space-y-6">
                {/* Ralph image */}
                <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-black/40">
                  <Image
                    alt="Ralph Wiggum - autonomous agent mascot"
                    className="h-auto w-full"
                    height={360}
                    src="/ralph.avif"
                    width={640}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Loop visualization */}
                <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60">
                  <div className="border-emerald-500/10 border-b bg-emerald-500/5 px-4 py-2">
                    <span className="font-mono text-emerald-400 text-xs uppercase tracking-wider">
                      Ralph Loop Architecture
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                          1
                        </span>
                        <div>
                          <p className="text-white">
                            <code className="text-cyan-400">flowctl next</code>{' '}
                            selects unit
                          </p>
                          <p className="text-white/40 text-xs">
                            plan gate or work gate
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 border-white/10 border-l-2 pl-4">
                        <div className="space-y-2 text-white/60 text-xs">
                          <p>
                            <span className="text-emerald-400">plan:</span> runs{' '}
                            <code className="text-emerald-400">
                              /flow-next:plan
                            </code>{' '}
                            + review loop until SHIP
                          </p>
                          <p>
                            <span className="text-cyan-400">work:</span> runs{' '}
                            <code className="text-cyan-400">
                              /flow-next:work
                            </code>{' '}
                            for one task until pass
                          </p>
                          <p>
                            <span className="text-white/40">none:</span>{' '}
                            <code className="text-amber-400">COMPLETE</code> —
                            all epics done
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          2
                        </span>
                        <div>
                          <p className="text-white">Fresh Claude session</p>
                          <p className="text-white/40 text-xs">
                            clean context window
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                          3
                        </span>
                        <div>
                          <p className="text-white">Record attempt + loop</p>
                          <p className="text-white/40 text-xs">
                            auto-block if stuck
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Config and safety */}
            <div className="relative z-10 border-white/5 border-t bg-black/20 p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Configuration */}
                <div>
                  <h3 className="flex items-center gap-3 font-semibold text-white text-xl">
                    <span className="text-2xl">⚙️</span>
                    Configuration
                  </h3>
                  <div className="mt-4 space-y-2 rounded-lg border border-white/10 bg-white/[0.02] p-4 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">BRANCH_MODE</span>
                      <span className="text-emerald-400">new</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">PLAN_REVIEW</span>
                      <span className="text-cyan-400">codex | rp | none</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">WORK_REVIEW</span>
                      <span className="text-cyan-400">codex | rp | none</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">MAX_ITERATIONS</span>
                      <span className="text-white">25</span>
                    </div>
                    <div className="flex justify-between border-white/10 border-t pt-2">
                      <span className="text-white/50">YOLO</span>
                      <span className="text-amber-400">0 (safe default)</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/50">
                    Edit{' '}
                    <code className="text-white/70">
                      scripts/ralph/config.env
                    </code>{' '}
                    to customize
                  </p>
                </div>

                {/* Safety & Uninstall */}
                <div>
                  <h3 className="flex items-center gap-3 font-semibold text-white text-xl">
                    <span className="text-2xl">🛡️</span>
                    Safety & Uninstall
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                      <p className="font-semibold text-amber-400 text-sm">
                        YOLO Mode Warning
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        YOLO=1 skips permission prompts. Use in
                        sandbox/container only. No secrets in env.
                      </p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                      <p className="font-semibold text-emerald-400 text-sm">
                        Uninstall Ralph
                      </p>
                      <code className="mt-2 block rounded bg-black/40 px-3 py-2 font-mono text-sm text-white">
                        rm -rf scripts/ralph/
                      </code>
                      <p className="mt-2 text-white/40 text-xs">
                        Removes harness + vendored flowctl. .flow/ remains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TUI Monitor - Real-time visibility */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950">
            {/* Subtle scan lines effect */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.5) 2px, rgba(6,182,212,0.5) 4px)',
              }}
            />

            <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:gap-12">
              {/* Left: Screenshot */}
              <div className="relative z-10">
                <div className="overflow-hidden rounded-xl border border-cyan-500/30 bg-black shadow-2xl shadow-cyan-500/10">
                  {/* Terminal chrome */}
                  <div className="flex items-center gap-2 border-cyan-500/10 border-b bg-cyan-500/5 px-4 py-2.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 font-mono text-cyan-400/60 text-xs">
                      flow-next-tui
                    </span>
                  </div>
                  <Image
                    alt="flow-next-tui terminal interface showing task progress, live logs, and run state"
                    className="h-auto w-full"
                    height={600}
                    quality={90}
                    src="/flow/tui.png"
                    width={1000}
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="relative z-10 flex flex-col justify-center">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Badge
                    className="border-cyan-400/50 bg-cyan-500/10 text-cyan-300 backdrop-blur-sm"
                    variant="outline"
                  >
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                    REAL-TIME MONITOR
                  </Badge>
                  <Badge
                    className="border-emerald-400/40 bg-emerald-950/60 text-emerald-300"
                    variant="outline"
                  >
                    Optional
                  </Badge>
                </div>

                <h2 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                  Terminal UI
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    for Ralph Runs
                  </span>
                </h2>

                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  Watch your autonomous runs in real-time. Task progress,
                  streaming logs, and run state—all in a beautiful terminal
                  interface.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: '📋',
                      label: 'Task Progress',
                      desc: 'Visual status tracking',
                    },
                    {
                      icon: '📜',
                      label: 'Live Logs',
                      desc: 'Streaming output',
                    },
                    { icon: '🎨', label: 'Themes', desc: 'Dark & light modes' },
                    { icon: '⌨️', label: 'Vim Keys', desc: 'j/k navigation' },
                  ].map((item) => (
                    <div
                      className="rounded-lg border border-white/5 bg-white/[0.02] p-3 backdrop-blur-sm"
                      key={item.label}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <p className="mt-1 font-semibold text-sm text-white">
                        {item.label}
                      </p>
                      <p className="text-white/50 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Install command */}
                <div className="mt-8 overflow-hidden rounded-lg border border-cyan-500/30 bg-black/60">
                  <div className="flex items-center gap-2 border-cyan-500/10 border-b bg-cyan-500/5 px-4 py-2">
                    <span className="font-mono text-cyan-400/60 text-xs">
                      install
                    </span>
                  </div>
                  <div className="p-4">
                    <code className="block whitespace-pre font-mono text-sm leading-relaxed">
                      <span className="text-white/40">
                        # Requires Bun runtime
                      </span>
                      {'\n'}
                      <span className="text-cyan-400">bun add -g</span>{' '}
                      <span className="text-emerald-400">
                        @gmickel/flow-next-tui
                      </span>
                      {'\n\n'}
                      <span className="text-white/40"># Start monitoring</span>
                      {'\n'}
                      <span className="text-emerald-400">flow-next-tui</span>
                      <span className="text-white/40"> # or: fntui</span>
                    </code>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/50">
                  Auto-selects latest run. Detach with{' '}
                  <code className="text-cyan-400/70">q</code>—Ralph keeps
                  running.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Schematic */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-8">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              How It Works
            </p>
          </div>
          <FlowNextSchematic />
        </section>

        {/* .flow/ Directory - Code-first design */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
                Storage
              </p>
              <h2 className="mt-3 font-bold text-3xl text-white">
                Everything in <code className="text-emerald-400">.flow/</code>
              </h2>
              <p className="mt-4 text-white/60">
                No external databases. No config elsewhere. One directory you
                can delete to fully uninstall.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-white/70">
                    One file per task
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-500" />
                  <span className="text-sm text-white/70">
                    Merge-friendly structure
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-white/70">
                    JSON metadata + MD content
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60">
                <div className="flex items-center gap-2 border-emerald-500/10 border-b bg-emerald-500/5 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 font-mono text-white/40 text-xs">
                    tree .flow/
                  </span>
                </div>
                <div className="p-5">
                  <code className="block whitespace-pre font-mono text-sm leading-loose">
                    <span className="text-emerald-400">.flow/</span>
                    {'\n'}
                    <span className="text-white/30">├── </span>
                    <span className="text-white/80">meta.json</span>
                    <span className="text-white/30">{'         '}</span>
                    <span className="text-white/20"># schema version</span>
                    {'\n'}
                    <span className="text-white/30">├── </span>
                    <span className="text-violet-400/80">config.json</span>
                    <span className="text-white/30">{'       '}</span>
                    <span className="text-white/20"># opt-in features</span>
                    {'\n'}
                    <span className="text-white/30">├── </span>
                    <span className="text-emerald-400/80">epics/</span>
                    {'\n'}
                    <span className="text-white/30">│ └── </span>
                    <span className="text-white/80">fn-1.json</span>
                    {'\n'}
                    <span className="text-white/30">├── </span>
                    <span className="text-emerald-400/80">specs/</span>
                    {'\n'}
                    <span className="text-white/30">│ └── </span>
                    <span className="text-white/80">fn-1.md</span>
                    <span className="text-white/30">{'       '}</span>
                    <span className="text-white/20"># epic plan</span>
                    {'\n'}
                    <span className="text-white/30">├── </span>
                    <span className="text-cyan-400/80">tasks/</span>
                    {'\n'}
                    <span className="text-white/30">│ ├── </span>
                    <span className="text-white/80">fn-1.1.json</span>
                    <span className="text-white/30">{'   '}</span>
                    <span className="text-white/20"># metadata + deps</span>
                    {'\n'}
                    <span className="text-white/30">│ ├── </span>
                    <span className="text-white/80">fn-1.1.md</span>
                    <span className="text-white/30">{'     '}</span>
                    <span className="text-white/20"># spec + done</span>
                    {'\n'}
                    <span className="text-white/30">│ └── </span>
                    <span className="text-white/40">...</span>
                    {'\n'}
                    <span className="text-white/30">└── </span>
                    <span className="text-cyan-400/80">memory/</span>
                    <span className="text-white/30">{'         '}</span>
                    <span className="text-white/20"># opt-in</span>
                    {'\n'}
                    <span className="text-white/30">{'  '}├── </span>
                    <span className="text-white/60">pitfalls.md</span>
                    {'\n'}
                    <span className="text-white/30">{'  '}├── </span>
                    <span className="text-white/60">conventions.md</span>
                    {'\n'}
                    <span className="text-white/30">{'  '}└── </span>
                    <span className="text-white/60">decisions.md</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-user Safety */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <Card className="overflow-hidden border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-transparent">
            <CardHeader className="pb-6">
              <p className="font-mono text-[11px] text-cyan-400/80 uppercase tracking-[0.3em]">
                Multi-user Safety
              </p>
              <CardTitle className="mt-2 text-2xl text-white md:text-3xl">
                Teams work parallel branches
                <br />
                <span className="text-white/50">
                  without coordination servers
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Scan-based IDs',
                    desc: 'Scans existing files to allocate next ID. No shared counters.',
                  },
                  {
                    title: 'Soft claims',
                    desc: 'Tasks track assignee. Prevents accidental duplicate work.',
                  },
                  {
                    title: 'Actor resolution',
                    desc: 'Auto-detects from git email, FLOW_ACTOR env, or $USER.',
                  },
                ].map((item) => (
                  <div
                    className="rounded-lg border border-cyan-500/10 bg-cyan-500/5 p-4"
                    key={item.title}
                  >
                    <p className="font-mono text-cyan-400 text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <div className="flex items-center gap-2 border-white/5 border-b px-4 py-2">
                  <span className="font-mono text-white/30 text-xs">
                    example
                  </span>
                </div>
                <div className="p-4">
                  <code className="block whitespace-pre font-mono text-sm leading-relaxed">
                    <span className="text-white/40"># Actor A starts task</span>
                    {'\n'}
                    <span className="text-emerald-400">flowctl start</span>{' '}
                    <span className="text-white">fn-1.1</span>
                    <span className="text-white/30">
                      {'   '}# sets assignee
                    </span>
                    {'\n\n'}
                    <span className="text-white/40">
                      # Actor B tries same task
                    </span>
                    {'\n'}
                    <span className="text-emerald-400">flowctl start</span>{' '}
                    <span className="text-white">fn-1.1</span>
                    {'\n'}
                    <span className="text-red-400/80">
                      error: claimed by actor-a@example.com
                    </span>
                    {'\n\n'}
                    <span className="text-emerald-400">flowctl start</span>{' '}
                    <span className="text-white">fn-1.1 --force</span>
                    <span className="text-white/30">{'  '}# override</span>
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* flowctl CLI */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-8">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Bundled CLI
            </p>
            <h2 className="mt-3 font-bold text-2xl text-white md:text-3xl">
              <code className="text-emerald-400">flowctl.py</code> manages all
              state
            </h2>
            <p className="mt-2 text-white/60">
              Skills call this automatically. Use it directly if you want.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-black/60">
            <div className="flex items-center justify-between border-emerald-500/10 border-b bg-emerald-500/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-white/40 text-xs">
                flowctl --help
              </span>
            </div>
            <div className="p-5">
              <code className="block whitespace-pre font-mono text-sm leading-loose">
                <span className="text-white/40"># Setup</span>
                {'\n'}
                <span className="text-emerald-400">flowctl init</span>
                <span className="text-white/30">
                  {'                   '}# create .flow/
                </span>
                {'\n'}
                <span className="text-emerald-400">flowctl detect</span>
                <span className="text-white/30">
                  {'                 '}# check exists
                </span>
                {'\n\n'}
                <span className="text-white/40"># Workflow</span>
                {'\n'}
                <span className="text-emerald-400">flowctl ready</span>{' '}
                <span className="text-white">--epic fn-1</span>
                <span className="text-white/30">{'     '}# ready/blocked</span>
                {'\n'}
                <span className="text-emerald-400">flowctl start</span>{' '}
                <span className="text-white">fn-1.1</span>
                <span className="text-white/30">
                  {'          '}# claim task
                </span>
                {'\n'}
                <span className="text-emerald-400">flowctl done</span>{' '}
                <span className="text-white">fn-1.1 --summary-file s.md</span>
                {'\n\n'}
                <span className="text-white/40"># Validation</span>
                {'\n'}
                <span className="text-emerald-400">flowctl validate</span>{' '}
                <span className="text-white">--all</span>
                <span className="text-white/30">{'       '}# CI gate</span>
              </code>
            </div>
          </div>
        </section>

        {/* Opt-in Features */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <Badge
              className="mb-4 border-violet-400/50 bg-violet-950/80 text-violet-300 backdrop-blur-sm"
              variant="outline"
            >
              OPT-IN FEATURES
            </Badge>
            <h2 className="font-bold text-3xl text-white md:text-4xl">
              Power features when you need them
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Off by default. Enable via{' '}
              <code className="text-emerald-400">/flow-next:setup</code> or{' '}
              <code className="text-emerald-400">flowctl config set</code>.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Plan-Sync */}
            <div className="overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-transparent">
              <div className="flex items-center justify-between border-emerald-500/20 border-b bg-emerald-500/5 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔄</span>
                  <span className="font-semibold text-emerald-400">
                    Plan-Sync
                  </span>
                </div>
                <Badge
                  className="border-amber-400/40 bg-amber-500/10 text-amber-300"
                  variant="outline"
                >
                  NEW
                </Badge>
              </div>
              <div className="space-y-4 p-5">
                <p className="text-sm text-white/70">
                  Syncs downstream task specs when implementation drifts from
                  the plan. Keeps future tasks accurate.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 p-3">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    <div>
                      <p className="font-mono text-emerald-400 text-xs">
                        Same-epic sync
                      </p>
                      <p className="text-sm text-white/50">
                        Updates downstream tasks in current epic
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-cyan-500/10 bg-cyan-500/5 p-3">
                    <span className="mt-0.5 text-cyan-400">✓</span>
                    <div>
                      <p className="font-mono text-cyan-400 text-xs">
                        Cross-epic sync
                      </p>
                      <p className="text-sm text-white/50">
                        Also checks other open epics (opt-in, off by default)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-black/40 p-3">
                  <code className="block font-mono text-sm">
                    <span className="text-emerald-400">flowctl config set</span>{' '}
                    <span className="text-white">planSync.enabled true</span>
                    {'\n'}
                    <span className="text-emerald-400">flowctl config set</span>{' '}
                    <span className="text-white/50">
                      planSync.crossEpic true
                    </span>
                  </code>
                </div>
              </div>
            </div>

            {/* Memory System */}
            <div className="overflow-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-transparent">
              <div className="flex items-center justify-between border-cyan-500/20 border-b bg-cyan-500/5 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🧠</span>
                  <span className="font-semibold text-cyan-400">
                    Memory System
                  </span>
                </div>
                <Badge
                  className="border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                  variant="outline"
                >
                  Ralph-Enhanced
                </Badge>
              </div>
              <div className="space-y-4 p-5">
                <p className="text-sm text-white/70">
                  Persistent learnings survive context compaction. Retrieves
                  relevant entries during planning and work.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <span className="text-lg">📝</span>
                    <div>
                      <p className="font-mono text-white/70 text-xs">
                        pitfalls.md
                      </p>
                      <p className="text-sm text-white/50">
                        Auto-captured from NEEDS_WORK reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <span className="text-lg">📋</span>
                    <div>
                      <p className="font-mono text-white/70 text-xs">
                        conventions.md
                      </p>
                      <p className="text-sm text-white/50">
                        Project patterns not in CLAUDE.md
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <span className="text-lg">🏛️</span>
                    <div>
                      <p className="font-mono text-white/70 text-xs">
                        decisions.md
                      </p>
                      <p className="text-sm text-white/50">
                        Architectural choices with rationale
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-black/40 p-3">
                  <code className="block font-mono text-sm">
                    <span className="text-cyan-400">flowctl config set</span>{' '}
                    <span className="text-white">memory.enabled true</span>
                    {'\n'}
                    <span className="text-cyan-400">flowctl memory init</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews - Major differentiator */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-purple-950/20 to-transparent">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_50%)]"
            />

            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge
                  className="border-violet-400/50 bg-violet-500/10 text-violet-300 backdrop-blur-sm"
                  variant="outline"
                >
                  <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-violet-400" />
                  MULTI-MODEL REVIEW
                </Badge>
                <Badge
                  className="border-emerald-400/40 bg-emerald-950/60 text-emerald-300"
                  variant="outline"
                >
                  Key Differentiator
                </Badge>
                <Badge
                  className="border-cyan-400/40 bg-cyan-950/60 text-cyan-300"
                  variant="outline"
                >
                  NEW: Codex Backend
                </Badge>
              </div>

              <h2 className="font-bold text-3xl text-white leading-tight md:text-4xl">
                Two models catch what one misses
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                Send your plans and implementations to a{' '}
                <span className="text-violet-400">different AI model</span> for
                review. Choose <span className="text-cyan-400">Codex CLI</span>{' '}
                (cross-platform, GPT 5.2 High) or{' '}
                <a
                  className="text-violet-400 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-300"
                  href="https://repoprompt.com/?atp=KJbuL4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RepoPrompt
                </a>{' '}
                (macOS). Both use identical Carmack-level review criteria.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: '👁️',
                    title: 'Fresh Perspective',
                    desc: 'A second model catches blind spots that self-review misses',
                  },
                  {
                    icon: '🚫',
                    title: 'Blocks Until SHIP',
                    desc: 'No "LGTM with nits" that get ignored—reviews enforce resolution',
                  },
                  {
                    icon: '🌐',
                    title: 'Cross-Platform',
                    desc: 'Codex CLI works on Linux, macOS, Windows. RepoPrompt for macOS power users',
                  },
                ].map((item) => (
                  <div
                    className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-5 backdrop-blur-sm"
                    key={item.title}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-3 font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Backend Comparison */}
              <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
                <div className="grid divide-x divide-white/10 md:grid-cols-2">
                  <div className="bg-cyan-500/5 p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-mono text-cyan-400 text-sm uppercase tracking-wider">
                        Codex CLI
                      </span>
                      <Badge
                        className="border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
                        variant="outline"
                      >
                        NEW
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-white/70">
                          Cross-platform (Linux, macOS, Windows)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-white/70">
                          GPT 5.2 High reasoning by default
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-white/70">
                          Context hints: symbols + references
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-white/70">
                          Session continuity across fix cycles
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 rounded-lg bg-black/40 p-3">
                      <code className="font-mono text-white/80 text-xs">
                        npm i -g @openai/codex && codex auth
                      </code>
                    </div>
                  </div>
                  <div className="bg-violet-500/5 p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-mono text-sm text-violet-400 uppercase tracking-wider">
                        RepoPrompt
                      </span>
                      <Badge
                        className="border-violet-400/40 bg-violet-500/10 text-violet-300"
                        variant="outline"
                      >
                        macOS
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400">✓</span>
                        <span className="text-white/70">
                          Visual context builder UI
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400">✓</span>
                        <span className="text-white/70">
                          Any model via RepoPrompt interface
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400">✓</span>
                        <span className="text-white/70">
                          Full file context, not patches
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400">✓</span>
                        <span className="text-white/70">
                          Token-efficient codebase exploration
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 rounded-lg bg-black/40 p-3">
                      <a
                        className="font-mono text-violet-400 text-xs underline decoration-violet-400/40 underline-offset-2 hover:text-violet-300"
                        href="https://repoprompt.com/?atp=KJbuL4"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        repoprompt.com → Install rp-cli
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-violet-500/20 bg-black/40">
                  <div className="border-violet-500/10 border-b bg-violet-500/5 px-4 py-2">
                    <code className="font-mono text-sm text-violet-400">
                      /flow-next:plan-review
                    </code>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-white/60">
                      Review the plan before any code is written. Catches
                      architectural issues early.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-violet-500/20 bg-black/40">
                  <div className="border-violet-500/10 border-b bg-violet-500/5 px-4 py-2">
                    <code className="font-mono text-sm text-violet-400">
                      /flow-next:impl-review
                    </code>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-white/60">
                      Review the implementation. Loops fix → re-review until
                      SHIP verdict.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">
                  <span className="font-mono text-white/40">
                    Auto-detection:
                  </span>{' '}
                  Flow-Next checks for available backends automatically.
                  Configure preference via{' '}
                  <code className="text-cyan-400">
                    flowctl config set review.backend codex
                  </code>{' '}
                  or{' '}
                  <code className="text-violet-400">FLOW_REVIEW_BACKEND</code>{' '}
                  env var.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation - Clean and prominent */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Get Started
            </p>
            <h2 className="mt-3 font-bold text-3xl text-white md:text-4xl">
              Try it now
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 to-transparent">
              <div className="border-emerald-500/20 border-b bg-emerald-500/5 px-5 py-3">
                <span className="font-semibold text-white">Install</span>
              </div>
              <div className="space-y-3 p-5">
                <div className="rounded-lg bg-black/40 p-4">
                  <code className="block font-mono text-sm">
                    <span className="text-emerald-400">
                      /plugin marketplace add
                    </span>{' '}
                    <span className="break-all text-white/80">
                      https://github.com/gmickel/gmickel-claude-marketplace
                    </span>
                  </code>
                </div>
                <div className="rounded-lg bg-black/40 p-4">
                  <code className="block font-mono text-sm">
                    <span className="text-emerald-400">/plugin install</span>{' '}
                    <span className="text-white">flow-next</span>
                  </code>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-950/30 to-transparent">
              <div className="border-red-500/10 border-b bg-red-500/5 px-5 py-3">
                <span className="font-semibold text-white">Uninstall</span>
              </div>
              <div className="space-y-3 p-5">
                <div className="rounded-lg bg-black/40 p-4">
                  <code className="block font-mono text-lg text-red-400">
                    rm -rf .flow/
                  </code>
                </div>
                <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
                  <p className="font-mono text-cyan-400 text-xs uppercase">
                    If Ralph Mode enabled
                  </p>
                  <code className="mt-2 block font-mono text-sm text-white">
                    rm -rf scripts/ralph/
                  </code>
                </div>
                <p className="text-sm text-white/50">
                  No hooks to remove. No config to clean up. No traces.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-white/70">
              <span className="font-mono text-emerald-400">Requires:</span>{' '}
              Python 3.8+ and git.{' '}
              <span className="font-mono text-cyan-400">Codex CLI</span>{' '}
              (cross-platform) or{' '}
              <a
                className="text-violet-400 underline decoration-violet-400/40 underline-offset-2 hover:text-violet-300"
                href="https://repoprompt.com/?atp=KJbuL4"
                rel="noopener noreferrer"
                target="_blank"
              >
                RepoPrompt
              </a>{' '}
              (macOS) recommended for cross-model reviews.
            </p>
          </div>
        </section>

        {/* Flow vs Flow-Next comparison */}
        <section className="relative mx-auto max-w-6xl px-6 pb-32 md:px-10">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="border-white/10 border-b bg-white/5 px-6 py-4">
              <h2 className="font-semibold text-lg text-white">
                Flow vs Flow-Next
              </h2>
            </div>
            <div className="grid divide-x divide-white/10 md:grid-cols-2">
              <div className="bg-violet-500/5 p-6">
                <p className="font-mono text-sm text-violet-400 uppercase tracking-wider">
                  Flow
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-white/40">Storage:</span>
                    <span className="text-white/80">
                      plans/*.md or Beads epics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/40">Install:</span>
                    <span className="text-white/80">
                      Plugin + optionally Beads
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/40">Config:</span>
                    <span className="text-white/80">CLAUDE.md for Beads</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-500/5 p-6">
                <p className="font-mono text-emerald-400 text-sm uppercase tracking-wider">
                  Flow-Next
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-white/40">Storage:</span>
                    <span className="text-white/80">.flow/ directory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/40">Install:</span>
                    <span className="text-white/80">Plugin only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/40">Config:</span>
                    <span className="text-white/80">None</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-white/10 border-t bg-white/[0.02] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-white/60">
                  <span className="text-white">Choose Flow-Next</span> for zero
                  deps and clean uninstall.{' '}
                  <span className="text-white">Choose Flow</span> if you use
                  Beads.
                </p>
                <Link
                  className="font-mono text-sm text-violet-400 underline decoration-violet-400/40 underline-offset-2 transition-colors hover:text-violet-300"
                  href="/apps/flow"
                >
                  View Flow →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
