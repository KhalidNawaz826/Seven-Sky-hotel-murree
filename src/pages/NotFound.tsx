import React from 'react';
import { Compass, Home } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { hotelData } from '../data/hotelData';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <SEO
        title="Page Not Found | Seven Sky Hotel Murree"
        description="The page you are looking for in the hills couldn't be found."
      />

      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-lg border border-stone-200 shadow-md">
        <div className="w-16 h-16 rounded-full bg-ivory-100 text-gold-600 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block">
            404 Error
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-forest-950 mt-1">
            Lost in the Hills?
          </h1>
          <p className="text-sm text-stone-600 mt-3 font-light leading-relaxed">
            The page you are looking for seems to have drifted into the Murree mist or does not exist.
          </p>
        </div>

        <div className="pt-2 space-y-3">
          <Button to="/" variant="primary" size="md" className="w-full" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>

          <Button to="/rooms" variant="outline" size="md" className="w-full">
            Explore Rooms & Suites
          </Button>
        </div>

        <div className="pt-4 border-t border-stone-100 text-xs text-stone-500">
          Need immediate booking assistance? Call{' '}
          <a href={`tel:${hotelData.contact.landline}`} className="font-semibold text-forest-900 underline">
            {hotelData.contact.landlineFormatted}
          </a>
        </div>
      </div>
    </div>
  );
};
