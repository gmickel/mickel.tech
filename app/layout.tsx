import type { Metadata, Viewport } from 'next';

import { jetbrainsMono, spaceGrotesk } from './fonts';

import './globals.css';

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
      'Gordon Mickel – AI Systems, SDLC Transformation & Technical Expertise',
    template: '%s | Mickel Tech',
  },
  description:
    'Gordon Mickel designs AI systems that actually work. Based in Basel, Switzerland. AI-native SDLC transformation (10+ teams, 500+ engineers), enterprise AI and agentic systems (RAG, private LLM, process automation), and ITDR-listed technical expert for ICT and AI disputes. Working in German and English across Switzerland, Germany and Europe.',
  keywords: [
    'AI SDLC transformation',
    'agentic SDLC',
    'enterprise AI',
    'enterprise RAG',
    'AI agents',
    'private LLM infrastructure',
    'AI consulting Switzerland',
    'AI consulting DACH',
    'technical expert ITDR',
    'AI due diligence',
    'Gutachten IT',
    'IT Sachverständiger Schweiz',
    'process automation AI',
    'AI Berater Basel',
    'Gordon Mickel',
  ],
  authors: [{ name: 'Gordon Mickel', url: 'https://mickel.tech' }],
  creator: 'Gordon Mickel',
  openGraph: {
    title:
      'Gordon Mickel – AI Systems, SDLC Transformation & Technical Expertise',
    description:
      'AI-native SDLC transformation, enterprise AI systems (RAG, agents, private LLM) and ITDR-listed technical expert. Production AI in regulated industries. 10+ teams, 500+ engineers, 20+ years.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mickel.tech',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gordon Mickel – AI Systems & Technical Expertise',
    description:
      'AI-native SDLC transformation, enterprise AI systems and ITDR-listed technical expert. Production AI in regulated industries.',
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
    },
    types: {
      'application/rss+xml': 'https://mickel.tech/rss',
    },
  },
  other: {
    'link:alternate:rss':
      '<link rel="alternate" type="application/rss+xml" title="Mickel Tech — System Log" href="https://mickel.tech/rss" />',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
