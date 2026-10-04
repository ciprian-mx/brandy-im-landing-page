'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquareCode } from 'lucide-react';

const faqItems = [
  {
    question: "Do we own the code?",
    answer: "Yes. 100%. We aren't holding your IP hostage. Everything we build is deployed directly into your AWS/GCP environment and belongs to you."
  },
  {
    question: "How much of my CTO's time will this take?",
    answer: "About 3 hours for the initial architecture handoff and access provisioning. After that, we operate entirely autonomously so your core team can stay focused on the main roadmap."
  },
  {
    question: "What about ongoing maintenance?",
    answer: "We monitor, maintain, and update integrations for the lifetime of our partnership. No broken APIs on your watch, and no unexpected compliance fines."
  },
  {
    question: "Can we audit your security?",
    answer: "Please do. We have nothing to hide. We are SOC 2 Type II compliant, ISO 27001 certified, and penetration tested annually."
  }
];

export default function TransparentFAQ() {
  // Default to having the first item open to show off the UI
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#A830CA]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <MessageSquareCode className="w-4 h-4 text-[#C62A97]" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Radical Transparency
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Questions UK founders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">actually ask.</span>
          </motion.h2>
        </div>
        
        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white/5 border-[#A830CA]/40 shadow-[0_0_30px_-10px_rgba(168,48,202,0.2)]' 
                    : 'bg-[#0F172A] border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-zinc-300'
                  }`}>
                    {item.question}
                  </h3>
                  
                  {/* Animated Chevron Button */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex-shrink-0 ml-4 p-1.5 rounded-full border transition-colors duration-300 ${
                      isOpen 
                        ? 'border-[#A830CA]/50 text-[#C62A97] bg-[#A830CA]/10' 
                        : 'border-transparent text-zinc-500 bg-white/5'
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-sm md:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}