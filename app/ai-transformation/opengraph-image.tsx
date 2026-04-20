import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'AI Systems & Transformation · Process-first, Production-grade';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'AI Systems & Transformation · Practice Area',
    title: 'AI systems that run your business, not just demo well.',
    tagline:
      'Process-first audit, production system build, fractional AI lead. Sovereign + private AI specialism for regulated workflows.',
    locale: 'EN',
  });
}
