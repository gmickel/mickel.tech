import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierCalCta from '@/components/sections/atelier/cal-cta';
import AtelierCaseStudiesIndex from '@/components/sections/atelier/case-studies-index';
import { CASE_STUDIES } from '@/lib/case-studies';
import {
  breadcrumbSchema,
  itemListSchema,
  JsonLd,
  personSchema,
} from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Fallstudien -- Auswahl an Mandaten',
  description:
    'Ausgewählte DACH-Mandate aus agentischer PDLC, unabhängiger Begutachtung und KI-Systemen. PE-Portcos und regulierte Branchen. Echte Ergebnisse, echte Zahlen.',
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
    title: 'Fallstudien · Mickel Tech',
    description:
      'Ausgewählte DACH-Mandate aus agentischer PDLC, unabhängiger Begutachtung und KI-Systemen.',
    url: 'https://mickel.tech/de/case-studies',
    siteName: 'Mickel Tech',
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallstudien · Mickel Tech',
    description:
      'Ausgewählte DACH-Mandate aus agentischer PDLC, unabhängiger Begutachtung und KI-Systemen.',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/case-studies',
    languages: {
      en: 'https://mickel.tech/case-studies',
      de: 'https://mickel.tech/de/case-studies',
      'x-default': 'https://mickel.tech/case-studies',
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
      <JsonLd
        data={itemListSchema({
          name: 'Mickel Tech · Fallstudien',
          url: '/de/case-studies',
          items: CASE_STUDIES.map((s) => ({
            name: s.clientDE,
            url: `/de/case-studies/${s.id}`,
            description: s.outcomeDE,
          })),
        })}
      />

      <AtelierCaseStudiesIndex locale="de" />
      <AtelierCalCta locale="de" variant="transformation" />
    </AtelierShell>
  );
}
