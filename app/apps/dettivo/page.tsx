import type { Metadata } from 'next';
import AtelierAppHero from '@/components/atelier/app-hero';
import AtelierAppSection, {
  AtelierFeatureGrid,
  AtelierSpecList,
} from '@/components/atelier/app-section';
import AtelierShell from '@/components/layout/atelier-shell';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { breadcrumbSchema, JsonLd, softwareAppSchema } from '@/lib/json-ld';

const APP_DATA = {
  name: 'Dettivo',
  description:
    'Local-first dictation and meeting capture for Mac. Menu-bar app, no bot joins your meetings, audio and transcripts stay on your machine, bundled CLI and MCP server for agents. One-time lifetime licence.',
  slug: 'dettivo',
  category: 'DesktopApplication',
};

export const metadata: Metadata = {
  title: 'Dettivo -- Local-first dictation and meetings for Mac',
  description:
    'Menu-bar Mac app. Dictate anywhere, capture meetings without a bot, CLI + MCP for agents. Audio and transcripts stay local. One-time licence, no subscription.',
  openGraph: {
    title: 'Dettivo · Mickel Tech',
    description:
      'Local-first dictation and bot-free meeting capture for Mac. Apple Silicon, one-time licence.',
    type: 'website',
    url: 'https://mickel.tech/apps/dettivo',
    siteName: 'Mickel Tech',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dettivo · Mickel Tech',
    description:
      'Dictation and meeting capture for Mac. Local-first. Bot-free. One-time licence.',
  },
  alternates: { canonical: 'https://mickel.tech/apps/dettivo' },
};

const problems = [
  {
    title: 'Subscription creep',
    description:
      'Superwhisper, Wispr Flow, Otter, Granola all rent you their app. Forever. Stop paying and lose your transcripts.',
  },
  {
    title: 'Meeting bots in the room',
    description:
      'A guest "Otter.ai" joins the call. Your counterparty sees it. Legal, clinical, exec conversations already uncomfortable.',
  },
  {
    title: 'Your audio on their servers',
    description:
      'Cloud-first means every word typed, every meeting recorded, round-trips through someone else infrastructure.',
  },
  {
    title: 'Generic polish',
    description:
      'Wrapper apps proxy your speech through GPT-4o with a generic prompt. Output reads like AI slop because it is.',
  },
];

const dictationFeatures = [
  {
    title: 'Speak anywhere',
    description:
      'Push-to-talk or toggle hotkey. Dictate into Slack, Mail, Notion, Google Docs, VS Code, Cursor, Claude Code. Direct keystroke insertion; clipboard fallback when the app refuses; five-second undo.',
  },
  {
    title: 'Raw + Enhanced, swap mid-stream',
    description:
      'Raw keeps every word. Enhanced polishes with a bespoke fine-tuned model that runs locally on MLX. No generic chat-model wrapper.',
  },
  {
    title: 'Language-aware profiles',
    description:
      'Per-language hotkeys, vocabulary, polish rules, and models. Auto-detect or pin. Custom dictionary applied pre-polish for names and jargon.',
  },
  {
    title: 'Secure-field safety',
    description:
      'Detects password fields and refuses to type into them. Pasteboard restored after clipboard fallback. No stray artifacts on cancel.',
  },
  {
    title: 'Quick Access recall',
    description:
      'Keyboard-first popup of the last transcripts. Arrow keys navigate, Return inserts polished, Command-Return inserts raw. Filter by mode or source app.',
  },
  {
    title: 'First-class for coding agents',
    description:
      'Tuned for VS Code, Cursor, Zed, JetBrains. Dictate directly into Claude Code or Codex CLIs with no extensions. Enhanced knows you are writing code.',
  },
];

