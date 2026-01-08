'use client';

import { useEffect, useRef, useState } from 'react';

const STEP_MS = 1400;
const SEQUENCE_LENGTH = 12;

const researchAgents = [
  { name: 'repo-scout', icon: '🔍' },
  { name: 'practice-scout', icon: '💡' },
  { name: 'docs-scout', icon: '📚' },
];

type Tone = 'emerald' | 'cyan' | 'amber' | 'violet' | 'slate';

const toneClasses: Record<Tone, string> = {
  emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
  cyan: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-300',
  amber: 'border-amber-500/40 bg-amber-500/5 text-amber-300',
  violet: 'border-violet-500/30 bg-violet-500/5 text-violet-300',
  slate: 'border-white/10 bg-white/5 text-white/80',
};

const activeToneClasses: Record<Tone, string> = {
  emerald:
    'ring-1 ring-emerald-400/60 shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_18px_32px_-24px_rgba(16,185,129,0.45)]',
  cyan: 'ring-1 ring-cyan-400/60 shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_18px_32px_-24px_rgba(34,211,238,0.45)]',
  amber:
    'ring-1 ring-amber-400/60 shadow-[0_0_0_1px_rgba(251,191,36,0.4),0_18px_32px_-24px_rgba(251,191,36,0.45)]',
  violet:
    'ring-1 ring-violet-400/60 shadow-[0_0_0_1px_rgba(167,139,250,0.4),0_18px_32px_-24px_rgba(167,139,250,0.45)]',
  slate: 'ring-1 ring-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]',
};

type Stage = {
  title: string;
  detail: string;
  tone: Tone;
  dashed?: boolean;
  sequenceIndex: number;
};

type PlanItem =
  | ({ type: 'stage' } & Stage)
  | { type: 'scouts'; sequenceIndex: number };

const planTimeline: PlanItem[] = [
  {
    type: 'stage',
    title: 'Idea or short spec',
    detail: 'Prompt or doc → epic container',
    tone: 'slate',
    sequenceIndex: 0,
  },
  {
    type: 'stage',
    title: '/flow-next:interview',
    detail: 'Optional: 40+ deep questions',
    tone: 'amber',
    dashed: true,
    sequenceIndex: 1,
  },
  {
    type: 'stage',
    title: '/flow-next:plan',
    detail: 'Research + dependency-ordered tasks',
    tone: 'emerald',
    sequenceIndex: 2,
  },
  { type: 'scouts', sequenceIndex: 3 },
  {
    type: 'stage',
    title: 'gap-analyst',
    detail: 'Edge cases + missing reqs',
    tone: 'cyan',
    sequenceIndex: 4,
  },
  {
    type: 'stage',
    title: '.flow/specs/fn-1.md',
    detail: 'Writes epic + task graph',
    tone: 'emerald',
    sequenceIndex: 5,
  },
  {
    type: 'stage',
    title: '/flow-next:plan-review',
    detail: 'Optional rp-cli gate',
    tone: 'violet',
    sequenceIndex: 6,
  },
];

const workStages: Stage[] = [
  {
    title: '/flow-next:work fn-1',
    detail: 'Exec in dependency order',
    tone: 'cyan',
    sequenceIndex: 7,
  },
  {
    title: 'Re-anchor',
    detail: 'Read epic + task + git state',
    tone: 'amber',
    dashed: true,
    sequenceIndex: 8,
  },
  {
    title: 'flowctl done',
    detail: 'Summary + evidence',
    tone: 'emerald',
    sequenceIndex: 9,
  },
  {
    title: 'Next ready task',
    detail: 'Loop until empty',
    tone: 'emerald',
    sequenceIndex: 10,
  },
  {
    title: 'flowctl epic close fn-1',
    detail: 'Done',
    tone: 'emerald',
    sequenceIndex: 11,
  },
];

const taskLoop = [
  {
    title: 'Implement',
    detail: 'follow patterns',
    tone: 'emerald',
  },
  {
    title: 'Test',
    detail: 'verify acceptance',
    tone: 'emerald',
  },
  {
    title: 'Record',
    detail: 'flowctl done',
    tone: 'cyan',
  },
  {
    title: 'Review',
    detail: 'if rp-cli',
    tone: 'violet',
  },
] as const;

