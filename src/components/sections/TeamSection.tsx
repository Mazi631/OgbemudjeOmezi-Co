import React, { useState, useRef } from 'react';
import { TEAM_MEMBERS } from '../../constants/data';
import type { TeamMember } from '../../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { TeamCard } from '../cards/TeamCard';
import { TeamDetailModal } from '../ui/TeamDetailModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -330 : 330;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 px-5 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <SectionLabel>The People</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-ink)] leading-tight">
              Meet Our Legal <em className="italic text-[var(--color-gold)]">Professionals</em>
            </h2>
            <p className="text-[0.95rem] text-gray-600 max-w-2xl leading-relaxed mt-2">
              Our lawyers combine technical legal expertise with strategic thinking. Click any profile to view full biography.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[var(--color-line)] text-gray-700 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-stone-50 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-[var(--color-line)] text-gray-700 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-stone-50 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Row */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-6 pt-2 scrollbar-thin scrollbar-thumb-[var(--color-gold)]/40 scrollbar-track-transparent select-none"
          style={{ scrollbarWidth: 'thin' }}
        >
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamCard
              key={idx}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Enlarged Detail Modal */}
      <TeamDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
