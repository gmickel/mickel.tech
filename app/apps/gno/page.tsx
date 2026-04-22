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
  name: 'GNO',
  description:
    'Local hybrid search engine + hosted publishing layer for personal knowledge bases. Index Markdown, PDFs, Office docs, code. BM25 + vector + reranking. Web UI, REST API, MCP server. Publish notes and collections as polished reading surfaces at gno.sh.',
  slug: 'gno',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'GNO -- Local hybrid search + hosted publishing for your notes',
  description:
    'Two-layer knowledge stack. Local hybrid search (BM25, vectors, HyDE, reranking, MCP server, Web UI). Hosted at gno.sh: publish collections as polished reading surfaces.',
  openGraph: {
    title: 'GNO · Mickel Tech',
    description:
      'Local hybrid search engine + hosted publish/share layer at gno.sh.',
    type: 'website',
    url: 'https://mickel.tech/apps/gno',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNO · Mickel Tech',
    description:
      'Local hybrid search + hosted publishing. BM25, vectors, reranking, MCP.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/gno' },
};

const problems = [
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
    description: 'Assistants invent answers when they can’t retrieve.',
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

const searchModes = [
  {
    command: 'gno search',
    badge: 'Fast',
    useFor: 'Exact strings, code snippets, known phrases.',
    detail: 'BM25 only. Sub-20ms on 15k docs. Best for grep-style lookups.',
  },
  {
    command: 'gno vsearch',
    badge: 'Semantic',
    useFor: 'Conceptual queries, paraphrased memory.',
    detail:
      'Vector search only via sqlite-vec. Finds notes even with no word overlap.',
  },
  {
    command: 'gno query',
    badge: 'Recommended',
    useFor: 'Default daily driver.',
    detail:
      'Hybrid: BM25 + vectors + query expansion + RRF + reranking. Best recall.',
  },
  {
    command: 'gno ask',
    badge: 'RAG',
    useFor: 'Answers with citations.',
    detail:
      'Retrieves relevant chunks, generates a cited answer, preserves provenance.',
  },
];

const mcpTools = [
  {
    name: 'gno_query',
    kind: 'MCP',
    description: 'Hybrid search (default). BM25 + vectors + rerank.',
  },
  {
    name: 'gno_search',
    kind: 'MCP',
    description: 'BM25-only full-text search.',
  },
  {
    name: 'gno_vsearch',
    kind: 'MCP',
    description: 'Vector-only semantic search.',
  },
  {
    name: 'gno_ask',
    kind: 'MCP',
    description: 'RAG answer with inline citations.',
  },
  {
    name: 'gno_get',
    kind: 'MCP',
    description: 'Retrieve a single document by id or path.',
  },
  {
    name: 'gno_multi_get',
    kind: 'MCP',
    description: 'Batch retrieval of documents.',
  },
  {
    name: 'gno_capture',
    kind: 'MCP',
    description: 'Append a new note from a chat client.',
  },
  {
    name: 'gno_backlinks',
    kind: 'MCP',
    description: 'Incoming wiki-style references.',
  },
  {
    name: 'gno_links',
    kind: 'MCP',
    description: 'Outgoing links from a note.',
  },
  {
    name: 'gno_similar',
    kind: 'MCP',
    description: 'Semantically similar notes.',
  },
  {
    name: 'gno_graph',
    kind: 'MCP',
    description: 'Force-directed knowledge graph data.',
  },
  {
    name: 'gno_list_tags',
    kind: 'MCP',
    description: 'All tags, hierarchical or flat.',
  },
  {
    name: 'gno_add_collection',
    kind: 'MCP',
    description: 'Add a folder as an indexed collection.',
  },
  {
    name: 'gno_remove_collection',
    kind: 'MCP',
    description: 'Drop a collection.',
  },
  {
    name: 'gno_clear_collection_embeddings',
    kind: 'MCP',
    description: 'Reset embeddings for a collection.',
  },
  {
    name: 'gno_index',
    kind: 'MCP',
    description: 'Trigger (re)indexing for changed files.',
  },
  {
    name: 'gno_embed',
    kind: 'MCP',
    description: 'Embed new or modified docs.',
  },
  {
    name: 'gno_sync',
    kind: 'MCP',
    description: 'Full sync: scan, index, embed.',
  },
  {
    name: 'gno_status',
    kind: 'MCP',
    description: 'Index stats and job queue health.',
  },
  {
    name: 'gno_list_jobs',
    kind: 'MCP',
    description: 'Active + queued background jobs.',
  },
];

const mcpClients = [
  { name: 'Claude Desktop', command: 'gno mcp install' },
  { name: 'Cursor', command: 'gno mcp install --target cursor' },
  { name: 'Zed', command: 'gno mcp install --target zed' },
  { name: 'Windsurf', command: 'gno mcp install --target windsurf' },
  { name: 'LM Studio', command: 'gno mcp install --target lmstudio' },
  { name: 'LibreChat', command: 'gno mcp install --target librechat' },
];

const skillClients = [
  { name: 'Claude Code', command: 'gno skill install' },
  { name: 'OpenAI Codex', command: 'gno skill install --target codex' },
  { name: 'OpenCode', command: 'gno skill install --target opencode' },
  { name: 'Amp', command: 'gno skill install --target amp' },
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
      '/share/[slug] for public; unguessable /secret/[token] for private. No auth to read. Revoke anytime.',
  },
  {
    title: 'Reader-grade UX',
    description:
      'Fraunces + Geist + JetBrains Mono. Hotkeys: j/k navigate, / search, o outline, y copy link.',
  },
  {
    title: 'Filtered projection',
    description:
      'Backlinks + related notes resolve only within the published subset. Private vault never leaks.',
  },
  {
    title: 'Stable URLs',
    description:
      'Republish preserves the slug. Share a link once; content updates in place.',
  },
  {
    title: 'Asset manifest',
    description:
      'Images and attachments bundled with the export. Reader loads from the manifest, not your disk.',
  },
];

