import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const SMOOTH_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  immediate?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  distance = 20,
  immediate = false,
}: FadeInProps) {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: distance }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay, ease: SMOOTH_EASE }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.52, delay, ease: SMOOTH_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
