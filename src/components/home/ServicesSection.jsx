'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lavender-100/40 rounded-full blur-[100px]" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Diagnostic Services"
          subtitle="State-of-the-art imaging and diagnostic solutions tailored to your healthcare needs."
        />

        <div className="flex flex-col gap-4 max-w-4xl mx-auto mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white hover:bg-lavender-50/20 rounded-2xl border border-lavender-100 hover:border-lavender-300/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                  {/* Left content: Icon + Text */}
                  <div className="flex items-center gap-5 flex-1">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-lavender-100/60 group-hover:bg-lavender-500/10 text-3xl flex items-center justify-center transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-lavender-600 transition-colors duration-300" style={{ fontFamily: 'var(--font-outfit)' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mt-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                  {/* Right side: Action Link */}
                  <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-semibold text-lavender-600 group-hover:text-lavender-700 shrink-0">
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">Learn More</span>
                    <div className="w-9 h-9 rounded-lg bg-lavender-50 group-hover:bg-lavender-600 text-lavender-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <FiArrowRight className="w-4 h-4" />
                    </div>
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
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary">
            View All Services
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
