# Joel & Erin Wedding — Photo Share 💍📸

A zero-login, web-based wedding photo uploader (September 5, 2026). Guests scan
a QR code, the camera app launches in their browser, and **every photo they
take uploads straight into the couple's Google Drive folder** — no app install,
no Google sign-in for guests.

Because this site is static (GitHub Pages, no backend), uploads are routed
through a small **Google Apps Script web app** that runs as the organizer.
That's what lets photos land in one central Drive with full permissions
without exposing any secret in the browser.

## Files

| File | Purpose |
|------|---------|
| `index.html` / `style.css` / `app.js` | The attendee camera app (what the QR opens). |
| `setup.html` | Organizer page: enter your endpoint + event name, get a printable QR. |
| `apps-script.gs` | The Google Apps Script you deploy to receive uploads. |

## Setup (~5 minutes)

The Drive folder ID is already wired into `apps-script.gs`
(`1REwmkGbvVcDZtv8dWGsIjAAOipYZmmZu`), so you only need to deploy and grab a URL.

1. **Apps Script** — Go to [script.google.com](https://script.google.com) →
   **New project**. Paste `apps-script.gs` (`FOLDER_ID` is already set).
2. **Deploy** — **Deploy → New deployment → Web app**, with
   **Execute as: Me** and **Who has access: Anyone**. Authorize when asked.
   Copy the **Web app URL** (ends in `/exec`).
3. **QR** — Open `setup.html` on the live site, paste the Web app URL (event
   name is pre-filled), click **Generate QR code**, then print or display it.
4. Guests scan it → camera opens → every shot lands in the wedding Drive folder.

> Tip: visit the Web app URL directly in a browser — it should return
> `{"ok":true,...}`, confirming the deployment is live.

## Guest names

On a guest's **first visit** the app asks for their name, then remembers it
(localStorage **and** a 1-year cookie) so it never asks again on that device.
Every photo they take is labeled three ways so the couple knows who shot it:

- **Filename** prefix, e.g. `Aunt-Mary_20260905-203114-k7r2.jpg`
- A small **caption burned into the photo** (`♥ Aunt Mary · Joel & Erin 9.5.26`)
- The Drive file **description** (`Photo by Aunt Mary — …`)

A guest can tap **"Not you? Change name"** on the welcome screen to switch.

## How it works

- The QR encodes `index.html?e=<base64 endpoint>&n=<event>` (plus an optional
  `&k=<key>`). The app caches this in `localStorage` so a reload still works.
- Photos are captured via `getUserMedia`, scaled down (long edge ≤ 1600px,
  JPEG q0.85) for fast uploads, and POSTed to the Apps Script.
- Apps Script web apps don't return CORS headers, so the app posts as a
  *simple* request (`text/plain`, `no-cors`). Failed uploads are queued in
  `localStorage` and retried automatically.

## Notes & limits

- Requires **https** (camera access) — GitHub Pages serves https, so fine.
- Optional `SHARED_KEY` in the script (matched by the QR's `k` param) keeps
  random people from posting to your folder if the endpoint URL leaks.
- Apps Script free quota is generous but not unlimited; for very large events
  consider a paid Google Workspace account.
