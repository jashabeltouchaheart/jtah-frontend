# JTAH Foundation

## Structure

```
jtah-frontend/   Next.js 14 · TypeScript · Tailwind · GSAP · Lenis
jtah-studio/     Sanity Studio v3
```

## Repository conventions

This repository contains two independent apps. Install dependencies and run
scripts from the app directory you are working in; do not place frontend pages
inside the Studio app or Studio schemas inside the frontend app.

### Frontend (`jtah-frontend`)

- `src/app/` contains Next.js App Router routes and route-level metadata. Add a
  page at `src/app/<route>/page.tsx`; keep route files focused on loading data
  and composing page sections.
- `src/components/<feature>/` contains components used by a specific feature
  or page (for example `home/` and `gallery/`). Put reusable primitives in
  `src/components/ui/`, and site chrome in `src/components/layout/`.
- `src/lib/` contains framework-independent helpers, constants, and types.
  Keep shared feature rules in one module rather than duplicating them across
  route files.
- `src/sanity/` owns Sanity client configuration, queries, image helpers, and
  fetching. Keep CMS access out of presentational components.
- `src/hooks/` contains reusable React hooks; `public/` contains static assets.
- Use the `@/` alias for imports from `src/`. Use TypeScript types for data
  crossing route/component boundaries and keep components named for their
  purpose.

### Studio (`jtah-studio`)

- `schemaTypes/` owns Sanity document and object schemas.
- `sanity.config.ts` and `sanity.cli.ts` own Studio configuration and CLI
  project settings.

## Environment setup



### jtah-frontend

```bash
cd jtah-frontend
cp .env.example .env.local
# Fill in YOUR JTAH values from sanity.io/manage
npm install
npm run dev
```



### jtah-studio

```bash
cd jtah-studio
cp .env.example .env.local
# Fill in YOUR JTAH values from sanity.io/manage
npm install
npm run dev   # opens Studio at localhost:3333
```

---
