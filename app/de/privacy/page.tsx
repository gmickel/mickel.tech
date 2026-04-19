import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierPolicyPage from '@/components/sections/atelier/policy-page';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Datenschutz — Mickel Tech',
  description:
    'Datenschutzerklärung für mickel.tech. Datenerhebung, Verarbeitung, Aufbewahrung und Ihre Rechte unter DSG und DSGVO.',
  alternates: {
    canonical: 'https://mickel.tech/de/privacy',
    languages: {
      en: 'https://mickel.tech/privacy',
      de: 'https://mickel.tech/de/privacy',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DePrivacyPage() {
  return (
    <AtelierShell>
      <JsonLd
        data={breadcrumbSchema([{ name: 'Datenschutz', url: '/de/privacy' }])}
      />
      <AtelierPolicyPage
        eyebrow="Rechtlich"
        title="Datenschutzerklärung"
        updatedDate="April 2026"
        updatedLabel="Zuletzt aktualisiert"
      >
        <p>
          Diese Erklärung beschreibt, wie Mickel Tech (Gordon Mickel, Binningen,
          Schweiz) personenbezogene Daten erhebt, verwendet und schützt, wenn
          Sie mickel.tech besuchen, mich kontaktieren oder eine vertrauliche
          Anfrage einreichen.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          Gordon Mickel
          <br />
          Binningen, Schweiz
          <br />
          <a href="mailto:gordon@mickel.tech">gordon@mickel.tech</a>
        </p>

        <h2>Anwendbares Recht</h2>
        <p>
          Es gilt das revidierte Schweizer Bundesgesetz über den Datenschutz
          (DSG, Stand 2023). Sofern Sie sich im EU/EWR-Raum befinden, gilt
          ergänzend die Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2>Welche Daten werden erhoben</h2>
        <h3>1. Server-Logs</h3>
        <p>
          Der Hosting-Anbieter (Vercel) verarbeitet beim Besuch der Seiten
          automatisch technische Zugriffsdaten: IP-Adresse (gekürzt), User
          Agent, Referrer-URL, angeforderte URL, Antwortstatus und Zeitstempel.
          Diese Daten dienen dem Betrieb, der Sicherheit und der Fehleranalyse
          der Website und werden auf der Vercel-Infrastruktur gemäss deren
          Datenschutzbestimmungen aufbewahrt.
        </p>

        <h3>2. Vertrauliche Anfrageformular (/expert)</h3>
        <p>
          Bei Einreichung des vertraulichen Anfrageformulars werden folgende
          Daten verarbeitet: Name, Kanzlei oder Organisation, E-Mail-Adresse,
          optionale Telefonnummer, Rolle, Mandatstyp, Jurisdiktion, optionale
          Frist, beteiligte Parteien und Sachverhaltsbeschreibung. Die Daten
          werden mir per E-Mail über Resend (transaktionaler E-Mail-Anbieter)
          übermittelt. Alle Übermittlungen werden vertraulich behandelt und
          ausschliesslich zur Beurteilung von Fit und Konflikt sowie zur
          Beantwortung Ihrer Anfrage verwendet. Übermittlungen werden so lange
          aufbewahrt, wie sie für die Beurteilung erforderlich sind, und danach
          gelöscht — ausser wo berufliche Aufbewahrungspflichten greifen.
        </p>

        <h3>3. Kalenderbuchung (Cal.com)</h3>
        <p>
          Die Buchungsoberfläche für Discovery- und Erstgespräche wird von{' '}
          <a href="https://cal.com" rel="noopener noreferrer" target="_blank">
            Cal.com
          </a>{' '}
          bereitgestellt. Bei einer Buchung verarbeitet Cal.com die von Ihnen
          übermittelten Daten (üblicherweise Name, E-Mail, Zeitfenster, Anlass)
          gemäss deren Datenschutzbestimmungen. Ich erhalte die für die
          Durchführung des Gesprächs notwendigen Termindaten. Es werden keine
          Zahlungsdaten verarbeitet.
        </p>

        <h3>4. Direkte Korrespondenz</h3>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden die Absender-Adresse und
          der Inhalt der E-Mail zum Zweck der Beantwortung verarbeitet. E-Mails
          werden in üblichen gehosteten Mail-Systemen gemäss deren jeweiligen
          Datenschutzbestimmungen aufbewahrt.
        </p>

        <h3>5. Cookies und Analyse</h3>
        <p>
          mickel.tech setzt keine Marketing-Cookies und betreibt derzeit keine
          Drittanbieter-Werbe- oder -Analyse-Skripte. Technisch notwendige
          Cookies können von der Hosting-Plattform für die Funktionsfähigkeit
          gesetzt werden. Falls künftig Analysetools eingesetzt werden, wird
          diese Erklärung aktualisiert und gegebenenfalls eine Einwilligung
          eingeholt.
        </p>

        <h2>Rechtsgrundlage</h2>
        <ul>
          <li>
            <strong>Erfüllung eines (vor-)vertraglichen Verhältnisses</strong>:
            Verarbeitung von Anfrage- und Korrespondenzdaten zur Beurteilung und
            Beantwortung Ihrer Anfrage.
          </li>
          <li>
            <strong>Berechtigtes Interesse</strong>: sicherer Betrieb der
            Website, Missbrauchsabwehr.
          </li>
          <li>
            <strong>Gesetzliche Pflicht</strong>: soweit verbindliche
            Aufbewahrungs- oder Offenlegungspflichten greifen (Steuer,
            Berufsregeln).
          </li>
        </ul>

        <h2>Empfänger</h2>
        <p>
          Die Daten werden von Mickel Tech und den technischen Dienstleistern
          verarbeitet, die für den Betrieb der Website und die Beantwortung von
          Anfragen erforderlich sind: Vercel (Hosting), Resend (transaktionale
          E-Mail), Cal.com (Kalenderbuchung). Die Daten werden nicht verkauft
          oder zu Marketing-Zwecken weitergegeben.
        </p>

        <h2>Internationale Übermittlungen</h2>
        <p>
          Einige Dienstleister verarbeiten Daten ausserhalb der Schweiz und der
          EU (insbesondere US-basierte Anbieter). Soweit dies geschieht, stützen
          sich Übermittlungen auf Angemessenheitsbeschlüsse,
          EU-Standard­vertrags­klauseln oder gleichwertige CH-Mechanismen.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Nach DSG und (soweit anwendbar) DSGVO haben Sie das Recht, Auskunft
          über Ihre personenbezogenen Daten zu verlangen, deren Berichtigung
          oder Löschung zu fordern, der Verarbeitung auf Grund berechtigter
          Interessen zu widersprechen, eine Einschränkung der Verarbeitung zu
          beantragen und eine portable Kopie zu erhalten. Schreiben Sie zur
          Wahrnehmung dieser Rechte an{' '}
          <a href="mailto:gordon@mickel.tech">gordon@mickel.tech</a>. Sie haben
          ferner das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
          (in der Schweiz: Eidgenössischer Datenschutz- und
          Öffentlichkeitsbeauftragter EDÖB; in der EU: Ihre lokale
          Aufsichtsbehörde).
        </p>

        <h2>Änderungen dieser Erklärung</h2>
        <p>
          Diese Erklärung wird mit der Weiterentwicklung der Website und ihrer
          Tools aktualisiert. Das Datum oben gibt die letzte Überarbeitung
          wieder.
        </p>
      </AtelierPolicyPage>
    </AtelierShell>
  );
}
