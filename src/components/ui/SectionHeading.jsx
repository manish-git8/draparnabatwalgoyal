'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold tracking-wider uppercase mb-4 ${
          light
            ? 'bg-white/15 text-white/90 backdrop-blur-sm'
            : 'bg-lavender-100 text-lavender-700'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-[clamp(1.55rem,2.6vw,2.55rem)] font-bold leading-[1.2] mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[clamp(0.97rem,0.4vw,1.08rem)] max-w-2xl leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
