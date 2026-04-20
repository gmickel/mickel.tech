import type { Metadata } from 'next';

// biome-ignore lint/performance/noBarrelFile: DE shadow route reuses EN page component.
export { default } from '@/app/apps/page';

export const metadata: Metadata = {
  title: 'Apps -- Was ich gebaut habe',
  description:
    'Software, die ich entworfen und gebaut habe. Legal-Tech-Plattformen, Agenten-Orchestrierung, Entwicklerwerkzeuge. Ein lebendiger Werkzeugkatalog.',
  openGraph: {
    title: 'Apps · Mickel Tech',
    description:
      'Software, die ich entworfen und gebaut habe. Legal-Tech-Plattformen, Agenten-Orchestrierung, Entwicklerwerkzeuge.',
    type: 'website',
    url: 'https://mickel.tech/de/apps',
  },
  alternates: {
    canonical: 'https://mickel.tech/de/apps',
    languages: {
      en: 'https://mickel.tech/apps',
      de: 'https://mickel.tech/de/apps',
    },
  },
};
