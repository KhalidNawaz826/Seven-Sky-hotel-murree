import { HotelInfo } from '../types';

export const hotelData: HotelInfo = {
  id: 'seven-sky-hotel-murree',
  name: 'Seven Sky Hotel',
  tagline: 'Warm Mountain Comfort in the Heart of Murree',
  shortDescription: 'Centrally located on Abid Majeed Road near GPO Chowk, Seven Sky Hotel offers serene mountain stays equipped with essential hill conveniences: central heating, elevator, underground valet parking, and 24/7 backup power.',
  longDescription: [
    'Nestled in the tranquil pine-lined hills of Murree, Seven Sky Hotel blends the scenic beauty of Pakistan’s most beloved hill station with the warmth of genuine mountain hospitality.',
    'Just minutes away from the vibrant energy of GPO Chowk and Mall Road, the hotel provides a peaceful sanctuary where guests can relax above the clouds. Thoughtfully designed with central heating for cold winter nights, continuous hot water, round-the-clock generator backup, a guest elevator, and secure private parking, every detail is tailored for family comfort and effortless leisure.'
  ],
  location: {
    address: 'Abid Majeed Road, near GPO Chowk',
    landmark: 'Near GPO Chowk & Mall Road Junction',
    city: 'Murree',
    district: 'Rawalpindi / Murree District',
    province: 'Punjab',
    postalCode: '47150',
    country: 'Pakistan',
    coordinates: {
      lat: 33.9065,
      lng: 73.3905
    },
    googleMapsUrl: 'https://maps.google.com/?q=Seven+Sky+Hotel+Murree+Abid+Majeed+Road',
    googlePlaceUrl: 'https://maps.google.com/?q=Seven+Sky+Hotel+Murree',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.381363297595!2d73.3905!3d33.9065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb3c2e17282b%3A0x8e8202ebaa1e028b!2sSeven%20Sky%20Hotel!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk'
  },
  contact: {
    landline: '+92 51 3411412',
    landlineFormatted: '051-3411412',
    mobile: '+92 349 4777770',
    mobileFormatted: '0349-4777770',
    whatsapp: '+923494777770',
    whatsappFormatted: '+92 349 4777770',
    email: 'info@sevenskyhotel.pk'
  },
  trustMetrics: {
    googleRating: 4.6,
    googleReviewCount: 68,
    ratingScale: 5.0,
    attribution: 'Based on 68+ verified traveler reviews on Google'
  },
  policies: {
    checkInTime: '14:00 (2:00 PM)',
    checkOutTime: '12:00 (12:00 PM)',
    frontDeskHours: '24 Hours / 7 Days a week',
    cancellationPolicy: 'Cancellation policies vary depending on season and promotional rate. Contact front desk directly for details.',
    parkingPolicy: 'Free private underground parking available for staying guests. Valet service provided.',
    petsPolicy: 'Pets are not allowed on the property to maintain hygiene and guest comfort.',
    heatingPolicy: 'Central heating is active during autumn and winter months to ensure optimal guest warmth.'
  }
};
