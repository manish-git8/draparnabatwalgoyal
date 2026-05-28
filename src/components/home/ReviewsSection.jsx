'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import { reviews } from '@/data/reviews';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) return (prev + 1) % reviews.length;
      return prev === 0 ? reviews.length - 1 : prev - 1;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section className="section-padding bg-lavender-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lavender-200/30 rounded-full blur-[100px]" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Patient Reviews"
          title="What Our Patients Say"
          subtitle="Real experiences from patients who trust Dr. Aparna for their diagnostic needs."
        />

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass-card p-8 md:p-10 text-center"
              >
                <FaQuoteLeft className="w-8 h-8 text-lavender-200 mx-auto mb-5" />
                <div className="flex justify-center mb-4">
                  <StarRating rating={reviews[current].rating} size="lg" />
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <div>
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {reviews[current].name.charAt(0)}
                  </div>
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'var(--font-outfit)' }}>
                    {reviews[current].name}
                  </p>
                  <p className="text-sm text-lavender-500 font-medium">{reviews[current].service}</p>
                  <p className="text-xs text-gray-400 mt-1">{reviews[current].date}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-xl bg-white border border-lavender-200 flex items-center justify-center text-lavender-600 hover:bg-lavender-50 hover:border-lavender-300 transition-all shadow-sm"
              aria-label="Previous review"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-lavender-500' : 'w-2 bg-lavender-200 hover:bg-lavender-300'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-xl bg-white border border-lavender-200 flex items-center justify-center text-lavender-600 hover:bg-lavender-50 hover:border-lavender-300 transition-all shadow-sm"
              aria-label="Next review"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
