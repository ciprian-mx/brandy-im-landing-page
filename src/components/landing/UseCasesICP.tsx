'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Blocks, Target } from 'lucide-react';

const useCases = [
  {
    id: "USE_CASE_01",
    title: "Fintech & Payments",
    description: "Payment orchestration, compliance automation, and local banking integrations without stretching your engineering bandwidth.",
    example: "> UK neobank expanding to DE, FR, NL with iDeal, Sofort, and SEPA compliance.",
    linkText: "Read fintech case study",
    icon: CreditCard,
    accent: "from-[#A830CA] to-purple-500"
  },
  {
    id: "USE_CASE_02",
    title: "Enterprise B2B SaaS",
    description: "Tax-compliant invoicing, e-Factura automation, and regional API integrations handled completely externally.",
    example: "> Enterprise SaaS entering Southern Europe with localized VAT and invoicing engines.",
    linkText: "Read B2B SaaS case study",
    icon: Blocks,
    accent: "from-[#C62A97] to-pink-500"
  }
];

export default function UseCasesICP() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#A830CA]/10 to-[#C62A97]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Target className="w-4 h-4 text-[#A830CA]" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Primary Personas: CEO, Founder, CTO
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Built for UK SaaS that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">actually has traction.</span>
          </motion.h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative bg-[#0F172A] border border-white/10 rounded-2xl p-8 hover:border-[#A830CA]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${useCase.accent} bg-opacity-10 shadow-lg shadow-black/20`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {useCase.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  {/* Terminal-style example block */}
                  <div className="mb-8 p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-zinc-400 leading-relaxed border-l-2 border-l-[#C62A97]">
                    {useCase.example}
                  </div>
                  
                  {/* Interactive Link */}
                  <div className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#A830CA] transition-colors cursor-pointer">
                    {useCase.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
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