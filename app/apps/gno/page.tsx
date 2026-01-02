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
    'Local hybrid search engine for personal knowledge bases. Index Markdown, PDFs, Office docs, code. BM25 + vector + reranking. Web UI, REST API, MCP server. 100% private.',
  slug: 'gno',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'GNO — Local Search for Your Second Brain',
  description:
    'Local hybrid search engine with Web UI & REST API. Index Markdown, PDFs, Office docs, code. BM25 + vector + reranking. MCP server for 10+ AI tools. 100% private.',
  openGraph: {
    title: 'GNO — Local Search for Your Second Brain',
    description:
      'Local hybrid search engine. Web UI, REST API, MCP server. Index everything, search semantically, stay private.',
    type: 'website',
    url: 'https://mickel.tech/apps/gno',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNO — Local Search for Your Second Brain',
    description:
      'Local hybrid search engine. Web UI, REST API, MCP server. 100% private.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/gno',
  },
};

const commands = [
  {
    name: 'gno query',
    description: 'Hybrid search (BM25 + vector + reranking)',
  },
  {
    name: 'gno ask',
    description: 'Search + AI-generated answer',
  },
  {
    name: 'gno serve',
    description: 'Start Web UI on localhost:3000',
  },
  {
    name: 'gno mcp install',
    description: 'Add to Claude, Cursor, Zed, etc.',
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
    name: 'Document Editor',
    description:
      'Split-view markdown editor with live preview, auto-save, and keyboard shortcuts (⌘B/I/K/S).',
    icon: '✎',
  },
  {
    name: 'Web UI',
    description:
      'Create, edit, search, and browse documents. Manage collections. AI Q&A with citations.',
    icon: '◐',
  },
  {
    name: 'REST API',
    description:
      'Full CRUD for documents + collections. Search, sync, AI answers. Build custom tools.',
    icon: '◈',
  },
  {
    name: 'Hybrid Search',
    description:
      'BM25 + vector + cross-encoder reranking. RRF fusion combines results for best accuracy.',
    icon: '⊕',
  },
  {
    name: 'MCP Server',
    description:
      'One command to add GNO to Claude, Cursor, Zed, Windsurf, Codex, and 5+ more tools.',
    icon: '⬡',
  },
  {
    name: 'Keyboard First',
    description:
      '⌘N capture, ⌘K search, ⌘/ shortcuts. Full editing without touching the mouse.',
    icon: '⌨',
  },
];

const integrations = [
  { name: 'Claude Desktop', method: 'MCP', command: 'gno mcp install' },
  { name: 'Cursor', method: 'MCP', command: 'gno mcp install --target cursor' },
  { name: 'Zed', method: 'MCP', command: 'gno mcp install --target zed' },
  {
    name: 'Windsurf',
    method: 'MCP',
    command: 'gno mcp install --target windsurf',
  },
  { name: 'Claude Code', method: 'Skill', command: 'gno skill install' },
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

        {/* Web UI & API */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              WEB UI & REST API
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Web UI */}
            <Card className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-cyan-500/20 px-3 py-1.5 font-mono text-cyan-400 text-lg">
                    gno serve
                  </code>
                  <Badge
                    className="border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                    variant="outline"
                  >
                    NEW
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Visual Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Create, edit, search, and browse documents. Get AI answers
                  with citations. Manage collections. All keyboard-first.
                </p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Editor</span> — Split-view
                      markdown with live preview, auto-save
                    </span>
                  </p>
                  <p className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Search</span> — BM25, vector,
                      hybrid + AI Q&A
                    </span>
                  </p>
                  <p className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Shortcuts</span> — ⌘N capture,
                      ⌘K search, ⌘B/I/K formatting
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-sm">
                    <span className="text-cyan-400">gno serve</span>{' '}
                    <span className="text-muted-foreground">
                      # Open localhost:3000
                    </span>
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* REST API */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <code className="rounded bg-primary/20 px-3 py-1.5 font-mono text-lg text-primary">
                    /api/*
                  </code>
                  <Badge
                    className="border-primary/40 bg-primary/10 text-primary"
                    variant="outline"
                  >
                    HTTP
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-lg text-white">
                  Full CRUD Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  HTTP API for search, CRUD operations, collections, and AI
                  answers. Build custom tools or automate workflows.
                </p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p className="flex gap-2">
                    <span className="text-primary">›</span>
                    <code className="text-white">/api/docs</code> — Create,
                    read, update, delete
                  </p>
                  <p className="flex gap-2">
                    <span className="text-primary">›</span>
                    <code className="text-white">/api/query</code> — Hybrid
                    search + AI Q&A
                  </p>
                  <p className="flex gap-2">
                    <span className="text-primary">›</span>
                    <code className="text-white">/api/collections</code> — Add,
                    remove, re-index
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <code className="block font-mono text-muted-foreground text-xs">
                    <span className="text-primary">curl</span>{' '}
                    <span className="text-white">
                      -X POST localhost:3000/api/docs
                    </span>
                    <br />
                    <span className="text-muted-foreground">
                      {' '}
                      -d '{'{'}"collection": "notes", ...{'}'}'
                    </span>
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security note */}
          <div className="mt-6 rounded-lg border border-white/10 bg-black/40 p-4">
            <p className="text-muted-foreground text-sm">
              <span className="font-mono text-cyan-400 text-xs">
                LOCALHOST ONLY
              </span>{' '}
              — Binds to 127.0.0.1. CSP headers, CORS protection, no external
              resources. Use <span className="text-white">Tailscale Serve</span>{' '}
              or <span className="text-white">Cloudflare Tunnel</span> for
              secure remote access.
            </p>
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
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {integrations.map((item) => (
                  <div
                    className="rounded-lg border border-white/10 bg-black/40 p-3"
                    key={item.name}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="font-medium text-sm text-white">
                        {item.name}
                      </span>
                      <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 font-mono text-[9px] text-cyan-400">
                        {item.method}
                      </span>
                    </div>
                    <code className="block truncate font-mono text-[10px] text-muted-foreground">
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
                    <span className="text-cyan-400">gno index</span>
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
                  Then run <code className="text-cyan-400">gno index</code> to
                  build index + embeddings.
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
                    manager + fullstack dev server
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
                    <span className="text-white">React</span> — Web UI SPA
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Personal notes</span> —
                      Obsidian, Notion exports, journals
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Code documentation</span> —
                      ADRs, RFCs, specs
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Research</span> — PDFs,
                      papers, literature reviews
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Legal docs</span> —
                      Contracts, policies, compliance
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>
                      <span className="text-white">Team knowledge</span> —
                      Wikis, runbooks, shared docs
                    </span>
                  </li>
                </ul>
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
