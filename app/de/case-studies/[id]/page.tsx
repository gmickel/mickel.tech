import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCaseStudyDetail from '@/components/sections/atelier/case-study-detail';
import { CASE_STUDIES } from '@/lib/case-studies';
import {
  breadcrumbSchema,
  caseStudySchema,
  JsonLd,
  personSchema,
} from '@/lib/json-ld';

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
    `${study.metricValueDE} -- ${study.metricLabelDE}.`;
  return {
    title: `${study.clientDE} -- Fallstudie`,
    description,
    alternates: {
      canonical: `https://mickel.tech/de/case-studies/${study.id}`,
      languages: {
        en: `https://mickel.tech/case-studies/${study.id}`,
        de: `https://mickel.tech/de/case-studies/${study.id}`,
        'x-default': `https://mickel.tech/case-studies/${study.id}`,
      },
    },
    openGraph: {
      title: `${study.clientDE} · Fallstudie`,
      description,
      url: `https://mickel.tech/de/case-studies/${study.id}`,
      siteName: 'Mickel Tech',
      locale: 'de_CH',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.clientDE} · Fallstudie`,
      description,
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
      <JsonLd
        data={caseStudySchema({
          id: study.id,
          title: `${study.clientDE} · Fallstudie`,
          client: study.clientDE,
          problem: study.problemDE,
          outcome: study.outcomeDE,
          url: `/de/case-studies/${study.id}`,
          locale: 'de',
        })}
      />
      <AtelierCaseStudyDetail locale="de" study={study} />
    </AtelierShell>
  );
}
