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
        {/* Quote */}
        <div className="flex flex-col justify-center space-y-6 border-white/10 border-b p-12 md:border-r md:border-b-0 md:p-20">
          <h3 className="mb-4 font-mono text-muted-foreground text-xs">
            FIELD RECORDING
          </h3>
          <blockquote className="font-medium text-2xl text-white leading-tight md:text-3xl">
            &quot;People trust me with high-stakes AI problems because I turn
            messy ideas into precise decisions and agentic systems that
            don&apos;t die as pilots— they work in production and stand up to
            regulators.&quot;
          </blockquote>
          <div className="font-mono text-muted-foreground text-sm">
            — Gordon Mickel · Mickel Tech
          </div>
        </div>

        {/* Waveform */}
        <div className="relative min-h-[200px] overflow-hidden bg-[#0a0a0a]">
          <canvas className="h-full w-full opacity-60" ref={canvasRef} />
          <div className="absolute right-4 bottom-4 animate-pulse font-mono text-[10px] text-success">
            AUDIO: RECORDING...
          </div>
        </div>
      </div>
    </section>
  );
}
