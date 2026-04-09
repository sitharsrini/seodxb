# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## SEODXB Website Clone

A pixel-faithful clone of seodxb.com — a Dubai-based SEO agency site. Artifact: `artifacts/seodxb` at preview path `/`.

**Key Details:**
- Font: Plus Jakarta Sans (font-black, tracking-[-0.03em] for headings)
- Colors: primary #1D64FF, accent #C8FF00 (marquee), green #00B831 (badge)
- Logo: `@assets/SEODXB_HD_1775726631117.webp` — portrait image; displayed with `objectFit: cover, objectPosition: center 50%, width: 180px, height: 36px` to crop correctly in navbar/footer; wider 220×44 in hero card
- WhatsApp floating button: wa.me/971521551198 — fixed bottom-right green circle in App.tsx
- Pages: Home, About, Blog, Pricing, Contact
- Pricing: white cards, plane icons, STARTUP ($999), BUSINESS ($2,999 + "Popular" badge), CUSTOM (services list). Add-on "new website +$799" in STARTUP card. "2 Spots Left" above STARTUP.
- Hero: left = headline + CTA; right = card with logo banner + carousel testimonials (embla-carousel, 4s auto-rotate)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
