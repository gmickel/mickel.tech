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
  name: 'SmartTrim',
  description:
    'macOS menu bar utility that automatically fixes formatting issues when you copy-paste from AI coding assistants.',
  slug: 'smarttrim',
  category: 'DeveloperApplication',
};

export const metadata: Metadata = {
  title: 'SmartTrim — Fix AI clipboard chaos',
  description:
    'Lightweight macOS menu bar utility that automatically fixes formatting issues in clipboard text from AI coding assistants.',
  openGraph: {
    title: 'SmartTrim · Mickel Tech',
    description:
      'macOS menu bar utility that automatically fixes formatting issues in clipboard text.',
    type: 'website',
    url: 'https://mickel.tech/apps/smarttrim',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartTrim · Mickel Tech',
    description: 'Fix AI clipboard chaos.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/smarttrim' },
};

const features = [
  {
    title: 'Auto-Trim',
    description:
      'Set it and forget it. Monitors the clipboard and cleans malformed text automatically.',
  },
  {
    title: 'Manual Trim',
    description:
      'Clean on demand via global hotkey (⌘⇧.) or from the menu bar when you need control.',
  },
  {
    title: 'Smart Detection',
    description:
      "Only processes text that appears broken. Leaves normal text alone; it won't mangle code.",
  },
  {
    title: 'Structure Aware',
    description:
      'Preserves intentional structure: paragraphs, bullet points, numbered lists, code blocks.',
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
    title: 'Ghost indentation',
    description: 'Invisible leading spaces that throw off alignment.',
  },
  {
    title: 'Hard line breaks',
    description: 'Sentences broken mid-word due to terminal wrapping.',
  },
  {
    title: 'Formatting artifacts',
    description: 'Weird spacing from fixed-width terminal display.',
  },
  {
    title: 'Broken lists',
    description: 'Bullet points and numbered lists with mangled continuations.',
  },
];

export default function SmartTrimPage() {
  return (
    <AtelierShell>
      <JsonLd data={softwareAppSchema(APP_DATA)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'SmartTrim', url: '/apps/smarttrim' },
        ])}
      />

      <AtelierAppHero
        category="08 / Utility"
        description="Lightweight macOS menu bar utility that automatically fixes formatting issues in clipboard text. Runs silently in the background and cleans up text when you copy-paste between applications."
        idx="08"
        image="/smarttrim-dark.png"
        imageKind="shot"
        meta={[
          { label: 'Platform', value: 'macOS' },
          { label: 'Stack', value: 'Swift 6' },
          { label: 'Version', value: 'v1.0.0' },
        ]}
        name="SmartTrim"
        primaryCta={{
          label: 'Download',
          href: 'https://github.com/gmickel/SmartTrim/releases',
          external: true,
        }}
        secondaryCta={{
          label: 'View source',
          href: 'https://github.com/gmickel/SmartTrim',
          external: true,
        }}
        status="Released"
        tagline="Fix AI clipboard chaos."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Problem"
        lede="When text from AI coding assistants gets pasted into Slack, Notion, or email, it often comes out broken. Terminal formatting leaks into prose."
        title="AI text comes out mangled."
      >
        <AtelierFeatureGrid items={problems} />
        <p className="atelier-mono mt-10 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
          Terminal-based AI tools format text for fixed-width display, not
          prose.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / How it works"
        lede="Heuristics that detect malformed text without touching code blocks."
        title="Monitor, detect, clean."
      >
        <div className="atelier-body space-y-5 text-[1.02rem] text-[hsl(var(--ink))]/85 leading-[1.7]">
          <p>
            SmartTrim monitors the system clipboard. When it detects text that
            looks malformed (using heuristics like indentation patterns and
            mid-sentence line breaks), it cleans it up:
          </p>
          <ul className="space-y-3 border-[hsl(var(--ink))]/10 border-l pl-5">
            <li className="relative">
              <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
              Strips invisible leading whitespace.
            </li>
            <li className="relative">
              <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
              Rejoins lines that were broken mid-sentence.
            </li>
            <li className="relative">
              <span className="-left-[7px] absolute top-[0.65em] h-px w-3 bg-[hsl(var(--rust))]" />
              Preserves intentional structure (paragraphs, bullets, numbered
              lists).
            </li>
          </ul>
          <p>
            You can also trigger a manual clean with a customizable global
            hotkey (default: ⌘⇧.) or from the menu bar.
          </p>
        </div>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="03 / Features" title="What's in the box.">
        <AtelierFeatureGrid items={features} />
      </AtelierAppSection>

      <AtelierAppSection eyebrow="04 / Spec" title="Technical details.">
        <div className="grid gap-10 md:grid-cols-2">
          <AtelierSpecList items={techSpecs} />
          <div className="atelier-body space-y-4 text-[0.98rem] text-[hsl(var(--ink))]/80 leading-[1.65]">
            <p className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
              Who it's for
            </p>
            <p>
              Developers who use AI coding assistants daily and frequently copy
              text between their terminal and other applications.
            </p>
            <p>
              If you've ever pasted a Claude or ChatGPT response into Slack and
              wondered why it looks like garbage, this is for you.
            </p>
            <p className="atelier-mono pt-2 text-[11px] uppercase tracking-[0.14em]">
              <Link
                className="text-[hsl(var(--ink))] underline decoration-[0.5px] decoration-[hsl(var(--rust))] underline-offset-[3px] transition-colors hover:text-[hsl(var(--rust))]"
                href="/gmickel-bench"
              >
                Born from the gmickel bench →
              </Link>
            </p>
          </div>
        </div>
      </AtelierAppSection>
    </AtelierShell>
  );
}
