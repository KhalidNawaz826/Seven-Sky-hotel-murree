import React, { useState } from 'react';
import { Calendar, Users, Home, Search } from 'lucide-react';
import { roomsData } from '../../data/roomsData';
import { getTomorrowDate, getDayAfterTomorrowDate } from '../../utils/formatters';
import { Button } from '../common/Button';

interface HeroBookingBarProps {
  onCheckAvailability: (roomName?: string) => void;
}

export const HeroBookingBar: React.FC<HeroBookingBarProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState(getTomorrowDate());
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrowDate());
  const [roomType, setRoomType] = useState(roomsData[0].name);
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(roomType);
  };

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="bg-white rounded-lg shadow-2xl border border-stone-200/80 p-4 sm:p-6 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          {/* Check-In Date */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-600 mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2.5 bg-ivory-50 border border-stone-300 rounded text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none"
            />
          </div>

          {/* Check-Out Date */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-600 mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2.5 bg-ivory-50 border border-stone-300 rounded text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none"
            />
          </div>

          {/* Room Selection */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-600 mb-1 flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-gold-600" />
              Room Type
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3 py-2.5 bg-ivory-50 border border-stone-300 rounded text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none"
            >
              {roomsData.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
              <option value="Any Room">Any Available Room</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-600 mb-1 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2.5 bg-ivory-50 border border-stone-300 rounded text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests (Family)</option>
            </select>
          </div>

          {/* Search / Inquire CTA */}
          <div>
            <Button
              type="submit"
              variant="gold"
              size="md"
              className="w-full shadow-md py-3"
              icon={<Search className="w-4 h-4" />}
            >
              Inquire Now
            </Button>
          </div>
        </form>

        <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
          <span>* Instant availability inquiry directly with front desk</span>
          <span className="hidden sm:inline">Winter heating & 24/7 hot water guaranteed</span>
        </div>
      </div>
    </div>
  );
};
