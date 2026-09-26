import React, { useState } from 'react';
import { SectionLabel, TeamCard, TeamDetailModal } from '@ogbemudje/ui';
import type { TeamMemberData } from '@ogbemudje/ui';
import { TEAM_MEMBERS } from '../../constants/data';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  return (
    <section id="our-attorneys" className="py-24 px-5 sm:px-8 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionLabel>Our Attorneys</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
            Distinguished Legal Counsel
          </h2>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Our legal practitioners bring decades of courtroom trial experience, regulatory knowledge, and commercial expertise.
          </p>
        </div>

        {/* Team Cards Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamCard
              key={idx}
              member={{
                id: idx.toString(),
                name: member.name,
                role: member.role,
                bio: member.bio,
                image: member.image,
              }}
              onClick={() =>
                setSelectedMember({
                  id: idx.toString(),
                  name: member.name,
                  role: member.role,
                  bio: member.bio,
                  image: member.image,
                })
              }
            />
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
