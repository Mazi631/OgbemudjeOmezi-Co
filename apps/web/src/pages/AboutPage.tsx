import React from 'react';
import { AboutFirmSection } from '../components/sections/AboutFirmSection';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CheckCircle2, History, Award, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-[#F6F3EC] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#38291B] text-white py-16 px-6 sm:px-10">
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
              Firm Profile
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold">
              About Ogbemudje, Omezi &amp; Co.
            </h1>
            <p className="text-base text-gray-300 max-w-2xl font-normal leading-relaxed">
              Operating from Victoria Island, Lagos since 1994, the firm engages in commercial legal practice, serving corporate organizations and high-net-worth individuals across diverse economic sectors.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Main About Firm Section */}
      <ScrollReveal>
        <AboutFirmSection />
      </ScrollReveal>

      {/* Client Base & Operational Scope Section */}
      <section className="py-20 px-6 sm:px-10 bg-[#FCFBFA] border-t border-[#E6E0D2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" distance={24}>
              <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
                Client Base &amp; Sectors
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38291B] leading-tight">
                Legal Counsel for Corporate Organizations &amp; Private Clients
              </h2>
              <p className="text-base text-[#59544B] leading-relaxed font-normal">
                The firm's client base encompasses corporate entities and high-net-worth individuals operating across financial, petroleum, aviation, engineering, trading, manufacturing, and banking sectors.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#38291B] font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#B8860B]" /> Direct partner involvement across all client instructions
                </div>
                <div className="flex items-center gap-3 text-sm text-[#38291B] font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#B8860B]" /> Commercial arbitration &amp; appellate court advocacy
                </div>
                <div className="flex items-center gap-3 text-sm text-[#38291B] font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#B8860B]" /> Title perfection &amp; land registry transactions in Nigeria
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay={100} direction="up" distance={24}>
              <div className="bg-[#F6F3EC] p-7 rounded-xs border border-[#E6E0D2] space-y-3 h-full">
                <History className="w-6 h-6 text-[#B8860B]" />
                <h4 className="font-serif text-xl font-bold text-[#38291B]">Victoria Island Chambers</h4>
                <p className="text-xs text-[#59544B] leading-relaxed font-normal">
                  Headquartered at 34 Kofo Abayomi Street, Victoria Island, providing accessible legal services to commercial organizations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="up" distance={24}>
              <div className="bg-[#F6F3EC] p-7 rounded-xs border border-[#E6E0D2] space-y-3 h-full">
                <Award className="w-6 h-6 text-[#B8860B]" />
                <h4 className="font-serif text-xl font-bold text-[#38291B]">Secretarial &amp; Governance</h4>
                <p className="text-xs text-[#59544B] leading-relaxed font-normal">
                  Providing company secretarial services, corporate filings, and attendance at Board Meetings and AGMs.
                </p>
              </div>
            </ScrollReveal>

            <div className="sm:col-span-2">
              <ScrollReveal delay={300} direction="up" distance={24}>
                <div className="bg-[#F6F3EC] p-7 rounded-xs border border-[#E6E0D2] space-y-3">
                  <ShieldCheck className="w-6 h-6 text-[#B8860B]" />
                  <h4 className="font-serif text-xl font-bold text-[#38291B]">Comprehensive Documentation &amp; Vetting</h4>
                  <p className="text-xs text-[#59544B] leading-relaxed font-normal">
                    Preparation, review, vetting, and statutory perfection of legal instruments, deeds of assignment, mortgages, and commercial contracts.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
