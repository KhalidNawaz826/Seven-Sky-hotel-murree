import { Room } from '../types';

export const roomsData: Room[] = [
  {
    id: 'deluxe-double-room',
    slug: 'deluxe-double',
    name: 'Deluxe Double Room',
    badge: 'Popular for Couples',
    subtitle: 'Warm, intimate retreat with private balcony and mountain breezes',
    shortDescription: 'Designed for couples or solo travelers seeking restful mountain relaxation with central heating, private balcony, and en-suite bath.',
    fullDescription: 'Our Deluxe Double Room provides a peaceful, warm haven after a day exploring Murree. Decorated in soothing mountain tones with rich wood textures, the room features a comfortable King-size bed, central heating for cozy winter evenings, a private en-suite bathroom with 24/7 hot shower, a dedicated work/vanity desk, and a private balcony overlooking the scenic pine ridges or Murree cityscape.',
    maxGuests: 2,
    adults: 2,
    children: 1,
    bedType: '1 King Bed or 1 Large Double Bed',
    roomSize: 'Configurable (Standard Double Layout)',
    view: 'Mountain & Hillside View / City View',
    featured: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        alt: 'Deluxe Double Room Interior with warm bedding and mountain light',
        caption: 'Spacious Deluxe Double with cozy mountain ambiance'
      },
      {
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Deluxe Room Bedding and interior finishes',
        caption: 'Plush bedding and warm lighting'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
        alt: 'En-suite modern bathroom with hot shower and toiletries',
        caption: 'En-suite bathroom with 24/7 hot water supply'
      }
    ],
    amenities: [
      { name: 'Central Heating', icon: 'Flame', highlight: true },
      { name: '24/7 Hot Water', icon: 'Droplets', highlight: true },
      { name: 'Free High-Speed Wi-Fi', icon: 'Wifi', highlight: true },
      { name: 'Flat-Screen Smart TV', icon: 'Tv' },
      { name: 'Private Balcony', icon: 'Sun' },
      { name: 'Private Bathroom & Shower', icon: 'Bath' },
      { name: 'Complimentary Toiletries & Slippers', icon: 'Sparkles' },
      { name: 'Electric Kettle & Tea Set', icon: 'Coffee' },
      { name: 'In-Room Dining Service', icon: 'Utensils' },
      { name: 'Elevator Access', icon: 'ArrowUpDown' }
    ],
    features: [
      'Private balcony with fresh Murree mountain air',
      'Central heating system active during chilly months',
      '24/7 power backup through heavy-duty generator',
      'Sound-insulated glass windows for peaceful sleep',
      'Direct telephone connection to 24h reception'
    ],
    pricingNote: 'Seasonal rates apply. Contact front desk for current best available rates.',
    isVerified: true
  },
  {
    id: 'deluxe-family-suite',
    slug: 'deluxe-family',
    name: 'Deluxe Family Suite',
    badge: 'Family Favorite',
    subtitle: 'Generous multi-bed layout tailored for family holidays in Murree',
    shortDescription: 'Spacious suite designed for family travel, offering multiple beds, dedicated seating lounge, central heating, and panoramic views.',
    fullDescription: 'Our Deluxe Family Suite is thoughtfully designed to accommodate families exploring Murree together. Offering ample space for parents and children, this suite includes multiple sleeping configurations, an inviting sitting area for evening family tea, full central heating, continuous hot water, and large windows bringing the majestic Murree pine panoramas right inside your room.',
    maxGuests: 5,
    adults: 4,
    children: 2,
    bedType: '1 King Bed + 2 Single Beds (or 2 Queen Beds)',
    roomSize: 'Configurable (Family Suite Layout)',
    view: 'Panoramic Murree Pine Ridge & Valley View',
    featured: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Deluxe Family Suite layout with comfortable beds and seating',
        caption: 'Family suite with ample space and cozy atmosphere'
      },
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
        alt: 'Cozy seating area and family bedding in suite',
        caption: 'Comfortable family lounge and bedding'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
        alt: 'Clean family bathroom with fresh towels and hot water',
        caption: 'Clean private bathroom with hot water'
      }
    ],
    amenities: [
      { name: 'Central Heating', icon: 'Flame', highlight: true },
      { name: 'Family Lounge Seating', icon: 'Sofa', highlight: true },
      { name: '24/7 Hot Water', icon: 'Droplets', highlight: true },
      { name: 'Free High-Speed Wi-Fi', icon: 'Wifi', highlight: true },
      { name: 'Large Smart TV with Channels', icon: 'Tv' },
      { name: 'Multiple Wardrobes & Storage', icon: 'Archive' },
      { name: 'Balcony with Panoramic View', icon: 'Sun' },
      { name: 'En-suite Bathroom & Amenities', icon: 'Bath' },
      { name: 'Electric Kettle & Tea Kit', icon: 'Coffee' },
      { name: 'Elevator Access', icon: 'ArrowUpDown' }
    ],
    features: [
      'Multi-bed layout tailored for 4 to 5 family members',
      'Comfortable living/seating area for family gatherings',
      'Uninterrupted heating and hot water during winter snowfall',
      'Underground valet parking included with reservation',
      'Elevator access directly from lobby and parking'
    ],
    pricingNote: 'Seasonal rates apply. Contact front desk for family package rates.',
    isVerified: true
  },
  {
    id: 'executive-mountain-balcony',
    slug: 'executive-balcony',
    name: 'Executive Mountain View Room',
    badge: 'Panoramic Vista',
    subtitle: 'Elevated luxury with expansive mountain balcony and premium finishes',
    shortDescription: 'Premium room featuring sweeping vistas of Murree’s pine hills, private sun terrace balcony, central heating, and executive work desk.',
    fullDescription: 'Perched on the higher floors of Seven Sky Hotel, the Executive Mountain View Room offers an elevated retreat above the clouds. Step out onto your private balcony with morning kahwa while taking in the crisp pine breeze and sweeping mountain scenery. Equipped with premium bed linens, silent central heating, modern en-suite bath, and dedicated concierge service, this room is the ideal choice for discerning travelers.',
    maxGuests: 2,
    adults: 2,
    children: 1,
    bedType: '1 Premium King Bed',
    roomSize: 'Configurable (Executive Layout)',
    view: 'Panoramic Murree Pine Forest & Mountain Vista',
    featured: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
        alt: 'Executive Mountain View Room with private balcony and natural light',
        caption: 'Executive room with panoramic view of Murree hills'
      },
      {
        src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
        alt: 'King bed with soft lighting and mountain view window',
        caption: 'Peaceful luxury overlooking the hills'
      },
      {
        src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
        alt: 'Executive bathroom vanity and hot shower',
        caption: 'En-suite bath with premium amenities'
      }
    ],
    amenities: [
      { name: 'Panoramic Hill Balcony', icon: 'Mountain', highlight: true },
      { name: 'Central Heating', icon: 'Flame', highlight: true },
      { name: '24/7 Hot Water', icon: 'Droplets', highlight: true },
      { name: 'Free High-Speed Wi-Fi', icon: 'Wifi', highlight: true },
      { name: 'Executive Work Desk', icon: 'Briefcase' },
      { name: 'Smart Flat-Screen TV', icon: 'Tv' },
      { name: 'Tea & Coffee Amenities', icon: 'Coffee' },
      { name: '24-Hour Room Service', icon: 'Utensils' },
      { name: 'In-Room Safe', icon: 'Shield' },
      { name: 'Direct Elevator Access', icon: 'ArrowUpDown' }
    ],
    features: [
      'High-floor private balcony with uninterrupted mountain view',
      'Enhanced room soundproofing for tranquil relaxation',
      '24/7 auxiliary generator power backup',
      'Express check-in and luggage valet assistance',
      'Underground secure parking'
    ],
    pricingNote: 'Seasonal rates apply. Inquire for current rates and honeymoon packages.',
    isVerified: true
  }
];
