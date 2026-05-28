'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export default function AboutPreview() {
  const highlights = [
    'MBBS — Seth GS Medical College & KEM Hospital, Mumbai',
    'MD (Radio-Diagnosis) — DPU, Pune',
    'Oncology Diagnostics — Tata Memorial Hospital, Mumbai',
    'Fetal Medicine Training — ScholarMD Edvent',
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-lavender-100/50 rounded-full blur-[80px]" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-lavender-100 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image
                  src="/doctor-profile.jpg"
                  alt="Dr. Aparna — About"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-lavender-100"
              >
                <div className="text-3xl font-bold gradient-text">MBBS, MD</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Qualifications</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="About the Doctor"
              title="Dedicated to Diagnostic Excellence"
              subtitle="Dr. Aparna is a highly skilled radiologist with a passion for accurate diagnosis and patient-centered care."
              center={false}
            />

            <p className="text-gray-500 leading-relaxed mb-6">
              With over a decade of experience in diagnostic radiology, Dr. Aparna has established herself as a 
              trusted name in medical imaging at SNG Hospital, Indore. Her specialized training in 
              Oncology Imaging, Fetal Medicine, and Advanced Diagnostics sets her apart as a uniquely qualified specialist.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-lavender-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary inline-flex"
            >
              Learn More About Dr. Aparna
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
