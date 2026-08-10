# Udara

Marketing site for **Udara** — a WhatsApp-based strict savings agent by [Udara Technologies](https://udara.app).

Udara helps people in Nigeria understand spending, hard-lock outbound transfers from 7PM until morning, and build savings discipline without installing another app.

## What’s in this repo

- Public landing page (hero, product story, how it works, reviews, security, FAQ)
- Instant account block / unblock flows
- Newsletter subscribe API route
- SEO basics (metadata, sitemap, robots, JSON-LD)

## Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI | React 19 + Tailwind CSS v4 |
| Deploy target | Node / Vercel-compatible |
| Analytics | Vercel Web Analytics + Speed Insights |

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/Safayaikechukwu/udara.git
cd udara
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and adjust as needed:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (no trailing slash). Defaults to `https://udara.app`. |

Do not commit `.env` or `.env.local`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/                 # Routes, layout, global styles, API
  account/           # Block / unblock account pages
  api/subscribe/     # Newsletter endpoint
components/          # Page sections and shared UI
lib/                 # Site config and copy
public/              # Static assets (brand, mockups, logos)
```

Marketing copy lives in `lib/copy.ts`. Site metadata and canonical URL live in `lib/site.ts`.

## Key routes

| Path | Purpose |
| --- | --- |
| `/` | Marketing landing page |
| `/account/block` | Freeze a Udara account |
| `/account/unblock` | Unfreeze a Udara account |
| `/api/subscribe` | Newsletter signup |

## License

Private — All rights reserved.
