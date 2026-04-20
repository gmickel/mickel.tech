'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import type React from 'react';
import WorkshopBanner from '@/components/layout/workshop-banner';
import LocaleSwitcher from '@/components/locale-switcher';
import CustomCursor from '@/components/ui/custom-cursor';
import Noise from '@/components/ui/noise';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useWireframe } from '@/hooks/use-wireframe';

interface ShellProps {
  children: React.ReactNode;
}

const serviceLinksEN = [
  { label: 'AGENTIC PDLC', href: '/sdlc' },
  { label: 'INDEPENDENT EXPERT', href: '/expert' },
  { label: 'AI TRANSFORMATION', href: '/ai-transformation' },
] as const;

const serviceLinksDE = [
  { label: 'AGENTISCHE PDLC', href: '/de/sdlc' },
  { label: 'UNABHÄNGIGES GUTACHTEN', href: '/de/expert' },
  { label: 'AI TRANSFORMATION', href: '/de/ai-transformation' },
] as const;

const utilLinks = [
  { label: 'LOG', href: '/log' },
  { label: 'APPS', href: '/apps' },
  { label: 'BENCH', href: '/gmickel-bench' },
  { label: 'CONTACT', href: '/#contact' },
] as const;

export default function Shell({ children }: ShellProps) {
  const pathname = usePathname();
  const isDE = pathname.startsWith('/de');
  const serviceLinks = isDE ? serviceLinksDE : serviceLinksEN;
  const wireframe = useWireframe();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Global Overlays */}
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none fixed inset-0 z-50 opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"
      />
      {/* Film grain noise overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 opacity-40"
      >
        <Noise patternAlpha={8} patternRefreshInterval={3} />
      </div>

      <CustomCursor />

      {/* Subway-map handoff: signals crossing into the legacy/workshop side */}
      <WorkshopBanner />

      {/* Header / HUD — pushed down by 28px (h-7) to clear the workshop banner */}
      <header className="fixed top-7 right-0 left-0 z-40 flex h-14 items-center justify-between border-white/10 border-b bg-background/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <a className="flex cursor-none items-center gap-4" href="/">
            <span className="animate-pulse font-mono text-primary text-xs tracking-widest">
              <span className="sr-only">System status: online</span>● ONLINE
            </span>
            <span className="font-mono text-muted-foreground text-xs">
              MICKEL_TECH
            </span>
          </a>
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {/* Service links — grouped with SVC/ prefix */}
          <span
            aria-hidden="true"
            className="mr-1 font-mono text-[10px] text-primary/40"
          >
            SVC/
          </span>
          {serviceLinks.map((item) => (
            <a
              className="cursor-none border-primary/0 border-l-2 px-3 py-1 font-mono text-white/80 text-xs transition-all hover:border-primary/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}

          {/* Separator */}
          <span aria-hidden="true" className="mx-3 h-3 w-px bg-white/15" />

          {/* Utility links */}
          {utilLinks.map((item) => (
            <a
              className="cursor-none px-2 py-1 font-mono text-muted-foreground text-xs transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              href={item.href}
              key={item.label}
            >
              [{item.label}]
            </a>
          ))}

          {/* Language switcher */}
          <span aria-hidden="true" className="mx-1 h-3 w-px bg-white/15" />
          <LocaleSwitcher />
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open mobile menu"
                className="text-primary"
                type="button"
              >
                <Menu aria-hidden="true" size={18} />
              </button>
            </SheetTrigger>
            <SheetContent
              className="border-white/10 bg-background/95 backdrop-blur-md"
              side="right"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav
                aria-label="Mobile navigation"
                className="mt-8 flex flex-col gap-8"
              >
                {/* Services group */}
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-primary/50 uppercase tracking-[0.3em]">
                    Services
                  </span>
                  {serviceLinks.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        className="block border-primary/30 border-l-2 pl-4 font-mono text-lg text-white transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                {/* Utility links */}
                <div className="space-y-4 border-white/10 border-t pt-6">
                  {utilLinks.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        className="block font-mono text-lg text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        href={item.href}
                      >
                        [{item.label}]
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </nav>
              <div className="absolute right-6 bottom-8 left-6 border-white/10 border-t pt-6">
                <div className="flex items-center justify-between">
                  <LocaleSwitcher />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="animate-pulse font-mono text-primary text-xs tracking-widest">
                    ● ONLINE
                  </span>
                  <span className="font-mono text-muted-foreground text-xs">
                    MICKEL_TECH
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-[5.25rem]">{children}</main>

      {/* Wireframe Overlay Label */}
      {wireframe ? (
        <div
          aria-live="polite"
          className="fixed right-4 bottom-4 z-50 border border-success bg-black/80 px-2 py-1 font-mono text-success text-xs"
          role="status"
        >
          MODE: ARCHITECT_VIEW // WIREFRAME
        </div>
      ) : null}
    </div>
  );
}
