# Arizona Flat Roof Specialists Website

A professional, SEO-optimized website for a commercial flat roofing company serving all of Arizona. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Professional Design**: Modern, responsive design optimized for lead generation
- **SEO Optimized**: Schema markup, sitemap, and SEO best practices implemented
- **Lead Capture**: Comprehensive contact forms and call-to-action sections
- **Service Pages**: Detailed information about roofing services
- **Portfolio**: Showcase of completed projects
- **Customer Reviews**: Testimonials and review sections
- **Location Pages**: SEO-optimized pages for Arizona cities (structure ready)
- **Mobile Responsive**: Optimized for all device sizes

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd flat-roof-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── reviews/           # Reviews page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── Services.tsx       # Services overview
│   ├── WhyChooseUs.tsx    # Why choose us section
│   ├── Portfolio.tsx      # Portfolio showcase
│   ├── Reviews.tsx        # Customer reviews
│   ├── CTA.tsx            # Call-to-action
│   └── ContactForm.tsx    # Lead capture form
└── globals.css            # Global styles
```

## SEO Features

- **Schema Markup**: LocalBusiness schema implemented
- **Meta Tags**: Optimized titles, descriptions, and Open Graph tags
- **Sitemap**: Dynamic sitemap generation for all pages
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading structure and semantic elements
- **Image Optimization**: Next.js Image component for performance

## Services Covered

- Roof Coating Systems
- Roof Resurfacing
- Commercial Roof Maintenance
- Roof Repairs
- TPO Roofing
- EPDM Roofing
- Emergency Services

## Service Areas

The website is structured to serve all of Arizona with specific location pages for:
- Phoenix, Tucson, Mesa, Chandler
- Scottsdale, Glendale, Gilbert, Tempe
- And 12+ other Arizona cities

## Lead Generation Features

- **Contact Forms**: Comprehensive lead capture forms
- **Call-to-Actions**: Strategic placement throughout the site
- **Phone Numbers**: Prominent display for direct contact
- **Free Quote Requests**: Easy quote request process
- **Emergency Contact**: 24/7 emergency service contact

## Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization
- **Font Optimization**: Google Fonts with font display swap
- **Code Splitting**: Automatic code splitting for better performance
- **Static Generation**: Pre-rendered pages for faster loading

## Deployment Ready

The website is ready for deployment to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Customization

### Colors
The website uses a blue color scheme defined in Tailwind CSS:
- Primary: Blue-600 (#2563eb)
- Secondary: Blue-900 (#1e3a8a)
- Accent: Blue-300 (#93c5fd)

### Content
- Update company information in `src/components/Header.tsx` and `src/components/Footer.tsx`
- Modify services in `src/components/Services.tsx`
- Update contact information throughout the site
- Add real project images to replace placeholder icons

### SEO
- Update schema markup in `src/app/layout.tsx`
- Modify meta tags for each page
- Add real business address and phone numbers
- Update sitemap with actual domain

## License

This project is created for Arizona Flat Roof Specialists. All rights reserved.