const loopExtras = [
  {
    title: 'Ralph Mode',
    detail: 'Plan + work loop (AFK)',
    tone: 'cyan',
    tag: 'autonomous',
  },
  {
    title: 'flowctl validate --all',
    detail: 'CI gate',
    tone: 'emerald',
    tag: 'ci-ready',
  },
  {
    title: 'rm -rf .flow/',
    detail: 'Clean uninstall',
    tone: 'emerald',
    tag: 'zero-deps',
  },
] as const;

function FlowStage({
  title,
  detail,
  tone,
  dashed,
  sequenceIndex,
  activeIndex,
}: Stage & { activeIndex: number }) {
  const isActive = activeIndex === sequenceIndex;

  return (
    <div
      className={`flow-stage relative overflow-hidden rounded-lg border p-3 ${toneClasses[tone]} ${
        dashed ? 'border-dashed' : ''
      } ${isActive ? activeToneClasses[tone] : ''}`}
      data-active={isActive ? 'true' : 'false'}
      data-tone={tone}
    >
      <div
        className={`flow-stage-title font-mono text-xs tracking-wide ${
          isActive ? 'text-white' : ''
        }`}
      >
        {title}
      </div>
      <div
        className={`flow-stage-detail mt-1 text-[11px] ${
          isActive ? 'text-white/70' : 'text-white/50'
        }`}
      >
        {detail}
      </div>
    </div>
  );
}

