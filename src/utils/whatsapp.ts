import { BookingFormData, Language } from '../types';
import { servicesData } from '../data/servicesData';

export const WHATSAPP_NUMBER = '213542209799';
export const DISPLAY_PHONE = '0542209799';
export const INSTAGRAM_HANDLE = 'institut_de_beaute_maya';
export const INSTAGRAM_URL = 'https://www.instagram.com/institut_de_beaute_maya';
export const MAPS_URL = 'https://maps.app.goo.gl/WHUtedivJXctDuGg9';

export const generateWhatsAppMessage = (
  data: BookingFormData,
  language: Language
): string => {
  const service = servicesData.find((s) => s.id === data.serviceId);
  const serviceName = service ? service.name[language] : data.serviceId;

  if (language === 'ar') {
    let msg = `مرحباً معهد التجميل والشعر مايا (Institut de beauté Maya) ✨\n\n`;
    msg += `أود تقديم طلب موعد :\n`;
    msg += `• الخدمة المطلوبة : ${serviceName}\n`;
    if (data.clientName.trim()) {
      msg += `• الاسم : ${data.clientName.trim()}\n`;
    }
    if (data.date) {
      msg += `• التاريخ المفضل : ${data.date}\n`;
    }
    if (data.timeSlot) {
      msg += `• الفترة المفضلة : ${data.timeSlot}\n`;
    }
    if (data.notes.trim()) {
      msg += `• ملاحظات أو تفاصيل : ${data.notes.trim()}\n`;
    }
    msg += `\nأرجو إفادتي بتأكيد الإتاحة والتفاصيل. شكراً لكم!`;
    return msg;
  }

  if (language === 'en') {
    let msg = `Hello Institut de beauté Maya ✨\n\n`;
    msg += `I would like to request an appointment:\n`;
    msg += `• Service: ${serviceName}\n`;
    if (data.clientName.trim()) {
      msg += `• Name: ${data.clientName.trim()}\n`;
    }
    if (data.date) {
      msg += `• Preferred date: ${data.date}\n`;
    }
    if (data.timeSlot) {
      msg += `• Preferred time slot: ${data.timeSlot}\n`;
    }
    if (data.notes.trim()) {
      msg += `• Notes / Details: ${data.notes.trim()}\n`;
    }
    msg += `\nPlease let me know if this slot is available. Thank you!`;
    return msg;
  }

  // Default: French
  let msg = `Bonjour l'Institut de beauté Maya ✨\n\n`;
  msg += `Je souhaite faire une demande de rendez-vous :\n`;
  msg += `• Prestation : ${serviceName}\n`;
  if (data.clientName.trim()) {
    msg += `• Nom : ${data.clientName.trim()}\n`;
  }
  if (data.date) {
    msg += `• Date souhaitée : ${data.date}\n`;
  }
  if (data.timeSlot) {
    msg += `• Créneau préféré : ${data.timeSlot}\n`;
  }
  if (data.notes.trim()) {
    msg += `• Précisions / Notes : ${data.notes.trim()}\n`;
  }
  msg += `\nMerci de bien vouloir me confirmer la disponibilité. Belle journée !`;
  return msg;
};

export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
