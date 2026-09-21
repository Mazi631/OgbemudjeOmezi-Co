import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { PracticeAreasSection } from '../components/sections/PracticeAreasSection';
import { PRACTICE_AREAS, LEGAL_SERVICES_GROUPS } from '../constants/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../components/ui/SectionLabel';

export const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Legal Practice & Services"
        title="Commercial Legal Practice Across"
        titleAccent="16 Specializations"
        subtitle="The firm provides comprehensive legal counsel, commercial arbitration, document perfection, and litigation representation to corporate entities and private clients."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Practice Areas' }]}
      />

      {/* Main Interactive Carousel & Modal View */}
      <PracticeAreasSection />

      {/* Grouped Practical Legal Services */}
      <section className="py-20 px-5 sm:px-8 bg-[var(--color-mist)] border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionLabel>Practical Legal Services</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-obsidian)]">
              Core Legal Services &amp; Representation
            </h2>
            <p className="text-[0.9rem] text-gray-600 font-light">
              Structured legal services offered to corporate entities, financial institutions, and high-net-worth clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEGAL_SERVICES_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md border border-stone-200 space-y-4 shadow-xs">
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-obsidian)] border-b border-gray-100 pb-4">
                  {group.category}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{group.description}</p>
                <div className="space-y-2.5 pt-2">
                  {group.services.map((svc, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-xs text-gray-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete 16 Practice Disciplines Grid */}
      <section className="py-20 px-5 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionLabel>Full Practice Scope</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-obsidian)]">
              Documented Areas of Commercial Practice
            </h2>
            <p className="text-[0.9rem] text-gray-600 font-light">
              Overview of the firm's legal involvement across commercial sectors and statutory frameworks in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-[var(--color-mist)] border border-stone-200 p-6 rounded-md space-y-3 hover:border-[var(--color-gold)]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{area.icon}</span>
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-obsidian)]">
                    {area.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{area.description}</p>
                <div className="space-y-1.5 pt-2 border-t border-stone-200">
                  {area.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[0.76rem] text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="bg-[var(--color-obsidian)] text-white p-8 sm:p-12 rounded-md flex flex-col sm:flex-row items-center justify-between gap-6 border border-[var(--color-border-subtle)]">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-semibold">Require Legal Consultation or Document Perfection?</h3>
              <p className="text-xs text-white/60 font-light">Contact our Victoria Island chambers for structured legal advisory and transactional execution.</p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-bright)] text-[var(--color-ink)] font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shrink-0 inline-flex items-center gap-2 shadow-md"
            >
              Contact Chambers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
