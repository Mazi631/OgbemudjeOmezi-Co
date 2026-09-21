import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, PRACTICE_AREAS, NAV_ITEMS } from '../../constants/data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-obsidian)] text-white/60 border-t border-[var(--color-border-subtle)] relative overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <img
            src={CONTACT_INFO.logoUrl}
            alt="Ogbemudje, Omezi & Co."
            className="h-12 w-auto filter drop-shadow-[0_2px_8px_rgba(184,136,42,0.3)]"
          />
          <div className="font-serif text-[1.2rem] font-semibold text-white">
            Ogbemudje, Omezi <em className="text-[var(--color-gold-bright)] italic font-light">&amp; Co.</em>
          </div>
          <p className="text-[0.82rem] leading-relaxed max-w-xs text-white/55 font-light">
            A boutique legal firm providing trusted legal counsel, dispute resolution, and regulatory guidance from Victoria Island, Lagos, Nigeria. Established 1994.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold-bright)] mb-4">
            Navigation
          </h5>
          <ul className="space-y-2.5 text-[0.83rem]">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link to={item.href} className="hover:text-[var(--color-gold-bright)] transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold-bright)] mb-4">
            Practice Areas
          </h5>
          <ul className="space-y-2.5 text-[0.83rem]">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.id}>
                <Link to="/services" className="hover:text-[var(--color-gold-bright)] transition-colors">
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold-bright)] mb-4">
            Contact Info
          </h5>
          <ul className="space-y-3 text-[0.83rem]">
            <li>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-[var(--color-gold-bright)] transition-colors block font-medium"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-[var(--color-gold-bright)] transition-colors block font-medium"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="text-white/45 text-[0.82rem] leading-relaxed font-light">
              3rd Floor, 34 Kofo Abayomi Street,<br />
              Victoria Island, Lagos State, Nigeria.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-6 px-5 sm:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.78rem] text-white/50">
          <p>&copy; {new Date().getFullYear()} Ogbemudje, Omezi &amp; Co. All Rights Reserved.</p>
          <p className="text-[0.72rem] text-[var(--color-gold-bright)]/70 font-serif italic">
            Trusted legal counsel since 1994.
          </p>
        </div>
      </div>
    </footer>
  );
};
