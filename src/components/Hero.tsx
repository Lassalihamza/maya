import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t, isRtl } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="accueil"
      className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F5F0] via-[#F8F5F0] to-[#F3ECE4]"
    >
      {/* Subtle luxury ambient lighting aura */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-[#D8BD98]/20 via-[#C98C91]/10 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#70584F] font-semibold mb-4">
              <span className="w-6 h-[1px] bg-[#B5966B]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#34251F] leading-[1.12] mb-6 text-balance">
              {t.hero.titleStart}
              <span className="italic font-normal text-[#C98C91] underline decoration-[#D8BD98]/40 underline-offset-4 decoration-2">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#70584F] leading-relaxed max-w-xl mb-8 font-light">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#34251F] text-[#F8F5F0] text-sm font-semibold tracking-wider uppercase hover:bg-[#48352D] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#D8BD98]" />
                <span>{t.hero.primaryCta}</span>
                <ArrowIcon className="w-4 h-4 text-[#D8BD98] transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo('#galerie')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D8BD98] text-[#34251F] text-sm font-semibold tracking-wide hover:bg-[#E9DED2]/50 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Proof Pillars (Quiet unboxed inline list) */}
            <div className="pt-6 border-t border-[#E9DED2] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#70584F]">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#34251F] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C98C91]" />
                <span className="font-semibold text-[#34251F]">{t.hero.proofFollowers}</span>
              </a>
              <span className="hidden sm:inline text-[#D8BD98]" aria-hidden="true">·</span>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B5966B]" />
                <span>{t.hero.proofSpeciality}</span>
              </div>
              <span className="hidden sm:inline text-[#D8BD98]" aria-hidden="true">·</span>
              <div className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B5966B]" />
                <span>{t.hero.proofBridal}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait with Asymmetric Composition (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            {/* Decorative background framing */}
            <div
              className={`absolute -inset-4 bg-gradient-to-tr from-[#D8BD98]/20 via-[#E9DED2]/40 to-transparent rounded-3xl -rotate-1 ${
                isRtl ? 'rotate-1' : '-rotate-1'
              } pointer-events-none`}
            />

            {/* Main Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E9DED2] bg-white group">
              <div className="aspect-[3/4] overflow-hidden bg-[#F3ECE4]">
                <img
                  src="/src/assets/images/hero_hair_editorial_1794245747374.jpg"
                  alt="Coiffure élégante et balayage haut de gamme à l'Institut Maya"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#34251F]/70 via-transparent to-black/10 pointer-events-none" />

              {/* Floating Header Tag on image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="bg-[#34251F]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 font-medium tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D8BD98]" />
                  <span>Maya Atelier • Alger</span>
                </div>
                <div className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-[#F8F5F0]/90">
                  Haute Coiffure
                </div>
              </div>

              {/* Bottom Card text over image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                  Balayage & Créations Mariées
                </p>
                <p className="text-xs text-white/80 font-light mt-0.5">
                  Élégance sur-mesure & Respect absolu du cheveu
                </p>
              </div>
            </div>

            {/* Floating Trust Card 1 (Bottom Asymmetric) */}
            <div
              className={`absolute -bottom-6 ${
                isRtl ? '-left-4 sm:-left-6' : '-right-4 sm:-right-6'
              } bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-xl border border-[#E9DED2] max-w-[210px] hidden sm:block animate-fade-in`}
            >
              <div className="flex items-center gap-1 text-[#B5966B] text-xs font-semibold mb-1">
                {'★★★★★'}
                <span className="text-[#34251F] text-xs font-bold ml-1 tabular-nums">4.9/5</span>
              </div>
              <p className="text-xs font-medium text-[#34251F] leading-snug">
                {t.hero.cardRating}
              </p>
              <p className="text-[10px] text-[#70584F] mt-1">
                Institut de beauté Maya
              </p>
            </div>

            {/* Floating Tag Card 2 (Top Left/Right) */}
            <div
              className={`absolute -top-3 ${
                isRtl ? '-right-4' : '-left-4'
              } bg-[#34251F] text-[#F8F5F0] px-3.5 py-2 rounded-lg shadow-lg text-xs font-semibold tracking-wide border border-[#D8BD98]/30 hidden sm:flex items-center gap-2`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D8BD98]" />
              <span>{t.hero.cardBalayage}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
