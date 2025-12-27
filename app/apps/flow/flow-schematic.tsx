'use client';

import { useEffect, useRef, useState } from 'react';

const agents = [
  { name: 'repo-scout', stats: '12 uses · 46.7k', icon: '🔍' },
  { name: 'practice-scout', stats: '5 uses · 21.2k', icon: '💡' },
  { name: 'docs-scout', stats: '15 uses · 29.5k', icon: '📚' },
];

export function FlowSchematic() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 p-6 md:p-8"
      ref={ref}
    >
      {/* Animated grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Flowing gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent motion-safe:animate-pulse"
      />

      <div className="relative">
        {/* Main flow container - horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-4">
          {/* LEFT: /flow:plan */}
          <div
            className={`flex-1 space-y-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            {/* Command */}
            <div className="overflow-hidden rounded-lg border border-violet-500/30 bg-violet-500/5 p-3">
              <code className="font-mono text-sm">
                <span className="text-violet-400">/flow:plan</span>{' '}
                <span className="text-muted-foreground">Add OAuth login</span>
              </code>
            </div>

            {/* Parallel agents */}
            <div className="grid grid-cols-3 gap-2">
              {agents.map((agent, i) => (
                <div
                  className={`group rounded-lg border border-white/10 bg-white/5 p-2 text-center transition-all duration-500 hover:border-violet-500/40 hover:bg-violet-500/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  key={agent.name}
                  style={{
                    transitionDelay: isVisible ? `${150 + i * 100}ms` : '0ms',
                  }}
                >
                  <div className="mb-1 text-lg motion-safe:group-hover:animate-bounce">
                    {agent.icon}
                  </div>
                  <div className="truncate font-mono text-[10px] text-white">
                    {agent.name}
                  </div>
                  <div className="truncate font-mono text-[9px] text-muted-foreground">
                    {agent.stats}
                  </div>
                </div>
              ))}
            </div>

            {/* Merge arrow */}
            <div className="flex justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-muted-foreground text-xs">
                ↓
              </div>
            </div>

            {/* Gap analyst */}
            <div
              className={`rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-3 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}
            >
              <div className="flex items-center justify-between">
                <code className="font-mono text-cyan-400 text-xs">
                  gap-analyst
                </code>
                <span className="font-mono text-[9px] text-muted-foreground">
                  15 uses · 56.6k · 1m 46s
                </span>
              </div>
              <div className="mt-2 space-y-1 text-[10px] text-muted-foreground">
                <div>→ Edge cases identified</div>
                <div>→ User flow gaps found</div>
              </div>
            </div>

            {/* Output */}
            <div
              className={`rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-center transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
            >
              <code className="font-mono text-emerald-400 text-xs">
                plans/oauth.md
              </code>
              <span className="mx-2 text-muted-foreground">or</span>
              <code className="font-mono text-violet-400 text-xs">
                Beads epic
              </code>
            </div>
          </div>

          {/* CENTER: Arrow connector */}
          <div
            className={`flex items-center justify-center transition-all duration-500 lg:self-center ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
            style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 lg:h-12 lg:w-12">
              <span className="hidden text-violet-400 text-xl lg:block">→</span>
              <span className="text-violet-400 text-xl lg:hidden">↓</span>
            </div>
          </div>

          {/* RIGHT: /flow:work */}
          <div
            className={`flex-1 space-y-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
          >
            {/* Command */}
            <div className="overflow-hidden rounded-lg border border-primary/30 bg-primary/5 p-3">
              <code className="font-mono text-sm">
                <span className="text-primary">/flow:work</span>{' '}
                <span className="text-muted-foreground">plans/oauth.md</span>
              </code>
            </div>

            {/* Task loop */}
            <div className="space-y-2">
              {[
                { step: 'Setup', desc: 'branch / worktree', done: true },
                {
                  step: 'Loop',
                  desc: 're-read → implement → test',
                  done: true,
                },
                { step: 'Quality', desc: 'tests + lint', done: true },
                { step: 'Ship', desc: 'commit → PR', done: false },
              ].map((item, i) => (
                <div
                  className={`flex items-center gap-3 rounded border border-white/10 bg-white/5 p-2 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                  key={item.step}
                  style={{
                    transitionDelay: isVisible ? `${900 + i * 100}ms` : '0ms',
                  }}
                >
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${item.done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-violet-500/20 text-violet-400 motion-safe:animate-pulse'}`}
                  >
                    {item.done ? '✓' : '◌'}
                  </div>
                  <div>
                    <span className="font-mono text-white text-xs">
                      {item.step}
                    </span>
                    <span className="ml-2 text-[10px] text-muted-foreground">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Definition of Done */}
            <div
              className={`rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '1300ms' : '0ms' }}
            >
              <div className="text-center font-mono text-emerald-400 text-xs">
                Definition of Done ✓
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Review loop */}
        <div
          className={`mt-8 border-white/10 border-t pt-6 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: isVisible ? '1400ms' : '0ms' }}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-2">
              <span className="font-mono text-violet-400 text-xs">
                /flow:plan-review
              </span>
              <span className="text-muted-foreground">↺</span>
            </div>

            <div className="hidden h-px w-12 bg-gradient-to-r from-violet-500/50 to-primary/50 sm:block" />
            <div className="h-4 w-px bg-gradient-to-b from-violet-500/50 to-primary/50 sm:hidden" />

            <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="font-mono text-primary text-xs">
                /flow:impl-review
              </span>
              <span className="text-muted-foreground">↺</span>
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground tracking-wide">
            CARMACK-LEVEL REVIEWS AT EVERY STEP
          </p>
        </div>
      </div>
    </div>
  );
}
