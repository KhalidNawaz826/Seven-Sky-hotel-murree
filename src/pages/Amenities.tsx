import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { amenitiesData } from '../data/amenitiesData';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { 
  Flame, Droplets, ArrowUpDown, Zap, Car, Wifi, 
  Clock, UtensilsCrossed, Mountain, Users, Coffee, Sparkles, ShieldCheck 
} from 'lucide-react';

const getIcon = (iconName: string) => {
  const props = { className: 'w-7 h-7 text-gold-600 shrink-0' };
  switch (iconName) {
    case 'Flame': return <Flame {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    case 'ArrowUpDown': return <ArrowUpDown {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Car': return <Car {...props} />;
    case 'Wifi': return <Wifi {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
    case 'Mountain': return <Mountain {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Coffee': return <Coffee {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const Amenities: React.FC = () => {
  const { openBooking } = useOutletContext<{ openBooking: () => void }>();

  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Facilities & Amenities | Central Heating & Elevator"
        description="Comprehensive amenities at Seven Sky Hotel Murree: Central heating, passenger elevator, 24/7 generator backup, free underground parking, restaurant, and high-speed Wi-Fi."
      />

      {/* Page Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Comfort & Convenience
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Hotel Facilities & Amenities
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Designed to make your mountain stay comfortable, warm, and completely stress-free. Every facility listed is verified and actively maintained for our guests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Highlight Banner: Why These Matter in Murree */}
        <div className="bg-ivory-100 border border-stone-200 rounded-lg p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-2 text-forest-900 font-serif text-xl sm:text-2xl mb-2">
            <ShieldCheck className="w-6 h-6 text-gold-600" />
            <span>The Seven Sky Infrastructure Advantage</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
            Staying in a mountain hill station presents unique challenges—freezing winter temperatures, steep staircases, severe street parking shortages, and power cuts. Seven Sky Hotel was constructed specifically to overcome these with an on-site elevator, dedicated underground parking garage, commercial central heating, and heavy-duty 24/7 generator backup.
          </p>
        </div>

        {/* Full Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-lg p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-ivory-50 border border-stone-200 flex items-center justify-center mb-6">
                  {getIcon(amenity.icon)}
                </div>
                <h3 className="font-serif text-xl font-normal text-forest-950 mb-2">
                  {amenity.name}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="text-emerald-700 font-semibold uppercase tracking-wider text-[11px]">
                  ✓ Verified Amenity
                </span>
                <span className="capitalize bg-stone-100 px-2 py-0.5 rounded text-[11px]">
                  {amenity.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-forest-950 rounded-lg p-8 sm:p-12 text-center text-white space-y-6">
          <h3 className="font-serif text-3xl font-normal">
            Ready to Experience Warm Hospitality?
          </h3>
          <p className="text-sm text-ivory-200/90 max-w-xl mx-auto font-light">
            Plan your stay at Seven Sky Hotel Murree and enjoy our full range of comforts near GPO Chowk.
          </p>
          <div className="pt-2">
            <Button variant="gold" size="lg" onClick={openBooking}>
              Check Room Availability
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
