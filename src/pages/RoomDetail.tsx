import React, { useState } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import { hotelData } from '../data/hotelData';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { 
  Users, Bed, Mountain, Flame, Droplets, Wifi, Tv, Sun, Bath, 
  Sparkles, Coffee, Utensils, ArrowUpDown, Sofa, Archive, Briefcase, 
  Shield, Check, Phone, MessageSquare 
} from 'lucide-react';
import { generateWhatsAppInquiryUrl } from '../utils/whatsapp';

export const RoomDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBooking } = useOutletContext<{ openBooking: (roomName?: string) => void }>();
  const room = roomsData.find((r) => r.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) {
    return (
      <div className="pt-32 pb-24 text-center max-w-lg mx-auto px-4">
        <h2 className="font-serif text-3xl text-forest-950 mb-4">Room Not Found</h2>
        <p className="text-stone-600 mb-6">
          The room category you requested could not be located in our listings.
        </p>
        <Button to="/rooms" variant="primary" size="md">
          View All Rooms & Suites
        </Button>
      </div>
    );
  }

  const relatedRooms = roomsData.filter((r) => r.id !== room.id);
  const whatsappUrl = generateWhatsAppInquiryUrl({ roomType: room.name });

  const getDetailIcon = (name: string) => {
    const iconProps = { className: 'w-4 h-4 text-gold-600 shrink-0' };
    switch (name) {
      case 'Flame': return <Flame {...iconProps} />;
      case 'Droplets': return <Droplets {...iconProps} />;
      case 'Wifi': return <Wifi {...iconProps} />;
      case 'Tv': return <Tv {...iconProps} />;
      case 'Sun': return <Sun {...iconProps} />;
      case 'Bath': return <Bath {...iconProps} />;
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'Coffee': return <Coffee {...iconProps} />;
      case 'Utensils': return <Utensils {...iconProps} />;
      case 'ArrowUpDown': return <ArrowUpDown {...iconProps} />;
      case 'Sofa': return <Sofa {...iconProps} />;
      case 'Archive': return <Archive {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      case 'Shield': return <Shield {...iconProps} />;
      case 'Mountain': return <Mountain {...iconProps} />;
      default: return <Check {...iconProps} />;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title={`${room.name} | Seven Sky Hotel Murree`}
        description={`${room.name} at Seven Sky Hotel Murree. ${room.shortDescription}`}
        ogImage={room.images[0]?.src}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-6">
          <Link to="/" className="hover:text-forest-950 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/rooms" className="hover:text-forest-950 transition-colors">Rooms & Suites</Link>
          <span>/</span>
          <span className="text-forest-950 font-semibold">{room.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header Title */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {room.badge && <Badge variant="gold" size="sm">{room.badge}</Badge>}
                <Badge variant="verified" size="sm">Verified Room</Badge>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-950">
                {room.name}
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-2 font-light">
                {room.subtitle}
              </p>
            </div>

            {/* Gallery Viewer */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-stone-200 border border-stone-200 shadow-md">
                <img
                  src={room.images[activeImageIndex]?.src}
                  alt={room.images[activeImageIndex]?.alt || room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded">
                  {room.images[activeImageIndex]?.caption || room.name}
                </div>
              </div>

              {/* Thumbnails */}
              {room.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {room.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-forest-900 shadow-md scale-105'
                          : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Key Specs Box */}
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-2 border-r last:border-r-0 border-stone-100">
                <Users className="w-5 h-5 text-gold-600 mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider text-stone-500 block">Capacity</span>
                <span className="text-xs font-bold text-forest-950">{room.maxGuests} Guests</span>
              </div>

              <div className="p-2 border-r last:border-r-0 border-stone-100">
                <Bed className="w-5 h-5 text-gold-600 mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider text-stone-500 block">Bedding</span>
                <span className="text-xs font-bold text-forest-950 truncate block">{room.bedType}</span>
              </div>

              <div className="p-2 border-r last:border-r-0 border-stone-100">
                <Mountain className="w-5 h-5 text-gold-600 mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider text-stone-500 block">Scenery</span>
                <span className="text-xs font-bold text-forest-950 truncate block">Mountain View</span>
              </div>

              <div className="p-2">
                <Flame className="w-5 h-5 text-gold-600 mx-auto mb-1" />
                <span className="text-[11px] uppercase tracking-wider text-stone-500 block">Heating</span>
                <span className="text-xs font-bold text-forest-950">Central Heating</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl text-forest-950">About This Room</h3>
              <p className="text-stone-600 leading-relaxed font-light text-base">
                {room.fullDescription}
              </p>

              <h4 className="font-serif text-lg text-forest-950 pt-4">Room Features & Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Amenities */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl text-forest-950">Room Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {room.amenities.map((am, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-700 p-2 rounded bg-stone-50 border border-stone-100">
                    {getDetailIcon(am.icon)}
                    <span className="font-medium">{am.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Booking Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-lg p-6 border border-stone-200 shadow-lg space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block">
                  Reserve This Room
                </span>
                <h3 className="font-serif text-2xl text-forest-950 mt-1">
                  Availability & Rates
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {room.pricingNote}
                </p>
              </div>

              <div className="p-3.5 bg-ivory-50 rounded border border-gold-300/40 text-xs text-stone-600 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Check-In Time:</span>
                  <strong className="text-forest-950">{hotelData.policies.checkInTime}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Check-Out Time:</span>
                  <strong className="text-forest-950">{hotelData.policies.checkOutTime}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Parking:</span>
                  <strong className="text-emerald-800">Free Underground Valet</strong>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => openBooking(room.name)}
                  className="w-full shadow-md"
                >
                  Request This Room
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Inquire via WhatsApp
                </a>

                <a
                  href={`tel:${hotelData.contact.landline}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-stone-100 hover:bg-stone-200 text-charcoal-900 border border-stone-300 rounded text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  Call Front Desk ({hotelData.contact.landlineFormatted})
                </a>
              </div>

              <div className="text-[11px] text-stone-500 text-center border-t border-stone-100 pt-4">
                Official direct inquiry. No online payment card needed.
              </div>
            </div>
          </div>
        </div>

        {/* Related Rooms */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-950">Other Available Rooms</h3>
            <Link to="/rooms" className="text-xs uppercase tracking-wider font-semibold text-gold-600 hover:text-forest-950 transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedRooms.map((r) => (
              <div key={r.id} className="bg-white rounded-lg p-5 border border-stone-200 flex flex-col sm:flex-row gap-5 shadow-sm">
                <div className="sm:w-48 aspect-[16/10] rounded overflow-hidden shrink-0 bg-stone-100">
                  <img src={r.images[0]?.src} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between flex-grow space-y-2">
                  <div>
                    <h4 className="font-serif text-lg text-forest-950 font-medium">
                      <Link to={`/rooms/${r.slug}`} className="hover:text-gold-700">
                        {r.name}
                      </Link>
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-1">{r.subtitle}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-xs text-stone-600">{r.bedType}</span>
                    <Link to={`/rooms/${r.slug}`} className="text-xs font-semibold text-forest-900 hover:text-gold-600 uppercase tracking-wider">
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
