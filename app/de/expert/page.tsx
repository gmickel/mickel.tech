import type { Metadata } from 'next';

import Shell from '@/components/layout/shell';
import Contact from '@/components/sections/contact/index';
import DeTechnicalExpert from '@/components/sections/de/technical-expert';
import { breadcrumbSchema, JsonLd, serviceSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Technischer Sachverständiger & Due Diligence',
  description:
    'ITDR-gelisteter technischer Sachverständiger für ICT- und KI-Streitigkeiten. Gutachten, forensische Code-Analyse, Technologie-Due-Diligence, unabhängige Projektbewertung. 20+ Jahre Praxiserfahrung.',
  keywords: [
    'technischer Sachverständiger',
    'IT Sachverständiger',
    'Gutachten IT',
    'Gutachten Software',
    'ITDR Sachverständiger',
    'IT Gutachter Schweiz',
    'Schiedsgutachten IT',
    'Technologie Due Diligence',
    'forensische Code-Analyse',
    'unabhängige Projektbewertung',
  ],
  openGraph: {
    title: 'Technischer Sachverständiger & Due Diligence | Gordon Mickel',
    description:
      'ITDR-gelisteter Sachverständiger. Gutachten, forensische Code-Analyse, Due Diligence. 20+ Jahre.',
    locale: 'de_CH',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/expert',
    languages: {
      en: 'https://mickel.tech/expert',
      de: 'https://mickel.tech/de/expert',
    },
  },
};

export default function DeExpertPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: 'Technischer Sachverständiger & Due Diligence',
          description:
            'ITDR-gelisteter technischer Sachverständiger für unabhängige Analyse bei IT- und KI-Streitigkeiten.',
          url: '/de/expert',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Sachverständiger', url: '/de/expert' },
        ])}
      />
      <DeTechnicalExpert />
      <Contact />
    </Shell>
  );
}
