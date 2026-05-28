'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function BlogCard({ post, index }) {
  const { title, excerpt, category, date, readTime, slug } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card flex flex-col justify-between h-full bg-white border border-lavender-100 hover:border-lavender-300 shadow-md shadow-lavender-500/5 rounded-3xl overflow-hidden group"
    >
      <div>
        {/* Placeholder Thumbnail or SVG decoration */}
        <div className="relative h-48 bg-gradient-to-tr from-lavender-700 to-lavender-400 flex items-center justify-center p-6 text-white text-center">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <span className="absolute top-4 left-4 text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider text-white">
            {category}
          </span>
          <h4 className="font-extrabold text-lg line-clamp-3 leading-snug drop-shadow-md">
            {title}
          </h4>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold mb-4">
            <span className="flex items-center gap-1">
              <FiCalendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 md:px-8 pb-6 pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-bold text-lavender-600 group-hover:underline">
          Read Full Article
        </span>
        <div className="w-8 h-8 rounded-full bg-lavender-50 group-hover:bg-lavender-500 group-hover:text-white text-lavender-600 flex items-center justify-center transition-all duration-300">
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
