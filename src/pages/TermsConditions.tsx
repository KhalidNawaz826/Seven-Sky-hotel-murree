import React from 'react';
import { SEO } from '../components/common/SEO';
import { hotelData } from '../data/hotelData';

export const TermsConditions: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Terms & Conditions | Seven Sky Hotel Murree"
        description="Terms and conditions for room reservations and stays at Seven Sky Hotel Murree."
      />

      <div className="bg-forest-950 text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal">Terms & Conditions</h1>
        <p className="text-xs sm:text-sm text-ivory-200/80 mt-2 font-light">
          Last Updated: September 2026 • Seven Sky Hotel Murree
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-white rounded-lg p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 text-sm text-stone-700 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">1. Reservations & Inquiries</h2>
          <p>
            Submission of an availability request or booking inquiry through this website represents an inquiry for accommodation, not an instantaneous automated charge. Reservations are confirmed once acknowledged by the Seven Sky Hotel front desk via phone, WhatsApp, or email.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">2. Check-In & Check-Out Times</h2>
          <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
            <li><strong>Standard Check-In:</strong> From 2:00 PM (14:00) onwards.</li>
            <li><strong>Standard Check-Out:</strong> By 12:00 PM (noon).</li>
            <li>Early check-in or late check-out is subject to room availability and prior front desk arrangement.</li>
            <li>All primary adult guests must present a valid Government-issued original Computerized National Identity Card (CNIC) or international passport upon physical check-in as per Pakistani legal mandates.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">3. Seasonal Rates & Payment</h2>
          <p>
            Due to the mountainous nature of Murree, room tariffs vary according to summer vacation periods, winter snowfall seasons, and off-peak times. Agreed seasonal rates are honored upon room confirmation. Payment is accepted in PKR cash or designated bank transfer at check-in unless other arrangements have been agreed in writing.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">4. Parking & Property Guidelines</h2>
          <p>
            On-site underground valet parking is provided complimentary to registered hotel guests during their stay. While our security personnel monitor the premises, the hotel assumes no liability for valuables left unattended inside vehicles.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">5. Winter Weather & Natural Conditions</h2>
          <p>
            Murree is subject to hill climate events including sudden snowstorms, fog, and road closures by traffic police. Seven Sky Hotel operates heavy-duty auxiliary power generators and central heating radiators to ensure indoor comfort; however, travelers are advised to monitor official highway advisories and ensure winter tires or snow chains when ascending the hills.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">6. Contact Information</h2>
          <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs text-stone-700 space-y-1">
            <div><strong>Seven Sky Hotel Front Desk</strong></div>
            <div>Abid Majeed Road, near GPO Chowk, Murree, 47150, Pakistan</div>
            <div>Phone: {hotelData.contact.landlineFormatted}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
