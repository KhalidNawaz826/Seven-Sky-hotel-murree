import React from 'react';
import { SEO } from '../components/common/SEO';
import { hotelData } from '../data/hotelData';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Privacy Policy | Seven Sky Hotel Murree"
        description="Privacy policy and data handling practices of Seven Sky Hotel, Murree, Pakistan."
      />

      <div className="bg-forest-950 text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal">Privacy Policy</h1>
        <p className="text-xs sm:text-sm text-ivory-200/80 mt-2 font-light">
          Last Updated: September 2026 • Seven Sky Hotel Murree
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-white rounded-lg p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 text-sm text-stone-700 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">1. Introduction</h2>
          <p>
            Seven Sky Hotel (“we”, “our”, or “the hotel”), situated on Abid Majeed Road, near GPO Chowk, Murree, Pakistan, respects your privacy and is dedicated to protecting personal information collected through this website and during guest stays.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">2. Information We Collect</h2>
          <p>
            When you submit an availability request, booking inquiry, or general question through our website, we may collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
            <li>Your full name</li>
            <li>Contact details (mobile phone number, WhatsApp number, email address)</li>
            <li>Requested dates of arrival and departure</li>
            <li>Number of guests (adults, children) and room preferences</li>
            <li>Special preferences or dietary requests submitted voluntarily</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">3. Purpose of Processing</h2>
          <p>
            We process your information exclusively to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
            <li>Process and confirm your hotel room availability and rates</li>
            <li>Communicate with you regarding your stay and travel directions</li>
            <li>Provide customer support during your arrival and stay in Murree</li>
            <li>Comply with municipal and local law-enforcement guest registration requirements in Pakistan</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">4. Data Sharing & Security</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties or advertising brokers. Your information is accessed only by authorized hotel reception and management personnel. In accordance with government regulations in Pakistan, guest identification details may be presented to local law enforcement upon physical check-in as mandated for all hospitality establishments.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-forest-950 font-medium">5. Contact Regarding Privacy</h2>
          <p>
            If you have questions about our privacy practices, you may reach our management at:
          </p>
          <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs text-stone-700 space-y-1">
            <div><strong>Seven Sky Hotel</strong></div>
            <div>Abid Majeed Road, near GPO Chowk, Murree, 47150, Pakistan</div>
            <div>Phone: {hotelData.contact.landlineFormatted} / {hotelData.contact.mobileFormatted}</div>
            <div>Email: {hotelData.contact.email}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
