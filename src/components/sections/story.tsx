import Image from "next/image";
import { backgroundStickers } from "@/lib/assets";
import { story } from "@/lib/content";

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative scroll-mt-20 border-y-[3px] border-ink bg-paper px-4 py-16 text-ink sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#000000_1px,transparent_1px)] [background-size:26px_26px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-ink/60">
            {story.kicker}
          </p>
          <h2
            id="story-heading"
            className="mt-3 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.86]"
          >
            {story.heading}
          </h2>

          <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-ink/80 sm:text-base">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-ink pl-5">
            <p className="font-display text-xl uppercase leading-[1.15] sm:text-2xl">
              “{story.pullQuote}”
            </p>
            <cite className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink/60">
              — QZZ, on the way back from timeline 001
            </cite>
          </blockquote>
        </div>

        <div className="flex flex-col justify-start gap-5">
          <figure className="rotate-2 border-2 border-ink bg-paper p-3 shadow-hard">
            <div className="flex aspect-[4/5] items-center justify-center bg-sky px-4">
              <Image
                src={backgroundStickers[3].src}
                alt={backgroundStickers[3].alt}
                width={backgroundStickers[3].width}
                height={backgroundStickers[3].height}
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="h-4/5 w-auto object-contain drop-shadow-[0_14px_0_rgba(15,98,146,0.18)]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-2 border-t-2 border-ink pt-2 font-mono text-[10px] uppercase tracking-[0.14em]">
              <span>Subject: QZZ</span>
              <span className="text-ink/50">Sticker 004</span>
            </figcaption>
          </figure>

          <dl className="grid grid-cols-2 gap-px border-2 border-ink bg-ink">
            {story.lore.map((entry) => (
              <div key={entry.label} className="bg-paper px-3 py-3">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">
                  {entry.label}
                </dt>
                <dd className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.06em]">
                  {entry.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
