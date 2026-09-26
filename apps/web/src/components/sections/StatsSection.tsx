import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCounter: React.FC<StatItemProps> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center px-4 py-2">
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38291B] tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[0.65rem] sm:text-xs uppercase tracking-[0.14em] font-semibold text-[#8A7D6E] mt-1">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F6F3EC] py-12 px-4 sm:px-8 border-t border-[#E6E0D2] relative z-20 overflow-visible">
      {/* 5-Column Stats Row with Centered Circular Emblem Aligned with Numbers */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative z-10">
        {/* Left Stats Pair */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-1 divide-x divide-[#E6E0D2]">
          <StatCounter value={18} suffix="+" label="Years in Practice" />
          <StatCounter value={100} suffix="+" label="Legal Matters Resolved" />
        </div>

        {/* Center Circular Scroll Down Badge (Perfectly Aligned Inline with Numbers) */}
        <div className="flex items-center justify-center my-auto shrink-0 px-2 sm:px-6">
          <a
            href="#about"
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#38291B] text-[#F6F3EC] shadow-xl flex items-center justify-center border-4 border-[#F6F3EC] transition-transform hover:scale-105 group cursor-pointer"
            aria-label="Scroll Down to About Section"
          >
            {/* Rotating Circular Text SVG */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow p-1" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fill="#D4AF37" fontSize="8.5" fontWeight="bold" letterSpacing="1.8">
                <textPath href="#circlePath" startOffset="0%">
                  SCROLL DOWN • SCROLL DOWN •
                </textPath>
              </text>
            </svg>

            {/* Inner Down Arrow Circle */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F6F3EC] text-[#38291B] flex items-center justify-center shadow-inner group-hover:bg-[#D4AF37] transition-colors">
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#38291B] group-hover:translate-y-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Right Stats Pair */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-1 divide-x divide-[#E6E0D2]">
          <StatCounter value={98} suffix="%" label="Client Approval" />
          <StatCounter value={6} suffix="K+" label="Clients Worldwide" />
        </div>
      </div>
    </section>
  );
};