export function FlowNextSchematic() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    setActiveIndex(0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCE_LENGTH);
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [isVisible]);

  return (
    <div
      className="flow-anim relative overflow-hidden rounded-xl border border-white/10 bg-black/60 p-6 md:p-8"
      data-active={isVisible ? 'true' : 'false'}
      ref={ref}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(16,185,129,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-300 uppercase tracking-widest">
            Flow-Next in motion
          </span>
          <span className="text-white/40 text-xs">
            Plan → Work → Review → Done
          </span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] text-emerald-300 uppercase tracking-[0.3em]">
                Plan
              </p>
              <span className="text-[10px] text-white/40">epic-first</span>
            </div>

            {planTimeline.map((item) => {
              if (item.type === 'scouts') {
                return (
                  <div
                    className={`flow-stage relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3 ${
                      activeIndex === item.sequenceIndex
                        ? activeToneClasses.emerald
                        : ''
                    }`}
                    data-active={
                      activeIndex === item.sequenceIndex ? 'true' : 'false'
                    }
                    data-tone="emerald"
                    key={`scouts-${item.sequenceIndex}`}
                  >
                    <div
                      className={`flow-stage-title font-mono text-[10px] uppercase tracking-wide ${
                        activeIndex === item.sequenceIndex
                          ? 'text-white'
                          : 'text-white/60'
                      }`}
                    >
                      Parallel scouts
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {researchAgents.map((agent) => (
                        <div
                          className="rounded border border-white/10 bg-black/40 px-2 py-1 text-center"
                          key={agent.name}
                        >
                          <div className="text-sm">{agent.icon}</div>
                          <div className="mt-1 truncate font-mono text-[9px] text-white/70">
                            {agent.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <FlowStage
                  activeIndex={activeIndex}
                  dashed={item.dashed}
                  detail={item.detail}
                  key={item.title}
                  sequenceIndex={item.sequenceIndex}
                  title={item.title}
                  tone={item.tone}
                />
              );
            })}
          </div>

          <div className="hidden items-stretch justify-center lg:flex">
            <div className="relative flex w-12 justify-center overflow-hidden">
              <div className="flow-rail -translate-x-1/2 absolute inset-y-2 left-1/2 w-px" />
              {[0, 6, 12].map((delay) => (
                <div
                  className="flow-pulse"
                  data-anim="true"
                  key={delay}
                  style={{ ['--delay' as string]: `${delay}s` }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] text-cyan-300 uppercase tracking-[0.3em]">
                Work
              </p>
              <span className="text-[10px] text-white/40">looped</span>
            </div>

            {workStages.map((stage) => (
              <FlowStage
                activeIndex={activeIndex}
                dashed={stage.dashed}
                detail={stage.detail}
                key={stage.title}
                sequenceIndex={stage.sequenceIndex}
                title={stage.title}
                tone={stage.tone}
              />
            ))}

            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/60 uppercase tracking-wide">
                  Task loop
                </span>
                <span className="text-emerald-400 text-xs">↻</span>
              </div>
              <div className="mt-3 space-y-2">
                {taskLoop.map((task) => (
                  <div
                    className="flow-task relative flex items-center gap-3 rounded border border-white/10 bg-black/40 px-2 py-1.5"
                    data-tone={task.tone}
                    key={task.title}
                  >
                    <span className="text-[10px] text-white/60">●</span>
                    <div>
                      <span className="flow-task-title font-mono text-white text-xs">
                        {task.title}
                      </span>
                      <span className="ml-2 text-[10px] text-white/40">
                        {task.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-white/10 border-t pt-6">
          <div className="grid gap-3 md:grid-cols-3">
            {loopExtras.map((item) => (
              <div
                className={`rounded-lg border p-3 ${toneClasses[item.tone]}`}
                data-tone={item.tone}
                key={item.title}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs">{item.title}</span>
                  <span className="text-[10px] text-white/40 uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-white/50">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .flow-anim {
          --glow-emerald: rgba(16, 185, 129, 0.5);
          --glow-cyan: rgba(34, 211, 238, 0.45);
          --glow-amber: rgba(251, 191, 36, 0.45);
          --glow-violet: rgba(167, 139, 250, 0.45);
          --glow-slate: rgba(255, 255, 255, 0.25);
        }

        .flow-stage {
          transition: transform 400ms ease, filter 400ms ease;
        }

        .flow-stage::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 40%,
            var(--glow-color) 50%,
            rgba(255, 255, 255, 0.08) 60%,
            transparent 100%
          );
          opacity: 0;
          transform: translateX(-120%);
          pointer-events: none;
        }

        .flow-stage::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          border: 1px solid transparent;
          opacity: 0;
          box-shadow: 0 0 16px var(--glow-color);
          pointer-events: none;
          transition: opacity 300ms ease;
        }

        .flow-stage[data-active='true'] {
          transform: translateY(-2px);
          filter: saturate(1.15) brightness(1.08);
          border-color: var(--glow-color);
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06),
            transparent 70%
          );
          box-shadow: 0 0 0 1px var(--glow-color),
            0 16px 32px -24px var(--glow-color);
        }

        .flow-stage[data-active='true'] .flow-stage-title {
          color: rgba(255, 255, 255, 0.95);
        }

        .flow-stage[data-active='true'] .flow-stage-detail {
          color: rgba(255, 255, 255, 0.75);
        }

        .flow-stage[data-active='true']::before {
          opacity: 1;
        }

        .flow-stage[data-active='true']::after {
          opacity: 1;
          animation: stageSweep 1s ease;
        }

        .flow-task {
          transition: transform 300ms ease, filter 300ms ease;
        }

        .flow-task::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          opacity: 0;
          pointer-events: none;
          transition: opacity 250ms ease;
        }

        .flow-task[data-active='true'] {
          transform: translateY(-1px);
          filter: saturate(1.1) brightness(1.05);
          border-color: var(--glow-color);
          box-shadow: 0 0 0 1px var(--glow-color);
        }

        .flow-task[data-active='true']::after {
          opacity: 1;
        }

        .flow-stage[data-tone='emerald'],
        .flow-task[data-tone='emerald'] {
          --glow-color: var(--glow-emerald);
        }
        .flow-stage[data-tone='cyan'],
        .flow-task[data-tone='cyan'] {
          --glow-color: var(--glow-cyan);
        }
        .flow-stage[data-tone='amber'],
        .flow-task[data-tone='amber'] {
          --glow-color: var(--glow-amber);
        }
        .flow-stage[data-tone='violet'],
        .flow-task[data-tone='violet'] {
          --glow-color: var(--glow-violet);
        }
        .flow-stage[data-tone='slate'] {
          --glow-color: var(--glow-slate);
        }

        .flow-rail {
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(16, 185, 129, 0.35),
            transparent
          );
        }

        .flow-pulse {
          position: absolute;
          left: 50%;
          top: 10px;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.9);
          transform: translateX(-50%);
          filter: blur(0.2px);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.65);
          animation: pulseDown 10s linear infinite;
          animation-delay: var(--delay, 0s);
        }

        .flow-anim [data-anim='true'] {
          animation-play-state: paused;
        }

        .flow-anim[data-active='true'] [data-anim='true'] {
          animation-play-state: running;
        }

        @keyframes stageSweep {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          40% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }


        @keyframes pulseDown {
          0% {
            top: 10px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          70% {
            top: calc(100% - 18px);
            opacity: 0.8;
          }
          100% {
            top: calc(100% - 6px);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-anim [data-anim='true'] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
