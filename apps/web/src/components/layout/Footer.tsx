import React from 'react';
import { CONTACT_INFO } from '../../constants/data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0E1A] text-white/60 border-t border-[var(--color-gold)]/20 relative overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="font-serif text-[1.3rem] font-semibold text-white">
            Ogbemudje, Omezi <em className="text-[var(--color-gold)] italic font-light">&amp; Co.</em>
          </div>
          <p className="text-[0.82rem] leading-relaxed max-w-xs text-gray-400 font-light">
            A commercial legal firm providing counsel, litigation advocacy, dispute resolution, and regulatory guidance from Victoria Island, Lagos, Nigeria. Established 1994.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold-bright)] mb-4">
            Navigation
          </h5>
          <ul className="space-y-2.5 text-[0.83rem]">
            <li>
              <a href="#home" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[var(--color-gold-bright)] transition-colors">
                About Firm
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Practice Areas
              </a>
            </li>
            <li>
              <a href="#our-attorneys" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Our Attorneys
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Client Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold-bright)] mb-4">
            Practice Disciplines
          </h5>
          <ul className="space-y-2.5 text-[0.83rem]">
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Corporate &amp; M&amp;A
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Commercial Litigation
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Real Estate &amp; Title Perfection
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Family &amp; Estate Law
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Employment &amp; Labor Law
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[var(--color-gold-bright)] transition-colors">
                Criminal &amp; White-Collar Defense
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold-bright)] mb-4">
            Contact Chambers
          </h5>
          <ul className="space-y-3 text-[0.83rem]">
            <li>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-[var(--color-gold-bright)] transition-colors block font-medium text-white"
              >
                +234 802 303 2981
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-[var(--color-gold-bright)] transition-colors block font-medium text-white"
              >
                info@ogbemudjeomezi.com
              </a>
            </li>
            <li className="text-gray-400 text-[0.82rem] leading-relaxed font-light">
              Plot 12A, Victoria Island,<br />
              Lagos State, Nigeria.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 px-5 sm:px-8 bg-black/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.78rem] text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ogbemudje, Omezi &amp; Co. All Rights Reserved.</p>
          <p className="text-[0.72rem] text-[var(--color-gold-bright)]/80 font-serif italic">
            Barristers, Solicitors &amp; Arbitrators &bull; Est. 1994
          </p>
        </div>
      </div>
    </footer>
  );
};
