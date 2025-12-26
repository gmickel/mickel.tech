import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

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

const agents = [
  {
    name: 'repo-scout',
    purpose: 'Find existing patterns',
    description:
      'Searches your codebase for reusable code, established patterns, and conventions to leverage.',
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

const planSteps = [
  { step: '01', action: 'Run three research agents in parallel' },
  { step: '02', action: 'Run flow gap check' },
  { step: '03', action: 'Write plan with references + acceptance checks' },
  { step: '04', action: 'Offer next step (open, work, create issue)' },
];

const workSteps = [
  { step: '01', action: 'Confirm plan + clarify blockers' },
  { step: '02', action: 'Setup branch or worktree' },
  { step: '03', action: 'Turn plan into TodoWrite tasks' },
  { step: '04', action: 'Execute task loop with plan re-read' },
  { step: '05', action: 'Test + optional audit' },
  { step: '06', action: 'Ship' },
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
            <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
              Flow
            </h1>
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
              Two commands. Five specialized agents. One disciplined workflow
              that actually ships.
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
                View Marketplace
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

        {/* Two Commands */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              TWO COMMANDS
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

            {/* worktree-kit skill */}
            <Card className="border-violet-500/20 bg-violet-500/5">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-violet-500/20 px-2 py-1 font-mono text-violet-400 text-xs">
                    worktree-kit
                  </code>
                  <Badge
                    className="border-violet-500/30 text-violet-400"
                    variant="outline"
                  >
                    SKILL
                  </Badge>
                </div>
                <CardTitle className="text-base text-white">
                  Safe parallel workspaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Git worktree management for isolated development without
                  polluting your main branch.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* RepoPrompt Integration */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-primary/20 bg-card/70">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  INTEGRATION
                </p>
              </div>
              <CardTitle className="text-white text-xl">
                Works with RepoPrompt reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you use{' '}
                <a
                  className="glow-link"
                  href="https://github.com/gmickel/claude-code-config"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  gmickel/claude-code-config
                </a>
                , chain Flow with RepoPrompt review commands:
              </p>

              <div className="space-y-3">
                <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4">
                  <code className="block whitespace-pre font-mono text-muted-foreground text-sm">
                    <span className="text-violet-400">/flow:plan</span> Add
                    OAuth login for users{' '}
                    <span className="text-white/40">
                      then review the plan using
                    </span>{' '}
                    <span className="text-primary">/rp-plan-review</span>
                  </code>
                </div>

                <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4">
                  <code className="block whitespace-pre font-mono text-muted-foreground text-sm">
                    <span className="text-primary">/flow:work</span>{' '}
                    plans/add-oauth-login.md{' '}
                    <span className="text-white/40">then review using</span>{' '}
                    <span className="text-primary">/rp-impl-review</span>
                  </code>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                RepoPrompt commands are powered by{' '}
                <code className="text-primary">rp-cli</code>—the same tool used
                throughout this site.
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
                    Plan files live in{' '}
                    <code className="text-white">plans/</code>
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
                    Issue creation auto-detects GitHub/Linear/Beads
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
