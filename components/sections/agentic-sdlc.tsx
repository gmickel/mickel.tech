import Link from 'next/link';
import CourseSignup from '@/components/course-signup';
import SectionTitle from '@/components/ui/section-title';

const proofPoints = [
  { value: '10+', label: 'Teams rolled out', detail: 'across PE portfolio' },
  {
    value: '500+',
    label: 'Engineers enabled',
    detail: 'methodology + tooling',
  },
  { value: '7+', label: 'Industries', detail: 'healthcare to finance' },
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
              <div className="grid gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-2">
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

        {/* Course signup CTA */}
        <div className="mt-16">
          <CourseSignup />
        </div>
      </div>
    </section>
  );
}