const meetingFeatures = [
  {
    title: 'Core Audio + ScreenCaptureKit',
    description:
      'Core Audio tap primary on macOS 14+, ScreenCaptureKit fallback. Live health warnings before capture degrades, not after. Auto-retry across paths.',
  },
  {
    title: 'No bot joins the call',
    description:
      'Zoom, Meet, Teams, anything. Dettivo captures system audio from your Mac. Your counterparty sees nothing in the attendee list.',
  },
  {
    title: 'Recover interrupted meetings',
    description:
      'Live transcript checkpoint plus retained audio. An interrupted meeting is not a lost meeting; the provisional transcript survives and the final can be re-run.',
  },
  {
    title: 'On-device diarisation',
    description:
      'Speaker separation runs locally. Relabel names in the UI; suggestions are reused next time. Talk-time timeline and per-speaker share built in.',
  },
  {
    title: 'Canonical meeting folder',
    description:
      'Every meeting writes to a timestamped folder with transcript.md, notes.md, details.md, and the audio artifact. Works inside Obsidian vaults.',
  },
  {
    title: 'Full-text search across history',
    description:
      'SwiftData-backed persistent index. Filter by mode, app, provider; jump back to a moment; replay audio; re-transcribe with a different model.',
  },
];

const polishFeatures = [
  {
    title: 'Five presets + custom',
    description:
      'Casual, Formal, Professional, Technical, Creative. Custom presets with your own system prompt, rules, and model override.',
  },
  {
    title: 'App-aware context',
    description:
      'Reads the frontmost app bundle ID, your selection via the Accessibility API, optionally a single-frame screenshot. Context badge (Ready, Limited, Blocked) is always explicit.',
  },
  {
    title: 'Per-app profiles',
    description:
      'Slack tone different from Mail tone different from Git commit message. Override preset and rules per frontmost app.',
  },
  {
    title: 'Local by default, BYO cloud',
    description:
      'MLX polish runs locally on Apple Silicon. Optional OpenAI-compatible endpoint (OpenAI, Ollama, vLLM, LM Studio) for users who want it.',
  },
];

const notesFeatures = [
  {
    title: 'Summary + actions + decisions',
    description:
      'AI-generated summary, owner-tagged action items, decisions, blockers, and a ready-to-send follow-up draft. Every section editable in-place.',
  },
  {
    title: 'Analysis without stomping notes',
    description:
      'Rerun analysis when the transcript updates. Your edits stay. Copy and export precedence: live editor, then persisted notes, then generated analysis.',
  },
  {
    title: 'Post-meeting Q&A',
    description:
      'Ask this one meeting a question. Or ask across every meeting in history, with inline [S1], [S2] citations that jump back to the source transcript.',
  },
  {
    title: 'Agenda templates + prep',
    description:
      'Standard, Project Sync, Client/Sales, Standup. Prep agenda pulls prior-meeting highlights and open action items. Timer overlay for 15/30/45/60 minute blocks.',
  },
];

const agentSurface = [
  {
    label: 'CLI',
    value:
      'dettivo status · dictation · meeting · transcripts · import · export',
  },
  {
    label: 'REST',
    value: '127.0.0.1:45831/v1, bearer auth, streaming import/export',
  },
  {
    label: 'MCP',
    value:
      'dettivo mcp serve (stdio, MCP 1.0). Claude Desktop, Cursor, Codex configs',
  },
  {
    label: 'IPC transport',
    value: 'Unix socket, mode 0600, peer-UID auth, hardened token mode',
  },
  {
    label: 'Output formats',
    value: 'plain · markdown · json (SRT/VTT on export)',
  },
  {
    label: 'Surface coverage',
    value: 'Everything the app can do, CLI and MCP can too. Single contract',
  },
];

const automationsFeatures = [
  {
    title: 'Dictation macros',
    description:
      'Trigger phrases map to actions: insert text, run an app command, execute a shell command. Always-confirm, first-use-confirm, or opt-in auto-allow. Deny by default.',
  },
  {
    title: 'Meeting recap automation',
    description:
      'On analysis complete, draft a recap. Three delivery modes: draft-only (nothing leaves your Mac), Mail.app auto-compose (no send), or OAuth send via Gmail or Microsoft Graph.',
  },
  {
    title: 'Weekly digest',
    description:
      'Scheduled rollup of open action items. Same delivery modes. Credentials in Keychain, revocable. Idempotent triggers, no double-sends.',
  },
  {
    title: 'Calendar-aware prep',
    description:
      'EventKit reads your local calendar. Events never leave your Mac. Upcoming-meeting prompt card with agenda seeded from the event.',
  },
];

