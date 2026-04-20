import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Case Studies · Selected Engagements';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Selected Work',
    title: 'Engagements grouped by practice area.',
    tagline:
      'Selected engagements across agentic PDLC, independent expert work, and AI systems. Real outcomes, real numbers.',
    locale: 'EN',
  });
}
