import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryData } from '../data/galleryData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Info } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'balayage', label: t.gallery.filterBalayage },
    { id: 'coloration', label: t.gallery.filterColor },
    { id: 'bridal', label: t.gallery.filterBridal },
    { id: 'coiffures', label: t.gallery.filterStyling },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') isRtl ? showPrev() : showNext();
      if (e.key === 'ArrowLeft') isRtl ? showNext() : showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev, isRtl]);

  const currentItem: GalleryItem | undefined =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#70584F] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B5966B]" />
            <span>{t.gallery.badge}</span>
            <span className="w-6 h-[1px] bg-[#B5966B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34251F] tracking-tight mb-4">
            {t.gallery.title}
          </h2>

          <p className="text-sm sm:text-base text-[#70584F] font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#34251F] text-[#F8F5F0] shadow-sm'
                    : 'bg-white text-[#70584F] hover:text-[#34251F] border border-[#E9DED2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Asymmetric heights for an editorial fashion feel
            const isTall = index % 3 === 0;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl bg-[#F3ECE4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E9DED2] ${
                  isTall ? 'sm:aspect-[4/5]' : 'aspect-square sm:aspect-[4/4.5]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title[language]}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#34251F]/80 backdrop-blur-md text-[#F8F5F0] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-sm font-medium">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg font-medium tracking-wide">
                    {item.title[language]}
                  </h3>
                  <span className="text-[11px] text-[#D8BD98] tracking-wider uppercase font-semibold mt-1 inline-block">
                    {t.gallery.viewProject}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Disclaimer Notice */}
        <div className="mt-8 text-center flex items-center justify-center gap-1.5 text-xs text-[#70584F]">
          <Info className="w-3.5 h-3.5 text-[#B5966B] shrink-0" />
          <span>{t.gallery.notice}</span>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none p-4 sm:p-6 animate-fade-in">
          {/* Close button with large touch target */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fermer le plein écran"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              isRtl ? showNext() : showPrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right / Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              isRtl ? showPrev() : showNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title[language]}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white">
              <span className="text-[11px] text-[#D8BD98] uppercase tracking-widest font-semibold">
                {currentItem.tag}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-medium mt-1">
                {currentItem.title[language]}
              </h4>
              <p className="text-xs text-white/60 mt-1 tabular-nums">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
