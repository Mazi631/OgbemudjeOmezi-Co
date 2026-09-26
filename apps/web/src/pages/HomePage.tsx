import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StatementSection } from '../components/sections/StatementSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutFirmSection } from '../components/sections/AboutFirmSection';
import { PracticeAreasSection } from '../components/sections/PracticeAreasSection';
import { TeamSection } from '../components/sections/TeamSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#F5F2EB]">
      {/* 1. Hero Section (Screenshot 1: Centered title, Arched Lady Justice image, LAWYER backdrop text, circular badges) */}
      <HeroSection />

      {/* 2. Statement Banner Section (Screenshot 2: "At Ogbemudje, Omezi & Co., We Deliver Smart Legal Solutions... Focused Mindset...") */}
      <StatementSection />

      {/* 3. Marquee Ticker Bar (Screenshot 2: ‹ ★ SUPER LAWYERS 2024 › ‹ ★ BEST LAW FIRM 2023 › ‹ ★ TOP 100 ATTORNEYS › ‹ ★ AV PREEMINENT ›) */}
      <MarqueeSection />

      {/* 4. Live Stats Counter Row with Center Circular Emblem (Screenshot 2: 18+ | 100+ | Emblem ↓ | 95% | 6000+) */}
      <StatsSection />

      {/* 5. About Our Firm Section */}
      <AboutFirmSection />

      {/* 6. Practice Areas Section with Popup Detail Modal */}
      <PracticeAreasSection />

      {/* 7. Our Attorneys Directory Section with Profile Detail Modal */}
      <TeamSection />

      {/* 8. Client Testimonials Draggable Carousel */}
      <TestimonialsSection />

      {/* 9. Mid-page Chambers Call to Action Banner */}
      <section className="py-20 px-6 sm:px-10 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
            Chambers Representation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Strategic Counsel for High-Stakes Legal Matters
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto font-normal leading-relaxed">
            Schedule a confidential consultation with our senior partners to discuss corporate governance, commercial litigation, or property perfection in Nigeria.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="bg-[#B8860B] hover:bg-[#D4AF37] text-[#1A1A1A] text-sm font-bold px-8 py-3.5 rounded-sm transition-all duration-300 inline-flex items-center gap-2 tracking-wide shadow-md group"
            >
              <span>Book Confidential Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. Interactive Contact & Consultation Form */}
      <ContactSection />
    </div>
  );
};
