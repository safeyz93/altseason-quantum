# ALTSEASON QUANTUM — $QZZ

Meme coin landing page (Next.js 15 App Router + TypeScript + Tailwind CSS v4). All copy is English, all visuals come from `public/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Content / links to edit

Everything sits in `src/lib/content.ts`:

- `token.contract` — Solana contract address (currently `DnEkiNhstiwfMaqFUHi4bAbSwPNHk28hTLUZGYw2pump`)
- `token.socials.telegram` — `https://t.me/altseasonqzz`
- `token.socials.x` — **currently `null`**, so X/Twitter renders as a "Soon" card. Once the link exists, set it to the URL and the Community + Footer sections will show it as live (the Community section checks `.state`, so also flip that channel's `state` from `"soon"` to `"live"` and give it an `href`).
- `demoNote` — the illustrative-data disclaimer shown in Hero, Community, and Footer.

## Design system

Palette supplied by the user (`#000000`, `#0F6292`, `#16FF00`, `#FFED00`), mapped to roles in `src/app/globals.css` `@theme`:

| Token | Hex | Role |
| --- | --- | --- |
| `--color-abyss` | `#000000` | page background |
| `--color-ink` | `#000000` | text on light, borders |
| `--color-paper` | `#F4F8F2` | light text / card surface |
| `--color-sky` | `#0F6292` | gallery tiles, stat cells, blue cards, hairline borders, hard shadows |
| `--color-ice` | `#16FF00` | primary CTA, ticker band, live accents |
| `--color-neon` | `#FFED00` | headline accent, active/soon badges |

Hard shadows use `#0F6292` so they read on black; the active roadmap phase uses the green `--shadow-hard-ice`.

Fonts: Anton (display), Space Grotesk (body), JetBrains Mono (data) via `next/font`.

## Assets

- `public/images/Hero Image.png` — hero pill
- `public/images/Background/Background 1–8.png` — scattered page background (seeded positions/sizes/rotations in `src/components/scattered-background.tsx`)
- `public/images/Gallery/Gallery 1–20.png` — vault grid + lightbox, metadata in `src/lib/assets.ts`
- `public/videos/video_splash.webm` — splash intro (poster falls back to Background 1)

Asset paths are centralized in `src/lib/assets.ts`; files keep their original names (URL-encoded where they contain spaces).

## Sections

Video splash → Hero → Marquee 1 → Vault → Story → Roadmap → How to Buy → Community → Marquee 2 → Footer.
