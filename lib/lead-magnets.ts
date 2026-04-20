/**
 * Lead-magnet registry.
 *
 * Each entry is a downloadable PDF rendered from app/lead-magnets/[slug].
 * PDFs are generated from the same routes via headless-browser print to
 * /public/lead-magnets/{slug}.pdf, served as direct downloads from the
 * commercial pages.
 */

export interface LeadMagnet {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  pages: number;
  /** Visible filename for download. */
  pdfFilename: string;
  /** Where the PDF lives once rendered. */
  pdfHref: string;
  /** Where the HTML preview lives. */
  previewHref: string;
}

export const LEAD_MAGNETS: readonly LeadMagnet[] = [
  {
    slug: 'pdlc-maturity-l0-l4',
    title: 'PDLC Maturity Model',
    subtitle:
      'Where your engineering organisation sits today, and what each level looks like.',
    audience: 'CTOs, VP Engineering, PE operating partners',
    pages: 14,
    pdfFilename: 'mickel-tech-pdlc-maturity-model-l0-l4.pdf',
    pdfHref: '/lead-magnets/pdlc-maturity-l0-l4.pdf',
    previewHref: '/lead-magnets/pdlc-maturity-l0-l4',
  },
  {
    slug: 'ai-engagement-scoping',
    title: 'AI Engagement Scoping Guide',
    subtitle:
      'How to scope an AI engagement so it ships, not stalls. Process map first, tools second.',
    audience: 'CEOs, COOs, GMs, deal teams',
    pages: 12,
    pdfFilename: 'mickel-tech-ai-engagement-scoping-guide.pdf',
    pdfHref: '/lead-magnets/ai-engagement-scoping.pdf',
    previewHref: '/lead-magnets/ai-engagement-scoping',
  },
  {
    slug: 'expert-intake-counsel',
    title: 'Expert Intake & Working with Counsel',
    subtitle:
      'How to engage a Parteigutachter or Werkvertrags-Gutachter: intake, conflicts, methodology, deliverables, fees.',
    audience: 'Litigation counsel, in-house counsel, arbitration teams',
    pages: 12,
    pdfFilename: 'mickel-tech-expert-intake-working-with-counsel.pdf',
    pdfHref: '/lead-magnets/expert-intake-counsel.pdf',
    previewHref: '/lead-magnets/expert-intake-counsel',
  },
];

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return LEAD_MAGNETS.find((m) => m.slug === slug);
}
