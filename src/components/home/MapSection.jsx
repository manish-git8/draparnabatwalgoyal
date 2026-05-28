'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiMapPin, FiPhone, FiClock, FiNavigation } from 'react-icons/fi';

export default function MapSection() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <SectionHeading
          badge="Find Us"
          title="Visit SNG Hospital"
          subtitle="Conveniently located in South Tukoganj, Indore. Easy access with ample parking available."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-lavender-100 h-[350px] md:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1706248239016!2d75.8794337149021!3d22.72028479513361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdf0e614e0c5%3A0x728aa04c2a007156!2sSNG+Hospital!5e0!3m2!1sen!2sin!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SNG Hospital Location - Indore"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-lavender-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm" style={{ fontFamily: 'var(--font-outfit)' }}>Address</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Navkar II Apartment, Banwari Lal Jaju Marg, Near Jain Temple, South Tukoganj, Indore, MP 452001
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5 text-lavender-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm" style={{ fontFamily: 'var(--font-outfit)' }}>Phone</h4>
                  <a href="tel:+917879803842" className="text-sm text-lavender-600 font-medium hover:text-lavender-700 transition-colors">
                    +91 78798 03842
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-5 h-5 text-lavender-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm" style={{ fontFamily: 'var(--font-outfit)' }}>Consultation Hours</h4>
                  <p className="text-sm text-gray-500">Monday — Saturday</p>
                  <p className="text-sm text-lavender-600 font-semibold">11:00 AM — 4:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//SNG+Hospital,+Navkar+-+II+Apartment,+Banwari+Lal+Jaju+Marg,+near+Jain+Temple,+South+Tukoganj,+Indore,+Madhya+Pradesh+452001/@22.7378602,75.8882503,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fdf0e614e0c5:0x728aa04c2a007156!2m2!1d75.8816224!2d22.7202848"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 gradient-primary text-white rounded-xl font-semibold text-sm shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FiNavigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
