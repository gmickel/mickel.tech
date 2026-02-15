import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'DocIQ Shield — AI Document Anonymisation for Swiss Courts',
  description:
    'Zero-persistence anonymisation powered by fine-tuned local NER and LLM models. Full Swiss court standard compliance. 10 seconds instead of 2 hours. No data stored, ever.',
  openGraph: {
    title: 'DocIQ Shield — AI Document Anonymisation for Swiss Courts',
    description:
      'Zero-persistence anonymisation with fine-tuned local NER and LLM models. Swiss court standard compliance. 10 seconds instead of 2 hours.',
    type: 'website',
    url: 'https://mickel.tech/apps/dociq-shield',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIQ Shield — AI Document Anonymisation',
    description:
      'Zero-persistence anonymisation with fine-tuned local models. No data stored, ever.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/dociq-shield',
  },
};

const features = [
  {
    title: 'Fine-Tuned Local Models',
    description:
      'Runs on fine-tuned local NER models and fine-tuned local LLM models on your infrastructure. No data leaves your network. Optional managed cloud deployment hosted in Switzerland.',
    icon: '🧠',
  },
  {
    title: 'Smart Preservation',
    description:
      'Role-based rules preserve judges, lawyers, and authorities. Anonymises parties, witnesses, minors, addresses, and personal dates. Identifies every variation — abbreviations, misspellings, cross-references.',
    icon: '⚖️',
  },
  {
    title: 'Zero Data Persistence',
    description:
      'In-memory only processing. No database — not an empty one, literally none. No disk storage, no logs. Memory cleared immediately after processing. Nothing to breach, subpoena, or audit.',
    icon: '🔒',
  },
  {
    title: 'Entity Transparency',
    description:
      'Color-coded entity cards with classification rationale. Confidence scores, side-by-side comparison. Review each entity with reasons — see exactly what was anonymised and why.',
    icon: '👁️',
  },
];

const swissStandards = [
  {
    category: 'Persons',
    format: 'A., B., C.____',
    example: 'Hans Müller → A.____',
  },
  {
    category: 'Streets',
    format: 'X.____weg',
    example: 'Musterweg → A.____weg',
  },
  {
    category: 'Legal Entities',
    format: 'A.____ AG',
    example: 'Muster AG → A.____ AG',
  },
  {
    category: 'Inheritance',
    format: 'a.____, b.____',
    example: 'Lower case for heirs',
  },
];

const preserveList = [
  'Gerichtspräsident, Gerichtsschreiber',
  'RA, RAin, Rechtsanwalt',
  'IV-Stelle, KESB, Staatsanwaltschaft',
  'Dr. med., Dr. iur., Prof.',
];

const anonymiseList = [
  'Parties (Kläger, Beklagte) — all name variations',
  'Witnesses (Zeugen) — including abbreviated forms',
  'All doctors (treating + experts)',
  'Addresses (street names, postal codes)',
  'Dates (birth, marriage, divorce)',
  'Minors — always anonymised',
];

const audiences = [
  {
    title: 'Swiss Courts',
    pain: 'Manual anonymisation takes 2-3 hours per document',
    benefit: '95%+ time reduction. 10 seconds instead of 2 hours.',
  },
  {
    title: 'Government & Administration',
    pain: 'DSG/GDPR compliance, high-volume FOI requests',
    benefit: 'Zero persistence architecture. Nothing to breach or subpoena.',
  },
  {
    title: 'Banks & Healthcare',
    pain: 'FINMA requirements, patient confidentiality',
    benefit: 'Fine-tuned local models. On-premises deployment. No external transmission.',
  },
];

const techSpecs = [
  { label: 'Processing Time', value: '~10 seconds' },
  { label: 'Input Formats', value: '.docx, plain text' },
  { label: 'AI Stack', value: 'Fine-tuned local NER + LLM' },
  { label: 'Standards', value: 'Swiss court (Aug 2016)' },
  { label: 'Deployment', value: 'On-Premises, Air-Gapped, Cloud (CH)' },
];

const APP_DATA = {
  name: 'DocIQ Shield',
  description:
    'Court document anonymisation with fine-tuned local NER and LLM models. Swiss court standard compliance. Zero data persistence. 10 seconds instead of 2 hours.',
  slug: 'dociq-shield',
  category: 'BusinessApplication',
};

