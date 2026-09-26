import React from 'react';
import { FIRM_STATS, CONTACT_INFO } from '../../constants/data';
import { Button } from '@ogbemudje/ui';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[var(--color-obsidian)] flex items-center relative overflow-hidden pt-32 pb-24 px-5 sm:px-8">
      {/* LAYER 1: Responsive Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center lg:object-[75%_35%] scale-105 filter brightness-[0.35] saturate-[0.8] contrast-[1.1] transition-transform duration-1000 ease-out"
        />
      </div>

      {/* LAYER 2: Multi-Stage Directional Overlay Layer for Text Readability & Brand Warmth */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Horizontal Directional Dark Overlay (strongest behind the left text column) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)] via-[var(--color-obsidian)]/95 sm:via-[var(--color-obsidian)]/90 to-[var(--color-obsidian)]/30 lg:to-transparent" />

        {/* Ambient Gold Radial Spotlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,_var(--tw-gradient-stops))] from-[var(--color-gold)]/15 via-transparent to-[var(--color-obsidian)]/95" />

        {/* Top & Bottom Seamless Transition Gradients */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--color-obsidian)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--color-obsidian)] to-transparent" />

        {/* Subtle Brand Geometric Grid Mesh */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Top Gold Rule */}
      <div className="absolute top-0 left-0 right-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent pointer-events-none opacity-80" />

      {/* Logo Watermark Background */}
      <img
        src={CONTACT_INFO.logoUrl}
        alt=""
        aria-hidden="true"
        className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 w-[clamp(300px,42vw,560px)] opacity-8 pointer-events-none filter grayscale brightness-250 animate-floatSlow z-10"
      />

      {/* LAYER 3: Content Layer */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-7 animate-fadeInUp">
          {/* Eyebrow Floating Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-[var(--color-gold)]/30 backdrop-blur-md text-white/90 shadow-inner">
            <Award className="w-4 h-4 text-[var(--color-gold)]" />
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-white/90">
              Victoria Island, Lagos &bull; Est. 1994
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.06] tracking-tight">
            Ogbemudje, Omezi &amp; Co.<br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-bright)] to-[var(--color-gold)]">
              Barristers, Solicitors &amp; Arbitrators
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light drop-shadow-xs">
            A commercial law practice providing legal counsel, transaction advisory, and dispute advocacy to corporate organizations and high-net-worth individuals across Nigeria.
          </p>

          {/* Key Practice Highlights */}
          <div className="flex flex-wrap items-center gap-6 text-[0.82rem] text-white/65 font-medium">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" /> Commercial Litigation &amp; Arbitration
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" /> Corporate Governance &amp; Banking
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" /> Real Estate &amp; Title Perfection
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asAnchor href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule Consultation
            </Button>
            <Button asAnchor href="/services" variant="outline">
              Explore Practice Areas
            </Button>
          </div>
        </div>

        {/* Stats Column Cards */}
        <div className="lg:col-span-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {FIRM_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-surface)]/85 border border-[var(--color-border-subtle)] p-6 rounded-sm backdrop-blur-md transition-all duration-300 hover:border-[var(--color-gold)]/60 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] group"
              >
                <div className="font-serif text-4xl sm:text-5xl font-light text-white leading-none tracking-tight mb-2 group-hover:text-[var(--color-gold-bright)] transition-colors">
                  {stat.num}
                </div>
                <div className="text-[0.72rem] tracking-[0.16em] uppercase text-white/50 font-semibold flex items-center justify-between">
                  <span>{stat.label}</span>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]/40 group-hover:bg-[var(--color-gold)] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
