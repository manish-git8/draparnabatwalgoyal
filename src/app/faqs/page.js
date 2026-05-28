import { faqs } from '@/data/faqs';
import FAQAccordion from '@/components/ui/FAQAccordion';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | Dr. Aparna Bhatwal Goyal',
  description: 'Find answers to common questions about radiology diagnostic procedures, ultrasound fast guidelines, CT scan safety, report timings, and SNG Hospital consultations.',
  keywords: ['radiology FAQs Indore', 'ultrasound questions', 'CT scan preparation answers', 'imaging reports timing'],
};

export default function FAQsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container-custom py-12">
        <SectionHeading
          badge="DIAGNOSTIC GUIDE"
          title="Frequently Asked Questions"
          description="Find clear answers to commonly asked questions about ultrasound scans, CT procedures, timings, and reports."
        />

        <div className="max-w-4xl mx-auto mt-12 bg-white p-6 md:p-10 rounded-[2rem] border border-lavender-100 shadow-sm shadow-lavender-500/5">
          <FAQAccordion items={faqs} />
        </div>

        {/* Contact/Support CTA Card */}
        <div className="max-w-4xl mx-auto mt-12 glass-card p-8 bg-gradient-to-r from-lavender-50 to-white border border-lavender-200/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Still have questions?</h4>
            <p className="text-sm text-gray-500">Contact our administrative team or send us a message directly.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+917879803842" className="btn-secondary py-3 px-6 rounded-xl text-sm font-bold">
              Call: +91 78798 03842
            </a>
            <Link href="/contact" className="btn-primary py-3 px-6 rounded-xl text-sm font-bold">
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
