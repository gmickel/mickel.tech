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
      'Flow-Next requires Python 3.8+ and git. RepoPrompt (rp-cli) is optional but highly recommended for cross-model code reviews.',
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
    description: 'Carmack-level plan review via rp-cli',
  },
  {
    name: '/flow-next:impl-review',
    description: 'Carmack-level impl review (current branch)',
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
      'Tasks declare blockers. Nothing starts until dependencies resolve. Execution order is automatic.',
    icon: '🔗',
    accent: 'cyan',
  },
];

const planSteps = [
  { step: '01', action: 'Research codebase patterns in parallel' },
  { step: '02', action: 'Run gap analysis for edge cases' },
  { step: '03', action: 'Create epic in .flow/specs/' },
  { step: '04', action: 'Break into dependency-ordered tasks' },
  { step: '05', action: 'Auto-review (if rp-cli available)' },
];

const workSteps = [
  { step: '01', action: 'Re-anchor: read epic + task + git state' },
  { step: '02', action: 'Implement following existing patterns' },
  { step: '03', action: 'Test + verify acceptance criteria' },
  { step: '04', action: 'Record summary + evidence via flowctl' },
  { step: '05', action: 'Loop to next ready task' },
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
              className="border-amber-400/40 bg-amber-950/60 text-amber-300"
              variant="outline"
            >
              Experimental
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
                  AI agents fail for predictable reasons:{' '}
                  <span className="text-emerald-400">
                    forgetting the plan mid-task
                  </span>
                  ,{' '}
                  <span className="text-cyan-400">
                    losing context in long sessions
                  </span>
                  ,{' '}
                  <span className="text-emerald-400">drifting from intent</span>
                  .
                </p>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Flow-Next bundles a{' '}
                  <span className="font-mono text-emerald-400">
                    fully-featured task system
                  </span>{' '}
                  in a single Python script. No npm. No daemons. No config
                  edits.
                </p>
                <div className="mt-6 flex items-center gap-4 border-white/10 border-t pt-6">
                  <code className="rounded bg-white/5 px-3 py-1.5 font-mono text-emerald-400 text-sm">
                    30 seconds to try
                  </code>
                  <span className="text-white/30">→</span>
                  <code className="rounded bg-white/5 px-3 py-1.5 font-mono text-cyan-400 text-sm">
                    rm -rf .flow/ to uninstall
                  </code>
                </div>
              </div>
            </div>

            {/* Experimental callout */}
            <div className="mt-8 inline-flex items-center gap-3 rounded border border-amber-500/30 bg-amber-500/5 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <p className="text-amber-200/80 text-sm">
                <span className="font-mono text-amber-400 text-xs uppercase">
                  Experimental
                </span>{' '}
                —{' '}
                <a
                  className="underline decoration-amber-400/40 underline-offset-2 transition-colors hover:text-amber-200"
                  href="https://github.com/gmickel/gmickel-claude-marketplace/issues"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Report issues
                </a>
              </p>
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
              Five commands, complete workflow
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {commands.map((cmd, i) => (
              <div
                className="group rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5"
                key={cmd.name}
              >
                <code className="block font-mono text-emerald-400 text-sm group-hover:text-emerald-300">
                  {cmd.name}
                </code>
                <p className="mt-2 text-sm text-white/50">{cmd.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Workflow - Side by side with connecting line */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 text-center">
            <p className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-[0.3em]">
              Core Workflow
            </p>
            <h2 className="mt-3 font-bold text-3xl text-white md:text-4xl">
              Plan → Work
            </h2>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Connecting line - desktop only */}
            <div
              aria-hidden
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden h-px w-16 lg:block"
            >
              <div className="h-full w-full bg-gradient-to-r from-emerald-500/50 to-cyan-500/50" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-white/20" />
            </div>

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
                  <div className="p-5 space-y-4">
                    <p className="text-sm text-white/70">
                      Deterministic enforcement prevents agents from skipping steps or drifting from the workflow.
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          label: 'Receipt-Based Gating',
                          desc: 'Every review must produce a receipt proving it ran. No receipt = no progress.',
                        },
                        {
                          label: 'Review Until SHIP',
                          desc: 'Reviews don\'t just flag issues—they block until the reviewer returns SHIP.',
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
                      <span className="text-cyan-400">rp | none</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">WORK_REVIEW</span>
                      <span className="text-cyan-400">rp | none</span>
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
                    <span className="text-white/20"># spec + done summary</span>
                    {'\n'}
                    <span className="text-white/30">│ └── </span>
                    <span className="text-white/40">...</span>
                    {'\n'}
                    <span className="text-white/30">└── </span>
                    <span className="text-white/40">memory/</span>
                    <span className="text-white/30">{'         '}</span>
                    <span className="text-white/20"># reserved</span>
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

        {/* Reviews - Major differentiator */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-purple-950/20 to-transparent">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_50%)]"
            />

            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
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
              </div>

              <h2 className="font-bold text-3xl text-white leading-tight md:text-4xl">
                Two models catch what one misses
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                Send your plans and implementations to a{' '}
                <span className="text-violet-400">different AI model</span> for review via{' '}
                <a
                  className="text-violet-400 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-300"
                  href="https://repoprompt.com/?atp=KJbuL4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RepoPrompt
                </a>
                . The reviewing model sees full file context, not just diffs.
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
                    icon: '📄',
                    title: 'Full Context',
                    desc: 'Reviewer sees complete files via RepoPrompt builder, not patches',
                  },
                ].map((item) => (
                  <div
                    className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-5 backdrop-blur-sm"
                    key={item.title}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-3 font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                  </div>
                ))}
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
                      Review the plan before any code is written. Catches architectural issues early.
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
                      Review the implementation. Loops fix → re-review until SHIP verdict.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">
                  <span className="font-mono text-white/40">Without RepoPrompt:</span>{' '}
                  Reviews are skipped—everything else works normally. Install{' '}
                  <a
                    className="text-violet-400 underline decoration-violet-400/40 underline-offset-2 hover:text-violet-300"
                    href="https://repoprompt.com/?atp=KJbuL4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    rp-cli
                  </a>{' '}
                  to enable cross-model review.
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
              <a
                className="text-violet-400 underline decoration-violet-400/40 underline-offset-2 hover:text-violet-300"
                href="https://repoprompt.com/?atp=KJbuL4"
                rel="noopener noreferrer"
                target="_blank"
              >
                RepoPrompt
              </a>{' '}
              highly recommended for cross-model reviews.
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
