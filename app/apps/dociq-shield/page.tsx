import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierBeforeAfter from '@/components/atelier/before-after';
import AtelierShell from '@/components/layout/atelier-shell';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'DocIQ Shield',
  description:
    'Court document anonymisation with fine-tuned local NER and LLM models. Swiss court standard compliance. Zero data persistence. 10 seconds instead of 2 hours.',
  slug: 'dociq-shield',
  category: 'BusinessApplication',
};

export const metadata: Metadata = {
  title: 'DocIQ Shield -- Zero-persistence anonymisation',
  description:
    'Fine-tuned local NER + LLM models. Full Swiss court standard compliance. 10 seconds instead of 2 hours. No data stored, ever. On-prem, air-gapped, or CH cloud.',
  openGraph: {
    title: 'DocIQ Shield · Mickel Tech',
    description:
      'Zero-persistence anonymisation with fine-tuned local models. Swiss court standard.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq-shield',
    siteName: 'Mickel Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ Shield · Mickel Tech',
    description:
      'Zero-persistence anonymisation. Fine-tuned local models. No data stored, ever.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/dociq-shield' },
};

const features = [
  {
    title: 'Fine-tuned local models',
    description:
      'Fine-tuned NER + LLMs on your infrastructure. No data leaves your network. Optional managed cloud in Switzerland.',
  },
  {
    title: 'Smart preservation',
    description:
      'Rules preserve judges, lawyers, authorities. Anonymises parties, witnesses, minors, addresses, dates. Catches every variation: abbreviations, misspellings, cross-references.',
  },
  {
    title: 'Zero persistence',
    description:
      'In-memory only. No database (not even empty), no disk, no logs. Memory cleared on exit. Nothing to breach or subpoena.',
  },
  {
    title: 'Entity transparency',
    description:
      'Colour-coded cards with classification rationale. Confidence scores, side-by-side comparison. See exactly what changed and why.',
  },
];

const complianceRows = [
  {
    entity: 'Judge (Gerichtspräsident)',
    action: 'Preserve',
    placeholder: '—',
    notes: 'Title + abbreviation always intact.',
  },
  {
    entity: 'Court staff (Gerichtsschreiber)',
    action: 'Preserve',
    placeholder: '—',
    notes: 'Including “GS” abbreviation.',
  },
  {
    entity: 'Lawyer (RA, RAin, Rechtsanwalt)',
    action: 'Preserve',
    placeholder: '—',
    notes: 'All three forms recognised.',
  },
  {
    entity: 'Authority (IV-Stelle, KESB, Staatsanwaltschaft)',
    action: 'Preserve',
    placeholder: '—',
    notes: 'Office names never anonymised.',
  },
  {
    entity: 'Academic title (Dr., Prof.)',
    action: 'Preserve',
    placeholder: '—',
    notes: 'Titles kept; attached names follow their own rule.',
  },
  {
    entity: 'Party (Kläger, Beklagte)',
    action: 'Anonymise',
    placeholder: 'A.____, B.____',
    notes: 'First party A, second B, etc. All name forms mapped to same token.',
  },
  {
    entity: 'Witness (Zeuge/-in)',
    action: 'Anonymise',
    placeholder: 'C.____, D.____',
    notes: 'Sequence continues after parties.',
  },
  {
    entity: 'Minor',
    action: 'Anonymise',
    placeholder: 'a.____, b.____',
    notes: 'Lower case for under-18s; age inferred from context.',
  },
  {
    entity: 'Heirs',
    action: 'Anonymise',
    placeholder: 'a.____, b.____',
    notes: 'Lower case, inheritance-case convention.',
  },
  {
    entity: 'Legal entity',
    action: 'Anonymise',
    placeholder: 'A.____ AG',
    notes: 'Retains legal form suffix.',
  },
  {
    entity: 'Compound entity',
    action: 'Anonymise',
    placeholder: 'A.____ und B.____ GmbH',
    notes: 'Members of joint claimants kept distinct.',
  },
  {
    entity: 'Address / street',
    action: 'Anonymise',
    placeholder: 'X.____weg',
    notes: 'Street type preserved; house number dropped.',
  },
  {
    entity: 'Postcode / city',
    action: 'Anonymise',
    placeholder: '[postcode] [city]',
    notes: 'Bracketed redaction.',
  },
  {
    entity: 'Date (birth, marriage, divorce)',
    action: 'Anonymise',
    placeholder: '[date]',
    notes: 'All personal dates redacted; court dates preserved.',
  },
];

