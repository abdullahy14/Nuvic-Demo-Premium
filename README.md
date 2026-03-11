# Nuvic Demo Hub

Production-ready private Whop app built with Next.js App Router + TypeScript.

## Features
- Embedded Whop auth via incoming Whop user token header.
- Owner-only dashboard access (`OWNER_WHOP_USER_ID`).
- Company and experience guard helpers.
- Centralized Whop SDK wrappers under `lib/whop/*`.
- Dashboard, experience, discover, and Whop API routes.
- App sync scripts for Whop Developer Dashboard metadata.

## Setup
1. Clone the repo.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy env template and fill values from Whop Developer Dashboard:
   ```bash
   cp .env.example .env.local
   ```
4. Run locally:
   ```bash
   npm run dev
   ```
5. Deploy to Vercel.
6. Copy the Vercel production URL into `NEXT_PUBLIC_APP_URL` and Whop app Base URL.
7. Set Whop Dashboard path to `/dashboard/[companyId]`.
8. Set Whop Experience path to `/experiences/[experienceId]`.
9. Optionally set Discover path to `/discover`.

## Whop configuration scripts
- Print expected config:
  ```bash
  npm run whop:print-config
  ```
- Sync app metadata (safe dry run):
  ```bash
  npm run whop:sync-app -- --dry-run
  ```
- Sync and create if missing:
  ```bash
  npm run whop:sync-app -- --create-if-missing
  ```

## Publish to GitHub + Vercel
1. Push repository to GitHub.
2. Import project in Vercel.
3. Add all env vars in Vercel project settings.
4. Deploy production.
5. In Whop Developer Dashboard set:
   - Base URL: your Vercel production URL
   - Dashboard path: `/dashboard/[companyId]`
   - Experience path: `/experiences/[experienceId]`
   - Discover path: `/discover` (optional)

## Security notes
- Protected pages only read identity from server-side Whop token verification.
- Client-supplied user ids are ignored.
- Secrets remain in env vars and are redacted in internal logs.
