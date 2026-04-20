import type { Metadata } from 'next';
import Link from 'next/link';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierShell from '@/components/layout/atelier-shell';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'GNO',
  description:
    'Local hybrid search engine + hosted publishing layer for personal knowledge bases. Index Markdown, PDFs, Office docs, code. BM25 + vector + reranking. Web UI, REST API, MCP server. Publish notes and collections as polished reading surfaces at gno.sh.',
  slug: 'gno',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'GNO — Local search + hosted publishing for your second brain',
  description:
    'Two-layer knowledge stack. Local hybrid search (BM25 + vectors + reranking, MCP server, Web UI). Hosted publishing at gno.sh for notes and collections as polished reading surfaces.',
  openGraph: {
    title: 'GNO · Mickel Tech',
    description:
      'Local hybrid search engine + hosted publish/share layer at gno.sh.',
    type: 'website',
    url: 'https://mickel.tech/apps/gno',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNO · Mickel Tech',
    description:
      'Local hybrid search + hosted publishing. BM25, vectors, reranking, MCP.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/gno' },
};

const commands = [
  {
    title: 'gno query',
    description: 'Hybrid search: BM25 + vectors + reranking.',
  },
  {
    title: 'gno ask',
    description: 'Retrieval-augmented answers with citations.',
  },
  {
    title: 'gno serve',
    description: 'Web UI on localhost:3000. Keyboard-first.',
  },
  { title: 'gno graph', description: 'Force-directed knowledge graph.' },
  {
    title: 'gno links / backlinks',
    description: 'Outgoing + incoming wiki connections.',
  },
  { title: 'gno similar', description: 'Semantically related documents.' },
  {
    title: 'gno mcp install',
    description: 'Claude, Cursor, Zed, Windsurf, LM Studio, LibreChat.',
  },
  {
    title: 'gno skill install',
    description: 'Claude Code, Codex, OpenCode, Amp.',
  },
];

const pipeline = [
  {
    title: 'Query expansion',
    description:
      'LLM generates keyword variants, semantic variants, and a HyDE passage.',
  },
  {
    title: 'Parallel search',
    description:
      'BM25 and vector searches run simultaneously across all variants.',
  },
  {
    title: 'RRF fusion',
    description: 'Reciprocal Rank Fusion merges results with k=60.',
  },
  {
    title: 'Reranking',
    description: 'Cross-encoder rescores the top 20 for final ordering.',
  },
];

const hostedFeatures = [
  {
    title: 'One-click publish',
    description:
      'gno publish export atlas --out atlas.json, upload to /studio. Done.',
  },
  {
    title: 'Public + secret links',
    description:
      'Public at /share/[slug]; unguessable secret tokens at /secret/[token]. No auth to read. Revoke anytime.',
  },
  {
    title: 'Reader-grade UX',
    description:
      'Fraunces + Geist + JetBrains Mono. Hotkeys j/k navigate, / search, o outline, y copy link.',
  },
  {
    title: 'Filtered projection',
    description:
      'Backlinks + related notes resolve only within the published subset. Private vault never leaks.',
  },
];

const specs = [
  { label: 'Runtime', value: 'Bun' },
  { label: 'Full-text', value: 'SQLite FTS5 (BM25)' },
  { label: 'Vectors', value: 'sqlite-vec' },
  { label: 'Local LLM', value: 'node-llama-cpp (GGUF)' },
  { label: 'Web UI', value: 'React SPA' },
  { label: 'License', value: 'MIT' },
];

