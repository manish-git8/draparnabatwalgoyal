import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SITE_LOGO, SITE_LOGO_ALT } from '@/lib/site';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Doctor' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Book Appointment' },
  { href: '/blog', label: 'Health Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faqs', label: 'FAQs' },
];

const serviceLinks = [
  { href: '/services/usg-ultrasound', label: 'USG (Ultrasound)' },
  { href: '/services/ct-scan', label: 'CT Scan' },
  { href: '/services/msk-radiology', label: 'MSK Radiology' },
  { href: '/services/oncology-imaging', label: 'Oncology Imaging' },
  { href: '/services/fetal-medicine-imaging', label: 'Fetal Medicine' },
  { href: '/services/diagnostic-consultation', label: 'Diagnostic Consultation' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Emergency Contact Banner */}
      <div className="gradient-cta py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lavender-300 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Need urgent diagnostic consultation?</span>
          </div>
          <a
            href="tel:+917879803842"
            className="flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-sm rounded-xl text-sm font-semibold hover:bg-white/25 transition-all"
          >
            <FiPhone className="w-4 h-4" />
            Call: +91 78798 03842
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="gradient-footer pt-16 pb-6 border-t border-lavender-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2.5 mb-5 rounded-lg bg-white p-2 shadow-md hover:shadow-lg transition-shadow border border-lavender-100">
                <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={SITE_LOGO}
                    alt={SITE_LOGO_ALT}
                    width={88}
                    height={88}
                    className="absolute left-1/2 top-0 h-[148%] w-[148%] max-w-none -translate-x-1/2 object-cover object-top"
                    aria-hidden
                  />
                </span>
                <span className="pr-1">
                  <span className="block text-sm font-bold text-gray-900 leading-tight">Dr. Aparna Goyal</span>
                  <span className="block text-[10px] text-lavender-600 font-medium">Senior Radiologist</span>
                </span>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Advanced radiology and diagnostic care with precision and compassion. 
                Specialist in Diagnostic Radiology with 10+ years of experience at SNG Hospital, Indore.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, href: '#', label: 'Facebook' },
                  { icon: FaInstagram, href: '#', label: 'Instagram' },
                  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                  { icon: FaYoutube, href: '#', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white border border-lavender-100 hover:bg-lavender-500 flex items-center justify-center text-lavender-600 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-lavender-700 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FiArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-lavender-600" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-lavender-700 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FiArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-lavender-600" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 text-lavender-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">
                    Navkar II Apartment, Banwari Lal Jaju Marg, Near Jain Temple, South Tukoganj, Indore, MP 452001
                  </span>
                </li>
                <li>
                  <a href="tel:+917879803842" className="flex items-center gap-3 text-gray-600 text-sm hover:text-lavender-700 transition-colors">
                    <FiPhone className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                    +91 78798 03842
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@snghospital.com" className="flex items-center gap-3 text-gray-600 text-sm hover:text-lavender-700 transition-colors">
                    <FiMail className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                    contact@snghospital.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiClock className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">11:00 AM — 4:00 PM</span>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917879803842?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 px-4 py-2.5 bg-white border border-lavender-200 rounded-xl text-lavender-700 text-sm font-medium hover:bg-lavender-50 hover:border-lavender-300 transition-all shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp Consultation
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-lavender-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-gray-900 font-semibold mb-1">Subscribe to Health Newsletter</h4>
                <p className="text-gray-500 text-sm">Get health tips and updates delivered to your inbox.</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-white border border-lavender-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-lavender-400 transition-colors shadow-sm"
                />
                <button className="px-6 py-3 gradient-primary rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-lavender-500/25 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-lavender-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Dr. Aparna — Senior Radiologist, SNG Hospital. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 text-xs hover:text-lavender-700 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-500 text-xs hover:text-lavender-700 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
