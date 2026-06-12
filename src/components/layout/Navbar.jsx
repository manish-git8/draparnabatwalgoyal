'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiCalendar } from 'react-icons/fi';
import { SITE_LOGO } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Appointment' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/faqs', label: 'FAQs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b border-lavender-100 shadow-sm">
        <div className="container-custom h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0 max-w-[58%] sm:max-w-none">
              <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-lavender-100">
                <Image
                  src={SITE_LOGO}
                  alt=""
                  width={96}
                  height={96}
                  className="absolute left-1/2 top-0 h-[148%] w-[148%] max-w-none -translate-x-1/2 object-cover object-top"
                  priority
                  aria-hidden
                />
              </span>
              <span className="min-w-0 block">
                <span className="block text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-tight truncate">
                  Dr. Aparna Goyal
                </span>
                <span className="block text-[10px] sm:text-xs text-lavender-600 font-medium tracking-wide mt-0.5 truncate">
                  Senior Radiologist
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-lavender-600 rounded-xl hover:bg-lavender-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917879803842"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-lavender-600 border border-lavender-200 rounded-xl hover:bg-lavender-50"
              >
                <FiPhone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href="/appointment"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white gradient-primary rounded-xl shadow-md"
              >
                <FiCalendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-lavender-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden top-20"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={`fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-lavender-100 shadow-xl z-50 lg:hidden overflow-y-auto transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="p-6">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 text-base font-medium text-gray-700 hover:text-lavender-600 hover:bg-lavender-50 rounded-xl"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+917879803842"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-lavender-600 border-2 border-lavender-200 rounded-xl hover:bg-lavender-50"
            >
              <FiPhone className="w-4 h-4" />
              Call: +91 78798 03842
            </a>
            <Link
              href="/appointment"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white gradient-primary rounded-xl shadow-lg"
            >
              <FiCalendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Consultation Hours</p>
            <p className="text-sm text-gray-600 font-medium">11:00 AM — 4:00 PM</p>
            <p className="text-xs text-gray-400 mt-1">SNG Hospital, Indore</p>
          </div>
        </div>
      </div>
    </>
  );
}
