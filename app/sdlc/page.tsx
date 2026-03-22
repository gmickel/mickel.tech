import type { Metadata } from 'next';
import Shell from '@/components/layout/shell';
import AgenticSdlc from '@/components/sections/agentic-sdlc';
import Contact from '@/components/sections/contact/index';
import { breadcrumbSchema, JsonLd, serviceSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'AI-Native SDLC Transformation',
  description:
    'From legacy processes to autonomous code factories. Two-stage rollout methodology, L0-L4 maturity model, eval-driven gating and everything-as-code. Rolled out to 10+ teams, 500+ engineers across 7+ industries.',
  keywords: [
    'AI SDLC',
    'agentic SDLC',
    'AI-native software development',
    'SDLC transformation',
    'autonomous code factory',
    'eval-driven gating',
    'AI coding agents',
    'software delivery acceleration',
    'developer productivity AI',
  ],
  openGraph: {
    title: 'AI-Native SDLC Transformation | Gordon Mickel',
    description:
      'From legacy processes to autonomous code factories. Two-stage rollout, L0-L4 maturity model, 500+ engineers enabled.',
    url: 'https://mickel.tech/sdlc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mickel.tech/sdlc',
    languages: { en: 'https://mickel.tech/sdlc', de: 'https://mickel.tech/de/sdlc' },
  },
};

export default function SdlcPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: 'AI-Native SDLC Transformation',
          description:
            'Complete methodology for transforming software delivery with AI agents. Two-stage rollout from foundation to autonomous code factories. L0-L4 maturity model.',
          url: '/sdlc',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'AI-Native SDLC', url: '/sdlc' }])}
      />
      <AgenticSdlc />
      <Contact />
    </Shell>
  );
}
