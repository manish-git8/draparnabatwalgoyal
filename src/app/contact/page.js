import ContactForm from '@/components/contact/ContactForm';
import MapSection from '@/components/home/MapSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Contact Dr. Aparna Bhatwal Goyal | Radiologist in Indore',
  description: 'Get in touch with SNG Hospital, Indore. Find contact numbers, map location, consultation timings (11 AM — 4 PM), and submit your clinical queries to Dr. Aparna.',
  keywords: ['contact radiologist Indore', 'SNG Hospital phone number', 'radiology clinic address Indore', 'Dr. Aparna contact details'],
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header & Details Grid */}
      <section className="py-12">
        <div className="container-custom">
          <SectionHeading
            badge="GET IN TOUCH"
            title="Contact SNG Hospital"
            description="Contact our reception desk directly for diagnostics booking, reports collection, or second opinion consultations."
          />

          <div className="grid lg:grid-cols-12 gap-8 mt-12 items-start">
            {/* Contact Details cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Phone */}
              <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Enquiries</h4>
                  <p className="text-sm text-gray-500 mb-2 leading-relaxed">Book appointments or enquire about scan preparations.</p>
                  <div className="flex flex-col gap-1 text-sm font-bold text-lavender-750">
                    <a href="tel:+917879803842" className="hover:underline">Reception: +91 78798 03842</a>
                    <a href="tel:07314219100" className="hover:underline">Hospital board: 0731-4219100</a>
                  </div>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                  <p className="text-sm text-gray-500 mb-2 leading-relaxed">For billing questions, documentation requests, or physician reports.</p>
                  <a href="mailto:contact@snghospital.com" className="text-sm font-bold text-lavender-750 hover:underline">
                    contact@snghospital.com
                  </a>
                </div>
              </div>

              {/* Card 3: Address */}
              <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                  <p className="text-sm text-gray-500 mb-1 leading-relaxed">
                    SNG Hospital & Research Centre
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Navkar II Apartment, Banwari Lal Jaju Marg, Near Jain Temple, South Tukoganj, Indore, Madhya Pradesh - 452001
                  </p>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Timings</h4>
                  <p className="text-sm text-gray-500 mb-2 leading-relaxed">Dr. Aparna is available for diagnostic procedures and consultations during:</p>
                  <span className="inline-block text-xs font-bold text-gray-700 bg-lavender-50 border border-lavender-100 px-3 py-1 rounded">
                    Monday — Saturday: 11:00 AM — 4:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Maps Section */}
      <MapSection />
    </div>
  );
}
