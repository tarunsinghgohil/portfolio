# AGENTS.md — Tarun Singh Gohil portfolio website

Guide for AI coding agents (Claude Code, Copilot, Cursor, Codex, etc.) working
in this repository. Read this before editing anything.

## What this is

A static personal portfolio for **Tarun Singh Gohil** (Jaipur, India). It is
plain HTML/CSS/vanilla JS — **no framework, no bundler, no build step**. Pages
open directly from disk or any static host (the git remote is
`github.com/tarunsinghgohil/portfolio`).

The main page presents **four resumes as switchable profiles**:

| Top tab (header)  | Track (sub-toggle) | Profile key | Resume PDF (repo root)                          |
| ----------------- | ------------------ | ----------- | ----------------------------------------------- |
| Frontend          | –                  | `frontend`  | `Tarun-Singh-Gohil-Frontend-Resume-2026.pdf`    |
| Full stack        | MERN stack         | `fullstack` | `Tarun-Singh-Gohil-Full-Stack-Resume-2026.pdf`  |
| Full stack        | Python & AI        | `python-ai` | `Tarun-Singh-Gohil-Python-AI-Resume-2026.pdf`   |
| Product manager   | –                  | `product`   | `Tarun-Singh-Gohil-PM-Resume-2026.pdf`          |

The owner's requirement: **every point of every resume appears on the site** —
full professional summary, every experience bullet, projects, all technical
skills, education. Do not summarise, shorten or drop resume content.

## File map

```
index.html                 Main single-page site: CSS (inline <style>), markup
                           skeleton, and the render script (inline <script>).
portfolio.html             Frontend portfolio gallery (websites + UI/UX/logo
                           designs, lightbox). Linked from the Frontend profile.
js/profiles.js             ALL profile content (window.PROFILES). Edit content here.
js/portfolio-items.js      Gallery data (window.PORTFOLIO) used by both pages.
scripts/check-resume-coverage.js
                           Verifies every resume passage is in js/profiles.js.
docs/CONTENT-MAP.md        Resume section → data field → page section mapping.
Tarun-Singh-Gohil-*-2026.pdf  The four resumes (download buttons link to these).
img/                       logo + gallery images (img/screenshot/, img/old-work/,
                           img/hibru-template/ — see "Known gaps").
TLV stem/                  A small static site shown in the gallery.
prep.html, prep/*.html,    Interview-prep notes and demo pages. NOT part of the
AI-Startup.html, DealFlow.html, School.html   portfolio — do not restyle them.
privacy-policy.html        Standalone policy page.
Tarun-Singh-Gohil-Resume-2025.pdf   Old resume, not linked anywhere.
```

## How index.html works

1. `js/portfolio-items.js` and `js/profiles.js` load first and define globals.
2. The inline script calls `apply(key)`, which:
   - sets `<body data-mode="key">` — this swaps the colour theme via CSS
     (`body[data-mode='python-ai'] { --cyan: …; --violet: … }`),
   - writes simple text fields by element id (the array inside `apply()`),
   - calls `render(p)` to rebuild stats, summary, capabilities, experience
     timeline, GenAI section, projects, skills, pipeline, education, and to
     show/hide optional sections,
   - points every `.resume` link at `p.resume`.
3. Section kicker numbers (`01 / …`) are computed by `number()` from the
   visible sections, so hiding a section never leaves a gap.

**URL state:** the active profile is stored in `?profile=<key>` (via
`history.replaceState`), so section anchors like `#skills` keep working.
Accepted on load: `?profile=frontend|fullstack|python-ai|product`, aliases
`fe, fs, mern, ai, python, pm`, and legacy hashes (`#fullstack`, `#pm`).
Examples: `index.html?profile=product#experience`, `index.html#ai`.

**Full stack track memory:** clicking the "Full stack" tab reopens whichever
track (MERN or Python & AI) was last chosen.

