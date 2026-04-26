import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'nodejs';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Privacy · Mickel Tech';

export default async function PrivacyOG() {
  return await renderAtelierOG({
    eyebrow: 'Privacy',
    title: 'How this site handles your data.',
    tagline:
      'Server logs, contact-form submissions, no third-party analytics by default.',
    locale: 'EN',
  });
}
