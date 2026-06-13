'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiAward, FiClock, FiHeart, FiShield, FiUsers, FiZap } from 'react-icons/fi';

const reasons = [
  { icon: FiAward, title: 'Multi-Specialty Training', desc: 'Specialized training in Oncology Imaging, Fetal Medicine & Advanced Diagnostics — a rare expertise combination.' },
  { icon: FiClock, title: 'Timely Reports', desc: 'Fast turnaround with detailed reports delivered digitally within 24 hours.' },
  { icon: FiHeart, title: 'Compassionate Care', desc: 'Patient-centered approach with personalized attention and clear communication.' },
  { icon: FiZap, title: 'Advanced Technology', desc: 'State-of-the-art imaging equipment for superior diagnostic accuracy.' },
  { icon: FiUsers, title: '10+ Years Experience', desc: 'Over a decade of clinical expertise serving thousands of patients.' },
  { icon: FiShield, title: 'Trusted Diagnostics', desc: 'Accurate, reliable diagnoses trusted by leading physicians and surgeons.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-lavender-bg">
      {/* CT & USG background imagery */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[220px] md:min-h-0">
          <Image
            src="/images/cards/ct-scan.png"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-lavender-50/88 to-white/95" />
          <span className="absolute bottom-4 left-6 hidden md:inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lavender-700 shadow-sm backdrop-blur-sm">
            Advanced CT Imaging
          </span>
        </div>
        <div className="relative min-h-[220px] md:min-h-0">
          <Image
            src="/images/cards/usg-ultrasound.png"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-white/92 via-lavender-50/88 to-white/95" />
          <span className="absolute bottom-4 right-6 hidden md:inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lavender-700 shadow-sm backdrop-blur-sm">
            Precision USG
          </span>
        </div>
      </div>

      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lavender-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Patients Trust Dr. Aparna"
          subtitle="Excellence in diagnostics backed by specialized training, advanced technology, and compassionate patient care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-lavender-100 rounded-2xl p-7 shadow-md shadow-lavender-500/5 hover:shadow-lg hover:border-lavender-200 transition-all duration-400 h-full">
                <div className="w-12 h-12 rounded-xl bg-lavender-100 flex items-center justify-center mb-5 group-hover:bg-lavender-500 transition-colors">
                  <reason.icon className="w-6 h-6 text-lavender-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
