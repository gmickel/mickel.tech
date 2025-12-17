import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Apps — Things I Built',
  description:
    'Software I designed and built. From pioneering legal tech platforms to developer productivity tools.',
  openGraph: {
    title: 'Apps — Things I Built | Mickel Tech',
    description:
      'Software I designed and built. From pioneering legal tech platforms to developer productivity tools.',
    type: 'website',
    url: 'https://mickel.tech/apps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apps — Things I Built | Mickel Tech',
    description:
      'Software I designed and built. From pioneering legal tech platforms to developer productivity tools.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps',
  },
};

const apps = [
  {
    id: 'dociq-sphere',
    name: 'DocIQ Sphere',
    tagline: 'Privacy-first legal intelligence',
    description:
      'Legal document intelligence platform. AI-powered contract analysis with partner law firm playbooks, complete audit trails, and document fidelity.',
    tags: ['AI', 'Legal Tech', 'Enterprise'],
    href: '/apps/dociq-sphere',
    image: '/sphere/sphere-research.png',
    status: 'December 2025',
    statusDate: 'december',
  },
  {
    id: 'dociq-shield',
    name: 'DocIQ Shield',
    tagline: 'Zero-persistence anonymisation',
    description:
      'Court document anonymisation with Swiss court standard compliance. No data stored, ever. 10 seconds instead of 2 hours.',
    tags: ['AI', 'Privacy', 'Swiss Courts'],
    href: '/apps/dociq-shield',
    image: '/shield/shield.png',
    status: 'January 2026',
    statusDate: 'january',
  },
  {
    id: 'outlookctl',
    name: 'outlookctl',
    tagline: 'Control Outlook from CLI',
    description:
      'Local CLI bridge for Outlook Classic automation via COM. AI-assisted email and calendar management with Claude Code. No API keys, no OAuth.',
    tags: ['Windows', 'Python', 'Open Source'],
    href: '/apps/outlookctl',
    image: '/outlookctl/outlookctl-hero.png',
    status: 'Released',
    statusDate: null,
  },
  {
    id: 'smarttrim',
    name: 'SmartTrim',
    tagline: 'Fix AI clipboard chaos',
    description:
      'macOS menu bar utility that automatically fixes formatting issues when you copy-paste from AI coding assistants.',
    tags: ['macOS', 'Swift', 'Open Source'],
    href: '/apps/smarttrim',
    image: '/smarttrim-dark.png',
    status: 'Released',
    statusDate: null,
  },
  {
    id: 'dociq',
    name: 'DocIQ 1.0',
    tagline: 'Pioneering document intelligence',
    description:
      'One of the first legal tech platforms to use NLP and machine learning for document lifecycle management. Visual no-code template builder, e-signatures, real-time collaboration.',
    tags: ['Legal Tech', 'NLP', '2017-2020'],
    href: '/apps/dociq',
    image: '/dociq/dociq-template-editor.png',
    status: 'In Production',
    statusDate: null,
  },
] as const;

export default function AppsPage() {
  return (
    <Shell>
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,229,255,0.08),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(158,243,110,0.06),transparent_25%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-primary/60 bg-primary/10 text-primary"
              variant="outline"
            >
              THINGS I BUILT
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              My Work
            </Badge>
          </div>

          <h1 className="mt-6 font-bold text-4xl text-white leading-tight md:text-5xl">
            Things I Built
          </h1>
          <Link
            className="glow-link mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase"
            href="/"
          >
            ← Back to main site
          </Link>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Software I designed and built—from pioneering legal tech platforms
            to developer productivity tools. This is just a selection; see{' '}
            <a
              className="glow-link"
              href="https://github.com/gmickel"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/gmickel
            </a>{' '}
            for more open-source work.
          </p>
        </section>

        {/* Apps Grid */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {apps.map((app) => (
              <AppCard app={app} key={app.id} />
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}

function AppCard({ app }: { app: (typeof apps)[number] }) {
  const isReleased = app.status === 'Released';

  const cardContent = (
    <Card className="group relative overflow-hidden border-white/10 bg-card/70 transition-all duration-300 hover:border-primary/50 hover:bg-card/90">
      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-10">
        <Badge
          className={
            isReleased
              ? 'border-success/40 bg-success/10 text-success'
              : 'border-alert/40 bg-alert/10 text-alert'
          }
          variant="outline"
        >
          {app.status}
        </Badge>
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {/* App icon/image */}
          {app.image ? (
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/50">
              <Image
                alt={`${app.name} icon`}
                className="object-cover object-left-top"
                fill
                sizes="64px"
                src={app.image}
              />
            </div>
          ) : (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-secondary/50">
              <span className="font-mono text-2xl text-muted-foreground">
                ?
              </span>
            </div>
          )}
          <div className="min-w-0">
            <CardTitle className="text-2xl text-white">{app.name}</CardTitle>
            <p className="mt-1 font-mono text-primary text-sm">{app.tagline}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <Badge
              className="border-white/10 bg-white/5 text-white/70"
              key={tag}
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="pt-2">
          <span className="glow-link font-mono text-[11px] uppercase">
            View Details →
          </span>
        </div>
      </CardContent>

      {/* Hover effect line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
      />
    </Card>
  );

  return <Link href={app.href}>{cardContent}</Link>;
}