**Optional sections** — shown only when the profile has the data:
- `#genai` (Generative AI & AI engineering) — when `genai` is not `null`
  (currently only `python-ai`).
- `#portfolio` teaser + the "Portfolio" nav links — when `portfolio: true`
  (currently only `frontend`, per the owner's request).

## Profile schema (`js/profiles.js`)

Each entry in `window.PROFILES`. **R** = copied verbatim from the resume;
**S** = website copy (free to edit).

| Field | Type | Notes |
| --- | --- | --- |
| `tab` | `'frontend' \| 'fullstack' \| 'product'` | Which header tab highlights. |
| `track` | string \| null | Track label when `tab === 'fullstack'`. |
| `id` | `'01'…'04'` | Shown on the hero console card. |
| `star` | `'r,g,b'` | Starfield particle colour; match the CSS theme. |
| `title` | string | `document.title`. |
| `headline` **R** | string | Resume title line (under the name, and summary card label). |
| `role`, `console`, `mode`, `focus`, `one`, `two`, `years`, `meta`, `label` **S** | string | Hero + console card + footer text. |
| `resume` | filename | PDF for all download buttons. |
| `portfolio` | boolean | Show the portfolio teaser + nav link. |
| `hero`, `stats`, `manifestTitle`, `manifest`, `signal` **S** | | Hero paragraph, 4 stat tiles `[value, label]`, philosophy card. |
| `summary` **R** | string | Full PROFESSIONAL SUMMARY. |
| `capKicker`, `capTitle`, `capCopy` **S** | string | Capability section heading. |
| `caps` | `[title, text, chips[]][]` | **S** except `product`, where these are the resume's 7 PRODUCT MANAGEMENT CAPABILITIES (**R**, chips empty). |
| `experienceTitle`, `experienceCopy` **S** | string | Experience heading. |
| `jobs` **R** | array | See below. |
| `genai` **R** | `{title, copy, points[]}` \| null | `points` verbatim; `title`/`copy` are S. |
| `projectKicker`, `projectTitle`, `projectCopy` **S** | string | Projects heading (kicker mirrors the resume's section name). |
| `projects` **R** | array | `{id, name, type, text?, points?, stack?}`. |
| `skillKicker`?, `skillTitle`, `skillCopy` **S** | string | Skills heading (`skillKicker` defaults to "Technical skills"). |
| `skillGroups` **R** | `[title, items[], note?][]` | Every category and every item from the resume. |
| `archTitle`, `archCopy`, `pipeline`, `toolsTitle`, `tools` **S** | | "Build philosophy" board. |
| `education` **R** | `[degree, school, dates][]` | Degree + senior secondary. |
| `languages` **R** | string[] | |
| `closeTitle`, `closeCopy` **S** | string | Closing call to action. |

`jobs[]` entries:

```js
{
  group: 'Earlier product & web experience', // optional divider shown above this job
  dates: 'Aug 2025 – Aug 2026',
  title: 'Lead Developer',
  company: 'Growit.ai Technology Private Limited · Jaipur',
  tagline: '…',                                // optional italic line under company
  points: [
    'Plain bullet, with **bold** phrases allowed.',
    { text: 'Bullet with a numbered sub-list:', sub: ['…', '…'] },
  ],
  extra: { title: 'Key Product Area: …', points: ['…'] }, // optional boxed block
}
```

### Text rules

- All text is HTML-escaped by the renderer (`esc()`), so `&`, `<`, quotes are
  safe as-is. **Never put HTML tags in profile data.**
- `**phrase**` renders as `<strong>` (mirrors the bold phrases in the PDFs —
  used in the Frontend bullets and the Python & AI summary). Works in
  `summary`, `jobs[].points`, sub-points, `genai.points`, `projects[].text`
  and `projects[].points`.
- Use the typographic apostrophe `’` (e.g. `Bachelor’s`) so single-quoted JS
  strings need no escaping.
- Dates use `Mon YYYY – Mon YYYY` with an en dash.

## Common tasks

**Update a resume bullet** → edit the string in `js/profiles.js` under the
right profile + job. Keep wording identical to the PDF. Run
`npm run check:resume`.

**Replace a resume PDF** → overwrite the PDF in the repo root (same filename),
then diff its text against `js/profiles.js`: `npm run check:resume` prints any
resume passage that is not on the site.

**Add a job** → add an object at the top of that profile's `jobs` array (newest
first). Counts ("4 roles · 43 resume points") update automatically.

**Add a website to the gallery** → save a screenshot as
`img/screenshot/<file>.png`, then append `['domain.com', 'https://…', '<file>.png']`
to `sites` in `js/portfolio-items.js`. Both pages update their counts.

**Add a design image** → put it under `img/…` and append `[path, alt]` to
`designs` in `js/portfolio-items.js`.

**Add a fifth profile** → add a key to `PROFILES` and `PROFILE_ORDER`, add a
`body[data-mode='<key>']` theme block in the `index.html` CSS, and either give
it a new header tab (`.mode` button with `data-tab`) or set its `tab` to an
existing one plus a `.track` button with `data-profile="<key>"` (both
`[data-track-switch]` groups).

**Show the portfolio teaser on another profile** → set `portfolio: true`.

## Conventions

- Vanilla ES5-style JS inside IIFEs (`var`, `function`), matching the existing
  code. No dependencies, no modules, no build tooling.
- Formatting: Prettier (`.prettierrc`: 2 spaces, single quotes, width 80,
  `trailingComma: es5`). VS Code formats on save; `npm run format` formats all
  (this also touches `prep/` files — prefer formatting only files you changed).
- Design tokens are CSS custom properties on `:root`. `portfolio.html`
  duplicates the frontend tokens from `index.html`; **keep them in sync** if
  you change the palette or fonts.
- Fonts: Space Grotesk (display), Manrope (body), DM Mono (labels) from Google
  Fonts. No icon fonts; icons are inline SVG.
- Accessibility: header tabs are an ARIA tablist (arrow keys work); tracks are
  `aria-pressed` toggle buttons; the gallery lightbox is a native `<dialog>`;
  `prefers-reduced-motion` disables the starfield and animations. Preserve
  these when editing.
- Layout must not scroll horizontally from 320px up. The decorative hero orbits
  are wider than phones and are clipped by `.hero { overflow-x: clip }`.

## Verifying changes

1. `npm run check:resume` — every non-structural resume passage must be
   covered (see the script header for gaps that are expected).
2. Serve locally and click through all four profiles:
   `python -m http.server 8765` then open `http://127.0.0.1:8765/`.
   Check: tab + track switching, `?profile=` deep links, download buttons, no
   console errors, no horizontal scroll at 320px / 375px / 820px.
3. `portfolio.html`: both tabs, `#design` deep link, lightbox (arrows, Esc).

## Known gaps

- `img/screenshot/`, `img/old-work/` and `img/hibru-template/` are referenced
  by the gallery and tracked in the git index but **missing from this local
  checkout**. Pages still render: cards show a themed "Preview unavailable"
  tile. Restore the folders (e.g. from the GitHub remote) to show screenshots.
- The local `.git` directory is incomplete (no `objects/` or `refs/`), so git
  commands fail here. Don't try to repair it without asking the owner.
- `img/` also contains design sets not yet shown in the gallery according to
  the git index (`ui-uclinic`, `ui-uclinic-patient`, `new-ui-uclinic`,
  `ui-one-wayrem`, `ui-two-wayem`, `xd-work`) — candidates for future gallery
  additions once restored.

## Contact details used on the site

Location Jaipur, Rajasthan, India · Phone +91 8505015184 ·
Email tarungohil80@gmail.com · LinkedIn linkedin.com/in/tarun-singh-gohil ·
GitHub github.com/tarunsinghgohil. They appear in `index.html` (summary contact
card, closing section, footer) and `portfolio.html` (footer). Update all of
them together.
