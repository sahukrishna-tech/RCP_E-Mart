# RCP_E-Mart — Prototype

Plain HTML/CSS/JS, no build step, no dependencies. Installable as a PWA on Android.

## Run locally in VS Code
1. Open this folder in VS Code.
2. Install the **Live Server** extension (if you don't have it).
3. Right-click `index.html` → **Open with Live Server**.
   (Or just double-click `index.html` to open it in a browser directly.)

## Deploy to GitHub Pages (for the prototype link)
1. Create a new GitHub repo (e.g. `rcp-e-mart`).
2. Push everything in this folder to the repo root:
   ```
   git init
   git add .
   git commit -m "RCP_E-Mart prototype"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save.
4. Your live prototype will be at:
   `https://<your-username>.github.io/<repo-name>/`
   (takes a minute or two to go live after the first push)

## Get an installable `.apk` from the hosted link
1. Go to [pwabuilder.com](https://www.pwabuilder.com).
2. Paste in your GitHub Pages URL from above.
3. **Package for Stores → Android** → download the `.apk`.
4. Install it on an Android phone (allow "install from unknown sources" if prompted).

## Files
- `index.html` — page shell, links the manifest and service worker
- `style.css` — all styling (cream/red theme, cards, bottom nav, timeline)
- `app.js` — screens, sample data, and all click logic
- `manifest.json` — PWA metadata (name, icons, colors) so Android can install it
- `sw.js` — service worker, caches the app shell for offline use
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — app icons
- `.nojekyll` — tells GitHub Pages to serve files as-is

## What's wired up
Welcome/role picker (RCP_E-Mart branding) → Buyer (home, search & compare, vendor profile, cart) → Seller (dashboard, add product, my products, orders, earnings) → Delivery (available orders, live tracking timeline) → Admin (pending/approved/rejected vendor approvals). English/Telugu toggle on the welcome screen; a "Switch Role" button lives in each role's Profile screen.

## Not yet real
No backend, no persistence (state resets on refresh), no real photos (emoji stand in), no payments/maps.
