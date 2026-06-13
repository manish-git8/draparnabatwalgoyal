import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiCheckCircle, FiCalendar, FiArrowLeft, FiClock } from 'react-icons/fi';
import FAQAccordion from '@/components/ui/FAQAccordion';
import WhyChooseBlock from '@/components/services/WhyChooseBlock';

// Generate static routes for all services at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} in Indore | Dr. Aparna Bhatwal Goyal`,
    description: service.shortDesc || `Professional diagnostic ${service.title} scans provided by Senior Radiologist Dr. Aparna at SNG Hospital, Indore.`,
    keywords: [service.title, `${service.title} Indore`, 'SNG Hospital radiology', 'Dr. Aparna Bhatwal Goyal'],
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container-custom py-12">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-600 hover:text-lavender-700 mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        {/* Hero Card */}
        <div className="glass-card p-8 md:p-12 mb-12 border-2 border-lavender-100 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-lavender-100 text-lavender-600 flex items-center justify-center text-4xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h1>
                <p className="text-sm font-medium text-lavender-600 mt-1">Diagnostic Modality</p>
              </div>
            </div>
            
            <Link href="/appointment" className="btn-primary shrink-0 self-start md:self-auto">
              <FiCalendar className="w-5 h-5" /> Book Diagnostic Scan
            </Link>
          </div>

          {/* Overview */}
          <div className="prose max-w-none text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Service Overview</h3>
            <p className="leading-relaxed text-base">{service.overview}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Procedure Description */}
            <div className="glass-card p-8 bg-white border border-lavender-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FiClock className="w-5 h-5 text-lavender-600" />
                The Examination Procedure
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.procedure}
              </p>
            </div>

            <WhyChooseBlock slug={service.slug} content={service.whyChoose} />

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
                <FAQAccordion items={service.faqs} />
              </div>
            )}
          </div>

          {/* Side Info / Benefits */}
          <div className="lg:col-span-4">
            <div className="glass-card p-8 bg-white border border-lavender-100 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100">
                Key Scan Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-lavender-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Sidebar CTA */}
              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                  Need Assistance?
                </p>
                <a
                  href="tel:+917879803842"
                  className="block w-full py-3 bg-lavender-50 hover:bg-lavender-100 text-lavender-600 rounded-xl text-sm font-bold transition-colors"
                >
                  Call Reception: +91 78798 03842
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
