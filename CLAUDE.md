# CLAUDE.md

@AGENTS.md

## Claude-specific notes

- Content lives in `js/profiles.js`; layout and rendering live in `index.html`.
  Most requests ("update my experience", "add a skill") are data-only edits.
- The owner wants every resume point on the site. When a resume changes, update
  `js/profiles.js` verbatim and run `npm run check:resume` before reporting done.
- To see a change working, serve the folder (`python -m http.server 8765`) and
  drive Chrome headless; `Chrome` is installed at
  `C:/Program Files/Google/Chrome/Application/chrome.exe`.
- Windows machine: prefer forward slashes in Bash; `pdftotext` is available via
  Git for Windows.
