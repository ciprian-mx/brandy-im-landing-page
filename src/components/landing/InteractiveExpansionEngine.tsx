'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, MessagesSquare } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Adapt (Compliance & APIs)',
    description: 'We rewrite the compliance layer. We audit and integrate mandatory local APIs (iDeal, Sofort, e-factura) and adapt UX to local consumer behaviors.',
    icon: ShieldCheck,
    color: 'from-[#A830CA] to-purple-600',
  },
  {
    id: '02',
    title: 'Rapid Deployment',
    description: 'Production-ready in 30 days. We push the localized product live in your target region, monitor the rollout, and instantly iterate based on telemetry.',
    icon: Rocket,
    color: 'from-[#C62A97] to-pink-600',
  },
  {
    id: '03',
    title: 'Embedded Support',
    description: "We don't just launch and leave. We integrate Naimi.ai for localized support, and our devs stay on your Slack/Jira to crush incoming technical tickets.",
    icon: MessagesSquare,
    color: 'from-[#A830CA] to-[#C62A97]',
  },
];

export default function InteractiveExpansionEngine() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-[#A830CA]/20">
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A830CA]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Launch in the EU in 30 Days. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">
              Zero internal disruption.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            We handle the regulatory maze, the API integrations, and the post-launch support. Your CTO doesn't even need to open a new Jira board.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-[#0F172A] border border-[#A830CA]/20 rounded-2xl p-8 hover:border-[#A830CA]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 flex items-center justify-between relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-zinc-500 font-mono text-sm font-bold">{step.id}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed text-sm relative z-10">
                {step.description}
              </p>

              {/* Decorative bottom line that lights up on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A830CA] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}