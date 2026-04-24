import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'Dettivo · Local-first dictation and meeting capture for Mac';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: '03 / Voice + meetings · Coming 2026-04-26',
    title: 'Local-first dictation and meeting capture for Mac.',
    tagline:
      'Menu-bar Mac app. Dictate anywhere, capture meetings without a bot, CLI + MCP for agents. One-time lifetime licence.',
    locale: 'EN',
  });
}
