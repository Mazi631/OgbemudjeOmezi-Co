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
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F6F3EC] relative min-h-screen">
      {/* LAYER 1: Top Hero, Statement, Marquee & Stats Section */}
      <div className="relative z-10 bg-[#F6F3EC]">
        {/* Hero Section */}
        <HeroSection />

        {/* Statement Section */}
        <ScrollReveal>
          <StatementSection />
        </ScrollReveal>

        {/* Marquee Ticker */}
        <MarqueeSection />

        {/* Stats Section */}
        <ScrollReveal>
          <StatsSection />
        </ScrollReveal>
      </div>

      {/* LAYER 2: Regular Page Section */}
      <div className="relative z-20 bg-[#1A1815]">
        {/* About Our Firm */}
        <ScrollReveal>
          <AboutFirmSection />
        </ScrollReveal>

        {/* Practice Areas Grid & Modal */}
        <PracticeAreasSection />

        {/* Our Attorneys Directory Horizontal Slider & Modal */}
        <ScrollReveal>
          <TeamSection />
        </ScrollReveal>

        {/* Client Testimonials Continuous Auto-scrolling Slider */}
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>

        {/* Mid-Page Chambers Representation Banner */}
        <ScrollReveal>
          <section className="py-20 px-6 sm:px-10 bg-[#38291B] text-white relative overflow-hidden">
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
                  className="bg-[#D4AF37] hover:bg-white text-[#38291B] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-all duration-300 inline-flex items-center gap-2 shadow-md group opacity-100"
                >
                  <span>Book Confidential Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Interactive Consultation & Contact Form */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </div>
    </div>
  );
};
