import React from 'react';
import { Scale, Award, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/data';

export const AboutFirmSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#F6F3EC] text-[#38291B] pt-20 pb-24 px-6 sm:px-10 overflow-hidden border-b border-[#E6E0D2]">
      {/* Background Law Firm Logo Watermark in Subtle Warm Tone */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-5 overflow-hidden">
        <img
          src={CONTACT_INFO.logoUrl}
          alt="Law Firm Logo Watermark"
          className="w-[450px] sm:w-[600px] lg:w-[750px] h-auto object-contain filter grayscale brightness-50"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
            About Our Firm
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#38291B] leading-tight">
            Unwavering Commitment to Justice &amp; Strategic Legal Excellence
          </h2>
          <p className="text-base text-[#59544B] leading-relaxed font-normal">
            Founded in 1994 and headquartered in Victoria Island, Lagos, Ogbemudje, Omezi &amp; Co. is a premier commercial law practice. We counsel corporate clients, financial institutions, state authorities, and private clients on complex legal, transactional, and dispute resolution matters across Nigeria.
          </p>
          <p className="text-base text-[#59544B] leading-relaxed font-normal">
            Our team of senior advocates, arbitrators, and solicitors combines deep courtroom trial mastery with sharp commercial perspective — protecting assets, executing high-stakes transactions, and achieving favorable client outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3.5 bg-[#FCFBFA] p-5 rounded-xs border border-[#E6E0D2] shadow-2xs hover:border-[#38291B] transition-colors">
              <Scale className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#38291B]">Courtroom &amp; CIArb Advocacy</h4>
                <p className="text-xs text-[#6E6457] font-normal mt-0.5">High-stakes litigation and commercial arbitration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-[#FCFBFA] p-5 rounded-xs border border-[#E6E0D2] shadow-2xs hover:border-[#38291B] transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#38291B]">Title &amp; Property Perfection</h4>
                <p className="text-xs text-[#6E6457] font-normal mt-0.5">Governor's consent &amp; land registry perfection.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-[#FCFBFA] p-5 rounded-xs border border-[#E6E0D2] shadow-2xs hover:border-[#38291B] transition-colors">
              <Users className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#38291B]">Corporate Governance</h4>
                <p className="text-xs text-[#6E6457] font-normal mt-0.5">CAC compliance, M&amp;A, and regulatory advisory.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-[#FCFBFA] p-5 rounded-xs border border-[#E6E0D2] shadow-2xs hover:border-[#38291B] transition-colors">
              <Award className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-base text-[#38291B]">SAN Led Counsel</h4>
                <p className="text-xs text-[#6E6457] font-normal mt-0.5">Senior Advocates managing practice areas.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="bg-[#38291B] hover:bg-[#261B11] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-xs transition-all duration-300 inline-flex items-center gap-2 shadow-sm group"
            >
              <span>Schedule Chambers Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Tailored Chambers Dossier & Track Record Panel */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-xs border border-[#E6E0D2] bg-[#FCFBFA] p-8 sm:p-10 shadow-sm flex flex-col justify-between min-h-[500px]">
            {/* Top Gold Border Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#38291B] absolute top-0 left-0 right-0" />

            {/* Header Block */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F6F3EC] border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] shadow-inner">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase font-bold tracking-[0.2em] text-[#B8860B]">
                    Chambers Practice Profile
                  </div>
                  <div className="font-serif text-lg font-bold text-[#38291B]">
                    Dispute Advocacy &amp; Recovery
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#38291B] leading-snug">
                Commercial Litigation &amp; Asset Recovery
              </h3>
              <p className="text-xs text-[#6E6457] leading-relaxed font-normal">
                Representation in superior courts of record and international arbitration chambers across Nigeria.
              </p>
            </div>

            {/* Track Record Ledger */}
            <div className="space-y-5 my-6 py-6 border-y border-[#E6E0D2]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-serif text-3xl font-bold text-[#38291B] tracking-tight">
                    Over ₦50 Billion+
                  </div>
                  <div className="text-xs text-[#6E6457] mt-0.5">
                    Recovered &amp; secured in commercial settlements and corporate acquisitions.
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-1" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-serif text-3xl font-bold text-[#38291B] tracking-tight">
                    30+ Years
                  </div>
                  <div className="text-xs text-[#6E6457] mt-0.5">
                    Continuous appellate and trial practice in Victoria Island, Lagos since 1994.
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-1" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-serif text-xl font-bold text-[#38291B]">
                    CIArb &amp; SAN Counsel
                  </div>
                  <div className="text-xs text-[#6E6457] mt-0.5">
                    Senior Advocates of Nigeria and Chartered Arbitrators directing instructions.
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              </div>
            </div>

            {/* Footer Hallmark */}
            <div className="flex items-center justify-between text-[0.68rem] text-[#8A7D6E] uppercase tracking-wider font-semibold">
              <span>Victoria Island Chambers</span>
              <span className="text-[#B8860B]">Est. 1994</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
