import React from 'react';
import { Scale, Award, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/data';

export const AboutFirmSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#1A1815] text-white pt-16 pb-24 px-6 sm:px-10 overflow-hidden border-b border-[#38291B]">
      {/* Background Law Firm Logo Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-20 overflow-hidden">
        <img
          src={CONTACT_INFO.logoUrl}
          alt="Law Firm Logo Watermark"
          className="w-[450px] sm:w-[600px] lg:w-[750px] h-auto object-contain brightness-125 saturate-150 drop-shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
            About Our Firm
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Unwavering Commitment to Justice &amp; Strategic Legal Excellence
          </h2>
          <p className="text-base text-gray-300 leading-relaxed font-normal">
            Founded in 1994 and headquartered in Victoria Island, Lagos, Ogbemudje, Omezi &amp; Co. is a premier commercial law practice. We counsel corporate clients, financial institutions, state authorities, and private clients on complex legal, transactional, and dispute resolution matters across Nigeria.
          </p>
          <p className="text-base text-gray-300 leading-relaxed font-normal">
            Our team of senior advocates, arbitrators, and solicitors combines deep courtroom trial mastery with sharp commercial perspective — protecting assets, executing high-stakes transactions, and achieving favorable client outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 bg-[#26221D] p-4 rounded-md border border-[#38291B]">
              <Scale className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-white">Courtroom &amp; CIArb Advocacy</h4>
                <p className="text-xs text-gray-400 font-normal mt-0.5">High-stakes litigation and commercial arbitration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#26221D] p-4 rounded-md border border-[#38291B]">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-white">Title &amp; Property Perfection</h4>
                <p className="text-xs text-gray-400 font-normal mt-0.5">Governor's consent &amp; land registry perfection.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#26221D] p-4 rounded-md border border-[#38291B]">
              <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-white">Corporate Governance</h4>
                <p className="text-xs text-gray-400 font-normal mt-0.5">CAC compliance, M&amp;A, and regulatory advisory.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#26221D] p-4 rounded-md border border-[#38291B]">
              <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-base text-white">SAN Led Counsel</h4>
                <p className="text-xs text-gray-400 font-normal mt-0.5">Senior Advocates managing practice areas.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-[#D4AF37] hover:bg-white text-[#1A1815] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center gap-2 shadow-md group"
            >
              <span>Schedule Chambers Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column Illustration Card with Proven Track Record Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-gradient-to-br from-[#26221D] to-[#12100E] p-8 sm:p-10 flex flex-col justify-between min-h-[440px] group">
            {/* High-End Vector Legal Illustration */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6 space-y-6 text-center">
              <div className="w-24 h-24 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Scale className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <div className="font-serif text-2xl font-bold text-white">Commercial Litigation &amp; Recovery</div>
                <p className="text-xs text-gray-400 max-w-xs mx-auto font-normal">
                  Statutory compliance, asset recovery, and dispute advocacy led by Senior Advocates of Nigeria.
                </p>
              </div>
            </div>

            {/* Floating Overlay Card */}
            <div className="relative z-20 bg-[#1A1815]/95 backdrop-blur-md border border-[#D4AF37]/50 p-5 rounded-xl shadow-2xl space-y-1">
              <div className="text-[0.7rem] uppercase tracking-widest font-bold text-[#D4AF37]">
                Proven Track Record
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Over ₦50 Billion+
              </div>
              <p className="text-xs text-gray-300 font-normal">
                Recovered &amp; secured in commercial settlements and corporate acquisitions for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
