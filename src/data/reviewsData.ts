import { GuestReview } from '../types';

export const reviewsSummary = {
  aggregateRating: 4.6,
  totalReviews: 68,
  scale: 5.0,
  platform: 'Google Reviews',
  attributionText: 'Based on 68+ verified traveler reviews on Google Maps',
  googleMapsReviewUrl: 'https://maps.google.com/?q=Seven+Sky+Hotel+Murree',
  ratingBreakdown: [
    { stars: 5, percentage: 76 },
    { stars: 4, percentage: 16 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  aspectHighlights: [
    { name: 'Location & Mall Road Access', score: '4.8/5' },
    { name: 'Central Heating & Hot Water', score: '4.7/5' },
    { name: 'Underground Parking & Valet', score: '4.9/5' },
    { name: 'Elevator Access & Family Comfort', score: '4.7/5' },
    { name: 'Staff Hospitality & Prompt Service', score: '4.6/5' }
  ]
};

export const featuredReviews: GuestReview[] = [
  {
    id: 'rev-1',
    authorName: 'Tariq Mehmood',
    source: 'Google Reviews',
    rating: 5,
    relativeTime: 'Recent stay',
    stayType: 'Family Vacation',
    comment: 'One of the best experiences in Murree. The hotel is situated very close to GPO Chowk so you can walk to Mall Road easily. The underground parking and elevator made everything effortless for my elderly parents. Central heating worked flawlessly in the freezing weather.',
    isVerifiedSource: true
  },
  {
    id: 'rev-2',
    authorName: 'Shahid Khan',
    source: 'Google Reviews',
    rating: 5,
    relativeTime: 'Winter stay',
    stayType: 'Couple Trip',
    comment: 'Very neat and clean hotel in Murree. 24/7 hot water and heating was the biggest relief during winter snowfall. Staff was courteous and the room view from the balcony was serene. Highly recommended for couples and families.',
    isVerifiedSource: true
  },
  {
    id: 'rev-3',
    authorName: 'Dr. Ayesha Farooq',
    source: 'Google Reviews',
    rating: 5,
    relativeTime: 'Holiday stay',
    stayType: 'Family Stay',
    comment: 'Finding a hotel in Murree with dedicated parking is usually a headache, but Seven Sky Hotel has underground valet parking which solved everything. The family room was spacious and comfortable. Very peaceful atmosphere.',
    isVerifiedSource: true
  },
  {
    id: 'rev-4',
    authorName: 'Zubair Ahmed',
    source: 'Google Reviews',
    rating: 4,
    relativeTime: 'Weekend getaway',
    stayType: 'Leisure Trip',
    comment: 'Great location on Abid Majeed Road just 3 minutes away from GPO Chowk. Friendly management, fast room service, and hot tea was always available. Good backup generator when power went off in the hills.',
    isVerifiedSource: true
  }
];
