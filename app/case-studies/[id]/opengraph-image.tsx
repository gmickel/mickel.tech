import { CASE_STUDIES } from '@/lib/case-studies';
import {
  ATELIER_OG_CONTENT_TYPE,
  ATELIER_OG_SIZE,
  renderAtelierOG,
} from '@/lib/og-atelier';

export const runtime = 'nodejs';
export const size = ATELIER_OG_SIZE;
export const contentType = ATELIER_OG_CONTENT_TYPE;
export const alt = 'Case Study · Mickel Tech';

type ParamsPromise = Promise<{ id: string }>;

export default async function CaseStudyOG({
  params,
}: {
  params: ParamsPromise;
}) {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);

  if (!study) {
    return await renderAtelierOG({
      eyebrow: 'Case Studies',
      title: 'Selected engagements',
      tagline: 'Real outcomes, real numbers.',
      locale: 'EN',
    });
  }

  return await renderAtelierOG({
    eyebrow: `Case Study · ${study.metricValueEN} ${study.metricLabelEN}`,
    title: study.clientEN,
    tagline: study.outcomeEN,
    locale: 'EN',
  });
}
