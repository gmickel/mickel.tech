'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const nodes = [
  {
    id: 1,
    title: 'CLINICAL AI PLATFORM (KISIM)',
    role: 'Head of AI & Engineering Lead',
    desc: "Secured the mandate and led KISIM Clinical AI for Switzerland's leading CIS: clinical LLM platform, PII masking and evaluation pipelines handling real patient data in Swiss hospitals.",
    x: 50,
    y: 20,
  },
  {
    id: 2,
    title: 'DOCIQ LEGAL AI (CLM)',
    role: 'Founder & CEO',
    desc: "From 2017, built one of Switzerland's first AI-native contract lifecycle management (CLM) platforms: smart templates, clause analysis and legal copilots used by enterprises and law firms, taken through to acquisition stage.",
    x: 80,
    y: 50,
  },
  {
    id: 3,
    title: 'PORTFOLIO AI & ADVISORY',
    role: 'Operating Principal & Technical Advisor',
    desc: 'Operating Principal (AI & Tech) for PE-backed B2B companies across CH / DE / IT and technical advisor to regulated platforms such as Obligate, shaping AI strategy, architecture and SDLC patterns across product and operations.',
    x: 20,
    y: 50,
  },
  {
    id: 4,
    title: 'TECHNICAL EXPERT & PROJECT ASSESSMENT',
    role: 'ITDR-Listed Expert',
    desc: 'Independent expert for ICT and AI systems: copyright and Open Source disputes, arbitration testimony and large-project assessments with clear expert reports against defined quality gates, KPIs and contractual obligations.',
    x: 50,
    y: 80,
  },
  {
    id: 5,
    title: 'AI SDLC & OPERATIONAL AGENTS',
    role: 'SDLC, Platform & Ops Architect',
    desc: 'Designs AI-native SDLC, platforms and operational agents that automate support, service and internal workflows—using everything-as-code, eval-driven gating and runbooks so operations teams can safely own and evolve the agents.',
    x: 50,
    y: 50,
  },
];

export default function SystemMap() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section
      className="relative flex min-h-[800px] flex-col overflow-hidden bg-black px-6 pt-24 pb-32 md:px-20"
      id="map"
    >
      <div className="z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
        <h2 className="mb-12 font-bold text-4xl">SYSTEM MAP</h2>

        <div className="relative min-h-[600px] w-full flex-grow rounded-lg border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Connection Lines (SVG) */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
            <title>System connection lines</title>
            <line
              className="text-primary"
              stroke="currentColor"
              strokeWidth="2"
              x1="50%"
              x2="50%"
              y1="20%"
              y2="50%"
            />
            <line
              className="text-primary"
              stroke="currentColor"
              strokeWidth="2"
              x1="50%"
              x2="20%"
              y1="50%"
              y2="50%"
            />
            <line
              className="text-primary"
              stroke="currentColor"
              strokeWidth="2"
              x1="50%"
              x2="80%"
              y1="50%"
              y2="50%"
            />
            <line
              className="text-primary"
              stroke="currentColor"
              strokeWidth="2"
              x1="50%"
              x2="50%"
              y1="50%"
              y2="80%"
            />
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            // Removed unused isBottom variable

            return (
              <motion.div
                className={`interactive absolute cursor-none ${activeNode === node.id ? 'z-50' : 'z-10'}`}
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className={`h-4 w-4 border-2 bg-black ${
                    activeNode === node.id
                      ? 'scale-150 border-primary'
                      : 'border-white/50'
                  } rotate-45 transition-all duration-300`}
                />

                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className={`-translate-x-1/2 absolute top-8 left-1/2 w-64 border border-white/20 bg-black/90 p-4 shadow-2xl backdrop-blur-md ${
                    activeNode === node.id
                      ? 'block'
                      : 'hidden opacity-50 md:block'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                >
                  <div className="mb-1 font-mono text-[10px] text-primary uppercase">
                    {node.role}
                  </div>
                  <div className="mb-2 font-bold text-sm">{node.title}</div>
                  {activeNode === node.id && (
                    <div className="fade-in slide-in-from-top-2 animate-in text-muted-foreground text-xs leading-snug">
                      {node.desc}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
