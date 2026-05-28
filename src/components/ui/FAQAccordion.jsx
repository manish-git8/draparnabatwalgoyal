'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQAccordion({ items, limit }) {
  const [openIndex, setOpenIndex] = useState(0);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="space-y-3">
      {displayItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
          >
            <span className={`text-sm md:text-base font-semibold pr-4 transition-colors duration-300 ${
              openIndex === index ? 'text-lavender-700' : 'text-gray-800'
            }`}>
              {item.question}
            </span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
              openIndex === index
                ? 'bg-lavender-500 text-white rotate-0'
                : 'bg-lavender-50 text-lavender-500 rotate-0'
            }`}>
              {openIndex === index ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
            </span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
