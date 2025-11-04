# All Type of Calculator — React

This repository uses a single React app located in `react-app/`.

Quick start (one-shot):

1) Run locally
   - cd react-app
   - npm install
   - npm run dev

2) Build and deploy to GitHub Pages (one command)
   - npm run deploy

What that does
- Builds the site with Vite and creates a 404.html for SPA routing.
- Publishes `react-app/dist` to the `gh-pages` branch using `gh-pages`.
- A GitHub Actions workflow is also included to auto-deploy on each push to `main`.

Useful scripts
- npm run build   -> Production build
- npm run preview -> Preview the build locally
- npm run deploy  -> Build + publish to gh-pages

Live URL
- https://adhishmagic.github.io/All_type_of_Calculator/

Notes
- All calculators live under the React app routes.
