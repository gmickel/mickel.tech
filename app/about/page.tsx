import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierAbout from '@/components/sections/atelier/about-content';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'About · Gordon Mickel',
  description:
    'Twenty years shipping software in regulated industries. Founder of DocIQ (2017). Former Head of AI at CISTEC (KISIM). Operating Principal at Growth Factors.',
  openGraph: {
    title: 'About · Gordon Mickel',
    description:
      'Twenty years shipping software in regulated industries. Founder of DocIQ. Operating Principal at Growth Factors. ITDR-listed expert.',
    url: 'https://mickel.tech/about',
    siteName: 'Mickel Tech',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About · Gordon Mickel',
    description:
      'Twenty years shipping software in regulated industries. Founder of DocIQ. Operating Principal at Growth Factors.',
  },
  alternates: {
    canonical: 'https://mickel.tech/about',
    languages: {
      en: 'https://mickel.tech/about',
      de: 'https://mickel.tech/de/about',
      'x-default': 'https://mickel.tech/about',
    },
  },
};

export default function AboutPage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'About', url: '/about' }])} />
      <AtelierAbout locale="en" />
    </AtelierShell>
  );
}
