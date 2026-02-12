'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import DecryptedText from '@/components/ui/decrypted-text';

const tickerItems = [
  'AGENTIC SDLC ROLLED OUT TO 10+ TEAMS ACROSS PE PORTFOLIO COMPANIES IN EUROPE',
  '500+ ENGINEERS ENABLED ON AI-NATIVE SDLC — METHODOLOGY, TOOLING & PROCESS',
  '20+ YEARS SHIPPING SOFTWARE & PLATFORMS',
  "AI PROGRAM LEAD FOR SWITZERLAND'S LEADING CLINICAL INFORMATION SYSTEM (CIS)",
  'LEGALTECH CLM PLATFORM FOUNDED, FUNDED & TAKEN TO ACQUISITION STAGE',
  'LISTED TECHNICAL EXPERT (ITDR) FOR COMPLEX ICT & AI DISPUTES',
  'OPENAI RED-TEAMING NETWORK ALUMNUS ON MODEL SAFETY & ABUSE RESILIENCE',
  'OPEN-SOURCE AI TOOLING USED BY HUNDREDS OF DEVELOPERS WORLDWIDE',
  'HEALTHCARE, LEGAL, FINANCIAL & PUBLIC-SECTOR AI SYSTEMS DESIGNED TO WITHSTAND SCRUTINY',
] as const;

const focusTags = [
  'AGENTIC SDLC',
  'AI PLATFORMS & AGENTS',
  'TECHNICAL EXPERT',
] as const;

interface HeroProps {
  alertText?: string;
  mandatePeriodLabel: string;
  mandateSlotLabel: string;
}

export default function Hero({
  alertText,
  mandatePeriodLabel,
  mandateSlotLabel,
}: HeroProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const rotateX = useTransform(y, [0, dimensions.height || 900], [10, -10]);
  const rotateY = useTransform(x, [0, dimensions.width || 1440], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 py-20 md:px-20"
      id="console"
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: Content */}
        <div className="z-10 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div aria-hidden="true" className="h-px w-8 bg-primary" />
              <span className="font-mono text-primary text-xs uppercase tracking-widest">
                Mickel Tech / Agentic SDLC, Platforms & Technical Expertise
              </span>
            </div>
            <h1
              className="font-bold text-5xl text-white leading-tight tracking-tight md:text-7xl"
              id="hero-heading"
            >
              I design AI systems that{' '}
              <DecryptedText
                animateOn="view"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01█▓░▒"
                className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent"
                encryptedClassName="text-primary/60"
                maxIterations={15}
                sequential
                speed={40}
                text="actually work"
              />
              .
            </h1>
            <p className="max-w-lg text-muted-foreground text-xl leading-relaxed">
              I lead agentic software engineering rollouts for real teams —
              brownfield codebases, regulated industries, complex orgs. Not
              tooling demos. Full SDLC redesigns with methodology, process and
              tooling that stick, scale and show measurable results.
            </p>
          </div>

          <ul
            aria-label="Core services"
            className="space-y-2 border-white/10 border-l-2 pl-4 font-mono text-muted-foreground text-sm"
          >
            <li>
              • Agentic SDLC &amp; delivery: replace agile theatre with
              AI-native plan–build–test–run. Methodology, eval-driven gating and
              everything-as-code — rolled out to 10+ teams, 500+ engineers.
            </li>
            <li>
              • AI platforms &amp; agents: production systems with unified
              context, evals, observability and safety — not demos that stall as
              pilots.
            </li>
            <li>
              • Strategic advisory &amp; fractional CTO: board-level partner who
              owns the change across architecture, teams and vendors — not just
              a slide deck.
            </li>
            <li>
              • Independent expert (ITDR Switzerland): formal Technical Expert
              for AI/software disputes, due diligence and high-stakes decisions.
            </li>
          </ul>

          <p className="pt-3 font-mono text-muted-foreground text-xs">
            Gordon Mickel · Agentic SDLC &amp; Platform Architect
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="interactive inline-flex items-center justify-center bg-primary px-8 py-4 font-bold font-mono text-black text-sm tracking-wider transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              href="#contact"
            >
              [ BOOK A WORKING SESSION ]
            </a>
            <a
              className="interactive inline-flex items-center justify-center border border-white/20 px-8 py-4 font-mono text-sm text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              href="#expert"
            >
              VIEW EXPERT PROFILE
            </a>
          </div>

          {/* System Alert */}
          <aside
            aria-label="System diagnostic"
            className="mt-8 flex max-w-md gap-4 border border-alert/30 bg-alert/5 p-4 backdrop-blur-sm"
            role="note"
          >
            <AlertTriangle aria-hidden="true" className="shrink-0 text-alert" />
            <div className="space-y-1">
              <h2 className="font-bold font-mono text-alert text-xs tracking-widest">
                SYSTEM ALERT
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {alertText ||
                  'Diagnostic: Most AI roadmaps are built to impress, not to deliver. I stress-test yours against data, architecture and regulation before you commit serious time and capital.'}
              </p>
            </div>
          </aside>
        </div>

        {/* Right: Hologram Card */}
        <div
          aria-hidden="true"
          className="perspective-1000 hidden justify-center lg:flex"
        >
          <motion.div
            className="group relative h-[500px] w-[400px] border border-primary/30 bg-black/40 backdrop-blur-sm"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            {/* Card Glow */}
            <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 group-hover:bg-primary/10" />
            <div className="scanlines absolute inset-0 opacity-30" />

            {/* Corners */}
            <div className="absolute top-0 left-0 h-4 w-4 border-primary border-t border-l" />
            <div className="absolute top-0 right-0 h-4 w-4 border-primary border-t border-r" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-primary border-b border-l" />
            <div className="absolute right-0 bottom-0 h-4 w-4 border-primary border-r border-b" />

            {/* Content */}
            <div className="relative z-10 space-y-8 p-8 font-mono">
              <div className="flex items-center justify-between border-primary/20 border-b pb-4">
                <span className="text-primary text-xs">SYSTEM STATUS</span>
                <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
              </div>

              <div className="space-y-6 pb-20">
                <div className="space-y-1">
                  <div className="text-[10px] text-muted-foreground uppercase">
                    Role
                  </div>
                  <div className="text-lg text-white">
                    AGENTIC SDLC &amp; PLATFORM ARCHITECT
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] text-muted-foreground uppercase">
                    Current Status
                  </div>
                  <div className="text-lg text-success">ACTIVE</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] text-muted-foreground uppercase">
                    New Mandates
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-lg text-white">{mandateSlotLabel}</div>
                    <div className="text-muted-foreground text-xs">
                      {mandatePeriodLabel}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 bottom-8 left-8">
                <div className="mb-2 text-[10px] text-muted-foreground">
                  FOCUS PROTOCOLS
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span
                      className="border border-white/20 px-2 py-1 text-[10px] text-white/80"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Ticker */}
      <div
        aria-label="Key achievements ticker"
        className="absolute right-0 bottom-0 left-0 flex h-12 items-center overflow-hidden border-white/10 border-t bg-black/50 backdrop-blur-sm"
        role="marquee"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          className="flex gap-12 whitespace-nowrap px-4 font-mono text-muted-foreground text-xs"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
            duration: 50,
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...tickerItems, ...tickerItems].map((text, i) => (
            <span
              className="flex items-center gap-2"
              key={`ticker-${i}-${text}`}
            >
              <span aria-hidden="true" className="text-primary">
                +
              </span>{' '}
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
