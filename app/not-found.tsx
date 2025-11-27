import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <div className="max-w-md space-y-6">
        {/* 404 Display */}
        <div className="space-y-2">
          <div className="font-bold font-mono text-8xl text-primary">404</div>
          <h1 className="font-bold font-mono text-xl tracking-wider">
            ROUTE NOT FOUND
          </h1>
        </div>

        {/* Message */}
        <p className="font-mono text-muted-foreground text-sm">
          The requested endpoint does not exist in this system. The route may
          have been relocated or decommissioned.
        </p>

        {/* Decorative Grid */}
        <div
          aria-hidden="true"
          className="mx-auto h-32 w-full max-w-xs bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"
        />

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <Link
            className="w-full border border-primary bg-primary/10 px-6 py-3 font-mono text-primary text-sm transition-colors hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="/"
          >
            [ RETURN TO HOME ]
          </Link>
          <Link
            className="w-full border border-white/20 px-6 py-3 font-mono text-sm text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="#contact"
          >
            [ OPEN CONTACT CHANNEL ]
          </Link>
        </div>
      </div>
    </div>
  );
}
