import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierPolicyPage from '@/components/sections/atelier/policy-page';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Impressum — Mickel Tech',
  description:
    'Impressum und Kontaktangaben für Mickel Tech, Einzelfirma von Gordon Mickel mit Sitz in Binningen, Schweiz.',
  alternates: {
    canonical: 'https://mickel.tech/de/imprint',
    languages: {
      en: 'https://mickel.tech/imprint',
      de: 'https://mickel.tech/de/imprint',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeImprintPage() {
  return (
    <AtelierShell>
      <JsonLd
        data={breadcrumbSchema([{ name: 'Impressum', url: '/de/imprint' }])}
      />
      <AtelierPolicyPage
        eyebrow="Rechtlich"
        title="Impressum"
        updatedDate="April 2026"
        updatedLabel="Zuletzt aktualisiert"
      >
        <h2>Betreiber</h2>
        <p>Mickel Tech ist eine Einzelfirma von Gordon Mickel.</p>

        <h2>Standort</h2>
        <p>
          Gordon Mickel
          <br />
          Binningen, Schweiz
        </p>
        <p>
          Eine Strassenadresse wird nicht veröffentlicht. Für postalische
          Korrespondenz wenden Sie sich bitte per E-Mail an Gordon; eine Adresse
          wird direkt auf Anfrage mitgeteilt.
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:gordon@mickel.tech">gordon@mickel.tech</a>
          <br />
          Web: <a href="https://mickel.tech">mickel.tech</a>
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>Gordon Mickel</p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website werden zu allgemeinen Informationszwecken
          bereitgestellt. Trotz sorgfältiger Aufbereitung wird für die
          Richtigkeit oder Vollständigkeit keine Gewähr übernommen. Die Website
          kann auf Webseiten Dritter verlinken; für deren Inhalte und
          Verfügbarkeit übernimmt Mickel Tech keine Verantwortung.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Soweit nicht ausdrücklich anders vermerkt, sind sämtliche Inhalte
          dieser Website geistiges Eigentum von Gordon Mickel. Eine
          Vervielfältigung von Text- oder Bildmaterial in jeglicher Form,
          elektronisch oder anderweitig, bedarf der vorherigen schriftlichen
          Zustimmung.
        </p>

        <h2>Gerichtsstand</h2>
        <p>
          Gerichtsstand ist der Kanton Basel-Landschaft, Schweiz. Es gilt
          schweizerisches materielles Recht unter Ausschluss seiner
          kollisionsrechtlichen Bestimmungen.
        </p>
      </AtelierPolicyPage>
    </AtelierShell>
  );
}
