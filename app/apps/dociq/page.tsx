import type { Metadata } from 'next';
import Link from 'next/link';

import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'DocIQ 1.0 — Pioneering Document Intelligence (2018-2020)',
  description:
    'One of the first legal tech platforms to use extensive NLP and machine learning for document lifecycle management. Still powering enterprise companies across Switzerland.',
  openGraph: {
    title: 'DocIQ 1.0 — Pioneering Document Intelligence',
    description:
      'One of the first legal tech platforms to use extensive NLP and machine learning for document lifecycle management.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ 1.0 — Pioneering Document Intelligence',
    description:
      'Pioneering document intelligence platform from 2018. Still in production.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/dociq',
  },
};

const coreFeatures = [
  {
    title: 'Visual Template Builder',
    description:
      'No-code programming language with nested conditionals, variables, snippets—all visually buildable. Users created complex document templates without writing code.',
    icon: '🔧',
  },
  {
    title: 'AI Text Analysis',
    description:
      'NLP-powered parameterization helped users template their documents automatically. One mouse click to convert static documents into dynamic SmartTemplates.',
    icon: '🧠',
  },
  {
    title: 'Real-Time Collaboration',
    description:
      'Live editing, drafting, commenting with complete audit trails. Multiple users working simultaneously on the same document.',
    icon: '👥',
  },
  {
    title: 'Electronic Signatures',
    description:
      'Both simple electronic signatures (SES) and qualified electronic signatures (QES/ZertES) as a certified Swisscom partner.',
    icon: '✍️',
  },
  {
    title: 'Document Lifecycle',
    description:
      'Full lifecycle management: templating, data entry, form-based filling, collaboration, signing, archiving—all in one platform.',
    icon: '📄',
  },
  {
    title: 'Enterprise Security',
    description:
      'Multi-workspace architecture with role-based permissions, client sharing, complete audit logs, and encrypted storage.',
    icon: '🔒',
  },
];

const smartTemplateFeatures = [
  'Nested conditionals with visual formula builder',
  'Variables with automatic text replacement',
  'Questions with single/multiple choice answers',
  'Snippets for reusable content blocks',
  'Table support with styled formatting',
  'Image uploads with cropping and resizing',
  'Page setup (A4, Legal, Letter, margins)',
  'Multiple list styles with custom prefixes',
  'Live preview while templating',
  'Import SmartObjects from other templates',
];

const collaborationFeatures = [
  'Unlimited workspaces (private and shared)',
  'Real-time live collaboration',
  'Comments and chat system',
  'Activity log and audit trails',
  'Client portals and external sharing',
  'Recipient and signatory management',
  'Email notifications for all events',
  'Version history and cloning',
];

const signatureFeatures = [
  {
    type: 'SES',
    name: 'Simple Electronic Signatures',
    features: [
      'Verified email address requirement',
      'Cryptographic document hash',
      'Timestamp and user ID',
      'Visual signature representation',
      'Freehand or typed signatures',
    ],
  },
  {
    type: 'QES',
    name: 'Qualified Electronic Signatures',
    features: [
      'ZertES (Swiss) and eIDAS (EU) compliant',
      'Swisscom Trust Services partnership',
      'Mobile ID verification',
      'Document hash only—content never leaves servers',
      'Legal equivalence to handwritten signatures',
    ],
  },
];

const techStack = [
  { label: 'Frontend', value: 'Vue.js' },
  { label: 'Backend', value: 'Node.js' },
  { label: 'Database', value: 'PostgreSQL' },
  { label: 'API', value: 'GraphQL (Postgraphile)' },
  { label: 'AI/NLP', value: 'Machine Learning' },
  { label: 'Signatures', value: 'Swisscom QES' },
];

const customers = [
  'Swisscom',
  'Insurance companies',
  'Large law firms',
  'Boutique firms',
  'Notaries',
  'Tax advisors',
  'Accountants',
  'Associations',
  'SMEs',
];

