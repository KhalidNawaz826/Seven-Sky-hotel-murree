import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CalendarCheck, MapPin } from 'lucide-react';
import { hotelData } from '../../data/hotelData';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../common/Button';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const isHome = location.pathname === '/';
  // On subpages, always have solid background for clear contrast
  const headerSolid = isScrolled || !isHome;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Dining', path: '/dining' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Explore Murree', path: '/explore' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          headerSolid
            ? 'bg-forest-950/95 backdrop-blur-md shadow-md py-3 text-ivory-100 border-b border-white/10'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link to="/" className="flex flex-col group">
            <span className="font-serif tracking-[0.2em] text-xl sm:text-2xl font-bold uppercase transition-colors group-hover:text-gold-400">
              Seven Sky
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-400 font-medium">
              Hotel • Murree
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest transition-all duration-200 hover:text-gold-400 relative py-1 ${
                    isActive
                      ? 'text-gold-400 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-400'
                      : 'text-ivory-100/90 font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${hotelData.contact.landline.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-200 hover:text-gold-400 transition-colors"
              title="Call Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{hotelData.contact.landlineFormatted}</span>
            </a>

            <Button
              variant="gold"
              size="sm"
              onClick={onOpenBooking}
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              Book Your Stay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              variant="gold"
              size="sm"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex"
            >
              Book
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-ivory-100 hover:text-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-forest-950 text-white z-10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-forest-800">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col"
                >
                  <span className="font-serif tracking-[0.2em] text-xl font-bold uppercase text-white">
                    Seven Sky
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold-400 font-medium">
                    Hotel • Murree
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-ivory-300 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-2 mt-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded text-sm uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'bg-gold-500/20 text-gold-400 font-semibold'
                          : 'text-ivory-200 hover:bg-forest-900 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-forest-800 space-y-4">
              <div className="text-xs text-ivory-300 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Abid Majeed Road, near GPO Chowk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href={`tel:${hotelData.contact.landline}`} className="hover:text-gold-400">
                    {hotelData.contact.landlineFormatted}
                  </a>
                </div>
              </div>

              <Button
                variant="gold"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
