import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { BlogSection } from '../components/sections/BlogSection';
import { BookOpen, Sparkles } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Legal Insights & Publications"
        title="Expert Analysis &"
        titleAccent="Regulatory Guidance"
        subtitle="Thought leadership, law updates, and practical guidance on corporate governance, data privacy, and real estate regulations in Nigeria."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
      />

      {/* Main Magazine Layout Showcase */}
      <BlogSection />

      {/* Topics & Regulatory Archives */}
      <section className="py-20 px-5 sm:px-8 bg-[var(--color-mist)] border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl font-normal text-[var(--color-obsidian)]">
              Primary Insight Focus Areas
            </h2>
            <p className="text-xs text-gray-600 font-light">
              Explore commentary grouped by regulatory authority and corporate law sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-md border border-stone-200 space-y-3 shadow-xs">
              <BookOpen className="w-6 h-6 text-[var(--color-emerald)]" />
              <h4 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Nigeria Data Protection (NDPA)</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Guidelines on compliance audits, data controller registration, privacy policies, and breach notification obligations.
              </p>
            </div>

            <div className="bg-white p-7 rounded-md border border-stone-200 space-y-3 shadow-xs">
              <Sparkles className="w-6 h-6 text-[var(--color-emerald)]" />
              <h4 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">CAMA &amp; Corporate Governance</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Director liabilities, corporate restructuring, board fiduciary duties, and CAC annual compliance filings.
              </p>
            </div>

            <div className="bg-white p-7 rounded-md border border-stone-200 space-y-3 shadow-xs">
              <BookOpen className="w-6 h-6 text-[var(--color-emerald)]" />
              <h4 className="font-serif text-xl font-semibold text-[var(--color-obsidian)]">Lagos Land Law &amp; Title Perfection</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Step-by-step requirements for Governor's Consent, Certificate of Occupancy, title registration, and land charge perfection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
