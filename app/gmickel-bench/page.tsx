import type { Metadata } from 'next';
import Link from 'next/link';

import { BenchScoreChart } from '@/components/gmickel/bench-score-chart';
import {
  CategoryBars,
  TotalsBar,
} from '@/components/gmickel/bench-total-chart';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'gmickel bench — Real Client-Grade AI Evals',
  description:
    'Living scoreboard for agentic coding tasks pulled from real work surfaces. Best-of-3 runs across Claude Opus, Gemini Pro, and OpenAI Codex on Convex, Next.js, Zig and more.',
  openGraph: {
    title: 'gmickel bench — Real Client-Grade AI Evals',
    description:
      'Living scoreboard for agentic coding tasks pulled from real work surfaces. Best-of-3 runs across Claude Opus, Gemini Pro, and OpenAI Codex.',
    type: 'website',
    url: 'https://mickel.tech/gmickel-bench',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gmickel bench — Real Client-Grade AI Evals',
    description:
      'Living scoreboard for agentic coding tasks pulled from real work surfaces. Best-of-3 runs across Claude Opus, Gemini Pro, and OpenAI Codex.',
  },
  alternates: {
    canonical: 'https://mickel.tech/gmickel-bench',
  },
};

const llmScores = [
  { name: 'Convex OAuth MCP slice', claude: 65, gemini: 63, codex: 60 },
  {
    name: 'Convex permissions (docs/folders)',
    claude: 65,
    gemini: 49,
    codex: 58,
  },
  { name: 'Remote Secretary – Design', claude: 78, gemini: 70, codex: 68 },
  { name: 'Tiny GPT – Zig', claude: 40, gemini: 73, codex: 36 },
  { name: 'SmartTrim macOS utility', claude: 79, gemini: 61, codex: 83 },
];

const radarData = [
  { name: 'Instruction following', claude: 82, codex: 73, gemini: 74 },
  { name: 'Code quality', claude: 74, codex: 74, gemini: 75 },
  { name: 'Change hygiene', claude: 82, codex: 78, gemini: 80 },
  { name: 'Functional correctness', claude: 65, codex: 59.5, gemini: 63.5 },
];

const totals = [
  { name: 'Total score', claude: 327, gemini: 316, codex: 305 },
  { name: 'Average per task', claude: 65.4, gemini: 63.2, codex: 61 },
];

type BenchmarkLink = { href: string; label: string };

const benchmarks: Array<{
  id: string;
  title: string;
  spec: string;
  hook: string;
  takeaways: string[];
  links: BenchmarkLink[];
  note?: {
    type: 'outlier' | 'info';
    title: string;
    content: string;
  };
}> = [
  {
    id: 'mcp',
    title: 'Convex OAuth MCP server',
    spec: 'Dense spec. Full vertical slice on Convex + Better Auth + MCP; discovery, scopes, admin UI, tests.',
    hook: 'Security-sensitive slice with OAuth semantics, streaming MCP transport, and admin surface.',
    takeaways: [
      'Dense plans still leave scope edges (org metadata, pagination, export scopes) uncovered.',
      'Vertical slices over Convex stack are viable for LLMs but need human review on security invariants.',
    ],
    links: [],
  },
  {
    id: 'permissions',
    title: 'Convex document & folder permissions',
    spec: 'Extend existing ACL whitelist to docs/folders; inheritance, Better Auth invites, guest filtering, tests.',
    hook: 'Tests whether agents can extend ACL patterns without regressions when specs are intentionally light.',
    takeaways: [
      'Inference from existing ACLs is error-prone: owner checks skipped, guest filters incomplete, activation hooks missing.',
      'UI dialogs often wired incorrectly without explicit triggers; best-of-3 helps catch flukes.',
    ],
    links: [],
  },
  {
    id: 'design',
    title: 'Remote secretarial service dashboard',
    spec: 'High-spec UX brief; Next 16 App Router + Tailwind + shadcn; multi-page customer portal.',
    hook: 'Separates layout craft from data wiring; measures taste + speed under strong aesthetic constraints.',
    takeaways: [
      'Design plugins boosted polish but navigation completeness still lags (missing routes).',
      'Codex produced fastest single-page polish; Claude+plugin best overall design score.',
    ],
    links: [],
  },
  {
    id: 'zig',
    title: 'Tiny GPT in pure Zig',
    spec: 'Medium-spec prompt; char-level GPT, AdamW, warmup/cosine, CPU-only; build/train/sample acceptance.',
    hook: "Cross-language generalisation on Karpathy's minGPT/nanoGPT lineage, rebuilt in Zig without ML libs.",
    takeaways: [
      'Runtime bonus matters: only Gemini passed build→train→sample; others crashed on backprop/matmul.',
      'Initialization hygiene and buffer sizing are frequent failure points even when shape math looks right.',
    ],
    links: [],
    note: {
      type: 'outlier',
      title: 'Why Gemini scored higher',
      content:
        'Gemini 3.0 Pro was the only model to achieve a working build→train→sample cycle. This appears to be due to its harness continuing to iterate on errors rather than stopping early. Other models produced comparable code quality but their runs terminated before resolving runtime issues.',
    },
  },
  {
    id: 'smarttrim',
    title: 'SmartTrim macOS menu bar utility',
    spec: 'Swift 6 LSUIElement MenuBarExtra with TextHealer heuristic, clipboard monitor, tests, hotkey, login item.',
    hook: 'System-integration slice: macOS menu bar UI, clipboard healing, global hotkey, launch-at-login.',
    takeaways: [
      'Claude and Codex meet tests and real clipboard healing; Gemini leaves minor ghost indentation.',
      'Strict concurrency + SwiftUI + system APIs are tractable; heuristics still need human-tuned edges.',
    ],
    links: [],
  },
];

