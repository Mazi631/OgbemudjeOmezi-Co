import React from 'react';
import { CONTACT_INFO } from '../../constants/data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 border-t border-[#B8860B]/30 relative overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="font-serif text-2xl font-bold text-white">
            Ogbemudje, Omezi <span className="text-[#B8860B] italic font-normal ml-1">&amp; Co.</span>
          </div>
          <p className="text-xs leading-relaxed max-w-xs text-gray-400 font-normal">
            A commercial legal firm providing counsel, litigation advocacy, dispute resolution, and regulatory guidance from Victoria Island, Lagos, Nigeria. Established 1994.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-xs font-bold tracking-[0.18em] uppercase text-[#D4AF37] mb-4">
            Navigation
          </h5>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                About Firm
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Practice Areas
              </a>
            </li>
            <li>
              <a href="#our-attorneys" className="hover:text-[#D4AF37] transition-colors">
                Our Attorneys
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">
                Client Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h5 className="text-xs font-bold tracking-[0.18em] uppercase text-[#D4AF37] mb-4">
            Practice Disciplines
          </h5>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Corporate &amp; M&amp;A
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Commercial Litigation
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Real Estate &amp; Title Perfection
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Family &amp; Estate Law
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Employment &amp; Labor Law
              </a>
            </li>
            <li>
              <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                Criminal &amp; White-Collar Defense
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-xs font-bold tracking-[0.18em] uppercase text-[#D4AF37] mb-4">
            Contact Chambers
          </h5>
          <ul className="space-y-3 text-xs">
            <li>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-[#D4AF37] transition-colors block font-medium text-white"
              >
                +234 802 303 2981
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-[#D4AF37] transition-colors block font-medium text-white"
              >
                info@ogbemudjeomezi.com
              </a>
            </li>
            <li className="text-gray-400 text-xs leading-relaxed font-normal">
              Plot 12A, Victoria Island,<br />
              Lagos State, Nigeria.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 px-6 sm:px-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ogbemudje, Omezi &amp; Co. All Rights Reserved.</p>
          <p className="text-xs text-[#D4AF37] font-serif italic">
            Barristers, Solicitors &amp; Arbitrators &bull; Est. 1994
          </p>
        </div>
      </div>
    </footer>
  );
};
