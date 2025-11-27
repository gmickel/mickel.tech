'use client';

import { Menu } from 'lucide-react';
import type React from 'react';
import CustomCursor from '@/components/ui/custom-cursor';
import { useWireframe } from '@/hooks/use-wireframe';

interface ShellProps {
  children: React.ReactNode;
}

const navItems = [
  { label: 'CONSOLE', href: '#console' },
  { label: 'SYSTEMS', href: '#systems' },
  { label: 'MAP', href: '#map' },
  { label: 'EXPERT', href: '#expert' },
  { label: 'CONTACT', href: '#contact' },
] as const;

export default function Shell({ children }: ShellProps) {
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

      <CustomCursor />

      {/* Header / HUD */}
      <header
        className="fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-white/10 border-b bg-background/80 px-6 backdrop-blur-md"
        // Removed explicit role="banner" as it is implicit for <header>
      >
        <div className="flex items-center gap-4">
          <span className="animate-pulse font-mono text-primary text-xs tracking-widest">
            <span className="sr-only">System status: online</span>● ONLINE
          </span>
          <span className="font-mono text-muted-foreground text-xs">
            SYSTEM_ID: MICKEL_TECH_V2.0
          </span>
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <a
              className="cursor-none font-mono text-muted-foreground text-xs transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              href={item.href}
              key={item.label}
            >
              [{item.label}]
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Open mobile menu"
            className="text-primary md:hidden"
            type="button"
          >
            <Menu aria-hidden="true" size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-14">{children}</main>

      {/* Wireframe Overlay Label */}
      {wireframe && (
        <div
          aria-live="polite"
          className="fixed right-4 bottom-4 z-50 border border-success bg-black/80 px-2 py-1 font-mono text-success text-xs"
          role="status"
        >
          MODE: ARCHITECT_VIEW // WIREFRAME
        </div>
      )}
    </div>
  );
}
