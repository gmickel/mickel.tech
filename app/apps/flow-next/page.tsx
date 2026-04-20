import type { Metadata } from 'next';
import Link from 'next/link';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
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
    'Multi-platform AI agent orchestration with zero external dependencies. Works on Claude Code, Factory Droid, OpenAI Codex, and OpenCode. Task graphs, re-anchoring, cross-model reviews.',
  slug: 'flow-next',
  category: 'DeveloperApplication',
  version: '0.1.0',
  operatingSystem: 'Cross-platform',
  programmingLanguage: 'Python',
};

export const metadata: Metadata = {
  title: 'Flow-Next — Zero-dep agent orchestration',
  description:
    'Multi-platform AI agent orchestration with zero dependencies. Works on Claude Code, Factory Droid, OpenAI Codex, and OpenCode. Task graphs, re-anchoring, cross-model reviews.',
  keywords: [
    'Claude Code plugin',
    'Factory Droid',
    'OpenAI Codex',
    'OpenCode',
    'AI agent orchestration',
    'task tracking',
    'zero dependencies',
    'cross-model review',
    'flowctl',
  ],
  openGraph: {
    title: 'Flow-Next · Mickel Tech',
    description:
      'Agents that finish what they start. Works on Claude Code, Factory Droid, OpenAI Codex.',
    type: 'website',
    url: 'https://mickel.tech/apps/flow-next',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow-Next · Mickel Tech',
    description: 'Task graphs, re-anchoring, cross-model reviews. Zero deps.',
    creator: '@gmickel',
  },
  alternates: { canonical: 'https://mickel.tech/apps/flow-next' },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    question: 'What is Flow-Next?',
    answer:
      'Multi-platform AI agent orchestration with zero external dependencies. Works on Claude Code, Factory Droid, OpenAI Codex, and OpenCode. Bundled task tracking, dependency graphs, automated code reviews.',
  },
  {
    question: 'How do I install Flow-Next?',
    answer:
      'Claude Code: /plugin marketplace add https://github.com/gmickel/flow-next then /plugin install flow-next. Factory Droid: same flow via droid plugin marketplace add. Codex: clone and install via /plugins. OpenCode: see flow-next-opencode.',
  },
  {
    question: 'How do I uninstall?',
    answer:
      'Delete the .flow/ directory. No hooks, no daemons, no config to clean up.',
  },
];

