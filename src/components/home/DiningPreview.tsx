import React from 'react';
import { Coffee, Check } from 'lucide-react';
import { diningData } from '../../data/diningData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const DiningPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-100/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Cozy ambient dining hall in hotel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold block mb-1">
                  Freshly Prepared Cuisine
                </span>
                <h4 className="font-serif text-xl font-medium">Seven Sky Restaurant</h4>
              </div>
            </div>

            {/* Inset Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-lg shadow-xl border border-stone-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-forest-950 block">Hot Karak Chai</span>
                <span className="text-[11px] text-stone-500">Served 24/7 in-room</span>
              </div>
            </div>
          </div>

          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              subtitle="Taste & Nourishment"
              title="Warm Dining & Room Service"
              description="Savor comforting Pakistani cuisine, freshly cooked continental breakfasts, and piping hot tea while enjoying scenic hillside views."
            />

            <div className="space-y-3 pt-2">
              {diningData.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-stone-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button to="/dining" variant="primary" size="md">
                Explore Dining & Menu Options
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Inquire for Group Meals
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
