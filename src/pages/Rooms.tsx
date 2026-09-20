import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import { SEO } from '../components/common/SEO';
import { RoomCard } from '../components/rooms/RoomCard';
import { Flame, Droplets, ArrowUpDown, Car } from 'lucide-react';

export const Rooms: React.FC = () => {
  const { openBooking } = useOutletContext<{ openBooking: (roomName?: string) => void }>();
  const [filter, setFilter] = useState<'all' | 'couples' | 'family'>('all');

  const filteredRooms = roomsData.filter((r) => {
    if (filter === 'couples') return r.maxGuests <= 2;
    if (filter === 'family') return r.maxGuests > 2;
    return true;
  });

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Rooms & Suites | Central Heating & Scenic Balconies"
        description="Explore Deluxe Double, Family Suites, and Executive Rooms at Seven Sky Hotel Murree. All rooms equipped with central heating, en-suite bathrooms, and mountain views."
      />

      {/* Page Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Accommodations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Rooms & Suites
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Every room at Seven Sky Hotel is prepared with genuine mountain care. Enjoy central heating for chilly weather, en-suite private bathrooms with continuous hot water, and tranquil views of the pine hills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              filter === 'all'
                ? 'bg-forest-900 text-white shadow-md'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            All Rooms ({roomsData.length})
          </button>
          <button
            onClick={() => setFilter('couples')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              filter === 'couples'
                ? 'bg-forest-900 text-white shadow-md'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Couples & Solo
          </button>
          <button
            onClick={() => setFilter('family')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              filter === 'family'
                ? 'bg-forest-900 text-white shadow-md'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Family Suites
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onRequestRoom={(name) => openBooking(name)}
            />
          ))}
        </div>

        {/* Essential Inclusions Guarantee */}
        <div className="mt-16 bg-ivory-100 border border-stone-200 rounded-lg p-8">
          <h3 className="font-serif text-2xl text-forest-950 text-center mb-6">
            Included in Every Stay
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs text-stone-700">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gold-600 mb-2">
                <Flame className="w-5 h-5" />
              </div>
              <strong className="text-forest-950 block">Central Heating</strong>
              <span className="text-stone-500 text-[11px] mt-0.5">Active in cold months</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gold-600 mb-2">
                <Droplets className="w-5 h-5" />
              </div>
              <strong className="text-forest-950 block">24/7 Hot Water</strong>
              <span className="text-stone-500 text-[11px] mt-0.5">High-capacity heating</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gold-600 mb-2">
                <ArrowUpDown className="w-5 h-5" />
              </div>
              <strong className="text-forest-950 block">Passenger Elevator</strong>
              <span className="text-stone-500 text-[11px] mt-0.5">To all guest room floors</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gold-600 mb-2">
                <Car className="w-5 h-5" />
              </div>
              <strong className="text-forest-950 block">Underground Valet</strong>
              <span className="text-stone-500 text-[11px] mt-0.5">Secure private garage</span>
            </div>
          </div>
        </div>

        {/* Pricing Policy Box */}
        <div className="mt-8 text-center text-xs text-stone-500 max-w-xl mx-auto">
          <p>
            * Murree hotel tariffs fluctuate during snowfall periods and summer vacation. For exact seasonal rates, special family packages, or long-stay discounts, please submit an inquiry or call our front desk directly.
          </p>
        </div>
      </div>
    </div>
  );
};
