import React from 'react';

const MARQUEE_ITEMS = [
  '‹ ★ SUPER LAWYERS 2024 ›',
  '‹ ★ BEST LAW FIRM 2023 ›',
  '‹ ★ TOP 100 ATTORNEYS ›',
  '‹ ★ AV PREEMINENT ›',
  '‹ ★ CHAMBERS RANKED 2024 ›',
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-[#F5F2EB] text-[#B8860B] py-3.5 overflow-hidden border-b border-[#E6E1D5] relative select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-12 text-xs font-semibold tracking-[0.2em] uppercase">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
