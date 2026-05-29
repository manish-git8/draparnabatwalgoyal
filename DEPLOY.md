# Cloudflare Deploy Setup

## Production branch

Use **`main`** (or **`master`**) — both are synced on GitHub.

## Required build settings (Workers + OpenNext)

In Cloudflare Dashboard → **Workers & Pages** → `draparnabatwalgoyal` → **Settings** → **Build**:

| Setting | Value |
|--------|--------|
| Production branch | `main` |
| Build command | `npm run build:cloudflare` |
| Deploy command | `npm run deploy:cloudflare` |

Do **not** use:

- `npm run build` alone (only runs Next.js, no `.open-next` bundle)
- `npx wrangler deploy` alone (wrong flow for OpenNext)

## One-command deploy (alternative)

| Build command | `npm run deploy` |
| Deploy command | *(leave empty)* |

## Bindings check

In **Bindings**, `WORKER_SELF_REFERENCE` must point to service **`draparnabatwalgoyal`** (not `dr-aparna-website`).

## Manual deploy from terminal

```bash
npm install
npm run deploy
```

Requires `wrangler login` first.

## Retry after failure

1. Save build settings above
2. **Deployments** → **Retry deployment**
3. Or push an empty commit: `git commit --allow-empty -m "trigger deploy" && git push origin main`
