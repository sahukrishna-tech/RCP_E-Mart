# Village Market — Prototype

Plain HTML/CSS/JS, no build step, no dependencies.

## Run in VS Code
1. Open this folder in VS Code.
2. Install the **Live Server** extension (if you don't have it).
3. Right-click `index.html` → **Open with Live Server**.
   (Or just double-click `index.html` to open it in a browser directly.)

## Files
- `index.html` — page shell
- `style.css` — all styling (cream/red theme, cards, bottom nav, timeline)
- `app.js` — screens, sample data, and all click logic (role switching, cart, orders, delivery tracking, admin approvals)

## What's wired up
Welcome/role picker → Buyer (home, search & compare, vendor profile, cart) → Seller (dashboard, add product, my products, orders, earnings) → Delivery (available orders, live tracking timeline) → Admin (pending/approved/rejected vendor approvals). English/Telugu toggle on the welcome screen; a "Switch Role" button lives in each role's Profile screen.

## Not yet real
No backend, no persistence (state resets on refresh), no real photos (emoji stand in), no payments/maps.

## Installing it on an Android phone

This is now a **PWA** (manifest.json + sw.js), so Chrome can install it like a real app — own icon, full-screen, works offline. This alone doesn't give you a `.apk` file, but it's a real installable app already.

**To install directly (no APK needed):**
1. Host the folder somewhere reachable over HTTPS (GitHub Pages is free and easy — push this folder to a repo, enable Pages). Or, if it's already published as a Claude Artifact, just open that link.
2. Open the link on the phone in Chrome.
3. Tap the ⋮ menu → **Add to Home screen** / **Install app**.

**To get an actual `.apk` file:**
1. Go to [pwabuilder.com](https://www.pwabuilder.com).
2. Enter the HTTPS URL where this app is hosted (step 1 above — PWABuilder needs a live URL, it can't package local files).
3. Click **Package for Stores → Android** and download the generated `.apk` (or `.aab` for Play Store).
4. Install the APK on the phone (enable "install from unknown sources" if prompted) — no coding required.

**Alternative (more control):** wrap it with [Capacitor](https://capacitorjs.com) — `npm install @capacitor/core @capacitor/android`, `npx cap add android`, then open the generated project in Android Studio and hit Build → Build APK. This needs Android Studio installed locally; I can scaffold the Capacitor project files if you'd like to go this route instead.
