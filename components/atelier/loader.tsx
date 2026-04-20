'use client';

import { motion } from 'motion/react';

/**
 * Atelier loading screen — editorial "press-setting" plate.
 * Paper cream, Newsreader wordmark, rust rule drawing in, mono status.
 * Respects prefers-reduced-motion via tailwind motion-safe.
 */
export default function AtelierLoader() {
  const letters = [
    { id: 'ch-01', ch: 'M' },
    { id: 'ch-02', ch: 'i' },
    { id: 'ch-03', ch: 'c' },
    { id: 'ch-04', ch: 'k' },
    { id: 'ch-05', ch: 'e' },
    { id: 'ch-06', ch: 'l' },
    { id: 'ch-07', ch: '.' },
    { id: 'ch-08', ch: 't' },
    { id: 'ch-09', ch: 'e' },
    { id: 'ch-10', ch: 'c' },
    { id: 'ch-11', ch: 'h' },
  ];

  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="atelier-surface atelier-paper relative flex min-h-screen items-center justify-center overflow-hidden"
      role="status"
    >
      {/* Faint paper grain + vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,hsl(var(--ink)/0.05)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(hsl(var(--ink))_1px,transparent_1px)] [background-size:3px_3px]"
      />

      {/* Top register */}
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute top-6 right-6 left-6 flex items-center justify-between md:top-10 md:right-10 md:left-10"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="atelier-eyebrow text-[hsl(var(--paper-muted))]">
          Setting the press
        </span>
        <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
          <span className="text-[hsl(var(--rust))]">●</span>{' '}
          <span>loading</span>
        </span>
      </motion.div>

      {/* Center plate */}
      <div className="relative flex flex-col items-center">
        {/* Eyebrow above wordmark */}
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          className="atelier-eyebrow mb-6 text-[hsl(var(--rust))]"
          initial={{ y: 6, opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          00 / Masthead
        </motion.p>

        {/* Wordmark with per-letter ink-settle */}
        <h1
          aria-label="Mickel.tech"
          className="atelier-display flex items-baseline font-medium text-[clamp(2.75rem,1.8rem+4vw,5.5rem)] text-[hsl(var(--ink))] leading-none tracking-[-0.02em]"
        >
          {letters.map(({ id, ch }, i) => (
            <motion.span
              animate={{ y: 0, opacity: 1 }}
              className={
                ch === '.'
                  ? 'text-[hsl(var(--rust))]'
                  : 'text-[hsl(var(--ink))]'
              }
              initial={{ y: 14, opacity: 0 }}
              key={id}
              transition={{
                duration: 0.55,
                delay: 0.15 + i * 0.04,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        {/* Rule drawing in — layered rust + ink */}
        <div className="relative mt-8 h-[1px] w-[min(420px,60vw)]">
          <motion.span
            animate={{ scaleX: 1 }}
            aria-hidden="true"
            className="absolute inset-0 origin-left bg-[hsl(var(--ink))]/20"
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <motion.span
            animate={{ scaleX: 1 }}
            aria-hidden="true"
            className="absolute top-0 left-0 h-full w-1/3 origin-left bg-[hsl(var(--rust))]"
            initial={{ scaleX: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.8,
              ease: [0.2, 0.7, 0.2, 1],
            }}
          />
        </div>

        {/* Status line */}
        <motion.div
          animate={{ opacity: 1 }}
          className="atelier-mono mt-6 flex items-center gap-2 text-[11px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.14em]"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 1.05 }}
        >
          <span>Plate</span>
          <AnimatedDots />
          <span className="text-[hsl(var(--ink))]/60">Ink settling</span>
        </motion.div>
      </div>

      {/* Bottom register */}
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute right-6 bottom-6 left-6 flex items-center justify-between md:right-10 md:bottom-10 md:left-10"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
          Binningen · CH
        </span>
        <span className="atelier-mono text-[10.5px] text-[hsl(var(--paper-muted))] uppercase tracking-[0.16em]">
          DE / EN
        </span>
      </motion.div>

      <span className="sr-only">Loading page content.</span>
    </div>
  );
}

function AnimatedDots() {
  return (
    <span aria-hidden="true" className="inline-flex items-center gap-0.5">
      {['dot-a', 'dot-b', 'dot-c'].map((id, i) => (
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25] }}
          className="inline-block h-[3px] w-[3px] rounded-full bg-[hsl(var(--rust))]"
          key={id}
          transition={{
            duration: 1.1,
            delay: i * 0.15,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
    </span>
  );
}
