# Line Tech Solutions

A single-page site for **Line Tech Solutions**, a fictional two-person engineering
studio. Built with **Angular 22** (standalone, zoneless, signals) — no backend; the
team data ships with the app.

**Concept — _The Throughline_.** One luminous duotone line is the brand's signature:
in the hero it's a live signal trace, on the team page it links the two people, and on
a profile it becomes the career timeline — so a person's _personal history_ is literally
the line drawn out.

## Features

- **Home** — hero, capabilities, and a preview of the team.
- **Team** (`/team`) — the two members, side by side.
- **Profile** (`/team/:id`) — each member's profile with a **See personal history**
  button that reveals their career timeline. This is the core interaction.
- Fully responsive, keyboard-accessible, and honours `prefers-reduced-motion`.

## Tech

| | |
|---|---|
| Framework | Angular 22 (standalone components, signals, zoneless) |
| Routing | Lazy-loaded routes + route-param → component input binding |
| Styling | Hand-written SCSS design system (no UI library) |
| Data | In-memory `TeamService` — **no backend** |
| Node | ≥ 22.22.3 (see `.nvmrc`) |

## Local development

```bash
nvm use          # or: nvm install 22
npm install
npm start         # ng serve → http://localhost:4200/
```

Other scripts:

```bash
npm run build          # production build → dist/line-tech-solutions/browser
npm test               # unit tests (Vitest)
npm run build:ghpages  # production build for GitHub Pages (sets base-href + 404.html)
```

## Editing the team

The two workers and their histories live in one file:
[`src/app/core/team.data.ts`](src/app/core/team.data.ts). Add, remove, or edit
entries there — everything else (routes, cards, timeline) follows automatically.

---

## Deploying — free hosting

### Option A — Vercel (recommended)

The repo is pre-configured with [`vercel.json`](vercel.json) (build command, output
directory, and SPA rewrites). To deploy:

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to **vercel.com → Add New → Project** and import the repo.
3. Vercel reads `vercel.json` automatically — just click **Deploy**.

   > Framework preset: **Angular** · Output: `dist/line-tech-solutions/browser`.
   > These are already set in `vercel.json`; no manual configuration needed.

Every push to the repo then triggers an automatic production deploy. Deep links
(e.g. `/team/mara-lindqvist`) work on refresh thanks to the SPA rewrite rule.

Or deploy from your machine with the CLI:

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```

### Option B — GitHub Pages (fallback)

A workflow is included at
[`.github/workflows/deploy-gh-pages.yml`](.github/workflows/deploy-gh-pages.yml).

1. Push this project to a GitHub repo named **`line-tech-solutions`**.
   _(Using a different name? Update `build:ghpages` in `package.json` to match, so the
   base-href is correct. The workflow already derives it from the repo name automatically.)_
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. The workflow builds with the correct base-href, adds a `404.html`
   SPA fallback, and publishes to `https://<your-user>.github.io/line-tech-solutions/`.

> **User/organisation page or custom domain?** Those serve from the domain root, so
> build with a root base href instead: `ng build --base-href /` (and drop the repo-name
> path from the workflow's build step).
