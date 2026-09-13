# NICU Nutrition

Static rebuild of [nicunutrition.com](https://www.nicunutrition.com), a resource site helping mothers of preterm infants navigate breast milk feeding in the NICU.

## Structure

- `index.html`, `about.html`, `faq.html`, `resources.html`, `espanol.html` — the five site pages
- `assets/css/style.css` — shared styles
- `assets/js/main.js` — nav toggle, cookie banner, form stubs
- `assets/img/` — site imagery
- `assets/pdf/` — downloadable handouts
- `_source/` — original Word-exported HTML/docx files and raw media kept for reference; not part of the published site

## Running locally

No build step — open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploying to GitHub Pages

Push this folder to a GitHub repo and enable Pages on the `main` branch, root directory.
