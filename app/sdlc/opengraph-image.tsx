import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'edge';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Agentic PDLC — From Requirements to Autonomous Delivery';

export default async function OGImage() {
  return await renderAtelierOG({
    eyebrow: 'Agentic PDLC · Practice Area',
    title: 'From requirements to autonomous delivery.',
    tagline:
      'L0 → L4 maturity. Spec-driven, agent-assisted, eval-gated. Diagnostic from CHF 15k. Author of FlowNext, founder of MergeFoundry.',
    locale: 'EN',
  });
}
