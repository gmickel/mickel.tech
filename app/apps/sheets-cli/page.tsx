import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'sheets-cli',
  description:
    'Command-line interface for Google Sheets with JSON I/O. Key-based updates, batch operations, dry-run mode. Installs as AI agent skill.',
  slug: 'sheets-cli',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'sheets-cli — Google Sheets for Humans & Agents',
  description:
    'Fast, deterministic CLI for Google Sheets. Key-based updates, batch operations, JSON I/O. Installs as a skill for Claude Code and OpenAI Codex.',
  openGraph: {
    title: 'sheets-cli — Google Sheets for Humans & Agents',
    description:
      'Command-line interface for Google Sheets with JSON I/O. Key-based updates, batch operations, AI agent integration.',
    type: 'website',
    url: 'https://mickel.tech/apps/sheets-cli',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sheets-cli — Google Sheets for Humans & Agents',
    description:
      'CLI for Google Sheets. Key-based updates, batch ops, AI agent skills.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/sheets-cli',
  },
};

const commands = [
  {
    name: 'read table',
    description: 'Extract table as JSON with auto header detection',
  },
  {
    name: 'update key',
    description: 'Modify cells by column value, not fragile row index',
  },
  {
    name: 'append',
    description: 'Add rows with JSON values',
  },
  {
    name: 'batch',
    description: 'Execute multiple operations atomically',
  },
];

const features = [
  {
    title: 'Key-Based Updates',
    description:
      'Update rows by matching a key column instead of fragile row indices. Data moves? Updates still work.',
    icon: '🔑',
  },
  {
    title: 'Batch Operations',
    description:
      'Execute multiple reads, writes, and updates in a single API request. Atomic and efficient.',
    icon: '📦',
  },
  {
    title: 'JSON I/O',
    description:
      'All input and output uses structured JSON. Deterministic, parseable, AI-friendly.',
    icon: '{}',
  },
  {
    title: 'Dry-Run Mode',
    description:
      'Preview changes before applying them. See exactly what will happen without modifying data.',
    icon: '👁',
  },
  {
    title: 'Agent Skills',
    description:
      'Install as a skill for Claude Code, OpenAI Codex, and VS Code. AI discovers it automatically.',
    icon: '🤖',
  },
  {
    title: 'Structured Errors',
    description:
      'Exit codes and error messages designed for automation. Validation, auth, permissions, API errors all distinct.',
    icon: '⚠',
  },
];

const techSpecs = [
  { label: 'Built with', value: 'Bun + TypeScript' },
  { label: 'Output', value: 'Structured JSON' },
  { label: 'Auth', value: 'OAuth 2.0 (Desktop app)' },
  { label: 'Requirements', value: 'Bun runtime' },
  { label: 'License', value: 'MIT (Open Source)' },
];

