'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TerminalSquare, GitBranch, Database } from 'lucide-react';

const caseStudies = [
  {
    id: "CS_01_FINTECH",
    client: "Series B UK Fintech",
    title: "BaFin Compliance & SEPA Routing",
    description: "Completely offloaded their German expansion. We integrated local KYC APIs and SEPA direct debit as a middleware layer without touching their core ledger.",
    metrics: [
      { label: "Time to Market", value: "28 Days" },
      { label: "Core Dev Hours", value: "Zero" }
    ],
    icon: Database,
    accent: "from-[#A830CA] to-purple-600"
  },
  {
    id: "CS_02_SAAS",
    client: "Enterprise B2B SaaS",
    title: "E-Factura Pan-European Rollout",
    description: "Implemented Spanish TicketBAI and Italian SDI e-invoicing standards into their billing engine. Unlocked enterprise deals that were stalled on local compliance.",
    metrics: [
      { label: "Pipeline Unlocked", value: "€2.4M" },
      { label: "Local APIs", value: "14" }
    ],
    icon: GitBranch,
    accent: "from-[#C62A97] to-pink-600"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <TerminalSquare className="w-4 h-4 text-[#A830CA]" />
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                Proof of Execution
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              We don't just talk. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">
                We ship.
              </span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#all-cases"
            className="group flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            View all telemetry logs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                className="group relative bg-black/20 border border-white/10 rounded-2xl overflow-hidden hover:border-[#A830CA]/40 transition-all duration-500"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="inline-flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${study.accent} bg-opacity-10`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {study.client}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 hidden sm:block">
                      {study.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                    {study.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {study.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Bottom Strike */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A830CA] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}