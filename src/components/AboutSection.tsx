import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const pillars = [
    {
      icon: Sparkles,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc,
    },
    {
      icon: Heart,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc,
    },
  ];

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-[#F3ECE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Salon Interior Showcase (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="/src/assets/images/salon_interior_atelier_1794245770309.jpg"
                  alt="Intérieur raffiné de l'Institut de beauté Maya"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay & Tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#34251F]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#D8BD98] font-semibold">
                  Atelier Privilégié
                </span>
                <p className="font-serif text-lg sm:text-xl font-medium mt-0.5">
                  Un écrin dédié à la sérénité et au soin
                </p>
              </div>
            </div>

            {/* Asymmetrical Floating Quote */}
            <div
              className={`absolute -bottom-6 ${
                isRtl ? '-left-2 sm:-left-4' : '-right-2 sm:-right-4'
              } bg-[#34251F] text-[#F8F5F0] p-4 rounded-xl shadow-xl max-w-[240px] border border-[#D8BD98]/30 hidden sm:block`}
            >
              <p className="font-serif italic text-xs sm:text-sm text-[#D8BD98] leading-snug">
                « Sublimer vos cheveux tout en préservant leur matière. »
              </p>
              <p className="text-[10px] text-white/70 mt-1 uppercase tracking-wider">
                Institut Maya
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#70584F] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#B5966B]" />
              <span>{t.about.badge}</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34251F] tracking-tight mb-6">
              {t.about.title}
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-[#34251F] leading-relaxed mb-4 font-light">
              {t.about.p1}
            </p>

            <p className="text-sm sm:text-base text-[#70584F] leading-relaxed mb-8 font-light">
              {t.about.p2}
            </p>

            {/* Core Values Pillars */}
            <div className="space-y-4 pt-6 border-t border-[#E9DED2]">
              {pillars.map((pillar, pIdx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pIdx} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#E9DED2] text-[#34251F] flex items-center justify-center shrink-0 mt-0.5 border border-[#D8BD98]/40">
                      <IconComponent className="w-4 h-4 text-[#B5966B]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#34251F] tracking-wide">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#70584F] mt-0.5 font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
