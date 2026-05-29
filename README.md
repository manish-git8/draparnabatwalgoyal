# Dr. Aparna Batwal Goyal — Website

Next.js static site for Dr. Aparna Batwal Goyal (radiology practice).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to `out/`.

## Deploy (Cloudflare Pages)

See [DEPLOY.md](./DEPLOY.md). Summary:

- **Build command:** `npm run build`
- **Output directory:** `out`

```bash
npx wrangler login
npm run pages:deploy
```
