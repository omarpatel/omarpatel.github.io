# omarpatel.github.io

Source for my site at [omarpatel.github.io](https://omarpatel.github.io/): what I build, with screenshots and links to the code.

Hand-written HTML and CSS, no framework, no build step, no trackers. Set in IBM Plex (self-hosted in `fonts/`). Follows the system light or dark theme.

## Files

| Path | Purpose |
|---|---|
| `index.html` | The whole page. Featured projects are `<article>` blocks under `#work`; index rows are `<details>` blocks under `#more` |
| `styles.css` | All styling |
| `lightbox.js` | Screenshot lightbox, the only script |
| `img/work/` | Project screenshots as `<repo>-720.webp` and `<repo>-1440.webp` |
| `fonts/` | IBM Plex Sans (roman variable 400–500, italic 400) and Plex Mono 400, latin subset |
| `favicon.svg`, `og.png` | Icon and 1200×630 link preview |

## Adding a project

Copy an existing `<article>` (with screenshot) or `<details>` row in `index.html`, then add its screenshots to `img/work/` at 1440 and 720 px wide (WebP, quality about 80).

## Running locally

```bash
python -m http.server 8000
```

GitHub Pages serves the `main` branch root.
