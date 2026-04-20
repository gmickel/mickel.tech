import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierPolicyPage from '@/components/sections/atelier/policy-page';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Imprint · Mickel Tech',
  description:
    'Imprint and contact details for Mickel Tech, the sole proprietorship of Gordon Mickel based in Binningen, Switzerland.',
  openGraph: {
    title: 'Imprint · Mickel Tech',
    description: 'Legal notice and contact information for Mickel Tech.',
    url: 'https://mickel.tech/imprint',
    siteName: 'Mickel Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imprint · Mickel Tech',
    description: 'Legal notice and contact information for Mickel Tech.',
  },
  alternates: {
    canonical: 'https://mickel.tech/imprint',
    languages: {
      en: 'https://mickel.tech/imprint',
      de: 'https://mickel.tech/de/imprint',
      'x-default': 'https://mickel.tech/imprint',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImprintPage() {
  return (
    <AtelierShell>
      <JsonLd data={breadcrumbSchema([{ name: 'Imprint', url: '/imprint' }])} />
      <AtelierPolicyPage
        eyebrow="Legal"
        title="Imprint"
        updatedDate="April 2026"
        updatedLabel="Last updated"
      >
        <h2>Operator</h2>
        <p>
          Mickel Tech is a sole proprietorship (Einzelfirma) of Gordon Mickel.
        </p>

        <h2>Location</h2>
        <p>
          Gordon Mickel
          <br />
          Binningen, Switzerland
        </p>
        <p>
          A street address is not published. For postal correspondence please
          contact Gordon by email; an address will be provided directly on
          request.
        </p>

        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:gordon@mickel.tech">gordon@mickel.tech</a>
          <br />
          Web: <a href="https://mickel.tech">mickel.tech</a>
        </p>

        <h2>Responsible for content</h2>
        <p>Gordon Mickel</p>

        <h2>Disclaimer</h2>
        <p>
          The content on this website is provided for general information
          purposes. While care has been taken in preparing the material, no
          warranty of accuracy or completeness is given. The website may link to
          third-party sites; Mickel Tech assumes no responsibility for the
          content or availability of those sites.
        </p>

        <h2>Copyright</h2>
        <p>
          Unless explicitly noted otherwise, all content on this site is the
          intellectual property of Gordon Mickel. Reproduction of textual or
          visual material in any form, electronic or otherwise, requires prior
          written consent.
        </p>

        <h2>Jurisdiction</h2>
        <p>
          Place of jurisdiction is the canton of Basel-Landschaft, Switzerland.
          Swiss substantive law applies, excluding its conflict-of-laws rules.
        </p>
      </AtelierPolicyPage>
    </AtelierShell>
  );
}
