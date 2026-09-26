import React from 'react';
import { CONTACT_INFO } from '../../constants/data';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-gray-300 border-t border-[#B8860B]/40 relative overflow-hidden">
      {/* Top Gold Accent Bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_12px_rgba(212,175,55,0.4)]" />

      {/* Pre-Footer Grand Legal Banner */}
      <div className="border-b border-white/10 bg-[#1A1714] py-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
              Chambers of Commercial Law &amp; Arbitration
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Providing Strategic Legal Counsel in Nigeria Since 1994
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="bg-[#2A241E] hover:bg-[#38291B] text-[#E6E1D5] hover:text-white border border-[#B8860B]/40 px-5 py-3 rounded-xs text-xs font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href="#contact"
              className="bg-[#D4AF37] hover:bg-white text-[#141210] px-6 py-3 rounded-xs text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-1.5 shadow-md"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Expansive Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Brand Column (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={CONTACT_INFO.logoUrl}
                alt="Ogbemudje, Omezi & Co. Official Emblem"
                className="h-16 sm:h-20 w-auto object-contain brightness-110 filter drop-shadow-lg"
              />
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Ogbemudje, Omezi
                </h4>
                <div className="text-[#D4AF37] italic font-normal text-base block mt-0.5">
                  &amp; Co.
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 font-normal">
              A premier Nigerian commercial law firm counseling financial institutions, energy corporations, state authorities, and private clients on high-stakes litigation, property perfection, and cross-border transactions.
            </p>

            {/* Chambers Accreditation Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-wider text-gray-400 font-semibold">
              <span className="px-3 py-1.5 rounded-xs bg-[#1F1C18] border border-[#B8860B]/30 flex items-center gap-1.5 text-gray-300">
                <Scale className="w-3.5 h-3.5 text-[#D4AF37]" /> Est. 1994
              </span>
              <span className="px-3 py-1.5 rounded-xs bg-[#1F1C18] border border-[#B8860B]/30 flex items-center gap-1.5 text-gray-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> SAN &amp; CIArb Led
              </span>
              <span className="px-3 py-1.5 rounded-xs bg-[#1F1C18] border border-[#B8860B]/30 text-gray-300">
                Victoria Island, Lagos
              </span>
            </div>
          </div>

          {/* Quick Links Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h5 className="text-xs font-bold tracking-[0.22em] uppercase text-[#D4AF37]">
              Navigation
            </h5>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  About Our Firm
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#our-attorneys" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Our Attorneys
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Chambers Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Disciplines Column (Col Span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h5 className="text-xs font-bold tracking-[0.22em] uppercase text-[#D4AF37]">
              Practice Disciplines
            </h5>
            <ul className="space-y-3.5 text-sm font-normal">
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Banking &amp; Project Finance
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Commercial Litigation &amp; Trials
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Real Estate &amp; Title Perfection
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Energy, Petroleum &amp; Power
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Maritime &amp; Admiralty Law
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Arbitration &amp; Dispute Resolution
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition-colors block">
                  Corporate Governance &amp; CAC
                </a>
              </li>
            </ul>
          </div>

          {/* Chambers Secretariat Column (Col Span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h5 className="text-xs font-bold tracking-[0.22em] uppercase text-[#D4AF37]">
              Chambers Secretariat
            </h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed font-normal">
                  3rd Floor, 34 Kofo Abayomi Street,<br />
                  Victoria Island, Lagos State, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-[#D4AF37] font-semibold transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white hover:text-[#D4AF37] font-semibold transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 border-t border-white/10">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400 space-y-1">
                  <div><span className="font-semibold text-gray-300">Monday – Friday:</span> 9:00 AM – 5:00 PM</div>
                  <div><span className="font-semibold text-gray-300">Weekends:</span> By Appointment</div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Legal Disclaimer & Formal Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0C0B0A] py-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-[0.72rem] text-gray-500 leading-relaxed max-w-4xl font-normal">
            <strong>Legal Disclaimer:</strong> The material and information provided on this website are for general informational purposes only and do not constitute formal legal advice. Viewing or contacting Ogbemudje, Omezi &amp; Co. does not establish an attorney-client relationship until formal engagement terms are executed.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Ogbemudje, Omezi &amp; Co. Barristers &amp; Solicitors. All Rights Reserved.</p>
            <p className="text-xs text-gray-300">
              Built by{' '}
              <a
                href="https://theobsidianstudios.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] font-bold underline transition-colors cursor-pointer"
              >
                The Obsidian Studios
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
