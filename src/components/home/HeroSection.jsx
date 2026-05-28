'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiCalendar, FiClock, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-medical.png"
          alt="Medical technology background"
          fill
          priority
          className="object-cover opacity-[0.06] mix-blend-overlay"
        />
      </div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-lavender-300/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender-200/20 rounded-full blur-[80px]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100/80 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-lavender-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-lavender-700 tracking-wide">
                Available for Consultation • 11 AM - 4 PM
              </span>
            </motion.div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Advanced Radiology &{' '}
              <span className="gradient-text">Diagnostic Care</span>{' '}
              for Indore with Precision and Compassion
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              Trusted Diagnostic Radiologist in Indore for Oncology Imaging and Fetal Medicine, with
              10+ years of experience delivering accurate, advanced imaging at SNG Hospital.
            </p>

            {/* Quick Info Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: FiAward, text: 'MBBS, MD' },
                { icon: FiCheckCircle, text: '10+ Years Experience' },
                { icon: FiMapPin, text: 'SNG Hospital, Indore' },
                { icon: FiClock, text: '11 AM — 4 PM' },
              ].map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm text-gray-600 border border-lavender-100 shadow-sm"
                >
                  <tag.icon className="w-4 h-4 text-lavender-500" />
                  {tag.text}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/appointment" className="btn-primary">
                  <FiCalendar className="w-5 h-5" />
                  Book Appointment
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <a
                  href="https://wa.me/917879803842?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp Consultation
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <a href="tel:+917879803842" className="btn-secondary">
                  <FiPhone className="w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-lavender-200/40 rounded-3xl rotate-12 animate-float" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-lavender-300/30 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-lavender-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

              {/* Image Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[380px] md:w-96 md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-lavender-500/20 border-4 border-white/50">
                <Image
                  src="/doctor-profile.jpg"
                  alt="Dr. Aparna — Senior Radiologist at SNG Hospital, Indore"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 384px"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-lavender-900/40 to-transparent" />
              </div>

              {/* Floating Badge - Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="absolute -bottom-3 -left-3 sm:left-4 glass rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-gray-500 font-medium">Years Experience</div>
              </motion.div>

              {/* Floating Badge - Fellowship */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: 'spring' }}
                className="absolute -top-2 -right-2 sm:right-4 glass rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold gradient-text">3</div>
                <div className="text-xs text-gray-500 font-medium">Specializations</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
