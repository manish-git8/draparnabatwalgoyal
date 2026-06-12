'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { blogs } from '@/data/blogs';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';

export default function BlogPreview() {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-lavender-100/40 rounded-full blur-[80px]" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Health Blog"
          title="Latest Health Insights"
          subtitle="Stay informed with expert articles on radiology, diagnostics, and preventive healthcare."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {latestBlogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-lavender-500/8 hover:border-lavender-100 transition-all duration-400 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-lavender-700">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-lavender-600 transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-600 group-hover:gap-3 transition-all duration-300">
                      Read More
                      <FiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/blog" className="btn-secondary">
            View All Articles
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
