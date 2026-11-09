import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { DISPLAY_PHONE } from '../utils/whatsapp';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.beforeAfter, href: '#avant-apres' },
    { label: t.nav.gallery, href: '#galerie' },
    { label: t.nav.about, href: '#a-propos' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'عربي' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F0]/95 backdrop-blur-md border-b border-[#E9DED2] shadow-xs py-3.5'
            : 'bg-[#F8F5F0]/80 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#accueil');
              }}
              className="group flex flex-col items-start whitespace-nowrap shrink-0 focus-visible:outline-hidden"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#34251F] font-semibold transition-colors group-hover:text-[#B5966B]">
                MAYA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#70584F] font-medium -mt-1">
                Hair Atelier
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#48352D]">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-[#B5966B] transition-colors py-1 cursor-pointer whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B5966B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: Language Switcher & Primary Action */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Language Switcher */}
              <div className="flex items-center bg-[#E9DED2]/60 rounded-full p-0.5 border border-[#D8BD98]/40">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      language === l.code
                        ? 'bg-[#34251F] text-[#F8F5F0] shadow-xs'
                        : 'text-[#48352D] hover:text-[#34251F]'
                    }`}
                    aria-label={`Changer de langue pour ${l.label}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Call Phone quick button (desktop) */}
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#70584F] hover:text-[#34251F] font-medium px-2 py-1 transition-colors"
                title="Appeler le salon"
              >
                <Phone className="w-3.5 h-3.5 text-[#B5966B]" />
                <span className="tabular-nums">{DISPLAY_PHONE}</span>
              </a>

              {/* Primary Action Button */}
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#34251F] text-[#F8F5F0] text-xs uppercase tracking-wider font-semibold hover:bg-[#48352D] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D8BD98]" />
                <span>{t.nav.bookNow}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#34251F] hover:bg-[#E9DED2]/60 transition-colors cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#34251F]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            className={`fixed top-0 bottom-0 ${
              isRtl ? 'left-0' : 'right-0'
            } w-4/5 max-w-sm bg-[#F8F5F0] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-${
              isRtl ? 'r' : 'l'
            } border-[#E9DED2]`}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E9DED2]">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#34251F]">
                    MAYA
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#70584F]">
                    Hair Atelier
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#34251F] hover:bg-[#E9DED2] rounded-full transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left rtl:text-right text-base font-medium text-[#34251F] hover:text-[#B5966B] py-2 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E9DED2] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#34251F] text-[#F8F5F0] text-sm font-semibold tracking-wide uppercase hover:bg-[#48352D] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#D8BD98]" />
                <span>{t.nav.bookNow}</span>
              </button>

              <div className="flex items-center justify-center gap-3 pt-2 text-xs text-[#70584F]">
                <span>Tél : {DISPLAY_PHONE}</span>
                <span>•</span>
                <span>Alger</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
