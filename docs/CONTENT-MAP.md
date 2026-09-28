# Content map — resumes → data → page

Where each part of each resume lives in `js/profiles.js` and where it renders on
`index.html`. Counts are the number of items on the site as of Sept 2026;
`npm run check:resume` confirms the text matches the PDFs.

## Section mapping (all profiles)

| Resume section | `js/profiles.js` field | Page section (`index.html`) |
| --- | --- | --- |
| Name, title line | `headline` | Hero (under the name) and summary card label |
| Contact line (location, phone, email, LinkedIn, GitHub) | static HTML | Summary → Contact card; Closing; Footer |
| PROFESSIONAL SUMMARY | `summary` | `#summary` — Professional summary |
| PRODUCT MANAGEMENT CAPABILITIES (PM only) | `caps` | `#capabilities` |
| PROFESSIONAL / WORK EXPERIENCE | `jobs[].points` | `#experience` timeline |
| Tagline under a job title (Full-Stack) | `jobs[].tagline` | italic line under the company |
| Key project contributions (Frontend) | `jobs[0].points[10].sub` | numbered sub-list in the first job |
| Key Product Area (PM) | `jobs[0].extra` | boxed block in the first job |
| EARLIER PRODUCT & WEB EXPERIENCE (PM) | `jobs[2].group` | divider in the timeline |
| GENERATIVE AI & AI ENGINEERING EXPERIENCE (Python & AI) | `genai.points` | `#genai` |
| SELECTED / KEY PROJECTS, PROJECT HIGHLIGHTS, PRODUCT PORTFOLIO | `projects` | `#projects` |
| TECHNICAL SKILLS / TECHNICAL PRODUCT & ANALYTICS STACK | `skillGroups` | `#skills` |
| ENGINEERING PRACTICES → Architecture & Delivery (Python & AI) | last `skillGroups` entry | `#skills` |
| EDUCATION | `education` | `#education` |
| LANGUAGES | `languages` | `#education` (Languages card) |

Website-only copy (not from any resume): hero paragraph, stat tiles,
philosophy card, capability matrix (except PM), section headings, build
philosophy board, closing text.

## Per-profile inventory

### `frontend` — Tarun-Singh-Gohil-Frontend-Resume-2026.pdf

| Job | Points |
| --- | --- |
| Lead Developer — Growit.ai (Aug 2025 – Aug 2026) | 11 (last has 3 sub-points) |
| UI Developer — Formidium (Feb 2022 – Jul 2025) | 17 |
| Web Developer — i3Techs (Nov 2020 – Feb 2022) | 12 |
| Trainee in Web Development — i3Techs (May 2019 – Jul 2019) | 3 |

Projects: 4 (Hospital Information Management System, RetailX ERP, Charge My EV,
Enterprise Web Platforms), combining the resume's Selected Project Highlights
with the Key project contributions. Skills: 11 groups / 105 items. Portfolio
teaser: **on** (links to `portfolio.html`).

### `fullstack` — Tarun-Singh-Gohil-Full-Stack-Resume-2026.pdf

| Job | Points |
| --- | --- |
| Lead Developer — Growit.ai (+ tagline) | 11 |
| UI Developer — Formidium | 10 |
| Web Developer — i3Techs | 9 |
| Web Development Trainee — i3Techs | 3 |

Projects: 3 key projects, each with the resume's full stack list. Skills: 12
groups / 129 items.

### `python-ai` — Tarun-Singh-Gohil-Python-AI-Resume-2026.pdf

(Originally `Tarun_Singh_Gohil_Senior_Resume_2026.pdf`.)

| Job | Points |
| --- | --- |
| Lead Developer — Python & Full-Stack — Growit.ai | 10 |
| Software Engineer — Formidium | 8 |
| Web Developer — i3Techs | 5 |
| Web Development Trainee — i3Techs | 3 |

GenAI & AI engineering: 7 points. Projects: 4 (Zonov, AI Document & Voice
Assistant Workflows, RetailX ERP, Charge My EV), each with stack and bullets.
Skills: 11 groups / 175 items (10 technical groups + Architecture & Delivery).

### `product` — Tarun-Singh-Gohil-PM-Resume-2026.pdf

| Job | Points |
| --- | --- |
| Lead Developer — Growit.ai | 14 + 2 (Key Product Area) |
| UI Developer / Product Delivery Contributor — Formidium | 15 |
| Web Developer — i3Techs (under "Earlier product & web experience") | 8 |
| Web Development Trainee — i3Techs | 2 |

Product management capabilities: 7. Projects: 4 (Zonov, RetailX ERP,
E-commerce, Charge My EV). Technical product & analytics stack: 6 groups / 83
items.

## Formatting normalisations (intentional)

- Dates are shown as `Mon YYYY – Mon YYYY` on every profile (the Frontend PDF
  uses `08/2025 - 08/2026`).
- Company lines use `Company · City`.
- Comma-separated skill and stack lists are split into chips. Phrases joined
  with "and" are split into separate chips (e.g. "Whisper and Faster-Whisper"
  → `Whisper`, `Faster-Whisper`). The Python & AI "Agentic AI" group keeps the
  resume's "working knowledge" qualifier as a group note.
- Words that the PDF breaks across lines are written with their hyphen
  (`production-ready`, `response-time`, `Design-System`, `Docker-based`,
  `customer-facing`, `end-to-end`, `multi-tenancy`).
