import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Our Attorneys', href: '#our-attorneys' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact', isCta: true },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0A0E1A]/95 backdrop-blur-md border-[var(--color-gold)]/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-[#0A0E1A]/85 backdrop-blur-sm border-white/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[54px]">
        {/* Logo Link */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="font-serif text-[1.15rem] font-semibold tracking-wide text-white flex items-center gap-2 group"
        >
          <span className="flex flex-col sm:flex-row sm:gap-1.5 leading-tight">
            <span className="font-serif font-semibold text-white">Ogbemudje, Omezi</span>
            <span className="text-[var(--color-gold-bright)] italic font-light">&amp; Co.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            if (item.isCta) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-[var(--color-gold)] text-[var(--color-ink)] font-bold px-5 py-2 rounded-xs text-[0.78rem] tracking-[0.1em] uppercase hover:bg-[var(--color-gold-bright)] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(184,136,42,0.35)] flex items-center gap-1 group"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-white/80 hover:text-[var(--color-gold-bright)] transition-colors py-1.5"
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden text-white/90 hover:text-[var(--color-gold-bright)] p-2 focus:outline-none cursor-pointer transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E1A]/98 backdrop-blur-xl border-b border-[var(--color-gold)]/30 px-6 py-6 space-y-3 shadow-2xl animate-fadeIn">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className={`block text-[0.85rem] font-medium tracking-[0.14em] uppercase py-2.5 transition-all ${
                item.isCta
                  ? 'bg-[var(--color-gold)] text-[var(--color-ink)] text-center py-3 rounded-xs font-bold mt-4 shadow-md'
                  : 'text-white/80 hover:text-[var(--color-gold-bright)] pl-1'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
