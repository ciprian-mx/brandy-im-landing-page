'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Building2, Mail, Globe2 } from 'lucide-react';

export default function LiveRoadmapDemo() {
  const [formData, setFormData] = useState({
    companyUrl: '',
    countries: [] as string[],
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const euCountries = [
    'Germany', 'France', 'Netherlands', 'Spain', 'Italy', 
    'Belgium', 'Sweden', 'Poland', 'Austria', 'Portugal'
  ];

  const handleCountryToggle = (country: string) => {
    setFormData(prev => ({
      ...prev,
      countries: prev.countries.includes(country)
        ? prev.countries.filter(c => c !== country)
        : [...prev.countries, country]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for the demo
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Roadmap generation requested! In production, this hits our AI engine.');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#C62A97]/10 to-[#A830CA]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Terminal className="w-4 h-4 text-[#A830CA]" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Live Demo
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Generate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A830CA] to-[#C62A97]">expansion telemetry.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Stop guessing. Let our engine calculate exactly which APIs, tax compliance laws, and UX adaptations you need for your specific stack.
          </motion.p>
        </div>
        
        {/* Terminal Window UI */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          {/* Terminal Header */}
          <div className="bg-[#050505] px-4 py-3 flex items-center border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
            </div>
            <div className="flex-1 text-center flex justify-center items-center">
              <span className="text-zinc-500 font-mono text-xs flex items-center gap-2">
                ~/brandy-im/roadmap-generator <span className="w-1.5 h-3 bg-zinc-500 animate-pulse"></span>
              </span>
            </div>
          </div>
          
          {/* Terminal Body / Form */}
          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Company URL & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="companyUrl" className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    <Building2 className="w-4 h-4 text-zinc-500" />
                    Company URL
                  </label>
                  <input
                    type="url"
                    id="companyUrl"
                    value={formData.companyUrl}
                    onChange={(e) => setFormData({...formData, companyUrl: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A830CA] focus:ring-1 focus:ring-[#A830CA] transition-all"
                    placeholder="https://yourstartup.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    <Mail className="w-4 h-4 text-zinc-500" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A830CA] focus:ring-1 focus:ring-[#A830CA] transition-all"
                    placeholder="founder@yourstartup.com"
                    required
                  />
                </div>
              </div>
              
              {/* Row 2: Target Countries */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                  <Globe2 className="w-4 h-4 text-zinc-500" />
                  Target EU Regions
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {euCountries.map((country) => {
                    const isSelected = formData.countries.includes(country);
                    return (
                      <button
                        key={country}
                        type="button"
                        onClick={() => handleCountryToggle(country)}
                        className={`relative overflow-hidden px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#A830CA]/20 border-[#A830CA] text-white shadow-[0_0_15px_-3px_rgba(168,48,202,0.3)]'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-zinc-200'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#A830CA]/20 to-[#C62A97]/20" />
                        )}
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {country}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Submit Action */}
              <div className="pt-4 flex flex-col items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 rounded-lg overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A830CA] to-[#C62A97] transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    {isSubmitting ? 'Compiling Telemetry...' : 'Generate Expansion Roadmap'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
                
                <p className="mt-6 text-sm font-mono text-zinc-500">
                  // No credit card required. Processing takes ~2.4 seconds.
                </p>
              </div>
              
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}