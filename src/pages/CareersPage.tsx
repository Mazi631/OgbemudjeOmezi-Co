import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { CareersSection } from '../components/sections/CareersSection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Award, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Career Opportunities"
        title="Join Our Legal"
        titleAccent="Practice & Culture"
        subtitle="We foster a professional environment of legal excellence, mentorship, and commercial innovation for experienced advocates, associates, and interns."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      {/* Main Careers Overview Banner */}
      <CareersSection />

      {/* Associate Growth & Intern Track Section */}
      <section className="py-20 px-5 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <SectionLabel>Professional Growth</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-obsidian)]">
              Why Practise With Ogbemudje, Omezi &amp; Co.?
            </h2>
            <p className="text-xs text-gray-600 font-light">
              We invest in our practitioners through hands-on courtroom exposure, arbitration mentorship, and sector specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-mist)] p-8 rounded-md border border-stone-200 space-y-4">
              <Award className="w-8 h-8 text-[var(--color-emerald)]" />
              <h3 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Direct Mentorship</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Work directly alongside Senior Partners with over 35 years of legal experience across high-profile corporate litigation and transaction structuring.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-stone-200 text-xs text-gray-700">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-emerald)]" /> Supreme &amp; Appellate court exposure</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-emerald)]" /> CIArb arbitration training</div>
              </div>
            </div>

            <div className="bg-[var(--color-mist)] p-8 rounded-md border border-stone-200 space-y-4">
              <GraduationCap className="w-8 h-8 text-[var(--color-emerald)]" />
              <h3 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Internship Track</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Structured internships for Nigerian Law School candidates and Law undergraduates seeking real-world legal research, drafting, and client advisory experience.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-stone-200 text-xs text-gray-700">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-emerald)]" /> Legal drafting workshops</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-emerald)]" /> Title due diligence practice</div>
              </div>
            </div>

            <div className="bg-[var(--color-mist)] p-8 rounded-md border border-stone-200 space-y-4">
              <Users className="w-8 h-8 text-[var(--color-emerald)]" />
              <h3 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Collaborative Ethics</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                A supportive chamber environment where integrity, thorough legal research, professional ethics, and mutual respect form the basis of our daily practice.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-stone-200 text-xs text-gray-700">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-emerald)]" /> Professional CLE sponsorship</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-emerald)]" /> NBA conference participation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
