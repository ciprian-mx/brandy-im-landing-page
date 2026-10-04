'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F172A]">
      {/* Architectural Grid Background with Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Top Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#A830CA]/20 to-[#C62A97]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center flex flex-col items-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#C62A97] animate-pulse" />
              European fundamentals for your next unicorn.
            </span>
          </motion.div>

          {/* Massive Typography Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl"
          >
            Building a startup is your job. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">
              Taking it to the EU is ours.
            </span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We adapt your product, handle EU compliance, and integrate local APIs (iDeal, Sofort, e-factura) in 30 days. <strong className="text-zinc-200 font-semibold">No internal devs required.</strong>
          </motion.p>
          
          {/* Dual CTAs with advanced hover states */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Action */}
            <a 
              href="#demo" 
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#A830CA] to-[#C62A97] transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Generate EU Roadmap
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            {/* Secondary Action */}
            <a 
              href="#how-it-works" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Terminal className="w-4 h-4 text-zinc-400 group-hover:text-[#A830CA] transition-colors" />
              How it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}