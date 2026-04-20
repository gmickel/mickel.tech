import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesIndex from '@/components/sections/atelier/case-studies-index';
import { CASE_STUDIES } from '@/lib/case-studies';
import {
  breadcrumbSchema,
  itemListSchema,
  JsonLd,
  personSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Case Studies: Selected Work',
  description:
    'Selected DACH engagements in agentic PDLC, independent expert work and AI systems. PE portcos and regulated industries. Real outcomes, real numbers.',
  keywords: [
    'case studies',
    'AI case studies',
    'PE portco AI case studies',
    'agentic PDLC case studies',
    'Parteigutachten Beispiele',
    'Werkvertrags-Gutachten Beispiele',
    'Tech DD case studies',
    'AI transformation case studies',
    'Gordon Mickel work',
  ],
  openGraph: {
    title: 'Case Studies: Selected Work | Mickel Tech',
    description:
      'Selected DACH engagements in agentic PDLC, independent expert work and AI systems. PE portcos and regulated industries.',
    url: 'https://mickel.tech/case-studies',
    siteName: 'Mickel Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies · Mickel Tech',
    description:
      'Selected DACH engagements in agentic PDLC, independent expert work and AI systems.',
  },
  alternates: {
    canonical: 'https://mickel.tech/case-studies',
    languages: {
      en: 'https://mickel.tech/case-studies',
      de: 'https://mickel.tech/de/case-studies',
      'x-default': 'https://mickel.tech/case-studies',
    },
  },
};

export default function CaseStudiesPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Case studies', url: '/case-studies' },
        ])}
      />
      <JsonLd
        data={itemListSchema({
          name: 'Mickel Tech · Case studies',
          url: '/case-studies',
          items: CASE_STUDIES.map((s) => ({
            name: s.clientEN,
            url: `/case-studies/${s.id}`,
            description: s.outcomeEN,
          })),
        })}
      />

      <AtelierCaseStudiesIndex locale="en" />
      <AtelierCalCta locale="en" variant="transformation" />
    </AtelierShell>
  );
}
