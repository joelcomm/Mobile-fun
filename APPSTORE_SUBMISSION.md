# Acumen - App Store Submission Packet

## App Identity

| Field | Value |
|---|---|
| **App Name** | Acumen |
| **Subtitle** | Brain Games for Smart People |
| **Bundle ID** | com.acumengames.app |
| **SKU** | acumen-brain-games-2025 |
| **Primary Language** | English (U.S.) |
| **Category** | Games |
| **Secondary Category** | Trivia |
| **Content Rating** | 4+ (No objectionable content) |

---

## App Store Description

### Promotional Text (170 chars max - can be updated without new build)
```
9 original daily brain games — words, trivia, logic, memory, and speed. New puzzles every morning. 100% free, no ads.
```

### Description (4000 chars max)
```
Acumen is a collection of 9 original daily brain games designed to sharpen your mind every morning.

WORD GAMES
- Threads: Group 16 words into 4 hidden categories. Find the connections before your guesses run out.
- Alibi: Eight suspects, one doesn't belong. Examine the clues and find the word with a false alibi.
- Cipher: Decode a famous quotation by cracking the substitution cipher letter by letter.

TRIVIA GAMES
- Bluff: Three statements, one is a lie. Can you spot the bluff?
- Lineup: Five items, one correct order. Sort them by the hidden criteria — dates, sizes, distances, and more.
- Rank: Four items ranked by a surprising metric. Drag them into the right order, then discover the truth.

BRAIN GAMES
- Echo: Watch, listen, remember, repeat. A memory sequence game that gets harder with every round.
- Reflex: How fast can you react? Tap when the signal hits — but don't tap too early.
- Sequence: Study the number pattern and pick the missing value. 10 rounds that get progressively trickier.

WHAT MAKES ACUMEN DIFFERENT
- New puzzles every single day — months of content, never the same puzzle twice
- No accounts, no sign-ups — just open and play
- No ads, no in-app purchases — completely free
- Works offline after first load
- Track your daily streaks and stats
- Clean, distraction-free design

From the makers of the AI for Everyone Show.
```

### Keywords (100 chars max, comma-separated)
```
brain games,daily puzzles,word games,trivia,logic,memory,cipher,sequence,strategy,mind games
```

---

## What's New (for updates)
```
Welcome to Acumen! 9 original daily brain games — words, trivia, logic, memory, and speed challenges. New puzzles every morning.
```

---

## URLs

| Field | URL |
|---|---|
| **Marketing URL** | https://games.aiforeveryoneshow.com |
| **Support URL** | https://games.aiforeveryoneshow.com/support.html |
| **Privacy Policy URL** | https://games.aiforeveryoneshow.com/privacy.html |

---

## App Review Information

### Review Notes
```
Acumen is a collection of 9 free daily brain games. No account or login is required — the app is fully playable immediately upon launch. All games are self-contained and work offline after initial load. Tap any game card on the home screen to begin playing. Each game has its own instructions displayed at the start. Game progress and streaks are stored locally on the device.
```

### Contact Information
| Field | Value |
|---|---|
| **First Name** | Joel |
| **Last Name** | Comm |
| **Email** | joel@niftycompany.com |
| **Phone** | (add your phone number) |

### Demo Account
```
Not applicable — no login or account required.
```

---

## Version Information

| Field | Value |
|---|---|
| **Version Number** | 1.0.0 |
| **Build Number** | 1 |
| **Copyright** | 2025 Joel Comm |

---

## Screenshots

All screenshots are 1290 x 2796 px (iPhone 6.7" display — iPhone 15 Pro Max).

| # | File | Content |
|---|---|---|
| 1 | `appstore-screenshot-1.png` | Hero shot — Acumen logo + phone mockup showing game cards |
| 2 | `appstore-screenshot-2.png` | "New Puzzles Every Day" — game categories breakdown |
| 3 | `appstore-screenshot-3.png` | "9 Games One App" — 3x3 grid of all game icons |

**Note:** Apple requires screenshots for each device size you support. The 6.7" screenshots can be used as the primary set. For 6.5", 6.1", and 5.5" displays, App Store Connect will auto-generate from the 6.7" screenshots if you check "Use 6.7-inch Display" as media source.

---

## App Icon

| File | Size | Purpose |
|---|---|---|
| `app-icon-1024.png` | 1024 x 1024 px | App Store listing icon |
| `ios/.../AppIcon-512@2x.png` | 1024 x 1024 px | Xcode asset catalog (device icon) |

The icon features the Acumen "A" logo — dark navy (#131A2B) background with a white stylized letter A and orange/gold chevron accent.

---

## Age Rating Questionnaire Answers

| Question | Answer |
|---|---|
| Cartoon or Fantasy Violence | None |
| Realistic Violence | None |
| Prolonged Graphic or Sadistic Realistic Violence | None |
| Profanity or Crude Humor | None |
| Mature/Suggestive Themes | None |
| Horror/Fear Themes | None |
| Medical/Treatment Information | None |
| Alcohol, Tobacco, or Drug Use | None |
| Simulated Gambling | None |
| Sexual Content or Nudity | None |
| Graphic Sexual Content and Nudity | None |
| Unrestricted Web Access | No |
| Gambling and Contests | None |

**Result: Rated 4+**

---

## App Privacy (Data Collection)

| Question | Answer |
|---|---|
| Do you collect data from this app? | **No** |

The app stores game progress in local device storage (localStorage) only. No data is transmitted to any server. No analytics, tracking, or advertising SDKs are included.

---

## Export Compliance

| Question | Answer |
|---|---|
| Does your app use encryption? | **No** (standard HTTPS only via WKWebView, which is exempt) |
| Does your app qualify for an encryption exemption? | **Yes** — uses only standard OS-provided HTTPS |

---

## Build Checklist

Before submitting in Xcode:

- [ ] Run `./build.sh` to copy web assets to `www/`
- [ ] Open `ios/App/App.xcworkspace` in Xcode
- [ ] Verify Bundle ID is `com.acumengames.app`
- [ ] Verify Version is `1.0.0` and Build is `1`
- [ ] Verify app icon appears in Assets.xcassets
- [ ] Set deployment target (iOS 15.0 recommended)
- [ ] Select your signing team/certificate
- [ ] Test on a real device via Xcode
- [ ] Product > Archive
- [ ] Distribute App > App Store Connect
- [ ] Upload build

## App Store Connect Checklist

After uploading the build:

- [ ] Go to App Store Connect > My Apps > Acumen
- [ ] Fill in all metadata fields from this document
- [ ] Upload 3 screenshots for 6.7" display
- [ ] Upload app icon (1024x1024) if not auto-populated from build
- [ ] Set Privacy Policy URL
- [ ] Set Support URL
- [ ] Complete Age Rating questionnaire
- [ ] Complete App Privacy section
- [ ] Select the uploaded build
- [ ] Add Review Notes
- [ ] Set pricing to Free
- [ ] Submit for Review

---

## Files Included in This Packet

```
app-icon-1024.png          — App Store icon (1024x1024)
app-icon.svg               — Vector source of app icon
appstore-screenshot-1.png  — Screenshot 1: Hero shot
appstore-screenshot-2.png  — Screenshot 2: Daily puzzles
appstore-screenshot-3.png  — Screenshot 3: 9 games grid
privacy.html               — Privacy policy page
support.html               — Support/FAQ page
capacitor.config.json      — Capacitor config (appId, appName)
build.sh                   — Build script for www/ directory
ios/                       — Xcode project with app icon asset
APPSTORE_SUBMISSION.md     — This document
```
