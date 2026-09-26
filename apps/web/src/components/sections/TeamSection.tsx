import React, { useState } from 'react';
import { TeamDetailModal } from '@ogbemudje/ui';
import type { TeamMemberData } from '@ogbemudje/ui';
import { TEAM_MEMBERS } from '../../constants/data';
import { ArrowRight, UserCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  return (
    <section id="our-attorneys" className="py-24 px-6 sm:px-10 bg-[#EBE6DC] border-b border-[#E6E1D5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
            Our Attorneys
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Distinguished Legal Counsel
          </h2>
          <p className="text-base text-[#59544B] font-normal leading-relaxed">
            Our legal practitioners bring decades of courtroom trial experience, regulatory knowledge, and commercial advisory mastery.
          </p>
        </div>

        {/* Team Cards Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              onClick={() =>
                setSelectedMember({
                  id: idx.toString(),
                  name: member.name,
                  role: member.role,
                  bio: member.bio,
                  image: member.image,
                })
              }
              className="bg-[#FCFBFA] border border-[#E6E1D5] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#1A1A1A] flex flex-col h-full w-[290px] sm:w-[320px] cursor-pointer group"
            >
              <div className="h-[240px] bg-[#E6E1D5] relative overflow-hidden shrink-0 flex items-center justify-center font-serif text-5xl font-light text-[#59544B]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span>{member.name.split(' ').map((n) => n[0]).join('')}</span>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#1A1A1A] text-white px-3.5 py-2 rounded-xs text-[0.72rem] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <UserCheck className="w-4 h-4" /> View Profile
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-[0.73rem] font-bold tracking-[0.14em] uppercase text-[#B8860B] mt-1 mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#59544B] leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6E1D5] text-[0.72rem] font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#B8860B] flex items-center justify-between transition-colors">
                  <span>Read Full Bio</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attorney Detail Modal Popup */}
      <TeamDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