const webUiFeatures = [
  {
    title: 'Split-view editor',
    description: 'Live markdown + preview, auto-save, wiki-link completion.',
  },
  {
    title: 'Keyboard shortcuts',
    description: '⌘K command palette, ⌘N new note, ⌘B/I formatting, ⌘S save.',
  },
  {
    title: 'Hybrid search inside UI',
    description:
      'Same query pipeline as the CLI. Filters, tag chips, date ranges.',
  },
  {
    title: 'AI Q&A with citations',
    description: 'Ask a question, get an answer linked to the source notes.',
  },
  {
    title: 'Collections manager',
    description: 'Add, remove, reindex folders without leaving the browser.',
  },
  {
    title: 'Graph view',
    description:
      'Force-directed graph with wiki, markdown, and similarity edges.',
  },
];

const restEndpoints = [
  { label: 'GET  /api/docs', value: 'List documents' },
  { label: 'GET  /api/docs/:id', value: 'Single doc' },
  { label: 'POST /api/docs', value: 'Create' },
  { label: 'PUT  /api/docs/:id', value: 'Update' },
  { label: 'POST /api/query', value: 'Hybrid search' },
  { label: 'POST /api/ask', value: 'RAG answer' },
  { label: 'GET  /api/graph', value: 'Knowledge graph' },
  { label: 'GET  /api/collections', value: 'List collections' },
  { label: 'POST /api/collections', value: 'Add collection' },
];

const useCases = [
  {
    title: 'Second brain',
    description:
      'Obsidian, Notion exports, plain Markdown. Daily journaling + research.',
  },
  {
    title: 'Code documentation',
    description: 'ADRs, RFCs, internal wikis. Search by concept, not grep.',
  },
  {
    title: 'Research libraries',
    description: 'PDFs, academic papers, annotated excerpts. Cited answers.',
  },
  {
    title: 'Legal + compliance',
    description: 'Contracts, policies, case law. On-device; no data leaves.',
  },
  {
    title: 'Team knowledge',
    description:
      'Shared vault, filtered publishing at gno.sh for selected slices.',
  },
];

