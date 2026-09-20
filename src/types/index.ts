export interface HotelLocation {
  address: string;
  landmark: string;
  city: string;
  district: string;
  province: string;
  postalCode: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  googlePlaceUrl?: string;
  embedMapUrl: string;
}

export interface HotelContact {
  landline: string;
  landlineFormatted: string;
  mobile: string;
  mobileFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
}

export interface HotelTrustMetrics {
  googleRating: number;
  googleReviewCount: number;
  ratingScale: number;
  attribution: string;
}

export interface HotelPolicy {
  checkInTime: string;
  checkOutTime: string;
  frontDeskHours: string;
  cancellationPolicy: string;
  parkingPolicy: string;
  petsPolicy: string;
  heatingPolicy: string;
}

export interface HotelInfo {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  location: HotelLocation;
  contact: HotelContact;
  trustMetrics: HotelTrustMetrics;
  policies: HotelPolicy;
}

export interface RoomAmenity {
  name: string;
  icon: string;
  highlight?: boolean;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  maxGuests: number;
  adults: number;
  children: number;
  bedType: string;
  roomSize?: string;
  view: string;
  featured: boolean;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  amenities: RoomAmenity[];
  features: string[];
  pricingNote: string;
  isVerified: boolean;
}

export interface HotelAmenityItem {
  id: string;
  name: string;
  category: 'comfort' | 'accessibility' | 'service' | 'dining' | 'connectivity';
  description: string;
  icon: string;
  highlight: boolean;
  isVerified: boolean;
}

export interface MurreeAttraction {
  id: string;
  name: string;
  urduName?: string;
  category: 'nature' | 'heritage' | 'viewpoint' | 'recreation';
  approxDistance: string;
  approxDriveTime: string;
  routeNote: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAlt: string;
}

export interface GuestReview {
  id: string;
  authorName: string;
  source: 'Google Reviews' | 'Booking.com' | 'Verified Guest';
  rating: number;
  relativeTime: string;
  stayType?: string;
  comment: string;
  isVerifiedSource: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'views' | 'hotel' | 'dining';
  src: string;
  alt: string;
  caption: string;
}

export interface BookingInquiryData {
  checkIn: string;
  checkOut: string;
  roomType: string;
  adults: number;
  children: number;
  roomsCount: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  notes?: string;
}
