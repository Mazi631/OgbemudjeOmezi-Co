import React, { useState } from 'react';
import { PageHeader, TeamCard, TeamDetailModal } from '@ogbemudje/ui';
import { TeamSection } from '../components/sections/TeamSection';
import { TEAM_MEMBERS } from '../constants/data';
import type { TeamMember } from '../constants/data';

export const TeamPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'partner' | 'associate' | 'admin'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredTeam = filterCategory === 'all' 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter((m) => m.category === filterCategory);

  return (
    <div>
      <PageHeader
        badge="Legal Directory"
        title="Lawyers, Qualifications &"
        titleAccent="Professional Memberships"
        subtitle="Accurate professional credentials, call-to-bar dates, and legal qualifications of our practitioners."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Team' }]}
      />

      {/* Main Interactive Carousel Showcase */}
      <TeamSection />

      {/* Full Directory Filter Grid */}
      <section className="py-20 px-5 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-100 pb-6">
            <div>
              <h2 className="font-serif text-3xl font-normal text-[var(--color-obsidian)]">
                Chambers Legal Directory
              </h2>
              <p className="text-xs text-gray-500 font-light mt-1">
                Select a category to view specific lawyers, associates, and administrative support personnel.
              </p>
            </div>

            {/* Directory Filters */}
            <div className="flex items-center gap-2 bg-[var(--color-mist)] p-1.5 rounded-md border border-stone-200 text-xs font-semibold uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setFilterCategory('all')}
                className={`px-4 py-2 rounded-xs transition-colors cursor-pointer ${
                  filterCategory === 'all'
                    ? 'bg-[var(--color-gold)] text-[var(--color-ink)] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Personnel ({TEAM_MEMBERS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('partner')}
                className={`px-4 py-2 rounded-xs transition-colors cursor-pointer ${
                  filterCategory === 'partner'
                    ? 'bg-[var(--color-gold)] text-[var(--color-ink)] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Partners
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('associate')}
                className={`px-4 py-2 rounded-xs transition-colors cursor-pointer ${
                  filterCategory === 'associate'
                    ? 'bg-[var(--color-gold)] text-[var(--color-ink)] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Associates
              </button>
            </div>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeam.map((member, idx) => (
              <TeamCard key={idx} member={{ ...member, id: idx.toString() }} onClick={() => setSelectedMember(member)} />
            ))}
          </div>
        </div>
      </section>

      {/* Profile Detail Modal */}
      <TeamDetailModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};
