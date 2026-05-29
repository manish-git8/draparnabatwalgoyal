This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Workers

In Cloudflare project **Settings → Build**, use:

In Cloudflare project **Settings → Build**, use exactly:

- **Build command:** `npm run build:cloudflare`
- **Deploy command:** `npm run deploy:cloudflare`

Important:
- Do **not** set `npm run build` as Cloudflare build command (that is only `next build`).
- Do **not** use `npx wrangler deploy`.
- `opennextjs-cloudflare build` internally runs `npm run build` (`next build`), then creates `.open-next`.

Worker name and self-binding are configured in `wrangler.jsonc` as `draparnabatwalgoyal`.
