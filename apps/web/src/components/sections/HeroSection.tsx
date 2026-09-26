import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[#F5F2EB] pt-36 pb-20 px-6 sm:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 text-center relative z-10">
        {/* Main Hero Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-[#1A1A1A] tracking-tight leading-[1.08] max-w-5xl mx-auto">
          Your Legal Partner In Every Situation
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#59544B] max-w-xl mx-auto font-normal leading-relaxed">
          From complex disputes to everyday legal matters, we deliver strategic solutions with a client-first approach. Serving over 12,000 clients nationwide.
        </p>

        {/* Centered CTA Button */}
        <div className="pt-2 flex justify-center">
          <a
            href="#contact"
            className="bg-[#1A1A1A] text-white hover:bg-[#B8860B] text-sm font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 inline-flex items-center gap-2 tracking-wide group shadow-md"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom Hero Graphic Assembly with Arch, Giant Text & Badges */}
        <div className="relative pt-12 sm:pt-16 pb-6 max-w-6xl mx-auto flex items-end justify-between min-h-[440px]">
          {/* Giant Subtle Background Text Behind Arch */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-center pointer-events-none select-none z-0">
            <span className="font-serif text-[120px] sm:text-[180px] lg:text-[230px] font-bold text-[#E6E1D5]/70 uppercase tracking-widest leading-none">
              LAWYER
            </span>
          </div>

          {/* Bottom Left Text Block */}
          <div className="hidden md:block text-left max-w-[220px] space-y-1 relative z-20 mb-8">
            <p className="text-xs sm:text-[0.82rem] text-[#59544B] leading-relaxed font-normal">
              Our legal team brings <strong className="font-semibold text-[#1A1A1A]">25+ years</strong> of combined expertise, having represented clients in over 12,000 criminal matters.
            </p>
          </div>

          {/* Center Arched Image Frame (Lady Justice Statue) */}
          <div className="relative z-10 mx-auto">
            <div className="w-[260px] sm:w-[340px] lg:w-[380px] h-[320px] sm:h-[400px] lg:h-[450px] rounded-t-[130px] sm:rounded-t-[170px] lg:rounded-t-[190px] overflow-hidden border-4 border-[#F5F2EB] shadow-2xl relative bg-[#E6E1D5]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
                alt="Lady Justice Scales Statue"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EB]/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Bottom Right Floating Dotted Badges */}
          <div className="hidden md:flex flex-col items-center gap-4 relative z-20 mb-6">
            <div className="w-20 h-20 rounded-full border border-dotted border-[#8C8577] flex items-center justify-center text-center p-2 bg-[#F5F2EB]/80 backdrop-blur-xs">
              <span className="font-serif text-[0.62rem] uppercase font-bold text-[#2D2A26] leading-tight">
                &bull; Best Law Firm &bull;<br />2024
              </span>
            </div>

            <div className="w-20 h-20 rounded-full border border-dotted border-[#8C8577] flex items-center justify-center text-center p-2 bg-[#F5F2EB]/80 backdrop-blur-xs">
              <span className="font-serif text-[0.62rem] uppercase font-bold text-[#2D2A26] leading-tight">
                &bull; Top 100 &bull;<br />Attorneys
              </span>
            </div>

            <div className="w-20 h-20 rounded-full border border-dotted border-[#8C8577] flex items-center justify-center text-center p-2 bg-[#F5F2EB]/80 backdrop-blur-xs">
              <span className="font-serif text-[0.62rem] uppercase font-bold text-[#2D2A26] leading-tight">
                &bull; AV &bull;<br />Preeminent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