export default function GnoPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'GNO', url: '/apps/gno' },
        ])}
      />

      <AtelierAppHero
        category="01 / Knowledge"
        description="Two layers, one stack. Locally: index 15,000+ Markdown files, PDFs, code, Office docs; hybrid search with BM25, vectors, HyDE expansion, cross-encoder reranking, and a Web UI, REST API, and MCP server. Hosted at gno.sh: publish any collection as a polished reading surface via public or secret links."
        idx="01"
        image="/gno/logo.svg"
        imageKind="logo"
        meta={[
          { label: 'Stack', value: 'Bun + SQLite' },
          { label: 'Search', value: 'Hybrid + RAG' },
          { label: 'License', value: 'MIT' },
        ]}
        name="GNO"
        primaryCta={{
          label: 'Visit gno.sh',
          href: 'https://gno.sh',
          external: true,
        }}
        secondaryCta={{
          label: 'View source',
          href: 'https://github.com/gmickel/gno',
          external: true,
        }}
        status="Released"
        tagline="Local search + hosted publishing for your second brain."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Problem"
        lede="grep is fast but dumb. Obsidian MCPs return noise. Cloud search leaks your data. AI hallucinates instead of citing your actual notes."
        title="Your AI can't access your notes."
      >
        <AtelierFeatureGrid
          items={[
            {
              title: 'Conceptual misses',
              description: 'Keyword search finds nothing when you paraphrase.',
            },
            {
              title: 'Irrelevant results',
              description: 'Generic plugins rank noise over signal.',
            },
            {
              title: 'Data leaves',
              description: 'Cloud tools ship your vault to external servers.',
            },
            {
              title: 'Hallucination',
              description:
                "Assistants invent answers when they can't retrieve.",
            },
          ]}
        />
        <p className="atelier-mono mt-10 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          GNO gives your AI long-term memory over local files.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Pipeline"
        lede="Multiple retrieval strategies, fused and reranked."
        title="How gno query works."
      >
        <AtelierFeatureGrid items={pipeline} />
        <div className="atelier-mono mt-10 grid gap-3 border-[hsl(var(--ink))]/10 border-t pt-5 text-[11px] text-[hsl(var(--paper-muted))] tracking-[0.08em] sm:grid-cols-4">
          <div>
            BM25 <span className="text-[hsl(var(--ink))]">5-20ms</span>
          </div>
          <div>
            Vector <span className="text-[hsl(var(--ink))]">10-50ms</span>
          </div>
          <div>
            Expansion <span className="text-[hsl(var(--ink))]">1-3s</span>
          </div>
          <div>
            Full <span className="text-[hsl(var(--rust))]">2-5s</span>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Commands"
        lede="One CLI. Eight verbs. Full-stack from terminal to Web UI to MCP."
        title="Surface area."
      >
        <AtelierFeatureGrid cols={3} items={commands} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Hosted"
        lede="gno.sh is the polished reading surface for what you choose to share. Everything else stays local."
        title="Publish slices. Keep the vault private."
      >
        <AtelierFeatureGrid items={hostedFeatures} />
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            className="atelier-mono border border-[hsl(var(--ink))]/25 px-4 py-2 text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.12em] transition-colors hover:border-[hsl(var(--rust))] hover:text-[hsl(var(--rust))]"
            href="https://gno.sh/share/atlas"
            rel="noopener noreferrer"
            target="_blank"
          >
            Demo: atlas collection
          </a>
          <a
            className="atelier-mono border border-[hsl(var(--ink))]/25 px-4 py-2 text-[11px] text-[hsl(var(--ink))] uppercase tracking-[0.12em] transition-colors hover:border-[hsl(var(--rust))] hover:text-[hsl(var(--rust))]"
            href="https://gno.sh/share/merkle-paths"
            rel="noopener noreferrer"
            target="_blank"
          >
            Demo: single note
          </a>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Graph"
        lede="Force-directed visualisation. Wiki links, markdown links, and similarity edges as a navigable constellation."
        title="See your knowledge as a graph."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`gno graph --collection notes --similarity
gno query "error handling" --tags-any work,urgent
gno ask "summarize API design" --answer`}
          </pre>
        </div>
        <p className="atelier-body mt-6 text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.65]">
          Available everywhere: CLI, Web UI (/graph), REST (/api/graph), MCP
          (gno_graph). Tag filtering via --tags-any (OR) and --tags-all (AND).
          Hierarchical tag paths like project/alpha.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="06 / Integrations"
        lede="MCP for chat clients; skills for coding agents. One install command each."
        title="Give your AI memory."
      >
        <AtelierSpecList
          items={[
            { label: 'Claude Desktop', value: 'gno mcp install' },
            {
              label: 'Cursor / Zed / Windsurf',
              value: 'gno mcp install --target <tool>',
            },
            {
              label: 'LM Studio / LibreChat',
              value: 'gno mcp install --target <tool>',
            },
            { label: 'Claude Code', value: 'gno skill install' },
            {
              label: 'Codex / OpenCode / Amp',
              value: 'gno skill install --target <tool>',
            },
          ]}
        />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="07 / Spec" title="Technical details.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={specs} />
          <div className="atelier-body space-y-4 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Security
            </p>
            <p>
              Binds to 127.0.0.1 with CSP headers and CORS protection. Expose
              via Tailscale Serve or Cloudflare Tunnel when remote access is
              needed.
            </p>
            <p className="atelier-eyebrow pt-2 text-[hsl(var(--paper-muted))]">
              Models
            </p>
            <p>
              Three presets: slim (~1GB), balanced (~2GB), quality (~2.5GB).
              Switch with{' '}
              <code className="atelier-mono text-[hsl(var(--rust))]">
                gno models use &lt;preset&gt;
              </code>
              .
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
