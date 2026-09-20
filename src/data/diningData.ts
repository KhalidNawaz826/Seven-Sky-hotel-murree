export interface DiningService {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  hours: string;
  image: string;
  imageAlt: string;
}

export const diningData: {
  overview: string;
  services: DiningService[];
  highlights: string[];
  specialties: { category: string; description: string; items: string[] }[];
} = {
  overview: 'At Seven Sky Hotel Murree, dining is an extension of traditional Pakistani mountain hospitality. Whether you are savoring a piping hot cup of cardamom tea overlooking the mist-laden pine hills, enjoying breakfast before heading to Mall Road, or gathering for an evening family dinner, our kitchen focuses on freshly prepared halal meals and comfort dishes.',
  highlights: [
    'Freshly cooked Halal Pakistani specialties',
    'Morning breakfast with continental & local options',
    'Round-the-clock hot mountain chai & Peshawari kahwa',
    'Prompt in-room dining service for all guest floors',
    'Terrace seating with mountain forest panorama'
  ],
  services: [
    {
      id: 'restaurant-dining',
      name: 'Seven Sky Restaurant',
      subtitle: 'Warm indoor dining room with mountain hospitality',
      description: 'Our family-friendly restaurant offers a cozy indoor dining ambiance heated during winter months. Guests can gather for hearty meals cooked fresh upon order.',
      features: [
        'Heated indoor family dining hall',
        'Traditional Pakistani chicken & mutton karahi',
        'Continental breakfast spreads',
        'Courteous table service'
      ],
      hours: 'Breakfast: 7:30 AM – 10:30 AM | All-Day Dining: 12:30 PM – 11:00 PM',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Warm hotel dining room with atmospheric ambient lighting'
    },
    {
      id: 'room-service-dining',
      name: 'In-Room Dining',
      subtitle: 'Comfort dining delivered right to your door',
      description: 'After an energetic day exploring Murree’s hill tracks and shopping bazaars, relax in your room while our staff serves hot snacks, dinners, or late-night tea directly to your door.',
      features: [
        'Direct phone ordering from room',
        'Hot tea, kahwa & snacks delivered fast',
        'Breakfast in bed service',
        'Private dining on your room balcony'
      ],
      hours: 'Available 7:00 AM – 11:30 PM (Hot Beverages 24/7)',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Fresh morning breakfast served with tea in a cozy mountain room'
    },
    {
      id: 'terrace-tea',
      name: 'Pine Breeze Terrace Lounge',
      subtitle: 'Chai & coffee with crisp Himalayan mountain breezes',
      description: 'Step out onto the open-air terrace to enjoy Murree’s crisp morning air or watch the sunset over the valley while sipping hot doodh patti chai or green tea.',
      features: [
        'Panoramic mountain ridge view',
        'Freshly brewed Karak chai and green kahwa',
        'Outdoor seating with mountain blankets available on request',
        'Photo-worthy mountain sunset viewpoint'
      ],
      hours: 'Open daily weather permitting: 8:00 AM – 10:00 PM',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Outdoor terrace dining overlooking scenic mountain hills'
    }
  ],
  specialties: [
    {
      category: 'Breakfast',
      description: 'Start your mountain morning right with eggs to order, parathas, toast, butter, jam, and piping hot chai.',
      items: ['Fresh Omelettes & Fried Eggs', 'Crispy Golden Parathas', 'Toast with Butter & Preserves', 'Fresh Chana / Halwa (Seasonal)', 'Doodh Patti & Green Kahwa']
    },
    {
      category: 'Pakistani Classics',
      description: 'Authentic local comfort cuisine prepared with halal ingredients and aromatic spices.',
      items: ['Chicken Karahi (Freshly Cooked)', 'Mutton Handi', 'Chicken Biryani & Pulao', 'Daal Makhni / Special Daal', 'Fresh Tandoori Roti & Naan']
    },
    {
      category: 'Chai & Snacks',
      description: 'Quintessential Murree hillside snacks to warm up chilly afternoons and snowy evenings.',
      items: ['Special Murree Karak Chai', 'Kashmiri Pink Tea (Seasonal)', 'Peshawari Green Kahwa', 'Pakoras & Vegetable Samosas', 'Club Sandwiches & French Fries']
    }
  ]
};
