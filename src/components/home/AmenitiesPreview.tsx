import React from 'react';
import { 
  Flame, Droplets, ArrowUpDown, Zap, Car, Wifi, 
  Clock, UtensilsCrossed, Mountain, Users, Coffee, Sparkles 
} from 'lucide-react';
import { amenitiesData } from '../../data/amenitiesData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

// Icon mapper helper
const getAmenityIcon = (iconName: string) => {
  const iconProps = { className: 'w-6 h-6 text-gold-600 shrink-0' };
  switch (iconName) {
    case 'Flame': return <Flame {...iconProps} />;
    case 'Droplets': return <Droplets {...iconProps} />;
    case 'ArrowUpDown': return <ArrowUpDown {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Car': return <Car {...iconProps} />;
    case 'Wifi': return <Wifi {...iconProps} />;
    case 'Clock': return <Clock {...iconProps} />;
    case 'UtensilsCrossed': return <UtensilsCrossed {...iconProps} />;
    case 'Mountain': return <Mountain {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

export const AmenitiesPreview: React.FC = () => {
  const highlightedAmenities = amenitiesData.slice(0, 8);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Hospitality & Services"
          title="Hotel Facilities & Amenities"
          description="Every essential amenity is verified and maintained to provide seamless comfort throughout your Murree stay."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlightedAmenities.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-ivory-100 flex items-center justify-center mb-4">
                  {getAmenityIcon(item.icon)}
                </div>
                <h3 className="font-serif text-lg font-medium text-forest-950 mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="uppercase tracking-wider font-semibold text-emerald-700">
                  ✓ Verified Feature
                </span>
                <span className="capitalize">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/amenities" variant="outline" size="md">
            View All Amenities & Building Services
          </Button>
        </div>
      </div>
    </section>
  );
};
