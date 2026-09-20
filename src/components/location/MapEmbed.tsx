import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { hotelData } from '../../data/hotelData';

export const MapEmbed: React.FC = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-stone-200/80 shadow-md">
      {/* Map Header Bar */}
      <div className="p-4 sm:p-6 bg-ivory-50 border-b border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-forest-950 font-semibold text-sm">
            <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
            <span>{hotelData.location.address}</span>
          </div>
          <p className="text-xs text-stone-500">
            Murree, Punjab 47150 • Walking distance to Mall Road & GPO Chowk
          </p>
        </div>

        <a
          href={hotelData.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest-900 hover:bg-forest-800 text-white rounded text-xs uppercase tracking-wider font-medium transition-colors shrink-0"
        >
          <Navigation className="w-3.5 h-3.5 text-gold-400" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-75" />
        </a>
      </div>

      {/* Embedded Interactive Map */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-stone-100">
        <iframe
          title="Seven Sky Hotel Murree Location Map"
          src={hotelData.location.embedMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[20%] contrast-[105%]"
        />
      </div>

      {/* Transit & Parking Guidance */}
      <div className="p-6 bg-stone-50 text-xs text-stone-600 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-stone-200">
        <div>
          <strong className="text-forest-950 block mb-1 font-semibold uppercase tracking-wider text-[11px]">
            From Islamabad / Rawalpindi
          </strong>
          Approx. 65 km (1.5 hours) via Murree Expressway (N-75). Take the Jhika Gali exit towards GPO Chowk.
        </div>
        <div>
          <strong className="text-forest-950 block mb-1 font-semibold uppercase tracking-wider text-[11px]">
            To Mall Road & GPO
          </strong>
          Approx. 350 meters (2 to 5 minutes walk). Avoid parking traffic by leaving your vehicle safely in our garage.
        </div>
        <div>
          <strong className="text-forest-950 block mb-1 font-semibold uppercase tracking-wider text-[11px]">
            On-Site Valet Parking
          </strong>
          Underground private parking with security. Inform our gate staff upon arrival for immediate valet assistance.
        </div>
      </div>
    </div>
  );
};
