import type { Metadata } from 'next';
import AtelierShell from '@/components/layout/atelier-shell';
import AtelierPolicyPage from '@/components/sections/atelier/policy-page';
import { breadcrumbSchema, JsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Privacy — Mickel Tech',
  description:
    'Privacy statement for mickel.tech. Data collection, processing, retention and your rights under FADP and GDPR.',
  alternates: {
    canonical: 'https://mickel.tech/privacy',
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

export default function PrivacyPage() {
  return (
    <AtelierShell>
      <JsonLd data={breadcrumbSchema([{ name: 'Privacy', url: '/privacy' }])} />
      <AtelierPolicyPage
        eyebrow="Legal"
        title="Privacy statement"
        updatedDate="April 2026"
        updatedLabel="Last updated"
      >
        <p>
          This statement describes how Mickel Tech (Gordon Mickel, Binningen,
          Switzerland) collects, uses and protects personal data when you visit
          mickel.tech, contact me, or submit a confidential intake.
        </p>

        <h2>Controller</h2>
        <p>
          Gordon Mickel
          <br />
          Binningen, Switzerland
          <br />
          <a href="mailto:gordon@mickel.tech">gordon@mickel.tech</a>
        </p>

        <h2>Applicable law</h2>
        <p>
          The Swiss Federal Act on Data Protection (FADP, revised 2023) applies.
          Where you are located in the EU/EEA, the General Data Protection
          Regulation (GDPR) also applies in parallel.
        </p>

        <h2>What data is collected</h2>
        <h3>1. Server logs</h3>
        <p>
          The hosting provider (Vercel) automatically processes technical access
          information when you visit pages: IP address (truncated), user agent,
          referring URL, requested URL, response status, and timestamp. This
          data is used for operating, securing and troubleshooting the site, and
          is retained on Vercel infrastructure under their privacy policy.
        </p>

        <h3>2. Confidential expert intake form (/expert)</h3>
        <p>
          When you submit the confidential intake form, the following data is
          processed: name, firm or organisation, email address, optional phone
          number, role, matter type, jurisdiction, optional deadline, parties
          involved, and matter description. The data is transmitted to me by
          email via Resend (a transactional email provider). I treat all
          submissions as confidential and use them solely to assess fit and
          conflict and to respond to your enquiry. Submissions are retained
          while needed for the engagement assessment and are deleted thereafter,
          except where professional retention rules require otherwise.
        </p>

        <h3>3. Calendar booking (Cal.com)</h3>
        <p>
          The booking interface for discovery and fit calls is provided by{' '}
          <a href="https://cal.com" rel="noopener noreferrer" target="_blank">
            Cal.com
          </a>
          . When you book a call, Cal.com processes the data you submit
          (typically name, email, time slot, reason for call) under their
          privacy policy. I receive the appointment data necessary to hold the
          call. No payment data is processed.
        </p>

        <h3>4. Direct correspondence</h3>
        <p>
          If you contact me by email, the email address you write from and the
          contents of your email are processed for the purpose of replying.
          Emails are stored in standard hosted mail systems under their
          respective privacy policies.
        </p>

        <h3>5. Cookies and analytics</h3>
        <p>
          mickel.tech does not set marketing cookies and does not run
          third-party advertising or analytics scripts at this time. Strictly
          necessary cookies may be set by the hosting platform for
          functionality. If analytics are added in future, this statement will
          be updated and consent will be requested where required.
        </p>

        <h2>Legal basis</h2>
        <ul>
          <li>
            <strong>Performance of a (pre-)contract</strong>: processing intake
            and correspondence data to evaluate and respond to your enquiry.
          </li>
          <li>
            <strong>Legitimate interest</strong>: secure operation of the
            website, fraud prevention.
          </li>
          <li>
            <strong>Legal obligation</strong>: where mandatory retention or
            disclosure rules apply (tax, professional rules).
          </li>
        </ul>

        <h2>Recipients</h2>
        <p>
          Data is processed by Mickel Tech and the technical service providers
          required to operate the site and respond to enquiries: Vercel
          (hosting), Resend (transactional email), Cal.com (calendar booking).
          Data is not sold or transferred for marketing purposes.
        </p>

        <h2>International transfers</h2>
        <p>
          Some service providers process data outside Switzerland and the EU
          (notably US-based providers). Where this occurs, transfers rely on
          adequacy decisions, EU Standard Contractual Clauses, or equivalent CH
          mechanisms.
        </p>

        <h2>Your rights</h2>
        <p>
          Under FADP and (where applicable) GDPR you have the right to access
          your personal data, request correction or deletion, object to
          processing on legitimate-interest grounds, request restriction of
          processing, and obtain a portable copy. To exercise any of these
          rights, write to{' '}
          <a href="mailto:gordon@mickel.tech">gordon@mickel.tech</a>. You also
          have the right to lodge a complaint with the competent supervisory
          authority (the Swiss Federal Data Protection and Information
          Commissioner; in the EU, your local DPA).
        </p>

        <h2>Changes to this statement</h2>
        <p>
          This statement is updated as the site and its tooling evolve. The
          version date at the top reflects the last revision.
        </p>
      </AtelierPolicyPage>
    </AtelierShell>
  );
}
