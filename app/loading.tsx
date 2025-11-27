export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          {/* Cyberpunk-style loading indicator */}
          <div className="absolute inset-0 animate-spin border-primary border-t-2" />
          <div
            className="absolute inset-2 animate-spin border-primary/50 border-b-2"
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          />
        </div>
        <div className="animate-pulse font-mono text-primary text-xs tracking-widest">
          LOADING SYSTEMS...
        </div>
      </div>
    </div>
  );
}
