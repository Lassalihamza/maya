export type Language = 'fr' | 'ar' | 'en';

export interface ServiceItem {
  id: string;
  name: {
    fr: string;
    ar: string;
    en: string;
  };
  category: 'color' | 'bridal' | 'care' | 'styling';
  demoPrice: string;
  duration: string;
  description: {
    fr: string;
    ar: string;
    en: string;
  };
  highlights: {
    fr: string[];
    ar: string[];
    en: string[];
  };
  image: string;
}

export interface GalleryItem {
  id: string;
  title: {
    fr: string;
    ar: string;
    en: string;
  };
  category: 'balayage' | 'coloration' | 'bridal' | 'coiffures';
  image: string;
  tag: string;
}

export interface BookingFormData {
  serviceId: string;
  clientName: string;
  phone: string;
  date: string;
  timeSlot: string;
  notes: string;
}
