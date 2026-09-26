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
    <div ref={ref} className="text-center space-y-1">
      <div className="font-serif text-3xl sm:text-5xl font-bold text-[#38291B] tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-[#8A7D6E]">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F6F3EC] pt-12 pb-20 px-5 sm:px-8 border-t border-[#E6E0D2] relative">
      {/* 4 Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-[#E6E0D2] relative z-10">
        <StatCounter value={30} suffix="+" label="Years in Practice" />
        <StatCounter value={500} suffix="+" label="Legal Matters Resolved" />
        <StatCounter value={98} suffix="%" label="Client Approval" />
        <StatCounter value={6} suffix="K+" label="Clients Worldwide" />
      </div>

      {/* Center Curved Notch with Circular Scroll Down Badge Emblem */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30">
        <a
          href="#about"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#38291B] text-white border-4 border-[#F6F3EC] shadow-2xl flex flex-col items-center justify-center transition-transform hover:scale-105 group cursor-pointer"
        >
          <ArrowDown className="w-5 h-5 text-[#D4AF37] group-hover:translate-y-1 transition-transform" />
          <span className="text-[0.52rem] uppercase font-bold tracking-widest text-gray-200 mt-0.5">
            Scroll Down
          </span>
        </a>
      </div>

      {/* Curved Cutout Arch SVG at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-20">
        <svg
          className="w-full h-10 text-[#38291B] fill-current"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C600,60 840,60 1440,0 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
};
