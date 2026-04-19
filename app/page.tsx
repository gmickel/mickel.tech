import { Suspense } from 'react';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierAudienceRouter from '@/components/sections/atelier/audience-router';
import AtelierCaseStudiesPreview from '@/components/sections/atelier/case-studies-preview';
import AtelierContact from '@/components/sections/atelier/contact';
import AtelierHero from '@/components/sections/atelier/hero';
import AtelierHowIWork from '@/components/sections/atelier/how-i-work';
import AtelierSystemLogLatest from '@/components/sections/atelier/system-log-latest';
import AtelierTrustStrip from '@/components/sections/atelier/trust-strip';
import { JsonLd, personSchema, professionalServiceSchema } from '@/lib/json-ld';

export default function Home() {
  return (
    <AtelierShell>
      <JsonLd data={personSchema()} />
      <JsonLd data={professionalServiceSchema()} />

      <AtelierHero locale="en" />
      <AtelierTrustStrip locale="en" />
      <AtelierAudienceRouter locale="en" />
      <AtelierCaseStudiesPreview locale="en" />
      <AtelierHowIWork locale="en" />
      <Suspense fallback={null}>
        <AtelierSystemLogLatest locale="en" />
      </Suspense>
      <AtelierContact locale="en" />
    </AtelierShell>
  );
}
