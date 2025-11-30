'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [probValue, setProbValue] = useState<string>('--');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Generate random value only on client after mount to avoid hydration mismatch
  useEffect(() => {
    setProbValue(`${(Math.random() * 20 + 80).toFixed(0)}%`);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check what we are hovering (excluding links)
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'button, input, [role="button"], .interactive'
      );

      if (isInteractive) {
        const tagName = isInteractive.tagName.toLowerCase();
        if (tagName === 'button') {
          setHoveredType('ACTION');
        } else {
          setHoveredType('NODE');
        }
      } else {
        setHoveredType(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Base Cursor */}
      <div
        className={`relative transition-all duration-300 ${
          hoveredType ? 'scale-150' : 'scale-100'
        }`}
      >
        {/* Center Dot */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />

        {/* Crosshair Ring */}
        <div
          className={`-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-8 w-8 rounded-full border border-primary/50 transition-all duration-300 ${
            hoveredType ? 'rotate-90 border-dashed opacity-100' : 'opacity-50'
          }`}
        />

        {/* HUD Info */}
        {hoveredType && (
          <motion.div
            animate={{ opacity: 1, x: 30 }}
            className="absolute top-0 left-0 w-32 border-primary border-l bg-black/80 p-1 font-mono text-[10px] text-primary"
            exit={{ opacity: 0, x: 20 }}
            initial={{ opacity: 0, x: 20 }}
          >
            <div className="flex justify-between">
              <span className="text-muted-foreground">TARGET:</span>
              <span>{hoveredType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">PROB:</span>
              <span>{probValue}</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
