import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'GNO',
  description:
    'Local hybrid search CLI for personal knowledge bases. Index Markdown, PDFs, code. BM25 + vector search with HyDE expansion. Runs entirely on your machine.',
  slug: 'gno',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'GNO — Local Search for Your Second Brain',
  description:
    'Local hybrid search CLI that indexes Markdown, PDFs, and code. BM25 + vector search with HyDE query expansion and cross-encoder reranking. Give your AI agents long-term memory.',
  openGraph: {
    title: 'GNO — Local Search for Your Second Brain',
    description:
      'Local hybrid search CLI. BM25 + vector + reranking. Index everything, search semantically, stay private.',
    type: 'website',
    url: 'https://mickel.tech/apps/gno',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNO — Local Search for Your Second Brain',
    description:
      'Local hybrid search CLI. Index Markdown, PDFs, code. Give AI agents memory.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/gno',
  },
};

const commands = [
  {
    name: 'gno search',
    description: 'BM25 full-text keyword search',
  },
  {
    name: 'gno vsearch',
    description: 'Vector similarity semantic search',
  },
  {
    name: 'gno query',
    description: 'Hybrid search with RRF fusion',
  },
  {
    name: 'gno ask',
    description: 'Search + AI-generated answer',
  },
];

const pipelineStages = [
  {
    stage: '01',
    name: 'Query Expansion',
    description:
      'LLM generates keyword variants, semantic variants, and HyDE passage',
  },
  {
    stage: '02',
    name: 'Parallel Search',
    description: 'BM25 and vector searches run simultaneously on all variants',
  },
  {
    stage: '03',
    name: 'RRF Fusion',
    description: 'Reciprocal Rank Fusion merges results (k=60)',
  },
  {
    stage: '04',
    name: 'Reranking',
    description: 'Cross-encoder rescores top 20 for final ordering',
  },
];

const features = [
  {
    name: 'Hybrid Search',
    description:
      'BM25 for exact terms, vectors for concepts. RRF fusion combines both for best results.',
    icon: '⊕',
  },
  {
    name: 'HyDE Expansion',
    description:
      'LLM generates a hypothetical answer to your question, then searches for similar documents.',
    icon: '◇',
  },
  {
    name: 'Local Models',
    description:
      'Embed, rerank, and generate with GGUF models via node-llama-cpp. No API keys needed.',
    icon: '⬡',
  },
  {
    name: 'MCP Server',
    description:
      'Connect to Claude Desktop or Cursor. Your AI can search and cite your local files.',
    icon: '◈',
  },
  {
    name: 'Skills',
    description:
      'Install as a skill for Claude Code or Codex. CLI integration with zero context pollution.',
    icon: '⬢',
  },
  {
    name: 'Multi-Format',
    description:
      'Index Markdown, PDF, code, and more. Automatic chunking and content-addressed deduplication.',
    icon: '▣',
  },
];

const integrations = [
  { name: 'Claude Desktop', method: 'MCP server', command: 'gno mcp' },
  { name: 'Claude Code', method: 'Skill', command: 'gno skill install' },
  { name: 'Cursor', method: 'MCP server', command: 'gno mcp' },
  {
    name: 'Codex',
    method: 'Skill',
    command: 'gno skill install --target codex',
  },
];

