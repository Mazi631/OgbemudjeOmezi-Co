import React, { useEffect } from 'react';
import { X, Mail, Phone, Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';
import type { TeamMemberData } from './cards/TeamCard';

export interface TeamDetailModalProps {
  member: TeamMemberData | null;
  onClose: () => void;
}

export const TeamDetailModal: React.FC<TeamDetailModalProps> = ({ member, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-[#FCFBFA] border border-[#E6E1D5] rounded-md max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 flex flex-col p-6 sm:p-8 space-y-6">
        {/* Prominent Top-Right Cancel / Close Icon Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-40 bg-[#38291B] hover:bg-[#B8860B] text-white p-2.5 rounded-full transition-colors cursor-pointer shadow-lg flex items-center justify-center"
          aria-label="Close profile modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Section with Compact Avatar */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#E6E1D5] pb-6">
          {/* Controlled Compact Image Size */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 border-4 border-[#B8860B] shadow-md bg-[#E6E1D5] relative">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-serif text-4xl text-[#38291B] font-bold">
                {member.initials || member.name.split(' ').map((n) => n[0]).join('')}
              </div>
            )}
          </div>

          <div className="space-y-2 text-center sm:text-left flex-grow">
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-[#B8860B]">
              {member.role}
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#38291B]">
              {member.name}
            </h3>
            {member.speciality && (
              <div className="inline-block bg-[#EBE6DC] text-[#38291B] text-xs font-semibold px-3 py-1 rounded-full border border-[#E6E1D5]">
                Specialty: {member.speciality}
              </div>
            )}
          </div>
        </div>

        {/* Credentials Grid: Education & Bar Admissions */}
        {(member.education || member.bar) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F5F2EB] p-4 rounded-xs border border-[#E6E1D5]">
            {member.education && (
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[0.7rem] uppercase font-bold tracking-wider text-[#8A7D6E]">Education</h5>
                  <p className="text-xs text-[#38291B] font-medium mt-0.5">{member.education}</p>
                </div>
              </div>
            )}
            {member.bar && (
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[0.7rem] uppercase font-bold tracking-wider text-[#8A7D6E]">Bar Admissions</h5>
                  <p className="text-xs text-[#38291B] font-medium mt-0.5">{member.bar}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Full Biography */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold tracking-[0.16em] uppercase text-[#B8860B]">
            Professional Biography
          </h4>
          <p className="text-sm text-[#2D2A26] leading-relaxed font-normal">
            {member.bio}
          </p>
        </div>

        {/* Representative Cases List */}
        {member.cases && member.cases.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-[0.16em] uppercase text-[#B8860B] flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Representative Matters &amp; Cases
            </h4>
            <ul className="space-y-2">
              {member.cases.map((c, idx) => (
                <li key={idx} className="text-xs text-[#38291B] bg-[#F5F2EB] p-3 rounded-xs border border-[#E6E1D5] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Contact & Consultation CTA */}
        <div className="pt-4 border-t border-[#E6E1D5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs text-[#59544B]">
            <span className="flex items-center gap-1.5 font-medium text-[#38291B]">
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" /> +234 802 303 2981
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#38291B]">
              <Mail className="w-3.5 h-3.5 text-[#B8860B]" /> info@ogbemudjeomezi.com
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-grow sm:flex-grow-0 px-6 py-3 bg-[#38291B] hover:bg-[#B8860B] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" /> Schedule Consultation
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 border border-[#E6E1D5] hover:bg-stone-200 text-[#38291B] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
