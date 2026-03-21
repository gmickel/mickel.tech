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
    default: 'Mickel Tech – Agentic SDLC, Platforms & AI Agents',
    template: '%s | Mickel Tech',
  },
  description:
    'Gordon Mickel, agentic SDLC & platform architect. Operating Principal (AI & Tech) at GrowthFactors / BU Bregal and ITDR-listed expert for ICT & AI. I roll out agentic software engineering methodology, platforms and AI agents, and act as fractional CTO for high-stakes AI & software decisions in regulated B2B environments.',
  keywords: [
    'Agentic SDLC',
    'AI Agents',
    'agentic software development lifecycle',
    'AI platforms',
    'operational agents',
    'agentic systems',
    'fractional CTO',
    'technical expert ITDR',
    'AI due diligence',
    'AI governance',
    'AI architecture',
    'Gordon Mickel',
  ],
  authors: [{ name: 'Gordon Mickel', url: 'https://mickel.tech' }],
  creator: 'Gordon Mickel',
  openGraph: {
    title: 'Mickel Tech – Agentic SDLC, Platforms & AI Agents',
    description:
      'Agentic SDLC & platform architect, Operating Principal (AI & Tech) at GrowthFactors / BU Bregal and ITDR-listed expert. Helping boards, investors and legal teams move from AI slideware to working, defensible systems with agentic SDLC methodology, platforms and AI agents.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mickel.tech',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mickel Tech – Agentic SDLC, Platforms & AI Agents',
    description:
      'Agentic SDLC & platform architect, Operating Principal (AI & Tech) at GrowthFactors / BU Bregal and ITDR-listed expert. Agentic SDLC methodology, platforms, AI agents and fractional CTO advisory for high-stakes AI & software decisions.',
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
