import React from 'react';
import type { PracticeArea } from '../../constants/data';
import { ExternalLink } from 'lucide-react';

interface PracticeCardProps {
  area: PracticeArea;
  onClick?: () => void;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ area, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-[var(--color-ink)] border border-white/10 hover:border-[var(--color-gold)]/60 hover:bg-[#161a23] transition-all duration-300 overflow-hidden flex flex-col h-full w-[300px] sm:w-[340px] flex-shrink-0 snap-start rounded-xs cursor-pointer shadow-lg hover:-translate-y-1"
    >
      {/* Gold underline accent on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />

      {area.image && (
        <div className="relative w-full h-[180px] overflow-hidden shrink-0">
          <img
            src={area.image}
            alt={area.title}
            className="w-full h-full object-cover brightness-[0.7] saturate-[0.8] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full text-white/70 group-hover:text-[var(--color-gold)] transition-colors">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-2xl mb-3 flex items-center justify-between">
          <span>{area.icon}</span>
          {!area.image && (
            <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[var(--color-gold)] transition-colors" />
          )}
        </div>
        <h3 className="font-serif text-xl font-semibold text-white mb-2.5 group-hover:text-[var(--color-gold-lt)] transition-colors">
          {area.title}
        </h3>
        <p className="text-[0.82rem] text-white/50 leading-relaxed mb-4 line-clamp-3">
          {area.description}
        </p>

        {area.items && area.items.length > 0 && (
          <ul className="mt-auto space-y-1 pt-3 border-t border-white/10">
            {area.items.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className="text-[0.76rem] text-white/45 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-gold)] truncate"
              >
                {item}
              </li>
            ))}
            {area.items.length > 3 && (
              <li className="text-[0.72rem] text-[var(--color-gold)] font-medium pt-1">
                + {area.items.length - 3} more services
              </li>
            )}
          </ul>
        )}

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[0.72rem] text-[var(--color-gold)] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
          <span>View Details</span>
          <span>&rarr;</span>
        </div>
      </div>
    </div>
  );
};