export default function SheetsCLIPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'sheets-cli', url: '/apps/sheets-cli' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - green for Google Sheets */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.12),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(74,222,128,0.08),transparent_30%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className="border-green-500/60 bg-green-500/10 text-green-400"
              variant="outline"
            >
              GOOGLE SHEETS
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              CLI
            </Badge>
            <Badge
              className="border-primary/40 bg-primary/10 text-primary"
              variant="outline"
            >
              Open Source
            </Badge>
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Text content */}
            <div className="flex-1">
              <h1 className="font-bold font-mono text-4xl text-white leading-tight md:text-5xl">
                sheets-cli
              </h1>
              <p className="mt-2 font-mono text-green-400 text-xl">
                Google Sheets for humans & agents
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
                A fast, deterministic CLI for reading and writing Google Sheets.
                <span className="text-white"> Key-based updates</span> instead
                of fragile row indices.{' '}
                <span className="text-white">Batch operations</span> for atomic
                multi-step workflows.{' '}
                <span className="text-white">JSON everywhere</span>.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Designed for both humans at the terminal and AI agents that need
                programmatic spreadsheet access.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 border border-green-500 bg-green-500/10 px-6 py-3 font-mono text-green-400 text-sm uppercase tracking-wide transition-all hover:bg-green-500/20"
                  href="https://github.com/gmickel/sheets-cli"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Terminal demo */}
            <div className="relative lg:w-[420px]">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-green-500/10">
                {/* Terminal header */}
                <div className="flex items-center gap-2 border-white/10 border-b bg-[#161b22] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-auto font-mono text-[#6e7681] text-xs">
                    sheets-cli
                  </span>
                </div>
                {/* Terminal body */}
                <div className="space-y-4 p-4 font-mono text-sm leading-relaxed">
                  <div>
                    <span className="text-[#3fb950]">$</span>{' '}
                    <span className="text-green-400">
                      sheets-cli read table
                    </span>{' '}
                    <span className="text-[#f0883e]">--sheet</span>{' '}
                    <span className="text-[#d29922]">"Projects"</span>
                    <div className="mt-1 pl-4 text-[#8b949e]">
                      {'{'}"ok": true, "result": [...]{'}'}
                    </div>
                  </div>
                  <div>
                    <span className="text-[#3fb950]">$</span>{' '}
                    <span className="text-green-400">
                      sheets-cli update key
                    </span>{' '}
                    <span className="text-[#f0883e]">--key-col</span>{' '}
                    <span className="text-[#d29922]">"Name"</span>{' '}
                    <span className="text-[#f0883e]">--key</span>{' '}
                    <span className="text-[#d29922]">"Acme"</span>
                    <div className="mt-1 pl-4 text-[#8b949e]">
                      Updated row 5: Status → Done
                    </div>
                  </div>
                  <div>
                    <span className="text-[#3fb950]">$</span>{' '}
                    <span className="text-green-400">sheets-cli batch</span>{' '}
                    <span className="text-[#f0883e]">--ops</span>{' '}
                    <span className="text-[#d29922]">'[...]'</span>
                    <div className="mt-1 pl-4 text-[#8b949e]">
                      2 operations completed atomically
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <code className="w-fit rounded bg-green-500/20 px-2 py-1 font-mono text-green-400 text-xs">
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

        {/* Key-Based Updates */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-green-500/20 bg-card/70">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">
                Why <code className="text-green-400">update key</code>?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Traditional spreadsheet APIs update by row number. But row
                numbers change when data is sorted, filtered, or when rows are
                inserted.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <p className="mb-2 font-mono text-destructive text-xs">
                    FRAGILE
                  </p>
                  <code className="text-sm text-white">
                    update --row 5 --set Status=Done
                  </code>
                  <p className="mt-2 text-sm">
                    Row 5 today might be row 8 tomorrow.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                  <p className="mb-2 font-mono text-green-400 text-xs">
                    STABLE
                  </p>
                  <code className="text-sm text-white">
                    update key --key-col Name --key Acme --set Status=Done
                  </code>
                  <p className="mt-2 text-sm">Finds "Acme" wherever it is.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features Grid */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              FEATURES
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Agent Integration */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-green-500/20 bg-card/70">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">
                AI Agent Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Install as a skill so your AI assistant can read, write, and
                update spreadsheets on your behalf.
              </p>

              <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d1117]">
                <div className="flex items-center justify-between border-white/10 border-b bg-[#161b22] px-4 py-2">
                  <span className="font-mono text-[#6e7681] text-xs">bash</span>
                </div>
                <div className="space-y-1 p-4 font-mono text-sm leading-relaxed">
                  <div className="text-[#6e7681]"># Claude Code (project)</div>
                  <div>
                    <span className="text-green-400">
                      sheets-cli install-skill
                    </span>
                  </div>
                  <div className="pt-2 text-[#6e7681]"># Personal use</div>
                  <div>
                    <span className="text-green-400">
                      sheets-cli install-skill
                    </span>{' '}
                    <span className="text-[#f0883e]">--global</span>
                  </div>
                  <div className="pt-2 text-[#6e7681]"># OpenAI Codex</div>
                  <div>
                    <span className="text-green-400">
                      sheets-cli install-skill
                    </span>{' '}
                    <span className="text-[#f0883e]">--codex</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                <p className="mb-3 font-mono text-muted-foreground text-xs uppercase tracking-wide">
                  Example prompts for your AI
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-white">"</span>Read the Projects sheet
                    and summarize active tasks
                    <span className="text-white">"</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-white">"</span>Update the status of
                    Acme to Done in the tracker
                    <span className="text-white">"</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-white">"</span>Append today's metrics
                    to the dashboard sheet
                    <span className="text-white">"</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Start */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              QUICK START
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
            <div className="flex items-center justify-between border-white/10 border-b bg-[#161b22] px-4 py-2">
              <span className="font-mono text-[#6e7681] text-xs">bash</span>
            </div>
            <div className="space-y-1 p-4 font-mono text-sm leading-relaxed">
              <div className="text-[#6e7681]"># Clone and build</div>
              <div>
                <span className="text-[#8b949e]">git clone</span>{' '}
                <span className="text-[#d29922]">
                  https://github.com/gmickel/sheets-cli.git
                </span>
              </div>
              <div>
                <span className="text-[#8b949e]">cd</span>{' '}
                <span className="text-white">sheets-cli</span>
              </div>
              <div>
                <span className="text-[#8b949e]">bun install</span> &&{' '}
                <span className="text-[#8b949e]">bun run build</span>
              </div>
              <div className="pt-2 text-[#6e7681]"># Authenticate</div>
              <div>
                <span className="text-green-400">sheets-cli auth login</span>{' '}
                <span className="text-[#f0883e]">--credentials</span>{' '}
                <span className="text-white">./client_secret.json</span>
              </div>
              <div className="pt-2 text-[#6e7681]"># Start using</div>
              <div>
                <span className="text-green-400">sheets-cli read table</span>{' '}
                <span className="text-[#f0883e]">--sheet</span>{' '}
                <span className="text-[#d29922]">"Sheet1"</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs & Use Cases */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Stack</CardTitle>
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
                <CardTitle className="text-lg text-white">Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-green-400">›</span>
                    <span>
                      <span className="text-white">CI/CD pipelines</span> —
                      Update deployment trackers
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">›</span>
                    <span>
                      <span className="text-white">Data ingestion</span> — Batch
                      append from scripts
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">›</span>
                    <span>
                      <span className="text-white">AI workflows</span> — Let
                      agents manage your sheets
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">›</span>
                    <span>
                      <span className="text-white">Manual ops</span> — Quick
                      terminal-based updates
                    </span>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://github.com/gmickel/sheets-cli"
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
