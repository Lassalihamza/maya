import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Calendar, Phone } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppLink } from '../utils/whatsapp';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const directWhatsApp = getWhatsAppLink('Bonjour l’Institut Maya, je souhaite prendre rendez-vous.');

  return (
    <aside
      aria-label="Actions rapides mobiles"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#34251F]/95 backdrop-blur-md border-t border-[#48352D] px-4 py-2.5 sm:hidden shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${DISPLAY_PHONE}`}
          className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-2 rounded-xl text-[#F8F5F0] hover:text-[#D8BD98] transition-colors"
          aria-label="Appeler l'Institut Maya"
        >
          <Phone className="w-5 h-5 text-[#D8BD98]" />
          <span className="text-[10px] mt-0.5 font-medium">Appel</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={directWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold tracking-wide shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-xl bg-[#D8BD98] text-[#34251F] text-xs font-bold tracking-wide shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#34251F]" />
          <span>{t.nav.bookNow}</span>
        </button>
      </div>
    </aside>
  );
};
