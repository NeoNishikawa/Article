---
title: Article — About Me (Mecha Illustration-Led)
author: Destyan Ricky Salim
status: design.md v0.4
updated: 2026-11-14
supersedes: design.md v0.3
---

# v0.4 + v0.5 updates (2026-11-14, after Neo's pass)

- Neo rewrote the copy and tone himself: subtitle "Suka bikin eksperimen
  yang berakhir wacana", hero accent "MAKER .", skills heading "TOOLS IN MY
  HOME.", CTA "Let's See", footer "DESTYAN DAN CIEL // 2026", Skills gap is
  filled with real chips (PHP, RUST, Server) — his choices, not the plan's.
- **Images are in and placed**: hero `assets/image/Hyouta-1.jpg` (fetchpriority
  eager), skills `assets/image/chibi.jpg` (a "maaf baru bangun" meme image —
  Neo picked it), SoraNema card `assets/Proyek-image/Ciel-ori.png`.
  `loading="lazy"` was removed after lazy images never triggered in the
  review browser; all paths are relative and load.
- **SoraNema link now points at the live web app** (https://soranema.up.railway.app);
  project card keeps tags #Android #Web #Desktop #Anime.
- **LinkedIn → Instagram** (hero chip + contact panel, camera-glyph icon),
  Pinterest slot → **YouTube** (play-glyph icon). Instagram/Email/YouTube rows
  stay `panel-pending` with `[ menyusul — Neo isi ]` until Neo gives the URLs.
- **New section [04 // FAVORITES] between SKILLS and CONTACT**:
  `THE REPEAT. LIST.` — anime row (Tensura, Hunter × Hunter, 7 Prince) and
  games row (Wuthering Waves, Punishing: Gray Raven, Mecha Break). Posters
  carried over from branch `feature/dark-violet-offline-form`
  (`assets/image/favorites/{anime,game}/`). Contact renumbered to
  `[05 // GET IN TOUCH]`. Video playback is NOT wired yet — that belongs to
  the "pemanis" (anime.js) pass.
- **7 PRINCE card is a marked placeholder** (`[ NEO ISI Judul & Genre ]`,
  `data-ph="ANIME 03"`) — Neo will fill it in himself; do not invent the
  full title.
- Chibi "measurement noise": chibi.jpg is 736×736, Hyouta-1.jpg 670×670 —
  replaced via `object-fit: cover`, no distortion.
- **About placeholder replaced by `assets/image/gambar2.jpg`** (465×443,
  `.about-photo` / `.about-img`, natural aspect, chamfered + violet hairline).
- **Favorites posters changed from 3:4 to 16:9** — Neo asked, the 3:4 crop
  was breaking the artwork.
- Dead placeholder CSS removed (`.ph`, `.ph-inner`, `.ph-title`,
  `.ph-hero`, `.ph-spot`, `.ph-shot`, `.ph-about`); `.ph-empty` / `.ph-caption`
  stay (projec slots + captions still use them).
- **Punishing: Gray Raven card now uses `lucia.webp`** (Neo's edited artwork,
  1.75 MB PNG → 96 KB webp). `punishing-gray-raven.webp` (14.66 MB)
  kept on disk, unreferenced.
- **Videos re-encoded** (CRF 26, preset slow, audio AAC 96k, +faststart) —
  see sizes in the v0.5 note below. Originals backed up to
  `%TEMP%\soranema-videos-backup\video\`.
- **Wuthering Waves card now uses `jinzhi.webp`** — Neo's edited artwork
  (from `Pictures\hf`), re-encoded from PNG to webp q82 (2.2 MB → 145 KB).
  Old `wuthering-waves.webp` (5760×3240, 4.2 MB) kept on disk but unreferenced.
- All asset references updated to webp (Neo converted everything).
- **Favorites cards now play trailers in place** (#1 from the option list):
  `<video preload="none" playsinline poster=…>` behind a gold play button;
  `script.js` toggles `.is-playing` (hides button, adds `controls`, calls
  `play()`), only one video active at a time, `ended` resets to poster.
  `script.js` is now functional, not just a stub. Jaunted video locations:
  `assets/image/favorites/video/{anime,game}/`.
  Video files themselves are NOT re-encoded (source trailers were already
  efficient; a CRF-26 pass made some files bigger — rejected).
- **Favorites cards now flip like playing cards** (Neo's call after seeing
  option #1): `.fav-flip` (preserve-3d, 0.55s cubic-bezier) inside
  `.fav-card` (perspective 900px) — front = poster + gold play button,
  back = video with `controls` + `preload="none"` that autoplays on flip;
  `ended` or the × button unflips and resets to poster. Only one card
  flipped/playing at a time. `script.js` owns the flip; `prefers-reduced-motion`
  kills the transition (flip is then instant).
- **v0.6 — Domino layout** (Neo rejected the play button as distracting):
  no more icon — the card is a pure 16:9 domino tile. Front face: poster
  with scrim caption (title + meta over gradient). Back face: video with
  `controls` + top-left `● TITLE` "now playing" tag (gold dot, pulse).
  Both captions live INSIDE the faces; the old `.fav-body` bar is gone.
  Click anywhere on the poster face flips + autoplays.
- **v0.7 — Per-card Gooey switch** (Neo liked React Bits' GooeyNav):
  top-right pill on each card with IMAGE | VIDEO — sliding gold thumb
  (cubic-bezier bounce), state driven by `.is-flipped` on the card,
  buttons carry `aria-pressed` synced by `script.js`. Both paths work:
  click poster = flip to video, or IMAGE/VIDEO buttons toggle directly.
  Thumb and text colors flip via pure CSS (`.fav-card.is-flipped …`);
  JS only syncs `aria-pressed` and play/pause.
- **v0.8 — Picker bar on top of each card** (Neo: bar nempel di atas, tanpa gap,
  bukan overlay di gambar): full-width 34px header row `[ 01 // ANIME ]` …
  `[ 06 // GAMES ]` on the left, IMAGE | VIDEO pill on the right
  (`position: relative`, `height: 100%` sizing), `.fav-flip` went back to
  `aspect-ratio: 16 / 9` and sits below the bar — the bar never flips, so the
  toggle is always clickable in either mode.
- **v0.9 — Mobile layout fixes** (Neo saw broken layout on phone):
  `.section` padding 56px ≤720px; hero illustration capped 280px; about photo
  capped 420px & centered; CTA buttons full-width stacked ≤720px; **Favorites
  grid → 2 columns ≤720px, 1 column ≤480px** (was fixed 3 cols — at 702px the
  card was 197px and the bar's 227px content overflowed); bar height 36px
  (≤720) → 40px (≤480); IMAGE|VIDEO button 68×24, font 0.5rem at ≤480px;
  caption 2-line shrink ≤480px. Label `[ 01 // … ]` kept — fits at 2-col
  width (measured 101px + pill 126px < 300px card). JS untouched.
  Note: ≤480px verified by CSS logic only (review pane fixed at 702px);
  Neo verifies on phone via Live Server.
- **v1.0 — Logo D**: the inline chamfered-"D" SVG mark in the nav was replaced
  by `assets/image/logo-D.webp` (derived from Neo's `logo D.jpg`, 736×736 →
  144×144, q85, 6.5 KB). `.brand-mark` now an `<img>` with chamfer clip-path;
  wordmark "DESTYAN // 2026" text unchanged.

# Direction

Personal about-me page for Destyan, built like a poster-led illustration
page (not a dashboard, not a cockpit HUD). Reference: warm "trainer"
portfolio concept — giant stacked display type, character illustration
carrying the hero, numbered sections, playful confidence. Adapted to:

- **Mecha theme, original cast** — a pilot/hangar motif invented for this
  page. No Pokémon assets, no licensed mecha IP. All illustrations are
  placeholders until Destyan supplies final art.
- **60/30/10 midnight palette** — not the reference's cream/red.
- **Orbitron + Inter** — not the reference's grotesque/serif pairing.

Single self-contained HTML file. No build step. No runtime CDN. Vanilla
HTML + CSS + JS. Anime.js for scroll reveals and hero entrance.

# Persona & feeling

- Destyan — Teknik Informatika, builder, likes mecha/anime/games.
- Tone: confident but not arrogant, casual Indonesian in body copy,
  English in display type (Orbitron reads best uppercase Latin).
- Illustration-led: the character draws the eye first, typography second,
  content third. Empty sections are unacceptable — placeholder boxes,
  never blank space pretending to be minimal.

# Color orchestration

60-30-10, enforced. Dark, warm-accented, no rainbow.

| Role | Hex | Use |
|---|---|---|
| Midnight black (60%) | `#0A0A0F` `#0E0E12` `#15151C` | page base, panels, cards |
| Electric violet (30%) | `#8B5CF6` `#A855F7` `#7C3AED` | section indices, links, secondary CTA, placeholder glow, hover states |
| Golden yellow (10%) | `#FACC15` `#EAB308` `#FDE047` | primary CTA, accent word in headlines, "live" dots, price tags |
| Text primary | `#F8FAFC` | headlines, body copy |
| Text muted | `#8E8EA0` | meta rows, captions, timestamps |
| Hairline | `rgba(139, 92, 246, 0.18)` | structural lines, card borders |
| Warm noise | SVG feTurbulence, opacity 0.04 | "paper grain" on base — the warm soul of the reference, adapted dark |

**Surface ladder**
- L0 `#0A0A0F` + faint warm grain + one radial violet corner glow (top-left
  hero only).
- L1 `#0E0E12` — sub-panels, `border: 1px solid rgba(139,92,246,.14)`.
- L2 `#15151C` — active modules, `border: 1px solid rgba(139,92,246,.28)` +
  `inset 0 0 22px rgba(139,92,246,.10)`.
- Hover elevation: `0 0 44px -8px rgba(139,92,246,.35)` — no drop shadows.

# Typography

**Orbitron** — display and HUD. Files in `assets/fonts/` (copied from
`global_asset/Orbitron/static/`):
- `Orbitron-ExtraBold.ttf` (800) — hero display lines, section headers.
- `Orbitron-Bold.ttf` (700) — nav logo, card titles, stat numbers.
- `Orbitron-Medium.ttf` (500) — section indices, CTA microcopy, chips.

**Inter** — body copy and explanations (copied from
`ilovenime apk version/android/app/src/main/res/font/`):
- `inter_regular.ttf` (400) — body.
- `inter_medium.ttf` (500) — emphasized body, nav links.
- `inter_semibold.ttf` (600) — card titles, button labels.

**Mono pseudo** — `ui-monospace, 'JetBrains Mono', Consolas, monospace`
inline labels (`LOC.01`, tick rows). No third font file shipped.

No serif italic (reference used one) — Orbitron's geometry carries the
"mecha" accent alone; the accent word in headlines is gold, not italic.

# Placeholders — every image

All imagery ships as clearly marked placeholder boxes, never as stock or
AI filler. Each placeholder:

```html
<div class="ph ph-hero" data-ph="ILUSTRASI 01">
  <span>[ ILUSTRASI 01 — MECHA PILOT ]</span>
  <small>1610 × 1900 px · karakter original · transparan/PNG</small>
</div>
```

CSS gives it: diagonal hatch (violet 6% repeating-linear-gradient), dashed
1px violet border, centered mono label, fixed aspect ratio. Searchable via
`data-ph`. Replacement path documented in `assets/img/README.md` (created
when assets land).

Placeholder inventory:
1. `ILUSTRASI 01` — hero character, mecha pilot overlooking hangar/city,
   vertical ~4:5, transparent background preferred.
2. `ILUSTRASI 02` — about section portrait variant (sitting, reading), ~4:5.
3. `ILUSTRASI 03` — small chibi/spot illustration for skills section,
   square.
4. `ILUSTRASI 04` — closing CTA scene (sunset hangar), wide 16:9.
5. `SHOT 01–03` — project preview frames (browser/device mockups), 4:3.
   Slot 01 is SoraNema (real project — placeholder until Neo ships a frame).

# Layout

12-column, max-width 1320px, outer margin 48px desktop / 18px mobile.

1. **Nav** — sticky, blur 12px, L0/70. Left: placeholder logo mark (inline
   SVG monogram in chamfered square) + `DESTYAN` Orbitron 700 + `// 2026`
   mono. Center links (mono, uppercase, small): `HOME` · `ABOUT` · `PROJECTS`
   · `SKILLS` · `JOURNEY` → anchors. Right: chamfered gold pill
   `Let's Connect →`. Mobile: hamburger → slide-down sheet.
2. **Hero** — min-height 92vh, grid 7/5.
   - Left: eyebrow mono violet `// DESIGN · DEVELOP · EXPLORE`;
     display stacked Orbitron 800, clamp(2.6rem, 7.2vw, 5.4rem), leading
     .98:
     ```
     BUILDING
     IDEAS LIKE
     A PILOT.      ← accent word gold
     ```
     (final headline TBD by Neo — this ships as placeholder copy)
   - Inter body ≤ 540px: "Mahasiswa Teknik Informatika. Suka bikin hal-hal
     yang kecil tapi jujur — dari aplikasi Android sampai animasi UI."
   - CTA row: gold primary `Lihat Projek →` + ghost violet `Kenalan dulu →`
   - Below: 3 social icon chips (placeholder glyphs: GitHub / LinkedIn /
     Email — all `href="#"`) + mono aside: `ide berbeda, satu dorongan yang sama.`
   - Right: `ILUSTRASI 01` placeholder in chamfered L2 frame with corner
     notches; behind it a radial violet glow (like the reference's red
     sun, but violet); orbiting dashed ring (SVG, 60s rotate, decorative).
   - Far right vertical mono rail (desktop only):
     `LEARN — BUILD — EXPLORE — REPEAT` top→bottom, rotated 90°.
3. **01 // ABOUT** — header row: mono violet `[01 // TENTANG]` + hairline.
   Headline Orbitron 700 stacked:
   ```
   A STUDENT.
   A BUILDER.
   A LIFELONG [LEARNER.]  ← accent gold
   ```
   Paragraph (Indonesian, from real bio):
   "Mahasiswa Teknik Informatika — suka memecah masalah yang kecil, jujur,
    dan tidak bergeser dari aslinya. Terinspirasi dari mesin, anime, dan
    orang-orang yang tetap bikin meski belum sempurna."
   Button ghost: `Lebih tentang aku →` (anchor ke Contact).
   Right column: `ILUSTRASI 02` placeholder + 3 role cards stacked
   (L1, chamfered, violet edge):
   - `EXPLORER` — selalu penasaran, selalu belajar hal baru.
   - `BUILDER` — dari sketsa ke APK yang bisa dipasang.
   - `DESIGNER` — percaya bahwa visual yang tenang tetap bisa bicara.
4. **02 // PROJECTS** — `[02 // PROJEK]`, headline:
   `MY JOURNEY SO FAR.` (accent word `JOURNEY.` gold).
   3 cards grid, L1 chamfered. Each: `SHOT 0x` placeholder area (4:3) →
   title Orbitron 700 → 2-line Inter desc → tag chips (mono, violet) →
   arrow link.
   - Card 01: **SORANema** — "Pelacak anime Android + web. APK I0.V1
     sudah rilis." tags `#Android #Web #Anime`. Link: GitHub releases.
   - Cards 02, 03: placeholder `[ PROJEK 02 — menyusul ]` with dashed
     frame. Not invented.
   Button below: gold ghost `Lihat semua di GitHub →` (github.com/NeoNishikawa).
5. **03 // SKILLS** — `[03 // PERKAKAS]`, headline:
   `THE TOOLS IN MY HANGAR.` (accent `HANGAR.` gold).
   Three groups; chips are text (no icon font — inline SVG only where it
   exists, otherwise text chips). Only verified entries ship; the rest are
   `[ + kamu isi ]` placeholders:
   - **Languages**: HTML · CSS · JavaScript · `[ + kamu isi ]`
   - **Web**: Vanilla JS · Anime.js · Git · `[ + kamu isi ]`
   - **Tools & Lainnya**: VS Code · Android Studio · `[ + kamu isi ]`
   Right: `ILUSTRASI 03` chibi placeholder with caption
   `"Some side quests."`-style mono annotation.
6. **04 // FAVORITES** — `[04 // FAVORITES]`, headline `THE REPEAT. LIST.`.
   Two poster rows: `// ANIME` (Tensura, Hunter × Hunter, 7 PRINCE — the
   last is a placeholder `[ NEO ISI Judul & Genre ]`) and `// GAMES`
   (Wuthering Waves, Punishing: Gray Raven, Mecha Break). Poster cards,
   `object-fit: cover`, hover lift + violet glow. Video playback stays
   unwired until the anime.js pass; MP4s live on branch
   `feature/dark-violet-offline-form`, not in this working tree.
7. **05 // CONTACT** — `[05 // GET IN TOUCH]`, headline stacked:
   `LET'S BUILD
    SOMETHING [COOL.]` (accent gold).
   Inter body: "Terbuka untuk kolaborasi, pertukaran ide, atau sekadar
   ngobrol soal mecha." CTA row: gold `Let's Connect →` (mailto, address
   TBD by Neo) + ghost `Kirim pesan` (same mailto).
   Right: **dark panel** (L2, chamfered) with mono list rows (icon + label
   + arrow), each a real-or-placeholder link:
   - Email — `[ isi email kamu ]` placeholder
   - GitHub — `github.com/NeoNishikawa` (verified)
   - LinkedIn — `[ kamu isi ]` placeholder
   - Pinterest — `[ kamu isi ]` placeholder
8. **Footer** — hairline violet rule; mono row (Neo edited):
   `DESTYAN // 2026` left · `MADE BY CIEL × NEO` center ·
   `[ status dot gold ] SISTEM: NOMINAL` right.

# Animation — Anime.js 3.x

- Hero entrance: eyebrow fade 200ms → display lines rise stagger 90ms →
  body copy 600ms → CTAs bump; illustration placeholder fades+scales in.
- Scroll reveals via `[data-observe]`: sections, role cards, project cards,
  chips — translateY 32px→0, opacity, stagger 80ms.
- Projects: hover lift -10px + border violet→gold transition (CSS);
  click toggles nothing (links only).
- Skills chips: stagger pop-in on intersect.
- Contact panel rows: stagger slide-in from right on intersect.
- Decorative: hero ring rotation 60s linear infinite; gold status dot
  pulse 1.1s; **respect `prefers-reduced-motion`** — all of it disabled,
  final states painted in HTML/CSS.
- No scroll-jacking, no parallax on text, no marquee.

# Responsive

| Breakpoint | Behavior |
|---|---|
| `< 640px` | Hero stacks (type first, illustration after), display 2.4rem, nav → hamburger, role cards stack, project cards stack, contact panel stacks below CTAs |
| `640–1024px` | Hero 6/6, skills 2 col, projects 2 + 1 full-width |
| `>= 1280px` | max-width 1320px, vertical mono rail visible |
| `prefers-reduced-motion` | animations off, final state shown |

# Assets

From clone: `assets/favorites/**` stays in repo (used later if favorites
return; not on this page by default). Fonts copied to `assets/fonts/`.
`assets/anime.min.js` vendored (MIT).

Placeholders are CSS/SVG — no bitmap images ship until Neo drops final art
into `assets/img/`.

# Out of scope

- Pokémon assets, logos, names. Mecha IP not copied.
- Framework / build / CDN. Vanilla only.
- Invented projects, fake stats, fake testimonials, fake email.
- Face photos (unless Neo supplies art).
- Light theme. Dark only.
- Rounded-pill overload: only the nav CTA is a pill; everything else chamfered.

# Risks & needs

Needs from Neo before build:
1. Final hero headline (or approval of `BUILDING IDEAS LIKE A PILOT.`).
2. Second/third real projects for cards 02–03 (or keep placeholders).
3. His real stack for Skills groups (or keep `[ + kamu isi ]`).
4. Contact links: email, LinkedIn, Pinterest (or placeholders stay).
5. Final illustration art dropped into `assets/img/` (or ship as-is with placeholders).

Risks:
- Placeholder-heavy page will look "unfinished" if shipped raw to the public
  repo. Mitigation: replace `data-ph` slots first, or publish behind a branch.
- Orbitron at huge sizes renders blocky on cheap panels — acceptable, it's
  the requested voice.
- `file://` must work: all paths relative, no fetch, no module CDN.
