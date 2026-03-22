import type { Metadata } from 'next';

import Shell from '@/components/layout/shell';
import DeAiTransformation from '@/components/sections/de/ai-transformation';
import Contact from '@/components/sections/contact/index';
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/json-ld';

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
  alternates: {
    canonical: 'https://mickel.tech/de/ai-transformation',
    languages: { en: '/ai-transformation', de: '/de/ai-transformation' },
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
