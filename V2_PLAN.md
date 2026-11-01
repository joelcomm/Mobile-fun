# Acumen v2: Plan for Guideline 4.3 (Spam) resubmission

Prepared Sun Oct 25, 2026 (Atlantic/Reykjavik, UTC+0). Nothing here has been sent, submitted or uploaded. Nothing needed an Apple login.

- v2 project: `/Users/joelcomm/Desktop/Mobile-fun-v2` (copy of `Mobile-fun`; the original is untouched)
- Bundle ID unchanged: `com.acumengames.app`. Version set to 2.0 (build 2) in the Xcode project.

## 1. Why v1 was rejected, and the v2 thesis

v1 was a launcher for 9 separate puzzle games. Each one is a familiar format, and the store listing described them as a generic "brain games" bundle. Apple's reply says "similar concept ... with only minor differences". A bundle of familiar mini-games is the textbook 4.3 spam shape.

Resubmitting the same 9 games with new words would very likely fail again. v2 changes the product, not the copy:

**Acumen is a daily detective case file.** One new case per day, made of four original games. Every game feeds one Acumen Score (0 to 1000), a 7-day Acumen Rating with a detective rank, and a streak. Three of the four games are detective-flavoured (Bluff, Alibi, Rank), and Missing Link is the "find the clue" game. The app has one shared identity, one progression system and one shareable result.

Also found while auditing: the old listing described "Threads" as "Group 16 words into 4 hidden categories". That is a NYT Connections description. The game in `threads/` is actually **Missing Link** (three cue words, find the word that forms a compound with each one). The listing text was wrong, and it may have pushed the reviewer toward the "clone" reading. The new listing describes only what is in the app.

## 2. Audit of the 9 games

Ranked from most to least distinctive. "Closest well-known" means the closest widely known App Store or web game, not a claim of copying.

| # | Game | What it is | Closest well-known | Originality verdict | v2 |
|---|------|-----------|--------------------|---------------------|----|
| 1 | **Bluff** | 3 statements about a topic, tap the fake. 5 rounds, rising difficulty, about 1,800 fact sets, each with an explanation reveal | "Two Truths and a Lie" party game; trivia apps | **High.** Lie-spotting with a fact-reveal and a difficulty curve; few daily games use it | **Core** |
| 2 | **Alibi** | 9 words, 8 share a hidden link, find the one with no alibi. 10 cases | Odd One Out; the looser cousin of NYT Connections | **Medium-high.** Single-answer deduction with a detective frame; shorter than Connections and no 4x4 grid | **Core** |
| 3 | **Missing Link** (`threads/`) | 3 cue words, type the one word that makes a compound with each (GRID/AIR/OVER = LOCK). Hint costs | Common-word / compound-word puzzles; Only Connect "connections" style | **Medium.** Familiar category, but typed answers and hint costs are distinctive. 365 puzzles | **Core** |
| 4 | **Rank** | Drag items into order (lowest to highest) by a real-world measure; offline | Sort-it, Higher/Lower, Wikitrivia | **Medium.** Ordering is common, but the curated "rank the truth" content and its detective-case tone differ | **Core** (was React/Tailwind from CDNs; now precompiled and offline) |
| 5 | Lineup | 5 items, one ordering rule, 3 attempts | Same family as Rank (ordering) | Medium-low. It overlaps with Rank, and having both reads as padding | Cut. Candidate to fold its 1,800 puzzles into Rank later |
| 6 | Cipher | Decode a famous quote (letter substitution) | Cryptogram apps (very many) | Low. A saturated genre | Cut |
| 7 | Echo | Watch a tile sequence, repeat it in reverse | Simon, Memory Matrix, Lumosity-style | Low. A well-known mechanic with a one-line twist | Cut |
| 8 | Sequence | Find the missing number in a pattern | Number-series apps (very many) | Low. Generic | Cut |
| 9 | Reflex | Tap left or right to sort a word into the right category, speeds up | Speed-sort and reaction minigames | Low. Generic | Cut |

**Recommendation: ship 4 core games: Bluff, Alibi, Missing Link, Rank.** Four is enough for a full daily session of about 5 to 8 minutes and few enough to feel curated. A fifth could be Lineup merged into Rank, but I did not do this.

Honest read: each core game is still a familiar *format*. The case that these are not repackaged clones rests on three things: (a) the content is original and authored (roughly 1,800 Bluff fact sets, 1,840 Alibi cases, 365 Missing Link puzzles, about 250 Rank sets), (b) the four games feed one scoring, rating and streak system with a detective identity, (c) the app is native-feeling (haptics, share sheet, reminders). A reviewer who only opens one game may still see a familiar format. So the **screenshots, the first screen and the review notes must put the Acumen Score and Case File front and centre**. Asking for a call (section 7) is worth doing.

