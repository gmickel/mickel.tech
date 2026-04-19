import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesPreview from '@/components/sections/atelier/case-studies-preview';
import AtelierSdlcFaq from '@/components/sections/atelier/sdlc-faq';
import AtelierSdlcHero from '@/components/sections/atelier/sdlc-hero';
import AtelierSdlcMaturity from '@/components/sections/atelier/sdlc-maturity';
import AtelierSdlcOffers from '@/components/sections/atelier/sdlc-offers';
import AtelierSdlcThesis from '@/components/sections/atelier/sdlc-thesis';
import AtelierSdlcTools from '@/components/sections/atelier/sdlc-tools';
import {
  breadcrumbSchema,
  JsonLd,
  personSchema,
  serviceSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Agentic PDLC — From Requirements to Autonomous Delivery',
  description:
    'Agentic PDLC is a re-architecture of how product gets built. From requirements engineering to spec-driven, agent-assisted delivery, eval-gated and cross-model reviewed. L0–L4 maturity model. Diagnostic from CHF 15k. Author of FlowNext, founder of MergeFoundry.',
  keywords: [
    'Agentic PDLC',
    'AI-native PDLC',
    'agentic SDLC',
    'spec-driven development',
    'agentic coding',
    'AI software development lifecycle',
    'AI engineering transformation',
    'eval-driven development',
    'cross-model review',
    'multi-agent code factory',
    'FlowNext',
    'MergeFoundry',
    'agentic delivery',
    'AI maturity model',
    'AI engineering leader',
    'CTO AI strategy',
    'PE software portfolio AI',
  ],
  openGraph: {
    title: 'Agentic PDLC — From Requirements to Autonomous Delivery',
    description:
      'Re-architect product delivery: spec-driven, agent-assisted, eval-gated. L0 → L4 maturity. Diagnostic from CHF 15k. Author of FlowNext and MergeFoundry.',
    url: 'https://mickel.tech/sdlc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/sdlc',
    languages: {
      en: 'https://mickel.tech/sdlc',
      de: 'https://mickel.tech/de/sdlc',
    },
  },
};

export default function SdlcPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={serviceSchema({
          name: 'Agentic PDLC Diagnostic',
          description:
            '2-week assessment: L0–L4 maturity scoring across 5 pillars, opportunity scoring, 90-day roadmap, board-ready report. CHF 15–25k fixed.',
          url: '/sdlc#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'PDLC Foundation Sprint',
          description:
            '6–8 weeks. Tooling rollout, methodology training, 1–2 quick-win lanes co-shipped, KPI baseline. CHF 40–60k fixed.',
          url: '/sdlc#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'PDLC Full Methodology Shift',
          description:
            '3–6 months. L2 → L3/L4 transformation: eval gates, cross-model review, everything-as-code, observability flywheels. CHF 80–150k+.',
          url: '/sdlc#offers',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Agentic PDLC', url: '/sdlc' }])}
      />

      <AtelierSdlcHero locale="en" />
      <AtelierSdlcThesis locale="en" />
      <AtelierSdlcMaturity locale="en" />
      <AtelierSdlcOffers locale="en" />
      <AtelierSdlcTools locale="en" />
      <AtelierCaseStudiesPreview locale="en" />
      <AtelierSdlcFaq locale="en" />
      <AtelierCalCta locale="en" variant="pdlc" />
    </AtelierShell>
  );
}