const commands = [
  {
    title: '/flow-next:plan',
    description: 'Research + produce epic with dependency-ordered tasks.',
  },
  {
    title: '/flow-next:work',
    description: 'Execute epic task by task with re-anchoring.',
  },
  {
    title: '/flow-next:interview',
    description: 'Deep interview to flesh out spec.',
  },
  {
    title: '/flow-next:plan-review',
    description: 'Carmack-level plan review (Codex or RepoPrompt).',
  },
  {
    title: '/flow-next:impl-review',
    description: 'Carmack-level impl review.',
  },
  {
    title: '/flow-next:epic-review',
    description: 'Epic completion gate before close.',
  },
  {
    title: '/flow-next:prime',
    description: 'Assess codebase agent-readiness, propose fixes.',
  },
  {
    title: '/flow-next:sync',
    description: 'Update downstream tasks after drift.',
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
      'Bundled flowctl.py. No external CLI. No npm packages. Just Python 3.',
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
];

const planFlow = [
  {
    title: 'Scout',
    description:
      'Seven research scouts run in parallel (repo, context, practice, docs, gap, security, epic).',
  },
  {
    title: 'Gap analysis',
    description:
      'Identify missing flows and edge cases before a line is written.',
  },
  {
    title: 'Epic + tasks',
    description:
      'Create epic with dependency-ordered tasks and doc update criteria.',
  },
  {
    title: 'Auto-review',
    description:
      'Optional Carmack-level review via Codex CLI or RepoPrompt before you start.',
  },
];

const workFlow = [
  {
    title: 'Re-anchor',
    description:
      'Re-read epic + task + git state. Zero drift after compaction.',
  },
  {
    title: 'Pre-implementation search',
    description: 'Look for similar functionality. Reuse > extend > create.',
  },
  {
    title: 'Implement + test',
    description: 'Follow existing patterns. Verify acceptance criteria.',
  },
  {
    title: 'Evidence + loop',
    description: 'Record summary via flowctl, then the next ready task.',
  },
];

export default function FlowNextPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'Flow-Next', url: '/apps/flow-next' },
        ])}
      />
      <JsonLd data={faqSchema(FAQS)} />

      <AtelierAppHero
        category="02 / Orchestration"
        description="One task at a time with full review cycles, or throw the whole epic at it and walk away. Either way, re-anchoring, evidence, and cross-model review. Planning ensures every task fits the context window; re-anchoring after each task (and after compaction) means zero drift."
        idx="02"
        image="/flow/logo.svg"
        imageKind="logo"
        meta={[
          { label: 'Stack', value: 'Python 3' },
          { label: 'Platforms', value: '4 (Claude, Droid, Codex, OpenCode)' },
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
        <ul className="space-y-8">
          <li className="border-[hsl(var(--rust))]/40 border-l-2 pl-5">
            <p className="atelier-display text-[1.15rem] text-[hsl(var(--ink))] italic leading-[1.45]">
              "Flow-next is simply the best coding flow, not even close, and
              still a side project."
            </p>
            <p className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Tiago Freitas · @tiagoefreitas
            </p>
          </li>
          <li className="border-[hsl(var(--ink))]/20 border-l-2 pl-5">
            <p className="atelier-display text-[1.05rem] text-[hsl(var(--ink))]/85 italic leading-[1.5]">
              "Cross-model review is genius. It exploits model diversity as a
              feature. Different models make different mistakes, so using them
              as mutual reviewers creates a safety net single-model workflows
              can't match."
            </p>
            <p className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              David P · @Lat3ntG3nius
            </p>
          </li>
          <li className="border-[hsl(var(--ink))]/20 border-l-2 pl-5">
            <p className="atelier-display text-[1.05rem] text-[hsl(var(--ink))]/85 italic leading-[1.5]">
              "I've found it generating production-quality code. Far, far better
              than any of the other tools I've tried."
            </p>
            <p className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Claire Novotny · @clairernovotny
            </p>
          </li>
        </ul>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Problem"
        lede="Most agent failures aren't about model capability. They're about process."
        title="Agents fail for predictable reasons."
      >
        <AtelierFeatureGrid
          items={[
            {
              title: 'Coding before understanding',
              description: 'Starting work without reading the codebase.',
            },
            {
              title: 'Reinventing patterns',
              description:
                'Ignoring conventions that already exist in the repo.',
            },
            {
              title: 'Losing the plan',
              description:
                'Drifting mid-implementation after context compaction.',
            },
            {
              title: 'Missing edge cases',
              description: 'Gaps that were obvious in hindsight.',
            },
          ]}
        />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Plan"
        lede="Structured research before the first line of code."
        title="/flow-next:plan"
      >
        <AtelierFeatureGrid items={planFlow} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Work"
        lede="Task-by-task execution with re-anchoring between every step."
        title="/flow-next:work"
      >
        <AtelierFeatureGrid items={workFlow} />
        <div className="codex-panel mt-10">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`# one task at a time (full review cycle)
/flow-next:work fn-1.1

# entire epic (walk away)
/flow-next:work fn-1

# completion gate before epic closes
/flow-next:epic-review fn-1`}
          </pre>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Commands"
        lede="Eight verbs. One disciplined workflow."
        title="Surface area."
      >
        <AtelierFeatureGrid cols={3} items={commands} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="06 / Features"
        lede="Why it works where other orchestrators don't."
        title="Principles, not magic."
      >
        <AtelierFeatureGrid items={coreFeatures} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="07 / Spec" title="Install + run.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList
            items={[
              { label: 'Runtime', value: 'Python 3.8+, git' },
              {
                label: 'Platforms',
                value: 'Claude Code, Droid, Codex, OpenCode',
              },
              { label: 'Uninstall', value: 'rm -rf .flow/' },
              { label: 'License', value: 'MIT' },
            ]}
          />
          <div className="atelier-body space-y-4 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Claude Code
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
/plugin install flow-next`}
              </pre>
            </div>
            <p className="atelier-mono pt-2 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps/flow"
              >
                See also: Flow (Beads version) →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
