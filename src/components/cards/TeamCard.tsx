import React from 'react';
import type { TeamMember } from '../../constants/data';
import { UserCheck } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-[var(--color-line)] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-gold)]/50 flex flex-col h-full w-[280px] sm:w-[310px] flex-shrink-0 snap-start cursor-pointer"
    >
      <div className="h-[220px] bg-[var(--color-slate)] relative overflow-hidden shrink-0 flex items-center justify-center font-serif text-5xl font-light text-white/35 tracking-tight">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span>{member.initials || member.name.split(' ').map((n) => n[0]).join('')}</span>
        )}

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-[var(--color-gold)] text-[var(--color-ink)] px-3 py-1.5 rounded-xs text-[0.72rem] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <UserCheck className="w-3.5 h-3.5" /> View Profile
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-gold)]" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-[1.25rem] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors mb-0.5">
          {member.name}
        </h3>
        <div className="text-[0.73rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-gold)] mb-3">
          {member.role}
        </div>
        <p className="text-[0.8rem] text-gray-600 leading-relaxed line-clamp-3 flex-grow">
          {member.bio}
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100 text-[0.72rem] font-semibold uppercase tracking-wider text-gray-400 group-hover:text-[var(--color-gold)] transition-colors flex items-center justify-between">
          <span>Read Full Bio</span>
          <span>&rarr;</span>
        </div>
      </div>
    </div>
  );
};
