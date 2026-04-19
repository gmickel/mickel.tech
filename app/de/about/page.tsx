import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierAbout from '@/components/sections/atelier/about-content';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Über mich — Gordon Mickel',
  description:
    'Zwanzig Jahre Software-Auslieferung in regulierten Branchen. Gründer von DocIQ (2017). Ehemaliger Head of AI & Engineering Lead bei CISTEC AG (KISIM). Operating Principal bei Growth Factors (Bregal-Portfolio). ITDR-gelisteter unabhängiger Experte. OpenAI Red Team Network Alumnus.',
  alternates: {
    canonical: 'https://mickel.tech/de/about',
    languages: {
      en: 'https://mickel.tech/about',
      de: 'https://mickel.tech/de/about',
    },
  },
};

export default function DeAboutPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Über mich', url: '/de/about' }])}
      />
      <AtelierAbout locale="de" />
    </AtelierShell>
  );
}
