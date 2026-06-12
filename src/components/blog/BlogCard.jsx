'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function BlogCard({ post, index }) {
  const { title, excerpt, category, date, readTime, slug, image } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="flex flex-col justify-between h-full bg-white border border-lavender-100 hover:border-lavender-300 shadow-md shadow-lavender-500/5 rounded-3xl overflow-hidden group">
          <div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/50 to-transparent" />
              <span className="absolute top-4 left-4 text-xs font-bold bg-white/90 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider text-lavender-700">
                {category}
              </span>
            </div>

            <div className="p-6 md:p-8">
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

              <h4 className="font-extrabold text-lg text-gray-900 line-clamp-2 leading-snug mb-3 group-hover:text-lavender-700 transition-colors">
                {title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {excerpt}
              </p>
            </div>
          </div>

          <div className="px-6 md:px-8 pb-6 pt-4 border-t border-gray-50 flex items-center justify-between">
            <span className="text-xs font-bold text-lavender-600 group-hover:underline">
              Read Full Article
            </span>
            <div className="w-8 h-8 rounded-full bg-lavender-50 group-hover:bg-lavender-500 group-hover:text-white text-lavender-600 flex items-center justify-center transition-all duration-300">
              <FiArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
