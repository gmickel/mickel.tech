import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesIndex from '@/components/sections/atelier/case-studies-index';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Fallstudien -- Auswahl an Mandaten',
  description:
    'Ausgewählte Mandate aus agentischer PDLC, unabhängiger Begutachtung und KI-Systemen. Anonymisiert, wo Vertraulichkeit gilt; namentlich genannt nur dort, wo es meine eigene Arbeit ist. Echte Ergebnisse, echte Zahlen.',
  keywords: [
    'Fallstudien',
    'KI-Fallstudien',
    'PE Portco KI Fallstudien',
    'agentische PDLC Beispiele',
    'Parteigutachten Beispiele',
    'Werkvertrags-Gutachten Beispiele',
    'Tech-DD Fallstudien',
    'KI-Transformation Beispiele',
    'Gordon Mickel Mandate',
  ],
  openGraph: {
    title: 'Fallstudien -- Auswahl an Mandaten | Mickel Tech',
    description:
      'Ausgewählte Mandate aus agentischer PDLC, unabhängiger Begutachtung und KI-Systemen. Echte Ergebnisse, echte Zahlen.',
    url: 'https://mickel.tech/de/case-studies',
    locale: 'de_CH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/case-studies',
    languages: {
      en: 'https://mickel.tech/case-studies',
      de: 'https://mickel.tech/de/case-studies',
    },
  },
};

export default function DeCaseStudiesPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Fallstudien', url: '/de/case-studies' },
        ])}
      />

      <AtelierCaseStudiesIndex locale="de" />
      <AtelierCalCta locale="de" variant="transformation" />
    </AtelierShell>
  );
}
