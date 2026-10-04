'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, PlugZap, BatteryWarning, Terminal } from 'lucide-react';

const painPoints = [
  {
    id: 'ERR_COMPLIANCE',
    title: "The Compliance Trap",
    description: "GDPR isn't the worst of it. Try navigating BaFin, ACPR, and 15 different e-Factura implementations across EU countries.",
    icon: ShieldAlert,
    accent: "from-[#A830CA] to-purple-500",
  },
  {
    id: 'SYS_FRAGMENTATION',
    title: "The API Hell",
    description: "Integrating 15 different EU payment methods with varying compliance requirements. Good luck getting iDeal and Sofort to work together.",
    icon: PlugZap,
    accent: "from-[#C62A97] to-[#A830CA]",
  },
  {
    id: 'RES_DEPLETED',
    title: "The Dev Drain",
    description: "Pulling your core team off the roadmap to figure out German tax laws. While your competitors ship actual features.",
    icon: BatteryWarning,
    accent: "from-pink-500 to-[#C62A97]",
  }
];

export default function ProblemBento() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Terminal className="w-5 h-5 text-[#C62A97]" />
              <span className="text-[#C62A97] font-mono text-sm font-semibold tracking-wider uppercase">
                System Diagnostics
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              The Nightmare
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-md pb-2 lg:border-b border-white/10"
          >
            Why UK startups stall and bleed runway when expanding to the EU.
          </motion.p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((pain, index) => {
            const IconComponent = pain.icon;
            return (
              <motion.div
                key={pain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative bg-[#0F172A] border border-white/10 rounded-2xl p-8 hover:border-[#A830CA]/50 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                {/* Internal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${pain.accent} shadow-lg shadow-black/50`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:text-zinc-300 group-hover:border-white/20 transition-colors">
                      {pain.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                    {pain.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {pain.description}
                  </p>
                </div>

                {/* Animated Bottom Strike */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C62A97] to-transparent opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}