const throughput = [
  { label: '5-page judgment', value: '≈ 8 seconds' },
  { label: '50-page appeal', value: '≈ 45 seconds' },
  { label: '100-page case file', value: '≈ 90 seconds' },
  { label: 'Batch (100 × 20pp)', value: '≈ 35 minutes' },
];

const accuracy = [
  { label: 'Entity recall', value: '98.2%' },
  { label: 'Entity precision', value: '97.8%' },
  { label: 'F1 score', value: '98.0%' },
  { label: 'Human review after Shield', value: '~15 min / doc' },
];

const audiences = [
  {
    title: 'Swiss courts',
    description:
      '2–3 hours of manual anonymisation per document. Shield runs in ~10 seconds. 95%+ time reduction.',
  },
  {
    title: 'Government + administration',
    description:
      'DSG/GDPR compliance, high-volume FOI requests. Zero-persistence architecture means nothing to breach.',
  },
  {
    title: 'Banks + healthcare',
    description:
      'FINMA requirements, patient confidentiality. On-premises deployment. No external transmission.',
  },
];

const specs = [
  { label: 'Processing', value: '~10 seconds (5 pages)' },
  { label: 'Input', value: '.docx, plain text' },
  { label: 'Models', value: 'Fine-tuned local NER + LLM' },
  { label: 'Standard', value: 'Swiss court (Aug 2016)' },
  { label: 'Deployment', value: 'On-prem, air-gapped, CH cloud' },
  { label: 'Languages', value: 'DE (CH/DE/AT), FR, IT, EN' },
];

