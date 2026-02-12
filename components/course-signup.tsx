'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function CourseSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/course-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  }

  return (
    <div className="relative border border-primary/30 bg-black/60 p-6 md:p-8">
      {/* Corner brackets */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-3 w-3 border-primary/60 border-t border-l" />
        <div className="absolute top-0 right-0 h-3 w-3 border-primary/60 border-t border-r" />
        <div className="absolute bottom-0 left-0 h-3 w-3 border-primary/60 border-b border-l" />
        <div className="absolute right-0 bottom-0 h-3 w-3 border-primary/60 border-r border-b" />
      </div>

      {status === 'success' ? (
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="font-bold font-mono text-primary text-xs uppercase tracking-[0.3em]">
              Confirmed
            </span>
          </div>
          <p className="font-medium text-lg text-white">You're on the list.</p>
          <p className="font-mono text-muted-foreground text-xs">
            I'll reach out when the course is ready.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Early Access
            </span>
          </div>

          <h3 className="mb-1 font-bold text-lg text-white">
            Agentic SDLC Video Course
          </h3>
          <p className="mb-5 text-muted-foreground text-sm">
            The full methodology — process, tooling, team rollout — as a
            structured video course. Sign up to be notified.
          </p>

          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              className="flex-1 border border-white/20 bg-white/5 px-4 py-2.5 font-mono text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none"
              disabled={status === 'loading'}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              type="email"
              value={email}
            />
            <button
              className="shrink-0 bg-primary px-6 py-2.5 font-bold font-mono text-black text-sm tracking-wider transition-colors hover:bg-white disabled:opacity-50"
              disabled={status === 'loading'}
              type="submit"
            >
              {status === 'loading' ? 'SENDING...' : 'NOTIFY ME'}
            </button>
          </form>

          {status === 'error' && (
            <p className="mt-2 font-mono text-red-400 text-xs">{errorMsg}</p>
          )}
        </>
      )}
    </div>
  );
}
