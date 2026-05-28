import { services } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import UniqueExpertise from '@/components/services/UniqueExpertise';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const metadata = {
  title: 'Radiology Services & Treatments | Dr. Aparna Bhatwal Goyal',
  description: 'Explore the advanced diagnostics and radiology treatments provided by Dr. Aparna Bhatwal Goyal in Indore, including USG (Ultrasound), CT scans, MSK radiology, oncology imaging, and fetal medicine.',
  keywords: ['radiology services Indore', 'ultrasound scans Indore', 'CT scan center SNG hospital', 'fetal scans Indore', 'MSK ultrasound Specialist'],
};

export default function ServicesPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      {/* Services List Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="DIAGNOSTIC MODALITIES"
            title="Radiology Services & Treatments"
            description="Providing precise, comprehensive diagnostics across multiple imaging fields using advanced radiological standards."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.slug} className="block h-full">
                <ServiceCard service={service} index={index} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Expertise Section */}
      <UniqueExpertise />
    </div>
  );
}
