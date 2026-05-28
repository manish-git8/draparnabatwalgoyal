'use client';

import './DiagnosticsSlider.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/* ─────────────────────────── Slide Data ─────────────────────────── */
const slides = [
  {
    id: 'ct-scan',
    image: '/images/slider-ct-scan.png',
    badge: 'AI-Powered Imaging',
    headline: 'Advanced CT Scan Technology',
    subheadline: 'Fast, Accurate & High-Resolution Diagnostic Imaging',
    features: [
      '128-Slice CT Scanner',
      'AI-Enhanced Analysis',
      'Same-Day Reports',
      '3D Reconstruction',
    ],
    cta: 'Book CT Scan',
    ctaLink: '/appointment?service=ct-scan',
    accent: '#A78BFA',
    accentRgb: '167, 139, 250',
  },
  {
    id: 'usg',
    image: '/images/slider-usg.png',
    badge: 'Precision Diagnostics',
    headline: 'Precision Ultrasound & USG Diagnostics',
    subheadline: 'Trusted Imaging for Accurate Medical Insights',
    features: [
      'HD Ultrasound',
      'Color Doppler',
      'Expert Radiologists',
      'Instant Imaging',
    ],
    cta: 'Book USG Appointment',
    ctaLink: '/appointment?service=usg',
    accent: '#8B5CF6',
    accentRgb: '139, 92, 246',
  },
  {
    id: 'fetal-medicine',
    image: '/images/slider-fetal-medicine.png',
    badge: 'Fetal Medicine',
    headline: 'Fetal Medicine & Advanced Prenatal Imaging',
    subheadline: 'Expert-Level Fetal Well-being and Detailed Anatomy Imaging',
    features: [
      'Fellowship Trained Care',
      'Detailed Fetal Anatomy',
      '3D/4D Live Imaging',
      'Early Anomaly Detection',
    ],
    cta: 'Book Fetal Scan',
    ctaLink: '/appointment?service=fetal-medicine-imaging',
    accent: '#C4B5FD',
    accentRgb: '196, 181, 253',
  },
];

/* ─────────────────────── Particle System ────────────────────────── */
function Particles({ color }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.15 + 0.05,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="diag-particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="diag-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: color,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}



/* ─────────────────── Progress Ring ───────────────────────────────── */
function ProgressRing({ progress, accent }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <svg width="44" height="44" className="diag-progress-ring">
      <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <circle
        cx="22"
        cy="22"
        r={r}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - progress)}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.3s linear', transform: 'rotate(-90deg)', transformOrigin: 'center' }}
      />
    </svg>
  );
}

