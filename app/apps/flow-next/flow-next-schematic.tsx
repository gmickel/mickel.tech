'use client';

import { useEffect, useRef, useState } from 'react';

const researchAgents = [
  { name: 'repo-scout', icon: '🔍' },
  { name: 'practice-scout', icon: '💡' },
  { name: 'docs-scout', icon: '📚' },
];

export function FlowNextSchematic() {
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
            'linear-gradient(to right, rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Flowing gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent motion-safe:animate-pulse"
      />

      <div className="relative">
        {/* Main flow container */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-4">
          {/* LEFT: /flow-next:plan */}
          <div
            className={`flex-1 space-y-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            {/* Optional interview step */}
            <div className="rounded-lg border border-amber-500/40 border-dashed bg-amber-500/5 p-3">
              <div className="mb-1 font-mono text-[9px] text-amber-400/80 uppercase tracking-wide">
                Optional First
              </div>
              <code className="font-mono text-sm">
                <span className="text-amber-400">/flow-next:interview</span>{' '}
                <span className="text-muted-foreground">fn-1</span>
              </code>
              <div className="mt-1 text-[10px] text-muted-foreground">
                40+ deep questions → refined spec
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <div className="flex h-5 w-5 items-center justify-center text-muted-foreground/50 text-xs">
                ↓
              </div>
            </div>

            {/* Command */}
            <div className="overflow-hidden rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3">
              <code className="font-mono text-sm">
                <span className="text-emerald-400">/flow-next:plan</span>{' '}
                <span className="text-muted-foreground">Add contact form</span>
              </code>
            </div>

            {/* Parallel research */}
            <div className="grid grid-cols-3 gap-2">
              {researchAgents.map((agent, i) => (
                <div
                  className={`group rounded-lg border border-white/10 bg-white/5 p-2 text-center transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
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
              style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
            >
              <code className="font-mono text-cyan-400 text-xs">
                gap-analyst
              </code>
              <div className="mt-2 space-y-1 text-[10px] text-muted-foreground">
                <div>→ Edge cases identified</div>
                <div>→ User flow gaps found</div>
              </div>
            </div>

            {/* Output to .flow/ */}
            <div
              className={`rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-center transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '550ms' : '0ms' }}
            >
              <code className="font-mono text-emerald-400 text-xs">
                .flow/specs/fn-1.md
              </code>
              <div className="mt-1 text-[10px] text-muted-foreground">
                + tasks with dependencies
              </div>
            </div>
          </div>

          {/* CENTER: Arrow connector */}
          <div
            className={`flex items-center justify-center transition-all duration-500 lg:self-center ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
            style={{ transitionDelay: isVisible ? '650ms' : '0ms' }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 lg:h-12 lg:w-12">
              <span className="hidden text-emerald-400 text-xl lg:block">→</span>
              <span className="text-emerald-400 text-xl lg:hidden">↓</span>
            </div>
          </div>

          {/* RIGHT: /flow-next:work */}
          <div
            className={`flex-1 space-y-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: isVisible ? '750ms' : '0ms' }}
          >
            {/* Command */}
            <div className="overflow-hidden rounded-lg border border-primary/30 bg-primary/5 p-3">
              <code className="font-mono text-sm">
                <span className="text-primary">/flow-next:work</span>{' '}
                <span className="text-muted-foreground">fn-1</span>
              </code>
            </div>

            {/* Re-anchor highlight */}
            <div
              className={`rounded-lg border border-amber-500/40 border-dashed bg-amber-500/5 p-3 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '850ms' : '0ms' }}
            >
              <div className="mb-1 font-mono text-[9px] text-amber-400/80 uppercase tracking-wide">
                Before EVERY task
              </div>
              <div className="font-mono text-amber-400 text-xs">
                🎯 Re-anchor
              </div>
              <div className="mt-1 text-[10px] text-muted-foreground">
                Re-read epic + task specs + git state
              </div>
            </div>

            {/* Task loop */}
            <div className="space-y-2">
              {[
                { step: 'Implement', desc: 'follow patterns', done: true },
                { step: 'Test', desc: 'verify acceptance', done: true },
                { step: 'Record', desc: 'flowctl done', done: true },
                { step: 'Review', desc: 'if rp-cli', done: false },
              ].map((item, i) => (
                <div
                  className={`flex items-center gap-3 rounded border border-white/10 bg-white/5 p-2 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                  key={item.step}
                  style={{
                    transitionDelay: isVisible ? `${950 + i * 100}ms` : '0ms',
                  }}
                >
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${item.done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-primary/20 text-primary motion-safe:animate-pulse'}`}
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

            {/* Loop indicator */}
            <div
              className={`flex items-center justify-center gap-2 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '1300ms' : '0ms' }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <span className="font-mono text-[10px] text-emerald-400">
                loop → next ready task
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-500/30 to-transparent" />
            </div>

            {/* Epic done */}
            <div
              className={`rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-center transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isVisible ? '1400ms' : '0ms' }}
            >
              <div className="text-center font-mono text-emerald-400 text-xs">
                flowctl epic close fn-1 ✓
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Key differentiators */}
        <div
          className={`mt-8 border-white/10 border-t pt-6 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: isVisible ? '1500ms' : '0ms' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <span className="text-[10px]">📦</span>
              <span className="font-mono text-[10px] text-emerald-400">
                Zero deps
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <span className="text-[10px]">👥</span>
              <span className="font-mono text-[10px] text-emerald-400">
                Multi-user
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <span className="text-[10px]">🧹</span>
              <span className="font-mono text-[10px] text-emerald-400">
                rm -rf .flow/ = gone
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
