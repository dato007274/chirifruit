# Chirifruit Website — Project Notes

## Git / GitHub Rules

- **Always include website video files** (mp4, webm) in commits — they are used directly by the HTML pages as hero, parallax, and gallery videos. Never add `*.mp4` or `*.webm` to .gitignore.
- **Exclude raw source recordings**: files named `0421*.mov`, `0421.mp4`, `0423.mov`, and any `.mov` files inside `fruits/`. These are raw camera recordings not used by the site.
- **Always include the `fruits/` folder** — it contains the product image frames (`obj_00.png` – `obj_39.png`) used for animations.
- Exclude social media JPGs (named with numeric IDs like `481078750_*.jpg`) and Gemini-generated images.

## Deployment

- Deployed on Vercel via the `dato007274/chirifruit` GitHub repository.
- Main branch: `main`.

## Site Structure

- `index.html` — main landing page
- `about.html`, `shop.html`, `contact.html`, `branch.html` — inner pages
- `chirifruit-new.html` — alternate/experimental page
- `styles.css`, `main.js` — shared styles and scripts
- `fruits/` — product image frames for animation
- `chirifruit_logo_clean.png` — brand logo
