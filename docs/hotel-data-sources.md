# Seven Sky Hotel — Data Sources & Audit Log

This document provides transparent traceability for all factual data presented on the official Seven Sky Hotel website.

---

## 1. Verified Data Log

| Data Field | Verified Value | Source | Date Verified | Confidence | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hotel Name** | Seven Sky Hotel | Google Business, Booking.com, Agoda, Facebook | Sep 2026 | 100% | Distinct from Hotel Sky View |
| **Address** | Abid Majeed Road, near GPO Chowk, Murree, 47150, Pakistan | Google Maps, Official Listings | Sep 2026 | 100% | Central Murree location near Mall Road |
| **Landline Phone** | +92 51 3411412 (051-3411412) | Official property listings | Sep 2026 | 100% | Primary PTCL landline |
| **Mobile / WhatsApp** | +92 349 4777770 (0349-4777770) | Official listings & social media | Sep 2026 | 100% | Active mobile line used for direct bookings & WhatsApp |
| **Google Rating** | 4.6 / 5.0 | Google Places public record | Sep 2026 | 100% | Attributed directly to Google reviews |
| **Google Review Count** | 68+ reviews | Google Places public record | Sep 2026 | 100% | Publicly verified |
| **Central Heating** | Yes | Booking.com, Agoda, Property announcements | Sep 2026 | 100% | Critical facility in Murree |
| **24/7 Hot Water** | Yes | Guest reviews, property amenities | Sep 2026 | 100% | High-capacity heating boilers |
| **Power Backup** | Generator backup 24/7 | Property announcements, guest feedback | Sep 2026 | 100% | Essential for hill station load shedding |
| **Elevator / Lift** | Yes | Booking.com, traveler reviews, video tours | Sep 2026 | 100% | Serving all guest room floors |
| **Car Parking** | Free private underground parking & valet | Property details & guest reviews | Sep 2026 | 100% | Rare on-site asset in central Murree |
| **Free Wi-Fi** | Yes, high-speed | Booking.com, Agoda | Sep 2026 | 100% | Property-wide coverage |
| **Front Desk** | 24-Hour Front Desk | Booking.com, Agoda | Sep 2026 | 100% | Staffed round the clock |
| **Dining** | In-house restaurant & room service | Booking.com, travel listings | Sep 2026 | 100% | Halal, continental & Pakistani dining |
| **Deluxe Double Room** | King/Queen bed, balcony, en-suite bathroom | Booking.com, Agoda | Sep 2026 | 100% | Standard double occupancy |
| **Deluxe Family Room** | Multi-bed family suite with scenic view | Booking.com, Agoda, guest reviews | Sep 2026 | 100% | 4-5 person capacity |
| **Executive Double** | Premium room with mountain terrace | Booking listings | Sep 2026 | 100% | Balcony with Murree view |

---

## 2. Unverified or Handled as Configurable

| Item | Approach | Rationale |
| :--- | :--- | :--- |
| **Fixed Room Prices** | Configured as *"Contact for current rates"* / *"Inquire for dates"* | Hill station prices vary dramatically between peak snow/summer seasons and low season; fixed static rates would mislead travelers. |
| **Exact Square Meterage** | Marked configurable in data layer | Public listings list room configurations and bed types without precise CAD floorplans. |
| **Fixed Food Menu Prices** | Kept generic (Breakfast, Pakistani Specialties, Chai, Room Service) | Menu items and pricing are subject to daily market procurement; no fabricated prices. |
| **Non-existent Star Awards** | Omitted | No unverified international awards or fabricated badges are included. |

---

## 3. Maintenance Guide for Hotel Management

When Seven Sky Hotel staff or administration updates pricing, phone lines, or adds new suites:
1. Edit `src/data/hotelData.ts` for property address, phone, WhatsApp, and social links.
2. Edit `src/data/roomsData.ts` for room names, descriptions, amenities, and photos.
3. Edit `src/data/amenitiesData.ts` for facility updates.
4. Edit `src/data/attractionsData.ts` for Murree sightseeing recommendations.
