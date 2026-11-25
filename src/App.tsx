import { MotionConfig } from 'motion/react';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationContactSection } from './components/LocationContactSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-ink-900">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <DifferentialsSection />
          <TestimonialsSection />
          <LocationContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