export default function GnoPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'GNO', url: '/apps/gno' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - cyan/teal for GNO brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_40%_75%,rgba(6,182,212,0.06),transparent_40%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className="border-cyan-500/60 bg-cyan-500/10 text-cyan-400"
              variant="outline"
            >
              LOCAL SEARCH
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

          <div className="mt-6">
            <div className="flex items-center gap-4">
              <svg
                aria-hidden="true"
                className="h-12 w-12 text-white md:h-14 md:w-14"
                fill="none"
                role="img"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GNO Logo</title>
                <circle
                  cx="14"
                  cy="14"
                  fill="none"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M21.5 21.5L28 28"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle
                  cx="14"
                  cy="14"
                  fill="none"
                  opacity="0.6"
                  r="5"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                />
                <path
                  d="M11 14h6M14 11v6"
                  stroke="#22d3ee"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
              <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                GNO
              </h1>
            </div>
            <p className="mt-2 font-mono text-cyan-400 text-xl">
              Local search for your second brain
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
              Your <span className="text-white">15,000 documents</span> of
              notes, journals, and reference material—finally searchable.{' '}
              <span className="text-white">Hybrid search</span> combines
              keywords and semantics.{' '}
              <span className="text-white">Everything runs locally</span>.
            </p>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              BM25. Vectors. HyDE. Reranking. One CLI that unlocks your second
              brain.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 border border-cyan-500 bg-cyan-500/10 px-6 py-3 font-mono text-cyan-400 text-sm uppercase tracking-wide transition-all hover:bg-cyan-500/20"
                href="https://gno.sh"
                rel="noopener noreferrer"
                target="_blank"
              >
                gno.sh
              </a>
              <a
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 font-mono text-sm text-white uppercase tracking-wide transition-all hover:border-white/40 hover:bg-white/10"
                href="https://github.com/gmickel/gno"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-destructive/20 bg-card/60">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-destructive tracking-[0.2em]">
                  THE PROBLEM
                </p>
              </div>
              <CardTitle className="text-2xl text-white">
                Your AI can't access your notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You built a second brain. 15,000 files of accumulated knowledge.
                But when you ask your AI assistant about it:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span className="text-white">grep</span> is fast but
                  dumb—misses conceptual matches
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  Obsidian MCP servers return irrelevant results
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  Cloud search tools send your data to external servers
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  AI assistants hallucinate instead of citing your actual notes
                </li>
              </ul>
              <p className="font-mono text-sm">
                GNO gives your AI long-term memory over your local files.
              </p>
            </CardContent>
          </Card>
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
                  <code className="w-fit rounded bg-cyan-500/20 px-2 py-1 font-mono text-cyan-400 text-xs">
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

        {/* Search Pipeline */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SEARCH PIPELINE
            </p>
          </div>

          <Card className="border-cyan-500/20 bg-card/70">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">
                How <code className="text-cyan-400">gno query</code> works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                The hybrid search pipeline combines multiple retrieval
                strategies for best-in-class results:
              </p>

              {/* Pipeline visualization */}
              <div className="relative">
                {/* Connection line */}
                <div
                  aria-hidden
                  className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/30 to-transparent"
                />

                <div className="space-y-6">
                  {pipelineStages.map((item) => (
                    <div className="relative flex gap-4" key={item.stage}>
                      {/* Stage indicator */}
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 font-mono text-cyan-400 text-xs">
                        {item.stage}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="mt-1 text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance note */}
              <div className="mt-6 rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="grid gap-4 text-[11px] sm:grid-cols-4">
                  <div>
                    <span className="text-muted-foreground">BM25:</span>{' '}
                    <span className="text-white">~5-20ms</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Vector:</span>{' '}
                    <span className="text-white">~10-50ms</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Expansion:</span>{' '}
                    <span className="text-white">~1-3s</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Full query:</span>{' '}
                    <span className="text-cyan-400">~2-5s</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Search Mode Comparison */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SEARCH MODES
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* BM25 */}
            <Card className="border-white/10 bg-card/60">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-white/10 px-3 py-1.5 font-mono text-lg text-white">
                    gno search
                  </code>
                  <Badge
                    className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                    variant="outline"
                  >
                    FAST
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  BM25 keyword matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  Full-text search via SQLite FTS5. Best for exact terms and
                  code.
                </p>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno search</span>{' '}
                    <span className="text-white">"authentication JWT"</span>
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Vector */}
            <Card className="border-white/10 bg-card/60">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-white/10 px-3 py-1.5 font-mono text-lg text-white">
                    gno vsearch
                  </code>
                  <Badge
                    className="border-violet-500/40 bg-violet-500/10 text-violet-400"
                    variant="outline"
                  >
                    SEMANTIC
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Vector similarity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  Embedding-based search via sqlite-vec. Finds conceptual
                  matches.
                </p>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno vsearch</span>{' '}
                    <span className="text-white">"how to protect my app"</span>
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Hybrid */}
            <Card className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-cyan-500/20 px-3 py-1.5 font-mono text-cyan-400 text-lg">
                    gno query
                  </code>
                  <Badge
                    className="border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                    variant="outline"
                  >
                    RECOMMENDED
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Hybrid + reranking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  BM25 + vector + HyDE expansion + cross-encoder reranking.
                </p>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno query</span>{' '}
                    <span className="text-white">
                      "best practices for error handling"
                    </span>
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Ask */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-primary/20 px-3 py-1.5 font-mono text-lg text-primary">
                    gno ask
                  </code>
                  <Badge
                    className="border-primary/40 bg-primary/10 text-primary"
                    variant="outline"
                  >
                    RAG
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Search + answer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-sm">
                  Retrieval-augmented generation. Get a cited answer from your
                  docs.
                </p>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno ask</span>{' '}
                    <span className="text-white">
                      "summarize the API design"
                    </span>{' '}
                    <span className="text-primary">--answer</span>
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              FEATURES
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card className="border-white/10 bg-card/60" key={feature.name}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-cyan-400 text-lg">
                      {feature.icon}
                    </span>
                    <CardTitle className="text-base text-white">
                      {feature.name}
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

        {/* AI Integration */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              AI INTEGRATION
            </p>
          </div>

          <Card className="border-cyan-500/20 bg-card/70">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">
                Give your AI assistant memory
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                GNO integrates with AI tools via MCP (Model Context Protocol) or
                CLI skills. Your assistant can search and cite your local
                documents.
              </p>

              {/* Integration grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {integrations.map((item) => (
                  <div
                    className="rounded-lg border border-white/10 bg-black/40 p-4"
                    key={item.name}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-white">
                        {item.name}
                      </span>
                      <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 font-mono text-[9px] text-cyan-400">
                        {item.method}
                      </span>
                    </div>
                    <code className="block font-mono text-muted-foreground text-xs">
                      <span className="text-cyan-400">{item.command}</span>
                    </code>
                  </div>
                ))}
              </div>

              {/* Example prompts */}
              <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
                <p className="mb-3 font-mono text-muted-foreground text-xs uppercase tracking-wide">
                  Example prompts for your AI
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-white">"</span>Search my notes for the
                    project roadmap and summarize Q4 goals
                    <span className="text-white">"</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-white">"</span>Find what I wrote about
                    database migrations last month
                    <span className="text-white">"</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-white">"</span>Have I worked on
                    something like this before?
                    <span className="text-white">"</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              INSTALLATION
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">bun install -g</span>{' '}
                    <span className="text-white">@gmickel/gno</span>
                  </code>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno init</span>{' '}
                    <span className="text-white">~/notes</span>{' '}
                    <span className="text-muted-foreground">--name notes</span>
                  </code>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno update</span>
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Add Collections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno collection add</span>{' '}
                    <span className="text-white">~/Documents/Obsidian</span>{' '}
                    <span className="text-muted-foreground">--name vault</span>
                  </code>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno collection add</span>{' '}
                    <span className="text-white">~/code</span>{' '}
                    <span className="text-muted-foreground">
                      --name code --exclude node_modules
                    </span>
                  </code>
                </div>
                <p className="text-muted-foreground text-sm">
                  Then run <code className="text-cyan-400">gno update</code> to
                  index.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Model presets */}
          <div className="mt-6 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
            <p className="text-muted-foreground text-sm">
              <span className="font-mono text-cyan-400 text-xs">MODELS</span> —
              Choose preset: <code className="text-white">slim</code> (~1GB),{' '}
              <code className="text-white">balanced</code> (~2GB), or{' '}
              <code className="text-white">quality</code> (~2.5GB). Run{' '}
              <code className="text-cyan-400">
                gno models use &lt;preset&gt;
              </code>{' '}
              to switch.
            </p>
          </div>
        </section>

        {/* Tech Stack & Who it's for */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-white">Bun</span> — Runtime + package
                    manager
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-white">SQLite + FTS5</span> — BM25
                    full-text search
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-white">sqlite-vec</span> — Vector KNN
                    search
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-white">node-llama-cpp</span> — Local
                    GGUF models
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-white">MCP</span> — Model Context
                    Protocol
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Who it's for
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <p>
                  Developers, researchers, and writers with years of accumulated
                  notes who want AI assistants to actually use that knowledge
                  instead of hallucinating.
                </p>
                <p>
                  If you've ever asked Claude "have I worked on this before?"
                  and wished it could search your notes—GNO makes that real.
                </p>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://gno.sh"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit gno.sh →
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
