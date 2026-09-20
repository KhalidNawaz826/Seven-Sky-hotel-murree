import React from 'react';
import { hotelData } from '../data/hotelData';
import { SEO } from '../components/common/SEO';
import { MapEmbed } from '../components/location/MapEmbed';
import { Phone, Car, Footprints } from 'lucide-react';

export const LocationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Location & Directions | Abid Majeed Road near GPO Chowk"
        description="Find Seven Sky Hotel on Abid Majeed Road near GPO Chowk, Murree. Step-by-step driving directions from Islamabad, walking route to Mall Road, and parking guidance."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Getting Here
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Location & Directions
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Conveniently situated on Abid Majeed Road near GPO Chowk, placing you just minutes from Mall Road while offering peaceful hillside seclusion and secure underground parking.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Map Embed Section */}
        <MapEmbed />

        {/* Directions Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Driving from Islamabad */}
          <div className="bg-white rounded-lg p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-forest-950">
                  Driving from Islamabad / Rawalpindi
                </h3>
                <span className="text-xs text-stone-500">Approx. 65 km • 1.5 Hours via N-75 Expressway</span>
              </div>
            </div>

            <ol className="list-decimal list-inside space-y-2 text-xs text-stone-600 leading-relaxed pt-2">
              <li>Depart via Murree Road (Islamabad) onto the 4-lane Murree Expressway (N-75).</li>
              <li>Continue past the Murree Toll Plaza and proceed uphill towards Jhika Gali.</li>
              <li>At the Upper Jhika Gali junction, follow signs leading toward GPO Chowk and Abid Majeed Road.</li>
              <li>Seven Sky Hotel is clearly situated along Abid Majeed Road with direct access to our underground valet parking entrance.</li>
            </ol>

            <div className="pt-2 text-xs text-stone-500 italic">
              * In winter snowfall, feel free to call our reception for live mountain pass weather updates.
            </div>
          </div>

          {/* Walking to Mall Road */}
          <div className="bg-white rounded-lg p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                <Footprints className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-forest-950">
                  Walking to GPO Chowk & Mall Road
                </h3>
                <span className="text-xs text-stone-500">Approx. 350 meters • 2 to 5 Minutes Walk</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed pt-2">
              One of the greatest benefits of staying at Seven Sky Hotel is avoiding traffic gridlocks. Simply leave your vehicle in our secure underground garage and enjoy a pleasant 2 to 5-minute stroll:
            </p>

            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Step out onto Abid Majeed Road toward GPO Chowk.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Reach GPO Chowk, where historic colonial architecture begins.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Begin your stroll along pedestrian Mall Road with shops and cafes.</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs font-semibold text-emerald-800">
                ✓ No parking fees or traffic jams when visiting Mall Road
              </span>
            </div>
          </div>

        </div>

        {/* Contact Assistance */}
        <div className="bg-ivory-100 border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-forest-950 font-medium">Need Navigation Assistance?</h4>
            <p className="text-xs text-stone-600">
              If you need route advice or encounter hill traffic, our 24h reception desk is here to guide you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`tel:${hotelData.contact.landline}`}
              className="px-4 py-2.5 bg-forest-900 text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-forest-800 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Reception ({hotelData.contact.landlineFormatted})</span>
            </a>
            <a
              href={`tel:${hotelData.contact.mobile}`}
              className="px-4 py-2.5 bg-white text-forest-950 border border-stone-300 rounded text-xs uppercase tracking-wider font-semibold hover:bg-stone-100 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>Mobile: {hotelData.contact.mobileFormatted}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
