import React from 'react';
import { hotelData } from '../data/hotelData';
import { SEO } from '../components/common/SEO';
import { BookingInquiryForm } from '../components/booking/BookingInquiryForm';
import { Phone, MessageSquare, Check } from 'lucide-react';
import { generateWhatsAppInquiryUrl } from '../utils/whatsapp';

export const Booking: React.FC = () => {
  const whatsappUrl = generateWhatsAppInquiryUrl();

  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Reservation & Availability Request | Seven Sky Hotel"
        description="Request room reservation at Seven Sky Hotel Murree. Submit your travel dates directly to our front desk for seasonal rates and instant confirmation."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Direct Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Reserve Your Mountain Stay
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Plan your stay at Seven Sky Hotel Murree. Send your dates and room preferences directly to our front desk for current seasonal rates and personal assistance.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 sm:p-8 border border-stone-200 shadow-md">
            <h3 className="font-serif text-2xl text-forest-950 mb-4">
              Availability Inquiry Form
            </h3>
            <BookingInquiryForm />
          </div>

          {/* Booking Guarantees & Support (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h4 className="font-serif text-xl text-forest-950">Direct Booking Benefits</h4>
              
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Zero Upfront Deposit:</strong> No payment card needed to inquire. Pay upon arrival at check-in.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Guaranteed Heating & Hot Water:</strong> Central heating and 24/7 hot showers active throughout chilly months.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Underground Valet Parking:</strong> Reserved parking spot secured for your car in our garage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Elevator Access:</strong> Effortless baggage handling and room accessibility.</span>
                </li>
              </ul>
            </div>

            {/* Need Urgent Confirmation? */}
            <div className="bg-ivory-100 border border-stone-200 rounded-lg p-6 space-y-4">
              <h4 className="font-serif text-lg text-forest-950 font-medium">Need Immediate Confirmation?</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                If you are currently traveling on the highway or arriving today, call or message our 24h front desk directly for instant room assignment:
              </p>

              <div className="space-y-2">
                <a
                  href={`tel:${hotelData.contact.landline}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-forest-900 text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-forest-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Landline: {hotelData.contact.landlineFormatted}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-700 text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-emerald-600 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Line: {hotelData.contact.mobileFormatted}</span>
                </a>
              </div>
            </div>

            {/* Policies Summary */}
            <div className="p-4 bg-white rounded-lg border border-stone-200 text-xs text-stone-500 space-y-1">
              <div><strong>Check-In:</strong> {hotelData.policies.checkInTime}</div>
              <div><strong>Check-Out:</strong> {hotelData.policies.checkOutTime}</div>
              <div><strong>Location:</strong> Abid Majeed Road, near GPO Chowk, Murree</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
