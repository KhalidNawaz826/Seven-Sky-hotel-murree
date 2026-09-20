import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { attractionsData } from '../../data/attractionsData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const ExploreMurreePreview: React.FC = () => {
  const topAttractions = attractionsData.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-100/70 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            align="left"
            subtitle="The Queen of Hills"
            title="Explore Murree"
            description="Seven Sky Hotel places you minutes from Murree’s famous sights, viewpoints, and scenic mountain excursions."
          />
          <div className="shrink-0">
            <Button to="/explore" variant="outline" size="md">
              Full Destination Guide
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topAttractions.map((spot) => (
            <div
              key={spot.id}
              className="group bg-white rounded-lg overflow-hidden border border-stone-200/80 shadow-md flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={spot.image}
                  alt={spot.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{spot.approxDriveTime}</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-forest-950 group-hover:text-gold-700 transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed font-light">
                    {spot.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">
                    Distance: {spot.approxDistance}
                  </span>
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-1 font-semibold text-forest-900 hover:text-gold-600 transition-colors uppercase tracking-wider text-[11px]"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
