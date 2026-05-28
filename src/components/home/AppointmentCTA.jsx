'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function AppointmentCTA() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[50px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-xs font-semibold text-white/90 tracking-wider uppercase mb-5">
              Book Your Consultation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
              Take the First Step Towards{' '}
              <br className="hidden md:block" />
              Better Diagnostic Care
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Schedule your appointment with Dr. Aparna today. Expert diagnostic consultation 
              with compassionate care at SNG Hospital, Indore.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-lavender-700 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <FiCalendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="https://wa.me/917879803842?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/25 transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+917879803842"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/25 transition-all duration-300"
              >
                <FiPhone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
