import React from 'react';
import { PageHeader, SectionLabel } from '@ogbemudje/ui';
import { AboutSection } from '../components/sections/AboutSection';
import { ShieldCheck, History, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Firm Profile"
        title="Ogbemudje, Omezi & Co."
        titleAccent="Barristers, Solicitors & Arbitrators"
        subtitle="Operating from Victoria Island, Lagos since 1994, the firm engages in commercial legal practice, serving corporate organizations and high-net-worth individuals across diverse economic sectors."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Main Interactive About Content */}
      <AboutSection />

      {/* Client Base & Operational Scope Section */}
      <section className="py-20 px-5 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel>Client Base &amp; Sectors</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-obsidian)] leading-tight">
              Legal Counsel for Corporate Organizations &amp; Private Clients
            </h2>
            <p className="text-[0.92rem] text-gray-600 leading-relaxed font-light">
              The firm's client base encompasses high-net-worth individuals and corporate entities operating in financial, consulting, petroleum, aviation, engineering, trading, manufacturing, and banking sectors.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)]" /> Advice &amp; representation conducted in English
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)]" /> Commercial arbitration &amp; court litigation advocacy
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)]" /> Title perfection &amp; land Registry transactions
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[var(--color-mist)] p-7 rounded-md border border-stone-200 space-y-3">
              <History className="w-6 h-6 text-[var(--color-gold)]" />
              <h4 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Victoria Island Chambers</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Headquartered at 34 Kofo Abayomi Street, Victoria Island, providing accessible legal services to commercial organizations.
              </p>
            </div>

            <div className="bg-[var(--color-mist)] p-7 rounded-md border border-stone-200 space-y-3">
              <Award className="w-6 h-6 text-[var(--color-gold)]" />
              <h4 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Secretarial &amp; Governance</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Providing company secretarial services, corporate filings, and attendance at Board Meetings and AGMs.
              </p>
            </div>

            <div className="bg-[var(--color-mist)] p-7 rounded-md border border-stone-200 sm:col-span-2 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-gold)]" />
              <h4 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Comprehensive Documentation &amp; Vetting</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Preparation, review, vetting, and statutory perfection of legal instruments, deeds of assignment, mortgages, and commercial contracts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
