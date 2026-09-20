import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { hotelData } from '../../data/hotelData';
import { generateWhatsAppInquiryUrl } from '../../utils/whatsapp';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = generateWhatsAppInquiryUrl();
  const directCallUrl = `tel:${hotelData.contact.mobile.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-950/95 backdrop-blur-md border-t border-forest-800 py-2.5 px-3 md:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={directCallUrl}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-forest-900 text-white hover:bg-forest-800 transition-colors border border-forest-700/60"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-emerald-700 text-white hover:bg-emerald-600 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-200 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-medium">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-sm font-semibold"
        >
          <CalendarCheck className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider">Book Stay</span>
        </button>
      </div>
    </div>
  );
};
