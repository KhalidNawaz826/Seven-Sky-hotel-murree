import React from 'react';
import { diningData } from '../data/diningData';
import { SEO } from '../components/common/SEO';
import { Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Dining: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Dining & Room Service | Pakistani & Continental Cuisine"
        description="Experience fresh dining at Seven Sky Hotel Murree. In-house heated restaurant, 24/7 hot mountain chai, and room service overlooking scenic pine valleys."
      />

      {/* Page Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Culinary Hospitality
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Dining & Room Service
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Savor the rich tastes of Pakistani mountain hospitality. Enjoy hearty breakfasts, piping hot curries, and freshly brewed mountain chai in our heated restaurant or private room.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Editorial Introduction */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            {diningData.overview}
          </p>
        </div>

        {/* Dining Venues Grid */}
        <div className="space-y-12">
          {diningData.services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg overflow-hidden border border-stone-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image (5 cols) */}
              <div className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text (7 cols) */}
              <div className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest-950">
                    {service.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="pt-4 space-y-2">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{service.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cuisine Highlights */}
        <div className="bg-ivory-100 border border-stone-200 rounded-lg p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950">
              Fresh Kitchen Specialties
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Prepared to order with 100% halal ingredients and hygienic kitchen standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningData.specialties.map((spec, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-serif text-xl font-medium text-forest-950 border-b border-gold-300/40 pb-2">
                  {spec.category}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {spec.description}
                </p>
                <ul className="space-y-2 text-xs text-stone-700 pt-2">
                  {spec.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-stone-500 max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Seasonal menu options vary based on fresh daily procurement. Special dietary requirements can be accommodated upon request.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
