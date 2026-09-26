import React, { useState } from 'react';
import { PracticeDetailModal } from '@ogbemudje/ui';
import { ScrollReveal } from '../ui/ScrollReveal';
import type { PracticeArea } from '../../constants/data';
import { PRACTICE_AREAS } from '../../constants/data';
import {
  Building2,
  Scale,
  Home,
  Briefcase,
  FileText,
  Gavel,
  Anchor,
  Plane,
  Lock,
  Globe,
  Handshake,
  Zap,
  Award,
  ArrowRight,
  Landmark,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';

export const getPracticeIcon = (id: string) => {
  switch (id) {
    case 'banking-law':
    case 'banking-finance':
      return <Landmark className="w-6 h-6 text-[#B8860B]" />;
    case 'taxation-law':
      return <FileText className="w-6 h-6 text-[#B8860B]" />;
    case 'petroleum-energy':
    case 'energy-natural-resources':
      return <Zap className="w-6 h-6 text-[#B8860B]" />;
    case 'shipping-admiralty':
    case 'maritime-law':
      return <Anchor className="w-6 h-6 text-[#B8860B]" />;
    case 'aviation-law':
      return <Plane className="w-6 h-6 text-[#B8860B]" />;
    case 'intellectual-property':
      return <Lock className="w-6 h-6 text-[#B8860B]" />;
    case 'commercial-arbitration':
      return <Scale className="w-6 h-6 text-[#B8860B]" />;
    case 'investment-law':
      return <Globe className="w-6 h-6 text-[#B8860B]" />;
    case 'joint-ventures-partnerships':
      return <Handshake className="w-6 h-6 text-[#B8860B]" />;
    case 'construction-development':
      return <Building2 className="w-6 h-6 text-[#B8860B]" />;
    case 'mergers-acquisitions':
      return <Building2 className="w-6 h-6 text-[#B8860B]" />;
    case 'receivership-practice':
      return <Briefcase className="w-6 h-6 text-[#B8860B]" />;
    case 'contract-negotiation':
      return <FileCheck className="w-6 h-6 text-[#B8860B]" />;
    case 'commercial-litigation':
      return <Gavel className="w-6 h-6 text-[#B8860B]" />;
    case 'real-estate-practice':
      return <Home className="w-6 h-6 text-[#B8860B]" />;
    case 'legal-perfection-titles':
      return <Award className="w-6 h-6 text-[#B8860B]" />;
    default:
      return <ShieldCheck className="w-6 h-6 text-[#B8860B]" />;
  }
};

export const PracticeAreasSection: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <section id="practice-areas" className="py-24 px-6 sm:px-10 bg-[#F5F2EB] text-[#1A1A1A] relative border-b border-[#E6E1D5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <ScrollReveal direction="up" distance={24}>
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
        </ScrollReveal>

        {/* Practice Cards Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.slice(0, 6).map((area, idx) => (
            <ScrollReveal key={area.id} delay={idx * 100} direction="up" distance={28}>
              <div
                onClick={() => setSelectedPractice(area)}
                className="bg-[#FCFBFA] border border-[#E6E1D5] p-8 rounded-xs hover:border-[#1A1A1A] transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between group h-full space-y-6"
              >
                <div className="space-y-4">
                  {/* SVG Icon Container */}
                  <div className="w-12 h-12 rounded-sm bg-[#EBE6DC] flex items-center justify-center border border-[#E6E1D5] group-hover:bg-[#1A1A1A] transition-colors">
                    {getPracticeIcon(area.id)}
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
            </ScrollReveal>
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
