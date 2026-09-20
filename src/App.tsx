import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { RoomDetail } from './pages/RoomDetail';
import { Amenities } from './pages/Amenities';
import { Dining } from './pages/Dining';
import { Gallery } from './pages/Gallery';
import { ExploreMurree } from './pages/ExploreMurree';
import { About } from './pages/About';
import { LocationPage } from './pages/LocationPage';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:slug" element={<RoomDetail />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="dining" element={<Dining />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="explore" element={<ExploreMurree />} />
          <Route path="about" element={<About />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
