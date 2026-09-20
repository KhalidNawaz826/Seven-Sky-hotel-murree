import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Mountain, Flame, Droplets } from 'lucide-react';
import { Room } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface RoomCardProps {
  room: Room;
  onRequestRoom: (roomName: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onRequestRoom }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-stone-200/80 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col">
      {/* Room Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={room.images[0]?.src}
          alt={room.images[0]?.alt || room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {room.badge && (
            <Badge variant="white" size="sm">
              {room.badge}
            </Badge>
          )}
        </div>

        {/* View Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded">
            <Mountain className="w-3.5 h-3.5 text-gold-400" />
            <span className="truncate max-w-[200px]">{room.view}</span>
          </div>
        </div>
      </div>

      {/* Room Content */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest-950 group-hover:text-gold-700 transition-colors">
              <Link to={`/rooms/${room.slug}`}>
                {room.name}
              </Link>
            </h3>
          </div>
          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-light">
            {room.subtitle}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Up to {room.maxGuests} Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-gold-600 shrink-0" />
            <span className="truncate">{room.bedType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Central Heating</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-gold-600 shrink-0" />
            <span>24/7 Hot Water</span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-500 block">Rate Guarantee</span>
            <span className="text-xs font-semibold text-forest-900">
              Inquire for Best Rates
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/rooms/${room.slug}`}
              className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-forest-900 transition-colors"
            >
              Details
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onRequestRoom(room.name)}
            >
              Request Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
