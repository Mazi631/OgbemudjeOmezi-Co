import React, { useState } from 'react';
import { FIRM_VALUES, FIRM_PILLARS } from '../../constants/data';
import { SectionLabel, ValueCard } from '@ogbemudje/ui';
import { Target, Compass, Award, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-[var(--color-mist)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLabel>Firm Profile</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-4">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
              Commercial Practice Founded on <br />
              <em className="italic text-[var(--color-gold)] font-serif">Integrity &amp; Legal Precision</em>
            </h2>

            <p className="text-[0.95rem] text-gray-700 leading-relaxed font-light">
              Ogbemudje, Omezi &amp; Co. is a boutique law firm operating from Victoria Island, Lagos. Established in 1994, the firm principally engages in commercial legal practice, providing advisory, transactional, and dispute resolution services to corporate organizations and high-net-worth individuals across Nigeria.
            </p>

            {/* Interactive Tab Switcher */}
            <div className="bg-white border border-[var(--color-line)] p-6 rounded-md shadow-sm space-y-4">
              <div className="flex border-b border-gray-100 pb-3 gap-6 text-[0.8rem] font-semibold uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveTab('mission')}
                  className={`pb-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'mission'
                      ? 'text-[var(--color-gold)] border-b-2 border-[var(--color-gold)] font-bold'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <Target className="w-4 h-4" /> Principal Focus
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('vision')}
                  className={`pb-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'vision'
                      ? 'text-[var(--color-gold)] border-b-2 border-[var(--color-gold)] font-bold'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <Compass className="w-4 h-4" /> Client Base
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('values')}
                  className={`pb-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'values'
                      ? 'text-[var(--color-gold)] border-b-2 border-[var(--color-gold)] font-bold'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <Award className="w-4 h-4" /> Professional Conduct
                </button>
              </div>

              {/* Tab Contents */}
              <div className="pt-2 text-[0.9rem] text-gray-700 leading-relaxed min-h-[80px]">
                {activeTab === 'mission' && (
                  <p className="animate-fadeIn font-light">
                    The firm offers tailored legal solutions across banking, taxation, petroleum and energy, shipping, aviation, intellectual property, commercial arbitration, investments, joint ventures, mergers, receivership, litigation, and real estate practice.
                  </p>
                )}
                {activeTab === 'vision' && (
                  <p className="animate-fadeIn font-light">
                    We serve financial institutions, consulting firms, petroleum companies, aviation operators, engineering enterprises, trading entities, manufacturing organizations, and private clients.
                  </p>
                )}
                {activeTab === 'values' && (
                  <ul className="space-y-2 animate-fadeIn text-[0.85rem] font-light">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--color-gold)]" /> Rigorous adherence to legal ethics and procedural diligence
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--color-gold)]" /> Strict client confidentiality across all corporate and private instructions
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {FIRM_VALUES.map((val, idx) => (
                <ValueCard key={idx} title={val.title} description={val.description} />
              ))}
            </div>
          </div>

          {/* Right Column Pillars Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-center">
            {FIRM_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-[var(--color-line)] p-6 rounded-md shadow-xs hover:shadow-md transition-all duration-300 hover:border-[var(--color-gold)]/40 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-gold)] flex items-center justify-center text-lg shrink-0 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-obsidian)] transition-colors">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.15rem] font-semibold text-[var(--color-obsidian)] mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-[0.83rem] text-gray-600 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
