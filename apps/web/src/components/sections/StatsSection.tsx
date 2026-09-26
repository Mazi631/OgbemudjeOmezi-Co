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
      <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-[#666055]">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F5F2EB] border-b border-[#E6E1D5] py-14 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-8 sm:gap-12">
        <StatCounter value={30} suffix="+" label="Years in Practice" />
        <StatCounter value={500} suffix="+" label="Legal Matters Resolved" />

        {/* Center Circular Emblem with Down Arrow */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dotted border-[#8C8577] flex flex-col items-center justify-center text-center p-2 bg-[#F5F2EB] shadow-2xs group cursor-pointer hover:border-[#1A1A1A] transition-colors">
            <ArrowDown className="w-4 h-4 text-[#1A1A1A] mb-0.5 animate-bounce" />
            <span className="font-serif text-[0.55rem] uppercase font-bold text-[#2D2A26] leading-tight tracking-wider">
              TOP RATED<br />FIRM
            </span>
          </div>
        </div>

        <StatCounter value={98} suffix="%" label="Client Approval" />
        <StatCounter value={1200} suffix="+" label="Clients Worldwide" />
      </div>
    </section>
  );
};
