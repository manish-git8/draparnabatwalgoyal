'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Lightbox({ isOpen, image, title, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(diff) < 48) return;
    if (diff > 0 && onNext) onNext();
    else if (diff < 0 && onPrev) onPrev();
  };

  const navBtnClass =
    'z-40 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 active:bg-white/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={title || 'Image viewer'}
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex shrink-0 items-center justify-between gap-3 px-3 pt-3 pb-2 sm:px-6 sm:pt-5 safe-top">
            {title ? (
              <p className="min-w-0 flex-1 truncate text-sm font-semibold text-white sm:text-base">
                {title}
              </p>
            ) : (
              <span className="flex-1" />
            )}
            <button
              type="button"
              onClick={onClose}
              className={`${navBtnClass} h-10 w-10 shrink-0 sm:h-11 sm:w-11`}
              aria-label="Close"
            >
              <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Image area */}
          <div
            className="relative flex flex-1 min-h-0 items-center justify-center px-2 sm:px-14"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            {onPrev && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className={`${navBtnClass} absolute left-2 h-10 w-10 sm:left-4 sm:h-12 sm:w-12`}
                aria-label="Previous"
              >
                <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}

            <motion.div
              key={image}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative h-full w-full max-w-4xl"
            >
              <div className="relative mx-auto h-full min-h-[200px] max-h-[calc(100dvh-10rem)] w-full">
                {image?.startsWith('<svg') ? (
                  <div
                    className="flex h-full w-full items-center justify-center rounded-xl bg-white p-4 sm:p-8"
                    dangerouslySetInnerHTML={{ __html: image }}
                  />
                ) : (
                  <Image
                    src={image}
                    alt={title || ''}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                )}
              </div>
            </motion.div>

            {onNext && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className={`${navBtnClass} absolute right-2 h-10 w-10 sm:right-4 sm:h-12 sm:w-12`}
                aria-label="Next"
              >
                <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}
          </div>

          {/* Mobile hint + bottom nav */}
          {(onPrev || onNext) && (
            <div
              className="shrink-0 flex items-center justify-center gap-4 px-4 pb-4 pt-2 safe-bottom sm:pb-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                disabled={!onPrev}
                onClick={onPrev}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-40 sm:hidden"
              >
                <FiChevronLeft className="h-4 w-4" />
                Previous
              </button>
              <p className="hidden text-xs text-white/50 sm:block">Swipe or use arrow keys</p>
              <button
                type="button"
                disabled={!onNext}
                onClick={onNext}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-40 sm:hidden"
              >
                Next
                <FiChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