const modelPresets = [
  { label: 'Slim (~1 GB)', value: 'Qwen3 0.6B · gte-small' },
  { label: 'Balanced (~2 GB)', value: 'Qwen3 1.7B · bge-base' },
  { label: 'Quality (~2.5 GB)', value: 'Qwen3 4B · bge-m3' },
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
      <JsonLd data={softwareAppSchema({ ...APP_DATA, offer: 'free' })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'GNO', url: '/apps/gno' },
        ])}
      />

      <AtelierAppHero
        category="01 / Knowledge"
        description="Two layers, one stack. Locally: index 15,000+ Markdown files, PDFs, code, Office docs; hybrid search with BM25, vectors, HyDE expansion, cross-encoder reranking; Web UI, REST API, MCP server. Hosted at gno.sh: publish any collection as a polished reading surface via public or secret links. Your vault never leaves your machine unless you choose."
        idx="01"
        image="/gno/logo.svg"
        imageKind="logo"
        meta={[
          { label: 'Stack', value: 'Bun + SQLite' },
          { label: 'Search', value: 'Hybrid + RAG' },
          { label: 'MCP tools', value: '20+' },
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
        title="Your AI can’t access your notes."
      >
        <AtelierFeatureGrid items={problems} />
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
            BM25 <span className="text-[hsl(var(--ink))]">5–20ms</span>
          </div>
          <div>
            Vector <span className="text-[hsl(var(--ink))]">10–50ms</span>
          </div>
          <div>
            Expansion <span className="text-[hsl(var(--ink))]">1–3s</span>
          </div>
          <div>
            Full <span className="text-[hsl(var(--rust))]">2–5s</span>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Modes"
        lede="Four verbs, four strengths. Use the right one for the question."
        title="Search modes."
      >
        <ul className="divide-y divide-[hsl(var(--ink))]/12 border-[hsl(var(--ink))]/12 border-y">
          {searchModes.map((m) => (
            <li
              className="grid grid-cols-12 gap-x-6 gap-y-2 py-6 md:py-7"
              key={m.command}
            >
              <div className="col-span-12 md:col-span-3">
                <p className="atelier-mono text-[10px] text-[hsl(var(--rust))] uppercase tracking-[0.18em]">
                  {m.badge}
                </p>
                <code className="atelier-mono mt-2 block text-[13px] text-[hsl(var(--ink))] tracking-[0.02em]">
                  {m.command}
                </code>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="atelier-body text-[0.95rem] text-[hsl(var(--ink))] leading-[1.55]">
                  {m.useFor}
                </p>
                <p className="atelier-body mt-1 text-[0.9rem] text-[hsl(var(--ink))]/70 leading-[1.55]">
                  {m.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Quick start"
        lede="Install, initialise, index, query. Works against a fresh vault in minutes."
        title="From zero to first query."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Install + initialise
            </p>
            <div className="codex-panel mt-3">
              <div className="codex-panel__bar flex items-center gap-2">
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
              </div>
              <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.7]">
                {`bun install -g @gmickel/gno
gno init
gno models use balanced
gno serve      # Web UI on :3000`}
              </pre>
            </div>
          </div>
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Add collections + index
            </p>
            <div className="codex-panel mt-3">
              <div className="codex-panel__bar flex items-center gap-2">
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
              </div>
              <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.7]">
                {`gno collection add ~/Documents/Obsidian \\
  --name vault
gno collection add ~/code \\
  --name code --exclude node_modules
gno index`}
              </pre>
            </div>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / MCP"
        lede="Twenty MCP tools give any chat client direct access to your vault. Use from Claude Desktop, Cursor, Zed, Windsurf, LM Studio, LibreChat."
        title="MCP tool manifest."
      >
        <div className="[column-fill:balance] md:columns-2 md:gap-x-12">
          {mcpTools.map((t) => (
            <div
              className="break-inside-avoid border-[hsl(var(--ink))]/10 border-t py-3 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
              key={t.name}
            >
              <div className="flex items-baseline gap-3">
                <code className="atelier-mono text-[12px] text-[hsl(var(--rust))] tracking-[0.02em]">
                  {t.name}
                </code>
                <span className="atelier-mono text-[9.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
                  {t.kind}
                </span>
              </div>
              <p className="atelier-body mt-1 text-[0.88rem] text-[hsl(var(--ink))]/68 leading-[1.45]">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="06 / Clients"
        lede="One install command per client. MCP for chat surfaces; skill for coding agents."
        title="Install anywhere."
      >
        <dl className="divide-y divide-[hsl(var(--ink))]/10 border-[hsl(var(--ink))]/10 border-y">
          <div className="bg-[hsl(var(--paper))] py-2.5">
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">
              MCP clients · chat surfaces
            </p>
          </div>
          {mcpClients.map((c) => (
            <div
              className="grid grid-cols-12 items-baseline gap-4 py-3"
              key={c.name}
            >
              <dt className="atelier-mono col-span-12 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em] sm:col-span-4">
                {c.name}
              </dt>
              <dd className="atelier-mono col-span-12 text-[12px] text-[hsl(var(--ink))] sm:col-span-8">
                {c.command}
              </dd>
            </div>
          ))}
          <div className="bg-[hsl(var(--paper))] py-2.5">
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">
              Coding agents · editor surfaces
            </p>
          </div>
          {skillClients.map((c) => (
            <div
              className="grid grid-cols-12 items-baseline gap-4 py-3"
              key={c.name}
            >
              <dt className="atelier-mono col-span-12 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em] sm:col-span-4">
                {c.name}
              </dt>
              <dd className="atelier-mono col-span-12 text-[12px] text-[hsl(var(--ink))] sm:col-span-8">
                {c.command}
              </dd>
            </div>
          ))}
        </dl>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="07 / Web UI"
        lede="Localhost-bound React SPA. Editor, search, graph, collections. Keyboard-first."
        title="Browser surface."
      >
        <AtelierFeatureGrid cols={3} items={webUiFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="08 / Linking"
        lede="Wiki-style [[links]] between notes. Backlinks on every page. Similar-notes discovery via vector space."
        title="Note linking."
      >
        <div className="codex-panel">
          <div className="codex-panel__bar flex items-center gap-2">
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
            <span className="codex-panel__dot" />
          </div>
          <pre className="atelier-mono overflow-x-auto p-5 text-[12.5px] text-[hsl(var(--paper))] leading-[1.7]">
            {`gno links     foo.md        # outgoing wiki + markdown links
gno backlinks foo.md        # notes linking to foo
gno similar   foo.md --k 10 # nearest by embedding`}
          </pre>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="09 / Graph"
        lede="Force-directed visualisation. Wiki, markdown, and similarity edges as a navigable constellation."
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
          Available everywhere: CLI, Web UI (
          <code className="atelier-mono text-[hsl(var(--rust))]">/graph</code>),
          REST (
          <code className="atelier-mono text-[hsl(var(--rust))]">
            /api/graph
          </code>
          ), MCP (
          <code className="atelier-mono text-[hsl(var(--rust))]">
            gno_graph
          </code>
          ). Hierarchical tag paths like{' '}
          <code className="atelier-mono text-[hsl(var(--rust))]">
            project/alpha
          </code>
          ; filter via{' '}
          <code className="atelier-mono text-[hsl(var(--rust))]">
            --tags-any
          </code>{' '}
          (OR) and{' '}
          <code className="atelier-mono text-[hsl(var(--rust))]">
            --tags-all
          </code>{' '}
          (AND).
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="10 / REST"
        lede="Localhost-bound REST API. CSP headers, CORS protection. Expose via Tailscale Serve or Cloudflare Tunnel if needed."
        title="HTTP surface."
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <AtelierSpecList items={restEndpoints} />
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Example
            </p>
            <div className="codex-panel mt-3">
              <div className="codex-panel__bar flex items-center gap-2">
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
                <span className="codex-panel__dot" />
              </div>
              <pre className="atelier-mono overflow-x-auto p-4 text-[12px] text-[hsl(var(--paper))] leading-[1.7]">
                {`curl -X POST http://127.0.0.1:3000/api/query \\
  -H 'content-type: application/json' \\
  -d '{
    "q": "token caching strategy",
    "k": 10,
    "tags_any": ["infra","api"]
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="11 / Hosted"
        lede="gno.sh is the polished reading surface for what you choose to share. Everything else stays local."
        title="Publish slices. Keep the vault private."
      >
        <AtelierFeatureGrid cols={3} items={hostedFeatures} />
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
        eyebrow="12 / Use cases"
        lede="Five common shapes. Works across them because the primitives are the same."
        title="Who it’s for."
      >
        <AtelierFeatureGrid items={useCases} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="13 / Models"
        lede="Three presets sized for typical laptops. Switch with gno models use &lt;preset&gt;."
        title="Local model presets."
      >
        <AtelierSpecList items={modelPresets} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="14 / Spec" title="Technical details.">
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
              Data
            </p>
            <p>
              Nothing leaves the machine unless you run{' '}
              <code className="atelier-mono text-[hsl(var(--rust))]">
                gno publish
              </code>
              . Embeddings, full-text index, and LLM all run locally against
              your files.
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
