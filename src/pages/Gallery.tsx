import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { SEO } from '../components/common/SEO';
import { Lightbox } from '../components/gallery/Lightbox';
import { Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'views', label: 'Mountain Views' },
    { id: 'hotel', label: 'Hotel & Terrace' },
    { id: 'dining', label: 'Dining & Chai' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Photo Gallery | Rooms, Terraces & Mountain Panoramas"
        description="View photo gallery of Seven Sky Hotel Murree. Explore our deluxe rooms, en-suite bathrooms, dining hall, and sweeping views of Murree pine hills."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Visual Story
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Hotel & Mountain Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Browse authentic imagery of Seven Sky Hotel Murree, our comfortable guest accommodations, heated interiors, and the surrounding natural majesty of the Queen of Hills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat.label} {cat.id === 'all' ? `(${galleryData.length})` : ''}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-lg overflow-hidden bg-stone-200 shadow-md aspect-[4/3] cursor-pointer border border-stone-200/80"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-gold-400 text-[10px] uppercase tracking-widest font-semibold mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </div>
                <h4 className="font-serif text-lg font-medium">
                  {photo.title}
                </h4>
                <p className="text-xs text-ivory-200/80 mt-1 line-clamp-1 font-light">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-xl mx-auto">
          <p>
            Photography represents real guest room configurations, common spaces, and scenic vistas from and around Seven Sky Hotel Murree.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
