import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { BookingFormData } from '../types';
import { generateWhatsAppMessage, getWhatsAppLink, WHATSAPP_NUMBER } from '../utils/whatsapp';
import { X, Calendar as CalendarIcon, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || servicesData[0].id,
    clientName: '',
    phone: '',
    date: '',
    timeSlot: t.booking.timeMorning,
    notes: '',
  });

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  // Update default timeSlot on language change
  useEffect(() => {
    setFormData((prev) => ({ ...prev, timeSlot: t.booking.timeMorning }));
  }, [t.booking.timeMorning]);

  if (!isOpen) return null;

  const generatedMessage = generateWhatsAppMessage(formData, language);
  const whatsappUrl = getWhatsAppLink(generatedMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E9DED2] overflow-hidden z-10 my-8">
        {/* Modal Header */}
        <div className="bg-[#34251F] text-[#F8F5F0] p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8BD98] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.booking.badge}</span>
            </div>
            <h3 className="font-serif text-2xl font-normal tracking-tight">
              {t.booking.title}
            </h3>
            <p className="text-xs text-white/75 mt-1 font-light">
              {t.booking.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 -mr-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={t.booking.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Service Picker */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34251F] mb-1.5">
              {t.booking.serviceLabel} *
            </label>
            <select
              value={formData.serviceId}
              onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED2] bg-[#F8F5F0] text-sm text-[#34251F] focus:outline-hidden focus:border-[#B5966B] focus:ring-1 focus:ring-[#B5966B] transition-colors"
              required
            >
              {servicesData.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name[language]} ({service.demoPrice})
                </option>
              ))}
            </select>
          </div>

          {/* Name input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34251F] mb-1.5">
              {t.booking.nameLabel}
            </label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder={t.booking.namePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED2] bg-[#F8F5F0] text-sm text-[#34251F] placeholder-[#70584F]/50 focus:outline-hidden focus:border-[#B5966B] focus:ring-1 focus:ring-[#B5966B] transition-colors"
            />
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#34251F] mb-1.5">
                {t.booking.dateLabel}
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED2] bg-[#F8F5F0] text-sm text-[#34251F] focus:outline-hidden focus:border-[#B5966B] focus:ring-1 focus:ring-[#B5966B] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#34251F] mb-1.5">
                {t.booking.timeLabel}
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED2] bg-[#F8F5F0] text-sm text-[#34251F] focus:outline-hidden focus:border-[#B5966B] focus:ring-1 focus:ring-[#B5966B] transition-colors"
              >
                <option value={t.booking.timeMorning}>{t.booking.timeMorning}</option>
                <option value={t.booking.timeAfternoon}>{t.booking.timeAfternoon}</option>
                <option value={t.booking.timeEvening}>{t.booking.timeEvening}</option>
              </select>
            </div>
          </div>

          {/* Notes Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#34251F] mb-1.5">
              {t.booking.notesLabel}
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={t.booking.notesPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED2] bg-[#F8F5F0] text-sm text-[#34251F] placeholder-[#70584F]/50 focus:outline-hidden focus:border-[#B5966B] focus:ring-1 focus:ring-[#B5966B] transition-colors resize-none"
            />
          </div>

          {/* Live Preview Box */}
          <div className="p-3.5 bg-[#F8F5F0] rounded-xl border border-[#E9DED2] text-xs text-[#48352D]">
            <span className="font-semibold text-[#34251F] block mb-1">
              {t.booking.previewLabel}
            </span>
            <div className="whitespace-pre-wrap font-sans text-[11px] leading-relaxed text-[#70584F] bg-white p-2.5 rounded-lg border border-[#E9DED2]">
              {generatedMessage}
            </div>
          </div>

          {/* Direct WhatsApp CTA Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.booking.sendWhatsapp}</span>
          </button>

          {/* Booking Disclaimer */}
          <div className="flex items-start gap-2 text-[11px] text-[#70584F] leading-relaxed pt-1">
            <AlertCircle className="w-4 h-4 text-[#B5966B] shrink-0 mt-0.5" />
            <span>{t.booking.disclaimer}</span>
          </div>
        </form>
      </div>
    </div>
  );
};
