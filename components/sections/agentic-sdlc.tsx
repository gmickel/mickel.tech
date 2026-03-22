import Link from 'next/link';
import CourseSignup from '@/components/course-signup';
import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  { value: '10+', label: 'Teams rolled out', detail: 'mid-market B2B' },
  {
    value: '500+',
    label: 'Engineers enabled',
    detail: 'methodology + tooling',
  },
  { value: '7+', label: 'Industries', detail: 'healthcare to finance' },
] as const;

const stages = [
  {
    tag: 'STAGE 1',
    name: 'Foundation',
    timeline: 'Weeks 1-4',
    impact: '20-30%',
    impactLabel: 'productivity gain',
    items: [
      'Tooling rollout: IDE agents, API keys, security config',
      'Hands-on training: pair programming on real tasks, not slides',
      'Starter Kit: rules, guides, PR templates, eval baselines',
      'Quick wins: 2-3x on individual tasks to build confidence',
    ],
  },
  {
    tag: 'STAGE 2',
    name: 'Methodology shift',
    timeline: 'Months 2-6',
    impact: '2-3x',
    impactLabel: 'sustained multiplier',
    items: [
      'Automated reviews: AI reviews 100% of PRs, humans focus on critical paths',
      'Connected requirements: specs flow into agent tasks, output flows back to acceptance',
      'Observability flywheels: agents watch CI/CD, auto-file bugs with root cause',
      'Self-iteration: agent runs tests, reads errors, fixes, re-runs',
    ],
  },
] as const;

const maturityLevels = [
  {
    level: 'L0',
    name: 'Legacy',
    desc: 'No AI tools, manual everything',
    impact: 'Baseline',
    active: false,
  },
  {
    level: 'L1',
    name: 'Assistant',
    desc: 'Copilot adopted, same process',
    impact: '10-15%',
    active: false,
  },
  {
    level: 'L2',
    name: 'Enabled',
    desc: 'Starter Kit + coaching, habits changing',
    impact: '20-30%',
    active: false,
  },
  {
    level: 'L3',
    name: 'Native',
    desc: 'Spec-driven, agentic workflows, humans orchestrate',
    impact: '2-3x',
    active: false,
  },
  {
    level: 'L4',
    name: 'Factory',
    desc: 'Autonomous agents ship, review-gated',
    impact: '5-10x',
    active: true,
  },
] as const;

const assessmentPillars = [
  {
    tag: '01',
    name: 'Requirements & Planning',
    items: [
      'Written specs with acceptance criteria',
      'AI-generated implementation plans',
      'Duplicate/conflict detection across backlog',
    ],
  },
  {
    tag: '02',
    name: 'Code Generation',
    items: [
      'Agent builds from spec, not autocomplete',
      'Standards enforced by AI (lint, arch, docs)',
      'AI-powered legacy migration',
    ],
  },
  {
    tag: '03',
    name: 'Testing & QA',
    items: [
      'Tests auto-generated from specs',
      'AI reviews 100% PRs, surfaces critical paths',
      'Agent self-iterates (run, fail, fix, re-run)',
    ],
  },
  {
    tag: '04',
    name: 'CI/CD & Deployment',
    items: [
      'Pipeline as code, agents read + modify',
      'Feature flags for progressive rollout',
      'DORA metrics tracked + visible',
    ],
  },
  {
    tag: '05',
    name: 'Monitoring & AIOps',
    items: [
      'Agents watch logs, auto-file bugs',
      'Production incidents auto-triaged',
      'Usage data feeds back into product decisions',
    ],
  },
] as const;

const pipeline = [
  { step: 'Plan', desc: 'Agent reads spec + code, maps deps, writes subtasks' },
  { step: 'Design', desc: 'Mockups to component stubs with tokens + a11y' },
  { step: 'Build', desc: 'Multi-file edits, tests, docs, format, lint' },
  { step: 'Test', desc: 'Gold-set + regression harness, flake alerts' },
  { step: 'Review', desc: 'AI first-pass, risk tiers, human owns merge' },
  { step: 'Deploy', desc: 'Trunk + flags, staged rollout, preflight checks' },
  { step: 'Operate', desc: 'Log correlation, hotfix PRs, cost alerts' },
] as const;

