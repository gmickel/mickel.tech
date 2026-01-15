import type { Metadata } from 'next';
import Link from 'next/link';
import { BenchDashboard } from '@/components/gmickel/bench-dashboard';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageTitle from '@/components/ui/page-title';
import { Separator } from '@/components/ui/separator';
import { BENCH_EVALS } from '@/lib/bench-evals';

export const metadata: Metadata = {
  title: 'gmickel bench — Real Client-Grade AI Evals',
  description:
    'Living scoreboard for agentic coding tasks pulled from real work surfaces. Best-of-3 runs across GPT-5.2, Claude Opus 4.5, Gemini 3 Pro on Convex, Next.js, Zig, Swift and more.',
  openGraph: {
    title: 'gmickel bench — Real Client-Grade AI Evals',
    description:
      'Living scoreboard for agentic coding tasks pulled from real work surfaces. GPT-5.2 xhigh leads at 82.5 avg across 6 evals.',
    type: 'website',
    url: 'https://mickel.tech/gmickel-bench',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gmickel bench — Real Client-Grade AI Evals',
    description:
      'Living scoreboard for agentic coding tasks pulled from real work surfaces. GPT-5.2 xhigh leads at 82.5 avg across 6 evals.',
  },
  alternates: {
    canonical: 'https://mickel.tech/gmickel-bench',
  },
};

const upcoming = [
  {
    title: 'GPT-5.2-codex-xhigh',
    detail: 'High-reasoning Codex variant; will it match xhigh or overthink?',
  },
  {
    title: 'Legacy code port',
    detail: 'Deep refactor/port of a service with sparse docs.',
  },
  {
    title: 'Microservice integration',
    detail: 'Cross-service change touching contracts and ACLs.',
  },
];

