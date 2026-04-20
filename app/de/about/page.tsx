import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierAbout from '@/components/sections/atelier/about-content';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Über mich · Gordon Mickel',
  description:
    'Zwanzig Jahre Software-Auslieferung in regulierten Branchen. Gründer von DocIQ (2017). Operating Principal bei Growth Factors. ITDR-gelisteter Experte.',
  openGraph: {
    title: 'Über mich · Gordon Mickel',
    description:
      'Zwanzig Jahre Software in regulierten Branchen. Gründer von DocIQ. Operating Principal bei Growth Factors. ITDR-gelisteter Experte.',
    url: 'https://mickel.tech/de/about',
    siteName: 'Mickel Tech',
    locale: 'de_CH',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über mich · Gordon Mickel',
    description:
      'Zwanzig Jahre Software in regulierten Branchen. Gründer von DocIQ. Operating Principal bei Growth Factors.',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/about',
    languages: {
      en: 'https://mickel.tech/about',
      de: 'https://mickel.tech/de/about',
      'x-default': 'https://mickel.tech/about',
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
