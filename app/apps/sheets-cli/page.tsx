import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierShell from '@/components/layout/atelier-shell';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'sheets-cli',
  description:
    'Command-line interface for Google Sheets with JSON I/O. Key-based updates, batch operations, dry-run mode. Installs as an AI agent skill.',
  slug: 'sheets-cli',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'sheets-cli -- Google Sheets for humans and agents',
  description:
    'Fast, deterministic CLI for Google Sheets. Key-based updates, batch operations, JSON I/O. Installs as a skill for Claude Code and OpenAI Codex.',
  openGraph: {
    title: 'sheets-cli · Mickel Tech',
    description:
      'CLI for Google Sheets. Key-based updates, batch ops, AI agent skills.',
    type: 'website',
    url: 'https://mickel.tech/apps/sheets-cli',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sheets-cli · Mickel Tech',
    description: 'CLI for Google Sheets. Deterministic, JSON I/O, agent-ready.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/sheets-cli' },
};

const commands = [
  {
    title: 'read table',
    description: 'Extract a table as JSON with auto header detection.',
  },
  {
    title: 'update key',
    description: 'Modify cells by column value, not fragile row index.',
  },
  { title: 'append', description: 'Add rows with JSON values.' },
  { title: 'batch', description: 'Execute multiple operations atomically.' },
];

const features = [
  {
    title: 'Key-based updates',
    description:
      'Match on a key column instead of a row number. Data moves; updates still work.',
  },
  {
    title: 'Batch operations',
    description:
      'Multiple reads, writes, and updates in one atomic API request.',
  },
  {
    title: 'JSON I/O',
    description:
      'All input and output structured JSON. Deterministic, parseable, agent-friendly.',
  },
  {
    title: 'Dry-run',
    description:
      'Preview changes before applying. See exactly what will happen.',
  },
  {
    title: 'Agent skills',
    description:
      'Installs as a skill for Claude Code and OpenAI Codex. AI discovers it automatically.',
  },
  {
    title: 'Structured errors',
    description:
      'Exit codes and messages designed for automation. Validation, auth, permissions, API errors distinct.',
  },
];

const specs = [
  { label: 'Stack', value: 'Bun + TypeScript' },
  { label: 'Output', value: 'Structured JSON' },
  { label: 'Auth', value: 'OAuth 2.0 (Desktop)' },
  { label: 'Runtime', value: 'Bun' },
  { label: 'License', value: 'MIT' },
];

export default function SheetsCLIPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'sheets-cli', url: '/apps/sheets-cli' },
        ])}
      />

      <AtelierAppHero
        category="06 / CLI"
        description="A fast, deterministic CLI for reading and writing Google Sheets. Key-based updates instead of fragile row indices. Batch operations for atomic multi-step workflows. JSON everywhere. Designed for humans at the terminal and AI agents that need programmatic spreadsheet access."
        idx="06"
        image="/sheets-cli/icon.png"
        imageKind="logo"
        meta={[
          { label: 'Stack', value: 'Bun + TypeScript' },
          { label: 'Platforms', value: 'Claude Code, Codex' },
          { label: 'License', value: 'MIT' },
        ]}
        name="sheets-cli"
        primaryCta={{
          label: 'View source',
          href: 'https://github.com/gmickel/sheets-cli',
          external: true,
        }}
        status="Released"
        tagline="Google Sheets for humans and agents."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Why key updates"
        lede="Row numbers change when data is sorted, filtered, or inserted. Keys don't."
        title="Stable updates."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-[hsl(var(--ink))]/10 border-t pt-5">
            <p className="atelier-mono text-[10.5px] text-[hsl(var(--rust))] uppercase tracking-[0.14em]">
              Fragile
            </p>
            <div className="codex-panel mt-3">
              <div className="codex-panel__bar flex items-center gap-2">
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
              </div>
              <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.6]">
                {'update --row 5 --set Status=Done'}
              </pre>
            </div>
            <p className="atelier-body mt-4 text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
              Row 5 today might be row 8 tomorrow.
            </p>
          </div>
          <div className="border-[hsl(var(--ink))]/10 border-t pt-5">
            <p className="atelier-mono text-[10.5px] text-[hsl(var(--navy))] uppercase tracking-[0.14em]">
              Stable
            </p>
            <div className="codex-panel mt-3">
              <div className="codex-panel__bar flex items-center gap-2">
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
              </div>
              <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.6]">
                {`update key --key-col Name \\
  --key Acme --set Status=Done`}
              </pre>
            </div>
            <p className="atelier-body mt-4 text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
              Finds "Acme" wherever it is.
            </p>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="02 / Commands" title="Four verbs.">
        <AtelierFeatureGrid items={commands} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="03 / Features" title="What's in the box.">
        <AtelierFeatureGrid cols={3} items={features} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Agents"
        lede="Install as a skill and your AI assistant can read, write, and update spreadsheets directly."
        title="Agent integration."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`# Claude Code (project)
sheets-cli install-skill

# Personal use
sheets-cli install-skill --global

# OpenAI Codex
sheets-cli install-skill --codex`}
          </pre>
        </div>
        <div className="mt-8 border-[hsl(var(--ink))]/10 border-t pt-6">
          <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
            Example prompts
          </p>
          <ul className="atelier-body mt-4 space-y-2.5 border-[hsl(var(--ink))]/10 border-l pl-5 text-[0.95rem] text-[hsl(var(--ink))]/80 italic">
            <li>"Read the Projects sheet and summarize active tasks."</li>
            <li>"Update the status of Acme to Done in the tracker."</li>
            <li>"Append today's metrics to the dashboard sheet."</li>
          </ul>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Quick start"
        title="Install + authenticate."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`git clone https://github.com/gmickel/sheets-cli.git
cd sheets-cli
bun install && bun run build

# Authenticate
sheets-cli auth login --credentials ./client_secret.json

# Start using
sheets-cli read table --sheet "Sheet1"`}
          </pre>
        </div>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="06 / Spec" title="Stack + use cases.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={specs} />
          <div className="atelier-body space-y-3 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Use cases
            </p>
            <ul className="space-y-2.5 border-[hsl(var(--ink))]/10 border-l pl-5">
              <li>
                <span className="text-[hsl(var(--ink))]">CI/CD pipelines</span>{' '}
                · Deployment trackers.
              </li>
              <li>
                <span className="text-[hsl(var(--ink))]">Data ingestion</span> ·
                Batch append from scripts.
              </li>
              <li>
                <span className="text-[hsl(var(--ink))]">AI workflows</span> ·
                Agents managing their own sheets.
              </li>
              <li>
                <span className="text-[hsl(var(--ink))]">Manual ops</span> ·
                Quick terminal updates.
              </li>
            </ul>
            <p className="atelier-mono pt-3 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps"
              >
                Back to workshop →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
