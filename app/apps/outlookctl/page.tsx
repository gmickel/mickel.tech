import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'outlookctl — Control Outlook from the Command Line',
  description:
    'Local CLI bridge for Outlook Classic automation on Windows via COM. AI-assisted email and calendar management with Claude Code. No API keys, no OAuth.',
  openGraph: {
    title: 'outlookctl — Control Outlook from the Command Line',
    description:
      'Local CLI bridge for Outlook Classic automation on Windows via COM. AI-assisted email and calendar management with Claude Code.',
    type: 'website',
    url: 'https://mickel.tech/apps/outlookctl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'outlookctl — Control Outlook from the Command Line',
    description:
      'Local CLI bridge for Outlook Classic automation. AI-assisted email and calendar management.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/outlookctl',
  },
};

const features = [
  {
    title: 'Email Management',
    description:
      'List, search, draft, and send emails. AI-assisted triage and response generation with safety-first workflows.',
    icon: '✉',
    commands: ['list', 'search', 'draft', 'send'],
  },
  {
    title: 'Calendar Control',
    description:
      'View events, create meetings, respond to invites. Shared calendar support included.',
    icon: '📅',
    commands: ['calendar list', 'calendar create', 'calendar respond'],
  },
  {
    title: 'Claude Code Skill',
    description:
      'Built-in skill for AI-assisted workflows. Let Claude help triage your inbox and manage your schedule.',
    icon: '🤖',
    commands: ['"Summarize unread"', '"Draft reply"', '"Schedule meeting"'],
  },
  {
    title: 'Safety First',
    description:
      'Draft-first workflow, explicit confirmations, audit logging. Nothing sends without your approval.',
    icon: '🛡',
    commands: ['--confirm-send YES', 'audit.log'],
  },
];

const techSpecs = [
  { label: 'Built with', value: 'Python 3.12+ / pywin32' },
  { label: 'Automation', value: 'Windows COM (Classic Outlook)' },
  { label: 'Output', value: 'Structured JSON' },
  { label: 'Requirements', value: 'Windows + Classic Outlook' },
  { label: 'Dependencies', value: 'pywin32 only' },
  { label: 'License', value: 'MIT (Open Source)' },
];

const constraints = [
  {
    icon: '🪟',
    title: 'Windows Only',
    description: 'COM is a Windows technology',
  },
  {
    icon: '🔒',
    title: 'No API Keys',
    description: 'Uses your existing Outlook session',
  },
  {
    icon: '📍',
    title: 'Local Only',
    description: 'No network calls to external services',
  },
  {
    icon: '📄',
    title: 'AI Skills',
    description: 'Claude Code & OpenAI Codex integration',
  },
];

const APP_DATA = {
  name: 'outlookctl',
  description:
    'Local CLI bridge for Outlook Classic automation via COM. AI-assisted email and calendar management with Claude Code. No API keys, no OAuth.',
  slug: 'outlookctl',
  category: 'DeveloperApplication',
};