const privacyPillars = [
  {
    title: 'Local by default',
    description:
      'Audio, transcripts, polish, and analysis land on your disk. Licence activation and Sparkle update checks are the only mandatory network calls.',
  },
  {
    title: 'Everything via MLX',
    description:
      'Local inference runs on MLX to use the Neural Engine and unified memory. No Python subprocess, no ONNX shim, no Electron.',
  },
  {
    title: 'Bespoke polish model',
    description:
      'The default polish model is fine-tuned for cleaning spoken input, not a general-purpose chat model trying to guess what you meant.',
  },
  {
    title: 'Full storage transparency',
    description:
      'Every artifact path shown in Settings. Audio retention per session. Day-based auto-delete policies. No telemetry, no analytics, no background uploads.',
  },
];

const pricingTiers = [
  { label: "Founders' (first 500)", value: 'USD 29 · one-time · lifetime' },
  { label: 'Standard', value: 'USD 45 · one-time · lifetime' },
  { label: 'Active Macs', value: '3 per licence · revoke any time' },
  { label: 'Updates', value: 'Lifetime · Sparkle-signed' },
  { label: 'Refund window', value: '14 days · licence revoked on refund' },
  { label: 'Subscription', value: 'None · ever' },
];

const specs = [
  { label: 'Platform', value: 'macOS 14 Sonoma or newer' },
  { label: 'Architecture', value: 'Apple Silicon (M1 and newer)' },
  { label: 'Frameworks', value: 'Swift 6 · SwiftUI · AppKit · SwiftData' },
  {
    label: 'STT engines',
    value: 'WhisperKit, Parakeet; optional cloud STT (BYOK)',
  },
  {
    label: 'LLM runtime',
    value: 'MLX local; optional OpenAI-compatible endpoint',
  },
  {
    label: 'Audio',
    value: 'Core Audio tap primary · ScreenCaptureKit fallback',
  },
  { label: 'Updates', value: 'Sparkle 2.8 · signed artifacts' },
  { label: 'Agent surface', value: 'CLI · loopback REST · MCP (stdio)' },
];