## 3. What changed in v2 (built)

**Product**
- Removed 5 games from the app: Lineup, Echo, Cipher, Reflex, Sequence. The folders remain in the project but are not in the build (`build.sh`).
- New hub (`app.html`, shipped as `index.html`): "Today's Case File". It has:
  - an Acumen Score ring (out of 1000);
  - a rank title;
  - the streak;
  - the 7-day rating;
  - four case cards with done state and points;
  - a share button;
  - a countdown to the next case.
- New engine `acumen-core.js` (loaded by the hub, stats and the four games):
  - each game's finish handler calls `AcumenCore.record(game, pct)`. The first play of the day counts;
  - each game is worth up to 250 points, so 4 games = 1000;
  - rating = average daily score over the last 7 days;
  - ranks: Bystander (0), Rookie (200), Officer (400), Investigator (600), Detective (750), Chief Inspector (900);
  - streaks: the daily-play streak, the "all four cases closed" streak, and the longest;
  - an in-game result bar and a home chip, injected into each game after you finish.
- New stats screen (`stats.html`): rating, streaks, 14-day score chart, career totals, per-game average/best/perfects, and rank ladder.
- Persistence: localStorage mirrored to the native Preferences store, so the profile survives iOS clearing WebView storage.

**Native iOS features (Capacitor plugins)**
- `@capacitor/haptics`: taps on buttons and cards, and success/fail feedback in game results.
- `@capacitor/local-notifications`: a daily reminder with a toggle and time picker on the hub. It repeats every day at the chosen time (default 08:00 local) and asks for permission only when the user turns it on.
- `@capacitor/share`: shares a text result card (score, rank, streak and a coloured square per game). The text contains no puzzle answers.
- `@capacitor/preferences`: the native mirror above.
- On web (not in the app) all of these fall back to `navigator.share`, no-op haptics and "reminders are available in the iPhone app".

**Cleanup for review safety (4.2 / offline)**
- Rank used React, Babel and Tailwind from CDNs, so it failed offline. It is now precompiled and offline (`rank/src/` is the source, `npm run build:rank`). React 18 is vendored.
- Removed the Google Fonts links. Inter is bundled (`fonts/Inter-Variable.woff2`).
- Removed the YouTube Playables SDK script from Alibi and Missing Link (they use a localStorage stub).
- `capacitor.config.json`: removed the `allowNavigation` entries for fonts, Tailwind and unpkg. It is now fully self-contained, with no external network requests.
- `privacy.html` and `support.html` rewritten for the new app (no Google Fonts, mentions the optional notification and share sheet, works fully offline). **These pages are also hosted publicly, so you need to redeploy them (see section 5).**
- iOS project: `MARKETING_VERSION` 1.0 to 2.0, `CURRENT_PROJECT_VERSION` 1 to 2.

**Config**
- `package.json`: name `acumen`, version 2.0.0, 4 new Capacitor plugins, devDependencies for the Rank build, new scripts (`build`, `build:rank`, `cap:sync`, `cap:open`, `cap:run`).
- `build.sh`: builds only the 4 games, compiles Rank, copies `acumen-core.js` and `acumen-ui.css`, strips dev files, and rewrites the home links.

## 4. Verification status

| Check | Result |
|---|---|
| `npm install` | OK |
| `npm run build` | OK. `www/` is 2.1 MB with 4 games and no external URLs, apart from the privacy link and the show link |
| `npx cap sync ios` | OK. 6 plugins found: haptics, local-notifications, preferences, share, splash-screen, status-bar. `Package.swift` was regenerated |
| `xcodebuild -resolvePackageDependencies` | OK. All Swift packages resolve |
| Headless Chrome smoke test (hub, stats, 4 games) | All 6 pages render. The hub and stats show the correct score, rank, streak and rating after the four games' results were recorded |
| `xcodebuild` simulator or device build | **Not done.** Xcode 26.5 on this Mac has no iOS 26.5 platform installed (Xcode > Settings > Components). Install it, then build |
| Native plugin behaviour (haptics, notification, share sheet) | **Not tested.** It needs a simulator or device. The code paths and fallbacks were checked in a browser only |
| Rendering inside WKWebView / `capacitor://` | Not tested (same reason) |

## 5. What is left for you (after Oct 31, when you can log in)

### In Xcode (no Apple login needed except for signing)
1. Install the iOS platform (Xcode > Settings > Components), then run `cd Mobile-fun-v2 && npm install && npm run cap:sync && npx cap open ios`. Run on a simulator and a real iPhone. Check:
   - the hub, the four games and the stats screen;
   - the haptics;
   - the share sheet;
   - the reminder (grant permission, then set a time one minute ahead);
   - airplane mode (everything should work offline).
