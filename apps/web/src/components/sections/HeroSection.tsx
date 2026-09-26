import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import statueImg from '../../assets/Statue.png';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let entranceTimer: number | null = null;
    const triggerEntrance = () => {
      entranceTimer = window.setTimeout(() => {
        setIsRevealed(true);
      }, 120);
    };

    if (typeof window !== 'undefined' && (window as any).__WEBSITE_LOADED__) {
      triggerEntrance();
    } else {
      window.addEventListener('website-loaded', triggerEntrance);
      // Safety fallback timeout in case preloader is unmounted or bypassed
      entranceTimer = window.setTimeout(triggerEntrance, 6000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('website-loaded', triggerEntrance);
      if (entranceTimer) clearTimeout(entranceTimer);
    };
  }, []);

  return (
    <section id="home" className="bg-[#F6F3EC] pt-32 pb-16 px-5 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 text-center relative z-10">
        {/* Main Hero Headline in Dark Bronze #38291B with Entrance Reveal */}
        <h1
          style={{
            transitionDuration: '950ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className={`font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#38291B] tracking-tight leading-[1.08] max-w-4xl mx-auto uppercase transition-all transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Your Legal Partner In Every Situation
        </h1>

        {/* Subtitle in Warm Taupe with Staggered Entrance Reveal */}
        <p
          style={{
            transitionDuration: '950ms',
            transitionDelay: '180ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className={`text-sm sm:text-base text-[#8A7D6E] max-w-xl mx-auto font-normal leading-relaxed transition-all transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          From Complex Disputes To Everyday Legal Matters, We Deliver Strategic Solutions With A Client First Approach. We Stand By You To Protect What Matters Most.
        </p>

        {/* Centered Dark Bronze CTA Button with Staggered Entrance Reveal */}
        <div
          style={{
            transitionDuration: '950ms',
            transitionDelay: '320ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className={`pt-1 flex justify-center transition-all transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact"
            className="bg-[#38291B] text-white hover:bg-[#261B11] text-xs font-bold px-6 py-3.5 rounded-sm transition-all duration-300 inline-flex items-center gap-1.5 tracking-wide shadow-md group"
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Bottom Hero Graphic Assembly with Parallax, LAWYER backdrop, & Flanking Elements */}
        <div className="relative pt-16 pb-4 max-w-7xl mx-auto flex items-end justify-between min-h-[440px] px-2 sm:px-6">
          {/* Giant Faint Background Text LAWYER (Shifted Upwards with Parallax Scroll Effect) */}
          <div
            className={`absolute inset-x-0 bottom-20 sm:bottom-28 flex justify-center items-center pointer-events-none select-none z-0 ${
              isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              transform: `translate3d(0, ${(scrollY * 0.45).toFixed(1)}px, 0)`,
              transition: isRevealed
                ? 'transform 0.08s ease-out'
                : 'transform 1s ease-out, opacity 1s',
              willChange: 'transform',
            }}
          >
            <span className="font-serif text-[85px] sm:text-[140px] lg:text-[170px] font-bold text-[#EAE4D8]/90 uppercase tracking-[0.18em] leading-none">
              LAWYER
            </span>
          </div>

          {/* Bottom Left Text Block */}
          <div
            style={{
              transform: isRevealed
                ? `translate3d(0, ${(scrollY * 0.18).toFixed(1)}px, 0)`
                : 'translate3d(0, 24px, 0)',
              transition: isRevealed
                ? 'transform 0.08s ease-out'
                : 'transform 0.95s ease-out, opacity 0.95s',
              transitionDelay: isRevealed ? '0ms' : '480ms',
              willChange: 'transform',
            }}
            className={`hidden md:block text-left max-w-[230px] space-y-1 relative z-20 mb-8 ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-xs text-[#8A7D6E] leading-relaxed font-normal bg-[#F6F3EC]/80 backdrop-blur-xs p-2 rounded-md">
              Our legal team brings <strong className="font-bold text-[#38291B]">30+ years</strong> of combined expertise, having represented clients in over <strong className="font-bold text-[#38291B]">12,000 criminal matters</strong>.
            </p>
          </div>

          {/* Center Lady Justice Statue Image (Enhanced Parallax Scroll & Hardware Acceleration) */}
          <div
            style={{
              transform: isRevealed
                ? `translate3d(0, ${(scrollY * 0.28).toFixed(1)}px, 0) scale(1)`
                : 'translate3d(0, 48px, 0) scale(0.96)',
              transition: isRevealed
                ? 'transform 0.08s ease-out'
                : 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.1s',
              transitionDelay: isRevealed ? '0ms' : '280ms',
              willChange: 'transform',
            }}
            className={`relative z-10 mx-auto flex items-end justify-center ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={statueImg}
              alt="Lady Justice Statue"
              className="h-[380px] sm:h-[440px] lg:h-[500px] w-auto object-contain object-bottom drop-shadow-xl"
            />
          </div>

          {/* Bottom Right Laurel Wreath Badges */}
          <div
            style={{
              transform: isRevealed
                ? `translate3d(0, ${(scrollY * 0.18).toFixed(1)}px, 0)`
                : 'translate3d(0, 24px, 0)',
              transition: isRevealed
                ? 'transform 0.08s ease-out'
                : 'transform 0.95s ease-out, opacity 0.95s',
              transitionDelay: isRevealed ? '0ms' : '480ms',
              willChange: 'transform',
            }}
            className={`hidden md:flex items-center gap-3 relative z-20 mb-10 ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center font-serif text-[0.68rem] text-[#38291B] font-bold tracking-wide border border-[#38291B]/30 px-3.5 py-2 rounded-full bg-[#F6F3EC] shadow-xs">
              ( Top Advocate <br /><span className="text-[0.6rem] font-normal text-[#8A7D6E]">2021-2023</span> )
            </div>
            <div className="text-center font-serif text-[0.68rem] text-[#38291B] font-bold tracking-wide border border-[#38291B]/30 px-3.5 py-2 rounded-full bg-[#F6F3EC] shadow-xs">
              ( Trusted Lawyer <br /><span className="text-[0.6rem] font-normal text-[#8A7D6E]">2021-2023</span> )
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
