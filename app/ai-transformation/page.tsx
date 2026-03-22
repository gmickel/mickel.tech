import type { Metadata } from 'next';
import Shell from '@/components/layout/shell';
import AiTransformation from '@/components/sections/ai-transformation';
import Contact from '@/components/sections/contact/index';
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Total AI Transformation',
  description:
    'Process mapping to production AI systems. Enterprise RAG, autonomous agents, private LLM infrastructure and workflow automation. 10+ companies transformed across regulated industries.',
  keywords: [
    'AI transformation',
    'enterprise AI',
    'enterprise RAG',
    'AI agents',
    'private LLM',
    'AI infrastructure',
    'process automation AI',
    'knowledge management AI',
    'AI consulting',
    'AI implementation',
  ],
  openGraph: {
    title: 'Total AI Transformation | Gordon Mickel',
    description:
      'Process mapping to production AI systems. Enterprise RAG, agents, private LLM infrastructure. 10+ companies transformed.',
    url: 'https://mickel.tech/ai-transformation',
    type: 'website',
  },
  alternates: { canonical: 'https://mickel.tech/ai-transformation' },
};

export default function AiTransformationPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: 'Total AI Transformation',
          description:
            'End-to-end AI transformation: process mapping, enterprise RAG, autonomous agents, private LLM infrastructure. Context layer first, automation on top.',
          url: '/ai-transformation',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'AI Transformation', url: '/ai-transformation' },
        ])}
      />
      <AiTransformation />
      <Contact />
    </Shell>
  );
}
