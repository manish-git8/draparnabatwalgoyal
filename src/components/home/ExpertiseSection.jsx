'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiTarget, FiShield, FiHeart, FiZap } from 'react-icons/fi';

const expertiseItems = [
  {
    icon: FiTarget,
    title: 'MSK Radiology',
    description: 'Expert musculoskeletal imaging for joints, bones, muscles with specialist-level precision.',
    color: 'from-lavender-500 to-lavender-700',
  },
  {
    icon: FiShield,
    title: 'Oncology Imaging',
    description: 'Specialized cancer detection, staging, and treatment monitoring with advanced protocols.',
    color: 'from-lavender-500 to-lavender-700',
  },
  {
    icon: FiHeart,
    title: 'Fetal Medicine',
    description: 'Comprehensive prenatal imaging and fetal health assessment with specialized training in fetal medicine.',
    color: 'from-lavender-400 to-lavender-600',
  },
  {
    icon: FiZap,
    title: 'Advanced Diagnostics',
    description: 'Cutting-edge imaging technology for superior diagnostic accuracy and patient outcomes.',
    color: 'from-lavender-600 to-lavender-800',
  },
];

export default function ExpertiseSection() {
  return (
    <section className="section-padding bg-lavender-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender-200/30 rounded-full blur-[120px]" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Key Expertise"
          title="Specialized Training & Focus Areas"
          subtitle="Uniquely trained expertise across multiple subspecialties, setting the standard for diagnostic excellence in Central India."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-7 h-full text-center relative overflow-hidden">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
