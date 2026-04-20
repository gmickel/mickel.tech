import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
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
  title: 'DocIQ Shield — Zero-persistence anonymisation',
  description:
    'Fine-tuned local NER + LLM models. Full Swiss court standard compliance. 10 seconds instead of 2 hours. No data stored, ever.',
  openGraph: {
    title: 'DocIQ Shield · Mickel Tech',
    description:
      'Zero-persistence anonymisation with fine-tuned local models. Swiss court standard.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq-shield',
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
      'Rules preserve judges, lawyers, and authorities. Anonymises parties, witnesses, minors, addresses, dates. Catches every variation: abbreviations, misspellings, cross-references.',
  },
  {
    title: 'Zero persistence',
    description:
      'In-memory only processing. No database (not even empty), no disk, no logs. Memory cleared on exit. Nothing to breach or subpoena.',
  },
  {
    title: 'Entity transparency',
    description:
      'Colour-coded cards with classification rationale. Confidence scores, side-by-side comparison. See exactly what changed and why.',
  },
];

const swissStandards = [
  {
    title: 'Persons',
    description: 'A., B., C.____ · e.g. Hans Muller → A.____',
  },
  { title: 'Streets', description: 'X.____weg · e.g. Musterweg → A.____weg' },
  {
    title: 'Legal entities',
    description: 'A.____ AG · e.g. Muster AG → A.____ AG',
  },
  {
    title: 'Inheritance cases',
    description: 'a.____, b.____ · lower case for heirs',
  },
];

const audiences = [
  {
    title: 'Swiss courts',
    description:
      '2-3 hours of manual anonymisation per document. Shield does it in ~10 seconds. 95%+ time reduction.',
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
  { label: 'Processing', value: '~10 seconds' },
  { label: 'Input', value: '.docx, plain text' },
  { label: 'Models', value: 'Fine-tuned local NER + LLM' },
  { label: 'Standard', value: 'Swiss court (Aug 2016)' },
  { label: 'Deployment', value: 'On-prem, air-gapped, CH cloud' },
];

export default function DocIQShieldPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
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
        eyebrow="02 / Standards"
        lede="Compliant with the Swiss court standard as of August 2016."
        title="Placeholder format."
      >
        <AtelierFeatureGrid items={swissStandards} />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--navy))]">
              Never anonymise
            </p>
            <ul className="atelier-body mt-4 space-y-2 border-[hsl(var(--ink))]/10 border-l pl-5 text-[0.95rem] text-[hsl(var(--ink))]/80">
              <li>Gerichtspräsident, Gerichtsschreiber</li>
              <li>RA, RAin, Rechtsanwalt</li>
              <li>IV-Stelle, KESB, Staatsanwaltschaft</li>
              <li>Dr. med., Dr. iur., Prof.</li>
            </ul>
          </div>
          <div>
            <p className="atelier-eyebrow text-[hsl(var(--rust))]">
              Always anonymise
            </p>
            <ul className="atelier-body mt-4 space-y-2 border-[hsl(var(--ink))]/10 border-l pl-5 text-[0.95rem] text-[hsl(var(--ink))]/80">
              <li>Parties (Kläger, Beklagte): all name variations</li>
              <li>Witnesses (Zeugen): including abbreviations</li>
              <li>Doctors (treating + experts)</li>
              <li>Addresses, postal codes</li>
              <li>Dates (birth, marriage, divorce)</li>
              <li>Minors: always</li>
            </ul>
          </div>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Architecture"
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

      <AtelierAppSection eyebrow="04 / Audience" title="Who it's for.">
        <AtelierFeatureGrid items={audiences} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="05 / Spec" title="Technical details.">
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
