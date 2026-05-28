import { blogs } from '@/data/blogs';
import BlogListClient from '@/components/blog/BlogListClient';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Medical Blog & Diagnostic Insights | Dr. Aparna Bhatwal Goyal',
  description: 'Read the latest medical articles and health insights on ultrasound, CT scans, prenatal diagnostics, and musculoskeletal health written by Senior Radiologist Dr. Aparna Bhatwal Goyal.',
  keywords: ['radiology blog Indore', 'pregnancy scan guidelines', 'CT scan preparation tips', 'health checkup importance'],
};

export default function BlogListingPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="py-12">
        <SectionHeading
          badge="HEALTH INSIGHTS"
          title="Diagnostic & Radiology Blog"
          description="Empowering patients with medical insights, procedural advice, and preventive health knowledge."
        />
        
        <div className="mt-8">
          <BlogListClient initialPosts={blogs} />
        </div>
      </div>
    </div>
  );
}
