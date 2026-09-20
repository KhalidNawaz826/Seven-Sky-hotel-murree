import React from 'react';
import { galleryData } from '../../data/galleryData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const GalleryPreview: React.FC = () => {
  const previewPhotos = galleryData.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            align="left"
            subtitle="Visual Journey"
            title="Moments Above the Clouds"
            description="Explore our cozy rooms, scenic mountain vistas, terrace lounges, and peaceful mountain ambiance."
          />
          <div className="shrink-0">
            <Button to="/gallery" variant="outline" size="md">
              View Full Gallery ({galleryData.length} Photos)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-lg overflow-hidden bg-stone-100 shadow-md aspect-[4/3] border border-stone-200"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold mb-1">
                  {photo.category}
                </span>
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
      </div>
    </section>
  );
};
