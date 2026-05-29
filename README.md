# Dr. Aparna Batwal Goyal — Website

Static Next.js site for Dr. Aparna Batwal Goyal (Senior Radiologist, SNG Hospital Indore).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Output folder: `out/` (upload this to Cloudflare Pages).

## Deploy to Cloudflare Pages

| Setting | Value |
|--------|--------|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |

See [DEPLOY.md](./DEPLOY.md) for details.

Optional CLI deploy (after `npx wrangler login`):

```bash
npm run pages:deploy
```

## Project structure

- `src/app/` — pages and layout
- `src/components/` — UI components
- `src/data/` — services, FAQs, blogs, reviews, doctor gallery
- `public/` — images, logo, static assets (served in production)
