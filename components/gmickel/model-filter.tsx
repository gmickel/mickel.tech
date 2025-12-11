'use client';

import { motion } from 'framer-motion';

import {
  getOrderedModels,
  MODEL_IDS,
  MODELS,
  type ModelId,
} from '@/lib/bench-models';
import { cn } from '@/lib/utils';

/** Format ISO date to terminal-style: "09 DEC" */
function formatBenchDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  return `${day} ${month}`;
}

interface ModelFilterProps {
  visibleModels: ModelId[];
  onToggle: (modelId: ModelId) => void;
  className?: string;
}

export function ModelFilter({
  visibleModels,
  onToggle,
  className,
}: ModelFilterProps) {
  const orderedIds = getOrderedModels(MODEL_IDS);
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <span className="mr-1 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
        Harness
      </span>
      {orderedIds.map((id) => {
        const m = MODELS[id];
        const isActive = visibleModels.includes(id);

        return (
          <button
            aria-pressed={isActive}
            className={cn(
              'group relative flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-all duration-200',
              isActive
                ? 'border-white/20 bg-white/5'
                : 'border-white/5 bg-transparent hover:border-white/10 hover:bg-white/[0.02]'
            )}
            key={id}
            onClick={() => onToggle(id)}
            type="button"
          >
            {/* Color indicator with glow */}
            <span className="relative flex-shrink-0">
              <span
                className={cn(
                  'block h-2.5 w-2.5 rounded-full transition-all duration-200',
                  isActive ? 'scale-100' : 'scale-75 opacity-40'
                )}
                style={{ backgroundColor: m.color }}
              />
              {isActive ? (
                <motion.span
                  animate={{ opacity: [0.5, 0.2, 0.5] }}
                  className="absolute inset-0 rounded-full blur-sm"
                  style={{ backgroundColor: m.color }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              ) : null}
            </span>

            {/* Harness / Model / Date stacked */}
            <span className="flex flex-col items-start leading-none">
              <span
                className={cn(
                  'font-mono text-[9px] uppercase tracking-wider transition-colors duration-200',
                  isActive ? 'text-white/50' : 'text-white/30'
                )}
              >
                {m.harness}{' '}
                <span className="opacity-60">{m.harnessVersion}</span>
              </span>
              <span
                className={cn(
                  'mt-0.5 font-mono text-[11px] transition-colors duration-200',
                  isActive ? 'text-white' : 'text-muted-foreground'
                )}
              >
                {m.model}
              </span>
              <span
                className={cn(
                  'mt-1 font-mono text-[8px] uppercase tracking-widest transition-colors duration-200',
                  isActive ? 'text-white/50' : 'text-white/25'
                )}
              >
                <span className="opacity-60">RAN:</span>{' '}
                {formatBenchDate(m.benchDate)}
              </span>
            </span>

            {/* Checkmark */}
            <span
              className={cn(
                'ml-1 text-[10px] transition-all duration-200',
                isActive
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-1 opacity-0'
              )}
              style={{ color: m.color }}
            >
              ✓
            </span>
          </button>
        );
      })}
    </div>
  );
}
