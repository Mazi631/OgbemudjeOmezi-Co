import React, { useState, useRef } from 'react';
import { TeamDetailModal } from '@ogbemudje/ui';
import type { TeamMemberData } from '@ogbemudje/ui';
import { TEAM_MEMBERS } from '../../constants/data';
import { ArrowRight, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="our-attorneys" className="py-24 px-6 sm:px-10 bg-[#EBE6DC] border-b border-[#E6E1D5] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header with Horizontal Scroll Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
              Our Attorneys
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Distinguished Legal Counsel
            </h2>
            <p className="text-base text-[#59544B] font-normal">
              Drag or scroll horizontally to explore our managing partners and associate legal directory.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#E6E1D5] hover:border-[#1A1A1A] bg-[#FCFBFA] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Previous attorney"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#E6E1D5] hover:border-[#1A1A1A] bg-[#FCFBFA] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Next attorney"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Team Directory Slider */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 cursor-grab ${
            isDragging ? 'cursor-grabbing select-none' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
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
                  speciality: member.speciality,
                  education: member.education,
                  bar: member.bar,
                  cases: member.cases,
                })
              }
              className="w-[290px] sm:w-[320px] shrink-0 bg-[#FCFBFA] border border-[#E6E1D5] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#1A1A1A] flex flex-col cursor-pointer group"
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
                  <span className="bg-[#38291B] text-white px-3.5 py-2 rounded-xs text-[0.72rem] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
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
                  <span>View Full Profile</span>
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
