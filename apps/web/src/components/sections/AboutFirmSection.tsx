import React from 'react';
import { Scale, Award, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export const AboutFirmSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 bg-[#EBE6DC] border-b border-[#E6E1D5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
            About Our Firm
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Unwavering Commitment to Justice &amp; Strategic Legal Excellence
          </h2>
          <p className="text-base text-[#59544B] leading-relaxed font-normal">
            Founded in 1994 and headquartered in Victoria Island, Lagos, Ogbemudje, Omezi &amp; Co. is a premier commercial law practice. We counsel corporate clients, financial institutions, state authorities, and private clients on complex legal, transactional, and dispute resolution matters across Nigeria.
          </p>
          <p className="text-base text-[#59544B] leading-relaxed font-normal">
            Our team of senior advocates, arbitrators, and solicitors combines deep courtroom trial mastery with sharp commercial perspective — protecting assets, executing high-stakes transactions, and achieving favorable client outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 bg-[#F5F2EB] p-4 rounded-xs border border-[#E6E1D5] shadow-xs">
              <Scale className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-[#1A1A1A]">Courtroom &amp; CIArb Advocacy</h4>
                <p className="text-xs text-[#59544B] font-normal mt-0.5">High-stakes litigation and commercial arbitration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#F5F2EB] p-4 rounded-xs border border-[#E6E1D5] shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-[#1A1A1A]">Title &amp; Property Perfection</h4>
                <p className="text-xs text-[#59544B] font-normal mt-0.5">Governor's consent &amp; land registry perfection.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#F5F2EB] p-4 rounded-xs border border-[#E6E1D5] shadow-xs">
              <Users className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-[#1A1A1A]">Corporate Governance</h4>
                <p className="text-xs text-[#59544B] font-normal mt-0.5">CAC compliance, M&amp;A, and regulatory advisory.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#F5F2EB] p-4 rounded-xs border border-[#E6E1D5] shadow-xs">
              <Award className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-[#1A1A1A]">SAN Led Counsel</h4>
                <p className="text-xs text-[#59544B] font-normal mt-0.5">Senior Advocates managing practice areas.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-[#1A1A1A] text-white hover:bg-[#B8860B] text-xs font-semibold px-6 py-3 rounded-sm transition-all duration-300 inline-flex items-center gap-2 tracking-wide group"
            >
              <span>Schedule Chambers Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column Image Frame with Badge Overlay */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg overflow-hidden border border-[#E6E1D5] shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1200&auto=format&fit=crop"
              alt="Law Library & Chambers"
              className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95]"
            />

            {/* Floating Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#F5F2EB]/95 backdrop-blur-md border border-[#E6E1D5] p-5 rounded-xs shadow-2xl space-y-1">
              <div className="text-[0.7rem] uppercase tracking-widest font-bold text-[#B8860B]">
                Proven Track Record
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Over ₦50 Billion+
              </div>
              <p className="text-xs text-[#59544B] font-normal">
                Recovered &amp; secured in commercial settlements and corporate acquisitions for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
