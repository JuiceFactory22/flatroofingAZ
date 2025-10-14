import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Reviews />
      <CTA />
    </div>
  );
}