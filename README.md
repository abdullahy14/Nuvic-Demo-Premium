# Nuvic Demo Hub

Production-grade Next.js application for a premium interactive demo hub + marketplace + recommendation-driven upsell system.

## Included Modules

- Landing/welcome conversion experience
- Demo Hub dashboard with prompt explorer and asset preview
- Smart recommendation engine (rule + weighted scoring)
- Nuvic Marketplace with seeded product catalog
- Product detail pages with ratings/reviews + upsell messaging
- Flagship Full Nuvic Creative System page
- Favorites/review/analytics API route stubs
- Full admin CMS navigation and management modules
- Prisma schema for users, prompts, assets, products, bundles, rules, analytics, content
- Seed scripts for products, prompts (30), assets (12), and reviews

## Stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth-ready role model (ADMIN/EDITOR/VIEWER)
- Recharts-compatible analytics data model

## Run

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run seed
npm run dev
```

## Conversion Strategy Embedded

- Partial-lock premium prompts with unlock percentages
- Included-in-full-system badges and compare messaging
- Persistent full-system CTA throughout user-facing surfaces
- Recommendation signals based on categories, saves, copies, and browse depth
- Admin-adjustable rules, offers, bundles, and page content
