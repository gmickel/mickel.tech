import type { Metadata } from 'next';

import Shell from '@/components/layout/shell';
import Contact from '@/components/sections/contact/index';
import DeAiTransformation from '@/components/sections/de/ai-transformation';
import { breadcrumbSchema, JsonLd, serviceSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'KI-Transformation',
  description:
    'Prozess-Mapping zu Produktions-KI-Systemen. Enterprise RAG, autonome Agenten, Private LLM-Infrastruktur. 10+ Unternehmen transformiert in regulierten Branchen.',
  keywords: [
    'KI Transformation',
    'Enterprise KI',
    'Enterprise RAG',
    'KI Agenten',
    'Private LLM',
    'KI Infrastruktur',
    'Prozessautomatisierung KI',
    'KI Beratung Schweiz',
    'KI Implementierung',
  ],
  openGraph: {
    title: 'KI-Transformation | Gordon Mickel',
    description:
      'Prozess-Mapping zu Produktions-KI-Systemen. Enterprise RAG, autonome Agenten, Private LLM.',
    locale: 'de_CH',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/ai-transformation',
    languages: {
      en: 'https://mickel.tech/ai-transformation',
      de: 'https://mickel.tech/de/ai-transformation',
    },
  },
};

export default function DeAiTransformationPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: 'KI-Transformation',
          description:
            'End-to-End KI-Transformation: Prozess-Mapping, Enterprise RAG, autonome Agenten, Private LLM-Infrastruktur.',
          url: '/de/ai-transformation',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'KI-Transformation', url: '/de/ai-transformation' },
        ])}
      />
      <DeAiTransformation />
      <Contact />
    </Shell>
  );
}
