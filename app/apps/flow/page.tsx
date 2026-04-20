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
  name: 'Flow',
  description:
    'Claude Code plugin for two-step workflow: plan first, work second. Strong research upfront, explicit plan reuse, plan re-read between tasks.',
  slug: 'flow',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'Flow — Plan first, work second',
  description:
    'Claude Code marketplace plugin for structured development workflow. Research agents, gap analysis, disciplined execution. Most failures come from weak planning. Flow fixes that.',
  openGraph: {
    title: 'Flow · Mickel Tech',
    description:
      'Claude Code plugin. Research agents, gap analysis, disciplined execution.',
    type: 'website',
    url: 'https://mickel.tech/apps/flow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow · Mickel Tech',
    description:
      'Plan first, work second. A Claude Code plugin for disciplined execution.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/flow' },
};

const commands = [
  {
    title: '/flow:interview',
    description: 'Deep interview to flesh out a spec or bead.',
  },
  {
    title: '/flow:plan',
    description: 'Research + produce plan, with optional auto-review.',
  },
  {
    title: '/flow:work',
    description: 'Execute plan end-to-end, with optional auto-review.',
  },
  {
    title: '/flow:plan-review',
    description: 'Carmack-level plan review via rp-cli.',
  },
  {
    title: '/flow:impl-review',
    description: 'Carmack-level implementation review.',
  },
];

const agents = [
  {
    title: 'repo-scout',
    description: 'Fast pattern finder via Grep, Glob, Read. ~65k tokens.',
  },
  {
    title: 'context-scout',
    description: 'Deep architecture via RepoPrompt. 30% fewer tokens.',
  },
  {
    title: 'practice-scout',
    description: 'Community best practices for the task.',
  },
  {
    title: 'docs-scout',
    description: 'Official documentation for the stack in play.',
  },
  {
    title: 'flow-gap-analyst',
    description: 'Edge cases and missing user flows.',
  },
  {
    title: 'quality-auditor',
    description: 'Optional security and risk review.',
  },
];

const planSteps = [
  {
    title: 'Setup',
    description: 'Choose research depth and review preference.',
  },
  { title: 'Research', description: 'Three research agents run in parallel.' },
  { title: 'Gap check', description: 'Detect missing flows before writing.' },
  {
    title: 'Write plan',
    description: 'References and acceptance checks into plans/<slug>.md.',
  },
];

const workSteps = [
  {
    title: 'Confirm + branch',
    description: 'Clarify blockers; set up branch or worktree.',
  },
  { title: 'Tasks', description: 'Turn plan into a TodoWrite list.' },
  { title: 'Execute', description: 'Loop with plan re-read between tasks.' },
  {
    title: 'Ship',
    description: 'Tests + optional audit, then Definition of Done.',
  },
];

export default function FlowPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'Flow', url: '/apps/flow' },
        ])}
      />

      <AtelierAppHero
        category="05 / Orchestration"
        description="Most failures come from weak planning or drifting from the plan. Flow fixes both with structured research upfront, explicit plan reuse, and plan re-read between tasks. Five commands, six specialised research agents, seven skills. One disciplined workflow that actually ships."
        idx="05"
        image="/flow/logo.svg"
        imageKind="logo"
        meta={[
          { label: 'Platform', value: 'Claude Code' },
          { label: 'Surface', value: '5 commands / 6 agents' },
          { label: 'License', value: 'MIT' },
        ]}
        name="Flow"
        primaryCta={{
          label: 'Marketplace',
          href: 'https://github.com/gmickel/gmickel-claude-marketplace',
          external: true,
        }}
        secondaryCta={{
          label: 'Plugin docs',
          href: 'https://github.com/gmickel/gmickel-claude-marketplace/tree/main/plugins/flow',
          external: true,
        }}
        status="Released"
        tagline="Plan first, work second."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Problem"
        lede="Most agent failures aren't about model capability. They're about process."
        title="Agents fail for predictable reasons."
      >
        <AtelierFeatureGrid
          items={[
            {
              title: 'Coding before context',
              description:
                'Starting to code before understanding the codebase.',
            },
            {
              title: 'Reinventing patterns',
              description: 'Ignoring conventions already in the repo.',
            },
            {
              title: 'Losing the plan',
              description: 'Forgetting the original plan mid-implementation.',
            },
            {
              title: 'Missing edges',
              description: 'Obvious-in-hindsight edge cases slipping through.',
            },
          ]}
        />
        <p className="atelier-mono mt-10 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          Flow enforces the discipline that makes agents reliable.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Workflow"
        lede="Two steps. Plan produces plans/<slug>.md with references; work executes with discipline."
        title="/flow:plan → /flow:work"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">Plan</p>
            <AtelierFeatureGrid items={planSteps} />
          </div>
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">Work</p>
            <AtelierFeatureGrid items={workSteps} />
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Agents"
        lede="Each scout has a narrow job; you compose them via /flow:plan."
        title="Specialised research agents."
      >
        <AtelierFeatureGrid cols={3} items={agents} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Review"
        lede="When RepoPrompt rp-cli is detected, plan and work ask upfront which review mode. Different models catch different blind spots."
        title="Cross-model reviews."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`> /flow:plan Add OAuth login
? Review · Run Carmack-level review after?
  a) RepoPrompt chat
  b) Export for external LLM
  c) No
> b
... research + planning ...
OK  Exported to ~/Desktop/plan-review-oauth.md`}
          </pre>
        </div>
        <p className="atelier-body mt-6 text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.65]">
          Export mode creates a markdown file with full context (file tree, code
          maps, selected files, and the review prompt) that you paste into
          ChatGPT Pro, Claude web, or any LLM you prefer.
        </p>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="05 / Commands" title="Surface area.">
        <AtelierFeatureGrid cols={3} items={commands} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="06 / Install" title="From the marketplace.">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="codex-panel">
            <div className="codex-panel__bar flex items-center gap-2">
              <span className="codex-panel__dot" />
              <span className="codex-panel__dot" />
              <span className="codex-panel__dot" />
            </div>
            <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
              {`/plugin marketplace add \\
  https://github.com/gmickel/gmickel-claude-marketplace
/plugin install flow`}
            </pre>
          </div>
          <div className="atelier-body space-y-3 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <AtelierSpecList
              items={[
                { label: 'Platform', value: 'Claude Code' },
                { label: 'Optional', value: 'RepoPrompt rp-cli' },
                { label: 'Beads', value: 'Auto-detected' },
                { label: 'License', value: 'MIT' },
              ]}
            />
            <p className="atelier-mono pt-3 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps/flow-next"
              >
                See the zero-dep successor: Flow-Next →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
