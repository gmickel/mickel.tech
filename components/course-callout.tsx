export default function CourseCallout() {
  return (
    <a
      className="group relative flex items-center justify-center gap-4 border-primary/30 border-y bg-primary/[0.06] px-6 py-5 transition-colors hover:bg-primary/[0.12]"
      href="/#agentic-sdlc"
    >
      {/* Glow line top */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <span className="relative flex h-3 w-3 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
      </span>

      <span className="font-mono text-white/70 text-xs uppercase tracking-wider sm:text-sm">
        <span className="font-bold text-primary">New</span>
        {' — Agentic SDLC Video Course coming soon'}
      </span>

      <span className="shrink-0 border border-primary/40 bg-primary/10 px-3 py-1 font-bold font-mono text-primary text-xs uppercase tracking-wider transition-all group-hover:bg-primary group-hover:text-black sm:text-sm">
        Get early access →
      </span>

      {/* Glow line bottom */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </a>
  );
}
