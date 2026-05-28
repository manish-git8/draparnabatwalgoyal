'use client';

import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-6 md:p-8 ${hover ? '' : 'hover:transform-none hover:shadow-none'} ${className}`}
    >
      {children}
    </motion.div>
  );
}
