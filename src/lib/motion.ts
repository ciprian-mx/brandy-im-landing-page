'use client';

import { motion, type Variants } from 'framer-motion';

// Spring configurations for different types of animations
export const SPRING_CONFIGS = {
  gentle: {
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 1
  },
  snappy: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 1
  },
  slow: {
    type: "spring",
    stiffness: 50,
    damping: 15,
    mass: 1
  }
};

// Staggered animation variants
export const STAGGER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: SPRING_CONFIGS.gentle
  }
};

export const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Export motion components with predefined configs
export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;