# УльтраКаркас — Static Site

Plain HTML/CSS/JavaScript port of the original React/TypeScript "Karkas-Dom-Builder" project — a Russian-language landing site for a framing-house construction company.

## Stack
- Pure HTML5 + vanilla CSS + vanilla JS (no build step).
- Google Fonts: Golos Text, Playfair Display.
- Lucide-style icons inlined as SVG inside `script.js`.
- Served by `static-web-server` (NixOS package) on port 80 via the `Serve static` workflow.

## Structure
- `index.html` — Home (Hero, TrustStats, Projects, Packages tabs, Process, Services, WhyUs, Calculator, FAQ, Contact)
- `projects.html` — Projects catalog
- `project.html` — Project detail (uses `?slug=` query param). Includes lightbox markup.
- `privacy.html` — Privacy policy
- `style.css` — Design tokens + all component styles (replicates the original Tailwind look; brand colour `hsl(28 100% 48%)`).
- `script.js` — Header/footer/modal builders, lead form (validation + success state), home renderers (packages tabs, FAQ accordion, calculator), project list, project detail, image lightbox, scroll-reveal observer.
- `assets/projects.js` — Exports `window.PROJECTS`, `window.PACKAGE_SPECS`, `window.getProject(slug)` (converted from `lib/projects.ts`).
- `images/` — `hero.png`, `project-1.png` … `project-6.png`.
- `favicon.svg`

## Page contract
Every page mounts shared partials via empty containers:
```html
<div id="header-mount"></div>
<div id="footer-mount"></div>
<div id="modal-mount"></div>
```
Inner pages set `<body data-inner="1">` so the header is rendered in the compact (always-scrolled) state. The lead-form modal opens for any element with `data-modal-open` plus optional `data-modal-title`, `data-modal-desc`, `data-default-package`, `data-default-comment`.

## Reference source
Original React project is preserved in `attached_assets/extracted/Karkas-Dom-Builder-main/` for reference.
