import React from 'react';
import { hotelData } from '../data/hotelData';
import { SEO } from '../components/common/SEO';
import { ShieldCheck, HeartHandshake, Flame } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="About Seven Sky Hotel | Mountain Hospitality in Murree"
        description="Learn about Seven Sky Hotel Murree on Abid Majeed Road. Our mission to deliver warm mountain comfort with central heating, elevator, and underground parking."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Our Hospitality
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            About Seven Sky Hotel
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Warm mountain comfort nestled above the clouds. We are dedicated to providing couples, families, and travelers with a tranquil sanctuary in the heart of Murree.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              The Seven Sky Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 leading-tight">
              A Comfortable Sanctuary for Every Mountain Journey
            </h2>
            <div className="w-16 h-0.5 bg-gold-500" />
            
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Murree has long captivated visitors with its refreshing pine aromas, misty mountain mornings, and winter snowfalls. Yet, travel in the hills frequently comes with challenges—from freezing night temperatures to parking congestion and steep climbs.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Seven Sky Hotel was established to eliminate these concerns. Located on Abid Majeed Road near GPO Chowk, our property unites modern building conveniences with the heart-felt warmth of Pakistani hospitality. We provide our guests with central heating during the coldest months, continuous hot water, round-the-clock power backup, passenger elevator access, and on-site underground valet parking.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Murree pine covered mountain hills and blue sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-serif text-xl font-medium block">Seven Sky Hotel Murree</span>
                <span className="text-xs text-gold-300">Where hospitality feels like home</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Hospitality Commitments */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">Our Principles</span>
            <h3 className="font-serif text-3xl text-forest-950 mt-1">Our Hospitality Standards</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-forest-950 font-medium">Family-Centric Care</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                We understand the needs of families traveling with children and senior citizens. Our rooms, elevators, and attentive staff are tuned to make family trips seamless and memorable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-forest-950 font-medium">Winter Readiness</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                When snow falls over Murree, we keep the chill outside. With commercial central heating radiators and continuous hot water boilers, our rooms remain pleasantly warm around the clock.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-forest-950 font-medium">Peace of Mind</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                With 24-hour front desk security, secure underground valet parking, and continuous generator power, guests can relax knowing they are in safe hands.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Policies */}
        <div className="bg-ivory-100 border border-stone-200 rounded-lg p-8 sm:p-10 space-y-6">
          <h3 className="font-serif text-2xl text-forest-950 border-b border-stone-200 pb-3">
            Hotel Policies & Guest Guidelines
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-stone-700">
            <div>
              <strong className="text-forest-950 block mb-1 font-semibold">Check-In & Check-Out</strong>
              Check-in from {hotelData.policies.checkInTime} | Check-out by {hotelData.policies.checkOutTime}. Early check-in subject to room availability.
            </div>
            <div>
              <strong className="text-forest-950 block mb-1 font-semibold">Front Desk Hours</strong>
              Our reception is staffed {hotelData.policies.frontDeskHours} for late arrivals and guest support.
            </div>
            <div>
              <strong className="text-forest-950 block mb-1 font-semibold">Parking</strong>
              {hotelData.policies.parkingPolicy}
            </div>
            <div>
              <strong className="text-forest-950 block mb-1 font-semibold">Winter Central Heating</strong>
              {hotelData.policies.heatingPolicy}
            </div>
            <div>
              <strong className="text-forest-950 block mb-1 font-semibold">Pet Policy</strong>
              {hotelData.policies.petsPolicy}
            </div>
            <div>
              <strong className="text-forest-950 block mb-1 font-semibold">Cancellations</strong>
              {hotelData.policies.cancellationPolicy}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
