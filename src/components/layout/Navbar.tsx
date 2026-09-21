import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_INFO } from '../../constants/data';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0f1117]/95 backdrop-blur-md border-[var(--color-gold)]/25 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0f1117]/85 backdrop-blur-sm border-white/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[54px]">
        {/* Logo Link */}
        <Link
          to="/"
          className="font-serif text-[1.15rem] font-semibold tracking-wide text-white flex items-center gap-3 group"
        >
          <img
            src={CONTACT_INFO.logoUrl}
            alt="Ogbemudje, Omezi & Co. Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(184,136,42,0.3)]"
          />
          <span className="flex flex-col sm:flex-row sm:gap-1.5 leading-tight">
            <span className="font-serif font-semibold text-white">Ogbemudje, Omezi</span>
            <span className="text-[var(--color-gold-bright)] italic font-light">&amp; Co.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            if (item.isCta) {
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className="bg-[var(--color-gold)] text-[var(--color-ink)] font-bold px-5 py-2 rounded-xs text-[0.78rem] tracking-[0.1em] uppercase hover:bg-[var(--color-gold-bright)] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(184,136,42,0.35)] flex items-center gap-1 group"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            }

            return (
              <NavLink
                key={item.id}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `text-[0.78rem] font-medium tracking-[0.12em] uppercase transition-all duration-200 relative py-1.5 ${
                    isActive
                      ? 'text-[var(--color-gold-bright)] font-semibold'
                      : 'text-white/75 hover:text-[var(--color-gold-bright)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-bright)] rounded-full animate-fadeIn" />
                    )}
                  </>
                )}
              </NavLink>
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
        <div className="lg:hidden bg-[#0f1117]/98 backdrop-blur-xl border-b border-[var(--color-gold)]/30 px-6 py-6 space-y-3 shadow-2xl animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-[0.85rem] font-medium tracking-[0.14em] uppercase py-2.5 transition-all ${
                  item.isCta
                    ? 'bg-[var(--color-gold)] text-[var(--color-ink)] text-center py-3 rounded-xs font-bold mt-4 shadow-md'
                    : isActive
                    ? 'text-[var(--color-gold-bright)] font-bold pl-3 border-l-2 border-[var(--color-gold-bright)] bg-white/5'
                    : 'text-white/80 hover:text-[var(--color-gold-bright)] pl-1'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
