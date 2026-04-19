import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesPreview from '@/components/sections/atelier/case-studies-preview';
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
  title: 'KI-Systeme & Transformation — Prozess zuerst, produktiv ausgeliefert',
  description:
    'KI-Systeme, die Ihr Geschäft tragen — nicht nur in der Demo glänzen. Prozess-zuerst-Audit, produktiver System-Build, Fractional KI-Lead. Enterprise-RAG, autonome Agenten, Voice, private LLM. CHF 15k Audit, CHF 40–150k System-Build. Binningen, DE / EN.',
  keywords: [
    'KI Transformation Schweiz',
    'KI Beratung Basel',
    'Souveräne KI Schweiz',
    'Private LLM Schweiz',
    'On-Prem KI',
    'Fine-tuned lokale Modelle',
    'Custom NER',
    'PII-Masking on-prem',
    'DSG KI-Compliance',
    'DSGVO KI-Compliance',
    'EU AI Act',
    'Enterprise RAG',
    'Enterprise KI',
    'KI Agenten',
    'Voice Agenten',
    'autonome Agenten',
    'private LLM Infrastruktur',
    'Prozessautomatisierung KI',
    'Fractional KI Lead',
    'KI Strategie CEO',
    'KI Strategie CTO',
    'PE Portco KI',
    'KI in regulierten Branchen',
    'produktive KI-Systeme',
    'KI Architektur',
    'Kontextschicht',
    'KI Governance',
  ],
  openGraph: {
    title:
      'KI-Systeme & Transformation — Prozess zuerst, produktiv ausgeliefert',
    description:
      'Prozess-zuerst-KI: Workflows kartieren, Kontextschicht bauen, produktive Systeme ausliefern. Enterprise-RAG, Agenten, Voice, private LLM. Audit ab CHF 15k.',
    url: 'https://mickel.tech/de/ai-transformation',
    locale: 'de_CH',
    type: 'website',
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
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={serviceSchema({
          name: 'Prozesslandkarte + KI-Opportunity-Audit',
          description:
            '2–3 Wochen. Workflows end-to-end kartieren, Automatisierungskandidaten scoren, 3–5 priorisierte Initiativen mit ROI und 90-Tage-Plan. CHF 15–25k fix.',
          url: '/de/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'KI-System-Build',
          description:
            'Produktive Auslieferung einer KI-Systemklasse (RAG, Agenten, Voice, Wissensplattform, private LLM). Von Anforderungen bis Go-Live mit Betriebs-Übergabe. CHF 40–150k.',
          url: '/de/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Fractional KI-Lead',
          description:
            '1–2 Tage/Woche. Programm-Governance, Anbieter-Auswahl, praktische Architektur, internes Capability-Building. Monatliches Retainer, quartalsweise Minimum.',
          url: '/de/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          {
            name: 'KI-Systeme & Transformation',
            url: '/de/ai-transformation',
          },
        ])}
      />

      <AtelierTransformHero locale="de" />
      <AtelierTransformProcess locale="de" />
      <AtelierTransformSystems locale="de" />
      <AtelierTransformSovereign locale="de" />
      <AtelierTransformOffers locale="de" />
      <AtelierTransformGovernance locale="de" />
      <AtelierCaseStudiesPreview locale="de" />
      <AtelierTransformFaq locale="de" />
      <AtelierCalCta locale="de" variant="transformation" />
    </AtelierShell>
  );
}
