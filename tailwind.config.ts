import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand color palette
        'dark-base': '#0F172A',
        'brand-purple': '#A830CA',
        'brand-pink': '#C62A97',
        // Extended color variations
        'dark-800': '#1E293B',
        'dark-900': '#0F172A',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-pause': 'marquee 25s linear infinite paused',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;