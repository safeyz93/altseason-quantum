export const token = {
  name: "ALTSEASON QUANTUM",
  ticker: "QZZ",
  chain: "Solana",
  launchpad: "pump.fun",
  contract: "SOON",
  supply: "1,000,000,000",
  year: 2026,
  socials: {
    telegram: "https://t.me/altseasonqzz",
    telegramHandle: "@altseasonqzz",
    x: null as string | null,
  },
} as const;

export const demoNote =
  "Community numbers on this page are illustrative vibes, not live on-chain data.";

export const navLinks = [
  { label: "The Vault", href: "#vault" },
  { label: "Story", href: "#story" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Community", href: "#community" },
] as const;

export const hero = {
  eyebrow: "Solana / pump.fun / community-run",
  headline: ["One tabby.", "One capsule.", "One altseason."],
  subhead:
    "QZZ swallowed the green pill and slipped into the timeline where altseason never closed. He came back with stickers, a contract address, and a colony of cats who refuse to log off.",
  primaryCta: { label: "Join the colony", href: token.socials.telegram },
  secondaryCta: { label: "Copy contract" },
};

export const heroStats = [
  { label: "Ticker", value: "$QZZ" },
  { label: "Chain", value: "Solana" },
  { label: "Supply", value: "1B" },
  { label: "Timeline", value: "001" },
];

export const marqueeOneItems = [
  "$QZZ",
  "QUANTUM CAT",
  "GREEN CANDLES ONLY",
  "NO SLEEP TILL ALTSEASON",
  "ONE PILL, ONE TIMELINE",
  "SOLANA",
  "COLONY AWAKE",
  "WAGMI, PROBABLY",
];

export const marqueeTwoItems = [
  "THE CAT WAS RIGHT",
  "NINE LIVES, ONE BAG",
  "STICKERS SHIP FASTER THAN ROADMAPS",
  "$QZZ",
  "TIMELINE 001 ONLY",
  "PET THE CAT, HOLD THE CAT",
  "ALTSEASON IS A FEELING",
];

export const story = {
  kicker: "Origin file // timeline 001",
  heading: "Nine lives, one timeline.",
  paragraphs: [
    "Somewhere in Jakarta, at 03:12, a tabby named QZZ was sitting on a balcony watching a chart make the same sad shape for the fourth week in a row. He had a cap, a half-empty bowl, and absolutely no plan.",
    "Then a raccoon in a lab coat climbed over the railing, dropped a green capsule on the tiles, and said: \u201cAltseason. Do not swallow before launch.\u201d QZZ, being a cat, swallowed it immediately.",
    "He woke up in a timeline where every candle is green, every chart is shaped like a cat, and nobody has ever said the words \u201crisk-off.\u201d He brought back stickers as proof. The colony is everyone who looked at the stickers and said: yeah, I want to live there too.",
  ],
  pullQuote:
    "We are not early. We are simply in the timeline where it already happened.",
  lore: [
    { label: "Species", value: "Tabby / quantum" },
    { label: "Origin", value: "Jakarta, 03:12" },
    { label: "Diet", value: "Green capsules" },
    { label: "Weakness", value: "Red candles" },
  ],
};

export type RoadmapStatus = "done" | "active" | "next";

export const roadmap: {
  phase: string;
  title: string;
  status: RoadmapStatus;
  summary: string;
  items: string[];
}[] = [
  {
    phase: "01",
    title: "First Capsule",
    status: "done",
    summary: "The cat woke up, the contract went live, the colony found the group chat.",
    items: [
      "QZZ launches on pump.fun",
      "Contract address published and pinned",
      "Telegram colony opened",
      "Sticker pack v1 dropped",
    ],
  },
  {
    phase: "02",
    title: "Quantum Wake",
    status: "active",
    summary: "Stickers everywhere, raids scheduled around naps, vault filled with variants.",
    items: [
      "Meme vault shipped (20 stickers)",
      "Daily raid threads on Telegram",
      "Sticker drops for colony artists",
      "Community meme contests",
    ],
  },
  {
    phase: "03",
    title: "Altseason Signal",
    status: "next",
    summary: "Make the timeline louder: spaces, crossovers, and stickers in the real world.",
    items: [
      "Weekly community voice spaces",
      "Crossover raids with allied cat coins",
      "IRL sticker drops in three cities",
      "Colony art wall on the site",
    ],
  },
  {
    phase: "04",
    title: "Full Timeline Merge",
    status: "next",
    summary: "No dates, no promises. Just a cat with a bigger vault and a louder colony.",
    items: [
      "Community-voted sticker pack v3",
      "Merch experiments run by the colony",
      "More tools for meme makers",
      "Same cat. Same pill. Bigger timeline.",
    ],
  },
];

export const buySteps = [
  {
    step: "01",
    title: "Get a Solana wallet",
    body: "Install Phantom or Solflare on mobile or desktop. Write the seed phrase on paper, not in your notes app. Nobody from the colony will ever ask for it.",
  },
  {
    step: "02",
    title: "Fund it with SOL",
    body: "Send SOL from an exchange or another wallet. Keep a little extra for network fees and for the cat's snack budget.",
  },
  {
    step: "03",
    title: "Paste the contract into a swap",
    body: "Open pump.fun, paste the QZZ contract address below, and double-check the ticker before you confirm anything.",
  },
  {
    step: "04",
    title: "Verify, then ape responsibly",
    body: "Compare the address character by character with the one on this page. Meme coins are volatile, community-run experiments — size accordingly.",
  },
];

export const community = {
  kicker: "The colony",
  heading: "Cats assemble in the group chat.",
  body: "Raids, sticker requests, chart coping, and the occasional 4am voice note. The Telegram is the front door — knock once and someone will let you in.",
  channels: [
    {
      id: "telegram",
      label: "Telegram",
      handle: token.socials.telegramHandle,
      href: token.socials.telegram,
      note: "Main colony chat — raids and announcements",
      state: "live" as const,
    },
    {
      id: "x",
      label: "X / Twitter",
      handle: "@altseasonqzz",
      href: null,
      note: "Handle reserved — link lands here soon",
      state: "soon" as const,
    },
    {
      id: "contract",
      label: "Contract",
      handle: "SOON",
      href: null,
      note: "Solana · verify before every trade",
      state: "copy" as const,
    },
  ],
  stats: [
    { value: "12,480", label: "colonists" },
    { value: "3,200+", label: "stickers shipped" },
    { value: "24/7", label: "raid hours" },
  ],
};

export const footer = {
  disclaimer:
    "ALTSEASON QUANTUM ($QZZ) is a community-run meme coin with no intrinsic value, no team allocation promise, and no expectation of financial return. Nothing on this site is financial advice. Crypto assets are volatile and you can lose everything you put in. Always verify the contract address and never trade with money you cannot afford to lose.",
  credit: "Built by the colony. Not affiliated with pump.fun, Solana, or any wallet provider.",
  note: "QZZ is a fictional character created for this project.",
};
