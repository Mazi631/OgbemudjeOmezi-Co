import React from 'react';
import { PageHeader } from '@ogbemudje/ui';
import { FaqSection } from '../components/sections/FaqSection';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Client Guidance & FAQ"
        title="Frequently Asked"
        titleAccent="Legal Questions"
        subtitle="Find clear answers to common inquiries regarding legal fees, consultations, property due diligence, litigation procedures, and regulatory compliance."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      {/* Main Interactive Search & Accordion Section */}
      <FaqSection />

      {/* Support & Direct Legal Inquiry Fallback */}
      <section className="py-20 px-5 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-[var(--color-obsidian)] text-white p-8 sm:p-12 rounded-md shadow-xl border border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-bright)]">
              <MessageSquare className="w-4 h-4" /> Have a Specific Unanswered Question?
            </div>
            <h3 className="font-serif text-2xl font-semibold">Speak Directly With Our Legal Practitioners</h3>
            <p className="text-xs text-white/60 font-light max-w-md">
              Our legal team is available to review your matter and provide tailored guidance.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-bright)] text-[var(--color-ink)] font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shrink-0 inline-flex items-center gap-2 shadow-md"
          >
            Submit Direct Question <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
