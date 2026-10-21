export type StickerImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const videoSplash = {
  webm: "/videos/video_splash.webm",
  poster: "/images/Background/Background%201.png",
};

export const heroPill: StickerImage = {
  src: "/images/Hero%20Image.png",
  width: 1536,
  height: 1024,
  alt: "A glossy green and white capsule — the quantum pill that started ALTSEASON QUANTUM",
};

export const backgroundStickers: StickerImage[] = [
  {
    src: "/images/Background/Background%201.png",
    width: 155,
    height: 169,
    alt: "QZZ sticker: tabby cat in a black cap holding the green capsule",
  },
  {
    src: "/images/Background/Background%202.png",
    width: 151,
    height: 175,
    alt: "QZZ sticker: tabby cat with a skateboard and the green capsule",
  },
  {
    src: "/images/Background/Background%203.png",
    width: 136,
    height: 171,
    alt: "QZZ sticker: tabby cat hugging the green capsule",
  },
  {
    src: "/images/Background/Background%204.png",
    width: 151,
    height: 174,
    alt: "QZZ sticker: tabby cat meditating with the green capsule",
  },
  {
    src: "/images/Background/Background%205.png",
    width: 160,
    height: 170,
    alt: "QZZ sticker: tabby cat in sunglasses holding the green capsule",
  },
  {
    src: "/images/Background/Background%206.png",
    width: 159,
    height: 170,
    alt: "QZZ sticker: tabby cat peeking behind the green capsule",
  },
  {
    src: "/images/Background/Background%207.png",
    width: 155,
    height: 164,
    alt: "QZZ sticker: tabby cat with a cap and the green capsule",
  },
  {
    src: "/images/Background/Background%208.png",
    width: 151,
    height: 166,
    alt: "QZZ sticker: tabby cat balancing the green capsule",
  },
];

export type GalleryCategory = "cat" | "dog" | "cosplay";

export type GalleryItem = StickerImage & {
  id: string;
  category: GalleryCategory;
  label: string;
};

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "cat", label: "Cats" },
  { id: "dog", label: "Glitches" },
  { id: "cosplay", label: "Cosplay" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "qzz-001",
    src: "/images/Gallery/Gallery%201.png",
    width: 173,
    height: 154,
    category: "cat",
    label: "Capsule cruiser",
    alt: "QZZ sticker: tabby cat in a black cap riding a skateboard while holding the green capsule",
  },
  {
    id: "qzz-002",
    src: "/images/Gallery/Gallery%202.png",
    width: 147,
    height: 186,
    category: "dog",
    label: "Timeline glitch",
    alt: "QZZ variant sticker: sleepy dog with a long orange snout holding the green capsule",
  },
  {
    id: "qzz-003",
    src: "/images/Gallery/Gallery%203.png",
    width: 126,
    height: 177,
    category: "cat",
    label: "Two-paw grip",
    alt: "QZZ sticker: tabby cat hugging the green capsule with both paws",
  },
  {
    id: "qzz-004",
    src: "/images/Gallery/Gallery%204.png",
    width: 142,
    height: 188,
    category: "cat",
    label: "Capsule cuddle",
    alt: "QZZ sticker: tabby cat with closed eyes cuddling the green capsule",
  },
  {
    id: "qzz-005",
    src: "/images/Gallery/Gallery%205.png",
    width: 126,
    height: 178,
    category: "dog",
    label: "Shiba crossover",
    alt: "QZZ variant sticker: shiba inu standing up and holding the green capsule",
  },
  {
    id: "qzz-006",
    src: "/images/Gallery/Gallery%206.png",
    width: 150,
    height: 169,
    category: "cat",
    label: "Green pill grip",
    alt: "QZZ sticker: tabby cat holding the green capsule beside its face",
  },
  {
    id: "qzz-007",
    src: "/images/Gallery/Gallery%207.png",
    width: 122,
    height: 173,
    category: "cosplay",
    label: "Knight of the capsule",
    alt: "QZZ sticker: tabby cat in knight armour holding a sword and the green capsule",
  },
  {
    id: "qzz-008",
    src: "/images/Gallery/Gallery%208.png",
    width: 143,
    height: 166,
    category: "cat",
    label: "Red scarf raid",
    alt: "QZZ sticker: tabby cat wearing a red scarf and holding the green capsule",
  },
  {
    id: "qzz-009",
    src: "/images/Gallery/Gallery%209.png",
    width: 115,
    height: 134,
    category: "cat",
    label: "Chart shock",
    alt: "QZZ sticker: surprised tabby cat staring at a capsule in its paws",
  },
  {
    id: "qzz-010",
    src: "/images/Gallery/Gallery%2010.png",
    width: 109,
    height: 137,
    category: "dog",
    label: "Doge echo",
    alt: "QZZ variant sticker: shiba inu portrait with the green capsule",
  },
  {
    id: "qzz-011",
    src: "/images/Gallery/Gallery%2011.png",
    width: 114,
    height: 134,
    category: "cosplay",
    label: "Aviator mode",
    alt: "QZZ sticker: tabby cat in aviator goggles and leather cap holding the green capsule",
  },
  {
    id: "qzz-012",
    src: "/images/Gallery/Gallery%2012.png",
    width: 135,
    height: 136,
    category: "cosplay",
    label: "Lily pad zen",
    alt: "QZZ sticker: calm kitten meditating on a lily pad surrounded by green capsules",
  },
  {
    id: "qzz-013",
    src: "/images/Gallery/Gallery%2013.png",
    width: 113,
    height: 127,
    category: "cat",
    label: "Kickflip",
    alt: "QZZ sticker: tabby cat doing a kickflip on a skateboard with a capsule in its mouth",
  },
  {
    id: "qzz-014",
    src: "/images/Gallery/Gallery%2014.png",
    width: 114,
    height: 129,
    category: "cat",
    label: "Tuxedo tabby",
    alt: "QZZ sticker: black and white tuxedo cat holding the green capsule",
  },
  {
    id: "qzz-015",
    src: "/images/Gallery/Gallery%2015.png",
    width: 133,
    height: 124,
    category: "cosplay",
    label: "Capsule rocket",
    alt: "QZZ sticker: cat knight flying on a capsule like a rocket",
  },
  {
    id: "qzz-016",
    src: "/images/Gallery/Gallery%2016.png",
    width: 99,
    height: 127,
    category: "cosplay",
    label: "Field explorer",
    alt: "QZZ sticker: tabby cat in an explorer jacket and satchel holding the green capsule",
  },
  {
    id: "qzz-017",
    src: "/images/Gallery/Gallery%2017.png",
    width: 145,
    height: 104,
    category: "cat",
    label: "Post-raid nap",
    alt: "QZZ sticker: tabby cat curled up asleep around the green capsule",
  },
  {
    id: "qzz-018",
    src: "/images/Gallery/Gallery%2018.png",
    width: 112,
    height: 129,
    category: "cosplay",
    label: "Orbital cat",
    alt: "QZZ sticker: cat in an astronaut suit floating with the green capsule",
  },
  {
    id: "qzz-019",
    src: "/images/Gallery/Gallery%2019.png",
    width: 122,
    height: 127,
    category: "cosplay",
    label: "Series A cat",
    alt: "QZZ sticker: tabby cat in a business suit and glasses holding the green capsule",
  },
  {
    id: "qzz-020",
    src: "/images/Gallery/Gallery%2020.png",
    width: 107,
    height: 130,
    category: "cosplay",
    label: "Top hat degen",
    alt: "QZZ sticker: tabby cat in a top hat and bow tie holding the green capsule",
  },
];
