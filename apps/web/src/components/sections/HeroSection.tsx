import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[#F6F3EC] pt-32 pb-16 px-5 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 text-center relative z-10">
        {/* Main Hero Headline in Dark Bronze #38291B */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#38291B] tracking-tight leading-[1.08] max-w-4xl mx-auto uppercase">
          Your Legal Partner In Every Situation
        </h1>

        {/* Subtitle in Warm Taupe */}
        <p className="text-sm sm:text-base text-[#8A7D6E] max-w-xl mx-auto font-normal leading-relaxed">
          From Complex Disputes To Everyday Legal Matters, We Deliver Strategic Solutions With A Client First Approach. We Stand By You To Protect What Matters Most.
        </p>

        {/* Centered Dark Bronze CTA Button with Diagonal Arrow ↗ */}
        <div className="pt-1 flex justify-center">
          <a
            href="#contact"
            className="bg-[#38291B] text-white hover:bg-[#261B11] text-xs font-bold px-6 py-3.5 rounded-sm transition-all duration-300 inline-flex items-center gap-1.5 tracking-wide shadow-md group"
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Bottom Hero Graphic Assembly with Arch/Cutout, LAWYER backdrop, & Flanking Elements */}
        <div className="relative pt-12 pb-4 max-w-6xl mx-auto flex items-end justify-between min-h-[420px]">
          {/* Giant Subtle Background Text LAWYER */}
          <div className="absolute inset-x-0 bottom-2 flex justify-center items-center pointer-events-none select-none z-0">
            <span className="font-serif text-[110px] sm:text-[170px] lg:text-[220px] font-bold text-[#EAE4D8] uppercase tracking-widest leading-none">
              LAWYER
            </span>
          </div>

          {/* Bottom Left Text Block */}
          <div className="hidden md:block text-left max-w-[210px] space-y-1 relative z-20 mb-6">
            <p className="text-xs text-[#8A7D6E] leading-relaxed font-normal">
              Our legal team brings <strong className="font-bold text-[#38291B]">30+ years</strong> of combined expertise, having represented clients in over <strong className="font-bold text-[#38291B]">12,000 criminal matters</strong>.
            </p>
          </div>

          {/* Center Lady Justice Cutout Image */}
          <div className="relative z-10 mx-auto">
            <div className="w-[260px] sm:w-[320px] lg:w-[360px] h-[320px] sm:h-[380px] lg:h-[430px] rounded-t-[130px] sm:rounded-t-[160px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
                alt="Lady Justice Scales Statue"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F6F3EC] via-transparent to-transparent" />
            </div>
          </div>

          {/* Bottom Right Laurel Wreath Badges */}
          <div className="hidden md:flex items-center gap-3 relative z-20 mb-8">
            <div className="text-center font-serif text-[0.68rem] text-[#38291B] font-bold tracking-wide border border-[#38291B]/30 px-3.5 py-2 rounded-full bg-[#F6F3EC]">
              ( Top Advocate <br /><span className="text-[0.6rem] font-normal text-[#8A7D6E]">2021-2023</span> )
            </div>
            <div className="text-center font-serif text-[0.68rem] text-[#38291B] font-bold tracking-wide border border-[#38291B]/30 px-3.5 py-2 rounded-full bg-[#F6F3EC]">
              ( Trusted Lawyer <br /><span className="text-[0.6rem] font-normal text-[#8A7D6E]">2021-2023</span> )
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
