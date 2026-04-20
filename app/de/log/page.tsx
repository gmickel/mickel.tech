import type { Metadata } from 'next';

// biome-ignore lint/performance/noBarrelFile: DE shadow route reuses EN page component.
export { default } from '@/app/log/page';

export const metadata: Metadata = {
  title: 'Notizen',
  description:
    'Notizen aus der Werkstatt zu agentischer PDLC, Plattformen und KI-Systemen. Kurz, präzise, aus echten Mandaten.',
  openGraph: {
    title: 'Notizen · Mickel Tech',
    description:
      'Notizen aus der Werkstatt zu agentischer PDLC, Plattformen und KI-Systemen.',
    type: 'website',
    url: 'https://mickel.tech/de/log',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/log',
    languages: {
      en: 'https://mickel.tech/log',
      de: 'https://mickel.tech/de/log',
    },
    types: {
      'application/rss+xml': 'https://mickel.tech/rss',
    },
  },
};
