export function ContactFooter() {
  return (
    <>
      <footer className="grid grid-cols-1 gap-8 border-white/10 border-t pt-8 font-mono text-xs md:grid-cols-5">
        <div>
          <h3 className="mb-2 text-muted-foreground">EMAIL</h3>
          <a
            className="glow-link interactive focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="mailto:gordon@mickel.tech"
          >
            gordon@mickel.tech
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-muted-foreground">CALENDAR</h3>
          <a
            className="glow-link interactive text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="https://cal.com/gmickel"
            rel="noopener noreferrer"
            target="_blank"
          >
            [ Book a session ]
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-muted-foreground">LINKEDIN</h3>
          <a
            className="glow-link interactive focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="https://linkedin.com/in/gmickel"
            rel="noopener noreferrer"
            target="_blank"
          >
            [ LinkedIn Profile ]
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-muted-foreground">X</h3>
          <a
            className="glow-link interactive focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            href="https://x.com/gmickel"
            rel="noopener noreferrer"
            target="_blank"
          >
            [ X Profile ]
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-muted-foreground">LOCATION</h3>
          <address className="text-white not-italic">
            Basel, Switzerland · working globally
          </address>
        </div>
      </footer>

      <p className="pt-20 text-center text-[10px] text-muted-foreground">
        ©{' '}
        <time dateTime={new Date().getFullYear().toString()}>
          {new Date().getFullYear()}
        </time>{' '}
        MICKEL TECH. ALL SYSTEMS OPERATIONAL.
      </p>
    </>
  );
}
