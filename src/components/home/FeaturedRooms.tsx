import React from 'react';
import { roomsData } from '../../data/roomsData';
import { SectionHeading } from '../common/SectionHeading';
import { RoomCard } from '../rooms/RoomCard';
import { Button } from '../common/Button';

interface FeaturedRoomsProps {
  onRequestRoom: (roomName: string) => void;
}

export const FeaturedRooms: React.FC<FeaturedRoomsProps> = ({ onRequestRoom }) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            align="left"
            subtitle="Comfort & Accommodation"
            title="Rooms & Suites"
            description="Designed for mountain tranquility. Featuring en-suite bathrooms with 24/7 hot water, central heating, private balconies, and dedicated elevator access."
          />
          <div className="shrink-0">
            <Button to="/rooms" variant="outline" size="md">
              View All Rooms
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onRequestRoom={onRequestRoom}
            />
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 p-4 rounded-lg bg-ivory-100 border border-stone-200 text-center max-w-2xl mx-auto text-xs text-stone-600">
          <span className="font-semibold text-forest-950">Seasonal Rate Note:</span> Room tariffs in Murree reflect seasonal demand (snowfall, summer holidays, and off-peak weekdays). Contact our front desk directly for current quotes and group packages.
        </div>
      </div>
    </section>
  );
};
