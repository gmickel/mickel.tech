import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesAreaPreview from '@/components/sections/atelier/case-studies-area-preview';
import AtelierTransformFaq from '@/components/sections/atelier/transform-faq';
import AtelierTransformGovernance from '@/components/sections/atelier/transform-governance';
import AtelierTransformHero from '@/components/sections/atelier/transform-hero';
import AtelierTransformOffers from '@/components/sections/atelier/transform-offers';
import AtelierTransformProcess from '@/components/sections/atelier/transform-process';
import AtelierTransformSovereign from '@/components/sections/atelier/transform-sovereign';
import AtelierTransformSystems from '@/components/sections/atelier/transform-systems';
import {
  breadcrumbSchema,
  JsonLd,
  personSchema,
  serviceSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'AI Systems & Transformation — Process-first, Production-grade',
  description:
    'AI systems that run your business, not just demo well. Process-first audit, production system build, fractional AI lead. Enterprise RAG, autonomous agents, voice, private LLM. CHF 15k audit, CHF 40–150k system build. Binningen, DE / EN.',
  keywords: [
    'AI transformation Switzerland',
    'AI Beratung Schweiz',
    'sovereign AI Switzerland',
    'private LLM Switzerland',
    'on-prem AI',
    'fine-tuned local models',
    'custom NER',
    'PII masking on-prem',
    'FADP AI compliance',
    'GDPR AI compliance',
    'EU AI Act',
    'enterprise RAG',
    'enterprise AI',
    'AI agents',
    'voice agents',
    'autonomous agents',
    'private LLM infrastructure',
    'process automation AI',
    'fractional AI lead',
    'AI strategy CEO',
    'AI strategy CTO',
    'PE portco AI',
    'AI in regulated industries',
    'production AI systems',
    'AI architecture',
    'context layer',
    'AI governance',
  ],
  openGraph: {
    title: 'AI Systems & Transformation — Process-first, Production-grade',
    description:
      'Process-first AI: map workflows, build the context layer, ship production systems. Enterprise RAG, agents, voice, private LLM. Audit from CHF 15k.',
    url: 'https://mickel.tech/ai-transformation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/ai-transformation',
    languages: {
      en: 'https://mickel.tech/ai-transformation',
      de: 'https://mickel.tech/de/ai-transformation',
    },
  },
};

export default function AiTransformationPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={serviceSchema({
          name: 'Process Map + AI Opportunity Audit',
          description:
            '2–3 weeks. Map workflows end-to-end, score automation candidates, propose 3–5 prioritised initiatives with ROI and 90-day plan. CHF 15–25k fixed.',
          url: '/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'AI System Build',
          description:
            'Production deployment of an AI system class (RAG, agents, voice, knowledge platform, private LLM). Requirements through go-live with operations handover. CHF 40–150k.',
          url: '/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Fractional AI Lead',
          description:
            '1–2 days/week. Program governance, vendor selection, hands-on architecture, internal capability building. Monthly retainer, quarterly minimum.',
          url: '/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'AI systems & transformation', url: '/ai-transformation' },
        ])}
      />

      <AtelierTransformHero locale="en" />
      <AtelierTransformProcess locale="en" />
      <AtelierTransformSystems locale="en" />
      <AtelierTransformSovereign locale="en" />
      <AtelierTransformOffers locale="en" />
      <AtelierTransformGovernance locale="en" />
      <AtelierCaseStudiesAreaPreview
        area="systems"
        locale="en"
        sectionNumber="07"
      />
      <AtelierTransformFaq locale="en" />
      <AtelierCalCta locale="en" variant="transformation" />
    </AtelierShell>
  );
}
