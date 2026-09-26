import React from 'react';
import { SectionLabel, Button } from '@ogbemudje/ui';
import { Scale, Award, ShieldCheck, Users } from 'lucide-react';

export const AboutFirmSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <SectionLabel>About Our Firm</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
            Unwavering Commitment to Justice &amp; Strategic Legal Excellence
          </h2>
          <p className="text-[0.95rem] text-gray-700 leading-relaxed font-light">
            Founded in 1994 and headquartered in Victoria Island, Lagos, Ogbemudje, Omezi &amp; Co. is a premier commercial law firm. We counsel corporate clients, financial institutions, state authorities, and high-net-worth individuals on complex legal, transactional, and dispute resolution matters across Nigeria.
          </p>
          <p className="text-[0.95rem] text-gray-700 leading-relaxed font-light">
            Our team of senior advocates, arbitrators, and solicitors combines deep courtroom mastery with sharp commercial perspective — protecting assets, executing high-stakes transactions, and achieving favorable outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-stone-200 shadow-xs">
              <Scale className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-sm text-[var(--color-obsidian)]">Courtroom &amp; CIArb Advocacy</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">High-stakes litigation and commercial arbitration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-stone-200 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-sm text-[var(--color-obsidian)]">Title &amp; Property Perfection</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">Governor's consent &amp; land registry perfection.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-stone-200 shadow-xs">
              <Users className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-sm text-[var(--color-obsidian)]">Corporate Governance</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">CAC compliance, M&amp;A, and regulatory advisory.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-stone-200 shadow-xs">
              <Award className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-semibold text-sm text-[var(--color-obsidian)]">SAN Led Counsel</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">Senior Advocates of Nigeria managing practice areas.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button asAnchor href="#contact" variant="primary">
              Schedule Chambers Consultation
            </Button>
          </div>
        </div>

        {/* Right Column Image Frame with Badge Overlay */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg overflow-hidden border border-stone-300 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1200&auto=format&fit=crop"
              alt="Law Library & Chambers"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/80 via-transparent to-transparent" />

            {/* Floating Gold Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-[var(--color-gold)] p-5 rounded-xs shadow-2xl space-y-1">
              <div className="text-[0.7rem] uppercase tracking-widest font-bold text-[var(--color-gold)]">
                Proven Track Record
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-obsidian)]">
                Over ₦50 Billion+
              </div>
              <p className="text-xs text-gray-600 font-light">
                Recovered &amp; secured in commercial settlements and corporate acquisitions for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
