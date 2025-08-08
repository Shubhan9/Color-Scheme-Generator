# Colour Scheme Generator

Web app that generates color palettes using [The Color API](https://www.thecolorapi.com). Select a base color and a color scheme mode (monochrome, triad, quad, etc.) to generate a palette of five matching colors in tall, clipboard-friendly strips.

[![Deployment Status](https://deploy-badge.vercel.app/?url=https://color-scheme-generator-nu.vercel.app/&name=Live%20Demo)](https://color-scheme-generator-nu.vercel.app/)

---

## Features
- Single color picker to select a base color.
- Choose from 8 scheme modes:
  - `monochrome`
  - `monochrome-dark`
  - `monochrome-light`
  - `analogic`
  - `complement`
  - `analogic-complement`
  - `triad`
  - `quad`
- Generates tall vertical color strips for easy viewing.
- Click any strip to copy its HEX code to the clipboard.
- No UI libraries—built with pure HTML, CSS, and JavaScript.
- Deployed live via Vercel for instant access.

---

## Usage
1. Open the app: [Live Demo](https://color-scheme-generator-nu.vercel.app/)  
2. Pick a base color.  
3. Select a scheme mode.  
4. Click **"Get Colour Scheme"** to generate your palette.  
5. Click any color strip to copy its HEX code.

---

## Tech Stack
- **HTML** – Structure  
- **CSS** – Layout and styling  
- **JavaScript** – API calls, dynamic rendering, clipboard interaction  
- **The Color API** – Palette generation  
- **Vercel** – Hosting and deployment

---

## What I Learned
- Consuming external APIs with dynamic query parameters.
- DOM manipulation and event handling in vanilla JavaScript.
- Clipboard API usage (`navigator.clipboard.writeText`) for improving user interactivity.
- Effective layout using Flexbox (CSS) with responsive design.
- Deploying a project to Vercel and showcasing deployment in README.

---

## Live Demo
Check out the working version here: [color-scheme-generator-nu.vercel.app](https://color-scheme-generator-nu.vercel.app/)

---

## Future Enhancements
- Add shareable links for generated palettes.
- Mobile-friendly enhancements (e.g., spacing, orientation).
- Maybe support exporting palettes in formats like CSS variables or JSON.
