import React from 'react';
import { Compass, Shield, HeartHandshake } from 'lucide-react';
import { hotelData } from '../../data/hotelData';
import { Button } from '../common/Button';

export const Introduction: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Editorial Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>A Comfortable Base in Murree</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-950 leading-tight">
              Where Mountain Serenity Meets Modern Hospitality
            </h2>

            <div className="w-16 h-0.5 bg-gold-500" />

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed font-light">
              <p>
                {hotelData.longDescription[0]}
              </p>
              <p>
                {hotelData.longDescription[1]}
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest-950 uppercase tracking-wider">Family Hospitality</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Spacious multi-bed suites and attentive 24h care tailored for family holidays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest-950 uppercase tracking-wider">Zero Mountain Hassle</h4>
                  <p className="text-xs text-stone-500 mt-0.5">On-site elevator, underground parking, and central heating remove common hill travel worries.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button to="/about" variant="primary" size="md">
                Discover Our Story
              </Button>
              <Button to="/location" variant="outline" size="md">
                View Location & Map
              </Button>
            </div>
          </div>

          {/* Editorial Collage Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
                  alt="Scenic Murree mountain landscape with pine trees and hill architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Overlapping Detail Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-3/5 rounded-lg overflow-hidden shadow-2xl border-4 border-white hidden sm:block aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                  alt="Cozy room interior with warm lighting and central heating"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 bg-forest-900 text-white p-4 rounded shadow-xl border border-gold-400/40 text-center">
                <span className="font-serif text-2xl font-bold text-gold-400 block">4.6 ★</span>
                <span className="text-[10px] tracking-widest uppercase text-ivory-200 font-semibold block">
                  Google Rated
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
