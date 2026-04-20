'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import type React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import AtelierLocaleSwitcher from './atelier-locale-switcher';

interface AtelierShellProps {
  children: React.ReactNode;
}

const serviceLinksEN = [
  { label: 'Agentic PDLC', href: '/sdlc' },
  { label: 'Independent Expert', href: '/expert' },
  { label: 'AI Transformation', href: '/ai-transformation' },
] as const;

const serviceLinksDE = [
  { label: 'Agentische PDLC', href: '/de/sdlc' },
  { label: 'Unabhängiger Experte', href: '/de/expert' },
  { label: 'KI-Transformation', href: '/de/ai-transformation' },
] as const;

const utilLinksEN = [
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Writing', href: '/log' },
  { label: 'Apps', href: '/apps' },
  { label: 'Contact', href: '/#contact' },
] as const;

const utilLinksDE = [
  { label: 'Fallstudien', href: '/de/case-studies' },
  { label: 'Schriften', href: '/de/log' },
  { label: 'Apps', href: '/apps' },
  { label: 'Kontakt', href: '/de/#contact' },
] as const;

export default function AtelierShell({ children }: AtelierShellProps) {
  const pathname = usePathname();
  const isDE = pathname.startsWith('/de');
  const serviceLinks = isDE ? serviceLinksDE : serviceLinksEN;
  const utilLinks = isDE ? utilLinksDE : utilLinksEN;
  const homeHref = isDE ? '/de' : '/';

  return (
    <div className="atelier-surface relative min-h-screen overflow-x-hidden selection:bg-[hsl(var(--rust))]/25">
      {/* Header — editorial masthead */}
      <header className="fixed top-0 right-0 left-0 z-40 border-[hsl(var(--paper))]/10 border-b bg-[hsl(var(--graphite))]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-6 md:px-10">
          {/* Brand */}
          <a
            aria-label="Mickel Tech, home"
            className="group flex items-baseline gap-3"
            href={homeHref}
          >
            <span className="atelier-display font-medium text-[1.1rem] text-[hsl(var(--paper))] tracking-tight">
              Mickel<span className="text-[hsl(var(--rust))]">.</span>tech
            </span>
            <span className="atelier-eyebrow hidden text-[hsl(var(--paper))]/45 sm:inline">
              Independent practice
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            <ul className="flex items-center gap-7">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="font-medium text-[0.84rem] text-[hsl(var(--paper))]/85 transition-colors hover:text-[hsl(var(--rust))]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <span
              aria-hidden="true"
              className="h-3 w-px bg-[hsl(var(--paper))]/15"
            />

            <ul className="flex items-center gap-5">
              {utilLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-[0.78rem] text-[hsl(var(--paper))]/55 transition-colors hover:text-[hsl(var(--paper))]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <span
              aria-hidden="true"
              className="h-3 w-px bg-[hsl(var(--paper))]/15"
            />

            <AtelierLocaleSwitcher />
          </nav>

          {/* Mobile menu */}
          <div className="flex items-center gap-4 lg:hidden">
            <AtelierLocaleSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label={isDE ? 'Menü öffnen' : 'Open menu'}
                  className="text-[hsl(var(--paper))]"
                  type="button"
                >
                  <Menu aria-hidden="true" size={20} />
                </button>
              </SheetTrigger>
              <SheetContent
                className="border-[hsl(var(--paper))]/10 bg-[hsl(var(--graphite))]/95 text-[hsl(var(--paper))] backdrop-blur-md"
                side="right"
              >
                <SheetTitle className="sr-only">
                  {isDE ? 'Navigation' : 'Navigation menu'}
                </SheetTitle>
                <nav
                  aria-label="Mobile navigation"
                  className="mt-10 flex flex-col gap-10"
                >
                  <div className="space-y-5">
                    <span className="atelier-eyebrow block text-[hsl(var(--paper))]/45">
                      {isDE ? 'Praxis' : 'Practice'}
                    </span>
                    <ul className="space-y-4">
                      {serviceLinks.map((item) => (
                        <li key={item.label}>
                          <SheetClose asChild>
                            <a
                              className="atelier-display block text-2xl text-[hsl(var(--paper))] transition-colors hover:text-[hsl(var(--rust))]"
                              href={item.href}
                            >
                              {item.label}
                            </a>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 border-[hsl(var(--paper))]/10 border-t pt-6">
                    <ul className="space-y-3">
                      {utilLinks.map((item) => (
                        <li key={item.label}>
                          <SheetClose asChild>
                            <a
                              className="block text-[hsl(var(--paper))]/65 text-base transition-colors hover:text-[hsl(var(--paper))]"
                              href={item.href}
                            >
                              {item.label}
                            </a>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="relative pt-16">{children}</main>

      <AtelierFooter isDE={isDE} />
    </div>
  );
}

function AtelierFooter({ isDE }: { isDE: boolean }) {
  const credentials = isDE
    ? [
        'ITDR-gelisteter technischer Experte (Schweiz)',
        'OpenAI-Red-Team-Network-Alumnus',
        'SECA 2026, eingeladener Sprecher',
        'openEHR.ch Symposiums-Sprecher',
        'Aktiv über 10+ Unternehmen im DACH-BU-Portfolio',
        'Gründer, DocIQ (Schweizer Legal-AI seit 2017)',
        'Gründer, MergeFoundry, Inc.',
        'Autor, FlowNext (Open Source)',
      ]
    : [
        'ITDR-listed Technical Expert (Switzerland)',
        'OpenAI Red Team Network alumnus',
        'SECA 2026 invited speaker',
        'openEHR.ch Symposium speaker',
        'Active across 10+ DACH BU portfolio companies',
        'Founder, DocIQ (Swiss legal AI since 2017)',
        'Founder, MergeFoundry, Inc.',
        'Author, FlowNext (open source)',
      ];

  const labels = isDE
    ? {
        practice: 'Praxis',
        signals: 'Signale',
        elsewhere: 'Anderswo',
        rights: 'Alle Rechte vorbehalten.',
        based: 'Binningen, Schweiz',
        terms: 'Impressum',
        privacy: 'Datenschutz',
        contact: 'Kontakt',
      }
    : {
        practice: 'Practice',
        signals: 'Signals',
        elsewhere: 'Elsewhere',
        rights: 'All rights reserved.',
        based: 'Binningen, Switzerland',
        terms: 'Imprint',
        privacy: 'Privacy',
        contact: 'Contact',
      };

  const practiceLinks = isDE
    ? [
        { label: 'Agentische PDLC', href: '/de/sdlc' },
        { label: 'Unabhängiger Experte', href: '/de/expert' },
        { label: 'KI-Transformation', href: '/de/ai-transformation' },
        { label: 'Fallstudien', href: '/de/case-studies' },
      ]
    : [
        { label: 'Agentic PDLC', href: '/sdlc' },
        { label: 'Independent expert', href: '/expert' },
        { label: 'AI transformation', href: '/ai-transformation' },
        { label: 'Case studies', href: '/case-studies' },
      ];

  const signalsLinks = isDE
    ? [
        { label: 'Schriften', href: '/de/log' },
        { label: 'Apps', href: '/apps' },
        { label: 'Bench', href: '/gmickel-bench' },
      ]
    : [
        { label: 'Writing', href: '/log' },
        { label: 'Apps', href: '/apps' },
        { label: 'Bench', href: '/gmickel-bench' },
      ];

  const elsewhereLinks = [
    { label: 'GitHub', href: 'https://github.com/gmickel', external: true },
    {
      label: 'X / Twitter',
      href: 'https://twitter.com/gmickel',
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gmickel',
      external: true,
    },
    {
      label: 'ITDR profile',
      href: 'https://itdr.ch/en/experts/expert-details/36/gordon-mickel.html',
      external: true,
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="atelier-dark relative border-[hsl(var(--paper))]/10 border-t">
      <div className="mx-auto max-w-[1480px] px-6 py-16 md:px-10 md:py-24">
        {/* Big wordmark + description */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <a
              aria-label="Mickel Tech, home"
              className="atelier-display block font-medium text-[clamp(2.5rem,1.6rem+3vw,3.5rem)] text-[hsl(var(--paper))] leading-none"
              href={isDE ? '/de' : '/'}
            >
              Mickel<span className="text-[hsl(var(--rust))]">.</span>tech
            </a>
            <p className="atelier-body mt-6 max-w-md text-[hsl(var(--paper))]/65">
              {isDE
                ? 'Unabhängige Praxis von Gordon Mickel. Operating Principal, KI & Technologie, bei Growth Factors. Eine kleine Zahl ausgewählter Mandate pro Jahr.'
                : 'Independent practice of Gordon Mickel. Operating Principal, AI & Technology, at Growth Factors. A small number of select mandates each year.'}
            </p>
            <p className="atelier-eyebrow mt-3 text-[hsl(var(--paper))]/40">
              {labels.based} · DE / EN
            </p>
          </div>

          <FooterColumn heading={labels.practice} items={practiceLinks} />
          <FooterColumn heading={labels.signals} items={signalsLinks} />
          <FooterColumn heading={labels.elsewhere} items={elsewhereLinks} />
        </div>

        {/* Credentials strip */}
        <div className="mt-16 border-[hsl(var(--paper))]/10 border-t pt-8">
          <span className="atelier-eyebrow text-[hsl(var(--paper))]/40">
            {isDE ? 'Anerkennungen' : 'Recognitions'}
          </span>
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[hsl(var(--paper))]/65 text-sm">
            {credentials.map((c) => (
              <li className="leading-snug" key={c}>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-[hsl(var(--paper))]/10 border-t pt-6 text-[hsl(var(--paper))]/45 text-xs md:flex-row md:items-center md:justify-between">
          <span>
            © {year} Gordon Mickel · {labels.rights}
          </span>
          <ul className="flex items-center gap-6">
            <li>
              <a
                className="hover:text-[hsl(var(--paper))]/80"
                href={isDE ? '/de/imprint' : '/imprint'}
              >
                {labels.terms}
              </a>
            </li>
            <li>
              <a
                className="hover:text-[hsl(var(--paper))]/80"
                href={isDE ? '/de/privacy' : '/privacy'}
              >
                {labels.privacy}
              </a>
            </li>
            <li>
              <a className="hover:text-[hsl(var(--paper))]/80" href="#contact">
                {labels.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  items,
}: {
  heading: string;
  items: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
}) {
  return (
    <div className="md:col-span-2">
      <h3 className="atelier-eyebrow text-[hsl(var(--paper))]/40">{heading}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="text-[hsl(var(--paper))]/80 text-sm transition-colors hover:text-[hsl(var(--rust))]"
              href={item.href}
              {...(item.external
                ? { rel: 'noopener noreferrer', target: '_blank' }
                : {})}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