const pillars = [
  {
    tag: '01',
    name: 'Brownfield-first',
    desc: 'Works on existing codebases, established teams and legacy processes. Not greenfield demos.',
  },
  {
    tag: '02',
    name: 'Verification-first',
    desc: 'Eval-driven gating, cross-model review and deterministic checks before anything ships.',
  },
  {
    tag: '03',
    name: 'Everything-as-code',
    desc: 'Infra, prompts, evals, guardrails and agent skills — versioned, traced and auditable.',
  },
  {
    tag: '04',
    name: 'Culture, not just tools',
    desc: 'Team structure, process redesign and governance that sticks after the engagement ends.',
  },
  {
    tag: '05',
    name: 'Mandate-driven',
    desc: 'Leadership backing is the single biggest predictor of success. Voluntary adoption stalls.',
  },
] as const;

const evidence = [
  {
    href: '/log/merchants-of-complexity-why-ai-finally-delivers-what-agile-promised',
    title: 'The Merchants of Complexity',
    tag: 'Why agile theatre dies when AI enters the SDLC',
  },
  {
    href: '/log/ralph-mode-why-ai-agents-should-forget',
    title: 'Ralph Mode: Why Agents Should Forget',
    tag: 'Autonomous loops with managed memory',
  },
  {
    href: '/log/untrusted-actor-pattern-ralph-mode',
    title: 'The Untrusted Actor Pattern',
    tag: 'Cross-model verification as a safety net',
  },
] as const;

