import { hotelData } from '../data/hotelData';

export interface WhatsAppInquiryParams {
  checkIn?: string;
  checkOut?: string;
  roomType?: string;
  guests?: number;
  rooms?: number;
  guestName?: string;
  notes?: string;
}

export const generateWhatsAppInquiryUrl = (params: WhatsAppInquiryParams = {}): string => {
  const number = hotelData.contact.whatsapp.replace(/[^0-9]/g, '');

  const lines = [
    `*Booking Inquiry — Seven Sky Hotel Murree*`,
    `Hello Seven Sky Hotel, I would like to inquire about room availability and rates:`
  ];

  if (params.roomType) {
    lines.push(`• *Room Type:* ${params.roomType}`);
  }
  if (params.checkIn) {
    lines.push(`• *Check-in Date:* ${params.checkIn}`);
  }
  if (params.checkOut) {
    lines.push(`• *Check-out Date:* ${params.checkOut}`);
  }
  if (params.guests) {
    lines.push(`• *Guests:* ${params.guests}`);
  }
  if (params.rooms) {
    lines.push(`• *Rooms Needed:* ${params.rooms}`);
  }
  if (params.guestName) {
    lines.push(`• *Guest Name:* ${params.guestName}`);
  }
  if (params.notes) {
    lines.push(`• *Special Notes:* ${params.notes}`);
  }

  lines.push(`\nPlease let me know your current seasonal availability and rates. Thank you!`);

  const message = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${number}?text=${message}`;
};

export const getDirectCallUrl = (): string => {
  return `tel:${hotelData.contact.mobile.replace(/\s+/g, '')}`;
};

export const getLandlineCallUrl = (): string => {
  return `tel:${hotelData.contact.landline.replace(/\s+/g, '')}`;
};
