'use client';

import { useEffect, useRef } from 'react';

export default function Quote() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let animationFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!(ctx && canvas)) {
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      const centerY = canvas.height / 2;
      ctx.moveTo(0, centerY);

      for (let x = 0; x < canvas.width; x++) {
        // Combine multiple sine waves for a "voice" look
        const amplitude = canvas.height / 4;
        const y =
          centerY +
          Math.sin(x * 0.01 + time) * amplitude * 0.5 +
          Math.sin(x * 0.03 - time * 2) * amplitude * 0.25 +
          Math.sin(x * 0.1 + time * 0.5) * amplitude * 0.1; // Noise

        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = '#32E673'; // Green
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Grid overlay
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.fillRect(i, 0, 1, canvas.height);
      }

      time += 0.05;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="border-white/10 border-y bg-black">
      <div className="grid min-h-[300px] grid-cols-1 md:grid-cols-2">
        {/* Intercepted testimonial */}
        <div className="flex flex-col justify-center space-y-6 border-white/10 border-b p-12 md:border-r md:border-b-0 md:p-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Signal intercept
            </span>
            <span className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Verified source
            </span>
          </div>
          <blockquote className="font-medium text-2xl text-white leading-tight md:text-3xl">
            &ldquo;I&apos;ve found it generating production-quality code. Far
            far better than any of the other tools I&apos;ve tried so
            far.&rdquo;
            <span className="mt-2 block font-mono text-muted-foreground text-sm">
              on Flow-Next
            </span>
          </blockquote>
          <div className="space-y-1">
            <div className="font-mono text-sm text-white">— Claire Novotny</div>
            <a
              className="font-mono text-primary text-xs transition-colors hover:text-white"
              href="https://x.com/clairernovotny/status/1886200988044026046"
              rel="noopener noreferrer"
              target="_blank"
            >
              @clairernovotny · .NET Foundation / Microsoft MVP
            </a>
          </div>
        </div>

        {/* Waveform */}
        <div className="relative min-h-[200px] overflow-hidden bg-[#0a0a0a]">
          <canvas className="h-full w-full opacity-60" ref={canvasRef} />
          {/* Signal metadata overlay */}
          <div className="absolute top-4 left-4 space-y-1 font-mono text-[10px] text-white/30">
            <div>SRC: X/TWITTER</div>
            <div>FREQ: PUBLIC</div>
            <div>AUTH: EXTERNAL</div>
          </div>
          <div className="absolute right-4 bottom-4 animate-pulse font-mono text-[10px] text-primary">
            SIGNAL: LOCKED ●
          </div>
        </div>
      </div>
    </section>
  );
}
