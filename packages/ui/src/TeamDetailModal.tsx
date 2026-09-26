import React, { useEffect, useRef } from 'react';
import { X, Mail, Phone, Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';
import type { TeamMemberData } from './cards/TeamCard';

export interface TeamDetailModalProps {
  member: TeamMemberData | null;
  onClose: () => void;
}

export const TeamDetailModal: React.FC<TeamDetailModalProps> = ({ member, onClose }) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    onClose();
  };

  const handleScheduleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#contact';
      }
    }, 50);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal();
    };

    if (member) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Auto reset scroll position to top when modal opens
      if (modalContainerRef.current) {
        modalContainerRef.current.scrollTop = 0;
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-24 sm:pt-28 pb-6 px-3 sm:px-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Backdrop Overlay (Click outside to close) */}
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={handleCloseModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Container - Always Starts Below Fixed Navbar on Desktop & Mobile */}
      <div
        ref={modalContainerRef}
        className="relative bg-[#FCFBFA] border border-[#E6E1D5] rounded-2xl max-w-4xl w-full max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-8rem)] overflow-y-auto shadow-2xl z-[105] p-5 sm:p-8 my-0 text-[#1A1A1A]"
      >
        {/* Prominent Top-Right Corner Close Button for All Devices */}
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-[150] bg-[#38291B] hover:bg-[#B8860B] text-white p-2 sm:p-2.5 rounded-full transition-all cursor-pointer shadow-xl flex items-center justify-center border-2 border-white active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* 2-Column Desktop Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-1 sm:pt-2">
          {/* Left Column: Headshot Photo & Quick Contact Links */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start space-y-4 pt-1 sm:pt-0">
            {/* Headshot Image Container */}
            <div className="w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-[200px] shrink-0 rounded-xl overflow-hidden border-2 border-[#B8860B]/50 shadow-md bg-[#E6E1D5] relative group">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: member.name.includes('Okechukwu')
                      ? 'center 0%'
                      : member.name.includes('Sampson')
                      ? 'center 15%'
                      : 'center 5%',
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-serif text-3xl text-[#38291B] font-bold">
                  {member.initials || member.name.split(' ').map((n) => n[0]).join('')}
                </div>
              )}
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-col gap-2 w-full p-3 bg-[#F5F2EB] rounded-lg border border-[#E6E1D5] text-xs">
              <span className="flex items-center gap-2 font-medium text-[#38291B]">
                <Phone className="w-3.5 h-3.5 text-[#B8860B] shrink-0" /> +234 802 303 2981
              </span>
              <span className="flex items-center gap-2 font-medium text-[#38291B] truncate">
                <Mail className="w-3.5 h-3.5 text-[#B8860B] shrink-0" /> info@ogbemudjeomezi.com
              </span>
            </div>
          </div>

          {/* Right Column: Title, Role, Credentials & Biography */}
          <div className="md:col-span-8 space-y-4 pr-0 md:pr-4">
            {/* Role & Name Header */}
            <div className="space-y-1.5 border-b border-[#E6E1D5] pb-3 pr-8">
              <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#B8860B]">
                {member.role}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38291B]">
                {member.name}
              </h3>
              {member.speciality && (
                <div className="inline-block bg-[#EBE6DC] text-[#38291B] text-xs font-semibold px-3 py-1 rounded-full border border-[#E6E1D5] mt-1">
                  Specialty: {member.speciality}
                </div>
              )}
            </div>

            {/* Credentials Grid: Education & Bar Admissions */}
            {(member.education || member.bar) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F5F2EB] p-3.5 rounded-xl border border-[#E6E1D5]">
                {member.education && (
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[0.65rem] uppercase font-bold tracking-wider text-[#8A7D6E]">Education</h5>
                      <p className="text-xs text-[#38291B] font-medium mt-0.5">{member.education}</p>
                    </div>
                  </div>
                )}
                {member.bar && (
                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[0.65rem] uppercase font-bold tracking-wider text-[#8A7D6E]">Bar Admissions</h5>
                      <p className="text-xs text-[#38291B] font-medium mt-0.5">{member.bar}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Biography */}
            <div className="space-y-1">
              <h4 className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-[#B8860B]">
                Professional Biography
              </h4>
              <p className="text-xs sm:text-sm text-[#2D2A26] leading-relaxed font-normal">
                {member.bio}
              </p>
            </div>

            {/* Representative Matters & Cases */}
            {member.cases && member.cases.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-[#B8860B] flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> Representative Matters &amp; Cases
                </h4>
                <ul className="space-y-1">
                  {member.cases.map((c, idx) => (
                    <li key={idx} className="text-xs text-[#38291B] bg-[#F5F2EB] p-2 rounded-md border border-[#E6E1D5] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                      <span className="font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action CTA Bar */}
            <div className="pt-3 border-t border-[#E6E1D5]">
              <button
                type="button"
                onClick={handleScheduleConsultation}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#38291B] hover:bg-[#B8860B] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors text-center inline-flex items-center justify-center gap-2 shadow-md opacity-100 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
