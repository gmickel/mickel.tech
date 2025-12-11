'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SystemError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <div className="max-w-md space-y-6">
        {/* Error Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-alert bg-alert/10">
          <span className="font-bold font-mono text-2xl text-alert">!</span>
        </div>

        {/* Error Title */}
        <h1 className="font-bold font-mono text-2xl text-alert tracking-wider">
          SYSTEM ERROR
        </h1>

        {/* Error Message */}
        <p className="font-mono text-muted-foreground text-sm">
          An unexpected error occurred. The system has logged this incident for
          analysis.
        </p>

        {/* Error Details */}
        {error.digest ? (
          <p className="font-mono text-muted-foreground text-xs">
            Error ID: {error.digest}
          </p>
        ) : null}

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <button
            className="w-full border border-primary bg-primary/10 px-6 py-3 font-mono text-primary text-sm transition-colors hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            onClick={reset}
            type="button"
          >
            [ RETRY OPERATION ]
          </button>
          <a
            className="w-full border border-white/20 px-6 py-3 font-mono text-sm text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="/"
          >
            [ RETURN TO HOME ]
          </a>
        </div>
      </div>
    </div>
  );
}
