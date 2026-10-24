# Liangteng Guo — academic portfolio

React + Vite portfolio. This first review implements the homepage with responsive navigation, a conceptual 3D metamaterial illustration, research cards, and honest placeholders for missing academic evidence. Supporting sections are scaffolded for the next iteration. No mockup publication or metric has been treated as verified.

## Local preview

Requires Node.js 20.19+ or 22.12+ and pnpm 10 (or npm).

```sh
pnpm install
pnpm dev
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173). Leave the terminal running; Ctrl+C stops it. Alternatively use `npm install` and `npm run dev`.

```sh
pnpm build
pnpm preview
```

## Edit independently

- `src/data/profile.js`: name, affiliations, statement, research areas, publications, metrics, expertise, experience, contact links and CV path.
- `public/assets/images/`: portrait and research imagery. Research-card SVGs and the generated 3D hero are conceptual illustrations, not scientific results. Set profile.heroImage to replace the homepage image. Add a professional portrait and set `profile.portrait`. The initials currently shown are an explicit placeholder.
- `public/assets/documents/`: verified CV PDF; set `profile.cv` to its relative asset path. Download appears only when configured.
- `src/components/`: header, hero, illustration and supporting sections.
- `src/styles.css`: colours, typography, animations and responsive layouts.

Image and document paths in data are relative to `public/`, without a leading slash. This preserves GitHub project Pages paths. Links remain inactive until supplied. Dates, contact details, publication records, impact evidence, metrics and personal profile URLs still need to be provided. Add metrics with a source and an as-of date in `note`; do not use sample values as evidence. UQ/RMIT logos are official assets downloaded from their university websites; source URLs are recorded in public/assets/logos/SOURCES.md.

Publication example schema (replace with a verified record):

```js
{ title: 'Verified title', authors: 'Verified author list', journal: 'Journal', year: 2026, doi: 'DOI', url: null, featured: true }
```

## GitHub Pages deployment

1. Push this project to your GitHub repository.
2. In repository **Settings → Pages**, select **GitHub Actions** as the source.
3. Run the included **Deploy portfolio to GitHub Pages** workflow manually from the Actions tab. Choose the branch containing the completed site.
4. The workflow installs locked dependencies, builds `dist/`, uploads it and deploys to Pages. GitHub displays the resulting URL.

`vite.config.js` uses `base: './'`, so both user Pages and repository Pages work. Navigation uses section anchors and needs no SPA redirect. Deployment is manual to preserve the current local-review stage. No site has been published.

The Google-hosted fonts have local sans-serif fallbacks. The site works without the font service. Before using this site as supporting material for any application, replace placeholders and review every factual claim against your own records.

