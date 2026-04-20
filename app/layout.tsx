import type { Metadata, Viewport } from 'next';

import {
  hankenGrotesk,
  jetbrainsMono,
  newsreader,
  spaceGrotesk,
} from './fonts';

import './globals.css';

import { ViewTransitions } from 'next-view-transitions';
import { Providers } from '@/components/providers';

export const viewport: Viewport = {
  themeColor: '#00E5FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mickel.tech'),
  title: {
    default:
      'Gordon Mickel · Agentic PDLC, AI Systems & Independent Technical Expert',
    template: '%s | Mickel Tech',
  },
  description:
    'Independent practice for agentic PDLC, production AI systems, Parteigutachten and Werkvertrags-Gutachten. Operating Principal (AI & Tech) at Growth Factors. Binningen, Switzerland. DE / EN.',
  keywords: [
    'Agentic PDLC',
    'AI-native PDLC',
    'AI SDLC transformation',
    'enterprise AI',
    'enterprise RAG',
    'AI agents',
    'private LLM infrastructure',
    'AI consulting Switzerland',
    'AI consulting DACH',
    'Parteigutachter',
    'Werkvertrags-Gutachter',
    'IT Sachverständiger Schweiz',
    'technical expert ITDR',
    'AI due diligence',
    'AI Berater Binningen',
    'AI Berater Basel',
    'Gordon Mickel',
  ],
  authors: [{ name: 'Gordon Mickel', url: 'https://mickel.tech' }],
  creator: 'Gordon Mickel',
  openGraph: {
    title:
      'Gordon Mickel · Agentic PDLC, AI Systems & Independent Technical Expert',
    description:
      'Operating Principal (AI & Technology) at Growth Factors. Independent practice for select mandates: agentic PDLC, production AI systems, Parteigutachten and acceptance expert work. 20+ years, regulated industries, DE & EN.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mickel.tech',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gordon Mickel · Agentic PDLC, AI Systems & Independent Expert',
    description:
      'Independent practice for select mandates: agentic PDLC transformation, production AI systems, party-engaged technical opinion. Binningen, DE & EN.',
    creator: '@gmickel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mickel.tech',
    languages: {
      en: 'https://mickel.tech',
      de: 'https://mickel.tech/de',
      'x-default': 'https://mickel.tech',
    },
    types: {
      'application/rss+xml': 'https://mickel.tech/rss',
    },
  },
  other: {
    'link:alternate:rss':
      '<link rel="alternate" type="application/rss+xml" title="Mickel Tech · System Log" href="https://mickel.tech/rss" />',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${newsreader.variable} ${hankenGrotesk.variable} antialiased`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
