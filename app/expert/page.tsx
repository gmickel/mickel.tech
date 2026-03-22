import type { Metadata } from 'next';
import Shell from '@/components/layout/shell';
import Contact from '@/components/sections/contact/index';
import TechnicalExpert from '@/components/sections/technical-expert';
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Technical Expert & Due Diligence',
  description:
    'ITDR-listed Technical Expert for ICT and AI disputes. Expert reports (Gutachten), forensic code analysis, technology due diligence, independent project assessment. 20+ years hands-on engineering across healthcare, legal, finance.',
  keywords: [
    'technical expert witness',
    'IT expert witness',
    'Gutachten IT',
    'Gutachten Software',
    'IT Sachverständiger',
    'ITDR expert',
    'ITDR Sachverständiger',
    'AI due diligence',
    'technology due diligence',
    'software dispute expert',
    'forensic code analysis',
    'IT arbitration expert',
    'independent project assessment',
    'Swiss IT expert',
    'IT Gutachter Schweiz',
    'Schiedsgutachten IT',
  ],
  openGraph: {
    title: 'Technical Expert & Due Diligence | Gordon Mickel',
    description:
      'ITDR-listed Technical Expert. Expert reports, forensic code analysis, AI due diligence, project assessment. 20+ years across regulated industries.',
    url: 'https://mickel.tech/expert',
    type: 'website',
  },
  alternates: { canonical: 'https://mickel.tech/expert' },
};

export default function ExpertPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: 'Technical Expert & Due Diligence',
          description:
            'ITDR-listed Technical Expert providing independent analysis for IT and AI disputes, arbitration, due diligence and high-stakes project decisions.',
          url: '/expert',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Technical Expert', url: '/expert' },
        ])}
      />
      <TechnicalExpert />
      <Contact />
    </Shell>
  );
}
