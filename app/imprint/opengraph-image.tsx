import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'nodejs';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Imprint · Mickel Tech';

export default async function ImprintOG() {
  return await renderAtelierOG({
    eyebrow: 'Imprint',
    title: 'Operator and contact details.',
    tagline:
      'Gordon Mickel · Binningen, Switzerland · independent practice for AI systems and PDLC.',
    locale: 'EN',
  });
}
