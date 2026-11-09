import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import {
  DISPLAY_PHONE,
  WHATSAPP_NUMBER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  getWhatsAppLink,
} from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const generalWhatsAppUrl = getWhatsAppLink(
    'Bonjour Institut Maya, je souhaite me renseigner sur vos prestations capillaires.'
  );

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#70584F] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B5966B]" />
            <span>{t.contact.badge}</span>
            <span className="w-6 h-[1px] bg-[#B5966B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34251F] tracking-tight mb-4">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-[#70584F] font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-[#E9DED2] shadow-xs flex flex-col justify-between hover:border-[#D8BD98] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E9DED2]/60 flex items-center justify-center text-[#B5966B] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#34251F] mb-1">
                {t.contact.phoneTitle}
              </h3>
              <p className="text-xs text-[#70584F] mb-3">
                Appel direct au salon
              </p>
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="font-serif text-xl font-bold text-[#34251F] hover:text-[#B5966B] transition-colors tabular-nums block"
              >
                {DISPLAY_PHONE}
              </a>
            </div>
            <a
              href={`tel:${DISPLAY_PHONE}`}
              className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#F8F5F0] hover:bg-[#34251F] text-[#34251F] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-[#E9DED2]"
            >
              <span>{t.contact.callBtn}</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-[#E9DED2] shadow-xs flex flex-col justify-between hover:border-[#25D366] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#34251F] mb-1">
                {t.contact.whatsappTitle}
              </h3>
              <p className="text-xs text-[#70584F] mb-3">
                Réponse rapide pour RDV
              </p>
              <span className="font-serif text-xl font-bold text-[#34251F] tabular-nums block">
                +{WHATSAPP_NUMBER}
              </span>
            </div>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.contact.chatWhatsapp}</span>
            </a>
          </div>

          {/* Card 3: Instagram */}
          <div className="bg-white p-6 rounded-2xl border border-[#E9DED2] shadow-xs flex flex-col justify-between hover:border-[#C98C91] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#C98C91]/15 flex items-center justify-center text-[#C98C91] mb-4">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#34251F] mb-1">
                {t.contact.instagramTitle}
              </h3>
              <p className="text-xs text-[#70584F] mb-3">
                193K+ followers · Réalisations quotidiennes
              </p>
              <span className="text-sm font-semibold text-[#34251F] block break-all">
                @{INSTAGRAM_HANDLE}
              </span>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#F8F5F0] hover:bg-[#C98C91] text-[#34251F] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-[#E9DED2]"
            >
              <span>Ouvrir Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-6 rounded-2xl border border-[#E9DED2] shadow-xs flex flex-col justify-between hover:border-[#D8BD98] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E9DED2]/60 flex items-center justify-center text-[#B5966B] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#34251F] mb-1">
                {t.contact.hoursTitle}
              </h3>
              <p className="text-xs text-[#34251F] font-medium mt-2 leading-relaxed">
                {t.contact.hoursDetails}
              </p>
              <p className="text-xs text-[#C98C91] font-semibold mt-1">
                {t.contact.hoursClosed}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F3ECE4] text-[10px] text-[#70584F] flex items-start gap-1.5 leading-tight">
              <AlertCircle className="w-3.5 h-3.5 text-[#B5966B] shrink-0 mt-0.5" />
              <span>{t.contact.hoursNotice}</span>
            </div>
          </div>
        </div>

        {/* Location & Google Maps Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#E9DED2] overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Location Details Left */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B5966B] font-semibold mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{t.contact.locationTitle}</span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#34251F] mb-3">
                  Institut de beauté Maya
                </h3>

                <p className="text-xs sm:text-sm text-[#70584F] leading-relaxed mb-6 font-light">
                  Retrouvez-nous facilement grâce à l'itinéraire Google Maps vérifié. Notre atelier vous accueille dans un cadre intime et dédié à votre confort.
                </p>

                <div className="space-y-3 text-xs text-[#48352D] bg-[#F8F5F0] p-4 rounded-xl border border-[#E9DED2]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#34251F]">Repère :</span>
                    <span>Institut de beauté Maya • Algérie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#34251F]">Google Maps :</span>
                    <span className="text-[#B5966B] truncate">maps.app.goo.gl/WHUtedivJXctDuGg9</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#34251F] hover:bg-[#48352D] text-[#F8F5F0] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#D8BD98]" />
                  <span>{t.contact.mapsBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8BD98]" />
                </a>
              </div>
            </div>

            {/* Google Maps Visual Interactive Backdrop Right */}
            <div className="lg:col-span-7 bg-[#E9DED2] relative min-h-[280px] lg:min-h-full overflow-hidden flex items-center justify-center">
              <img
                src="/src/assets/images/salon_interior_atelier_1794245770309.jpg"
                alt="Institut Maya localisation"
                className="absolute inset-0 w-full h-full object-cover filter brightness-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#34251F]/40 backdrop-blur-[2px]" />

              {/* Pin Callout Marker */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-white/60 text-center max-w-xs animate-bounce-subtle">
                <div className="w-12 h-12 rounded-full bg-[#34251F] text-[#D8BD98] mx-auto flex items-center justify-center mb-2 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#34251F]">
                  Institut de beauté Maya
                </h4>
                <p className="text-xs text-[#70584F] mt-0.5">
                  Cliquez pour ouvrir votre itinéraire GPS direct
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#B5966B] hover:text-[#34251F] transition-colors"
                >
                  <span>Voir sur Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
