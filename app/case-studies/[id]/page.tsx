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
    return { title: 'Case study not found' };
  }
  const description =
    `${study.problemEN.split('. ').slice(0, 2).join('. ')}. ` +
    `${study.metricValueEN}: ${study.metricLabelEN}.`;
  return {
    title: `${study.clientEN} · Case Study`,
    description,
    alternates: {
      canonical: `https://mickel.tech/case-studies/${study.id}`,
      languages: {
        en: `https://mickel.tech/case-studies/${study.id}`,
        de: `https://mickel.tech/de/case-studies/${study.id}`,
        'x-default': `https://mickel.tech/case-studies/${study.id}`,
      },
    },
    openGraph: {
      title: `${study.clientEN} · Case Study`,
      description,
      url: `https://mickel.tech/case-studies/${study.id}`,
      siteName: 'Mickel Tech',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.clientEN} · Case Study`,
      description,
    },
  };
}

export default async function CaseStudyPage({
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
          { name: 'Case studies', url: '/case-studies' },
          {
            name: study.clientEN,
            url: `/case-studies/${study.id}`,
          },
        ])}
      />
      <JsonLd
        data={caseStudySchema({
          id: study.id,
          title: `${study.clientEN} · Case Study`,
          client: study.clientEN,
          problem: study.problemEN,
          outcome: study.outcomeEN,
          url: `/case-studies/${study.id}`,
          locale: 'en',
        })}
      />
      <AtelierCaseStudyDetail locale="en" study={study} />
    </AtelierShell>
  );
}
