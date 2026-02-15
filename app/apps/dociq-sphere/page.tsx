import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'DocIQ Sphere — AI Document Intelligence for Legal Teams',
  description:
    'AI that actually edits your Word documents. Tracked changes, legal research across six databases, clause negotiation, playbooks, data rooms, and complete audit trails. Swiss-engineered.',
  openGraph: {
    title: 'DocIQ Sphere — AI Document Intelligence for Legal Teams',
    description:
      'AI that actually edits your Word documents. Tracked changes, legal research, clause negotiation, playbooks, data rooms. Swiss-engineered.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq-sphere',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ Sphere — AI Document Intelligence for Legal Teams',
    description:
      'AI that edits your actual DOCX. Tracked changes, six legal databases, playbooks, data rooms. Swiss-engineered.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/dociq-sphere',
  },
};

const valueProps = [
  {
    title: 'Word-Native Tracked Changes',
    description:
      'ChatGPT and Claude destroy your formatting. Sphere doesn\'t. Atomic OOXML operations preserve every detail — numbering, styles, tables, cross-references — even in 200-page contracts. AI edits appear as tracked changes you accept or reject in Word.',
    icon: '📄',
  },
  {
    title: 'Legal Research (6 Databases)',
    description:
      'Fedlex (Swiss Federal Law), Entscheidsuche (BGE citations), EUR-Lex, CJEU, HUDOC, and Swiss legal commentary. Natural language or exact citation lookups via official government APIs. Deep Research synthesizes multi-source analysis.',
    icon: '🔍',
  },
  {
    title: 'AI Playbooks',
    description:
      'Reusable AI workflows that encode institutional expertise. GDPR DPA Review, NDA Risk Assessment, IP Ownership Review, SLA Analysis, Key Terms Extraction, Risk Red Flags, and more. Auto-trigger on upload. Prompts protected — your team runs them without seeing analysis logic.',
    icon: '📚',
  },
  {
    title: 'Clause Bank & Negotiation',
    description:
      'Save reusable clauses tagged by type and jurisdiction. Hybrid semantic + keyword search. Generate 2-4 clause variants at different favor levels for negotiation — protective, balanced, concessive — each with explanations. Usage tracking surfaces popular clauses.',
    icon: '⚖️',
  },
  {
    title: 'Secure Data Rooms',
    description:
      'M&A due diligence, regulatory submissions, client collaboration. Granular role-based access (Viewer, Collaborator, Editor, Admin). Auto-extraction playbooks on upload. Immutable audit trail for every action — access, download, view, with IP and user agent.',
    icon: '🏢',
  },
  {
    title: 'Complete Audit Trail',
    description:
      'Every AI interaction logged — agent runs, tool calls, reasoning chains, token usage. Every data room action tracked. Document and playbook version history with full rollback. Admin audit exports as structured JSON for compliance evidence.',
    icon: '📋',
  },
  {
    title: 'Web Intelligence',
    description:
      'Search the web for real-time information — companies, legal developments, market conditions. Deep Research mode runs a multi-step research agent synthesizing comprehensive reports from multiple sources.',
    icon: '🌐',
  },
  {
    title: 'Privacy-First Architecture',
    description:
      'Swiss-hosted infrastructure. Multi-tenant isolation. Encryption at rest and in transit. GDPR and Swiss FADP compliant. On-premises deployment available for complete data sovereignty — no external network dependencies.',
    icon: '🔒',
  },
];

const playbooks = [
  { name: 'GDPR Compliance Check', desc: 'Sub-processor lists, audit rights, cross-border transfers' },
  { name: 'NDA Risk Assessment', desc: 'Non-standard and one-sided clauses' },
  { name: 'IP Ownership Review', desc: 'Assignment, licensing, background IP' },
  { name: 'SLA Analysis', desc: 'Uptime commitments, penalty mechanisms, exclusions' },
  { name: 'Key Terms Extraction', desc: 'Parties, dates, obligations, termination triggers' },
  { name: 'Risk Red Flag Analysis', desc: 'Liability, indemnity, limitation gaps' },
  { name: 'Financial Data Extraction', desc: 'Payment terms, caps, escalation clauses' },
  { name: 'Document Classifier', desc: 'Auto-categorize document type and jurisdiction' },
];

