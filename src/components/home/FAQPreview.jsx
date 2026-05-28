'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { faqs } from '@/data/faqs';
import { FiArrowRight } from 'react-icons/fi';

export default function FAQPreview() {
  return (
    <section className="section-padding bg-lavender-bg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender-200/30 rounded-full blur-[100px]" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our diagnostic services and consultation process."
        />

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} limit={5} />
          <div className="text-center mt-8">
            <Link href="/faqs" className="btn-secondary">
              View All FAQs
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
