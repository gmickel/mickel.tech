import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'Gordon Mickel · Agentic PDLC, AI Systems & Independent Technical Expert';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Gordon Mickel · Independent Practice',
    title: 'I design AI systems that actually work.',
    tagline:
      'Agentic PDLC, production AI systems, and party-engaged technical opinion. Select mandates each year alongside Growth Factors.',
    locale: 'EN',
  });
}
