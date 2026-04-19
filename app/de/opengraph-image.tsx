import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'Gordon Mickel — Agentische PDLC, KI-Systeme & Unabhängige Begutachtung';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Gordon Mickel · Unabhängige Praxis',
    title: 'Ich entwerfe KI-Systeme, die wirklich funktionieren.',
    tagline:
      'Agentische PDLC, produktive KI-Systeme und parteiisch beauftragte Begutachtung. Ausgewählte Mandate jedes Jahr neben Growth Factors.',
    locale: 'DE',
  });
}
