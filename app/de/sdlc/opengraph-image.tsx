import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt =
  'Agentische PDLC -- Von Anforderungen bis zur autonomen Auslieferung';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Agentische PDLC · Praxisfeld',
    title: 'Von Anforderungen bis zur autonomen Auslieferung.',
    tagline:
      'L0 → L4 Reifegrad. Spec-getrieben, agentengestützt, eval-gesichert. Diagnose ab CHF 15k. Autor von FlowNext, Gründer von MergeFoundry.',
    locale: 'DE',
  });
}
