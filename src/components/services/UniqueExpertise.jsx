'use client';

import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiHeart, FiCpu } from 'react-icons/fi';
import SectionHeading from '@/components/ui/SectionHeading';

const expertises = [
  {
    icon: FiAward,
    title: 'Triple Fellowship Specialization',
    description: 'Specialized fellowships in Musculoskeletal (MSK) Radiology, Oncological Imaging, and Fetal Medicine. This triple expertise provides unmatched diagnostics for orthopedic, cancer, and prenatal cases.',
  },
  {
    icon: FiCpu,
    title: 'Advanced Diagnostic Technology',
    description: 'Utilizing state-of-the-art ultrasound, high-resolution CT scan machines, and modern MRI capabilities at SNG Hospital to capture extremely clear scans with minimum exposure.',
  },
  {
    icon: FiTarget,
    title: 'Precision Medical Reporting',
    description: 'Providing detailed, accurate, and structured reports that match international reporting guidelines (like BI-RADS, LI-RADS). This ensures absolute clarity for referral surgeons and physicians.',
  },
  {
    icon: FiHeart,
    title: 'Compassionate Fetal Counseling',
    description: 'Offering dedicated counseling sessions for expectant mothers during fetal anatomy and high-risk scans. We provide patient-first medical counseling with extreme empathy and clarity.',
  },
];

export default function UniqueExpertise() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-lavender-bg to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-lavender-200/20 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="CLINICAL STANDARDS"
          title="Our Unique Expertise"
          description="What sets Dr. Aparna's radiology services apart: cutting-edge specialized education, clinical precision, and empathetic patient care."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {expertises.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col sm:flex-row gap-6 border-2 border-lavender-100 hover:border-lavender-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{exp.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
