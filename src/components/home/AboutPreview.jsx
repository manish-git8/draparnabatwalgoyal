'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';
import { doctorGalleryImages } from '@/data/doctorGallery';
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from 'react-icons/fi';

export default function AboutPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = doctorGalleryImages.length;

  const highlights = [
    'MBBS — Seth GS Medical College & KEM Hospital, Mumbai',
    'MD (Radio-Diagnosis) — DPU, Pune',
    'Oncology Diagnostics — Tata Memorial Hospital, Mumbai',
    'Fetal Medicine Training — ScholarMD Edvent',
  ];

  const active = doctorGalleryImages[activeIndex];

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-lavender-100/50 rounded-full blur-[80px]" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Credentials gallery — below text on mobile for readability */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 w-full"
          >
            <div className="relative w-full max-w-lg mx-auto px-0 sm:px-2">
              <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full bg-lavender-100 rounded-3xl" />

              {/* Main certificate viewer */}
              <div className="relative">
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-1 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-lavender-100 hover:bg-lavender-50 sm:left-2 sm:h-10 sm:w-10"
                  aria-label="Previous certificate"
                >
                  <FiChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => openLightbox(activeIndex)}
                  className="relative mx-8 sm:mx-10 block w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gray-50 aspect-[4/3] ring-1 ring-lavender-100 group cursor-zoom-in touch-manipulation"
                  aria-label={`View ${active.title} certificate full screen`}
                >
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    className="object-contain p-2 sm:p-3 transition-transform duration-500 group-active:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                  <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-gray-700 shadow-md">
                    <FiMaximize2 className="w-3.5 h-3.5" />
                    Tap to enlarge
                  </span>
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-1 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-lavender-100 hover:bg-lavender-50 sm:right-2 sm:h-10 sm:w-10"
                  aria-label="Next certificate"
                >
                  <FiChevronRight className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-3 text-center text-sm font-semibold text-lavender-700 px-2">
                {active.title}
              </p>
              <p className="text-center text-xs text-gray-400 mt-1 lg:hidden">
                Swipe thumbnails or use arrows
              </p>

              {/* Thumbnails — horizontal scroll on mobile, grid on desktop */}
              <div
                className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-thin lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 lg:gap-2.5"
                role="tablist"
                aria-label="Certificate thumbnails"
              >
                {doctorGalleryImages.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    role="tab"
                    onClick={() => setActiveIndex(i)}
                    className={`relative shrink-0 snap-center w-[4.75rem] sm:w-20 lg:w-auto aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 ring-2 transition-all touch-manipulation ${
                      i === activeIndex
                        ? 'ring-lavender-500 shadow-md'
                        : 'ring-transparent opacity-75 hover:opacity-100 hover:ring-lavender-200'
                    }`}
                    aria-label={`Show ${img.title}`}
                    aria-selected={i === activeIndex}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-contain p-0.5"
                      sizes="(max-width: 1024px) 72px, 120px"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-5 flex justify-center sm:mt-6 lg:absolute lg:-bottom-4 lg:right-0 lg:mt-0">
                <div className="bg-white rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl border border-lavender-100 text-center">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">MBBS, MD</div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                    Qualifications
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              badge="About the Doctor"
              title="Dedicated to Diagnostic Excellence"
              center={false}
            />

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-snug mb-4">
              Dr. Aparna is a highly skilled radiologist with a passion for accurate diagnosis and
              patient-centered care.
            </h3>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
              With over a decade of experience in diagnostic radiology, Dr. Aparna has established
              herself as a trusted name in medical imaging at SNG Hospital, Indore. Her specialized
              training in Oncology Imaging, Fetal Medicine, and Advanced Diagnostics sets her apart
              as a uniquely qualified specialist.
            </p>

            <div className="space-y-2.5 sm:space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary inline-flex w-full sm:w-auto justify-center items-center gap-2"
            >
              Learn More About Dr. Aparna
              <FiArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        image={active?.src}
        title={active?.title}
        onClose={() => setLightboxOpen(false)}
        onPrev={total > 1 ? goPrev : undefined}
        onNext={total > 1 ? goNext : undefined}
      />
    </section>
  );
}
