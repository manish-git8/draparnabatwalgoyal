'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import CertificateCardVisual from '@/components/ui/CertificateCardVisual';
import CredentialDetailModal from '@/components/ui/CredentialDetailModal';
import { certificates } from '@/data/certificates';
import { FiMaximize2 } from 'react-icons/fi';

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
          description="Tap any credential card to view full details."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveCert(cert)}
            >
              <div className="flex flex-col h-full glass-card p-4 border border-lavender-100 hover:border-lavender-300 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white">
                <div className="relative mb-4">
                  <CertificateCardVisual
                    icon={cert.icon}
                    gradient={cert.gradient}
                    badge={cert.badge}
                    size="md"
                    className="aspect-[16/11] w-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-xl bg-lavender-900/10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-sm text-[11px] sm:text-xs font-bold text-lavender-700 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1">
                      Tap to view <FiMaximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-lavender-600 bg-lavender-50 px-2.5 py-1 rounded-md inline-block">
                      {cert.badge}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-2.5 group-hover:text-lavender-700 transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold mt-1">{cert.issuer}</p>
                    {cert.description && (
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{cert.description}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-5 pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-400">Year: {cert.year}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-lavender-600 sm:group-hover:underline">
                      View credential <FiMaximize2 className="w-3 shrink-0" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CredentialDetailModal
        isOpen={!!activeCert}
        credential={activeCert}
        onClose={() => setActiveCert(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
