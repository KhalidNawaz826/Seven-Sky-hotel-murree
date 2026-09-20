import { HotelAmenityItem } from '../types';

export const amenitiesData: HotelAmenityItem[] = [
  {
    id: 'central-heating',
    name: 'Central Heating System',
    category: 'comfort',
    description: 'Continuous radiator central heating keeping all guest rooms and corridors warm and cozy during Murree’s freezing winter snowfall and chilly autumn nights.',
    icon: 'Flame',
    highlight: true,
    isVerified: true
  },
  {
    id: 'hot-water',
    name: '24/7 Hot Water Supply',
    category: 'comfort',
    description: 'High-capacity commercial water heating ensures instant, piping-hot showers around the clock, no matter how cold the mountain weather.',
    icon: 'Droplets',
    highlight: true,
    isVerified: true
  },
  {
    id: 'elevator',
    name: 'Passenger Elevator / Lift',
    category: 'accessibility',
    description: 'A dedicated elevator connects all guest floors to the lobby and parking, ensuring effortless access for elderly family members, young children, and heavy luggage.',
    icon: 'ArrowUpDown',
    highlight: true,
    isVerified: true
  },
  {
    id: 'power-backup',
    name: '24/7 Generator Backup',
    category: 'comfort',
    description: 'Heavy-duty automatic backup generator ensures continuous lighting, heating, TV, elevator, and Wi-Fi operation during hill station grid outages.',
    icon: 'Zap',
    highlight: true,
    isVerified: true
  },
  {
    id: 'underground-parking',
    name: 'Free Underground Parking & Valet',
    category: 'service',
    description: 'Secure, protected on-site underground parking garage with dedicated valet assistance—an invaluable convenience in congested central Murree.',
    icon: 'Car',
    highlight: true,
    isVerified: true
  },
  {
    id: 'wifi',
    name: 'Free High-Speed Wi-Fi',
    category: 'connectivity',
    description: 'Reliable wireless internet accessible across all guest rooms, public lounge areas, restaurant, and outdoor terraces.',
    icon: 'Wifi',
    highlight: true,
    isVerified: true
  },
  {
    id: 'front-desk',
    name: '24-Hour Front Desk & Reception',
    category: 'service',
    description: 'Warm, attentive front office staff available 24 hours a day for late check-in, local route navigation, extra blankets, and concierge assistance.',
    icon: 'Clock',
    highlight: true,
    isVerified: true
  },
  {
    id: 'restaurant',
    name: 'In-House Restaurant & Dining',
    category: 'dining',
    description: 'Serving hot breakfast, Pakistani delicacies, continental favorites, and traditional mountain chai prepared fresh in a hygienic kitchen.',
    icon: 'UtensilsCrossed',
    highlight: true,
    isVerified: true
  },
  {
    id: 'room-service',
    name: 'In-Room Dining & Room Service',
    category: 'dining',
    description: 'Enjoy steaming chai, breakfast in bed, or evening dinner delivered directly to your room or private balcony.',
    icon: 'Coffee',
    highlight: false,
    isVerified: true
  },
  {
    id: 'mountain-balcony',
    name: 'Mountain View Terraces & Balconies',
    category: 'comfort',
    description: 'Open-air vantage points offering panoramic views of Murree’s pine forests, valley mist, and crisp Himalayan mountain air.',
    icon: 'Mountain',
    highlight: true,
    isVerified: true
  },
  {
    id: 'family-friendly',
    name: 'Family-Friendly Accommodations',
    category: 'comfort',
    description: 'Thoughtfully planned family suites with multiple beds, quiet soundproofed rooms, and child-safe environments.',
    icon: 'Users',
    highlight: false,
    isVerified: true
  },
  {
    id: 'housekeeping',
    name: 'Daily Housekeeping & Fresh Linens',
    category: 'service',
    description: 'Thorough daily room servicing, fresh crisp linens, sanitization, and complimentary bathroom toiletries.',
    icon: 'Sparkles',
    highlight: false,
    isVerified: true
  }
];