export default function DocIQShieldPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema({ ...APP_DATA, offer: 'commercial' })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'DocIQ Shield', url: '/apps/dociq-shield' },
        ])}
      />

      <AtelierAppHero
        category="04 / Privacy"
        description="Swiss-engineered anonymisation for judicial, government, and regulated sectors. Fine-tuned local NER + LLM models; no data leaves your network. Full Swiss court standard compliance. Zero-persistence architecture: no database, no logs, no trace. Documents process entirely in memory and vanish on exit."
        idx="04"
        image="/shield/shield.png"
        imageKind="shot"
        meta={[
          { label: 'Speed', value: '~10 seconds' },
          { label: 'Standard', value: 'Swiss court 2016' },
          { label: 'Persistence', value: 'Zero' },
        ]}
        name="DocIQ Shield"
        primaryCta={{
          label: 'dociq.io/shield',
          href: 'https://www.dociq.io/shield',
          external: true,
        }}
        secondaryCta={{ label: 'Book a demo', href: 'mailto:gordon@dociq.io' }}
        status="Released"
        tagline="10 seconds instead of 2 hours."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Capabilities"
        lede="Four pillars: local models, Swiss-court precision, zero persistence, full transparency."
        title="What it does."
      >
        <AtelierFeatureGrid items={features} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Demo"
        lede="Same paragraph, same formatting. Parties, addresses, dates anonymised to Swiss-court placeholders. Judge, lawyer, authority preserved."
        title="Before and after."
      >
        <AtelierBeforeAfter
          after={{
            caption: 'After · Shield',
            body: (
              <p>
                <span className="text-[hsl(var(--ink))]">
                  Der Gerichtspräsident Dr. Meier
                </span>{' '}
                entscheidet im Verfahren des Klägers{' '}
                <code className="atelier-mono text-[hsl(var(--rust))]">
                  A.____
                </code>{' '}
                (geboren{' '}
                <code className="atelier-mono text-[hsl(var(--rust))]">
                  [date]
                </code>
                , wohnhaft{' '}
                <code className="atelier-mono text-[hsl(var(--rust))]">
                  X.____weg
                </code>
                ,{' '}
                <code className="atelier-mono text-[hsl(var(--rust))]">
                  [postcode]
                </code>{' '}
                <code className="atelier-mono text-[hsl(var(--rust))]">
                  [city]
                </code>
                ) gegen die{' '}
                <code className="atelier-mono text-[hsl(var(--rust))]">
                  B.____ AG
                </code>
                , vertreten durch{' '}
                <span className="text-[hsl(var(--ink))]">RA Dr. Schneider</span>
                .
              </p>
            ),
          }}
          before={{
            caption: 'Before · Unredacted',
            body: (
              <p>
                Der Gerichtspräsident Dr. Meier entscheidet im Verfahren des
                Klägers{' '}
                <mark className="bg-transparent font-medium text-[hsl(var(--rust))]">
                  Hans Müller
                </mark>{' '}
                (geboren{' '}
                <mark className="bg-transparent font-medium text-[hsl(var(--rust))]">
                  12.03.1974
                </mark>
                , wohnhaft{' '}
                <mark className="bg-transparent font-medium text-[hsl(var(--rust))]">
                  Musterweg 4
                </mark>
                ,{' '}
                <mark className="bg-transparent font-medium text-[hsl(var(--rust))]">
                  4053 Basel
                </mark>
                ) gegen die{' '}
                <mark className="bg-transparent font-medium text-[hsl(var(--rust))]">
                  Muster AG
                </mark>
                , vertreten durch RA Dr. Schneider.
              </p>
            ),
          }}
        />
        <p className="atelier-mono mt-6 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          Rendered with the same model weights that ship to production.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Standard"
        lede="Compliant with the Swiss court standard as of August 2016. Every row tested against real redacted judgments."
        title="Entity rules."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-[hsl(var(--ink))]/10 border-y text-left">
            <thead>
              <tr className="atelier-mono text-[10px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                <th className="py-3 pr-4 font-normal">Entity</th>
                <th className="py-3 pr-4 font-normal">Action</th>
                <th className="py-3 pr-4 font-normal">Placeholder</th>
                <th className="py-3 font-normal">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(var(--ink))]/10">
              {complianceRows.map((row) => (
                <tr
                  className="atelier-body align-top text-[0.9rem] text-[hsl(var(--ink))]/85"
                  key={row.entity}
                >
                  <td className="py-3 pr-4">{row.entity}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={`atelier-mono text-[10px] uppercase tracking-[0.14em] ${
                        row.action === 'Preserve'
                          ? 'text-[hsl(var(--navy))]'
                          : 'text-[hsl(var(--rust))]'
                      }`}
                    >
                      {row.action}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    {row.placeholder === '—' ? (
                      <span className="text-[hsl(var(--paper-muted))]">—</span>
                    ) : (
                      <code className="atelier-mono text-[12px] text-[hsl(var(--ink))]">
                        {row.placeholder}
                      </code>
                    )}
                  </td>
                  <td className="atelier-body py-3 text-[0.88rem] text-[hsl(var(--ink))]/70">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Architecture"
        lede="Documents process entirely in memory. When processing completes, data is immediately discarded. There is nothing to breach, subpoena, or leak."
        title="No database. No logs. No trace."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { label: 'Database records', value: '0' },
            { label: 'Log entries', value: '0' },
            { label: 'Disk writes', value: '0' },
          ].map((stat) => (
            <div
              className="border-[hsl(var(--ink))]/10 border-t pt-5"
              key={stat.label}
            >
              <span className="atelier-numerals block font-medium text-[3rem] text-[hsl(var(--rust))] leading-none">
                {stat.value}
              </span>
              <p className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Throughput"
        lede="Measured on a single GPU worker. Linear in page count. Human review still recommended — Shield replaces the redaction pass, not the lawyer."
        title="Speed, by document size."
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Processing time
            </p>
            <div className="mt-3">
              <AtelierSpecList items={throughput} />
            </div>
          </div>
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Accuracy (internal test set)
            </p>
            <div className="mt-3">
              <AtelierSpecList items={accuracy} />
            </div>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="06 / Audience" title="Who it’s for.">
        <AtelierFeatureGrid items={audiences} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="07 / Spec" title="Technical details.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={specs} />
          <div className="atelier-body space-y-3 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Deployment
            </p>
            <ul className="space-y-3 border-[hsl(var(--ink))]/10 border-l pl-5">
              <li>
                <span className="atelier-numerals text-[hsl(var(--rust))]">
                  01
                </span>{' '}
                <span className="text-[hsl(var(--ink))]">On-premises</span>.
                Docker with fine-tuned local NER + LLM.
              </li>
              <li>
                <span className="atelier-numerals text-[hsl(var(--rust))]">
                  02
                </span>{' '}
                <span className="text-[hsl(var(--ink))]">Air-gapped</span>. Zero
                external network dependencies.
              </li>
              <li>
                <span className="atelier-numerals text-[hsl(var(--rust))]">
                  03
                </span>{' '}
                <span className="text-[hsl(var(--ink))]">
                  Managed cloud (Switzerland)
                </span>
                . For teams that prefer hosted.
              </li>
            </ul>
            <p className="atelier-mono pt-3 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps/dociq-sphere"
              >
                Companion: DocIQ Sphere →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
