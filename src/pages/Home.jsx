import Hero from '../components/Hero';
import Features from '../components/Features';
import PersonalSection from '../components/PersonalSection';
import Reviews from '../components/Reviews';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PersonalSection />
      <Reviews />
      <CTASection />
    </>
  );
}