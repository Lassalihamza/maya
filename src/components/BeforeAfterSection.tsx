import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Info } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activePreset, setActivePreset] = useState<'balayage' | 'gloss'>('balayage');
  const containerRef = useRef<HTMLDivElement>(null);

  const presets = {
    balayage: {
      before: '/src/assets/images/hair_balayage_before_1794245770662.jpg',
      after: '/src/assets/images/hair_balayage_blonde_1794245748263.jpg',
      title: t.beforeAfter.presetBalayage,
      details: 'Transition d’un brun terne vers un balayage miel & vanille lumineux avec reflets fondus.',
    },
    gloss: {
      before: '/src/assets/images/hair_balayage_before_1794245770662.jpg',
      after: '/src/assets/images/hair_gloss_treatment_1794245749409.jpg',
      title: t.beforeAfter.presetGloss,
      details: 'Traitement de reconstruction botox miroir éliminant les frisottis et scellant les pointes.',
    },
  };

  const currentPreset = presets[activePreset];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="avant-apres" className="py-20 lg:py-28 bg-[#F3ECE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#70584F] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B5966B]" />
            <span>{t.beforeAfter.badge}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#B5966B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34251F] tracking-tight mb-4">
            {t.beforeAfter.title}
          </h2>

          <p className="text-sm sm:text-base text-[#70584F] font-light leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>

          {/* Interactive Preset Buttons */}
          <div className="mt-8 inline-flex items-center gap-2 p-1 bg-white rounded-full border border-[#D8BD98]/40 shadow-xs">
            <button
              onClick={() => {
                setActivePreset('balayage');
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activePreset === 'balayage'
                  ? 'bg-[#34251F] text-[#F8F5F0] shadow-sm'
                  : 'text-[#48352D] hover:text-[#34251F]'
              }`}
            >
              {t.beforeAfter.presetBalayage}
            </button>
            <button
              onClick={() => {
                setActivePreset('gloss');
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activePreset === 'gloss'
                  ? 'bg-[#34251F] text-[#F8F5F0] shadow-sm'
                  : 'text-[#48352D] hover:text-[#34251F]'
              }`}
            >
              {t.beforeAfter.presetGloss}
            </button>
          </div>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-white select-none cursor-ew-resize touch-none bg-black"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Full background) */}
            <img
              src={currentPreset.after}
              alt="Résultat après transformation capillaire à l'Institut Maya"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentPreset.before}
                alt="État des cheveux avant transformation"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Badges Over Image */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="bg-[#34251F]/80 backdrop-blur-md text-[#F8F5F0] text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                {t.beforeAfter.before}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="bg-[#D8BD98]/90 backdrop-blur-md text-[#34251F] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/40 shadow-md">
                {t.beforeAfter.after}
              </span>
            </div>

            {/* Slider Divider Line & Thumb */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="absolute inset-y-0 -left-px w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

              {/* Center Draggable Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#34251F] shadow-xl border-2 border-[#D8BD98] flex items-center justify-center pointer-events-auto cursor-ew-resize active:scale-95 transition-transform">
                <div className="flex items-center gap-1 text-[#34251F] text-xs font-bold">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption & Notice */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#70584F] px-2">
            <div className="flex items-center gap-1.5 font-medium text-[#34251F]">
              <Sparkles className="w-3.5 h-3.5 text-[#B5966B]" />
              <span>{currentPreset.title}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#70584F]/80">
              <Info className="w-3.5 h-3.5 text-[#B5966B] shrink-0" />
              <span>{t.beforeAfter.notice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
