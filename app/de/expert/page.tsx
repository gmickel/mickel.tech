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
  title: 'Unabhängige Begutachtung -- Parteigutachten, Werkvertrag, KI-DD',
  description:
    'ITDR-gelisteter unabhängiger technischer Experte. Parteigutachten für Anwaltskanzleien und Schiedsverfahren, Werkvertrags-Gutachten als vertraglich benannter Abnahmegutachter, KI- und Tech-Due-Diligence für Investoren und Verwaltungsräte. 20+ Jahre Engineering. DE / EN. Binningen, Schweiz.',
  keywords: [
    'Parteigutachter',
    'Parteigutachten Schweiz',
    'Werkvertrags-Gutachter',
    'Abnahmegutachter',
    'IT Sachverständiger Schweiz',
    'IT Gutachter Schweiz',
    'ITDR Sachverständiger',
    'Gutachten Software',
    'Gutachten IT',
    'KI Due Diligence',
    'Tech Due Diligence',
    'Schiedsgutachten IT',
    'Softwarestreit Gutachter',
    'Forensische Code-Analyse',
    'unabhängige Projektprüfung',
  ],
  openGraph: {
    title: 'Unabhängige Begutachtung -- Parteigutachten, Werkvertrag, KI-DD',
    description:
      'ITDR-gelisteter Experte für Anwaltskanzleien, Gerichte, Schiedsrichter und Verwaltungsräte. Parteigutachten, Werkvertrags-Gutachten und KI-/Tech-Due-Diligence. 20+ Jahre in regulierten Branchen.',
    url: 'https://mickel.tech/de/expert',
    locale: 'de_CH',
    type: 'website',
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
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={serviceSchema({
          name: 'Parteigutachten',
          description:
            'Parteigutachter im Auftrag der Anwaltschaft für Zivilverfahren, handelsgerichtliche Verfahren und internationale Schiedsgerichtsbarkeit. Forensische technische Analyse, strukturiertes Gutachten, mündliche Verhandlungsbereitschaft.',
          url: '/de/expert#parteigutachten',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Werkvertrags-Gutachten',
          description:
            'Vertraglich benannter unabhängiger Abnahmegutachter (Werkvertrags-Gutachter) für Software-Werkverträge und Beschaffung. Quasi-schiedsrichterliche Funktion mit Vorab-Prüfschema und strukturierter Abnahmeprüfung.',
          url: '/de/expert#werkvertrags-gutachten',
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: 'KI- und Tech-Due-Diligence',
          description:
            'Unabhängige KI- und Tech-Due-Diligence für Investoren, Verwaltungsräte und M&A. Reifegradbewertung, Verifikationsmatrix gegen Anbieterangaben, IC-fähige Value-Creation-These oder Risikoregister.',
          url: '/de/expert#ai-tech-dd',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Unabhängige Begutachtung', url: '/de/expert' },
        ])}
      />

      <AtelierExpertHero locale="de" />
      <AtelierExpertRoles locale="de" />
      <AtelierExpertMethod locale="de" />
      <AtelierExpertDomains locale="de" />
      <AtelierCaseStudiesPreview locale="de" />
      <AtelierExpertFaq locale="de" />
      <AtelierExpertIntake locale="de" />
    </AtelierShell>
  );
}