const audiences = [
  {
    title: 'Corporate Legal & RegTech',
    description:
      'Review vendor agreements, extract terms at scale, manage compliance obligations. Auto-Playbooks run on every upload. REST API and MCP server integrate Sphere into existing workflows.',
  },
  {
    title: 'Law Firms & Notaries',
    description:
      'Cross-border M&A, commercial contracts, regulatory filings. Playbooks encode firm expertise — run consistent reviews without exposing prompt logic. Data rooms enable secure counterparty collaboration.',
  },
  {
    title: 'Private Equity & Investors',
    description:
      'Due diligence data rooms with granular access control and full audit trails. Bulk-extract key terms, obligations, and risk flags across deal libraries. Clause comparison across portfolio companies.',
  },
  {
    title: 'Compliance & Risk Officers',
    description:
      'GDPR gap analysis, policy reviews, regulatory tracking. Bulk extraction flags issues across entire document libraries. Defensible processes with complete audit trails.',
  },
  {
    title: 'Knowledge Management',
    description:
      'Build searchable document libraries with hybrid semantic + keyword search. Templates, clause banks, and institutional knowledge accessible across all matters.',
  },
];

const techSpecs = [
  { label: 'Frontend', value: 'Next.js 16 + React 19' },
  { label: 'Backend', value: 'Convex (TypeScript)' },
  { label: 'Document Engine', value: 'Python + OOXML' },
  { label: 'AI Models', value: 'Model-agnostic (Claude, GPT-4, Gemini)' },
  { label: 'Legal Sources', value: 'Fedlex, EUR-Lex, BGE, CJEU, ECHR, Commentary' },
  { label: 'Compliance', value: 'GDPR, FADP, ZertES' },
  { label: 'Deployment', value: 'Cloud, On-Premise, Air-Gapped' },
];

const APP_DATA = {
  name: 'DocIQ Sphere',
  description:
    'AI document intelligence platform with tracked changes, legal research across six databases, playbooks, clause negotiation, data rooms, and complete audit trails.',
  slug: 'dociq-sphere',
  category: 'BusinessApplication',
};