export default function GmickelBenchPage() {
  return (
    <Shell>
      <div className="relative cursor-auto overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.08),transparent_25%),radial-gradient(circle_at_80%_0,rgba(255,107,214,0.08),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(158,243,110,0.08),transparent_30%)]"
        />

        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-primary/60 bg-primary/10 text-primary"
              variant="outline"
            >
              LIVE BENCHMARK
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Best-of-3 runs
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Updated 19 Dec 2025
            </Badge>
          </div>
          <h1 className="mt-6 font-bold text-4xl text-white leading-tight md:text-5xl">
            <PageTitle text="gmickel bench — real client-grade evals" />
          </h1>
          <Link
            className="glow-link mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase"
            href="/"
          >
            ← Back to main site
          </Link>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Living scoreboard for agentic coding + design tasks pulled from my
            actual work surfaces. Each result is the top score across three
            independent runs, mirrors how humans retry.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <StatCard
              hint="MCP auth, ACL sharing, AI dashboard, tiny GPT, macOS utility, XLSX agent"
              label="Benchmarks"
              value="6"
            />
            <StatCard
              hint="Full-stack web · macOS utility · systems programming"
              label="Stacks covered"
              value="Next.js · Convex · TanStack · Python · Zig · SwiftUI"
            />
            <StatCard
              hint="Mix of LLM judge + human evaluation/acceptance runs"
              label="Signal mix"
              value="LLM + human"
            />
          </div>
        </section>

        <BenchDashboard />

        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              BENCHMARKS // INSIGHTS
            </p>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <span className="text-muted-foreground text-xs">
              Scores ≈ capability; notes = why it mattered
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {BENCH_EVALS.map((bench) => (
              <Card
                className="group border-white/10 bg-card/70 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                key={bench.id}
              >
                <CardHeader className="space-y-2 pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        className="border-primary/40 text-primary"
                        variant="outline"
                      >
                        {bench.id}
                      </Badge>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {bench.spec}
                      </span>
                    </div>
                    <Link
                      className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide transition-colors hover:text-primary"
                      href={`/gmickel-bench/${bench.id}`}
                    >
                      View Details →
                    </Link>
                  </div>
                  <CardTitle className="text-white text-xl">
                    <Link
                      className="transition-colors hover:text-primary"
                      href={`/gmickel-bench/${bench.id}`}
                    >
                      {bench.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{bench.hook}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm text-white/90">
                    {bench.takeaways.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {bench.note ? (
                    <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">
                          {bench.note.type === 'outlier'
                            ? 'Outlier Note'
                            : 'Note'}
                        </span>
                      </div>
                      <p className="font-medium text-amber-200/90 text-sm">
                        {bench.note.title}
                      </p>
                      <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                        {bench.note.content}
                      </p>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              METHODOLOGY // HOW SCORES ARE CALCULATED
            </p>
          </div>

          <Card className="relative overflow-hidden border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-card/80 to-card/80">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 h-16 w-16 border-purple-500/40 border-t border-l" />
            <div className="absolute right-0 bottom-0 h-16 w-16 border-purple-500/40 border-r border-b" />

            <CardHeader className="pb-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  className="border-purple-500/60 bg-purple-500/10 text-purple-400"
                  variant="outline"
                >
                  TRANSPARENT PROCESS
                </Badge>
              </div>
              <CardTitle className="mt-2 text-2xl text-white">
                Evaluation methodology
              </CardTitle>
              <p className="mt-1 text-muted-foreground">
                Real repositories, consistent prompts, rigorous scoring
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Step 1: Source */}
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 font-mono text-purple-400 text-sm">
                      1
                    </div>
                    <h3 className="font-semibold text-white">
                      Real-world source
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every eval starts from a{' '}
                    <span className="text-purple-400">tagged checkpoint</span>{' '}
                    in an actual repository. DocIQ Sphere provides the bulk of
                    evals (MCP server, permissions, docshare). Side projects
                    like SmartTrim and Zig experiments add language diversity.
                  </p>
                </div>

                {/* Step 2: Execution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 font-mono text-purple-400 text-sm">
                      2
                    </div>
                    <h3 className="font-semibold text-white">
                      Best-of-3 execution
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Each model runs the{' '}
                    <span className="text-purple-400">identical prompt</span>{' '}
                    three times with consistent settings. All MCP servers,
                    plugins, custom commands, and subagents are{' '}
                    <span className="text-purple-400">disabled</span>{' '}
                    (exception: Anthropic's frontend-design plugin for design
                    evals). The highest score is recorded - mirrors how humans
                    retry when the first attempt doesn't land.
                  </p>
                </div>

                {/* Step 3: Scoring */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 font-mono text-purple-400 text-sm">
                      3
                    </div>
                    <h3 className="font-semibold text-white">Dual scoring</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Scores combine{' '}
                    <span className="text-purple-400">GPT-5.2 Pro</span> as LLM
                    judge (code quality, structure, patterns) with{' '}
                    <span className="text-purple-400">human review</span>{' '}
                    (instruction following, functional correctness, does it
                    actually work?).
                  </p>
                </div>
              </div>

              <Separator className="bg-white/10" />

              {/* Scoring criteria */}
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Scoring dimensions</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                    <p className="font-mono text-primary text-xs">
                      INSTRUCTION FOLLOWING
                    </p>
                    <p className="mt-2 text-muted-foreground text-sm">
                      Did it do what was asked? All requirements met?
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                    <p className="font-mono text-primary text-xs">
                      CODE QUALITY
                    </p>
                    <p className="mt-2 text-muted-foreground text-sm">
                      Clean patterns, proper error handling, maintainable
                      structure.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                    <p className="font-mono text-primary text-xs">
                      CHANGE HYGIENE
                    </p>
                    <p className="mt-2 text-muted-foreground text-sm">
                      Minimal diffs, no regressions, respects existing patterns.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                    <p className="font-mono text-primary text-xs">
                      FUNCTIONAL CORRECTNESS
                    </p>
                    <p className="mt-2 text-muted-foreground text-sm">
                      Does it compile, run, and pass acceptance criteria?
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="bg-white/10" />

              {/* Source repos */}
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Evaluation sources</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4">
                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                    <div>
                      <p className="font-medium text-white">DocIQ Sphere</p>
                      <p className="text-muted-foreground text-sm">
                        MCP server, permissions, docshare, XLSX agent tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4">
                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    <div>
                      <p className="font-medium text-white">SmartTrim</p>
                      <p className="text-muted-foreground text-sm">
                        Swift 6 / SwiftUI macOS system integration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4">
                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                    <div>
                      <p className="font-medium text-white">Zig experiments</p>
                      <p className="text-muted-foreground text-sm">
                        Low-level systems programming, ML from scratch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              INSIGHTS // WHAT THE SCORES SAY
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Model strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm">
                <p>
                  • GPT-5.2 xhigh leads (82.5 avg), medium second (77.5),
                  5.2-codex third (73.7)—all beat Claude (72.7) and 5.1 (65.5).
                </p>
                <p>
                  • Medium-reasoning 5.2-codex beats high-reasoning
                  5.1-codex-max on 4/6 evals: MCP (+12), XLSX (+13), Permissions
                  (+8), Zig (+22).
                </p>
                <p>
                  • xhigh takes the Zig crown (82) from Gemini (81)—first time
                  an OpenAI model wins low-level systems.
                </p>
                <p>
                  • Pattern: higher reasoning can overthink detailed specs.
                  Medium-reasoning 5.2 beats high-reasoning 5.1 on plan
                  execution.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Why best-of-3?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm">
                <p>
                  • Single runs are noisy—models can fluke or get unlucky with
                  context.
                </p>
                <p>
                  • Humans naturally retry; taking best score reflects real
                  workflow.
                </p>
                <p>• Three runs balance signal quality against compute cost.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-card/60 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-white/20 text-white" variant="outline">
                Coming next
              </Badge>
              <span className="text-muted-foreground text-xs">
                New surfaces queued to keep the bench fresh
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {upcoming.map((item) => (
                <div
                  className="rounded-lg border border-white/5 bg-background/60 p-4"
                  key={item.title}
                >
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Finding: High Reasoning Mode */}
          <div className="mt-10 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-card/80 to-card/80 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className="border-amber-500/60 bg-amber-500/10 text-amber-400"
                variant="outline"
              >
                Research finding
              </Badge>
              <span className="text-muted-foreground text-xs">
                Excluded from main benchmark
              </span>
            </div>
            <h3 className="mt-4 font-semibold text-lg text-white">
              High reasoning mode underperforms on implementation tasks
            </h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              Claude Opus 4.5 with high reasoning mode scored{' '}
              <span className="text-amber-400">393.3</span> vs default&apos;s{' '}
              <span className="text-amber-400">436</span> (−42.7 pts). The
              pattern: overthinking with detailed specs leads to custom
              solutions instead of following prescribed patterns, incomplete
              integration despite good individual components, and
              over-engineered concurrency that introduces bugs.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                <p className="font-mono text-red-400 text-xs">WORSE</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  SmartTrim (−21), Sharing (−11), MCP (−8), XLSX (−6)
                </p>
              </div>
              <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                <p className="font-mono text-green-400 text-xs">BETTER</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Design (+6.6), Zig (+4)
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-white/5 bg-black/20 p-3">
              <p className="font-mono text-amber-400 text-xs">
                DIMENSION BREAKDOWN
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">
                    Functional Correctness:
                  </span>
                  <span className="ml-1 text-red-400">−5.2 avg</span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    Instruction Following:
                  </span>
                  <span className="ml-1 text-red-400">−2.0 avg</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Code Quality:</span>
                  <span className="ml-1 text-red-400">−1.6 avg</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Change Hygiene:</span>
                  <span className="ml-1 text-yellow-400">−0.6 avg</span>
                </div>
              </div>
              <p className="mt-2 text-muted-foreground text-xs">
                Functional correctness hit hardest—builds complex stuff that
                doesn&apos;t work. Instruction following second—deviates from
                explicit specs.
              </p>
            </div>
            <p className="mt-4 text-muted-foreground text-xs">
              <span className="text-amber-400">Takeaway:</span> Reserve high
              reasoning for open-ended problems where default fails entirely, or
              for planning/reviewing. For implementation tasks with detailed
              specs, less thinking = more faithful execution.
            </p>
          </div>
        </section>
      </div>
    </Shell>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-card/60 p-6 shadow-lg shadow-primary/10">
      <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
        {label}
      </p>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-bold text-3xl text-white">{value}</span>
      </div>
      <p className="mt-2 text-muted-foreground text-sm">{hint}</p>
    </div>
  );
}
