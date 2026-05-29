# Deploy to Cloudflare Pages (draparnabatwalgoyal.pages.dev)

This site is a **static Next.js export** (no server required).

## Cloudflare Dashboard settings

**Settings → Build:**

| Setting | Value |
|--------|--------|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

Do **not** use OpenNext or `npx wrangler deploy` for this Pages project.

## Deploy from terminal (after `npx wrangler login`)

```bash
npm run pages:deploy
```

## Retry

Push to `main` or click **Retry deployment** in Cloudflare.
