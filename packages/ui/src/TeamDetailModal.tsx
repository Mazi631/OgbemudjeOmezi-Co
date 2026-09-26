import React, { useEffect } from 'react';
import { X, Mail, Phone, Calendar } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-[#FCFBFA] border border-[#E6E1D5] rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 flex flex-col">
        {/* Top Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-[#1A1A1A] hover:bg-[#B8860B] text-white p-2 rounded-full transition-colors cursor-pointer shadow-md flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase font-bold tracking-wider"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Photo Column with On-Image Cancel / Close Button */}
          <div className="md:col-span-5 bg-[#E6E1D5] min-h-[280px] md:min-h-full relative overflow-hidden flex items-center justify-center font-serif text-6xl text-[#59544B]">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span>{member.initials || member.name.split(' ').map((n) => n[0]).join('')}</span>
            )}

            {/* Cancel Badge Overlay directly on Image */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 left-3 z-20 bg-black/70 hover:bg-[#1A1A1A] text-white text-[0.7rem] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Cancel</span>
            </button>

            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#B8860B]" />
          </div>

          {/* Info Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[0.73rem] font-bold tracking-[0.16em] uppercase text-[#B8860B] mb-1">
                {member.role}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
                {member.name}
              </h3>

              <div className="w-12 h-[2px] bg-[#B8860B] mb-6" />

              <h4 className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#59544B] mb-2">
                Professional Biography &amp; Credentials
              </h4>
              <p className="text-sm text-[#2D2A26] leading-relaxed font-normal">
                {member.bio}
              </p>
            </div>

            {/* Chambers Contact & Action CTA */}
            <div className="pt-6 border-t border-[#E6E1D5] space-y-4">
              <div className="flex flex-wrap gap-4 text-xs text-[#59544B]">
                <span className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
                  <Phone className="w-3.5 h-3.5 text-[#B8860B]" /> +234 802 303 2981
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
                  <Mail className="w-3.5 h-3.5 text-[#B8860B]" /> info@ogbemudjeomezi.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex-grow py-3 bg-[#1A1A1A] hover:bg-[#B8860B] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" /> Schedule Consultation
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 border border-[#E6E1D5] hover:bg-stone-200 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
