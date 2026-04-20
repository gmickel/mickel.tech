import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesAreaPreview from '@/components/sections/atelier/case-studies-area-preview';
import LeadMagnetCard from '@/components/sections/atelier/lead-magnet';
import AtelierTransformFaq from '@/components/sections/atelier/transform-faq';
import AtelierTransformGovernance from '@/components/sections/atelier/transform-governance';
import AtelierTransformHero from '@/components/sections/atelier/transform-hero';
import AtelierTransformOffers from '@/components/sections/atelier/transform-offers';
import AtelierTransformPainGain from '@/components/sections/atelier/transform-pain-gain';
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
  title:
    'KI-Systeme & Transformation -- Prozess zuerst, produktiv ausgeliefert',
  description:
    'KI-Systeme, die Ihr Geschäft tragen -- nicht nur in der Demo glänzen. Prozess-zuerst-Audit, produktiver System-Build, Fractional KI-Lead. Agenten, die im operativen Alltag bestehen, Wissensplattformen, Voice, souveräne und private LLM-Infrastruktur. Audit ab CHF 15k, System-Build CHF 40-150k. Binningen, DE / EN.',
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
      'KI-Systeme & Transformation -- Prozess zuerst, produktiv ausgeliefert',
    description:
      'Prozess-zuerst-KI: Workflows kartieren, Kontextschicht bauen, produktive Systeme ausliefern. Agenten, die im operativen Alltag bestehen, Wissensplattformen, Voice, souveräne und private LLM. Audit ab CHF 15k.',
    url: 'https://mickel.tech/de/ai-transformation',
    locale: 'de_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/ai-transformation',
    languages: {
      en: 'https://mickel.tech/ai-transformation',
      de: 'https://mickel.tech/de/ai-transformation',
      'x-default': 'https://mickel.tech/ai-transformation',
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
            '2-3 Wochen. Workflows end-to-end kartieren, Automatisierungskandidaten bewerten, 3-5 priorisierte Initiativen mit ROI und 90-Tage-Plan. CHF 15-25k fix.',
          url: '/de/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'KI-System-Build',
          description:
            'Produktive Auslieferung einer KI-Systemklasse (Operations-Agenten, Wissensplattformen, Voice, souveräne LLM). Von den Anforderungen bis zum Go-Live, mit Betriebsübergabe. CHF 40-150k.',
          url: '/de/ai-transformation#offers',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Fractional KI-Lead',
          description:
            '1-2 Tage/Woche. Programm-Governance, Anbieterauswahl, praktische Architektur, interner Capability-Aufbau. Monatlicher Retainer, mindestens ein Quartal.',
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
      <AtelierTransformPainGain locale="de" />
      <AtelierTransformProcess locale="de" />
      <AtelierTransformSystems locale="de" />
      <AtelierTransformSovereign locale="de" />
      <AtelierTransformOffers locale="de" />
      <AtelierTransformGovernance locale="de" />
      <AtelierCaseStudiesAreaPreview
        area="systems"
        locale="de"
        sectionNumber="07"
      />
      <LeadMagnetCard
        locale="de"
        sectionNumber="08"
        slug="ai-engagement-scoping"
      />
      <AtelierTransformFaq locale="de" />
      <AtelierCalCta locale="de" variant="transformation" />
    </AtelierShell>
  );
}
