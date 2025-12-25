import type { Metadata } from 'next';
import Link from 'next/link';
import Shell from '@/components/layout/shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Separator } from '@/components/ui/separator';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'SmartTrim',
  description:
    'macOS menu bar utility that automatically fixes formatting issues when you copy-paste from AI coding assistants.',
  slug: 'smarttrim',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'SmartTrim — Fix AI Clipboard Chaos',
  description:
    'Lightweight macOS menu bar utility that automatically fixes formatting issues in clipboard text. No more ghost indentation and broken lines from AI coding assistants.',
  openGraph: {
    title: 'SmartTrim — Fix AI Clipboard Chaos',
    description:
      'Lightweight macOS menu bar utility that automatically fixes formatting issues in clipboard text. No more ghost indentation and broken lines from AI coding assistants.',
    type: 'website',
    url: 'https://mickel.tech/apps/smarttrim',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartTrim — Fix AI Clipboard Chaos',
    description:
      'Lightweight macOS menu bar utility that automatically fixes formatting issues in clipboard text from AI coding assistants.',
  },
  alternates: {
    canonical: 'https://mickel.tech/apps/smarttrim',
  },
};

const features = [
  {
    title: 'Auto-Trim',
    description:
      'Set it and forget it. Monitors your clipboard and automatically cleans malformed text.',
    icon: '⚡',
  },
  {
    title: 'Manual Trim',
    description:
      'Clean on demand via global hotkey (⌘⇧.) or from the menu bar when you need control.',
    icon: '🎯',
  },
  {
    title: 'Smart Detection',
    description:
      "Only processes text that appears broken. Leaves normal text alone—it won't mangle your code.",
    icon: '🧠',
  },
  {
    title: 'Structure Aware',
    description:
      "Preserves intentional structure: paragraphs, bullet points, numbered lists, code blocks—they're safe.",
    icon: '📋',
  },
];

const techSpecs = [
  { label: 'Built with', value: 'Swift 6 + SwiftUI' },
  { label: 'Size', value: '~500 lines of code' },
  { label: 'Dependencies', value: 'None' },
  { label: 'Requirements', value: 'macOS 14.0+ (Sonoma)' },
  { label: 'Architecture', value: 'Apple Silicon & Intel' },
  { label: 'License', value: 'MIT (Open Source)' },
];

const problems = [
  {
    issue: 'Ghost indentation',
    description: 'Invisible leading spaces that throw off alignment',
  },
  {
    issue: 'Hard line breaks',
    description: 'Sentences broken mid-word due to terminal wrapping',
  },
  {
    issue: 'Formatting artifacts',
    description: 'Weird spacing from fixed-width terminal display',
  },
  {
    issue: 'Broken lists',
    description: 'Bullet points and numbered lists with mangled continuations',
  },
];

export default function SmartTrimPage() {
  return (
    <Shell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'SmartTrim', url: '/apps/smarttrim' },
        ])}
      />
      <div className="relative cursor-auto overflow-hidden">
        {/* Ambient glow - orange/amber for SmartTrim brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,180,50,0.08),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(0,229,255,0.06),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,180,50,0.05),transparent_30%)]"
        />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              className="border-[#FFB432]/60 bg-[#FFB432]/10 text-[#FFB432]"
              variant="outline"
            >
              macOS UTILITY
            </Badge>
            <Badge className="border-white/10 bg-white/5" variant="outline">
              Open Source
            </Badge>
            <Badge
              className="border-success/40 bg-success/10 text-success"
              variant="outline"
            >
              v1.0.0
            </Badge>
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Text content */}
            <div className="flex-1">
              <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl">
                SmartTrim
              </h1>
              <p className="mt-2 font-mono text-[#FFB432] text-xl">
                Fix AI clipboard chaos
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
                Lightweight macOS menu bar utility that automatically fixes
                formatting issues in clipboard text. It runs silently in the
                background and cleans up text when you copy-paste between
                applications.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Born from the{' '}
                <Link className="glow-link" href="/gmickel-bench">
                  gmickel bench
                </Link>{' '}
                project—where I needed to copy explanations from AI assistants
                into docs without the formatting nightmares.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 border border-[#FFB432] bg-[#FFB432]/10 px-6 py-3 font-mono text-[#FFB432] text-sm uppercase tracking-wide transition-all hover:bg-[#FFB432]/20"
                  href="https://github.com/gmickel/SmartTrim/releases"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download Latest
                </a>
                <a
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 font-mono text-sm text-white uppercase tracking-wide transition-all hover:border-white/40 hover:bg-white/10"
                  href="https://github.com/gmickel/SmartTrim"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* App screenshot */}
            <div className="relative lg:w-[280px]">
              <ImageLightbox
                alt="SmartTrim menu bar interface"
                caption="SmartTrim menu bar interface"
                className="relative overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-[#FFB432]/10"
                height={320}
                priority
                src="/smarttrim-dark.png"
                width={280}
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
                AI text comes out mangled
              </CardTitle>
              <p className="mt-2 text-muted-foreground">
                When you copy text from AI coding assistants (Claude Code,
                Cursor, GitHub Copilot, ChatGPT) and paste it into Slack,
                Notion, email, or documents—the text often comes out broken.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {problems.map((problem) => (
                  <div
                    className="rounded-lg border border-white/5 bg-background/60 p-4"
                    key={problem.issue}
                  >
                    <p className="font-semibold text-white">{problem.issue}</p>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {problem.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-mono text-muted-foreground text-sm">
                This happens because terminal-based AI tools format text for
                fixed-width display, not for prose.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How it works */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              HOW IT WORKS
            </p>
          </div>

          <Card className="border-primary/20 bg-card/70">
            <CardContent className="pt-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SmartTrim monitors your clipboard. When it detects text that
                  looks malformed (using heuristics like indentation patterns
                  and mid-sentence line breaks), it automatically cleans it up:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Strips invisible leading whitespace
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Rejoins lines that were broken mid-sentence
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">›</span>
                    Preserves intentional structure (paragraphs, bullet points,
                    numbered lists)
                  </li>
                </ul>
                <p>
                  You can also trigger a manual clean with a customizable global
                  hotkey (default: ⌘⇧.) or from the menu bar.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              FEATURES
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

        {/* Settings Screenshot */}
        <section className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mb-6 flex items-center gap-3">
            <p className="font-mono text-[11px] text-primary tracking-[0.2em]">
              SETTINGS
            </p>
          </div>

          <ImageLightbox
            alt="SmartTrim settings interface"
            caption="SmartTrim settings — customize hotkeys and behavior"
            className="overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-primary/5"
            height={400}
            src="/smarttrim-settings-dark.png"
            width={800}
          />
        </section>

        {/* Technical Specs */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">
                  Technical Details
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
                  Who it's for
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm">
                <p>
                  Developers who use AI coding assistants daily and frequently
                  copy text between their terminal and other applications.
                </p>
                <p>
                  If you've ever pasted a Claude or ChatGPT response into Slack
                  and wondered why it looks like garbage—this is for you.
                </p>
                <div className="pt-2">
                  <a
                    className="glow-link font-mono text-[11px] uppercase"
                    href="https://github.com/gmickel/SmartTrim"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View source on GitHub →
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