2. Signing: choose your Team on the App target. Keep the bundle ID `com.acumengames.app`.
3. Bump the build number if needed. It is set to 2. If App Store Connect says a build with that number exists, raise it.
4. **Game Center (optional, not built).** Needs Xcode and App Store Connect:
   - add the Game Center capability;
   - create a leaderboard in App Store Connect (e.g. "Acumen Rating", an integer, higher is better);
   - add a Capacitor Game Center plugin, such as `@openforge/capacitor-game-connect`, and call it from `AcumenCore.record` or the hub.
   This is a strong "this is a real game" signal, but it is not required to resubmit.
5. **WidgetKit widget (optional, not built).** In Xcode, add a Widget Extension target and an App Group. A widget could show today's score and streak, but it needs the profile written to the App Group's UserDefaults (the Preferences plugin supports `Preferences.configure({ group: 'group.com.acumengames.app' })`). Not required for resubmission.

### On your website (the public URLs)
6. Redeploy the new `privacy.html` and `support.html` so the public Privacy Policy URL and Support URL match the app (the old privacy text mentions Google Fonts and the old support text describes "9 games").

### In App Store Connect
7. In the **same app record** (do **not** create a new app; a second record for the same content would be a worse 4.3 finding), create version **2.0**, upload the new build from Xcode, and attach it.
8. Replace **all** metadata with the listing in section 6 (name, subtitle, promo text, description, keywords, review notes).
9. Replace **all screenshots.** The files in `acumen - screenshots/` show the 9-game hub. Capture new ones (6.7" and 6.5") in this order:
   1. the hub with a filled Acumen Score ring and 4 solved cases;
   2. Bluff mid-game;
   3. Alibi mid-game;
   4. Missing Link;
   5. Rank;
   6. the stats screen with a streak.
10. App Privacy answers stay "Data Not Collected". Age rating stays 4+.
11. In the "Notes for Review" field, paste the review notes from section 6.
12. Reply in Resolution Center (draft in section 7) and/or request a call. Apple allows a phone call request from the rejection in App Store Connect. Do that **before** or with the new submission.
13. Submit for review.

## 6. Rewritten App Store listing

**Name (30 max):** `Acumen: Daily Case File` (23)

**Subtitle (30 max):** `Four cases. One daily score.` (28)

**Promotional text (170 max):**
```
A new case file every day: four original detective puzzles, one Acumen Score, one streak. Spot the lie, find the culprit, crack the link. Free, no ads.
```

**Keywords (100 max, comma-separated):**
```
detective,daily puzzle,logic,trivia,odd one out,riddle,word link,mystery,clue,streak,deduction
```

**Description:**
```
Every day, a new case file lands on your phone. Solve four original cases, earn your Acumen Score out of 1000, and climb from Bystander to Chief Inspector.

Acumen is not a pile of mini-games. It is one daily ritual with one score, built around the idea that sharp thinking is a detective skill.

TODAY'S CASE FILE
• BLUFF: Three statements, one lie. Spot the fake fact in five rounds that get harder each time.
• ALIBI: Nine words. Eight have an alibi. Find the culprit that doesn't belong.
• MISSING LINK: Three clues, one hidden word that links them all. Type it, but hints cost you points.
• RANK: Put the evidence in order, lowest to highest, by a real-world measure.

YOUR ACUMEN SCORE
Each case is worth up to 250 points. Together they make your daily Acumen Score out of 1000. Your 7-day Acumen Rating decides your rank: Bystander, Rookie, Officer, Investigator, Detective, Chief Inspector.

STREAKS AND STATS
Build a daily streak, chase a perfect "all cases closed" streak, and see your 14-day score history, career totals and averages for every game.

MADE FOR YOUR PHONE
• Haptic feedback on every answer
• An optional daily reminder when the new case file opens
• Share your score with the iOS share sheet (no answers revealed)
• Works fully offline: no account, no ads, no tracking, no in-app purchases

A new case file opens every day at midnight UTC. Come back tomorrow.

Made by Joel Comm and the team behind the AI for Everyone Show.
```

