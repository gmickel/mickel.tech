import type { Metadata } from 'next';
import { Suspense } from 'react';

import AtelierShell from '@/components/layout/atelier-shell';
import AtelierAudienceRouter from '@/components/sections/atelier/audience-router';
import AtelierCaseStudiesPreview from '@/components/sections/atelier/case-studies-preview';
import AtelierContact from '@/components/sections/atelier/contact';
import AtelierHero from '@/components/sections/atelier/hero';
import AtelierHowIWork from '@/components/sections/atelier/how-i-work';
import AtelierSystemLogLatest from '@/components/sections/atelier/system-log-latest';
import AtelierTrustStrip from '@/components/sections/atelier/trust-strip';
import { JsonLd, personSchema, professionalServiceSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title:
    'Gordon Mickel — Agentische PDLC, KI-Systeme & Unabhängige Begutachtung',
  description:
    'Ich entwerfe KI-Systeme, die wirklich funktionieren. Operating Principal (KI & Technologie) bei Growth Factors. Unabhängige Praxis für ausgewählte Mandate: agentische PDLC, produktive KI-Systeme, Parteigutachten und Werkvertrags-Gutachten. Binningen, Schweiz — DE & EN.',
  keywords: [
    'Agentische PDLC',
    'KI-native PDLC',
    'KI Beratung Schweiz',
    'KI Beratung Basel',
    'Enterprise KI',
    'Enterprise RAG',
    'KI Agenten',
    'Private LLM Infrastruktur',
    'Parteigutachter',
    'Werkvertrags-Gutachter',
    'IT Sachverständiger Schweiz',
    'ITDR Sachverständiger',
    'Gutachten Software',
    'KI Due Diligence',
    'Gordon Mickel',
  ],
  openGraph: {
    title:
      'Gordon Mickel — Agentische PDLC, KI-Systeme & Unabhängige Begutachtung',
    description:
      'Operating Principal (KI & Technologie) bei Growth Factors. Unabhängige Praxis für ausgewählte Mandate: agentische PDLC, produktive KI-Systeme, Parteigutachten und Werkvertrags-Gutachten.',
    locale: 'de_CH',
  },
  alternates: {
    canonical: 'https://mickel.tech/de',
    languages: { en: 'https://mickel.tech', de: 'https://mickel.tech/de' },
  },
};

export default function DeHomePage() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd data={professionalServiceSchema()} />

      <AtelierHero locale="de" />
      <AtelierTrustStrip locale="de" />
      <AtelierAudienceRouter locale="de" />
      <AtelierCaseStudiesPreview locale="de" />
      <AtelierHowIWork locale="de" />
      <Suspense fallback={null}>
        <AtelierSystemLogLatest locale="de" />
      </Suspense>
      <AtelierContact locale="de" />
    </AtelierShell>
  );
}
