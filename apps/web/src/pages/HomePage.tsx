import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutFirmSection } from '../components/sections/AboutFirmSection';
import { PracticeAreasSection } from '../components/sections/PracticeAreasSection';
import { TeamSection } from '../components/sections/TeamSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { SectionLabel, Button } from '@ogbemudje/ui';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (2-Column with Eyebrow Pulse Badge & Image Frame) */}
      <HeroSection />

      {/* 2. Infinite Marquee Awards & Credentials Ticker */}
      <MarqueeSection />

      {/* 3. Live Animated Stats Counter Bar */}
      <StatsSection />

      {/* 4. About Our Firm Section */}
      <AboutFirmSection />

      {/* 5. Practice Areas Section with Popup Detail Modal */}
      <PracticeAreasSection />

      {/* 6. Our Attorneys Directory Section with Profile Detail Modal */}
      <TeamSection />

      {/* 7. Client Testimonials Draggable Carousel */}
      <TestimonialsSection />

      {/* 8. Mid-page Chambers Call to Action Banner */}
      <section className="py-20 px-5 sm:px-8 bg-gradient-to-r from-[#0A0E1A] via-[var(--color-obsidian)] to-[#0A0E1A] text-white relative overflow-hidden border-t border-b border-[var(--color-gold)]/30">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <SectionLabel light>Chambers Representation</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
            Strategic Counsel for High-Stakes Legal Matters
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a confidential consultation with our senior partners to discuss corporate governance, commercial litigation, or property perfection in Nigeria.
          </p>
          <div className="pt-2">
            <Button asAnchor href="#contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Book Confidential Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Interactive Contact & Consultation Form */}
      <ContactSection />
    </div>
  );
};
