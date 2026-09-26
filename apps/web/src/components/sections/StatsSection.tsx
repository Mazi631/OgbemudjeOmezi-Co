import React, { useState, useEffect, useRef } from 'react';

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
    <div ref={ref} className="text-center p-6 space-y-2">
      <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#59544B]">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F5F2EB] border-b border-[#E6E1D5] py-14 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x-0 lg:divide-x divide-[#E6E1D5]">
        <StatCounter value={30} suffix="+" label="Years in Practice" />
        <StatCounter value={500} suffix="+" label="Commercial Matters Resolved" />
        <StatCounter value={98} suffix="%" label="Client Approval Rate" />
        <StatCounter value={1200} suffix="+" label="Clients Represented" />
      </div>
    </section>
  );
};
