import React from 'react';

const BADGES = [
  'TOP 100 COMMERCIAL LAW FIRMS',
  'AV PREEMINENT RATED',
  'SUPER LAWYERS RECOGNIZED',
  'CHAMBERS & PARTNERS RANKED',
  'CIARB FELLOWSHIP MEMBERS',
  'LEGAL 500 COMMERCIAL LEADERS',
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-[#EBE6DC] text-[#1A1A1A] py-4 overflow-hidden border-y border-[#E6E1D5] relative select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-12 text-xs font-bold tracking-[0.22em] uppercase">
        {[...BADGES, ...BADGES, ...BADGES, ...BADGES].map((badge, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span>{badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
          </div>
        ))}
      </div>
    </div>
  );
};
