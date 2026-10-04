'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  // Transformăm într-o funcție care primește un prefix pentru a garanta chei unice
  const renderLogos = (prefix: string) => 
    Array(12).fill(null).map((_, i) => (
      <div key={`${prefix}-${i}`} className="flex items-center justify-center px-8">
        <div className="h-8 w-32 bg-gray-700 rounded opacity-30" />
      </div>
    ));

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg text-gray-400">
            Trusted by Series A-C UK tech leaders who didn't want to figure out German tax laws.
          </h2>
        </div>
        
        <div 
          className="relative flex"
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          <motion.div 
            className="flex animate-marquee whitespace-nowrap"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Generăm cele două seturi de logouri cu prefixe complet unice */}
            {renderLogos('set1')}
            {renderLogos('set2')}
          </motion.div>
        </div>
      </div>
    </section>
  );
}