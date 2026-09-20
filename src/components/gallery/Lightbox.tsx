import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../../types';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      }
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % photos.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Top Toolbar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white">
        <div className="text-xs uppercase tracking-widest text-ivory-300">
          Photo <span className="text-gold-400 font-bold">{currentIndex + 1}</span> of {photos.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none hidden sm:block"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-2xl"
        />
        {/* Caption */}
        <div className="mt-4 text-center max-w-xl">
          <h4 className="font-serif text-lg text-white font-medium">
            {currentPhoto.title}
          </h4>
          <p className="text-xs text-ivory-300/80 mt-1 font-light">
            {currentPhoto.caption}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none hidden sm:block"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
