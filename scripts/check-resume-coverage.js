#!/usr/bin/env node
/*
 * Checks that every passage of each resume PDF appears in js/profiles.js.
 *
 *   npm run check:resume          (or: node scripts/check-resume-coverage.js)
 *
 * Requires `pdftotext` (poppler) on PATH - bundled with Git for Windows at
 * /mingw64/bin/pdftotext, or `brew install poppler` / `apt install poppler-utils`.
 *
 * How it works: both texts are normalised (lowercase, punctuation stripped),
 * then every 6-word window of the PDF is searched for in the profile's data.
 * Windows that are not found are merged into "gaps" and printed.
 *
 * Expected gaps (not problems): section headings, repeated page headers and
 * footers, date formats (08/2025 vs Aug 2025), windows that straddle two
 * bullets, stack lists that the site shows as chips, and words pdftotext
 * glues together at line breaks (e.g. "productionready", "dockerbased").
 * Anything else - a sentence fragment from a bullet - means content is missing
 * or mistyped in js/profiles.js.
 */
'use strict';
var fs = require('fs');
var path = require('path');
var execFileSync = require('child_process').execFileSync;

var root = path.join(__dirname, '..');
var WINDOW = 6;
var SOURCES = {
  frontend: 'Tarun-Singh-Gohil-Frontend-Resume-2026.pdf',
  fullstack: 'Tarun-Singh-Gohil-Full-Stack-Resume-2026.pdf',
  'python-ai': 'Tarun-Singh-Gohil-Python-AI-Resume-2026.pdf',
  product: 'Tarun-Singh-Gohil-PM-Resume-2026.pdf',
};

global.window = {};
require(path.join(root, 'js', 'profiles.js'));

function norm(s) {
  return s
    .toLowerCase()
    .replace(/\*\*/g, '')
    .replace(/[’']/g, '')
    .replace(/(\w)-\s*\r?\n\s*(\w)/g, '$1-$2')
    .replace(/[^a-z0-9+#.]+/g, ' ')
    .replace(/\.(\s|$)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function strings(value, out) {
  if (typeof value === 'string') out.push(value);
  else if (value && typeof value === 'object')
    Object.keys(value).forEach(function (k) {
      strings(value[k], out);
    });
  return out;
}

Object.keys(SOURCES).forEach(function (key) {
  var pdf = path.join(root, SOURCES[key]);
  var raw;
  try {
    raw = execFileSync('pdftotext', [pdf, '-'], { encoding: 'utf8' });
  } catch (e) {
    console.error('Could not read ' + SOURCES[key] + ' (is pdftotext installed?)');
    process.exitCode = 1;
    return;
  }
  var site = ' ' + norm(strings(window.PROFILES[key], []).join(' \n ')) + ' ';
  var words = norm(raw).split(' ');
  var missing = [];
  var total = 0;
  for (var i = 0; i + WINDOW <= words.length; i++) {
    total++;
    if (site.indexOf(' ' + words.slice(i, i + WINDOW).join(' ') + ' ') < 0)
      missing.push(i);
  }
  var runs = [];
  missing.forEach(function (i) {
    var last = runs[runs.length - 1];
    if (last && i === last[1] + 1) last[1] = i;
    else runs.push([i, i]);
  });
  var pct = (100 * (total - missing.length)) / total;
  console.log(
    '\n=== ' + key + ' (' + SOURCES[key] + '): ' + pct.toFixed(1) + '% covered, ' + runs.length + ' gaps'
  );
  runs.forEach(function (r) {
    console.log('  - ' + words.slice(r[0], r[1] + WINDOW).join(' '));
  });
});
