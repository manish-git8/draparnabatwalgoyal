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
    <section className="section-padding gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg-network.png"
          alt="Abstract medical network background"
          fill
          className="object-cover opacity-15 mix-blend-overlay"
        />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Patients Trust Dr. Aparna"
          subtitle="Excellence in diagnostics backed by specialized training, advanced technology, and compassionate patient care."
          light={true}
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
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-all duration-400 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 group-hover:bg-white/25 transition-colors">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {reason.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
