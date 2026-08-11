# Muhammad Ahmed Lashari — Portfolio

A minimal, premium personal portfolio website built with plain HTML, CSS, and vanilla JavaScript. Designed with a Liquid Glass aesthetic inspired by Apple's modern UI.

## Features

- ✦ Light & Dark mode with smooth animated toggle
- ✦ Frosted glass cards with blur and transparency
- ✦ Scroll-triggered fade-in animations
- ✦ Active section highlighting in nav
- ✦ Fully responsive (mobile, tablet, desktop)
- ✦ Zero dependencies — no frameworks, no build step
- ✦ GitHub Pages ready

## Structure

```
portfolio/
├── index.html       # Main HTML
├── styles.css       # All styles (tokens, components, responsive)
├── script.js        # Theme toggle, scroll animations, nav
├── assets/
│   └── resume.pdf   # ← Place your resume PDF here
└── README.md
```

## Setup

1. Clone or download this folder.
2. Place your resume PDF at `assets/resume.pdf`.
3. Open `index.html` in a browser — no build step needed.

## Deploy to GitHub Pages

1. Push the folder contents to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to `main` branch, `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo>/`.

## Customization

All design tokens (colors, fonts, blur, shadows) live at the top of `styles.css` under `:root` and `[data-theme="dark"]`. Swap them to retheme the entire site instantly.
