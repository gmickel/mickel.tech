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

        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              WHY THIS BENCH // REAL-WORLD SIGNALS
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm">
                <p>
                  • All tasks are live work surfaces: Convex auth, Next.js
                  portals, systems code, macOS utility.
                </p>
                <p>
                  • Scores mix LLM judge + human acceptance; best of 3 per
                  model.
                </p>
                <p>
                  • Specs range from dense plans to near-zero guidance to test
                  adaptability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  What the scores say
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
