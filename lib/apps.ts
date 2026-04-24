// SINGLE SOURCE OF TRUTH for apps metadata

export interface AppMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string; // for JSON-LD applicationCategory
  tags: readonly string[];
  image?: string;
  /**
   * How the image should render on /apps cards.
   * - `logo`: small square mark; place inside a graphite tile, contained + padded.
   * - `shot`: screenshot/product image; cover-fit in a paper-framed tile.
   */
  imageKind?: 'logo' | 'shot';
  status: string;
}

export const APPS: AppMeta[] = [
  {
    slug: 'gno',
    name: 'GNO',
    tagline: 'Local search + hosted publishing for your second brain',
    description:
      'Two-layer knowledge stack. Local: hybrid search CLI over Markdown, PDFs and code (BM25 + vectors + reranking, MCP server, Web UI). Hosted at gno.sh: publish notes and collections as polished reading surfaces with reader hotkeys, public links and secret shares.',
    category: 'DeveloperApplication',
    tags: ['CLI', 'Search', 'Publishing', 'Open Source'],
    image: '/gno/logo.svg',
    imageKind: 'logo',
    status: 'Released',
  },
  {
    slug: 'flow-next',
    name: 'Flow-Next',
    tagline: 'Zero-dep agent orchestration',
    description:
      'The AI coding workflow people call "simply the best, not even close." Task graphs, re-anchoring, cross-model reviews, zero dependencies.',
    category: 'DeveloperApplication',
    tags: ['Claude Code', 'Plugin', 'Open Source'],
    image: '/flow/logo.svg',
    imageKind: 'logo',
    status: 'Released',
  },
  {
    slug: 'dettivo',
    name: 'Dettivo',
    tagline: 'Local-first dictation and meeting capture for Mac',
    description:
      'Menu-bar Mac app. Dictate into any app with a hotkey. Capture meetings without inviting a bot. Audio, transcripts, analysis stay on your Mac. CLI + loopback REST + MCP for agents. One-time lifetime licence.',
    category: 'DesktopApplication',
    tags: ['macOS', 'Dictation', 'Meetings', 'MCP'],
    image: '/dettivo/home.png',
    imageKind: 'shot',
    status: 'Coming Apr 2026',
  },
  {
    slug: 'dociq-sphere',
    name: 'DocIQ Sphere',
    tagline: 'AI that actually edits your Word documents',
    description:
      'Tracked changes, legal research across six databases, clause negotiation, playbooks, data rooms, and complete audit trails. Swiss-engineered.',
    category: 'BusinessApplication',
    tags: ['AI', 'Legal Tech', 'Enterprise'],
    image: '/sphere/sphere-research.png',
    imageKind: 'shot',
    status: 'Released',
  },
  {
    slug: 'dociq-shield',
    name: 'DocIQ Shield',
    tagline: 'Zero-persistence anonymisation',
    description:
      'Fine-tuned local NER and LLM models. Swiss court standard compliance. No data stored, ever. 10 seconds instead of 2 hours.',
    category: 'BusinessApplication',
    tags: ['AI', 'Privacy', 'Swiss Courts'],
    image: '/shield/shield.png',
    imageKind: 'shot',
    status: 'Released',
  },
  {
    slug: 'flow',
    name: 'Flow',
    tagline: 'Plan first, work second',
    description:
      'Claude Code marketplace plugin for structured development workflow. Research agents, gap analysis, and disciplined execution.',
    category: 'DeveloperApplication',
    tags: ['Claude Code', 'Plugin', 'Open Source'],
    image: '/flow/logo.svg',
    imageKind: 'logo',
    status: 'Released',
  },
  {
    slug: 'sheets-cli',
    name: 'sheets-cli',
    tagline: 'Google Sheets for humans & agents',
    description:
      'Command-line interface for Google Sheets with JSON I/O. Key-based updates, batch operations, dry-run mode. Installs as AI agent skill.',
    category: 'DeveloperApplication',
    tags: ['CLI', 'Google Sheets', 'Open Source'],
    image: '/sheets-cli/icon.png',
    imageKind: 'logo',
    status: 'Released',
  },
  {
    slug: 'outlookctl',
    name: 'outlookctl',
    tagline: 'Control Outlook from CLI',
    description:
      'Local CLI bridge for Outlook Classic automation via COM. AI-assisted email and calendar management with Claude Code. No API keys, no OAuth.',
    category: 'DeveloperApplication',
    tags: ['Windows', 'Python', 'Open Source'],
    image: '/outlookctl/outlookctl-hero.png',
    imageKind: 'shot',
    status: 'Released',
  },
  {
    slug: 'smarttrim',
    name: 'SmartTrim',
    tagline: 'Fix AI clipboard chaos',
    description:
      'macOS menu bar utility that automatically fixes formatting issues when you copy-paste from AI coding assistants.',
    category: 'DeveloperApplication',
    tags: ['macOS', 'Swift', 'Open Source'],
    image: '/smarttrim-dark.png',
    imageKind: 'shot',
    status: 'Released',
  },
  {
    slug: 'dociq',
    name: 'DocIQ 1.0',
    tagline: 'Pioneering document intelligence',
    description:
      'One of the first legal tech platforms to use NLP and machine learning for document lifecycle management. Visual no-code template builder, e-signatures, real-time collaboration.',
    category: 'BusinessApplication',
    tags: ['Legal Tech', 'NLP', '2017-2020'],
    image: '/dociq/dociq-template-editor.png',
    imageKind: 'shot',
    status: 'In Production',
  },
];

export function getAppSlugs(): string[] {
  return APPS.map((a) => a.slug);
}

export function getAppBySlug(slug: string): AppMeta | undefined {
  return APPS.find((a) => a.slug === slug);
}