const upcoming = [
  {
    title: 'Legacy code port',
    detail: 'Deep refactor/port of a service with sparse docs.',
  },
  {
    title: 'Microservice integration',
    detail: 'Cross-service change touching contracts and ACLs.',
  },
  {
    title: 'Next live client task',
    detail: 'New surface queued; revealed when it ships.',
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
              Updated 9 Dec 2025
            </Badge>
          </div>
          <h1 className="mt-6 font-bold text-4xl text-white leading-tight md:text-5xl">
            gmickel bench — real client-grade evals
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
              hint="MCP auth, ACL sharing, AI dashboard, tiny GPT, macOS utility"
              label="Benchmarks"
              value="5"
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

        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-primary/20 bg-card/80">
            <CardHeader className="flex flex-col gap-2 pb-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  SCOREBOARD // LLM + HUMAN
                </p>
                <Separator className="h-4 bg-white/10" orientation="vertical" />
                <span className="text-muted-foreground text-xs">
                  Mix of LLM judge plus human evaluation/acceptance,
                  best-of-three per model
                </span>
              </div>
              <CardTitle className="text-2xl text-white">
                Where each model shines per surface
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <BenchScoreChart className="h-[420px]" data={llmScores} />
            </CardContent>
          </Card>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-card/80">
              <CardHeader className="flex flex-col gap-2 pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                    TOTALS // LLM + HUMAN
                  </p>
                  <Separator
                    className="h-4 bg-white/10"
                    orientation="vertical"
                  />
                  <span className="text-muted-foreground text-xs">
                    Sum + average across all benches (best-of-3 per model)
                  </span>
                </div>
                <CardTitle className="text-2xl text-white">
                  Overall score totals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TotalsBar className="h-[320px]" data={totals} />
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-card/80">
              <CardHeader className="flex flex-col gap-2 pb-4">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  CATEGORIES // NORMALIZED
                </p>
                <CardTitle className="text-2xl text-white">
                  Strengths across categories
                </CardTitle>
                <span className="text-muted-foreground text-xs">
                  Normalized vs. max per dimension (0–100)
                </span>
              </CardHeader>
              <CardContent>
                <CategoryBars className="h-[340px]" data={radarData} />
              </CardContent>
            </Card>
          </div>
        </section>

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
            {benchmarks.map((bench) => (
              <Card className="border-white/10 bg-card/70" key={bench.id}>
                <CardHeader className="space-y-2 pb-3">
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
                  <CardTitle className="text-white text-xl">
                    {bench.title}
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
                  {bench.note && (
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
                  )}
                  {bench.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {bench.links.map((link) => (
                        <Link
                          className="glow-link font-mono text-[11px] uppercase"
                          href={link.href}
                          key={link.href}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
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
                    three times with consistent settings. The highest score is
                    recorded—mirrors how humans retry when the first attempt
                    doesn't land.
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
                    <span className="text-purple-400">GPT-5.1 Pro</span> as LLM
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
                        MCP server, permissions, docshare, upcoming Python evals
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
                  • Claude leads plan-heavy web (permissions); Codex edges
                  SmartTrim with a slightly higher score (Claude close behind).
                </p>
                <p>
                  • Gemini wins low-level systems (Zig) but lags on
                  heuristics/detail in SmartTrim.
                </p>
                <p>
                  • All models miss pagination, ACL edges, UI wiring, and
                  nuanced text heuristics—manual review stays mandatory.
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

          {/* Tool Versions */}
          <div className="mt-10 rounded-xl border border-white/10 bg-black/40 p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge
                className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                variant="outline"
              >
                Transparency
              </Badge>
              <span className="text-muted-foreground text-xs">
                Exact tool versions used for reproducibility
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
                  <span className="font-mono text-cyan-400 text-xs">CL</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-white">Claude Code</p>
                  <p className="font-mono text-muted-foreground text-xs">
                    v2.0.64
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10">
                  <span className="font-mono text-green-400 text-xs">CX</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-white">Codex CLI</p>
                  <p className="font-mono text-muted-foreground text-xs">
                    v0.66.0
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10">
                  <span className="font-mono text-blue-400 text-xs">GM</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-white">Gemini CLI</p>
                  <p className="font-mono text-muted-foreground text-xs">
                    v0.19.4
                  </p>
                </div>
              </div>
            </div>
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
