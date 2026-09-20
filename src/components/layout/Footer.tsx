import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Star, Mail, ShieldCheck } from 'lucide-react';
import { hotelData } from '../../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-ivory-200 border-t border-forest-900 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-forest-800/80">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-2xl font-bold uppercase text-white">
                Seven Sky
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-400 font-medium">
                Hotel • Murree
              </span>
            </Link>
            <p className="text-sm text-ivory-300/80 leading-relaxed font-light">
              Warm mountain comfort in the heart of Murree. Equipped with central heating, elevator access, 24/7 hot water, underground parking, and panoramic pine forest views.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-gold-400">
              <div className="flex items-center gap-1 bg-forest-900/80 px-2.5 py-1 rounded border border-gold-500/30">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                <span className="font-bold">{hotelData.trustMetrics.googleRating}</span>
                <span className="text-ivory-300">/ 5.0</span>
              </div>
              <span className="text-ivory-300/70 text-[11px]">({hotelData.trustMetrics.googleReviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-widest text-white mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link to="/rooms" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  Dining & Room Service
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  Explore Murree Guide
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  Location & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (NAP) */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-widest text-white mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Hotel Contact
            </h4>
            <div className="space-y-3 text-sm text-ivory-300/90 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>
                  {hotelData.location.address},<br />
                  {hotelData.location.city}, {hotelData.location.postalCode}, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-ivory-400 block">Landline:</span>
                  <a href={`tel:${hotelData.contact.landline}`} className="hover:text-gold-400 transition-colors font-mono">
                    {hotelData.contact.landlineFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-ivory-400 block">Mobile & WhatsApp:</span>
                  <a href={`tel:${hotelData.contact.mobile}`} className="hover:text-gold-400 transition-colors font-mono">
                    {hotelData.contact.mobileFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${hotelData.contact.email}`} className="hover:text-gold-400 transition-colors text-xs font-mono">
                  {hotelData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Direct Assistance & Trust */}
          <div className="space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-white mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Reservations
            </h4>
            <p className="text-xs text-ivory-300/80 leading-relaxed font-light">
              For direct bookings, seasonal package rates, and winter snow inquiries, contact our front desk directly.
            </p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${hotelData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Seven Sky Hotel Murree, I would like to inquire about room availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-700/80 hover:bg-emerald-600 text-white rounded text-xs uppercase tracking-wider font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
              <a
                href={hotelData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-forest-900 hover:bg-forest-800 text-ivory-200 rounded text-xs uppercase tracking-wider font-medium transition-colors border border-forest-700"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                View on Google Maps
              </a>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-ivory-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Official Hotel Website & Direct Contact</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-400 gap-4">
          <p>© {new Date().getFullYear()} Seven Sky Hotel, Murree. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">
              Front Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
