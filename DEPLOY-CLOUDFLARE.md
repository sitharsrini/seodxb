# Deploying to Cloudflare Pages (seodxb.com)

## Important: Root Directory Setting

In your Cloudflare Pages project settings, you **must** set:

- **Root directory**: `artifacts/seodxb`

If this is left blank, Cloudflare will try to build the wrong project (the Next.js one at the repo root) and the deploy will fail with OpenNext / Worker binding errors.

## Recommended Cloudflare Pages Settings

- **Root directory**: `artifacts/seodxb`
- **Build command**: `cd ../.. && pnpm install --frozen-lockfile && cd artifacts/seodxb && pnpm run build`
- **Build output directory**: `dist/public`
- **Framework preset**: None (or Vite)

## Local Testing

```bash
cd artifacts/seodxb
pnpm install
pnpm run build
pnpm run serve
```

## GitHub Integration

Push to the `add-40-new-pages` branch (or merge to main) and Cloudflare will automatically deploy if GitHub integration is connected.

## Notes

- The project uses pnpm workspaces at the monorepo root.
- The Vite config has been made compatible with non-Replit environments.
- All new SEO pages are included in the `keywordPages.ts` data file.
