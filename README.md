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

- `token.contract` — placeholder `SOON` for now (real SPL address not published yet). Copy buttons are intentionally inert until the address is live.
- `token.socials.telegram` — `https://t.me/altseasonqzz`
- `token.socials.x` — **currently `null`**, so X/Twitter renders as a "Soon" card. Once the link exists, set it to the URL and the Community + Footer sections will show it as live (the Community section checks `.state`, so also flip that channel's `state` from `"soon"` to `"live"` and give it an `href`).
- `demoNote` — the illustrative-data disclaimer shown in Hero, Community, and Footer.

## Design system

Palette supplied by the user (`#5003C0`, `#AB03A9`, `#FF467A`, `#FFD51E`), mapped to roles in `src/app/globals.css` `@theme`:

| Token | Hex | Role |
| --- | --- | --- |
| `--color-abyss` | `#5003C0` | page background (royal purple) |
| `--color-ink` | `#17002E` | text on light, borders, hard shadows (derived neutral) |
| `--color-paper` | `#FFF4FA` | light text / card surface (derived neutral) |
| `--color-sky` | `#AB03A9` | gallery tiles, stat cells, secondary cards, hairlines |
| `--color-ice` | `#FF467A` | primary CTA, ticker band, live accents |
| `--color-neon` | `#FFD51E` | headline accent, kickers, active/soon badges, CTA shadows |

Hard shadows use the deep plum `#17002E` so they read on purple; the active roadmap phase uses the yellow `--shadow-hard-ice`.

Fonts: Anton (display), Space Grotesk (body), JetBrains Mono (data) via `next/font`.

## Assets

- `public/images/Hero Image.png` — hero pill
- `public/images/Background/Background 1–8.png` — scattered page background (seeded positions/sizes/rotations in `src/components/scattered-background.tsx`)
- `public/images/Gallery/Gallery 1–20.png` — vault grid + lightbox, metadata in `src/lib/assets.ts`
- `public/videos/video_splash.webm` — splash intro (poster falls back to Background 1)

Asset paths are centralized in `src/lib/assets.ts`; files keep their original names (URL-encoded where they contain spaces).

## Sections

Video splash → Hero → Marquee 1 → Vault → Story → Roadmap → How to Buy → Community → Marquee 2 → Footer.
