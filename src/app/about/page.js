import DoctorIntro from '@/components/about/DoctorIntro';
import Timeline from '@/components/about/Timeline';
import CertificatesGallery from '@/components/about/CertificatesGallery';

export const metadata = {
  title: 'About Dr. Aparna Bhatwal Goyal | Senior Radiologist in Indore',
  description: 'Discover the medical journey, fellowships, and academic qualifications of Dr. Aparna Bhatwal Goyal (MBBS, MD), Senior Consultant Radiologist at SNG Hospital, Indore.',
  keywords: ['Dr. Aparna Bhatwal Goyal', 'about Dr. Aparna', 'radiologist Indore qualifications', 'MSK radiology fellowship', 'fetal medicine fellowship Indore'],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pt-16">
      <DoctorIntro />
      <Timeline />
      <CertificatesGallery />
    </div>
  );
}
