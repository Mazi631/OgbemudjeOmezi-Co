import React from 'react';
import { UserCheck } from 'lucide-react';

export interface TeamMemberData {
  id?: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials?: string;
  speciality?: string;
  education?: string;
  bar?: string;
  cases?: string[];
  category?: 'partner' | 'associate' | 'admin';
}

export interface TeamCardProps {
  member: TeamMemberData;
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-[#FCFBFA] border border-[#E6E1D5] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#38291B] flex flex-col h-full w-[290px] sm:w-[320px] flex-shrink-0 cursor-pointer"
    >
      <div className="h-[220px] bg-[#E6E1D5] relative overflow-hidden shrink-0 flex items-center justify-center font-serif text-5xl font-light text-[#59544B]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span>{member.initials || member.name.split(' ').map((n) => n[0]).join('')}</span>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-[#38291B] text-white px-3.5 py-2 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <UserCheck className="w-4 h-4" /> View Full Profile
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8860B]" />
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#38291B] group-hover:text-[#B8860B] transition-colors">
            {member.name}
          </h3>
          <div className="text-[0.73rem] font-bold tracking-[0.14em] uppercase text-[#B8860B] mt-1 mb-2">
            {member.role}
          </div>
          <p className="text-xs text-[#59544B] leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E6E1D5] text-[0.72rem] font-bold uppercase tracking-wider text-[#38291B] group-hover:text-[#B8860B] flex items-center justify-between transition-colors">
          <span>View Full Profile</span>
          <span>&rarr;</span>
        </div>
      </div>
    </div>
  );
};
