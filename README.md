# CraftNest PoC

Proof-of-concept marketplace for handcrafted furniture built as a Laravel + Vue SPA scaffold.

## Included

- Product blueprint and architecture in `docs/product-blueprint.md`
- Laravel-style mock API scaffold in `backend/`
- Vue SPA scaffold in `frontend/`
- Realistic JSON mock datasets in `backend/mock-data/`
- Vercel-ready serverless mock API in `frontend/api/`

## Suggested next steps

1. Create a real Laravel app in `backend/` and move the controllers/routes into framework structure.
2. Run the Vue app in `frontend/` with `npm install` and `npm run dev`.
3. Point the SPA at a running Laravel server on `http://localhost:8000`.

## Vercel deployment

- Import the GitHub repository into Vercel.
- Set the Root Directory to `frontend`.
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

The demo frontend now uses Vercel serverless endpoints via `/api/*`, so it can run on Vercel without a separate Laravel deployment.
