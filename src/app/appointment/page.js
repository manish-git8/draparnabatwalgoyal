import BookingForm from '@/components/appointment/BookingForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiPhone, FiClock, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: 'Book an Appointment | Dr. Aparna Bhatwal Goyal',
  description: 'Book your diagnostic ultrasound (USG), high-resolution CT scan, MSK radiology, fetal medicine, or oncological scan at SNG Hospital, Indore. Schedule via Call, WhatsApp, or Online Form.',
  keywords: ['book appointment radiologist Indore', 'ultrasound booking Indore', 'CT scan booking Indore', 'SNG Hospital contact number'],
};

export default function AppointmentPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container-custom py-12">
        <SectionHeading
          badge="APPOINTMENT PORTAL"
          title="Schedule Your Diagnostic Scan"
          description="Book a slot for high-resolution imaging and professional medical diagnosis with Dr. Aparna Goyal."
        />

        {/* Contact/Channels Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-16">
          {/* Channel: Call Reception */}
          <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100">
            <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
              <FiPhone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Book via Phone Call</h4>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">Speak directly with SNG Hospital reception to check instant availability.</p>
              <a href="tel:+917879803842" className="text-sm font-bold text-lavender-600 hover:underline">
                Call: +91 78798 03842
              </a>
            </div>
          </div>

          {/* Channel: WhatsApp Booking */}
          <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100">
            <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
              <FaWhatsapp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Book via WhatsApp</h4>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">Send a WhatsApp text containing your reference slip or requirements.</p>
              <a
                href="https://wa.me/917879803842?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-lavender-600 hover:underline"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Channel: Timings & Address */}
          <div className="glass-card p-6 flex items-start gap-4 bg-white border border-lavender-100 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-600 flex items-center justify-center shrink-0">
              <FiClock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Consultation Hours</h4>
              <p className="text-xs text-gray-500 mb-2 leading-relaxed">Regular consultation timings at SNG Hospital department:</p>
              <span className="inline-block text-xs font-bold text-lavender-700 bg-lavender-50 border border-lavender-100 px-2 py-1 rounded">
                Mon — Sat: 11 AM — 4 PM
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Form */}
        <div className="mt-8">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
