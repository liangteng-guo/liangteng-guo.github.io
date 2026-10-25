# Liangteng Guo — academic portfolio

A React + Vite single-page academic portfolio, rebuilt from the approved blue-white preview. All content sections share one responsive grid. Sticky navigation scrolls to each section. No external deployment is performed by the local development workflow.

## Preview locally

Requires Node.js 20.19+ or 22.12+, and pnpm 10.

```sh
pnpm install
pnpm dev
```

Open the URL printed by Vite. Production verification:

```sh
pnpm build
pnpm preview
```

npm is also supported (`npm install`, `npm run dev`), but the supplied GitHub workflow uses the committed pnpm lockfile.

## Edit the content independently

| File | Content |
| --- | --- |
| `src/data/profile.js` | Profile, links, affiliations, image paths, expertise, experience, Scholar metrics and yearly citation counts |
| `src/data/publications.json` | Publication records; journal articles, conference papers and thesis are separately typed |
| `public/assets/images/` | Research illustrations, homepage background and optional portrait |
| `public/assets/logos/` | Original university logo files and source URLs |
| `public/assets/documents/` | Optional CV PDF |
| `src/styles.css` | The single active stylesheet: typography, colours, layout and media queries |

Replace the portrait by adding an image and setting `profile.portrait = 'assets/images/portrait.jpg'`. The initials are an explicit placeholder, not an invented portrait. Set `profile.cv = 'assets/documents/liangteng-guo-cv.pdf'` to enable download. Add your email to `profile.links.email`. Until supplied, CV and email remain visibly unavailable; LinkedIn provides a working contact route.

Asset paths in data are relative to `public/` with no leading slash. This keeps assets working on GitHub project Pages as well as user Pages.

## Components

`Header.jsx` handles mobile navigation and section tracking; `Hero.jsx` handles profile and research interests. `Research.jsx`, `Publications.jsx`, `Impact.jsx`, `CitationChart.jsx`, `Experience.jsx` and `Contact.jsx` each own their sections. `App.jsx` defines their order.

The previous `readability.css`, `Sections.jsx` and `WaveIllustration.jsx`, if present in an older checkout, are obsolete and not imported. Edit only the active files above.

## Academic data and accuracy

The supplied Scholar screenshots list **19 journal articles, one conference paper and one thesis**. The top publication count is calculated from records typed `journal-article`; it is not a claim about SCI indexing or independent publisher validation of every record.

Citation metrics follow the user-confirmed snapshot: **213 citations, h-index 8, i10-index 8**. Annual counts: 2020=2, 2021=3, 2022=4, 2023=11, 2024=31, 2025=47, 2026=115. These sum to 213. The comparison (115 / 47 − 1) is approximately **145%**; 2026 is explicitly year to date compared with the entire 2025 calendar year. This is not a same-date year-over-year comparison or a forecast.

The capture date is not supplied. Set `impact.snapshotDate` only when confirmed. Metrics are editable snapshots; linking Scholar does not update them automatically. Article-level citation counts are omitted because the supplied screenshots need not represent the same snapshot as the aggregate metrics.

Publication titles, author abbreviations, years and venues follow the supplied list; DOI links were cross-checked against ORCID and/or publisher pages where available. The phase-transition review has a Scholar year of 2025 and a journal issue year of 2026; this difference is explicitly noted. Two records (one journal article and the thesis) use labelled Scholar searches until a verified permanent record is supplied. A DOI opens the publisher record and does not promise free full-text access.

The ORCID was matched through the public author record. Google Scholar and LinkedIn URLs were supplied by the researcher. No awards, exact appointment dates or new position titles have been inferred. Scientific imagery is conceptual, not simulation or experimental data.

## GitHub Pages

1. Upload the project contents to your GitHub repository, including `.github/workflows/deploy.yml`. Do not upload node_modules, dist, .local, design previews or test screenshots.
2. Open **Settings → Pages** and select **GitHub Actions** as the source.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
4. The workflow installs locked dependencies, builds dist and publishes it. On your user repository the site is https://liangteng-guo.github.io/.

Deployment is manual. After edits, commit the files and run the workflow again. `base: './'` and anchor navigation support both user and project Pages without SPA route rewrites. Online edits do not automatically synchronize your local working copy.

The local production build and browser checks cover 1440, 1024, 768, 390 and 320px widths; common left/right edges, image loading, anchor navigation, publication search and filters, full list expansion, empty results, mobile menu and keyboard chart interactions.
