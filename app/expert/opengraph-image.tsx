import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'Independent Technical Expert — Parteigutachten, Werkvertrags-Gutachten, AI/Tech DD';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Independent Expert · ITDR-listed',
    title: 'Twenty years of code. Now read carefully, on the record.',
    tagline:
      'Parteigutachten for counsel, Werkvertrags-Gutachten for procurement, AI / tech due diligence for investors and boards. CH / DE.',
    locale: 'EN',
  });
}
