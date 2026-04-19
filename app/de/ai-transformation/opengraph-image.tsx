import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'KI-Systeme & Transformation — Prozess zuerst, produktiv ausgeliefert';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'KI-Systeme & Transformation · Praxisfeld',
    title: 'KI-Systeme, die Ihr Geschäft tragen.',
    tagline:
      'Prozess-zuerst-Audit, produktiver System-Build, Fractional KI-Lead. Spezialdisziplin: souveräne + private KI für regulierte Workflows.',
    locale: 'DE',
  });
}
