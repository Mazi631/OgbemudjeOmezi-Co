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
    <div className="bg-[var(--color-gold)] text-[var(--color-ink)] py-3.5 overflow-hidden border-y border-[var(--color-gold-bright)]/40 relative select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-12 text-[0.75rem] font-bold tracking-[0.22em] uppercase">
        {[...BADGES, ...BADGES, ...BADGES, ...BADGES].map((badge, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span>{badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]/50" />
          </div>
        ))}
      </div>
    </div>
  );
};
