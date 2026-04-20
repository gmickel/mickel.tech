import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesIndex from '@/components/sections/atelier/case-studies-index';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Case Studies: Selected Work',
  description:
    'Selected engagements across agentic PDLC, independent expert work, and AI systems. Real outcomes, real numbers.',
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
      'Selected engagements across agentic PDLC, independent expert work, and AI systems. Real outcomes, real numbers.',
    url: 'https://mickel.tech/case-studies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/case-studies',
    languages: {
      en: 'https://mickel.tech/case-studies',
      de: 'https://mickel.tech/de/case-studies',
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

      <AtelierCaseStudiesIndex locale="en" />
      <AtelierCalCta locale="en" variant="transformation" />
    </AtelierShell>
  );
}
