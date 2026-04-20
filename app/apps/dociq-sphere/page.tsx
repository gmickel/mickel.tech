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
  name: 'DocIQ Sphere',
  description:
    'AI document intelligence platform with tracked changes, legal research across six databases, playbooks, clause negotiation, data rooms, and complete audit trails.',
  slug: 'dociq-sphere',
  category: 'BusinessApplication',
};

export const metadata: Metadata = {
  title: 'DocIQ Sphere — AI that actually edits your Word documents',
  description:
    'Tracked changes, legal research across six databases, clause negotiation, playbooks, data rooms, and complete audit trails. Swiss-engineered.',
  openGraph: {
    title: 'DocIQ Sphere · Mickel Tech',
    description:
      'AI that edits your actual DOCX. Six legal databases, playbooks, data rooms. Swiss-engineered.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq-sphere',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ Sphere · Mickel Tech',
    description: 'Tracked changes, six legal databases, playbooks, data rooms.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/dociq-sphere' },
};

const capabilities = [
  {
    title: 'Word-native tracked changes',
    description:
      'Atomic OOXML operations preserve numbering, styles, tables, cross-references, even in 200-page contracts. AI edits land as tracked changes to accept or reject.',
  },
  {
    title: 'Legal research (6 databases)',
    description:
      'Fedlex, Entscheidsuche (BGE), EUR-Lex, CJEU, HUDOC, and Swiss commentary. Natural language or exact citations via official government APIs.',
  },
  {
    title: 'AI playbooks',
    description:
      'Reusable workflows encoding institutional expertise. Auto-trigger on upload. Prompts protected; team runs them without seeing analysis logic.',
  },
  {
    title: 'Clause bank + negotiation',
    description:
      'Reusable clauses tagged by type + jurisdiction. Hybrid semantic + keyword search. Generate 2-4 variants at protective / balanced / concessive levels.',
  },
  {
    title: 'Secure data rooms',
    description:
      'M&A, regulatory, client collaboration. Role-based access (Viewer, Collaborator, Editor, Admin). Immutable audit trail with IP and user agent.',
  },
  {
    title: 'Complete audit trail',
    description:
      'Every AI run, tool call, reasoning chain, token count logged. Data room actions tracked. Version history with full rollback.',
  },
  {
    title: 'Web intelligence',
    description:
      'Real-time company, legal, and market searches. Deep Research synthesises multi-source reports.',
  },
  {
    title: 'Privacy-first',
    description:
      'Swiss-hosted infrastructure. Multi-tenant isolation. GDPR + FADP compliant. On-premises for full data sovereignty.',
  },
];

const playbooks = [
  {
    title: 'GDPR Compliance Check',
    description: 'Sub-processor lists, audit rights, cross-border transfers.',
  },
  {
    title: 'NDA Risk Assessment',
    description: 'Non-standard and one-sided clauses.',
  },
  {
    title: 'IP Ownership Review',
    description: 'Assignment, licensing, background IP.',
  },
  { title: 'SLA Analysis', description: 'Uptime, penalties, exclusions.' },
  {
    title: 'Key Terms Extraction',
    description: 'Parties, dates, obligations, termination.',
  },
  {
    title: 'Risk Red Flag Analysis',
    description: 'Liability, indemnity, limitation gaps.',
  },
  {
    title: 'Financial Data Extraction',
    description: 'Payment terms, caps, escalation.',
  },
  {
    title: 'Document Classifier',
    description: 'Auto-categorise type and jurisdiction.',
  },
];

const audiences = [
  {
    title: 'Corporate Legal + RegTech',
    description:
      'Review vendor agreements, extract at scale, manage compliance. Auto-playbooks on every upload; REST + MCP for workflow integration.',
  },
  {
    title: 'Law Firms + Notaries',
    description:
      'Cross-border M&A, commercial contracts, regulatory filings. Playbooks encode firm expertise without exposing prompt logic.',
  },
  {
    title: 'Private Equity',
    description:
      'Due diligence data rooms with granular access and audit trails. Bulk extraction across deal libraries.',
  },
  {
    title: 'Compliance + Risk',
    description:
      'GDPR gap analysis, policy review, regulatory tracking. Defensible processes with full audit.',
  },
];

