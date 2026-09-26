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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white border border-[var(--color-line)] rounded-md max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] text-gray-700 p-2 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Photo Column */}
          <div className="md:col-span-5 bg-[var(--color-slate)] min-h-[260px] md:min-h-full relative overflow-hidden flex items-center justify-center font-serif text-6xl text-white/30">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span>{member.initials || member.name.split(' ').map((n) => n[0]).join('')}</span>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-gold)]" />
          </div>

          {/* Info Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-gold)] mb-1">
                {member.role}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-obsidian)] mb-4">
                {member.name}
              </h3>

              <div className="w-12 h-[2px] bg-[var(--color-gold)] mb-6" />

              <h4 className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
                Professional Biography &amp; Credentials
              </h4>
              <p className="text-[0.88rem] text-gray-700 leading-relaxed font-light">
                {member.bio}
              </p>
            </div>

            {/* Chambers Contact & Action CTA */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <div className="flex flex-wrap gap-4 text-[0.8rem] text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-gold)]" /> +234 802 303 2981
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--color-gold)]" /> info@ogbemudjeomezi.com
                </span>
              </div>

              <a
                href="/contact"
                onClick={onClose}
                className="w-full py-3 bg-[var(--color-ink)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] text-white text-[0.8rem] font-semibold uppercase tracking-wider rounded-xs transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
