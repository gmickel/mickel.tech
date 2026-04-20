/**
 * Lead-magnet registry.
 *
 * Each entry is a downloadable PDF rendered from app/lead-magnets/[slug].
 * PDFs are generated from the same routes via headless-browser print to
 * /public/lead-magnets/{slug}.pdf, served as direct downloads from the
 * commercial pages.
 *
 * German localisation: titleDE / subtitleDE / audienceDE cover the card
 * surface rendered by components/sections/atelier/lead-magnet.tsx. The
 * PDF content itself remains English (dual-language PDFs would double
 * the production cost for no proven demand).
 */

export interface LeadMagnet {
  slug: string;
  title: string;
  titleDE: string;
  subtitle: string;
  subtitleDE: string;
  audience: string;
  audienceDE: string;
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
    titleDE: 'PDLC-Reifegradmodell',
    subtitle:
      'Where your engineering organisation sits today, and what each level looks like.',
    subtitleDE:
      'Wo Ihre Engineering-Organisation heute steht -- und was jede Stufe konkret bedeutet.',
    audience: 'CTOs, VP Engineering, PE operating partners',
    audienceDE: 'CTOs, VP Engineering, PE-Operating-Partner',
    pages: 14,
    pdfFilename: 'mickel-tech-pdlc-maturity-model-l0-l4.pdf',
    pdfHref: '/lead-magnets/pdlc-maturity-l0-l4.pdf',
    previewHref: '/lead-magnets/pdlc-maturity-l0-l4',
  },
  {
    slug: 'ai-engagement-scoping',
    title: 'AI Engagement Scoping Guide',
    titleDE: 'Scoping-Leitfaden für KI-Mandate',
    subtitle:
      'How to scope an AI engagement so it ships, not stalls. Process map first, tools second.',
    subtitleDE:
      'So schneiden Sie ein KI-Mandat zu, dass es produktiv geht statt stecken bleibt. Prozess zuerst, Werkzeuge danach.',
    audience: 'CEOs, COOs, GMs, deal teams',
    audienceDE: 'CEOs, COOs, GMs, Deal-Teams',
    pages: 12,
    pdfFilename: 'mickel-tech-ai-engagement-scoping-guide.pdf',
    pdfHref: '/lead-magnets/ai-engagement-scoping.pdf',
    previewHref: '/lead-magnets/ai-engagement-scoping',
  },
  {
    slug: 'expert-intake-counsel',
    title: 'Expert Intake & Working with Counsel',
    titleDE: 'Mandatsannahme und Zusammenarbeit mit Anwälten',
    subtitle:
      'How to engage a Parteigutachter or Werkvertrags-Gutachter: intake, conflicts, methodology, deliverables, fees.',
    subtitleDE:
      'Wie Sie einen Parteigutachter oder Werkvertrags-Gutachter beauftragen: Annahme, Konflikte, Methodik, Leistungen, Honorar.',
    audience: 'Litigation counsel, in-house counsel, arbitration teams',
    audienceDE: 'Prozessanwälte, Inhouse-Counsel, Schiedsgerichtsteams',
    pages: 12,
    pdfFilename: 'mickel-tech-expert-intake-working-with-counsel.pdf',
    pdfHref: '/lead-magnets/expert-intake-counsel.pdf',
    previewHref: '/lead-magnets/expert-intake-counsel',
  },
];

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return LEAD_MAGNETS.find((m) => m.slug === slug);
}