export default function AgenticSdlc() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 md:px-20"
      id="agentic-sdlc"
    >
      {/* Subtle scan-line texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 4px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            CORE EXPERTISE // AGENTIC SDLC
          </p>
          <SectionTitle
            className="mb-6 font-bold text-4xl text-white md:text-5xl"
            text="AGENTIC SOFTWARE ENGINEERING THAT ACTUALLY WORKS"
          />
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            Not a tooling demo. A complete methodology for building software
            with AI agents — process redesign, verification patterns, team
            structure and culture change that survives contact with brownfield
            codebases, regulated industries and real organisational complexity.
          </p>
        </div>

        {/* Asymmetric layout: proof strip + pillars */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: proof numbers — oversized, vertical */}
          <div className="space-y-10 lg:col-span-4">
            {proofPoints.map((p) => (
              <div className="border-primary/30 border-l-2 pl-6" key={p.label}>
                <div className="font-bold font-mono text-5xl text-primary md:text-6xl">
                  {p.value}
                </div>
                <div className="mt-1 font-mono text-sm text-white uppercase tracking-wider">
                  {p.label}
                </div>
                <div className="font-mono text-muted-foreground text-xs">
                  {p.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Right: pillars + tooling + evidence */}
          <div className="space-y-12 lg:col-span-8">
            {/* Methodology pillars */}
            <div>
              <p className="mb-6 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                Methodology pillars
              </p>
              <div className="grid gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((p) => (
                  <div className="bg-black p-5" key={p.tag}>
                    <span className="font-mono text-[10px] text-primary">
                      {p.tag}
                    </span>
                    <h3 className="mt-1 font-bold text-white">{p.name}</h3>
                    <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tooling strip */}
            <div>
              <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                Open-source tooling
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  className="group flex flex-1 items-center gap-4 border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
                  href="/apps/flow-next"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-bold font-mono text-primary text-sm">
                    FN
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white group-hover:text-primary">
                      Flow-Next
                    </p>
                    <p className="font-mono text-muted-foreground text-xs">
                      Agent orchestration plugin
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex flex-1 items-center gap-4 border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
                  href="/gmickel-bench"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-bold font-mono text-primary text-sm">
                    GB
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white group-hover:text-primary">
                      gmickel-bench
                    </p>
                    <p className="font-mono text-muted-foreground text-xs">
                      Real-world AI coding evals
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Evidence — blog links */}
            <div>
              <p className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
                From the log
              </p>
              <div className="space-y-2">
                {evidence.map((e) => (
                  <Link
                    className="group flex items-baseline justify-between gap-4 border-white/5 border-b py-3 transition-colors last:border-0 hover:border-primary/20"
                    href={e.href}
                    key={e.href}
                  >
                    <div>
                      <span className="font-medium text-sm text-white group-hover:text-primary">
                        {e.title}
                      </span>
                      <span className="ml-3 hidden font-mono text-muted-foreground text-xs sm:inline">
                        {e.tag}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-muted-foreground text-xs transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Two-Stage Rollout Model ── */}
        <div className="mt-24">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            ROLLOUT MODEL
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            Two-stage rollout
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Most companies stop at tooling. That is where 70% of the value is
            still locked. Stage 1 proves the pattern. Stage 2 changes how the
            team works.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {stages.map((s) => (
              <div
                className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-primary/40"
                key={s.tag}
              >
                {/* Glow bar top */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="font-bold font-mono text-primary text-xs tracking-[0.2em]">
                      {s.tag}
                    </span>
                    <h4 className="mt-1 font-bold text-2xl text-white">
                      {s.name}
                    </h4>
                    <span className="font-mono text-muted-foreground text-xs">
                      {s.timeline}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold font-mono text-3xl text-success">
                      {s.impact}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase">
                      {s.impactLabel}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      className="flex items-start gap-3 font-mono text-sm text-white/80"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-primary/60"
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── L0-L4 Maturity Model ── */}
        <div className="mt-20">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            MATURITY MODEL
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            L0 to L4
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Most companies sit at L0-L1. I take teams to L4.
          </p>

          <div className="flex flex-col gap-px overflow-hidden border border-white/10 bg-white/10 md:flex-row">
            {maturityLevels.map((m) => (
              <div
                className={`flex-1 p-5 ${m.active ? 'border-primary/40 bg-primary/[0.06]' : 'bg-black'}`}
                key={m.level}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-bold font-mono text-lg ${m.active ? 'text-primary' : 'text-white/40'}`}
                  >
                    {m.level}
                  </span>
                  <span
                    className={`font-bold text-sm ${m.active ? 'text-white' : 'text-white/60'}`}
                  >
                    {m.name}
                  </span>
                </div>
                <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                  {m.desc}
                </p>
                <div
                  className={`mt-3 font-bold font-mono text-xs ${m.active ? 'text-success' : 'text-white/30'}`}
                >
                  {m.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7-Step Pipeline ── */}
        <div className="mt-20">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            PIPELINE
          </p>
          <h3 className="mb-10 font-bold text-3xl text-white md:text-4xl">
            Plan to operate, agents at every step
          </h3>

          <div className="relative flex flex-col gap-px overflow-hidden border border-white/10 bg-white/10 md:flex-row">
            {pipeline.map((p, i) => (
              <div
                className="group relative flex-1 bg-black p-4 transition-colors hover:bg-primary/[0.04]"
                key={p.step}
              >
                <span className="font-mono text-[10px] text-primary/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-1 font-bold font-mono text-sm text-white">
                  {p.step}
                </h4>
                <p className="mt-1.5 text-muted-foreground text-xs leading-relaxed">
                  {p.desc}
                </p>
                {/* Arrow connector */}
                {i < pipeline.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="-right-1.5 -translate-y-1/2 absolute top-1/2 z-10 hidden font-mono text-primary/30 text-xs md:block"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 5 Assessment Pillars ── */}
        <div className="mt-20">
          <p className="mb-2 font-mono text-[11px] text-primary tracking-[0.3em]">
            DIAGNOSTIC
          </p>
          <h3 className="mb-3 font-bold text-3xl text-white md:text-4xl">
            5-pillar assessment
          </h3>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Every engagement starts with a baseline. Score each pillar 1-5
            stars. Most teams land at 1-2.
          </p>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {assessmentPillars.map((ap) => (
              <div className="bg-black p-5" key={ap.tag}>
                <span className="font-mono text-[10px] text-primary">
                  {ap.tag}
                </span>
                <h4 className="mt-1 font-bold text-sm text-white">{ap.name}</h4>
                <ul className="mt-3 space-y-1.5">
                  {ap.items.map((item) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-primary/40"
                      >
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Course signup CTA */}
        <div className="mt-16">
          <CourseSignup />
        </div>
      </div>
    </section>
  );
}
