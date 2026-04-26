import { CASE_STUDIES } from '@/lib/case-studies';
import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'nodejs';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Fallstudie · Mickel Tech';

type ParamsPromise = Promise<{ id: string }>;

export default async function CaseStudyOGDe({
  params,
}: {
  params: ParamsPromise;
}) {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);

  if (!study) {
    return await renderAtelierOG({
      eyebrow: 'Fallstudien',
      title: 'Ausgewählte Mandate',
      tagline: 'Echte Ergebnisse, echte Zahlen.',
      locale: 'DE',
    });
  }

  return await renderAtelierOG({
    eyebrow: `Fallstudie · ${study.metricValueDE} ${study.metricLabelDE}`,
    title: study.clientDE,
    tagline: study.outcomeDE,
    locale: 'DE',
  });
}
