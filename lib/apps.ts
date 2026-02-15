// SINGLE SOURCE OF TRUTH for apps metadata

export interface AppMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string; // for JSON-LD applicationCategory
  tags: readonly string[];
  image?: string;
  status: string;
}

export const APPS: AppMeta[] = [
  {
    slug: 'flow-next',
    name: 'Flow-Next',
    tagline: 'Zero-dep agent orchestration',
    description:
      'The AI coding workflow people call "simply the best, not even close." Task graphs, re-anchoring, cross-model reviews — zero dependencies.',
    category: 'DeveloperApplication',
    tags: ['Claude Code', 'Plugin', 'Open Source'],
    image: '/flow/logo.svg',
    status: 'Released',
  },
  {
    slug: 'gno',
    name: 'GNO',
    tagline: 'Local search for your second brain',
    description:
      'Local hybrid search CLI. Index Markdown, PDFs, code. BM25 + vector search with HyDE expansion. Give AI agents memory over your files.',
    category: 'DeveloperApplication',
    tags: ['CLI', 'Search', 'Open Source'],
    image: '/gno/logo.svg',
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
    status: 'Released',
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
    status: 'In Production',
  },
];

export function getAppSlugs(): string[] {
  return APPS.map((a) => a.slug);
}

export function getAppBySlug(slug: string): AppMeta | undefined {
  return APPS.find((a) => a.slug === slug);
}
