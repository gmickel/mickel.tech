import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';
import { FlowSchematic } from './flow-schematic';

const APP_DATA = {
  name: 'Flow',
  description:
    'Claude Code plugin for two-step workflow: plan first, work second. Strong research upfront, explicit plan reuse, plan re-read between tasks.',
  slug: 'flow',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'Flow — Plan First, Work Second',
  description:
    'Claude Code marketplace plugin for structured development workflow. Research agents, gap analysis, and disciplined execution. Most failures come from weak planning—Flow fixes that.',
  openGraph: {
    title: 'Flow — Plan First, Work Second',
    description:
      'Claude Code marketplace plugin for structured development workflow. Research agents, gap analysis, and disciplined execution.',
    type: 'website',
    url: 'https://mickel.tech/apps/flow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow — Plan First, Work Second',
    description:
      'Claude Code plugin: research agents, gap analysis, disciplined execution.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/flow',
  },
};

const commands = [
  {
    name: '/flow:plan',
    description: 'Research + produce plan (auto-review if rp-cli)',
  },
  {
    name: '/flow:work',
    description: 'Execute plan end-to-end (auto-review if rp-cli)',
  },
  {
    name: '/flow:plan-review',
    description: 'Carmack-level plan review via rp-cli',
  },
  {
    name: '/flow:impl-review',
    description: 'Carmack-level impl review (current branch)',
  },
];

const agents = [
  {
    name: 'repo-scout',
    purpose: 'Find patterns (fast)',
    description:
      'Searches codebase with Grep/Glob/Read for patterns and conventions. Fast, ~65k tokens.',
  },
  {
    name: 'context-scout',
    purpose: 'Deep context (rp-cli)',
    description:
      'Uses RepoPrompt AI builder for architecture understanding. Slower but 30% fewer tokens.',
  },
  {
    name: 'practice-scout',
    purpose: 'Best practices',
    description:
      'Researches community best practices and proven approaches for your specific task.',
  },
  {
    name: 'docs-scout',
    purpose: 'Official docs',
    description:
      'Fetches relevant official documentation for frameworks, libraries, and APIs involved.',
  },
  {
    name: 'flow-gap-analyst',
    purpose: 'Missing flows',
    description:
      'Identifies edge cases, missing user flows, and potential gaps in your specification.',
  },
  {
    name: 'quality-auditor',
    purpose: 'Risk scan',
    description:
      'Optional security and quality review to catch issues before they ship.',
  },
];

const skills = [
  { name: 'flow-plan', purpose: 'Planning workflow logic' },
  { name: 'flow-work', purpose: 'Execution workflow logic' },
  { name: 'flow-plan-review', purpose: 'Plan review via rp-cli + chat' },
  { name: 'flow-impl-review', purpose: 'Impl review via rp-cli + chat' },
  { name: 'worktree-kit', purpose: 'Safe parallel git workspaces' },
  { name: 'rp-explorer', purpose: 'Token-efficient codebase exploration' },
];

const planSteps = [
  { step: '01', action: 'Setup: choose research depth + review pref' },
  { step: '02', action: 'Run three research agents in parallel' },
  { step: '03', action: 'Run flow gap check' },
  { step: '04', action: 'Write plan with references + acceptance checks' },
  { step: '05', action: 'Auto-review (if opted in)' },
  { step: '06', action: 'Offer next step (work, create issue)' },
];

const workSteps = [
  { step: '01', action: 'Confirm plan + clarify blockers' },
  { step: '02', action: 'Setup branch or worktree' },
  { step: '03', action: 'Turn plan into TodoWrite tasks' },
  { step: '04', action: 'Execute task loop with plan re-read' },
  { step: '05', action: 'Test + optional audit' },
  { step: '06', action: 'Ship with Definition of Done' },
  { step: '07', action: 'Auto-review (if opted in at start)' },
];

