'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';
import { FiAward, FiMaximize2 } from 'react-icons/fi';

const certificates = [
  {
    id: 1,
    title: 'Postgraduate Degree of Doctor of Medicine (MD)',
    issuer: 'Dr. D.Y. Patil Vidyapeeth (Deemed University), Pune',
    year: '2016',
    badge: 'MD Radiodiagnosis',
    image: '/images/2b18b280-c6b7-4ce0-a1d5-1347e52fb480.jpg',
    description: 'Postgraduate Doctor of Medicine in Radio-Diagnosis degree certificate, conferred in May 2016.'
  },
  {
    id: 2,
    title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    issuer: 'Seth GS Medical College & KEM Hospital, Mumbai (MUHS)',
    year: '2010',
    badge: 'MBBS Degree',
    image: '/images/fec222b1-4aa0-4bd9-b0ab-e9cbdb92578f.jpg',
    description: 'Undergraduate medical degree from the prestigious Seth Gordhandas Sunderdas Medical College & KEM Hospital, Mumbai.'
  },
  {
    id: 3,
    title: 'Fetal Medicine Training Programme Certificate',
    issuer: 'ScholarMD Edvent (Continuing Medical Education)',
    year: '2025-2026',
    badge: 'Fetal Medicine',
    image: '/images/126c4452-4649-486a-b2df-106d79cc73f3.jpg',
    description: 'Certificate for completing the comprehensive structured Fetal Medicine Training Programme (ScholarMD Edvent).'
  },
  {
    id: 4,
    title: 'Clinical Observership & Training Certificate',
    issuer: 'Tata Memorial Hospital, Mumbai (Tata Memorial Centre)',
    year: '2016',
    badge: 'Oncology Imaging',
    image: '/images/40695ed2-50ae-42ae-bef0-7b5c8715a33e.jpg',
    description: 'Specialized clinical observership and training in the Department of Radio-Diagnosis at India\'s premier cancer research institute.'
  },
  {
    id: 5,
    title: 'Clinical Associate Experience Certificate',
    issuer: 'Bombay Hospital, Indore (NABH Accredited)',
    year: '2017-2018',
    badge: 'Experience Track',
    image: '/images/3a279660-cc77-446a-8daf-1dbe2929a6c1.jpg',
    description: 'Experience certificate as Clinical Associate in the Department of Radiodiagnosis (CT, MRI, X-Ray, USG).'
  },
  {
    id: 6,
    title: 'MP Medical Council Additional Registration Certificate',
    issuer: 'Madhya Pradesh Medical Council, Bhopal',
    year: '2017',
    badge: 'Postgraduate Reg',
    image: '/images/13bd4664-6594-4ac9-ba34-01628126bb95.jpg',
    description: 'Additional medical registration certificate certifying the MD (Radiodiagnosis) qualification permanently against MP-21441.'
  },
  {
    id: 7,
    title: 'MBBS Reciprocal Registration Certificate',
    issuer: 'Madhya Pradesh Medical Council',
    year: '2017',
    badge: 'Medical Registration',
    image: '/images/4bba806b-48df-421e-9cb9-93499f7ceaa4.jpg',
    description: 'Official reciprocal permanent medical registration certificate for the undergraduate qualification.'
  },
  {
    id: 8,
    title: 'Bombay Hospital Experience Letter (Framed)',
    issuer: 'Bombay Hospital, Indore (NABH Accredited)',
    year: '2018',
    badge: 'Experience Letter',
    image: '/images/4e2582ca-3c48-4f9b-bc05-cc1059a34c88.jpg',
    description: 'Framed official experience certificate from Bombay Hospital, Indore — a 600-bed multi-specialty tertiary care NABH accredited hospital.'
  }
];

export default function CertificatesGallery() {
  const [activeCert, setActiveCert] = useState(null);

  const handlePrev = () => {
    const currentIndex = certificates.findIndex((c) => c.id === activeCert.id);
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    setActiveCert(certificates[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = certificates.findIndex((c) => c.id === activeCert.id);
    const nextIndex = (currentIndex + 1) % certificates.length;
    setActiveCert(certificates[nextIndex]);
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="container-custom">
        <SectionHeading
          badge="BOARD CREDENTIALS"
          title="Certificates & Accreditations"
          description="Click on any certificate to view the verified credential in detail."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cert.id * 0.05 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveCert(cert)}
            >
              <div className="flex flex-col h-full glass-card p-4 border border-lavender-100 hover:border-lavender-300 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white">
                {/* Certificate Thumbnail Preview */}
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden mb-4 border border-lavender-100 bg-gray-50 shadow-sm">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-lavender-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-sm text-xs font-bold text-lavender-700 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      Enlarge <FiMaximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-lavender-600 bg-lavender-50 px-2.5 py-1 rounded-md inline-block">
                      {cert.badge}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-2.5 group-hover:text-lavender-700 transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold mt-1">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-400">Year: {cert.year}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-lavender-600 group-hover:underline">
                      View Verified Credential <FiMaximize2 className="w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={!!activeCert}
        image={activeCert?.image || ''}
        title={activeCert?.title || ''}
        onClose={() => setActiveCert(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
