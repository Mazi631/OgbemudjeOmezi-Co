import React, { useState, useRef } from 'react';
import { PRACTICE_AREAS } from '../../constants/data';
import type { PracticeArea } from '../../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { PracticeCard } from '../cards/PracticeCard';
import { PracticeDetailModal } from '../ui/PracticeDetailModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PracticeAreasSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="practice" className="py-24 px-5 sm:px-8 bg-[var(--color-ink)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <SectionLabel light>What We Do</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Our Practice <em className="italic text-[var(--color-gold)]">Areas</em>
            </h2>
            <p className="text-[0.95rem] text-white/55 max-w-2xl leading-relaxed mt-2">
              Comprehensive legal expertise spanning seven core disciplines. Click any area to explore details.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/20 text-white/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/20 text-white/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 transition-all cursor-pointer"
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
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard
              key={area.id}
              area={area}
              onClick={() => setSelectedArea(area)}
            />
          ))}
        </div>
      </div>

      {/* Enlarged Detail Modal */}
      <PracticeDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
      />
    </section>
  );
};
