import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'nodejs';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Impressum · Mickel Tech';

export default async function ImprintOGDe() {
  return await renderAtelierOG({
    eyebrow: 'Impressum',
    title: 'Betreiber- und Kontaktangaben.',
    tagline:
      'Gordon Mickel · Binningen, Schweiz · unabhängige Praxis für KI-Systeme und PDLC.',
    locale: 'DE',
  });
}
