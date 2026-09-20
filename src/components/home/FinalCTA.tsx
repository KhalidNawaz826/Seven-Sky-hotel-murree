import React from 'react';
import { CalendarCheck, Phone, MessageSquare, MapPin } from 'lucide-react';
import { hotelData } from '../../data/hotelData';
import { Button } from '../common/Button';
import { generateWhatsAppInquiryUrl } from '../../utils/whatsapp';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = generateWhatsAppInquiryUrl();

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-forest-950 text-white overflow-hidden">
      {/* Background Image with Dark Atmospheric Wash */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
          alt="Murree Snowy Mountains and Pine Valley"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/90 to-forest-950/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
          Seven Sky Hotel • Murree
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
          Your Murree Stay Starts Here
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory-200/90 leading-relaxed font-light">
          Experience warm rooms, central heating, secure underground parking, and panoramic mountain views near GPO Chowk. Reserve your stay or contact our front desk directly.
        </p>

        {/* Contact Snippet */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 py-2 text-xs text-ivory-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Abid Majeed Road, near GPO Chowk</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Landline: {hotelData.contact.landlineFormatted}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="gold"
            size="lg"
            onClick={onOpenBooking}
            icon={<CalendarCheck className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-xl"
          >
            Request Availability
          </Button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-sm uppercase tracking-wider font-semibold transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${hotelData.contact.mobile}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded text-sm uppercase tracking-wider font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call: {hotelData.contact.mobileFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
