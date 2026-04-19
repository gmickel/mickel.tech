import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Fallstudien — Auswahl an Mandaten';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Auswahl an Mandaten',
    title: 'Mandate, gruppiert nach Praxisfeld.',
    tagline:
      'Anonymisiert, wo Vertraulichkeit gilt. Genannt nur, wo es meine eigene Arbeit ist. Echte Ergebnisse, echte Zahlen.',
    locale: 'DE',
  });
}
