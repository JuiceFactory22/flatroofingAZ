import Hero from '@/components/Hero';
import Services from '@/components/Services';
import EducationalContent from '@/components/EducationalContent';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <EducationalContent />
      <WhyChooseUs />
      <Portfolio />
      <Reviews />
      <FAQ />
      <CTA />
    </div>
  );
}