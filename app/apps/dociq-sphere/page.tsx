import type { Metadata } from 'next';
import Link from 'next/link';

import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'DocIQ Sphere — Privacy-First Legal Document Intelligence',
  description:
    'Legal document intelligence platform with AI-powered contract analysis, law firm playbooks, and complete audit trails. Built for legal professionals.',
  openGraph: {
    title: 'DocIQ Sphere — Privacy-First Legal Document Intelligence',
    description:
      'Legal document intelligence platform with AI-powered contract analysis, law firm playbooks, and complete audit trails.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq-sphere',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ Sphere — Privacy-First Legal Document Intelligence',
    description:
      'Legal document intelligence platform for legal professionals.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/dociq-sphere',
  },
};

const valueProps = [
  {
    title: 'Living Legal Playbooks',
    description:
      'Partner law firm expertise embedded in AI workflows. GDPR DPA review, Swiss employment contracts, MDR compliance, NDA analysis—firm-approved logic, not generic AI guesses.',
    icon: '📚',
  },
  {
    title: 'Privacy Architecture',
    description:
      'Multi-tenant isolation. Complete data sovereignty. GDPR and FADP compliant from the ground up.',
    icon: '🔒',
  },
  {
    title: 'Legal-Grade Document Fidelity',
    description:
      'Atomic OOXML operations preserve every formatting detail. Tracked changes, comments, numbering, styles—all intact. AI edits appear as changes you accept or reject.',
    icon: '📄',
  },
  {
    title: 'Agentic Document Intelligence',
    description:
      'Hybrid semantic + keyword search across your library. Ask "Which contracts have uncapped liability?" and get answers with citations.',
    icon: '🔍',
  },
  {
    title: 'Cross-Org Data Rooms',
    description:
      'M&A due diligence, regulatory submissions, client portals. Auto-extraction on upload, role-based access, complete audit trails.',
    icon: '🏢',
  },
  {
    title: 'Expert Review Workflow',
    description:
      'AI suggests, lawyers decide. Every edit is explicit and reviewable. Human judgment remains the final word.',
    icon: '⚖️',
  },
];

const playbooks = [
  { name: 'GDPR DPA Reviewer', desc: 'Validates against Art. 28 requirements' },
  { name: 'Swiss Employment Checker', desc: 'Reviews against OR and ArG' },
  {
    name: 'MDR Compliance',
    desc: 'Medical Device Regulation supply agreements',
  },
  {
    name: 'Standard NDA Review',
    desc: 'Identifies non-standard and one-sided clauses',
  },
  {
    name: 'Commercial Risk Assessment',
    desc: 'Liability, indemnity, termination risks',
  },
  { name: 'Force Majeure Analyzer', desc: 'Protective provision assessment' },
];

const audiences = [
  {
    title: 'Swiss & European Law Firms',
    description:
      'Handle cross-border M&A, commercial contracts, regulatory compliance. Reduce associate review time by 60%+ while maintaining confidentiality.',
  },
  {
    title: 'Corporate Legal Departments',
    description:
      'Enterprise teams drowning in NDAs, vendor agreements, customer terms. Consistent analysis, obligation tracking, compliance evidence.',
  },
  {
    title: 'Compliance & Risk Officers',
    description:
      'Manual policy reviews, regulatory tracking, audit preparation. Defensible processes with complete audit trails.',
  },
];

const techSpecs = [
  { label: 'Frontend', value: 'Next.js 16 + React 19' },
  { label: 'Backend', value: 'Convex (TypeScript)' },
  { label: 'Document Engine', value: 'Python + OOXML' },
  { label: 'Compliance', value: 'GDPR, FADP, ZertES' },
  { label: 'Legal Sources', value: 'Fedlex, EUR-Lex, BGE' },
];

export default function DocIQSpherePage() {
  return (
    <Shell>
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
              className="border-alert/40 bg-alert/10 text-alert"
              variant="outline"
            >
              Coming December 2025
            </Badge>
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex-1">
              <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                DocIQ Sphere
              </h1>
              <p className="mt-2 font-mono text-teal-400 text-xl">
                Privacy-first legal document intelligence
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
                Legal document intelligence platform for law firms, corporate
                legal, and compliance teams. AI-powered contract analysis with
                partner law firm playbooks, complete audit trails, and document
                fidelity that respects Word's tracked changes.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Built for legal professionals who need AI capabilities without
                compromising on data sovereignty, confidentiality, or regulatory
                compliance.
              </p>

              {/* Release info */}
              <div className="mt-8 rounded-xl border border-teal-500/20 bg-teal-500/5 p-4">
                <p className="font-mono text-sm text-teal-400">
                  Expected release: December 2025
                </p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Stay tuned at{' '}
                  <a
                    className="glow-link"
                    href="https://www.dociq.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    www.dociq.io
                  </a>{' '}
                  for updates.
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
                Legal AI that you can't actually use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Legal professionals spend enormous time on repetitive document
                tasks—reviewing contracts clause by clause, checking compliance,
                extracting terms, searching precedents. Generic AI tools can't
                be trusted:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">Privacy concerns</p>
                  <p className="mt-1 text-sm">
                    Where is the data going? US-hosted tools fail client
                    requirements.
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">
                    Document corruption
                  </p>
                  <p className="mt-1 text-sm">
                    AI tools destroy formatting, numbering, and tracked changes.
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">No audit trail</p>
                  <p className="mt-1 text-sm">
                    No clear record of what the AI did and why. Regulators want
                    evidence.
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4">
                  <p className="font-semibold text-white">Generic AI</p>
                  <p className="mt-1 text-sm">
                    No legal domain expertise. No firm-specific knowledge.
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((prop) => (
              <Card className="border-white/10 bg-card/60" key={prop.title}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prop.icon}</span>
                    <CardTitle className="text-lg text-white">
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
                  Cross-org collaboration with AI-powered analysis
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
                  AI conversation with live document preview
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playbooks */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              PARTNER PLAYBOOKS
            </p>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <span className="text-muted-foreground text-xs">
              Law firm expertise, AI speed
            </span>
          </div>

          <Card className="border-indigo-500/20 bg-card/70">
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {playbooks.map((playbook) => (
                  <div
                    className="rounded-lg border border-white/5 bg-background/60 p-4"
                    key={playbook.name}
                  >
                    <p className="font-semibold text-white">{playbook.name}</p>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {playbook.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground text-sm">
                Playbooks encode firm-specific knowledge. Surgical redlining
                with tracked changes. Auto-updates with regulatory changes.
                Usage tracking for billing and analytics.
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

          <div className="grid gap-6 lg:grid-cols-3">
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
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Multi-tenant isolation per organization
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Optional pseudonymization vault with dual-approval
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Complete audit trails for regulatory evidence
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400">›</span>
                    Encryption at rest and in transit
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://www.dociq.io"
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
