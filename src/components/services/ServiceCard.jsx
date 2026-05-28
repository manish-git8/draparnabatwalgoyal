'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function ServiceCard({ service, index }) {
  const { title, slug, shortDesc, icon, benefits } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card group flex flex-col justify-between h-full bg-white border border-lavender-100 hover:border-lavender-300 shadow-md shadow-lavender-500/5 rounded-3xl p-6 md:p-8"
    >
      <div>
        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-lavender-100/70 text-lavender-600 flex items-center justify-center text-3xl group-hover:bg-lavender-500 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-lavender-800 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {shortDesc}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2.5 mb-8">
          {benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-gray-600">
              <FiCheck className="w-4 h-4 text-lavender-500 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-bold text-lavender-600 group-hover:underline">
          Learn More
        </span>
        <div className="w-8 h-8 rounded-full bg-lavender-50 group-hover:bg-lavender-500 group-hover:text-white text-lavender-600 flex items-center justify-center transition-all duration-300">
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
