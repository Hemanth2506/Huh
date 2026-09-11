# PureFlow — Smart Microplastic Filtration Simulator

A static, single-page demonstrator for the PureFlow multilayer water filtration concept: a 7-stage filter cartridge, a live particle-removal simulator, and a technical spec sheet.

## Files

```
index.html   structure and content
style.css    styling (dark instrument-panel theme)
script.js    simulation logic and interactivity
```

No build step, no dependencies to install — it's plain HTML/CSS/JS. The only external resource is the Google Fonts stylesheet loaded in `index.html`.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Push this folder to a GitHub repository (see commands below).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

### Push to a new repo

```bash
cd pureflow
git init
git add .
git commit -m "PureFlow simulator"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Notes

The simulation values are illustrative estimates for demonstration purposes only, not laboratory-validated measurements — see the in-page disclaimer.
