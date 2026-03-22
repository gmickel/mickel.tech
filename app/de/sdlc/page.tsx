import type { Metadata } from 'next';

import Shell from '@/components/layout/shell';
import DeAgenticSdlc from '@/components/sections/de/agentic-sdlc';
import Contact from '@/components/sections/contact/index';
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'KI-Native SDLC-Transformation',
  description:
    'Von Legacy-Prozessen zu autonomen Code-Fabriken. Zwei-Phasen-Rollout, L0-L4 Reifegradmodell, eval-gesteuertes Gating. 10+ Teams, 500+ Ingenieure.',
  keywords: [
    'KI SDLC',
    'agentisches SDLC',
    'KI-native Softwareentwicklung',
    'SDLC Transformation',
    'autonome Code-Fabrik',
    'KI Coding Agenten',
    'Entwicklerproduktivität KI',
  ],
  alternates: {
    canonical: 'https://mickel.tech/de/sdlc',
    languages: { en: '/sdlc', de: '/de/sdlc' },
  },
};

export default function DeSdlcPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: 'KI-Native SDLC-Transformation',
          description:
            'Komplette Methodik zur Transformation der Softwareentwicklung mit KI-Agenten.',
          url: '/de/sdlc',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'KI-Native SDLC', url: '/de/sdlc' }])}
      />
      <DeAgenticSdlc />
      <Contact />
    </Shell>
  );
}
