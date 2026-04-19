import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Über Gordon Mickel';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Über mich · Gordon Mickel',
    title: 'Ich baue KI-Systeme und lese fremden Code unter Kreuzverhör.',
    tagline:
      'Gründer DocIQ. Ehem. Head of AI & Engineering Lead bei CISTEC AG (KISIM). Operating Principal bei Growth Factors. ITDR-gelisteter Experte. OpenAI Red Team Alumnus.',
    locale: 'DE',
  });
}
