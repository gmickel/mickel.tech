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
    slug: 'dociq-sphere',
    name: 'DocIQ Sphere',
    tagline: 'Privacy-first legal intelligence',
    description:
      'Legal document intelligence platform. AI-powered contract analysis with partner law firm playbooks, complete audit trails, and document fidelity.',
    category: 'BusinessApplication',
    tags: ['AI', 'Legal Tech', 'Enterprise'],
    image: '/sphere/sphere-research.png',
    status: 'December 2025',
  },
  {
    slug: 'dociq-shield',
    name: 'DocIQ Shield',
    tagline: 'Zero-persistence anonymisation',
    description:
      'Court document anonymisation with Swiss court standard compliance. No data stored, ever. 10 seconds instead of 2 hours.',
    category: 'BusinessApplication',
    tags: ['AI', 'Privacy', 'Swiss Courts'],
    image: '/shield/shield.png',
    status: 'January 2026',
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