export default function DocIQShieldPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'DocIQ Shield', url: '/apps/dociq-shield' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - navy/red for Shield brand (Swiss colors) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(30,64,175,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.05),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(30,64,175,0.05),transparent_30%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-blue-600/60 bg-blue-600/10 text-blue-400"
              variant="outline"
            >
              ANONYMISATION
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Swiss Courts
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
                DocIQ Shield
              </h1>
              <p className="mt-2 font-mono text-blue-400 text-xl">
                Zero-persistence document anonymisation
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
                Swiss-engineered anonymisation for judicial, government, and
                regulated sectors. Powered by fine-tuned local NER and LLM
                models — no data leaves your network. Full Swiss court standard
                compliance.
              </p>

              <p className="mt-4 font-mono text-2xl text-white">
                10 seconds instead of 2 hours.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Zero-persistence architecture means no database, no logs, no
                trace. Documents processed entirely in memory and immediately
                discarded. Nothing to breach, nothing to subpoena.
              </p>

              {/* Release info */}
              <div className="mt-8 rounded-xl border border-blue-600/20 bg-blue-600/5 p-4">
                <p className="font-mono text-blue-400 text-sm">
                  Released February 2026
                </p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Learn more at{' '}
                  <a
                    className="glow-link"
                    href="https://www.dociq.io/shield"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dociq.io/shield
                  </a>
                </p>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative lg:w-[480px]">
              <ImageLightbox
                alt="DocIQ Shield anonymisation interface"
                caption="Anonymisation interface with entity detection"
                className="overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-blue-600/10"
                height={400}
                priority
                src="/shield/shield.png"
                width={480}
              />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              CAPABILITIES
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
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

        {/* Swiss Court Standards */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SWISS COURT STANDARDS
            </p>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <span className="text-muted-foreground text-xs">
              Stand August 2016 compliant
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Placeholder formats */}
            <Card className="border-blue-600/20 bg-card/70">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white">
                  Placeholder Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {swissStandards.map((standard) => (
                    <div
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-background/60 p-3"
                      key={standard.category}
                    >
                      <div>
                        <p className="font-semibold text-sm text-white">
                          {standard.category}
                        </p>
                        <p className="font-mono text-muted-foreground text-xs">
                          {standard.format}
                        </p>
                      </div>
                      <p className="font-mono text-blue-400 text-xs">
                        {standard.example}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preserve vs Anonymise */}
            <div className="grid gap-6">
              <Card className="border-success/20 bg-card/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-success">
                    Never Anonymise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {preserveList.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="text-success">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-card/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-destructive text-lg">
                    Always Anonymise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {anonymiseList.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="text-destructive">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Zero Persistence Architecture */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <Card className="border-primary/20 bg-card/60">
            <CardHeader>
              <div className="flex items-center gap-3">
                <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
                  ZERO PERSISTENCE
                </p>
              </div>
              <CardTitle className="text-2xl text-white">
                No database. No logs. No trace.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                DocIQ Shield processes documents entirely in memory. When
                processing completes, data is immediately discarded. There's
                nothing to breach, subpoena, or accidentally expose.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-white/5 bg-background/60 p-4 text-center">
                  <p className="font-mono text-2xl text-white">0</p>
                  <p className="mt-1 text-sm">Database records</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4 text-center">
                  <p className="font-mono text-2xl text-white">0</p>
                  <p className="mt-1 text-sm">Log entries</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-background/60 p-4 text-center">
                  <p className="font-mono text-2xl text-white">0</p>
                  <p className="mt-1 text-sm">Disk writes</p>
                </div>
              </div>
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
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-destructive/80 text-xs uppercase">
                      Pain
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {audience.pain}
                    </p>
                  </div>
                  <div>
                    <p className="text-success/80 text-xs uppercase">Benefit</p>
                    <p className="text-sm text-white">{audience.benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical & Deployment */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Technical Specs
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
                  Deployment Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-mono text-blue-400">1.</span>
                    <div>
                      <p className="text-white">On-Premises</p>
                      <p className="text-xs">
                        Docker deployment with fine-tuned local NER + LLM models
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-blue-400">2.</span>
                    <div>
                      <p className="text-white">Air-Gapped</p>
                      <p className="text-xs">
                        Zero external network dependencies — fully offline
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-blue-400">3.</span>
                    <div>
                      <p className="text-white">Managed Cloud (Switzerland)</p>
                      <p className="text-xs">
                        Hosted in Switzerland for organizations that prefer managed
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://www.dociq.io/shield"
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
