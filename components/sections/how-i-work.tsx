import SectionTitle from '@/components/ui/section-title';

const steps = [
  {
    num: '01',
    label: 'ASSESS',
    desc: 'Map the current state: processes, architecture, team maturity, pain points. No assumptions. Data first.',
    detail:
      'Baseline metrics, L0-L4 maturity scoring, process mapping, risk heatmap',
  },
  {
    num: '02',
    label: 'DESIGN',
    desc: 'Architecture and methodology tailored to your constraints. Brownfield-first. Regulated-industry aware.',
    detail:
      'Blueprint, tool selection, team structure, rollback strategy, success criteria',
  },
  {
    num: '03',
    label: 'IMPLEMENT',
    desc: 'Hands-on delivery alongside your team. Not a slide deck handoff. I co-ship the first lane, then hand it back clean.',
    detail:
      'Lighthouse lane, eval-driven gating, everything-as-code, pair delivery',
  },
  {
    num: '04',
    label: 'MEASURE',
    desc: 'Quantified outcomes tied to the baseline. Cycle time, quality, cost. Monthly steering until the team owns it.',
    detail:
      'DORA metrics, before/after comparison, steering cadence, knowledge transfer',
  },
] as const;

export default function HowIWork() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 md:px-20">
      {/* Subtle grid bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] text-primary tracking-[0.3em]">
            PROCESS
          </p>
          <SectionTitle
            className="mb-4 font-bold text-4xl text-white"
            text="HOW I WORK"
          />
          <p className="text-lg text-muted-foreground">
            Every engagement follows the same discipline. Assess the ground
            truth, design for your constraints, implement hands-on, measure
            against the baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              className="group relative bg-black p-8 transition-colors hover:bg-primary/[0.03]"
              key={step.num}
            >
              {/* Step number — large watermark */}
              <div className="mb-6 font-bold font-mono text-5xl text-primary/20 transition-colors group-hover:text-primary/40">
                {step.num}
              </div>

              <h3 className="mb-3 font-bold font-mono text-lg text-white tracking-tight">
                {step.label}
              </h3>

              <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>

              <p className="font-mono text-[11px] text-primary/50 leading-relaxed">
                {step.detail}
              </p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="-right-2 -translate-y-1/2 absolute top-1/2 z-10 hidden font-mono text-lg text-primary/30 md:block"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
