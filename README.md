# Seven Sky Hotel, Murree — Official Website

> **A production-grade, editorial hospitality website for Seven Sky Hotel (Murree, Pakistan).**  
> Built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide React. Designed around real verified public information, luxury mountain branding, mobile responsiveness, and scalable inquiry architecture.

---

## 1. Project Overview

Seven Sky Hotel is centrally located on **Abid Majeed Road near GPO Chowk, Murree (Postal Code 47150, Pakistan)**. The property combines comfortable hillside stays with critical mountain infrastructure often missing in hill stations: **central heating, continuous 24/7 hot water, passenger elevator/lift, heavy-duty 24/7 power backup, and secure underground valet parking**.

This website was built to hospitality editorial standards. It rejects generic card templates in favor of tailored layouts, verified hotel data, transparent pricing policies, accessible UX, and mobile thumb-friendly workflows.

---

## 2. Key Features

* **Editorial Mountain Retreat Design:** Custom color tokens inspired by deep pine forests (`#17352D`), warm ivory stone (`#FAF8F5`), and warm brass accents (`#B49A63`).
* **Verified Public Information:** Strictly adheres to researched public data from Google Places, Booking.com, and official channels. No fabricated room types, fake awards, or made-up prices.
* **Hero Fast Inquiry Bar:** Check-in, Check-out, Room Preference, and Guest counter seeding direct reservation requests.
* **Verified Google Trust Indicators:** Highlights Google Rating **4.6 / 5.0 (68+ reviews)** with explicit attribution and links to public Google reviews.
* **Rooms & Suites Showcase:** Full specs for **Deluxe Double Room**, **Deluxe Family Suite**, and **Executive Mountain View Room**, with image galleries, capacity, bedding, and verified amenities.
* **Interactive Lightbox Photo Gallery:** Filterable by category (All, Rooms, Views, Hotel, Dining) with keyboard navigation (Left/Right/ESC) and captions.
* **Explore Murree Destination Guide:** Realistic driving/walking times to Mall Road (2-5 min walk), Kashmir Point, Pindi Point, Patriata Cable Car, and Ayubia Pipeline Track.
* **Interactive Location & Directions:** Verified physical address, embedded Google Map, and step-by-step route guidance from Islamabad (N-75 Expressway).
* **Multi-Channel Booking Inquiry Flow:** Guests can send direct availability requests via web form or generate formatted WhatsApp messages to `+92 349 4777770`.
* **Mobile-First UX:** Sticky mobile bottom bar with instant click-to-call (`+92 51 3411412` and `+92 349 4777770`), WhatsApp chat, and book actions.
* **Complete Technical SEO:** Title tags, Meta descriptions, OpenGraph social previews, Twitter cards, XML Sitemap (`/sitemap.xml`), `robots.txt`, and Schema.org `Hotel` JSON-LD structured data.
* **Accessibility:** Semantic HTML5, accessible modals with keyboard traps, ARIA attributes, high-contrast typography, and reduced-motion support.

---

## 3. Technology Stack

* **Core:** React 18, TypeScript, Vite 5
* **Styling:** Tailwind CSS 3 with custom hospitality design system
* **Routing:** React Router v6
* **Icons:** Lucide React
* **Structured Data:** Schema.org `Hotel` JSON-LD
* **Build & Bundle:** Rollup (via Vite) + TypeScript strict checks

---

## 4. Project Directory Structure

