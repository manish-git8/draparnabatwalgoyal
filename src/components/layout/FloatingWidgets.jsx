'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiArrowUp } from 'react-icons/fi';
import { WHATSAPP_URL } from '@/lib/site';

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-white border-2 border-lavender-200 text-lavender-700 rounded-full shadow-lg hover:bg-lavender-50"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}

      <a
        href="tel:+917879803842"
        className="flex items-center justify-center w-12 h-12 bg-white border-2 border-lavender-200 text-lavender-600 rounded-full shadow-lg hover:bg-lavender-50"
        aria-label="Call Now"
      >
        <FiPhone className="w-5 h-5" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 pl-4 pr-5 py-3 bg-[#25D366] text-white rounded-full shadow-xl shadow-green-500/30 hover:bg-[#20BD5A]"
        aria-label="Book on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 shrink-0" />
        <span className="text-sm font-bold whitespace-nowrap hidden sm:inline">Book on WhatsApp</span>
      </a>
    </div>
  );
}
