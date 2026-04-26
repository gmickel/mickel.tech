import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'nodejs';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Datenschutz · Mickel Tech';

export default async function PrivacyOGDe() {
  return await renderAtelierOG({
    eyebrow: 'Datenschutz',
    title: 'Wie diese Seite mit deinen Daten umgeht.',
    tagline:
      'Serverlogs, Kontaktformular-Anfragen, keine Drittanbieter-Analytics standardmäßig.',
    locale: 'DE',
  });
}
