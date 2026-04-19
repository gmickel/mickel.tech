import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierAbout from '@/components/sections/atelier/about-content';
import { breadcrumbSchema, JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'About — Gordon Mickel',
  description:
    'Twenty years of shipping software in regulated industries. Founder of DocIQ (2017). Former Head of AI & Engineering Lead at CISTEC AG (KISIM). Operating Principal at Growth Factors (Bregal portfolio). ITDR-listed independent expert. OpenAI Red Team Network alumnus.',
  alternates: {
    canonical: 'https://mickel.tech/about',
    languages: {
      en: 'https://mickel.tech/about',
      de: 'https://mickel.tech/de/about',
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
