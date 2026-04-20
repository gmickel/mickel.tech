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
  name: 'outlookctl',
  description:
    'Local CLI bridge for Outlook Classic automation via COM. AI-assisted email and calendar management with Claude Code. No API keys, no OAuth.',
  slug: 'outlookctl',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'outlookctl -- Control Outlook from the command line',
  description:
    'Local CLI bridge for Outlook Classic automation on Windows via COM. AI-assisted email and calendar management with Claude Code. No API keys, no OAuth.',
  openGraph: {
    title: 'outlookctl · Mickel Tech',
    description:
      'Local CLI bridge for Outlook Classic automation. AI-assisted email and calendar management.',
    type: 'website',
    url: 'https://mickel.tech/apps/outlookctl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'outlookctl · Mickel Tech',
    description: 'Control Outlook from the CLI. No API keys, no OAuth.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/outlookctl' },
};

const features = [
  {
    title: 'Email management',
    description:
      'List, search, draft, send. AI-assisted triage and response generation with safety-first workflows.',
  },
  {
    title: 'Calendar control',
    description:
      'View events, create meetings, respond to invites. Shared calendars included.',
  },
  {
    title: 'Claude Code skill',
    description:
      'Built-in skill for AI-assisted workflows. Let Claude help triage the inbox and manage the schedule.',
  },
  {
    title: 'Safety first',
    description:
      'Draft-first workflow, explicit confirmations, audit logging. Nothing sends without approval.',
  },
];

const constraints = [
  { title: 'Windows only', description: 'COM is a Windows technology.' },
  { title: 'No API keys', description: 'Uses your existing Outlook session.' },
  {
    title: 'Local only',
    description: 'No network calls to external services.',
  },
  {
    title: 'AI skills',
    description: 'Claude Code and OpenAI Codex integration.',
  },
];

const specs = [
  { label: 'Stack', value: 'Python 3.12 + pywin32' },
  { label: 'Automation', value: 'Windows COM (Classic)' },
  { label: 'Output', value: 'Structured JSON' },
  { label: 'Requirements', value: 'Windows + Classic Outlook' },
  { label: 'Dependencies', value: 'pywin32' },
  { label: 'License', value: 'MIT' },
];

export default function OutlookctlPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'outlookctl', url: '/apps/outlookctl' },
        ])}
      />

      <AtelierAppHero
        category="07 / CLI"
        description="Can't access Exchange via Microsoft Graph API? Control Outlook directly through COM automation on your Windows workstation. Let Claude help manage email and calendar. No API keys, no OAuth, just your existing Outlook session. Ships with a Claude Code skill for AI-assisted workflows with safety-first defaults."
        idx="07"
        image="/outlookctl/outlookctl-hero.png"
        imageKind="shot"
        meta={[
          { label: 'Platform', value: 'Windows' },
          { label: 'Stack', value: 'Python 3.12' },
          { label: 'License', value: 'MIT' },
        ]}
        name="outlookctl"
        primaryCta={{
          label: 'Documentation',
          href: 'https://gmickel.github.io/outlookctl/',
          external: true,
        }}
        secondaryCta={{
          label: 'View source',
          href: 'https://github.com/gmickel/outlookctl',
          external: true,
        }}
        status="Released"
        tagline="Control Outlook from the command line."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Constraints"
        lede="A clear scope. Windows Classic Outlook, using the session you already have."
        title="Deliberately narrow."
      >
        <AtelierFeatureGrid items={constraints} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / How it works"
        lede="outlookctl uses Windows COM automation to control the Outlook desktop client already running on your workstation."
        title="Same tech as VBA macros."
      >
        <ul className="atelier-body space-y-3 border-[hsl(var(--ink))]/10 border-l pl-5 text-[1.02rem] text-[hsl(var(--ink))]/85 leading-[1.7]">
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            <span className="text-[hsl(var(--ink))]">No API keys or OAuth</span>{' '}
            · uses the existing logged-in Outlook session.
          </li>
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            <span className="text-[hsl(var(--ink))]">Entirely local</span> · no
            network calls to external services.
          </li>
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            <span className="text-[hsl(var(--ink))]">Standard Windows COM</span>{' '}
            · the same interface VBA macros use.
          </li>
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            <span className="text-[hsl(var(--ink))]">JSON output</span> ·
            deterministic, parseable for AI integration.
          </li>
        </ul>
        <p className="atelier-mono mt-8 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          Built for corporate environments where Graph API access is restricted.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Safety"
        lede="Nothing leaves the outbox without explicit approval. All emails and meeting invitations go through a draft-review-confirm workflow."
        title="Draft-first by default."
      >
        <AtelierFeatureGrid
          cols={3}
          items={[
            {
              title: 'Create draft',
              description: 'outlookctl draft saves to the Drafts folder.',
            },
            {
              title: 'Review',
              description: 'Check recipients, content, and attachments.',
            },
            {
              title: 'Confirm send',
              description: '--confirm-send YES is required to dispatch.',
            },
          ]}
        />
        <p className="atelier-mono mt-8 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          All send ops logged to %LOCALAPPDATA%/outlookctl/audit.log.
        </p>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="04 / Features" title="What it does.">
        <AtelierFeatureGrid items={features} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Quick start"
        title="Install, verify, skill."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`git clone https://github.com/gmickel/outlookctl.git
cd outlookctl
uv sync

# Verify environment
uv run python -m outlookctl.cli doctor

# Install AI skill
uv run python tools/install_skill.py --personal   # Claude Code
uv run python tools/install_skill.py --codex      # OpenAI Codex`}
          </pre>
        </div>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="06 / Spec" title="Technical details.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={specs} />
          <div className="atelier-body space-y-4 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Who it's for
            </p>
            <p>
              Developers and operators on Windows Devboxes who need to automate
              Outlook in environments where Graph API access is restricted.
            </p>
            <p>
              Perfect for corporate environments with strict security policies.
              Uses your existing authenticated session. No app registration
              needed.
            </p>
            <p className="atelier-mono pt-2 text-[11px] uppercase tracking-[0.14em]">
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
