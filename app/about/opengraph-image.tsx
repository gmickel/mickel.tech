import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'About Gordon Mickel';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'About · Gordon Mickel',
    title:
      'I build AI systems and read other people\u2019s code under cross-examination.',
    tagline:
      'Founder DocIQ. Former Head of AI & Engineering Lead at CISTEC AG (KISIM). Operating Principal at Growth Factors. ITDR-listed expert. OpenAI Red Team alumnus.',
    locale: 'EN',
  });
}