const specs = [
  { label: 'Frontend', value: 'Next.js 16 + React 19' },
  { label: 'Backend', value: 'Convex (TypeScript)' },
  { label: 'Doc engine', value: 'Python + OOXML' },
  { label: 'AI models', value: 'Model-agnostic' },
  { label: 'Legal sources', value: 'Fedlex, EUR-Lex, BGE, CJEU, ECHR' },
  { label: 'Compliance', value: 'GDPR, FADP, ZertES' },
  { label: 'Deployment', value: 'Cloud, On-Prem, Air-Gapped' },
];

export default function DocIQSpherePage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'DocIQ Sphere', url: '/apps/dociq-sphere' },
        ])}
      />

      <AtelierAppHero
        category="03 / Legal tech"
        description="Sphere edits your actual DOCX. Tracked changes, six legal databases, clause negotiation, playbooks, and secure data rooms, all inside the document. Every AI interaction auditable. Every edit traceable to the prompt that produced it. Model-agnostic: uses Claude, GPT, or Gemini, selected optimally per task."
        idx="03"
        image="/sphere/sphere-research.png"
        imageKind="shot"
        meta={[
          { label: 'Released', value: 'Feb 2026' },
          { label: 'Hosted', value: 'Switzerland' },
          { label: 'Compliance', value: 'GDPR + FADP' },
        ]}
        name="DocIQ Sphere"
        primaryCta={{
          label: 'dociq.io/sphere',
          href: 'https://www.dociq.io/sphere',
          external: true,
        }}
        secondaryCta={{ label: 'Book a demo', href: 'mailto:gordon@dociq.io' }}
        status="Released"
        tagline="AI that actually edits your Word documents."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Problem"
        lede="Legal professionals spend enormous time on repetitive document tasks. Generic AI tools make it worse."
        title="AI that destroys your documents."
      >
        <AtelierFeatureGrid
          items={[
            {
              title: 'Broken formatting',
              description:
                'ChatGPT, Claude, Copilot destroy numbering, styles, tables, tracked changes.',
            },
            {
              title: 'No data sovereignty',
              description:
                'US-hosted tools fail Swiss + EU requirements. Where is your data going?',
            },
            {
              title: 'No audit trail',
              description:
                "No record of what the AI did and why. Regulators want evidence; you can't provide it.",
            },
            {
              title: 'Generic AI',
              description:
                'No legal domain expertise, no firm knowledge, no database access.',
            },
          ]}
        />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Capabilities"
        lede="Eight systems, one workspace."
        title="Core capabilities."
      >
        <AtelierFeatureGrid cols={2} items={capabilities} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Interface"
        lede="Matter workspace and data room. AI with live document preview; cross-org collaboration with immutable audit."
        title="Inside Sphere."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <figure>
            <ImageLightbox
              alt="DocIQ Sphere data room interface"
              caption="Data Rooms: cross-org collaboration with audit trail"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={400}
              src="/sphere/sphere-dataroom.png"
              width={600}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Data rooms · Audit trail
            </figcaption>
          </figure>
          <figure>
            <ImageLightbox
              alt="DocIQ Sphere matter workspace"
              caption="Matter Workspace: AI conversation with live document preview"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={400}
              src="/sphere/sphere-matter.png"
              width={600}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Matter workspace · Live preview
            </figcaption>
          </figure>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Playbooks"
        lede="Institutional expertise at AI speed. Custom playbooks via natural language. Auto-trigger on upload. Version history with rollback."
        title="Ready-made legal workflows."
      >
        <AtelierFeatureGrid cols={2} items={playbooks} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="05 / Audience" title="Who it's for.">
        <AtelierFeatureGrid items={audiences} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="06 / Spec" title="Stack + security.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={specs} />
          <div className="atelier-body space-y-3 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Security + auditability
            </p>
            <ul className="space-y-2.5 border-[hsl(var(--ink))]/10 border-l pl-5">
              <li className="relative">
                <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
                Every AI run logged: prompts, reasoning, tool calls, tokens.
              </li>
              <li className="relative">
                <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
                Data room immutable log: access, downloads, views, IP + user
                agent.
              </li>
              <li className="relative">
                <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
                Document + playbook version history with full rollback.
              </li>
              <li className="relative">
                <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
                JSON audit exports for compliance evidence.
              </li>
              <li className="relative">
                <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
                Multi-tenant isolation, encryption at rest + in transit.
              </li>
              <li className="relative">
                <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
                On-premises for full data sovereignty.
              </li>
            </ul>
            <p className="atelier-mono pt-3 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
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