export default function OutlookctlPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'outlookctl', url: '/apps/outlookctl' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Grid background - matching outlookctl docs aesthetic */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Ambient glow - cyan terminal aesthetic */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,217,255,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(88,166,255,0.08),transparent_30%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-[#00d9ff]/60 bg-[#00d9ff]/10 text-[#00d9ff]"
              variant="outline"
            >
              WINDOWS CLI
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Open Source
            </Badge>
            <Badge
              className="border-success/40 bg-success/10 text-success"
              variant="outline"
            >
              Released
            </Badge>
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Text content */}
            <div className="flex-1">
              <h1 className="font-bold font-mono text-4xl text-white leading-tight md:text-5xl">
                outlookctl
              </h1>
              <p className="mt-2 font-mono text-[#00d9ff] text-xl">
                Control Outlook from the Command Line
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
                Can't access Exchange via Microsoft Graph API? No problem.
                Control Outlook directly through COM automation on your Windows
                workstation. Let Claude help manage your email and calendar—no
                API keys, no OAuth, just your existing Outlook session.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Local CLI bridge for Outlook Classic automation. Includes a
                Claude Code Skill for AI-assisted email and calendar management
                with safety-first workflows.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 border border-[#00d9ff] bg-[#00d9ff]/10 px-6 py-3 font-mono text-[#00d9ff] text-sm uppercase tracking-wide transition-all hover:bg-[#00d9ff]/20"
                  href="https://gmickel.github.io/outlookctl/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Documentation
                </a>
                <a
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 font-mono text-sm text-white uppercase tracking-wide transition-all hover:border-white/40 hover:bg-white/10"
                  href="https://github.com/gmickel/outlookctl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Terminal demo */}
            <div className="relative lg:w-[380px]">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-[#00d9ff]/10">
                {/* Terminal header */}
                <div className="flex items-center gap-2 border-white/10 border-b bg-[#161b22] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-auto font-mono text-[#6e7681] text-xs">
                    outlookctl
                  </span>
                </div>
                {/* Terminal body */}
                <div className="space-y-4 p-4 font-mono text-sm leading-relaxed">
                  <div>
                    <span className="text-[#3fb950]">$</span>{' '}
                    <span className="text-[#00d9ff]">outlookctl list</span>{' '}
                    <span className="text-[#f0883e]">--count</span>{' '}
                    <span className="text-[#3fb950]">3</span>
                    <div className="mt-1 pl-4 text-[#8b949e]">
                      <span className="text-[#f0883e]">3 messages</span> from
                      Inbox
                    </div>
                  </div>
                  <div>
                    <span className="text-[#3fb950]">$</span>{' '}
                    <span className="text-[#00d9ff]">
                      outlookctl calendar list
                    </span>{' '}
                    <span className="text-[#f0883e]">--days</span>{' '}
                    <span className="text-[#3fb950]">7</span>
                    <div className="mt-1 pl-4 text-[#8b949e]">
                      <span className="text-[#f0883e]">5 events</span> upcoming
                    </div>
                  </div>
                  <div>
                    <span className="text-[#3fb950]">$</span>{' '}
                    <span className="text-[#00d9ff]">outlookctl draft</span>{' '}
                    <span className="text-[#f0883e]">--to</span>{' '}
                    <span className="text-[#d29922]">"team@company.com"</span>
                    <div className="mt-1 pl-4 text-[#8b949e]">
                      Draft saved to{' '}
                      <span className="text-[#f0883e]">Drafts</span> folder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Constraints badges */}
        <section className="relative mx-auto max-w-6xl px-6 pb-12 md:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {constraints.map((constraint) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-card/50 p-4"
                key={constraint.title}
              >
                <span className="text-2xl">{constraint.icon}</span>
                <div>
                  <p className="font-medium text-sm text-white">
                    {constraint.title}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {constraint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agent Skills callout */}
        <section className="relative mx-auto max-w-6xl px-6 pb-12 md:px-10">
          <Card className="border-[#00d9ff]/20 bg-card/60">
            <CardContent className="pt-6">
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="font-mono text-[#00d9ff] text-[11px] tracking-[0.2em]">
                  AGENT SKILLS
                </p>
                <p className="leading-relaxed">
                  Agent Skills support in VS Code is currently in preview and
                  only available in VS Code Insiders. Enable the{' '}
                  <code className="rounded bg-[#00d9ff]/10 px-2 py-1 font-mono text-[#00d9ff] text-xs">
                    chat.useAgentSkills
                  </code>{' '}
                  setting to use Agent Skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How it works */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[#00d9ff] text-[11px] tracking-[0.2em]">
              HOW IT WORKS
            </p>
          </div>

          <Card className="border-[#00d9ff]/20 bg-card/70">
            <CardContent className="pt-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <code className="rounded bg-[#00d9ff]/10 px-2 py-1 font-mono text-[#00d9ff] text-sm">
                    outlookctl
                  </code>{' '}
                  uses Windows COM automation to control the Outlook desktop
                  client already running on your workstation:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-2">
                    <span className="text-[#00d9ff]">›</span>
                    <strong className="text-white">No API keys or OAuth</strong>{' '}
                    — uses your existing logged-in Outlook session
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00d9ff]">›</span>
                    <strong className="text-white">Entirely local</strong> — no
                    network calls to external services
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00d9ff]">›</span>
                    <strong className="text-white">
                      Same tech as VBA macros
                    </strong>{' '}
                    — standard Windows COM interface
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00d9ff]">›</span>
                    <strong className="text-white">JSON output</strong> —
                    deterministic, parseable responses for AI integration
                  </li>
                </ul>
                <p className="pt-2 font-mono text-sm">
                  Perfect for corporate environments where Graph API access is
                  restricted.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Safety workflow */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-[#3fb950]/20 bg-card/60">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[#3fb950] text-[11px] tracking-[0.2em]">
                  SAFETY FIRST
                </p>
              </div>
              <CardTitle className="text-2xl text-white">
                Draft-First Workflow
              </CardTitle>
              <p className="mt-2 text-muted-foreground">
                Nothing leaves your outbox without explicit approval. All emails
                and meeting invitations go through a draft-review-confirm
                workflow.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00d9ff]/10 font-mono text-[#00d9ff] text-sm">
                    1
                  </div>
                  <p className="mt-3 font-semibold text-white">Create Draft</p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    <code className="text-[#00d9ff]">outlookctl draft</code>{' '}
                    saves to Drafts folder
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00d9ff]/10 font-mono text-[#00d9ff] text-sm">
                    2
                  </div>
                  <p className="mt-3 font-semibold text-white">Review</p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    Check recipients, content, and attachments
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3fb950]/10 font-mono text-[#3fb950] text-sm">
                    3
                  </div>
                  <p className="mt-3 font-semibold text-white">Confirm Send</p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    <code className="text-[#f0883e]">--confirm-send YES</code>{' '}
                    required
                  </p>
                </div>
              </div>
              <p className="mt-6 font-mono text-muted-foreground text-sm">
                All send operations logged to{' '}
                <code className="text-[#00d9ff]">
                  %LOCALAPPDATA%/outlookctl/audit.log
                </code>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[#00d9ff] text-[11px] tracking-[0.2em]">
              FEATURES
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <Card className="border-white/10 bg-card/60" key={feature.title}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <CardTitle className="text-lg text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {feature.commands.map((cmd) => (
                      <code
                        className="rounded bg-[#00d9ff]/10 px-2 py-1 font-mono text-[#00d9ff] text-xs"
                        key={cmd}
                      >
                        {cmd}
                      </code>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick start */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[#00d9ff] text-[11px] tracking-[0.2em]">
              QUICK START
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
            <div className="flex items-center justify-between border-white/10 border-b bg-[#161b22] px-4 py-2">
              <span className="font-mono text-[#6e7681] text-xs">bash</span>
            </div>
            <div className="space-y-1 p-4 font-mono text-sm leading-relaxed">
              <div className="text-[#6e7681]"># Clone and setup</div>
              <div>
                <span className="text-[#8b949e]">git clone</span>{' '}
                <span className="text-[#d29922]">
                  https://github.com/gmickel/outlookctl.git
                </span>
              </div>
              <div>
                <span className="text-[#8b949e]">cd</span>{' '}
                <span className="text-white">outlookctl</span>
              </div>
              <div>
                <span className="text-[#8b949e]">uv</span>{' '}
                <span className="text-white">sync</span>
              </div>
              <div className="pt-2 text-[#6e7681]"># Verify environment</div>
              <div>
                <span className="text-[#8b949e]">uv run python -m</span>{' '}
                <span className="text-[#00d9ff]">outlookctl.cli</span>{' '}
                <span className="text-[#f0883e]">doctor</span>
              </div>
              <div className="pt-2 text-[#6e7681]">
                # Install AI Skill (optional)
              </div>
              <div>
                <span className="text-[#8b949e]">uv run python</span>{' '}
                <span className="text-white">tools/install_skill.py</span>{' '}
                <span className="text-[#f0883e]">--personal</span>{' '}
                <span className="text-[#6e7681]"># Claude Code</span>
              </div>
              <div>
                <span className="text-[#8b949e]">uv run python</span>{' '}
                <span className="text-white">tools/install_skill.py</span>{' '}
                <span className="text-[#f0883e]">--codex</span>{' '}
                <span className="text-[#6e7681]"># OpenAI Codex</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Technical Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  {techSpecs.map((spec) => (
                    <div
                      className="flex justify-between gap-4"
                      key={spec.label}
                    >
                      <dt className="text-muted-foreground text-sm">
                        {spec.label}
                      </dt>
                      <dd className="font-mono text-sm text-white">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
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
                  Developers and technical operators on Windows Devboxes who
                  need to automate Outlook in environments where Microsoft Graph
                  API access is restricted.
                </p>
                <p>
                  Perfect for corporate environments with strict security
                  policies—uses your existing authenticated session, no app
                  registration needed.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://gmickel.github.io/outlookctl/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Full Documentation →
                  </a>
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://github.com/gmickel/outlookctl"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub →
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