export default function FlowPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'Flow', url: '/apps/flow' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - cyan/violet for Flow brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.1),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(0,229,255,0.08),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.06),transparent_35%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className="border-violet-500/60 bg-violet-500/10 text-violet-400"
              variant="outline"
            >
              CLAUDE CODE PLUGIN
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Marketplace
            </Badge>
            <Badge
              className="border-primary/40 bg-primary/10 text-primary"
              variant="outline"
            >
              Open Source
            </Badge>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-4">
              <svg
                aria-hidden="true"
                className="h-12 w-12 text-white md:h-14 md:w-14"
                fill="none"
                role="img"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Flow Logo</title>
                {/* Plan node */}
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
                {/* Work node */}
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
                {/* Arrow connector */}
                <path
                  d="M13 9h4l6 9"
                  stroke="#a78bfa"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                {/* Arrow head */}
                <path
                  d="M19 18l4-2-2 4"
                  fill="#a78bfa"
                  stroke="#a78bfa"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                {/* Plan checkmark */}
                <path
                  d="M5.5 9l2 2 3-4"
                  opacity="0.7"
                  stroke="#a78bfa"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                Flow
              </h1>
            </div>
            <p className="mt-2 font-mono text-violet-400 text-xl">
              Plan first, work second
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                className="glow-link font-mono text-[11px] uppercase"
                href="/apps"
              >
                ← All Apps
              </Link>
              <Separator className="h-4 bg-white/10" orientation="vertical" />
              <Link
                className="glow-link font-mono text-[11px] uppercase"
                href="/"
              >
                Main Site
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Most failures come from{' '}
              <span className="text-white">weak planning</span> or{' '}
              <span className="text-white">drifting from the plan</span>. Flow
              fixes both with structured research upfront, explicit plan reuse,
              and plan re-read between tasks.
            </p>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              4 commands. 6 agents. 6 skills. One disciplined workflow that
              actually ships.
            </p>

            {/* Note about not being strictly an app */}
            <div className="mt-6 rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
              <p className="text-muted-foreground text-sm">
                <span className="font-mono text-violet-400 text-xs">NOTE</span>{' '}
                — This isn't strictly an app, but it belongs here given my focus
                on{' '}
                <span className="text-white">
                  AI-native software development
                </span>
                . Flow represents how I think about structured agent workflows.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 border border-violet-500 bg-violet-500/10 px-6 py-3 font-mono text-sm text-violet-400 uppercase tracking-wide transition-all hover:bg-violet-500/20"
                href="https://github.com/gmickel/gmickel-claude-marketplace"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 font-mono text-sm text-white uppercase tracking-wide transition-all hover:border-white/40 hover:bg-white/10"
                href="https://github.com/gmickel/gmickel-claude-marketplace/tree/main/plugins/flow"
                rel="noopener noreferrer"
                target="_blank"
              >
                Plugin Docs
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-destructive/20 bg-card/60">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-destructive tracking-[0.2em]">
                  THE PROBLEM
                </p>
              </div>
              <CardTitle className="text-2xl text-white">
                AI agents fail for predictable reasons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Most agent failures aren't about model capability. They're about
                process:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  Starting to code before understanding the codebase
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  Reinventing patterns that already exist in the repo
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  Forgetting the original plan mid-implementation
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  Missing edge cases that were obvious in hindsight
                </li>
              </ul>
              <p className="font-mono text-sm">
                Flow enforces the discipline that makes agents reliable.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Commands Overview */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              COMMANDS
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commands.map((cmd) => (
              <Card className="border-white/10 bg-card/60" key={cmd.name}>
                <CardHeader className="pb-2">
                  <code className="w-fit rounded bg-violet-500/20 px-2 py-1 font-mono text-violet-400 text-xs">
                    {cmd.name}
                  </code>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {cmd.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Workflow */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              CORE WORKFLOW
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* /flow:plan */}
            <Card className="border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-violet-500/20 px-3 py-1.5 font-mono text-lg text-violet-400">
                    /flow:plan
                  </code>
                  <Badge
                    className="border-violet-500/40 bg-violet-500/10 text-violet-400"
                    variant="outline"
                  >
                    STEP 1
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Research and plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  Produces{' '}
                  <code className="text-violet-400">plans/&lt;slug&gt;.md</code>{' '}
                  with references and acceptance checks.
                </p>
                <ol className="space-y-2">
                  {planSteps.map((item) => (
                    <li
                      className="flex items-start gap-3 text-sm"
                      key={item.step}
                    >
                      <span className="font-mono text-violet-400/60 text-xs">
                        {item.step}
                      </span>
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* /flow:work */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-primary/20 px-3 py-1.5 font-mono text-lg text-primary">
                    /flow:work
                  </code>
                  <Badge
                    className="border-primary/40 bg-primary/10 text-primary"
                    variant="outline"
                  >
                    STEP 2
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Execute end-to-end
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  Takes a plan file and executes it with discipline.
                </p>
                <ol className="space-y-2">
                  {workSteps.map((item) => (
                    <li
                      className="flex items-start gap-3 text-sm"
                      key={item.step}
                    >
                      <span className="font-mono text-primary/60 text-xs">
                        {item.step}
                      </span>
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visual Flow Schematic */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              HOW IT WORKS
            </p>
          </div>
          <FlowSchematic />
        </section>

        {/* Research Approach Comparison */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-violet-500/20 bg-card/70">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  RESEARCH DEPTH
                </p>
              </div>
              <CardTitle className="text-white text-xl">
                Choose your research approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                When{' '}
                <a
                  className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                  href="https://repoprompt.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RepoPrompt
                </a>{' '}
                rp-cli is detected,{' '}
                <code className="text-violet-400">/flow:plan</code> asks which
                research approach to use before starting.
              </p>

              {/* Comparison grid */}
              <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:grid-cols-2">
                <div className="bg-black/40 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <code className="font-mono text-primary text-xs">
                      repo-scout
                    </code>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] text-emerald-400">
                      FAST
                    </span>
                  </div>
                  <ul className="space-y-2 text-[11px] text-muted-foreground">
                    <li>
                      <span className="text-white/60">Tools:</span> Grep, Glob,
                      Read
                    </li>
                    <li>
                      <span className="text-white/60">Speed:</span> ~45 seconds
                    </li>
                    <li>
                      <span className="text-white/60">Tokens:</span> ~65k
                    </li>
                    <li>
                      <span className="text-white/60">Output:</span> Line refs,
                      conventions
                    </li>
                    <li>
                      <span className="text-white/60">Best for:</span> Quick bug
                      fixes, simple changes
                    </li>
                  </ul>
                </div>
                <div className="bg-violet-500/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <code className="font-mono text-violet-400 text-xs">
                      context-scout
                    </code>
                    <span className="rounded bg-violet-500/20 px-1.5 py-0.5 font-mono text-[9px] text-violet-400">
                      DEEP
                    </span>
                  </div>
                  <ul className="space-y-2 text-[11px] text-muted-foreground">
                    <li>
                      <span className="text-white/60">Tools:</span> RepoPrompt
                      rp-cli
                    </li>
                    <li>
                      <span className="text-white/60">Speed:</span> Slower
                      (builder takes time)
                    </li>
                    <li>
                      <span className="text-white/60">Tokens:</span> ~45k (30%
                      less)
                    </li>
                    <li>
                      <span className="text-white/60">Output:</span>{' '}
                      Architecture, function sigs
                    </li>
                    <li>
                      <span className="text-white/60">Best for:</span> Complex
                      features, architecture
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                <span className="text-white">Without RepoPrompt:</span>{' '}
                repo-scout is used automatically—no prompt needed.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Review Commands */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-primary/20 bg-card/70">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  BUILT-IN REVIEWS
                </p>
                <Badge
                  className="border-emerald-500/40 bg-emerald-500/10 text-[10px] text-emerald-400"
                  variant="outline"
                >
                  Now Auto-Integrated
                </Badge>
              </div>
              <CardTitle className="text-white text-xl">
                Carmack-level code reviews via rp-cli
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                When{' '}
                <a
                  className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                  href="https://repoprompt.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RepoPrompt
                </a>{' '}
                rp-cli is detected, both{' '}
                <code className="text-violet-400">/flow:plan</code> and{' '}
                <code className="text-primary">/flow:work</code> ask upfront
                whether to include a review. If yes, review runs automatically
                at the end—no separate command needed.
              </p>

              {/* Cross-model benefit */}
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                <p className="text-muted-foreground text-sm">
                  <span className="font-mono text-primary text-xs">
                    CROSS-MODEL
                  </span>{' '}
                  — Reviews use RepoPrompt's chat with a different model (e.g.,
                  GPT-5.2 High). Catches blind spots that same-model self-review
                  misses.
                </p>
              </div>

              {/* Auto-review flow example */}
              <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4">
                <code className="block whitespace-pre font-mono text-sm leading-relaxed">
                  <span className="text-muted-foreground">{'>'}</span>{' '}
                  <span className="text-violet-400">/flow:plan</span>{' '}
                  <span className="text-muted-foreground">Add OAuth login</span>
                  {'\n'}
                  <span className="text-primary">?</span>{' '}
                  <span className="text-white">
                    Run Carmack-level review after planning?
                  </span>{' '}
                  <span className="text-emerald-400">[Yes]</span>
                  {'\n'}
                  <span className="text-white/40">
                    ... (research + planning) ...
                  </span>
                  {'\n'}
                  <span className="text-emerald-400">✓</span>{' '}
                  <span className="text-muted-foreground">
                    Plan complete, starting review...
                  </span>
                  {'\n'}
                  <span className="text-white/40">
                    ... (review runs automatically) ...
                  </span>
                </code>
              </div>

              <p className="text-muted-foreground text-sm">
                Manual invocation still available:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-violet-400">/flow:plan-review</span>{' '}
                    <span className="text-white/60">plans/oauth.md</span>
                  </code>
                </div>
                <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-primary">/flow:impl-review</span>
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Beads Integration */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-violet-500/20 bg-card/70">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  BEADS INTEGRATION
                </p>
                <Badge
                  className="border-white/20 bg-white/5 text-[10px] text-muted-foreground"
                  variant="outline"
                >
                  Optional
                </Badge>
              </div>
              <CardTitle className="text-white text-xl">
                Dependency-aware tracking via{' '}
                <a
                  className="text-violet-400 underline decoration-violet-400/40 underline-offset-2 transition-colors hover:text-violet-300"
                  href="https://github.com/steveyegge/beads"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Beads
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-muted-foreground">
                Flow optionally integrates with Beads (
                <code className="text-violet-400">bd</code>) for
                dependency-aware issue tracking. When{' '}
                <code className="text-white">.beads/</code> exists, Flow adapts
                automatically.
              </p>

              {/* Comparison grid */}
              <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:grid-cols-2">
                <div className="bg-black/40 p-4">
                  <p className="mb-3 font-mono text-muted-foreground text-xs uppercase tracking-wide">
                    Standard Mode
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">Plans →</span>
                      <code className="text-white">plans/&lt;slug&gt;.md</code>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">Tasks →</span>
                      <span className="text-white">TodoWrite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">Context →</span>
                      <span className="text-white">Plan file</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-violet-500/5 p-4">
                  <p className="mb-3 font-mono text-violet-400 text-xs uppercase tracking-wide">
                    Beads Mode
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">Plans →</span>
                      <span className="text-white">Epic with child tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">Tasks →</span>
                      <code className="text-violet-400">
                        bd ready / bd close
                      </code>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">Context →</span>
                      <code className="text-violet-400">bd show</code>
                      <span className="text-white">output</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Code example */}
              <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4">
                <code className="block whitespace-pre font-mono text-sm leading-relaxed">
                  <span className="text-white/40"># With Beads configured</span>
                  {'\n'}
                  <span className="text-violet-400">/flow:plan</span>{' '}
                  <span className="text-muted-foreground">Add OAuth login</span>
                  {'\n'}
                  <span className="text-white/40">
                    # Creates epic bd-a3f8e9 with child tasks
                  </span>
                  {'\n\n'}
                  <span className="text-primary">/flow:work</span>{' '}
                  <span className="text-white">bd-a3f8e9</span>
                  {'\n'}
                  <span className="text-white/40">
                    # Tracks progress via bd ready/update/close
                  </span>
                </code>
              </div>

              {/* Key points */}
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-violet-400">›</span>
                  <span>
                    <span className="text-white">No configuration</span>—detects{' '}
                    <code className="text-violet-400">.beads/</code>{' '}
                    automatically
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-400">›</span>
                  <span>
                    <span className="text-white">Graceful fallback</span>—works
                    without Beads installed
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-400">›</span>
                  <span>
                    <span className="text-white">Dependency tracking</span>
                    —knows which tasks block others
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Agents */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SPECIALIZED AGENTS
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <Card className="border-white/10 bg-card/60" key={agent.name}>
                <CardHeader className="pb-2">
                  <code className="w-fit rounded bg-white/5 px-2 py-1 font-mono text-primary text-xs">
                    {agent.name}
                  </code>
                  <CardTitle className="text-base text-white">
                    {agent.purpose}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {agent.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SKILLS
            </p>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <span className="text-muted-foreground text-xs">
              Progressive disclosure: ~100 tokens at startup
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <Card
                className="border-violet-500/20 bg-violet-500/5"
                key={skill.name}
              >
                <CardHeader className="pb-2">
                  <code className="w-fit rounded bg-violet-500/20 px-2 py-1 font-mono text-violet-400 text-xs">
                    {skill.name}
                  </code>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {skill.purpose}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-4 text-muted-foreground text-sm">
            Skills auto-trigger from natural language. Say "help me plan adding
            OAuth" and Claude triggers{' '}
            <code className="text-violet-400">flow-plan</code> automatically.
          </p>
        </section>

        {/* Direct Invocation */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              BEYOND PLAN → WORK
            </p>
          </div>

          <Card className="border-white/10 bg-card/70">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">
                Direct invocation: skills & agents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Flow's core workflow is{' '}
                <code className="text-violet-400">/flow:plan</code> →{' '}
                <code className="text-primary">/flow:work</code>, but you can
                invoke individual components directly for specific tasks.
              </p>

              {/* Skill vs Agent */}
              <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:grid-cols-2">
                <div className="bg-violet-500/5 p-4">
                  <div className="mb-2 font-mono text-violet-400 text-xs uppercase tracking-wide">
                    Skills
                  </div>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    <li>Run in current conversation</li>
                    <li>See full chat history</li>
                    <li>Trigger via natural language</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-4">
                  <div className="mb-2 font-mono text-primary text-xs uppercase tracking-wide">
                    Agents
                  </div>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    <li>Run as isolated subprocess</li>
                    <li>Fresh context per task</li>
                    <li>Trigger via "Use X to..."</li>
                  </ul>
                </div>
              </div>

              {/* Skill triggers */}
              <div>
                <p className="mb-3 font-mono text-muted-foreground text-xs uppercase tracking-wide">
                  Skill Triggers
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-violet-500/20 px-2 py-0.5 font-mono text-violet-400 text-xs">
                      rp-explorer
                    </code>
                    <span className="text-muted-foreground">
                      "use rp to explore how auth works"
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-violet-500/20 px-2 py-0.5 font-mono text-violet-400 text-xs">
                      flow-plan
                    </code>
                    <span className="text-muted-foreground">
                      "help me plan adding OAuth"
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-violet-500/20 px-2 py-0.5 font-mono text-violet-400 text-xs">
                      worktree-kit
                    </code>
                    <span className="text-muted-foreground">
                      "create a worktree for feature X"
                    </span>
                  </div>
                </div>
              </div>

              {/* Agent invocation */}
              <div>
                <p className="mb-3 font-mono text-muted-foreground text-xs uppercase tracking-wide">
                  Agent Invocation
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-primary/20 px-2 py-0.5 font-mono text-primary text-xs">
                      context-scout
                    </code>
                    <span className="text-muted-foreground">
                      "Use context-scout to understand the payment system"
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-primary/20 px-2 py-0.5 font-mono text-primary text-xs">
                      repo-scout
                    </code>
                    <span className="text-muted-foreground">
                      "Use repo-scout to find all API endpoints"
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-primary/20 px-2 py-0.5 font-mono text-primary text-xs">
                      practice-scout
                    </code>
                    <span className="text-muted-foreground">
                      "Use practice-scout for React Server Components"
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick reference */}
              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <p className="mb-3 font-mono text-white/60 text-xs uppercase tracking-wide">
                  Quick Reference
                </p>
                <div className="grid gap-2 text-[11px] sm:grid-cols-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Full feature planning
                    </span>
                    <code className="text-violet-400">/flow:plan</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Execute a plan
                    </span>
                    <code className="text-primary">/flow:work</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Quick codebase exploration
                    </span>
                    <span className="text-white/60">"use rp to..."</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Deep architecture analysis
                    </span>
                    <span className="text-white/60">
                      "Use context-scout..."
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Review my plan
                    </span>
                    <code className="text-violet-400">/flow:plan-review</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Review my implementation
                    </span>
                    <code className="text-primary">/flow:impl-review</code>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                <span className="text-white">Rule of thumb:</span> Use skills
                for inline help, agents for delegated deep dives.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Installation */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              INSTALLATION
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  From Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-primary">
                      /plugin marketplace add
                    </span>{' '}
                    <span className="break-all text-white/80">
                      https://github.com/gmickel/gmickel-claude-marketplace
                    </span>
                  </code>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-primary">/plugin install</span> flow
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Local Dev</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    claude --plugin-dir ./plugins/flow
                  </code>
                </div>
                <p className="mt-3 text-muted-foreground text-sm">
                  Clone the marketplace repo and point Claude Code at the plugin
                  directory for development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Optional RepoPrompt */}
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-muted-foreground text-sm">
              <span className="font-mono text-primary text-xs">OPTIONAL</span> —
              Install{' '}
              <a
                className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                href="https://repoprompt.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                RepoPrompt
              </a>{' '}
              for auto-review. Flow detects rp-cli and offers integrated
              Carmack-level reviews.
            </p>
          </div>
        </section>

        {/* Conventions & Who it's for */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Conventions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Plans live in <code className="text-white">plans/</code> or
                    Beads epics
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Prefer reuse of centralized code
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Tests and linting are part of the plan
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Issues auto-detect GitHub/Linear/Beads
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Who it's for
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <p>
                  Developers who want Claude Code to ship reliably, not just
                  generate code. If you've ever had an agent "finish" a task
                  only to realize it forgot half the requirements—this is for
                  you.
                </p>
                <p>
                  Flow doesn't make Claude smarter. It makes the workflow
                  disciplined enough that capability translates to results.
                </p>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://github.com/gmickel/gmickel-claude-marketplace"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View on GitHub →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Shell>
  );
}