/* ═══════════════════ MAIN SLIDER COMPONENT ══════════════════════ */
export default function DiagnosticsSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const DURATION = 5000; // 5s per slide
  const TICK = 50;

  const goTo = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + TICK / DURATION;
        if (next >= 1) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, TICK);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const slide = slides[current];

  /* ── Animation Variants ── */
  const bgVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const textVariants = {
    enter: (i) => ({ opacity: 0, y: 40, filter: 'blur(8px)' }),
    center: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
    }),
    exit: { opacity: 0, y: -20, filter: 'blur(4px)', transition: { duration: 0.3 } },
  };

  return (
    <section
      id="diagnostics-slider"
      className="diag-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background Layers ── */}
      <div className="diag-bg-base" />

      {/* ── Ambient Glow ── */}
      <div
        className="diag-ambient-glow"
        style={{ background: `radial-gradient(ellipse 60% 50% at 30% 50%, rgba(${slide.accentRgb}, 0.08) 0%, transparent 70%)` }}
      />
      <div
        className="diag-ambient-glow diag-ambient-glow-2"
        style={{ background: `radial-gradient(ellipse 40% 60% at 80% 70%, rgba(${slide.accentRgb}, 0.05) 0%, transparent 60%)` }}
      />

      {/* ── Particles ── */}
      <Particles color={slide.accent} />

      {/* ── Grid Pattern ── */}
      <div className="diag-grid-pattern" />

      {/* ═══ Content ═══ */}
      <div className="container-custom diag-content">
        <div className="diag-layout-grid">
          {/* Left Column (Text & Controls) */}
          <div className="diag-col-left">
            <AnimatePresence mode="wait">
              <motion.div key={slide.id} className="diag-content-inner">
                {/* Brand Bar */}
                <motion.div className="diag-brand" custom={0} variants={textVariants} initial="enter" animate="center" exit="exit">
                  <span className="diag-brand-line" style={{ backgroundColor: slide.accent }} />
                  <span className="diag-brand-name">Antigravity Diagnostics & Imaging Center</span>
                </motion.div>

                {/* Badge */}
                <motion.div
                  className="diag-badge"
                  custom={1}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ borderColor: `rgba(${slide.accentRgb}, 0.3)`, boxShadow: `0 0 20px rgba(${slide.accentRgb}, 0.1)` }}
                >
                  <span className="diag-badge-dot" style={{ backgroundColor: slide.accent, boxShadow: `0 0 8px ${slide.accent}` }} />
                  <span>{slide.badge}</span>
                </motion.div>

                {/* Headline */}
                <motion.h1 className="diag-headline" custom={2} variants={textVariants} initial="enter" animate="center" exit="exit">
                  {slide.headline.split(' ').map((word, i) => {
                    // Highlight key words
                    const highlights = ['CT', 'Scan', 'Ultrasound', 'USG', 'Fetal', 'Medicine'];
                    const isHighlight = highlights.includes(word);
                    return (
                      <span key={i}>
                        {isHighlight ? (
                          <span className="diag-headline-accent" style={{ color: slide.accent, textShadow: `0 0 30px rgba(${slide.accentRgb}, 0.4)` }}>
                            {word}
                          </span>
                        ) : (
                          word
                        )}{' '}
                      </span>
                    );
                  })}
                </motion.h1>

                {/* Subheadline */}
                <motion.p className="diag-subheadline" custom={3} variants={textVariants} initial="enter" animate="center" exit="exit">
                  {slide.subheadline}
                </motion.p>

                {/* Feature Pills */}
                <motion.div className="diag-features" custom={4} variants={textVariants} initial="enter" animate="center" exit="exit">
                  {slide.features.map((f, i) => (
                    <span
                      key={i}
                      className="diag-feature-pill"
                      style={{ borderColor: `rgba(${slide.accentRgb}, 0.25)`, animationDelay: `${i * 0.15}s` }}
                    >
                      <span className="diag-feature-icon" style={{ color: slide.accent }}>✦</span>
                      {f}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div className="diag-cta-row" custom={5} variants={textVariants} initial="enter" animate="center" exit="exit">
                  <Link
                    href={slide.ctaLink}
                    className="diag-cta-btn"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}cc)`,
                      boxShadow: `0 4px 24px rgba(${slide.accentRgb}, 0.4), 0 0 60px rgba(${slide.accentRgb}, 0.15)`,
                    }}
                  >
                    <span>{slide.cta}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/services" className="diag-cta-ghost">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>View All Services</span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Crisp Frame Image) */}
          <div className="diag-col-right">
            <div
              className="diag-image-frame-wrapper"
              style={{
                borderColor: `rgba(${slide.accentRgb}, 0.18)`,
                boxShadow: `0 24px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(${slide.accentRgb}, 0.12)`,
              }}
            >
              <AnimatePresence>
                <motion.div
                  key={slide.id}
                  className="diag-slider-image-wrap"
                  variants={bgVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Navigation Controls ── */}
        <div className="diag-nav">
          {/* Slide indicators */}
          <div className="diag-indicators">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`diag-indicator ${i === current ? 'diag-indicator--active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className="diag-indicator-fill"
                  style={{
                    backgroundColor: s.accent,
                    width: i === current ? `${progress * 100}%` : i < current ? '100%' : '0%',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Arrows + Progress */}
          <div className="diag-arrows">
            <button onClick={prev} className="diag-arrow" aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="diag-counter">
              <ProgressRing progress={progress} accent={slide.accent} />
              <span className="diag-counter-text">
                {String(current + 1).padStart(2, '0')}<span className="diag-counter-sep">/</span>{String(slides.length).padStart(2, '0')}
              </span>
            </div>
            <button onClick={next} className="diag-arrow" aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom Gradient Fade ── */}
      <div className="diag-bottom-fade" />
    </section>
  );
}
