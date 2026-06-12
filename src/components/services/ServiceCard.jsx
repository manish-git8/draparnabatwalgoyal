'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { SERVICE_CARD_IMAGES } from '@/lib/site';

export default function ServiceCard({ service, index }) {
  const { title, slug, shortDesc, icon, benefits } = service;
  const image = SERVICE_CARD_IMAGES[slug] || '/images/cards/consultation.png';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/services/${slug}`} className="block h-full">
        <div className="service-card group flex flex-col justify-between h-full bg-white border border-lavender-100 hover:border-lavender-300 shadow-md shadow-lavender-500/5 rounded-3xl overflow-hidden">
          <div className="relative h-44 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/45 to-transparent" />
            <div className="absolute top-3 left-3 w-12 h-12 rounded-xl bg-white/90 text-2xl flex items-center justify-center shadow-sm">
              {icon}
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-lavender-800 transition-colors duration-300 mb-3">
              {title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {shortDesc}
            </p>

            <ul className="space-y-2.5 mb-8">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-gray-600">
                  <FiCheck className="w-4 h-4 text-lavender-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-lavender-600 group-hover:underline">
                Learn More
              </span>
              <div className="w-8 h-8 rounded-full bg-lavender-50 group-hover:bg-lavender-500 group-hover:text-white text-lavender-600 flex items-center justify-center transition-all duration-300">
                <FiArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
