import React from 'react';
import { attractionsData } from '../data/attractionsData';
import { SEO } from '../components/common/SEO';
import { Clock, Compass, Car, CloudSnow } from 'lucide-react';

export const ExploreMurree: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Explore Murree | Destination Guide & Travel Times"
        description="Discover Murree's top attractions from Seven Sky Hotel: Mall Road, Kashmir Point, Pindi Point, Patriata Cable Car, and Ayubia Pipeline Track with travel tips."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Destination Guide
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Explore Murree & The Hills
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Surrounded by historic pines and dramatic mountain ridges, Seven Sky Hotel on Abid Majeed Road serves as your ideal launching point for exploring the Queen of Hills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Attractions List */}
        <div className="space-y-12">
          {attractionsData.map((spot, index) => (
            <div
              key={spot.id}
              className="bg-white rounded-lg overflow-hidden border border-stone-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image (5 cols) */}
              <div className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={spot.image}
                  alt={spot.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{spot.approxDriveTime}</span>
                </div>
              </div>

              {/* Content (7 cols) */}
              <div className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                      {spot.category}
                    </span>
                    {spot.urduName && (
                      <span className="text-xs font-serif text-stone-400">
                        {spot.urduName}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest-950">
                    {spot.name}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {spot.longDescription}
                  </p>

                  <div className="pt-2">
                    <div className="p-3 bg-ivory-50 rounded border border-stone-200 text-xs text-stone-600 space-y-1">
                      <div><strong>Distance from Hotel:</strong> {spot.approxDistance}</div>
                      <div><strong>Route Note:</strong> {spot.routeNote}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Front desk can assist with taxi arrangements</span>
                  <span className="text-forest-900 font-semibold uppercase tracking-wider text-[11px]">
                    {spot.approxDriveTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hill Station Travel Tips */}
        <div className="bg-ivory-100 border border-stone-200 rounded-lg p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950">
              Essential Murree Travel Tips
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Helpful local guidance from the Seven Sky Hotel concierge team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
                <CloudSnow className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-forest-950 text-sm uppercase tracking-wider">Winter & Snow Travel</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                During snowfall months (December to February), always check road advisories before ascending. Snow chains are recommended for icy inclines. Our hotel central heating is fully operational throughout the winter season.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-forest-950 text-sm uppercase tracking-wider">Parking Strategy</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Street parking near Mall Road is strictly controlled and congested. Guests at Seven Sky Hotel can leave their vehicle in our private underground garage and walk to Mall Road in 2-5 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-forest-950 text-sm uppercase tracking-wider">Local Sightseeing Cabs</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our front desk can connect you with trusted local mountain drivers for day excursions to Patriata Cable Car, Bhurban, or the Ayubia Pipeline Track at fair standard rates.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
