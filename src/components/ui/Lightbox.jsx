'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Lightbox({ isOpen, image, title, onClose, onPrev, onNext }) {
  // Disable background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 z-40 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none hidden sm:block"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Navigation - Next */}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 z-40 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none hidden sm:block"
              aria-label="Next Image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Content Container */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] max-h-[70vh]">
              {image.startsWith('<svg') ? (
                <div 
                  className="w-full h-full bg-white rounded-2xl p-8 flex items-center justify-center border-4 border-lavender-200"
                  dangerouslySetInnerHTML={{ __html: image }}
                />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              )}
            </div>
            
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-center"
              >
                <h4 className="text-white text-lg font-semibold">{title}</h4>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
