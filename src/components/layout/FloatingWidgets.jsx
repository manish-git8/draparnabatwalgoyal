'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export default function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Call Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
      >
        <a
          href="tel:+917879803842"
          className="flex items-center justify-center w-14 h-14 bg-white border-2 border-lavender-200 text-lavender-600 rounded-2xl shadow-lg hover:border-lavender-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          aria-label="Call Now"
        >
          <FiPhone className="w-5 h-5" />
        </a>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <a
          href="https://wa.me/917879803842?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-lavender-600 text-white rounded-2xl shadow-lg shadow-lavender-500/30 hover:shadow-lavender-500/50 hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
          aria-label="WhatsApp Consultation"
          style={{ '--tw-shadow-color': 'rgba(139, 92, 246, 0.4)' }}
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </motion.div>
    </div>
  );
}
