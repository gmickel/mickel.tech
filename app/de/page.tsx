import type { Metadata } from 'next';
import { Suspense } from 'react';

import Shell from '@/components/layout/shell';
import Chronology from '@/components/sections/chronology';
import Contact from '@/components/sections/contact/index';
import DeHeroLoader from '@/components/sections/de/hero-loader';
import DeHowIWork from '@/components/sections/de/how-i-work';
import DePillars from '@/components/sections/de/pillars';
import Quote from '@/components/sections/quote';
import SystemLogLatest from '@/components/sections/system-log-latest';
import { JsonLd, personSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title:
    'Gordon Mickel – KI-Systeme, SDLC-Transformation & Technische Expertise',
  description:
    'Gordon Mickel entwickelt KI-Systeme, die wirklich funktionieren. Basel, Schweiz. KI-native SDLC-Transformation (10+ Teams, 500+ Ingenieure), Enterprise-KI und agentische Systeme (RAG, Private LLM, Prozessautomatisierung) sowie ITDR-gelisteter technischer Sachverständiger für ICT- und KI-Streitigkeiten.',
  keywords: [
    'KI Beratung Schweiz',
    'KI Beratung Basel',
    'KI SDLC Transformation',
    'Enterprise KI',
    'Enterprise RAG',
    'KI Agenten',
    'Private LLM Infrastruktur',
    'IT Sachverständiger',
    'ITDR Sachverständiger',
    'Gutachten IT',
    'Gutachten Software',
    'Prozessautomatisierung KI',
    'Gordon Mickel',
  ],
  openGraph: {
    title:
      'Gordon Mickel – KI-Systeme, SDLC-Transformation & Technische Expertise',
    description:
      'KI-native SDLC-Transformation, Enterprise-KI-Systeme und ITDR-gelisteter technischer Sachverständiger. Basel, Schweiz.',
    locale: 'de_CH',
  },
  alternates: {
    canonical: 'https://mickel.tech/de',
    languages: { en: 'https://mickel.tech', de: 'https://mickel.tech/de' },
  },
};

export default function DeHomePage() {
  return (
    <Shell>
      <JsonLd data={personSchema()} />
      <Suspense fallback={null}>
        <DeHeroLoader />
      </Suspense>
      <Suspense fallback={null}>
        <DePillars />
      </Suspense>
      <Suspense fallback={null}>
        <DeHowIWork />
      </Suspense>
      <Suspense fallback={null}>
        <Quote />
      </Suspense>
      <Suspense fallback={null}>
        <SystemLogLatest />
      </Suspense>
      <Suspense fallback={null}>
        <Chronology />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </Shell>
  );
}
