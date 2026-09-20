import React from 'react';
import { Star, Wifi, Car, Flame, ArrowUpDown, Zap } from 'lucide-react';
import { hotelData } from '../../data/hotelData';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-stone-200/80 py-8 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          
          {/* Google Rating */}
          <div className="flex flex-col items-center text-center p-2">
            <div className="flex items-center gap-1 text-gold-500 mb-1">
              <Star className="w-5 h-5 fill-gold-400 text-gold-500" />
              <span className="font-serif text-2xl font-bold text-forest-950">
                {hotelData.trustMetrics.googleRating}
              </span>
              <span className="text-xs text-stone-500 font-medium">/ 5.0</span>
            </div>
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              Google Rating
            </span>
            <span className="text-[11px] text-stone-500">
              {hotelData.trustMetrics.googleReviewCount}+ Verified Reviews
            </span>
          </div>

          {/* Central Heating */}
          <div className="flex flex-col items-center text-center p-2 pt-4 lg:pt-2">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
              <Flame className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              Central Heating
            </span>
            <span className="text-[11px] text-stone-500">
              Active in chilly months
            </span>
          </div>

          {/* 24/7 Hot Water & Power */}
          <div className="flex flex-col items-center text-center p-2 pt-4 lg:pt-2">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              24/7 Power Backup
            </span>
            <span className="text-[11px] text-stone-500">
              Heavy-duty generator
            </span>
          </div>

          {/* Passenger Lift / Elevator */}
          <div className="flex flex-col items-center text-center p-2 pt-4 lg:pt-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
              <ArrowUpDown className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              Elevator / Lift
            </span>
            <span className="text-[11px] text-stone-500">
              Elderly & family friendly
            </span>
          </div>

          {/* Free Underground Parking */}
          <div className="flex flex-col items-center text-center p-2 pt-4 lg:pt-2">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
              <Car className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              Underground Parking
            </span>
            <span className="text-[11px] text-stone-500">
              Secure on-site valet
            </span>
          </div>

          {/* Free Wi-Fi */}
          <div className="flex flex-col items-center text-center p-2 pt-4 lg:pt-2">
            <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mb-1.5">
              <Wifi className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              Free Wi-Fi
            </span>
            <span className="text-[11px] text-stone-500">
              Throughout property
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
