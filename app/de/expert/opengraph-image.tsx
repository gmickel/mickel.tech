import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'Unabhängige Begutachtung -- Parteigutachten, Werkvertrags-Gutachten, KI/Tech-DD';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Unabhängige Begutachtung · ITDR-gelistet',
    title:
      'Zwanzig Jahre Code. Jetzt sorgfältig gelesen, zu Protokoll gegeben.',
    tagline:
      'Parteigutachten für die Anwaltschaft, Werkvertrags-Gutachten für die Beschaffung, KI- und Tech-Due-Diligence für Investoren und Verwaltungsräte. CH / DE.',
    locale: 'DE',
  });
}
