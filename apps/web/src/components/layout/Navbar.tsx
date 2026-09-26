import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Our Attorneys', href: '#our-attorneys' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer: number | null = null;
    const triggerEntrance = () => {
      timer = window.setTimeout(() => {
        setIsRevealed(true);
      }, 50);
    };

    if (typeof window !== 'undefined' && (window as any).__WEBSITE_LOADED__) {
      triggerEntrance();
    } else {
      window.addEventListener('website-loaded', triggerEntrance);
      timer = window.setTimeout(triggerEntrance, 6000);
    }

    return () => {
      window.removeEventListener('website-loaded', triggerEntrance);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isRevealed ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          scrolled
            ? 'bg-[#F6F3EC]/95 backdrop-blur-md py-4 border-b border-[#E6E0D2] shadow-xs'
            : 'bg-[#F6F3EC] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
          {/* Brand Logo in Dark Bronze */}
          <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-[#38291B] flex items-center">
            Ogbemudje, Omezi <span className="italic font-normal text-[#8A7D6E] ml-1.5">&amp; Co.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#38291B] hover:text-[#8A7D6E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Dark Bronze Button with Diagonal Arrow ↗ */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-[#38291B] text-white hover:bg-[#261B11] text-xs font-bold px-6 py-2.5 rounded-sm transition-all duration-300 flex items-center gap-1.5 tracking-wide shadow-md group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Button -> Opens Sidebar */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-[#38291B] hover:text-[#8A7D6E] p-2 focus:outline-none cursor-pointer"
            aria-label="Open Sidebar Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Slide-Out Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs cursor-pointer"
            onClick={closeSidebar}
            aria-hidden="true"
          />

          {/* Right Slide-Out Sidebar Panel with Snappy Animation */}
          <aside className="relative z-10 w-[300px] sm:w-[360px] h-full bg-[#38291B] text-white p-8 border-l border-[#8A7D6E]/40 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-in-right">
            <div className="space-y-8">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="font-serif text-lg font-bold text-white">
                  Ogbemudje, Omezi <span className="text-[#D4AF37] italic font-light">&amp; Co.</span>
                </div>
                <button
                  type="button"
                  onClick={closeSidebar}
                  className="bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#38291B] p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <nav className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeSidebar}
                    className="block text-lg font-serif font-medium text-gray-200 hover:text-[#D4AF37] transition-colors py-1.5 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar Footer & Chambers Info */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <a
                href="#contact"
                onClick={closeSidebar}
                className="w-full bg-[#D4AF37] text-[#38291B] hover:bg-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-sm transition-all text-center inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="space-y-3 text-xs text-gray-300 font-normal">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>+234 802 303 2981</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>info@ogbemudjeomezi.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Victoria Island, Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
