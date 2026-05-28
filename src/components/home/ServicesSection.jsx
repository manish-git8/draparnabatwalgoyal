'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '@/data/services';

const getServiceImage = (slug) => {
  if (slug === 'ct-scan') return '/images/slider-ct-scan.png';
  if (slug === 'usg-ultrasound') return '/images/slider-usg.png';
  if (slug === 'usg-guided-procedures') return '/images/service-usg-guided.svg';
  if (slug === 'fetal-medicine-imaging') return '/images/slider-fetal-medicine.png';
  if (slug === 'oncology-imaging') return '/images/service-oncology.svg';
  if (slug === 'diagnostic-consultation') return '/images/service-consultation.svg';
  if (slug === 'advanced-imaging') return '/images/cta-bg-network.png';
  if (slug === 'msk-radiology') return '/images/hero-bg-medical.png';
  return '/images/hero-bg-medical.png';
};

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="group h-full bg-white rounded-2xl border border-lavender-100 hover:border-lavender-300/60 shadow-sm hover:shadow-xl hover:shadow-lavender-200/35 overflow-hidden transition-all duration-300 cursor-pointer">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={getServiceImage(service.slug)}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/45 via-lavender-800/10 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/85 backdrop-blur-sm text-xl flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className="text-lg font-bold text-gray-900 group-hover:text-lavender-700 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-2 min-h-[64px]">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-lavender-600 group-hover:text-lavender-700">
                      <span>Learn More</span>
                      <div className="w-8 h-8 rounded-lg bg-lavender-50 group-hover:bg-lavender-600 text-lavender-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <FiArrowRight className="w-4 h-4" />
                      </div>
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
