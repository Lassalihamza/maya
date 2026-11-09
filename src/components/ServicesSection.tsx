import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { Clock, Check, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#70584F] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B5966B]" />
            <span>{t.services.badge}</span>
            <span className="w-6 h-[1px] bg-[#B5966B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34251F] tracking-tight mb-4">
            {t.services.title}
          </h2>

          <p className="text-sm sm:text-base text-[#70584F] font-light leading-relaxed">
            {t.services.subtitle}
          </p>

          {/* Visible Demo Price Disclaimer Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#E9DED2]/50 border border-[#D8BD98]/40 rounded-lg text-xs text-[#70584F] text-left rtl:text-right">
            <AlertCircle className="w-4 h-4 text-[#B5966B] shrink-0" />
            <span>{t.services.demoNotice}</span>
          </div>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0 || index === 2; // Balayage & Bridal get prominent styling
            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#E9DED2] transition-all duration-300 hover:shadow-xl hover:border-[#D8BD98] ${
                  isFeatured ? 'md:row-span-1 shadow-sm' : ''
                }`}
              >
                <div>
                  {/* Service Image with Scrim */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F3ECE4]">
                    <img
                      src={service.image}
                      alt={service.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#34251F]/80 backdrop-blur-xs text-[#F8F5F0] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-sm font-medium">
                      {service.category === 'bridal'
                        ? 'Couture'
                        : service.category === 'color'
                        ? 'Balayage & Nuance'
                        : service.category === 'care'
                        ? 'Spa & Thérapie'
                        : 'Styling'}
                    </div>

                    {/* Price Tag over image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-white/80 font-light">
                          {t.services.from}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#D8BD98] tabular-nums">
                          {service.demoPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-[#D8BD98]" />
                        <span className="tabular-nums text-[11px]">{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#34251F] mb-2 group-hover:text-[#B5966B] transition-colors">
                      {service.name[language]}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#70584F] leading-relaxed mb-6 font-light">
                      {service.description[language]}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-[#F3ECE4]">
                      {service.highlights[language].map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-[#48352D]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#B5966B] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-3 px-4 rounded-xl bg-[#F8F5F0] hover:bg-[#34251F] text-[#34251F] hover:text-[#F8F5F0] border border-[#E9DED2] hover:border-[#34251F] text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>{t.services.bookThis}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-[#B5966B] group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
