# Event Snap 📸

A zero-login, web-based event photo uploader. Attendees scan a QR code, the
camera app launches in their browser, and **every photo they take uploads
straight into the organizer's Google Drive folder** — no app install, no
Google sign-in for attendees.

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

## Setup (organizer, ~5 minutes)

1. **Drive folder** — In Google Drive create a folder for the event and open
   it. Copy its **folder ID** from the URL (the part after `/folders/`).
2. **Apps Script** — Go to [script.google.com](https://script.google.com) →
   **New project**. Paste `apps-script.gs`, set `FOLDER_ID` to your folder ID.
3. **Deploy** — **Deploy → New deployment → Web app**, with
   **Execute as: Me** and **Who has access: Anyone**. Authorize when asked.
   Copy the **Web app URL** (ends in `/exec`).
4. **QR** — Open `setup.html` on the live site, paste the Web app URL and your
   event name, click **Generate QR code**, then print or display it.
5. Attendees scan it → camera opens → every shot lands in your Drive folder.

> Tip: visit the Web app URL directly in a browser — it should return
> `{"ok":true,...}`, confirming the deployment is live.

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