**Review notes (App Review Information > Notes):**
```
Hello, and thank you for the earlier feedback on Guideline 4.3. Version 2.0 is a substantially different product, not a re-skin of 1.0.

CONCEPT: Acumen is a "daily case file". Each day there is ONE new case made of four original puzzle games (Bluff, Alibi, Missing Link, Rank). The four games feed a single, shared progression system that exists only in Acumen: a daily Acumen Score (0-1000), a 7-day Acumen Rating with detective ranks (Bystander to Chief Inspector), a daily streak and an "all cases closed" streak, and a stats screen. It is a daily ritual with a unified identity, not a collection of unrelated mini-games.

WHAT CHANGED FROM 1.0:
- We removed 5 of the 9 games from 1.0 (Lineup, Echo, Cipher, Reflex, Sequence) and kept the four most original ones.
- New: the Acumen Score, rating, rank titles, streaks and stats screen (tap STATS on the home screen).
- New native iOS features: haptics, an optional daily local notification reminder, and the iOS share sheet.
- All puzzle content is original and authored by us. All code, fonts and puzzles are bundled; the app makes no network requests and works offline.
- Rewritten name, subtitle, description and screenshots.

HOW TO SEE IT: Launch the app. Play any case (e.g. tap BLUFF). When you finish, you are returned to the home screen with the case checked off and its points added to today's Acumen Score. Play all four to see the full case closed and the streak count. Tap STATS for the rating, history and per-game stats. The reminder toggle at the bottom of the home screen asks for notification permission only when turned on.

No login or account is required. No demo credentials are needed. If a phone call would help, we would very much welcome one: we want to make sure this is a clearly distinct app.
```

## 7. Draft Resolution Center reply and call talking points (DRAFT ONLY, not sent)

Joel: a reply is optional (the review-notes field already covers it). If you use it, send it with the new build. Use your own judgement on tone.

**Resolution Center reply (draft):**
```
Hello App Review team,

Thank you for your feedback on Guideline 4.3. We took it seriously and rebuilt the app rather than adjusting its description.

Acumen 2.0 is a single "daily case file" experience. Previous version 1.0 launched nine separate puzzle games. In 2.0 we removed five of them and kept four original games (Bluff, Alibi, Missing Link, Rank) that now feed one shared system unique to Acumen: a daily Acumen Score out of 1000, a 7-day Acumen Rating with detective rank titles, daily and "all cases closed" streaks, and a stats screen. The four games share a single detective identity and a single daily goal.

We have also added native iOS features (haptics, an optional daily local-notification reminder, and the iOS share sheet), made the app fully offline with no third-party network requests, and rewritten the name, subtitle, description and screenshots to describe exactly what the app contains. All puzzle content is original and written by us.

We are submitting version 2.0 under the same app record. If it would help your review, we would welcome a phone call to walk through the concept and answer any questions.

Thank you,
Joel Comm
Acumen
```

**Call talking points (if Apple phones you or you request a call):**
1. Open by acknowledging the feedback and say you rebuilt the product. Say the specific change: from a 9-game bundle to one daily case file with a shared score.
2. Name the unique parts in one sentence each: the Acumen Score (4 games x 250 points), the 7-day rating and rank titles, the dual streaks, the stats screen.
3. Originality: all content is authored by you, with no licensed or scraped puzzles. Be ready to say how many puzzles each game has (Bluff about 1,800, Alibi about 1,840, Missing Link 365; Rank about 250). Do not claim any game format is "new". Say the combination and the daily system are the product.
4. Ask directly: "Which specific app do you think this is too similar to?" That gives you a concrete target to address, which the written rejections never did.
5. Ask what Apple would need to see to approve this concept (for example more depth or a fifth game), and whether the Game Center leaderboard would help.
6. Mention that you are travelling and can only respond on specific days (you are not reachable by SMS until you are back on shore), so confirm the best phone number or time for them to call.
7. Close by confirming you are submitting under the same bundle ID and app record and ask for the expected review timeline.

## 8. Risks and honest notes
- Rank has about 250 puzzles (4 items each, with a metric and a fact). That is fine, but Lineup's 1,800 ordering puzzles use the same mechanic and could be folded in later for more depth. I did not do this.
- 4.3 is subjective. There is no guarantee v2 passes. What improves the odds: fewer games, a unifying system, native features, and honest metadata. What does not: more games, or new words for the same app.
- The strongest remaining weak spot is that each game's *format* is familiar. If rejected again, the next levers are: (1) build one deeper "signature" mechanic, for example a multi-step detective case that chains Alibi + Bluff + Missing Link clues into a single story; (2) add Game Center leaderboards or friends; (3) add an onboarding "case briefing". None of these is built.
- The notification and share code is untested on a device. Test before submitting, and take screenshots only from the real build.
- `ios/` still has odd leftover folders from v1 (`App 2`, `public 2`, etc.). They are not part of the build, and I did not delete them.
- The project folder still contains unrelated v1 files (`dist/`, `docs/`, `drift`, `trapdoor`, `vanish`, `screens/`). They do not ship in the app (`build.sh` copies only the 4 games). You can delete them for tidiness.