```text
Seven Sky Hotel Murree/
├── docs/
│   ├── hotel-research.md             # Verified audit of hotel information
│   └── hotel-data-sources.md          # Traceable data sources and audit log
├── public/
│   ├── favicon.svg                   # Custom mountain hotel SVG icon
│   ├── robots.txt                    # Search engine crawler directives
│   └── sitemap.xml                   # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── common/                   # Reusable UI (Button, Badge, Modal, SEO, Heading)
│   │   ├── layout/                   # Header, Footer, MobileBottomBar, Layout
│   │   ├── home/                     # Homepage editorial sections
│   │   ├── rooms/                    # RoomCard & room filters
│   │   ├── gallery/                  # Fullscreen interactive Lightbox
│   │   ├── booking/                  # BookingInquiryForm & BookingInquiryModal
│   │   └── location/                 # MapEmbed & transit guide
│   ├── data/
│   │   ├── hotelData.ts              # Single source of truth for hotel NAP & config
│   │   ├── roomsData.ts              # Verified room categories & amenities
│   │   ├── amenitiesData.ts          # Verified building & comfort amenities
│   │   ├── diningData.ts             # Restaurant, room service, chai terrace
│   │   ├── attractionsData.ts        # Murree sights with accurate drive times
│   │   ├── reviewsData.ts            # Public aggregate ratings & guest reviews
│   │   └── galleryData.ts            # Categorized photography with captions
│   ├── hooks/
│   │   └── useScrollPosition.ts      # Header background transition hook
│   ├── pages/                        # 14 complete route pages
│   ├── types/
│   │   └── index.ts                  # Centralized TypeScript definitions
│   ├── utils/
│   │   ├── formatters.ts             # Date and string formatters
│   │   └── whatsapp.ts               # Formatted WhatsApp inquiry generator
│   ├── App.tsx                       # Route configurations
│   ├── index.css                     # Tailwind layers and custom styling
│   └── main.tsx                      # Vite React entrypoint
├── .env.example
├── index.html                        # Semantic HTML with Schema.org & Meta tags
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Local Development Setup

### Prerequisites
* Node.js v18+ (tested on Node v24)
* npm v9+

### Installation Steps
```bash
# 1. Clone or navigate to the repository
cd "d:/Projects/Seven Sky Hotel Murree"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 6. Environment Variables

Copy `.env.example` to `.env.local` to override runtime variables:

```env
VITE_SITE_URL=https://sevenskyhotel.pk
VITE_HOTEL_NAME=Seven Sky Hotel
VITE_HOTEL_LANDLINE=+92 51 3411412
VITE_HOTEL_MOBILE=+92 349 4777770
VITE_HOTEL_WHATSAPP=+923494777770
VITE_HOTEL_ADDRESS=Abid Majeed Road, near GPO Chowk, Murree, 47150, Pakistan
VITE_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?...
```

---

## 7. Production Build & Deployment

```bash
# Compile TypeScript and generate optimized production bundle
npm run build

# Preview the built distribution locally
npm run preview
```

The output in `dist/` is statically hostable on platforms such as:
* **Vercel** / **Netlify** / **Cloudflare Pages** (with SPA rewrite rule `/* -> /index.html`)
* **AWS S3 + CloudFront**
* **Traditional Apache / Nginx Web Servers**

---

## 8. Hotel Information Management (CMS Roadmap)

All hotel text, policies, room listings, photos, and phone numbers are centralized in `src/data/`:

| To Update... | Modify File... |
| :--- | :--- |
| Hotel Phone, Address, Check-in hours | `src/data/hotelData.ts` |
| Room types, bed counts, descriptions | `src/data/roomsData.ts` |
| Hotel facilities, heating, parking | `src/data/amenitiesData.ts` |
| Dining options, restaurant hours | `src/data/diningData.ts` |
| Murree sightseeing guide & times | `src/data/attractionsData.ts` |
| Photo gallery images & categories | `src/data/galleryData.ts` |
| Google review metrics | `src/data/reviewsData.ts` |

This architecture ensures hotel managers can easily connect a headless CMS (Sanity, Strapi, or Supabase) without refactoring UI components.

---

## 9. Booking & Reservation Flow

1. **Inquiry Entry Points:**
   * Hero Booking Bar on Homepage
   * "Book Your Stay" button in sticky Header
   * "Request Room" button on each Room card / Room detail page
   * Mobile bottom bar "Book Stay" button
2. **Inquiry Modal:**
   * Pre-seeds requested room, dates, and guest count.
   * Dispatches direct WhatsApp message formatted with room, dates, and guest name to `+92 349 4777770`.
   * Or submits to internal inquiry storage with validation.
   * Clearly communicates that rates in Murree are seasonal and no card is charged upfront.

---

## 10. Source Verification & Policy Compliance

All factual data is audited in [`docs/hotel-data-sources.md`](docs/hotel-data-sources.md) and [`docs/hotel-research.md`](docs/hotel-research.md):
* **Hotel Name:** Seven Sky Hotel
* **Location:** Abid Majeed Road, near GPO Chowk, Murree, 47150, Pakistan
* **Landline:** `+92 51 3411412` (051-3411412)
* **Mobile / WhatsApp:** `+92 349 4777770` (0349-4777770)
* **Google Rating:** 4.6 / 5.0 (68+ Google reviews)
* **Verified Features:** Central heating, 24/7 hot water, elevator, generator backup, underground private parking, free Wi-Fi, restaurant, and mountain view balconies.
