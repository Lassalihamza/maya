import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Instagram, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
import {
  DISPLAY_PHONE,
  WHATSAPP_NUMBER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  getWhatsAppLink,
} from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#34251F] text-[#F8F5F0] pt-16 pb-24 md:pb-16 border-t border-[#48352D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#48352D]">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5">
            <span className="font-serif text-3xl tracking-[0.25em] text-[#F8F5F0] font-semibold block mb-1">
              MAYA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8BD98] font-medium block mb-4">
              Institut de beauté • Hair Atelier
            </span>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed mb-6 font-light">
              {t.footer.desc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#48352D] hover:bg-[#C98C91] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Maya"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink('Bonjour l’Institut Maya !')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#48352D] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Maya"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="w-9 h-9 rounded-full bg-[#48352D] hover:bg-[#B5966B] text-white flex items-center justify-center transition-colors"
                aria-label="Téléphone Maya"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#48352D] hover:bg-[#D8BD98] hover:text-[#34251F] text-white flex items-center justify-center transition-colors"
                aria-label="Google Maps Maya"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D8BD98] font-semibold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <button
                  onClick={() => handleNavClick('#accueil')}
                  className="hover:text-[#D8BD98] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#services')}
                  className="hover:text-[#D8BD98] transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#avant-apres')}
                  className="hover:text-[#D8BD98] transition-colors cursor-pointer"
                >
                  {t.nav.beforeAfter}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#galerie')}
                  className="hover:text-[#D8BD98] transition-colors cursor-pointer"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#a-propos')}
                  className="hover:text-[#D8BD98] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="hover:text-[#D8BD98] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Language & Coordinates (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D8BD98] font-semibold mb-4">
              Langue / اللغة
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    language === l.code
                      ? 'bg-[#D8BD98] text-[#34251F]'
                      : 'bg-[#48352D] text-white/80 hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="space-y-1 text-xs text-white/70">
              <p>Tél : <span className="text-[#D8BD98] tabular-nums font-semibold">{DISPLAY_PHONE}</span></p>
              <p>WhatsApp : <span className="tabular-nums">+{WHATSAPP_NUMBER}</span></p>
              <p>Instagram : <span className="text-[#C98C91]">@{INSTAGRAM_HANDLE}</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Provisional Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p className="text-center md:text-left rtl:md:text-right">
            {t.footer.rights}
          </p>

          <p className="text-center text-[10px] text-[#D8BD98]/80 max-w-md">
            {t.footer.provisionalNote}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#D8BD98] transition-colors cursor-pointer p-2"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
