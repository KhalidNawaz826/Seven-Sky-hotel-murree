import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { hotelData } from '../../data/hotelData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Parallax / Depth Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Murree Mountain Pine Forest and Hills"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse motion-safe:duration-[10000ms]"
          loading="eager"
        />
        {/* Editorial Gradients: Dark top for nav, rich dark base for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        {/* Location & Status Pill */}
        <div className="inline-flex items-center gap-2 bg-forest-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold-400/40 text-xs text-ivory-200 uppercase tracking-widest animate-fade-in">
          <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
          <span>Abid Majeed Road, near GPO Chowk • Murree</span>
        </div>

        {/* Primary Editorial Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1] drop-shadow-sm">
          A Peaceful Retreat Above the Clouds
        </h1>

        {/* Refined Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ivory-200/90 leading-relaxed font-light">
          Experience genuine mountain hospitality in the heart of Murree. Equipped with central heating, guest elevator, secure underground valet parking, and panoramic pine valley views.
        </p>

        {/* Feature Badges for Quick Understanding */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          <Badge variant="white" size="sm">
            Central Heating & 24/7 Hot Water
          </Badge>
          <Badge variant="white" size="sm">
            Passenger Elevator / Lift
          </Badge>
          <Badge variant="white" size="sm">
            Free Underground Parking
          </Badge>
          <Badge variant="white" size="sm">
            2-5 Min to Mall Road
          </Badge>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="gold"
            size="lg"
            onClick={onOpenBooking}
            className="w-full sm:w-auto shadow-xl"
          >
            Check Availability
          </Button>

          <Button
            variant="white"
            size="lg"
            to="/rooms"
            className="w-full sm:w-auto"
          >
            Explore Rooms & Suites
          </Button>

          <a
            href={`tel:${hotelData.contact.mobile}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-200 hover:text-gold-400 transition-colors py-2 px-3 sm:px-1"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call: {hotelData.contact.mobileFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
