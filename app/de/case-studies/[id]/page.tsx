import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCaseStudyDetail from '@/components/sections/atelier/case-study-detail';
import { CASE_STUDIES } from '@/lib/case-studies';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);
  if (!study) {
    return { title: 'Fallstudie nicht gefunden' };
  }
  const description =
    `${study.problemDE.split('. ').slice(0, 2).join('. ')}. ` +
    `${study.metricValueDE} — ${study.metricLabelDE}.`;
  return {
    title: `${study.clientDE} — Fallstudie`,
    description,
    alternates: {
      canonical: `https://mickel.tech/de/case-studies/${study.id}`,
      languages: {
        en: `https://mickel.tech/case-studies/${study.id}`,
        de: `https://mickel.tech/de/case-studies/${study.id}`,
      },
    },
    openGraph: {
      title: `${study.clientDE} — Fallstudie | Mickel Tech`,
      description,
      url: `https://mickel.tech/de/case-studies/${study.id}`,
      type: 'article',
      locale: 'de_CH',
    },
  };
}

export default async function DeCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);
  if (!study) {
    notFound();
  }

  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Fallstudien', url: '/de/case-studies' },
          {
            name: study.clientDE,
            url: `/de/case-studies/${study.id}`,
          },
        ])}
      />
      <AtelierCaseStudyDetail locale="de" study={study} />
    </AtelierShell>
  );
}
