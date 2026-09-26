import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { PRACTICE_AREAS, TEAM_MEMBERS, LEGAL_SERVICES_GROUPS } from '../constants/data';
import { SectionLabel, PracticeCard, TeamCard, Button } from '@ogbemudje/ui';
import { ArrowRight, ShieldCheck, Award, Users, Scale, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Firm Overview Executive Summary */}
      <section className="py-20 px-5 sm:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel>Firm Overview</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
              Ogbemudje, Omezi &amp; Co.<br />
              <em className="italic text-[var(--color-gold)] font-serif">Barristers, Solicitors &amp; Arbitrators</em>
            </h2>
            <p className="text-[0.95rem] text-gray-700 leading-relaxed font-light">
              Operating from Victoria Island, Lagos since 1994, Ogbemudje, Omezi &amp; Co. is a commercial law practice providing legal counsel, transaction advisory, and litigation representation to corporate organizations and high-net-worth individuals across Nigeria.
            </p>
            <div className="pt-2">
              <Button asAnchor href="/about" variant="outline" className="!text-[var(--color-obsidian)] !border-[var(--color-gold)]/40 hover:!bg-[var(--color-gold)] hover:!text-[var(--color-ink)]">
                Read Full Firm Profile
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[var(--color-mist)] p-6 rounded-md border border-stone-200 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-gold)] flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)]">Established Practice</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">Founded in 1994, offering over 30 years of legal service across Nigerian jurisdiction.</p>
            </div>

            <div className="bg-[var(--color-mist)] p-6 rounded-md border border-stone-200 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-gold)] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)]">Corporate &amp; Private Clients</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">Representing financial, petroleum, aviation, engineering, trading, and manufacturing entities.</p>
            </div>

            <div className="bg-[var(--color-mist)] p-6 rounded-md border border-stone-200 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-gold)] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)]">Document Perfection</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">Specialized in processing land titles, Governor's Consent, and regulatory perfection.</p>
            </div>

            <div className="bg-[var(--color-mist)] p-6 rounded-md border border-stone-200 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-gold)] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)]">Commercial Arbitration</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">Members of CIArb and IBA providing structured dispute resolution and mediation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Practice Disciplines Teaser */}
      <section className="py-24 px-5 sm:px-8 bg-[var(--color-obsidian)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <SectionLabel light>Commercial Practice</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
                Principal Legal <em className="italic text-[var(--color-gold-bright)] font-serif">Disciplines</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="text-[0.8rem] font-bold uppercase tracking-wider text-[var(--color-gold-bright)] hover:underline inline-flex items-center gap-1.5"
            >
              View All 16 Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.slice(0, 3).map((area) => (
              <PracticeCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Practical Services Grouping Overview */}
      <section className="py-20 px-5 sm:px-8 bg-[var(--color-mist)] border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <SectionLabel>Legal Services</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-obsidian)]">
              Scope of Legal Representation
            </h2>
            <p className="text-xs text-gray-600 font-light">
              The firm provides practical legal services structured across governance, documentation, advocacy, and transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGAL_SERVICES_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white p-7 rounded-md border border-stone-200 space-y-4 shadow-xs">
                <h3 className="font-serif text-xl font-semibold text-[var(--color-obsidian)] border-b border-gray-100 pb-3">
                  {group.category}
                </h3>
                <p className="text-xs text-gray-600 font-light">{group.description}</p>
                <div className="space-y-2 pt-1">
                  {group.services.map((svc, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Spotlight Teaser */}
      <section className="py-24 px-5 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <SectionLabel>Legal Practitioners</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
                Managing <em className="italic text-[var(--color-gold)] font-serif">Partners</em>
              </h2>
            </div>
            <Link
              to="/team"
              className="text-[0.8rem] font-bold uppercase tracking-wider text-[var(--color-gold)] hover:underline inline-flex items-center gap-1.5"
            >
              View Full Legal Directory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.filter((m) => m.category === 'partner').map((member, idx) => (
              <TeamCard key={idx} member={{ ...member, id: idx.toString() }} />
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA Banner */}
      <section className="py-20 px-5 sm:px-8 bg-gradient-to-r from-[var(--color-obsidian)] via-[var(--color-slate)] to-[var(--color-obsidian)] text-white relative overflow-hidden border-t border-[var(--color-border-subtle)]">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <SectionLabel light>Chambers Consultation</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
            Legal Representation &amp; Transactional Advisory
          </h2>
          <p className="text-[0.95rem] text-white/70 max-w-xl mx-auto font-light">
            Contact our Victoria Island chambers to discuss your commercial matter or legal requirements with our practitioners.
          </p>
          <div className="pt-2">
            <Button asAnchor href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Chambers Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
