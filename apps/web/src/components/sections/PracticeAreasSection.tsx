import React, { useState } from 'react';
import { SectionLabel, PracticeCard, PracticeDetailModal } from '@ogbemudje/ui';
import type { PracticeArea } from '../../constants/data';
import { PRACTICE_AREAS } from '../../constants/data';

export const PracticeAreasSection: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <section id="practice-areas" className="py-24 px-5 sm:px-8 bg-[var(--color-obsidian)] text-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionLabel light>Practice Areas</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            Our firm delivers specialized counsel across key commercial, regulatory, and dispute resolution disciplines in Nigeria.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.slice(0, 6).map((area) => (
            <PracticeCard
              key={area.id}
              area={area}
              onClick={() => setSelectedPractice(area)}
            />
          ))}
        </div>
      </div>

      {/* Practice Detail Popup Modal */}
      <PracticeDetailModal
        area={selectedPractice}
        onClose={() => setSelectedPractice(null)}
      />
    </section>
  );
};
