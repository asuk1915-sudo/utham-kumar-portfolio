# Utham Kumar — Technology Leadership Portfolio

A modern, deployment-ready portfolio for a senior technology program and product
leader. It replaces the former Wix site with a focused narrative around engineering
delivery systems, enterprise AI, secure digital platforms, and portfolio transformation.

## What is included

- Executive leadership home page
- Engineering Intelligence Lab portfolio
- Release Intelligence case study
- Three editorial leadership perspectives
- Responsive design and accessible semantic structure
- Open Graph image, sitemap, robots policy, security headers, and legacy redirects
- GitHub Actions validation
- Native Vercel deployment plus an optional Sites fallback target

All company-specific details are anonymized. All showcased project data is synthetic.

## Local development

Requirements: Node.js 22 and pnpm 10.28.1.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm check
```

The check runs linting, TypeScript validation, the native Next.js build, the optional
Sites build, and rendered-output tests.

## Deploy to Vercel

1. Push this directory to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Accept the detected Next.js settings; no environment variables are required.
4. Deploy. Every pull request receives a preview and `main` becomes production.
5. Set `NEXT_PUBLIC_SITE_URL` to the final production origin before attaching a
   custom domain, so sitemap links use the canonical address.

The repository includes `vercel.json` and pins Node.js 22 for repeatable builds.

## Wix cutover

See [docs/MIGRATION_AUDIT.md](docs/MIGRATION_AUDIT.md) for the content decisions and
cutover boundary. The Wix-owned `kumar1612.wixsite.com/mysite` address cannot itself
be moved to Vercel; use an owned custom domain for the permanent destination.

## Versioning

- `v1.0.0` — Wix migration, leadership narrative, portfolio case study, insights,
  deployment and quality controls.
- `v1.1.0` — planned custom-domain cutover, verified production analytics, and
  expanded Engineering Intelligence Lab project coverage.

## License and content

Source code may be adapted for personal use. Personal biography, writing, brand assets,
and generated visual identity remain © Utham Kumar Anugula Sethupathy.
