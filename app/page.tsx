import { Suspense } from 'react';
import Shell from '@/components/layout/shell';
import Chronology from '@/components/sections/chronology';
import Contact from '@/components/sections/contact/index';
import HeroLoader from '@/components/sections/hero-loader';
import Quote from '@/components/sections/quote';
import Services from '@/components/sections/services';
import SystemLogLatest from '@/components/sections/system-log-latest';
import SystemMap from '@/components/sections/system-map';

// Skeleton fallback for hero section to prevent CLS
function HeroSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[90vh] flex-col justify-center px-6 py-20 md:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="h-8 w-48 animate-pulse bg-primary/20" />
        <div className="mt-4 h-24 w-full max-w-3xl animate-pulse bg-white/10" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Shell>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroLoader />
      </Suspense>
      <Suspense
        fallback={
          <div aria-hidden="true" className="min-h-[400px] bg-secondary/20" />
        }
      >
        <Services />
      </Suspense>
      <section className="border-white/10 border-y bg-background/40 px-6 py-10 md:px-20">
        <div className="mx-auto max-w-5xl">
          <aside
            aria-label="Agent Skills support note"
            className="flex flex-col gap-2 border border-primary/20 bg-primary/5 p-4"
            role="note"
          >
            <p className="font-mono text-primary text-xs tracking-[0.2em]">
              AGENT SKILLS
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agent Skills support in VS Code is currently in preview and only
              available in VS Code Insiders. Enable the{' '}
              <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-primary text-xs">
                chat.useAgentSkills
              </code>{' '}
              setting to use Agent Skills.
            </p>
          </aside>
        </div>
      </section>
      <Suspense
        fallback={<div aria-hidden="true" className="min-h-[800px] bg-black" />}
      >
        <SystemMap />
      </Suspense>
      <Suspense fallback={null}>
        <SystemLogLatest />
      </Suspense>
      <Suspense fallback={null}>
        <Chronology />
      </Suspense>
      <Suspense fallback={null}>
        <Quote />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </Shell>
  );
}
