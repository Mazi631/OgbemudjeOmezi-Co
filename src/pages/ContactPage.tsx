import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ContactSection } from '../components/sections/ContactSection';
import { MapPin, Navigation } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Contact & Consultation"
        title="Schedule a Legal"
        titleAccent="Consultation"
        subtitle="Our chambers are located in Victoria Island, Lagos. Contact our legal office by phone, email, or by scheduling an appointment below."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Office Directions & Location Visualizer */}
      <section className="py-16 px-5 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-emerald-light)] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-obsidian)]">
                  Victoria Island Chambers Location
                </h3>
                <p className="text-xs text-gray-500 font-light">
                  3rd Floor, 34 Kofo Abayomi Street, Victoria Island, Lagos State, Nigeria.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=34+Kofo+Abayomi+Street+Victoria+Island+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[var(--color-mist)] border border-stone-300 text-gray-800 text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[var(--color-emerald)] hover:text-white hover:border-[var(--color-emerald)] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>

          {/* Styled Map Location Card Visualizer */}
          <div className="w-full h-[280px] bg-gradient-to-br from-[#0a121c] via-[var(--color-obsidian)] to-[#111c2e] rounded-md border border-[var(--color-border-emerald)] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[var(--color-emerald)]/20 border border-[var(--color-emerald)] text-[var(--color-emerald-light)] flex items-center justify-center animate-bounce">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-semibold text-white">Ogbemudje, Omezi &amp; Co. Legal Chambers</h4>
            <p className="text-xs text-white/60 font-light max-w-md">
              Accessible via Ahmadu Bello Way and Ozumba Mbadiwe Avenue in Victoria Island. Dedicated parking available for legal consultation clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
