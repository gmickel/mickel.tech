import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCaseStudiesPreview from '@/components/sections/atelier/case-studies-preview';
import AtelierExpertDomains from '@/components/sections/atelier/expert-domains';
import AtelierExpertFaq from '@/components/sections/atelier/expert-faq';
import AtelierExpertHero from '@/components/sections/atelier/expert-hero';
import AtelierExpertIntake from '@/components/sections/atelier/expert-intake';
import AtelierExpertMethod from '@/components/sections/atelier/expert-method';
import AtelierExpertRoles from '@/components/sections/atelier/expert-roles';
import {
  breadcrumbSchema,
  JsonLd,
  personSchema,
  serviceSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title:
    'Independent Technical Expert — Parteigutachten, Acceptance, AI/Tech DD',
  description:
    'ITDR-listed independent technical expert. Parteigutachten for counsel and arbitration, Werkvertrags-Gutachten as contractually-named acceptance expert, AI and technology due diligence for investors and boards. 20+ years engineering. DE / EN. Basel, Switzerland.',
  keywords: [
    'Parteigutachter',
    'Parteigutachten',
    'Werkvertrags-Gutachter',
    'Abnahmegutachter',
    'IT Sachverständiger Schweiz',
    'ITDR Sachverständiger',
    'technical expert witness',
    'IT expert witness Switzerland',
    'Gutachten Software',
    'Gutachten IT',
    'AI due diligence',
    'technology due diligence',
    'software dispute expert',
    'forensic code analysis',
    'IT arbitration expert',
    'independent project assessment',
    'Schiedsgutachten IT',
    'IT Gutachter Schweiz',
  ],
  openGraph: {
    title:
      'Independent Technical Expert — Parteigutachten, Acceptance, AI/Tech DD',
    description:
      'ITDR-listed expert for counsel, courts, arbitrators and boards. Parteigutachten, Werkvertrags-Gutachten and AI/tech due diligence. 20+ years across regulated industries.',
    url: 'https://mickel.tech/expert',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/expert',
    languages: {
      en: 'https://mickel.tech/expert',
      de: 'https://mickel.tech/de/expert',
    },
  },
};

export default function ExpertPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={serviceSchema({
          name: 'Parteigutachten — party expert opinion',
          description:
            'Party expert opinion (Parteigutachter) instructed by counsel for civil litigation, commercial court matters and international arbitration. Forensic technical analysis, structured Gutachten, oral hearing readiness.',
          url: '/expert#parteigutachten',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Werkvertrags-Gutachten — independent acceptance expert',
          description:
            'Contractually-named independent acceptance expert (Werkvertrags-Gutachter) for software procurement and works contracts. Quasi-arbitral function with pre-engagement Prüfschema and structured Abnahmeprüfung.',
          url: '/expert#werkvertrags-gutachten',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'AI / technology due diligence',
          description:
            'Independent AI and technology due diligence for investors, boards and M&A. Maturity scoring, verification matrix against vendor claims, IC-ready value creation thesis or risk register.',
          url: '/expert#ai-tech-dd',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Independent expert', url: '/expert' },
        ])}
      />

      <AtelierExpertHero locale="en" />
      <AtelierExpertRoles locale="en" />
      <AtelierExpertMethod locale="en" />
      <AtelierExpertDomains locale="en" />
      <AtelierCaseStudiesPreview locale="en" />
      <AtelierExpertFaq locale="en" />
      <AtelierExpertIntake locale="en" />
    </AtelierShell>
  );
}
