# Tarun Singh Gohil — Portfolio

Personal portfolio website: one page, four resume profiles, plus a work
gallery. Static HTML/CSS/JS with no build step.

- **`index.html`** — the main site. The header switches between
  **Frontend**, **Full stack** (with a **MERN** / **Python & AI** track toggle)
  and **Product manager**. Each profile shows its resume in full: summary,
  every experience point, projects, technical skills and education, with a
  matching resume PDF download.
- **`portfolio.html`** — the frontend portfolio gallery: 38 production websites
  and 40 UI/UX & logo design studies with a lightbox. Linked from the Frontend
  profile.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8765
# http://127.0.0.1:8765/
```

Direct links: `index.html?profile=frontend`, `?profile=fullstack`,
`?profile=python-ai`, `?profile=product` (short forms: `fe`, `fs`, `ai`, `pm`),
and `portfolio.html#design` for the design gallery.

## Editing content

| To change… | Edit |
| --- | --- |
| Resume text (summary, experience, projects, skills, education) | `js/profiles.js` |
| Gallery websites and design images | `js/portfolio-items.js` |
| Layout, styles, behaviour | `index.html` / `portfolio.html` |

After updating a resume, run `npm run check:resume` (needs `pdftotext`) to
confirm every resume passage is on the site.

See [AGENTS.md](AGENTS.md) for the full architecture, data schema and
conventions, and [docs/CONTENT-MAP.md](docs/CONTENT-MAP.md) for how each
resume section maps to the page.
