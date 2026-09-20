import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomBar } from './MobileBottomBar';
import { BookingInquiryModal } from '../booking/BookingInquiryModal';

export const Layout: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState<string | undefined>(undefined);
  const location = useLocation();

  // Scroll to top upon page navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOpenBooking = (roomName?: string) => {
    setPreselectedRoom(roomName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedRoom(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900">
      <Header onOpenBooking={() => handleOpenBooking()} />
      
      <main className="flex-grow">
        {/* Pass down booking modal handler via outlet context */}
        <Outlet context={{ openBooking: handleOpenBooking }} />
      </main>

      <Footer />
      
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      <BookingInquiryModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedRoomName={preselectedRoom}
      />
    </div>
  );
};
