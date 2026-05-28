'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiActivity, FiBriefcase, FiHeart } from 'react-icons/fi';
import SectionHeading from '@/components/ui/SectionHeading';

const timelineEvents = [
  {
    year: '2021 — Present',
    title: 'Senior Consultant Radiologist',
    institution: 'SNG Hospital, Indore',
    description: 'Leading diagnostic medical imaging and reporting. Expert in high-resolution ultrasound, advanced CT scans, fetal anomalies surveys, and specialized MSK & oncological imaging.',
    icon: FiBriefcase,
    color: 'bg-lavender-500',
  },
  {
    year: '2025 — 2026',
    title: 'Fetal Medicine Training Programme',
    institution: 'ScholarMD Edvent',
    description: 'Completed a comprehensive structured continuing medical education programme in fetal medicine and advanced prenatal diagnostics.',
    icon: FiAward,
    color: 'bg-lavender-600',
  },
  {
    year: '2017 — 2018',
    title: 'Clinical Associate (Radiodiagnosis)',
    institution: 'Bombay Hospital, Indore',
    description: 'Gained intensive clinical exposure and residency training in multi-modality radiology including advanced CT, MRI, X-Ray, and ultrasonography at a premium 600-bed tertiary care hospital.',
    icon: FiBriefcase,
    color: 'bg-lavender-500',
  },
  {
    year: '2016',
    title: 'Clinical Observership (Radio-Diagnosis)',
    institution: 'Tata Memorial Hospital, Mumbai',
    description: 'Completed specialized clinical observership and hands-on training in oncology imaging and staging diagnostics at India\'s top premier cancer research center.',
    icon: FiAward,
    color: 'bg-lavender-600',
  },
  {
    year: '2013 — 2016',
    title: 'MD in Radio-Diagnosis',
    institution: 'Dr. D.Y. Patil Medical College, Hospital & Research Centre, Pune',
    description: 'Completed postgraduate medical residency and Doctor of Medicine (MD) degree in Radiology, acquiring broad expertise across all major diagnostic imaging modalities.',
    icon: FiBookOpen,
    color: 'bg-lavender-500',
  },
  {
    year: '2006 — 2011',
    title: 'MBBS (Bachelor of Medicine & Surgery)',
    institution: 'Seth GS Medical College & KEM Hospital, Mumbai',
    description: 'Earned undergraduate medical degree from one of India\'s most elite, historic, and prestigious government medical institutions with intensive hospital residency.',
    icon: FiHeart,
    color: 'bg-lavender-400',
  },
];

export default function Timeline() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          badge="JOURNEY & MILESTONES"
          title="Education & Specializations"
          description="A chronological timeline of Dr. Aparna's medical education, specialized fellowships, and clinical milestones."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="timeline-line hidden md:block" />

          {/* Timeline Events */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">
                  {/* Left Side Content (for even index on desktop) */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'} order-3`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                      className="glass-card p-6 md:p-8"
                    >
                      <span className="inline-block text-xs font-bold text-lavender-600 bg-lavender-100 px-3 py-1 rounded-full mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                      <div className="text-sm font-semibold text-lavender-600 mb-3">{event.institution}</div>
                      <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon Badge (Center) */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-[12px] md:-translate-x-1/2 z-10 md:order-2 order-1 my-3 md:my-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center text-white shadow-lg shadow-lavender-500/20`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Spacer for Desktop (for opposite side of card) */}
                  <div className="hidden md:block w-[45%] md:order-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
