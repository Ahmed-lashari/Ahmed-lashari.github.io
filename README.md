# ahmed-lashari.github.io

Personal portfolio site for Muhammad Ahmed Lashari, Founder of [INDUS.SYSTEMS](https://indus.systems).

## How to Run

This is a static site with no build step. Open it directly in a browser:

```bash
# Option 1: Open the file directly
open index.html

# Option 2: Serve locally (any static server works)
npx -y serve .

# Option 3: Python http server
python3 -m http.server 8000
```

Then visit `http://localhost:8000` (for options 2/3) or the file will open in your default browser (option 1).

To deploy, push to the `main` branch, GitHub Pages serves `index.html` automatically at `https://ahmed-lashari.github.io`.

## Project Files

| File | Purpose |
|---|---|
| `index.html` | Single-page site containing structured founder sections: Hero, INDUS.SYSTEMS, Products, Technical Capabilities, Engineering Work, Leadership & Community, Experience & Education, Technical Focus, Currently Exploring, and Contact. |
| `styles.css` | Complete styling with a soothing, eye-friendly charcoal obsidian palette (`#0C0D10`), warm champagne gold accent (`#C4A35A`), Inter & JetBrains Mono typography, desktop-proportioned container (`1040px`), and responsive grids. |
| `script.js` | Lightweight vanilla JS for dynamic copyright year, smooth anchor navigation, and IntersectionObserver-powered scroll reveals. |
| `favicon.svg` | Custom vector monogram favicon (`AL` on a dark squircle badge with gold border) matching the site's dark & champagne gold branding. |
| `indus_logo.png` | INDUS.SYSTEMS company logo. |
| `zindigi_prize.png` | Official logo used in the Zindigi Prize Campus Director card. |
| `google_dev.svg` | Google Developer logo used in the GDSC Core Dev Team card. |
| `bano_qabil.png` | Official logo used in the Bano Qabil Initiative Campus Ambassador card. |
| `GOAL.md` | Redesign brief that guided the strategic transition from a student resume to a founder-led engineering profile. |
| `.gitignore` | Ignores `.DS_Store`, `plan.md`, `ui_anti_patterns.md`, and `GOAL.md`. |

## Tech Stack

- Semantic HTML5, Vanilla CSS, Vanilla JavaScript, zero runtime dependencies, zero build step.
- [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.
- Hosted on GitHub Pages (`https://ahmed-lashari.github.io`).
