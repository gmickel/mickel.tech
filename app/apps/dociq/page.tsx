import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierShell from '@/components/layout/atelier-shell';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'DocIQ 1.0',
  description:
    'One of the first legal tech platforms to use NLP and machine learning for document lifecycle management.',
  slug: 'dociq',
  category: 'BusinessApplication',
};

export const metadata: Metadata = {
  title: 'DocIQ 1.0 — Pioneering document intelligence (2017-2020)',
  description:
    'One of the first legal tech platforms to use extensive NLP and machine learning for document lifecycle management. Still in production across Switzerland today.',
  openGraph: {
    title: 'DocIQ 1.0 · Mickel Tech',
    description:
      'Pioneering document intelligence. NLP, visual no-code templates, QES.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ 1.0 · Mickel Tech',
    description:
      'Pioneering document intelligence. 2017-2020. Still in production.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/dociq' },
};

const coreFeatures = [
  {
    title: 'Visual template builder',
    description:
      'No-code programming language with nested conditionals, variables, and snippets, all visually buildable.',
  },
  {
    title: 'AI text analysis',
    description:
      'NLP-powered parameterisation. One click to convert a static document into a dynamic SmartTemplate.',
  },
  {
    title: 'Real-time collaboration',
    description:
      'Live editing, drafting, commenting with complete audit trails.',
  },
  {
    title: 'Electronic signatures',
    description: 'Both SES and QES/ZertES as a certified Swisscom partner.',
  },
  {
    title: 'Document lifecycle',
    description:
      'Templating, data entry, form-based filling, collaboration, signing, archiving, all in one platform.',
  },
  {
    title: 'Enterprise security',
    description:
      'Multi-workspace, role-based permissions, client sharing, audit logs, encrypted storage.',
  },
];

const signatureFeatures = [
  {
    title: 'SES · Simple Electronic Signatures',
    description:
      'Verified email, cryptographic document hash, timestamps, visual representation; freehand or typed.',
  },
  {
    title: 'QES · Qualified Electronic Signatures',
    description:
      'ZertES (Swiss) + eIDAS (EU). Swisscom Trust Services. Mobile ID verification. Legally equivalent to handwritten.',
  },
];

const specs = [
  { label: 'Frontend', value: 'Vue.js' },
  { label: 'Backend', value: 'Node.js' },
  { label: 'Database', value: 'PostgreSQL' },
  { label: 'API', value: 'GraphQL (Postgraphile)' },
  { label: 'AI / NLP', value: 'Machine Learning' },
  { label: 'Signatures', value: 'Swisscom QES' },
];

export default function DocIQPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'DocIQ 1.0', url: '/apps/dociq' },
        ])}
      />

      <AtelierAppHero
        category="09 / Archive · Legal tech"
        description="One of the first legal tech platforms to use extensive natural language processing and machine learning for document lifecycle management. Built 2017-2020 and still powering enterprise companies across Switzerland. A contract lifecycle platform where legal counsels and law firms could templatise documents with a single click, using NLP, then let clients complete them through form-based filling with no technical knowledge required."
        idx="09"
        image="/dociq/dociq-template-editor.png"
        imageKind="shot"
        meta={[
          { label: 'Built', value: '2017-2020' },
          { label: 'Released', value: 'August 2020' },
          { label: 'Status', value: 'Historical' },
        ]}
        name="DocIQ 1.0"
        primaryCta={{
          label: 'Visit dociq.io',
          href: 'https://www.dociq.io',
          external: true,
        }}
        secondaryCta={{ label: 'See DocIQ Sphere', href: '/apps/dociq-sphere' }}
        status="In Production"
        tagline="Where the DocIQ journey began."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Context"
        lede="Before the AI boom, before no-code became mainstream."
        title="Way ahead of its time."
      >
        <ul className="atelier-body space-y-3 border-[hsl(var(--ink))]/10 border-l pl-5 text-[1.02rem] text-[hsl(var(--ink))]/85 leading-[1.7]">
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            A visual programming language for document logic: nested
            conditionals, variables, calculations.
          </li>
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            AI-powered document parameterisation using NLP.
          </li>
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            Real-time collaborative editing before it was expected.
          </li>
          <li className="relative">
            <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
            Qualified electronic signatures meeting Swiss and EU standards.
          </li>
        </ul>
        <p className="atelier-display mt-10 max-w-[48ch] text-[1.1rem] text-[hsl(var(--ink))]/80 italic leading-[1.5]">
          "Everything was visually buildable. Users created complex document
          templates without writing a single line of code."
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Interface"
        lede="Library, visual template editor, and form-based drafting."
        title="Inside DocIQ 1.0."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <figure>
            <ImageLightbox
              alt="DocIQ document library"
              caption="Document library with workspace organisation"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={300}
              src="/dociq/dociq-library.png"
              width={400}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Library
            </figcaption>
          </figure>
          <figure>
            <ImageLightbox
              alt="DocIQ SmartTemplate editor"
              caption="Visual template editor with conditionals and variables"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={300}
              src="/dociq/dociq-template-editor.png"
              width={400}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              SmartTemplate editor
            </figcaption>
          </figure>
          <figure>
            <ImageLightbox
              alt="DocIQ document drafting"
              caption="Form-based document generation from templates"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={300}
              src="/dociq/dociq-draft.png"
              width={400}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Draft from template
            </figcaption>
          </figure>
        </div>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="03 / Capabilities" title="Core features.">
        <AtelierFeatureGrid cols={3} items={coreFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Signatures"
        lede="Certified Swisscom partner. Both simple and qualified, legally equivalent to handwritten signatures in Switzerland and the EU."
        title="Electronic signatures."
      >
        <AtelierFeatureGrid items={signatureFeatures} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="05 / Customers" title="Who used it.">
        <div className="atelier-body grid gap-5 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65] sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Swiss Insurance Association (SVV)',
            'Laux Lawyers',
            'Insurance companies',
            'Large law firms',
            'Boutique firms',
            'Notaries',
            'Tax advisors',
            'Accountants',
            'SMEs',
          ].map((customer) => (
            <div
              className="border-[hsl(var(--ink))]/10 border-t pt-3"
              key={customer}
            >
              <p className="atelier-mono text-[11px] text-[hsl(var(--ink))] tracking-[0.08em]">
                {customer}
              </p>
            </div>
          ))}
        </div>
        <p className="atelier-mono mt-8 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          Still actively used by enterprise companies across Switzerland.
        </p>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="06 / Spec" title="Technical stack.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={specs} />
          <div className="atelier-body space-y-3 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Lineage
            </p>
            <p>
              DocIQ 1.0 laid the foundation for the current-generation legal-AI
              products. The NLP-first approach, the visual template language,
              and the audit-first architecture all carry through.
            </p>
            <p className="atelier-mono pt-2 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps/dociq-sphere"
              >
                Successor: DocIQ Sphere →
              </Link>
              <br />
              <Link
                className="mt-2 inline-block text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/apps/dociq-shield"
              >
                Companion: DocIQ Shield →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
