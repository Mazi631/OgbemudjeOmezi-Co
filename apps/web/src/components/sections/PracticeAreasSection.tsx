import React, { useState } from 'react';
import { PracticeDetailModal } from '@ogbemudje/ui';
import type { PracticeArea } from '../../constants/data';
import { PRACTICE_AREAS } from '../../constants/data';
import { ArrowRight } from 'lucide-react';

export const PracticeAreasSection: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <section id="practice-areas" className="py-24 px-6 sm:px-10 bg-[#F5F2EB] text-[#1A1A1A] relative border-b border-[#E6E1D5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
            Practice Disciplines
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-base text-[#59544B] font-normal leading-relaxed">
            Our firm delivers specialized legal counsel across key commercial, regulatory, dispute advocacy, and property disciplines in Nigeria.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.slice(0, 6).map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedPractice(area)}
              className="bg-[#FCFBFA] border border-[#E6E1D5] p-8 rounded-xs hover:border-[#1A1A1A] transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between group h-full space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#EBE6DC] flex items-center justify-center text-2xl">
                  {area.icon || '⚖️'}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-[#59544B] font-normal leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1D5] text-xs font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#B8860B] flex items-center justify-between transition-colors">
                <span>Learn Scope of Practice</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
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
