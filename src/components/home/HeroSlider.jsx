'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FiPhone,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiAward,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from 'react-icons/fi';

const SLIDE_DURATION = 3000;

const slides = [
  {
    id: 'doctor',
    type: 'intro',
    badge: 'Senior Radiologist • SNG Hospital, Indore',
    headline: 'Dr. Aparna Bhatwal Goyal',
    highlight: 'Best in Advanced Diagnostic Radiology',
    subheadline:
      'Trusted for precision CT, USG, oncology imaging & fetal medicine — compassionate care with 10+ years of clinical excellence in Indore.',
    image: '/doctor-profile.jpg',
    imageAlt: 'Dr. Aparna Bhatwal Goyal — Senior Radiologist, Indore',
    tags: [
      { icon: FiAward, text: 'MBBS, MD' },
      { icon: FiCheckCircle, text: '10+ Years' },
      { icon: FiMapPin, text: 'SNG Hospital' },
      { icon: FiClock, text: '11 AM — 4 PM' },
    ],
    primaryCta: { label: 'Book Appointment', href: '/appointment' },
    secondaryCta: { label: 'View Services', href: '/services' },
    accent: '#8B5CF6',
  },
  {
    id: 'ct-scan',
    type: 'service',
    badge: 'AI-Powered Imaging',
    headline: 'Advanced CT Scan',
    highlight: 'High-Resolution Diagnostics',
    subheadline:
      '128-slice CT with AI-assisted analysis, same-day reports, and 3D reconstruction for accurate clinical decisions.',
    image: '/images/slider-ct-scan.png',
    imageAlt: 'Advanced CT scan imaging',
    features: ['128-Slice Scanner', 'AI Analysis', 'Same-Day Reports', '3D Reconstruction'],
    primaryCta: { label: 'Book CT Scan', href: '/appointment?service=ct-scan' },
    secondaryCta: { label: 'Learn More', href: '/services/ct-scan' },
    accent: '#7C3AED',
  },
  {
    id: 'usg',
    type: 'service',
    badge: 'Precision Ultrasound',
    headline: 'USG & Ultrasound',
    highlight: 'Trusted Diagnostic Imaging',
    subheadline:
      'HD ultrasound with color Doppler and expert radiologist interpretation for fast, reliable medical insights.',
    image: '/images/slider-usg.png',
    imageAlt: 'Ultrasound and USG diagnostics',
    features: ['HD Ultrasound', 'Color Doppler', 'Expert Review', 'Instant Imaging'],
    primaryCta: { label: 'Book USG', href: '/appointment?service=usg' },
    secondaryCta: { label: 'Learn More', href: '/services/usg-ultrasound' },
    accent: '#8B5CF6',
  },
  {
    id: 'fetal',
    type: 'service',
    badge: 'Fetal Medicine Specialist',
    headline: 'Fetal Medicine',
    highlight: 'Advanced Prenatal Care',
    subheadline:
      'Fellowship-level fetal imaging with detailed anatomy scans, 3D/4D views, and early anomaly detection for peace of mind.',
    image: '/images/slider-fetal-medicine.png',
    imageAlt: 'Fetal medicine and prenatal imaging',
    features: ['Fellowship Care', 'Detailed Anatomy', '3D/4D Imaging', 'Early Detection'],
    primaryCta: { label: 'Book Fetal Scan', href: '/appointment?service=fetal-medicine-imaging' },
    secondaryCta: { label: 'Learn More', href: '/services/fetal-medicine-imaging' },
    accent: '#A78BFA',
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 48 },
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, x: -48, transition: { duration: 0.4 } },
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const slide = slides[current];

  const goTo = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const tick = 50;
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const nextP = p + tick / SLIDE_DURATION;
        if (nextP >= 1) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return nextP;
      });
    }, tick);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-20"
      aria-label="Homepage hero slider"
    >
      {/* Light lavender background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-16 right-0 w-[min(520px,55vw)] h-[min(520px,55vw)] bg-lavender-300/25 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[min(420px,45vw)] h-[min(420px,45vw)] bg-lavender-200/30 rounded-full blur-[90px]" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="container-custom relative z-10 py-10 md:py-14 lg:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            {/* Text column */}
            <div className="order-2 lg:order-1">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 border backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  borderColor: `${slide.accent}33`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: slide.accent }}
                />
                <span className="text-xs font-semibold text-lavender-800 tracking-wide">
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.12] mb-4">
                {slide.headline}{' '}
                <span className="gradient-text block sm:inline mt-1 sm:mt-0">
                  {slide.highlight}
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
                {slide.subheadline}
              </p>

              {slide.type === 'intro' && slide.tags && (
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {slide.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/90 rounded-xl text-sm text-gray-600 border border-lavender-100 shadow-sm"
                    >
                      <tag.icon className="w-4 h-4 text-lavender-500" />
                      {tag.text}
                    </span>
                  ))}
                </div>
              )}

              {slide.type === 'service' && slide.features && (
                <div className="flex flex-wrap gap-2 mb-7">
                  {slide.features.map((f) => (
                    <span
                      key={f}
                      className="px-3.5 py-2 text-sm font-medium text-lavender-800 bg-white/90 border border-lavender-200/80 rounded-xl shadow-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Link href={slide.primaryCta.href} className="btn-primary">
                  <FiCalendar className="w-5 h-5" />
                  {slide.primaryCta.label}
                </Link>
                {slide.type === 'intro' ? (
                  <>
                    <a
                      href="https://wa.me/917879803842?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a href="tel:+917879803842" className="btn-secondary">
                      <FiPhone className="w-5 h-5" />
                      Call Now
                    </a>
                  </>
                ) : (
                  <Link href={slide.secondaryCta.href} className="btn-secondary">
                    {slide.secondaryCta.label}
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Image column */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div
                  className="absolute -inset-3 rounded-[2rem] opacity-60 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${slide.accent}40, #EDE9FE)`,
                  }}
                />
                <div
                  className={`relative overflow-hidden shadow-2xl border-4 border-white/80 bg-white/50 backdrop-blur-sm ${
                    slide.type === 'intro'
                      ? 'rounded-[2rem] aspect-[4/5] max-h-[480px]'
                      : 'rounded-[1.75rem] aspect-square max-h-[420px]'
                  }`}
                  style={{ boxShadow: `0 24px 60px ${slide.accent}25` }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={current === 0}
                    className={`object-cover ${slide.type === 'intro' ? 'object-top' : 'object-center'}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {slide.type === 'intro' && (
                  <>
                    <div className="absolute -bottom-2 left-4 glass rounded-2xl px-5 py-3 shadow-lg border border-lavender-100/80">
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <div className="text-xs text-gray-500 font-medium">Years Experience</div>
                    </div>
                    <div className="absolute -top-2 right-4 glass rounded-2xl px-5 py-3 shadow-lg border border-lavender-100/80">
                      <div className="text-2xl font-bold gradient-text">3</div>
                      <div className="text-xs text-gray-500 font-medium">Specializations</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider controls */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                className="group relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500"
                style={{ width: i === current ? 56 : 28 }}
                aria-label={`Go to slide ${i + 1}: ${s.headline}`}
                aria-current={i === current ? 'true' : undefined}
              >
                <span className="absolute inset-0 bg-lavender-200 rounded-full" />
                <span
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-150"
                  style={{
                    width: i === current ? `${progress * 100}%` : i < current ? '100%' : '0%',
                    backgroundColor: s.accent,
                  }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="w-11 h-11 rounded-xl border border-lavender-200 bg-white/90 text-lavender-700 flex items-center justify-center hover:bg-lavender-50 hover:border-lavender-300 transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-semibold text-lavender-700 tabular-nums min-w-[3rem] text-center">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={next}
              className="w-11 h-11 rounded-xl border border-lavender-200 bg-white/90 text-lavender-700 flex items-center justify-center hover:bg-lavender-50 hover:border-lavender-300 transition-all shadow-sm"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom soft fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-lavender-bg/80 to-transparent pointer-events-none" />
    </section>
  );
}
