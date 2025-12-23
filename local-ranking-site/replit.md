# RankTracker Pro - Marketing Website

## Overview
A professional SaaS marketing website for a Google Maps rank tracking product. Built with Next.js (App Router) and TypeScript, focusing on SEO-first architecture.

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Rendering**: SSR/SSG for SEO optimization

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles with Tailwind
│   ├── features/
│   │   └── page.tsx    # Features page
│   ├── pricing/
│   │   └── page.tsx    # Pricing page
│   ├── blog/
│   │   └── page.tsx    # Blog placeholder
│   └── contact/
│       └── page.tsx    # Contact page
└── components/
    ├── Header.tsx      # Navigation header
    └── Footer.tsx      # Site footer
```

## Pages
1. **Home (/)** - Main landing page with Hero, How It Works, Core Features, FAQ, and CTA sections
2. **Features (/features)** - Product features breakdown
3. **Pricing (/pricing)** - 3-tier pricing plans
4. **Blog (/blog)** - Placeholder for future content
5. **Contact (/contact)** - Contact form and info

## Recent Changes (Dec 17, 2025)
- Refactored homepage for early-stage SaaS launch
- Removed fake stats section (no user counts or testimonials)
- Added "How It Works" 3-step section
- Added comprehensive FAQ section (7 questions) for SEO
- Updated CTAs with "No credit card required" messaging
- Hero: Primary CTA "Start Free Trial", Secondary "View Features"
- All copy is honest, educational, and non-salesy
- All "Start Free Trial" buttons link to app signup URL (https://app.example.com/signup)
- Added new feature page: /features/geo-grid-rank-tracking
  - Targeting keywords: geo grid rank tracking, google maps grid ranking, local seo grid rank tracker
  - Sections: Problem intro, What is geo grid, How it works, Benefits, Who it's for, Capabilities, Visual placeholder, CTA

## Running the Project
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server
```

## SEO Features
- Next.js Metadata API on all pages
- Semantic HTML structure
- Internal linking
- SEO-friendly URLs
- Schema.org ready structure

## User Preferences
- Clean, minimal design
- No heavy animations
- Professional SaaS aesthetic
- Mobile-responsive layout
