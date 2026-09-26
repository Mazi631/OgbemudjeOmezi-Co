import React from 'react';
import { Button } from '@ogbemudje/ui';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-[92vh] bg-[#0A0E1A] text-white flex items-center relative overflow-hidden pt-28 pb-20 px-5 sm:px-8">
      {/* Background Subtle Mesh & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold)]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-obsidian)] rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Eyebrow, Heading, Subtitle, Highlights, Action CTAs */}
        <div className="lg:col-span-7 space-y-7 animate-fadeIn">
          {/* Eyebrow Pill Badge with Pulse Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[var(--color-gold)]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-gold-bright)]">
              Accepting Corporate &amp; Litigation Matters &bull; Est. 1994
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight">
            Relentless Advocacy.<br />
            <span className="font-serif italic font-normal text-[var(--color-gold)]">
              Exceptional Results.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
            Ogbemudje, Omezi &amp; Co. provides elite legal representation across Corporate &amp; Commercial Law, Complex Commercial Litigation, Real Estate Transactions, and Dispute Resolution in Nigeria.
          </p>

          {/* Checklist */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <CheckCircle2 className="w-4.5 h-4.5 text-[var(--color-gold)] shrink-0" />
              <span>30+ Years of Established Commercial Legal Experience</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <CheckCircle2 className="w-4.5 h-4.5 text-[var(--color-gold)] shrink-0" />
              <span>Federal &amp; Appellate Litigation &amp; Commercial Arbitration</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <CheckCircle2 className="w-4.5 h-4.5 text-[var(--color-gold)] shrink-0" />
              <span>Dedicated Transaction Counsel &amp; Title Perfection Advisory</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Button asAnchor href="#contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule Consultation
            </Button>
            <Button asAnchor href="#practice-areas" variant="outline">
              Explore Practice Areas
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Graphic Frame with Badge */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
              alt="Scales of Justice - Ogbemudje, Omezi & Co."
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent opacity-80" />

            {/* Top Right Emblem Badge */}
            <div className="absolute top-4 right-4 bg-[#0A0E1A]/90 border border-[var(--color-gold)]/40 backdrop-blur-md px-3.5 py-2 rounded-xs flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--color-gold)]" />
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-white">SAN Led Firm</span>
            </div>

            {/* Floating Gold Experience Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0A0E1A]/95 border border-[var(--color-gold)]/50 p-5 rounded-xs backdrop-blur-xl shadow-2xl space-y-1">
              <div className="font-serif text-3xl font-bold text-[var(--color-gold)]">
                30+ Years
              </div>
              <p className="text-xs uppercase tracking-widest font-semibold text-gray-300">
                Of Outstanding Legal Advocacy in Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
