'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Swords, Shield, Activity } from 'lucide-react';

const outcomes = [
  {
    title: "Command bigger valuations",
    description: "EU expansion increases TAM by 3-5x. Investors notice.",
    metric: "+40%",
    subMetric: "average valuation increase",
    icon: TrendingUp,
    accent: "from-[#A830CA] to-purple-500"
  },
  {
    title: "Crush local copycats",
    description: "Beat region-first competitors with native-level compliance and UX.",
    metric: "3x",
    subMetric: "faster time to market vs. local alternatives",
    icon: Swords,
    accent: "from-[#C62A97] to-[#A830CA]"
  },
  {
    title: "Protect your core team",
    description: "Your engineers focus on core product while we handle EU complexity.",
    metric: "120+",
    subMetric: "hours saved per quarter per engineer",
    icon: Shield,
    accent: "from-[#C62A97] to-pink-500"
  }
];

export default function OutcomesMetrics() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#A830CA]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Activity className="w-4 h-4 text-[#A830CA]" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Impact Telemetry
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight max-w-2xl"
          >
            What happens when you scale at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">speed of demand?</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative bg-[#0F172A] border border-white/10 rounded-2xl p-8 hover:border-[#A830CA]/40 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Internal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top Icon */}
                  <div className="flex justify-start mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${outcome.accent} bg-opacity-10 shadow-lg shadow-black/20`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Massive Metric Display */}
                  <div className="mb-8">
                    <div className={`text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${outcome.accent}`}>
                      {outcome.metric}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-2">
                      {outcome.subMetric}
                    </div>
                  </div>

                  {/* Context Bottom Border */}
                  <div className="mt-auto pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>

                {/* Animated Right Strike on Hover */}
                <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#C62A97] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}