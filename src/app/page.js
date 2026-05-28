import HeroSlider from '@/components/home/HeroSlider';
import StatsCounter from '@/components/home/StatsCounter';
import AboutPreview from '@/components/home/AboutPreview';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ReviewsSection from '@/components/home/ReviewsSection';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import BlogPreview from '@/components/home/BlogPreview';
import FAQPreview from '@/components/home/FAQPreview';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSlider />
      <StatsCounter />
      <AboutPreview />
      <ExpertiseSection />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <AppointmentCTA />
      <BlogPreview />
      <FAQPreview />
      <MapSection />
    </div>
  );
}
