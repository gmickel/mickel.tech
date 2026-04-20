import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesAreaPreview from '@/components/sections/atelier/case-studies-area-preview';
import LeadMagnetCard from '@/components/sections/atelier/lead-magnet';
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
  title: 'Agentische PDLC -- Von Anforderungen bis zur autonomen Auslieferung',
  description:
    'Agentische PDLC heisst, das Bauen von Produkt neu auszulegen. Von Anforderungsengineering bis zu spec-getriebener, agentengestützter Auslieferung, abgesichert durch Evals und Cross-Model-Review. L0-L4 Reifegradmodell. Diagnose ab CHF 15k. Autor von FlowNext, Gründer von MergeFoundry.',
  keywords: [
    'Agentische PDLC',
    'KI-native PDLC',
    'agentische SDLC',
    'spec-getriebene Entwicklung',
    'agentisches Coding',
    'KI-Software-Lebenszyklus',
    'KI Engineering Transformation',
    'eval-getriebene Entwicklung',
    'Cross-Model-Review',
    'Multi-Agent-Code-Fabrik',
    'FlowNext',
    'MergeFoundry',
    'KI-Reifegradmodell',
    'CTO KI-Strategie',
    'PE Software-Portfolio KI',
    'KI Beratung Schweiz',
  ],
  openGraph: {
    title:
      'Agentische PDLC -- Von Anforderungen bis zur autonomen Auslieferung',
    description:
      'Produktauslieferung neu gedacht: spec-getrieben, agentengestützt, eval-gesichert. L0 → L4 Reifegrad. Diagnose ab CHF 15k. Autor von FlowNext und MergeFoundry.',
    url: 'https://mickel.tech/de/sdlc',
    locale: 'de_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/sdlc',
    languages: {
      en: 'https://mickel.tech/sdlc',
      de: 'https://mickel.tech/de/sdlc',
      'x-default': 'https://mickel.tech/sdlc',
    },
  },
};

export default function DeSdlcPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={serviceSchema({
          name: 'Agentische PDLC Diagnose',
          description:
            '2-wöchige Bewertung: L0-L4-Reifegrad-Scoring über 5 Säulen, Opportunity-Scoring, 90-Tage-Roadmap, Bericht für den Verwaltungsrat. CHF 15-25k fix.',
          url: '/de/sdlc#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'PDLC Foundation Sprint',
          description:
            '6-8 Wochen. Tooling-Rollout, Methodikschulung, 1-2 Quick-Win-Spuren mit-ausgeliefert, KPI-Baseline. CHF 40-60k fix.',
          url: '/de/sdlc#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'PDLC Voller Methodenwechsel',
          description:
            '3-6 Monate. Transformation L2 → L3/L4: Eval-Gates, Cross-Model-Review, Everything-as-code, Observability-Schwungräder. CHF 80-150k+.',
          url: '/de/sdlc#offers',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Agentische PDLC', url: '/de/sdlc' }])}
      />

      <AtelierSdlcHero locale="de" />
      <AtelierSdlcThesis locale="de" />
      <AtelierSdlcMaturity locale="de" />
      <AtelierSdlcOffers locale="de" />
      <AtelierSdlcTools locale="de" />
      <AtelierCaseStudiesAreaPreview
        area="pdlc"
        locale="de"
        sectionNumber="06"
      />
      <LeadMagnetCard
        locale="de"
        sectionNumber="07"
        slug="pdlc-maturity-l0-l4"
      />
      <AtelierSdlcFaq locale="de" />
      <AtelierCalCta locale="de" variant="pdlc" />
    </AtelierShell>
  );
}