export default function DocIQSpherePage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'DocIQ Sphere', url: '/apps/dociq-sphere' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - teal/indigo for Sphere brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.06),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.05),transparent_30%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-teal-500/60 bg-teal-500/10 text-teal-400"
              variant="outline"
            >
              LEGAL TECH
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Enterprise
            </Badge>
            <Badge
              className="border-teal-500/40 bg-teal-500/10 text-teal-400"
              variant="outline"
            >
              Released
            </Badge>
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1">
              <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                DocIQ Sphere
              </h1>
              <p className="mt-2 font-mono text-teal-400 text-xl">
                AI that actually edits your Word documents
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  className="glow-link font-mono text-[11px] uppercase"
                  href="/apps"
                >
                  ← All Apps
                </Link>
                <Separator className="h-4 bg-white/10" orientation="vertical" />
                <Link
                  className="glow-link font-mono text-[11px] uppercase"
                  href="/"
                >
                  Main Site
                </Link>
              </div>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Sphere edits your actual DOCX — tracked changes, legal research
                across six databases, clause negotiation, playbooks, and data
                rooms. All inside the document. Swiss-engineered for teams who
                can't compromise on precision.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every AI interaction auditable. Every edit traceable to the
                exact prompt that created it. Model-agnostic — uses Claude,
                GPT-4, and Gemini, automatically selecting the optimal model
                per task.
              </p>

              {/* Release info */}
              <div className="mt-8 rounded-xl border border-teal-500/20 bg-teal-500/5 p-4">
                <p className="font-mono text-sm text-teal-400">
                  Released February 2026
                </p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Learn more at{' '}
                  <a
                    className="glow-link"
                    href="https://www.dociq.io/sphere"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dociq.io/sphere
                  </a>
                </p>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative lg:w-[400px]">
              <ImageLightbox
                alt="DocIQ Sphere research interface"
                caption="Research interface with AI-powered analysis"
                className="overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-teal-500/10"
                height={480}
                priority
                src="/sphere/sphere-research.png"
                width={400}
              />
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-destructive/20 bg-card/60">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-destructive tracking-[0.2em]">
                  THE PROBLEM
                </p>
              </div>
              <CardTitle className="text-2xl text-white">
                AI tools that destroy your documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Legal professionals spend enormous time on repetitive document
                tasks. Generic AI tools make it worse:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">Broken formatting</p>
                  <p className="mt-1 text-sm">
                    ChatGPT, Claude, and Copilot destroy numbering, styles,
                    tables, and tracked changes. You spend more time fixing
                    than editing.
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">
                    No data sovereignty
                  </p>
                  <p className="mt-1 text-sm">
                    US-hosted tools fail Swiss and EU client requirements.
                    Where is your data going?
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">No audit trail</p>
                  <p className="mt-1 text-sm">
                    No record of what the AI did and why. Regulators want
                    evidence. You can't provide it.
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">Generic AI</p>
                  <p className="mt-1 text-sm">
                    No legal domain expertise. No firm-specific knowledge.
                    No access to legal databases.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Value Props */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              CORE CAPABILITIES
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <Card className="border-white/10 bg-card/60" key={prop.title}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prop.icon}</span>
                    <CardTitle className="text-base text-white">
                      {prop.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Screenshots Grid */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              INTERFACE
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-0">
              <ImageLightbox
                alt="DocIQ Sphere data room interface"
                caption="Data Rooms — Cross-org collaboration with AI-powered analysis"
                className="overflow-hidden rounded-t-xl border border-white/10 bg-black/50"
                height={400}
                src="/sphere/sphere-dataroom.png"
                width={600}
              />
              <div className="rounded-b-xl border border-white/10 border-t-0 bg-card/50 p-4">
                <p className="font-mono text-sm text-white">Data Rooms</p>
                <p className="mt-1 text-muted-foreground text-xs">
                  Cross-org collaboration with immutable audit trail
                </p>
              </div>
            </div>
            <div className="space-y-0">
              <ImageLightbox
                alt="DocIQ Sphere matter workspace"
                caption="Matter Workspace — AI conversation with live document preview"
                className="overflow-hidden rounded-t-xl border border-white/10 bg-black/50"
                height={400}
                src="/sphere/sphere-matter.png"
                width={600}
              />
              <div className="rounded-b-xl border border-white/10 border-t-0 bg-card/50 p-4">
                <p className="font-mono text-sm text-white">Matter Workspace</p>
                <p className="mt-1 text-muted-foreground text-xs">
                  AI conversation with live document preview and tracked changes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playbooks */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              AI PLAYBOOKS
            </p>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <span className="text-muted-foreground text-xs">
              Institutional expertise, AI speed
            </span>
          </div>

          <Card className="border-indigo-500/20 bg-card/70">
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {playbooks.map((playbook) => (
                  <div
                    className="rounded-lg border border-white/5 bg-background/60 p-4"
                    key={playbook.name}
                  >
                    <p className="font-semibold text-sm text-white">{playbook.name}</p>
                    <p className="mt-1 text-muted-foreground text-xs">
                      {playbook.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground text-sm">
                Create custom playbooks via natural language. Auto-trigger on
                document upload or data room addition. Playbook version history
                with full rollback. Protected prompts — your team runs them
                without seeing analysis logic.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Target Audiences */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              WHO IT'S FOR
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <Card
                className="border-white/10 bg-secondary/50"
                key={audience.title}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white">
                    {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical & Compliance */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Technical Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  {techSpecs.map((spec) => (
                    <div
                      className="flex justify-between gap-4"
                      key={spec.label}
                    >
                      <dt className="text-muted-foreground text-sm">
                        {spec.label}
                      </dt>
                      <dd className="font-mono text-sm text-white">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Security & Auditability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Every AI agent run logged — prompts, reasoning, tool calls, tokens
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Data room immutable audit log — access, downloads, views, IP + user agent
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Document + playbook version history with full rollback
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Admin audit exports as structured JSON for compliance evidence
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Multi-tenant isolation, encryption at rest and in transit
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    On-premises deployment for complete data sovereignty
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://www.dociq.io/sphere"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more at dociq.io →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Shell>
  );
}