export default function DettivoPage() {
  return (
    <AtelierShell>
      <JsonLd
        data={softwareAppSchema({
          ...APP_DATA,
          operatingSystem: 'macOS',
          programmingLanguage: 'Swift',
          offer: { price: '29', currency: 'USD' },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Apps', url: '/apps' },
          { name: 'Dettivo', url: '/apps/dettivo' },
        ])}
      />

      <AtelierAppHero
        category="03 / Voice + meetings"
        description="Menu-bar app for Mac. Dictate into any window with a hotkey. Capture a meeting without inviting a bot. Audio, transcripts, polish, and analysis stay on your Mac by default. Bundled CLI, loopback REST, and an MCP server so your agents drive dictation, read transcripts, and kick off meetings. One-time lifetime licence, no subscription."
        idx="03"
        image="/dettivo/logo.svg"
        imageKind="logo"
        meta={[
          { label: 'Stage', value: 'Alpha testing' },
          { label: 'Platform', value: 'macOS 14+ · Apple Silicon' },
          {
            label: 'Licence',
            value: 'USD 29 launch · USD 45 after · one-time',
          },
        ]}
        name="Dettivo"
        primaryCta={{
          label: 'Request alpha access',
          href: 'https://dettivo.com',
          external: true,
        }}
        status="Coming 2026-04-26"
        tagline="Local-first dictation and meeting capture for Mac."
      />

      <AtelierAppSection
        accent
        eyebrow="01 / Problem"
        lede="The dictation category is loud. Most of it ignores the two things power users actually want: ownership and privacy."
        title="Rent-a-voice, cloud by default."
      >
        <AtelierFeatureGrid items={problems} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="02 / Dictate anywhere"
        lede="Menu-bar app that lives on your Mac. Hotkey, speak, text lands where your cursor is."
        title="Speak into any window."
      >
        <AtelierFeatureGrid cols={2} items={dictationFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="03 / Meetings"
        lede="Capture the whole meeting from your side. No guest joins the call, nothing posts to anyone else infrastructure."
        title="Meet without a bot."
      >
        <AtelierFeatureGrid cols={2} items={meetingFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="04 / Interface"
        lede="Dictation dashboard, meetings workspace, polish settings, hotkey configuration. Mac-native, no Electron."
        title="Inside Dettivo."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <figure>
            <ImageLightbox
              alt="Dettivo dictation dashboard"
              caption="Dictation dashboard · history, recording state, mode"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={1075}
              src="/dettivo/home.png"
              width={1562}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Dictation · Main window
            </figcaption>
          </figure>
          <figure>
            <ImageLightbox
              alt="Dettivo meetings workspace"
              caption="Meetings workspace · transcript, analysis, notes"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={1140}
              src="/dettivo/meetings.png"
              width={1994}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Meetings · Transcript + analysis
            </figcaption>
          </figure>
          <figure>
            <ImageLightbox
              alt="Dettivo polish settings"
              caption="Polish settings · preset, rules, provider, sandbox"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={1315}
              src="/dettivo/polish.png"
              width={1153}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Settings · Polish
            </figcaption>
          </figure>
          <figure>
            <ImageLightbox
              alt="Dettivo hotkey configuration"
              caption="Hotkeys · push-to-talk, toggle, cancel, per-language"
              className="overflow-hidden border border-[hsl(var(--ink))]/10"
              height={947}
              src="/dettivo/hotkeys.png"
              width={1374}
            />
            <figcaption className="atelier-mono mt-3 text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]">
              Settings · Hotkeys
            </figcaption>
          </figure>
        </div>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="05 / Enhanced mode"
        lede="Polish is the difference between raw dictation and text you actually send. Dettivo does it with a bespoke model, context, and your app in mind."
        title="More than dictation. A writing layer."
      >
        <AtelierFeatureGrid items={polishFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="06 / Notes + analysis"
        lede="Meeting transcripts are the raw material. The output is what you can do with them after."
        title="What the meeting left behind."
      >
        <AtelierFeatureGrid items={notesFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="07 / Agent surface"
        lede="Same IPC contract, three front doors. Everything the app can do, the CLI can. And REST. And MCP."
        title="Your agents drive it."
      >
        <AtelierSpecList items={agentSurface} />
        <p className="atelier-body mt-6 max-w-[62ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
          100% localhost. No public API to wait on, no vendor cloud dependency
          on the developer surface. Your scripts read transcripts, your agents
          start meetings, your team never asks whether a third party has the
          recording.
        </p>
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="08 / Automations"
        lede="Trigger phrases, recap emails, weekly digests, calendar prep. All opt-in, all local until you explicitly allow otherwise."
        title="Automations that stay yours."
      >
        <AtelierFeatureGrid items={automationsFeatures} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="09 / Privacy"
        lede="Privacy as an architecture choice, not a marketing bullet. Built into where the audio lives, what runs, and what ships over the wire."
        title="Private by default."
      >
        <AtelierFeatureGrid items={privacyPillars} />
      </AtelierAppSection>

      <AtelierAppSection
        eyebrow="10 / Pricing"
        lede="Pay once. Three active Macs. Lifetime updates. No subscription, ever. Refund within 14 days if it isn't for you."
        title="One licence. Three Macs. Forever."
      >
        <AtelierSpecList items={pricingTiers} />
        <p className="atelier-body mt-6 max-w-[62ch] text-[0.95rem] text-[hsl(var(--ink))]/72 leading-[1.6]">
          Most of the dictation category is subscription. Dettivo is not.
          Founders' pricing is USD 29 for the first 500 buyers; standard is USD
          45. Either way, lifetime. Same licence signs every Sparkle update, so
          you never install a build that wasn't signed by me.
        </p>
      </AtelierAppSection>

      <AtelierAppSection eyebrow="11 / Spec" title="Operational details.">
        <AtelierSpecList items={specs} />
      </AtelierAppSection>
    </AtelierShell>
  );
}