export default function DocIQPage() {
  return (
    <Shell>
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - warm gold/amber for DocIQ 1.0 heritage brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,119,6,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.06),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(217,119,6,0.05),transparent_30%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-amber-600/60 bg-amber-600/10 text-amber-400"
              variant="outline"
            >
              PIONEERING
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              2017-2020
            </Badge>
            <Badge
              className="border-success/40 bg-success/10 text-success"
              variant="outline"
            >
              Still in Production
            </Badge>
          </div>

          <div className="mt-6">
            <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
              DocIQ 1.0
            </h1>
            <p className="mt-2 font-mono text-amber-400 text-xl">
              Where the DocIQ journey began
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

            <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              One of the first legal tech platforms to use{' '}
              <span className="text-amber-400">
                extensive natural language processing and machine learning
              </span>{' '}
              for document lifecycle management. Built between 2017-2020, still
              powering enterprise companies across Switzerland today.
            </p>

            <div className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              <p>
                The premise was revolutionary: a contract lifecycle management
                platform that gave legal counsels and law firms the ability to{' '}
                <span className="text-white">
                  templatize their documents with one mouse click
                </span>{' '}
                using NLP, then use these templates to create new documents
                through form-based filling—shareable with clients who could
                complete them without any technical knowledge.
              </p>
            </div>

            {/* Heritage info */}
            <div className="mt-8 rounded-xl border border-amber-600/20 bg-amber-600/5 p-4">
              <p className="font-mono text-amber-400 text-sm">
                Built 2017-2020 • Released August 2020
              </p>
              <p className="mt-1 text-muted-foreground text-sm">
                This platform laid the foundation for{' '}
                <Link className="glow-link" href="/apps/dociq-sphere">
                  DocIQ Sphere
                </Link>{' '}
                and{' '}
                <Link className="glow-link" href="/apps/dociq-shield">
                  DocIQ Shield
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SCREENSHOTS
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ImageLightbox
              alt="DocIQ document library"
              caption="Document library with workspace organization"
              className="overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-amber-600/10"
              height={300}
              src="/dociq/dociq-library.png"
              width={400}
            />
            <ImageLightbox
              alt="DocIQ SmartTemplate editor"
              caption="Visual template editor with conditionals and variables"
              className="overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-amber-600/10"
              height={300}
              src="/dociq/dociq-template-editor.png"
              width={400}
            />
            <ImageLightbox
              alt="DocIQ document drafting"
              caption="Form-based document generation from templates"
              className="overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-amber-600/10"
              height={300}
              src="/dociq/dociq-draft.png"
              width={400}
            />
          </div>
        </section>

        {/* "Way ahead of its time" */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-amber-600/20 bg-card/60">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-amber-400 tracking-[0.2em]">
                  WAY AHEAD OF ITS TIME
                </p>
              </div>
              <CardTitle className="text-2xl text-white">
                No-code document automation in 2018
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Before the AI boom, before no-code became mainstream, DocIQ 1.0
                delivered:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-400">›</span>A visual programming
                  language for document logic—nested conditionals, variables,
                  calculations
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">›</span>
                  AI-powered document parameterization using NLP
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">›</span>
                  Real-time collaborative editing before it was expected
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">›</span>
                  Qualified electronic signatures meeting Swiss and EU standards
                </li>
              </ul>
              <p className="font-mono text-sm">
                "Everything was visually buildable—users created complex
                document templates without writing a single line of code."
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Features Grid */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              CORE CAPABILITIES
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <Card className="border-white/10 bg-card/60" key={feature.title}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <CardTitle className="text-lg text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SmartTemplate Features */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-amber-600/20 bg-card/70">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white">
                  SmartTemplate Builder
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Visual no-code document programming
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {smartTemplateFeatures.map((feature) => (
                    <li className="flex gap-2" key={feature}>
                      <span className="text-amber-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/70">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white">
                  Collaboration Features
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Enterprise-ready teamwork
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {collaborationFeatures.map((feature) => (
                    <li className="flex gap-2" key={feature}>
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Electronic Signatures */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              ELECTRONIC SIGNATURES
            </p>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <span className="text-muted-foreground text-xs">
              Certified Swisscom Partner
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {signatureFeatures.map((sig) => (
              <Card className="border-white/10 bg-card/60" key={sig.type}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">
                      {sig.name}
                    </CardTitle>
                    <Badge
                      className={
                        sig.type === 'QES'
                          ? 'border-success/40 bg-success/10 text-success'
                          : 'border-white/20 bg-white/5'
                      }
                      variant="outline"
                    >
                      {sig.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {sig.features.map((feature) => (
                      <li className="flex gap-2" key={feature}>
                        <span className="text-primary">›</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Customers & Tech Stack */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Customer Base
                </CardTitle>
                <p className="text-muted-foreground text-xs">
                  Major corporations across Switzerland
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {customers.map((customer) => (
                    <Badge
                      className="border-white/10 bg-white/5"
                      key={customer}
                      variant="outline"
                    >
                      {customer}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground text-sm">
                  Still actively used in production by enterprise companies
                  across Switzerland today.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Technical Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  {techStack.map((spec) => (
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
                <div className="mt-4 pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://www.dociq.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit dociq.io →
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
