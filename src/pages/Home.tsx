import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { HeroBookingBar } from '../components/home/HeroBookingBar';
import { TrustBar } from '../components/home/TrustBar';
import { Introduction } from '../components/home/Introduction';
import { FeaturedRooms } from '../components/home/FeaturedRooms';
import { Experience } from '../components/home/Experience';
import { AmenitiesPreview } from '../components/home/AmenitiesPreview';
import { DiningPreview } from '../components/home/DiningPreview';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { ExploreMurreePreview } from '../components/home/ExploreMurreePreview';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  const { openBooking } = useOutletContext<{ openBooking: (roomName?: string) => void }>();

  return (
    <>
      <SEO
        title="Official Website | Warm Mountain Retreat in Murree"
        description="Official website of Seven Sky Hotel Murree. Located on Abid Majeed Road near GPO Chowk. Central heating, 24/7 hot water, passenger elevator, underground valet parking, and scenic mountain views."
      />

      {/* 1. Hero Section */}
      <Hero onOpenBooking={() => openBooking()} />

      {/* 2. Hero Booking Bar */}
      <HeroBookingBar onCheckAvailability={(room) => openBooking(room)} />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. Hotel Introduction */}
      <Introduction />

      {/* 5. Rooms Showcase */}
      <FeaturedRooms onRequestRoom={(room) => openBooking(room)} />

      {/* 6. The Experience */}
      <Experience />

      {/* 7. Verified Amenities */}
      <AmenitiesPreview />

      {/* 8. Dining */}
      <DiningPreview />

      {/* 9. Visual Gallery */}
      <GalleryPreview />

      {/* 10. Destination Guide */}
      <ExploreMurreePreview />

      {/* 11. Google Reviews */}
      <ReviewsSection />

      {/* 12. Final Booking CTA */}
      <FinalCTA onOpenBooking={() => openBooking()} />
    </>
  );
};
