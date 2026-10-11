# Axiomra website

Marketing site and lead inbox for Axiomra.

- **`client/`**: React 18 single-page app built with Vite. Uses Tailwind, framer-motion, GSAP and
  three.js (via @react-three/fiber). Deployed to Cloudflare Pages as a static site.
- **`server/`**: Express + Mongoose API. Deployed to Render as a long-running Node web service
  (`npm start`, i.e. `server/index.js`). It stores contact-form leads in MongoDB, emails a notification, and
  serves the admin panel's API.

The site (Cloudflare Pages) and the API (Render, `https://axiomra-backend-server.onrender.com`) are on
different origins. The API allows the site through CORS
and an Origin check (see [Security](#security)).

## Requirements

- Node.js 22 or newer
- A MongoDB database. A local `mongod` or an Atlas cluster both work. Tests do not need one.

## Getting started

```bash
npm install             # root: Prettier, husky, lint-staged (installs the git hook)
npm run setup           # installs client/ and server/

cp server/.env.example server/.env   # then set MONGO_URI (and JWT_SECRET for the admin panel)

npm run dev:server      # API on http://localhost:5000
npm run dev:client      # site on http://localhost:5173
```

Under `vite dev`, the client calls the local API at `http://localhost:5000`. The site renders
without the API; only the contact form and the admin panel need it.

## Scripts

Run these from the repository root:

| Command | What it does |
|---|---|
| `npm run dev:client` / `npm run dev:server` | Development servers |
| `npm run build` | Production build of the client (see below) |
| `npm run lint` | ESLint for client and server |
| `npm test` | Vitest suites for client and server |
| `npm run format` | Prettier over the whole repo (the hook formats only staged files) |

Inside `client/`, `ANALYZE=1 npm run build` also writes a bundle treemap to `client/stats.html`.

### Client build

`npm run build` fails without `VITE_API_URL`. That value is compiled into the bundle, so a
build without it would ship a contact form that posts nowhere.

```bash
VITE_API_URL=https://axiomra-backend-server.onrender.com npm run build
```

The build runs these steps:

1. `vite build`
2. `scripts/generate-sitemap.mjs`: writes `dist/sitemap.xml` from `src/seo/sitemapRoutes.js`
   and creates `dist/404.html`. Fails if a sitemap URL matches a rule in
   `client/public/_redirects`, which would replace its prerendered page.
3. `scripts/prerender.mjs`: renders every sitemap URL to static HTML.
4. `scripts/check-seo.mjs`: checks the head tags of each prerendered page.
5. `scripts/check-csp.mjs`: fails if an inline script or the API origin is missing from the
   Content-Security-Policy in `client/public/_headers`.

## Deployment

| Piece | Service | Notes |
|---|---|---|
| Site | Cloudflare Pages | Root `client/`, build command `npm run build`, output `dist`. Set `VITE_API_URL` in the Pages build environment. Headers come from `client/public/_headers`, SPA rewrites and redirects from `client/public/_redirects`. |
| API | Render | Node web service, root `server/`, start command `npm start`. Health check: `GET /api/health`. Environment variables in the service settings (see below). |
| Database | MongoDB Atlas | `MONGO_URI`. Production database `axiomra`. |
| Shared store | Upstash Redis | `REDIS_URL` (`rediss://`), for rate limits and the chat spend counter. |
| Email | Resend | `RESEND_API_KEY`, `MAIL_FROM`, `CONTACT_NOTIFY_TO`. |

Render's free tier sleeps when idle, so the first request after a pause can take up to a
minute.

## Environment variables

### Server

`server/.env` locally; the Render service's Environment settings in production. `server/.env.example` documents
each variable.

The server validates these at startup (`server/lib/env.js`). A bad value stops the API with a
message that names the variable (fail closed for `ALLOWED_ORIGINS` and `REDIS_URL`). Email
settings (`RESEND_API_KEY`, `ADMIN_PANEL_URL`) only warn, so a mail misconfiguration can never
take the API down.

| Variable | Required | Notes |
|---|---|---|
| `MONGO_URI` | yes | Must be a hosted URI in production |
| `ALLOWED_ORIGINS` | yes in production | Comma-separated origins. `*` may stand for part of one hostname label; a bare `*` is refused. `CLIENT_ORIGIN` is the older name and is still read. |
| `JWT_SECRET` | for the admin panel | At least 32 characters. If unset, admin sign-in answers 503 and the rest of the API keeps working. |
| `ADMIN_PANEL_URL` | no | Base of the password-reset link; one URL, e.g. `https://axiomra.co`. A list or invalid value logs a warning and the first valid entry is used. Defaults to the first allowed origin. |
| `RESEND_API_KEY` | for email | Resend key (`re_...`) for lead and password-reset email. Missing or malformed only warns: leads are still stored and forgot-password answers 503. |
| `MAIL_FROM`, `CONTACT_NOTIFY_TO` | no | Sender (default `Axiomra <onboarding@resend.dev>`) and the inbox for lead notifications. |
| `REDIS_URL` | yes in production | Shared store for rate limits and the chat spend counter. |

### Client

| Variable | Notes |
|---|---|
| `VITE_API_URL` | API origin, no trailing slash. Required for `build`. |

## Admin panel

The admin panel lives at `/admin` on the site. It lists, edits and exports leads. There is no
sign-up and exactly one admin account, `michael.axiomra@gmail.com` (`adminEmail()` in
`server/models/User.js`); the model refuses to save any other or a second one. From `server/`
with a MongoDB connection in the environment:

```bash
node scripts/seed-admin.js                    # creates the admin, or resets its password
node scripts/set-recovery-key.js --from-env   # stores PASS_KEY from server/.env as the key
```

Every script that writes to MongoDB (`seed-admin`, `set-recovery-key`, `ingest`,
`migrate-status-to-progress`) prints the target database first and refuses the production
database `axiomra` unless `--prod` is passed. Local development uses `axiomra_dev`.

The recovery key (`PASS_KEY`) is required for every password change: the emailed reset, the
signed-in change (`POST /api/auth/change-password` takes `recoveryKey`) and `seed-admin.js`.
Without it the password cannot be changed. Only its hash is stored. Replacing or clearing it
with `set-recovery-key.js` asks for the current key; `--generate` prints a new random one.
In `.env`, quote `PASS_KEY` with backticks if it contains `"` or `'`.

## Security

- **Sessions:** the admin session is an httpOnly cookie. The site (`axiomra.co`) and the API
  (`onrender.com`) are different sites, so the cookie must be
  `SameSite=None; Secure`.
- **CSRF:** unsafe requests (POST, PUT, PATCH, DELETE) that carry an unlisted `Origin` are
  refused.
- **Rate limits** (`server/lib/rateLimit.js`):

  | Endpoint | Limit |
  |---|---|
  | API overall | 100 / 15 min |
  | Sign-in | 5 / 15 min |
  | Password reset | 8 / 15 min |
  | Forgot-password | 10 / h per IP, and 3 / h per address |
  | Contact form | 5 / h |

  If the store fails, the credential endpoints fail closed and the rest fail open.
- **Contact form spam:** submissions with a filled honeypot field, or sent faster than a person
  could type, get a success response but are neither stored nor emailed.
- **Client headers:** `client/public/_headers` sets a strict CSP, HSTS, `X-Frame-Options`,
  `nosniff`, `Referrer-Policy` and `Permissions-Policy`. Adding a third-party script, image
  host or API means updating the CSP there. The build check catches inline scripts and the API
  origin.

## Tests and CI

- **Client** (`client/src/**/*.test.jsx`, jsdom + Testing Library): the contact form, the 404
  page and the SEO head tags.
- **Server** (`server/tests/`, supertest + mongodb-memory-server): CORS, the CSRF check,
  contact storage and spam traps, admin sign-in and protected routes, rate limits, and env
  validation. Each test file starts its own in-memory MongoDB, and `server/.env` is never
  loaded.

`.github/workflows/ci.yml` runs four jobs on pull requests and on pushes to `main`: `lint`,
`test-client`, `test-server` and `build`. For the build, set a repository variable
`VITE_API_URL` to use a different API origin.

The pre-commit hook (husky + lint-staged) runs ESLint and Prettier on staged files.

## Project layout

```
client/
  src/pages/          one component per route (lazy-loaded)
  src/components/     sections and UI; *Canvas.jsx are the three.js scenes
  src/data/           page copy and content
  src/routes.constants.js   route paths and slugs (kept out of the data files so the
                            entry chunk does not pull in page content)
  src/seo/            <Seo> head tags, JSON-LD builders, sitemap route list
  scripts/            build-time sitemap, prerender, SEO and CSP checks
  public/_headers     security and cache headers (Cloudflare Pages)
  public/_redirects   SPA rewrites and redirects (Cloudflare Pages)
server/
  app.js              Express app: CORS, CSRF check, rate limits, routes
  index.js            server entry (Render runs `npm start`; also used for local dev)
  api/index.js        legacy Vercel function entry, unused since the move to Render
  lib/                env validation, auth, rate limiting, input sanitising
  routes/  models/    API routes and Mongoose models
  scripts/            admin account and recovery-key tools
docs/CASE_STUDY_GUIDE.md   how to add a case study
```
