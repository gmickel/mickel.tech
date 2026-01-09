import { Suspense } from 'react';
import Shell from '@/components/layout/shell';
import AppsPreview from '@/components/sections/apps-preview';
import BenchPreview from '@/components/sections/bench-preview';
import Chronology from '@/components/sections/chronology';
import Contact from '@/components/sections/contact/index';
import HeroLoader from '@/components/sections/hero-loader';
import Quote from '@/components/sections/quote';
import Services from '@/components/sections/services';
import SystemLogLatest from '@/components/sections/system-log-latest';
import SystemMap from '@/components/sections/system-map';
import { JsonLd, personSchema } from '@/lib/json-ld';

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
      <JsonLd data={personSchema()} />
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
      <Suspense
        fallback={<div aria-hidden="true" className="min-h-[800px] bg-black" />}
      >
        <SystemMap />
      </Suspense>
      <Suspense
        fallback={
          <div aria-hidden="true" className="min-h-[400px] bg-black/80" />
        }
      >
        <BenchPreview />
      </Suspense>
      <Suspense
        fallback={
          <div aria-hidden="true" className="min-h-[400px] bg-secondary/30" />
        }
      >
        <AppsPreview />
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
