import Image from "next/image";
import { CopyContract, CapsuleIcon } from "@/components/copy-contract";
import { TelegramIcon } from "@/components/site-header";
import { backgroundStickers, heroPill } from "@/lib/assets";
import { demoNote, hero, heroStats, token } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(4,0,154,0.86)_0%,rgba(4,0,154,0.6)_42%,rgba(4,0,154,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,0,154,0.96)_0%,rgba(4,0,154,0.88)_34%,rgba(4,0,154,0.25)_62%,rgba(4,0,154,0)_100%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 border-2 border-ice/50 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ice">
              <span className="inline-block h-1.5 w-1.5 bg-neon" />
              {token.chain}
            </span>
            <span className="border-2 border-ice/25 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ice/70">
              {token.launchpad}
            </span>
            <span className="border-2 border-ice/25 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ice/70">
              Community-run
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.84] tracking-[-0.015em] text-paper"
          >
            {hero.headline[0]}
            <br />
            <span className="text-neon">{hero.headline[1]}</span>
            <br />
            {hero.headline[2]}
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ice/80 sm:text-base">
            {hero.subhead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ice px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-[4px_4px_0_0_#c0fefc] transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            >
              <TelegramIcon className="h-4 w-4" />
              {hero.primaryCta.label}
            </a>
            <CopyContract variant="button" />
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden border-2 border-ice/25 bg-ice/20 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-abyss px-3 py-3">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-ice/55">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl text-paper">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-3 font-mono text-[10px] leading-relaxed text-ice/55">
            * {demoNote} Contract:{" "}
            <span className="text-ice/80">
              {token.contract.slice(0, 6)}…{token.contract.slice(-4)}
            </span>{" "}
            on {token.chain}.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center"
          >
            <div className="aspect-square w-[min(100%,520px)] rounded-full border-2 border-dashed border-ice/25 motion-reduce:animate-none lg:animate-[spin_60s_linear_infinite]" />
          </div>

          <div className="relative z-10 px-6 py-4 sm:px-10">
            <Image
              src={heroPill.src}
              alt={heroPill.alt}
              width={heroPill.width}
              height={heroPill.height}
              priority
              sizes="(min-width: 1024px) 46vw, 86vw"
              className="mx-auto h-auto w-full max-w-[500px] rotate-[16deg] drop-shadow-[0_28px_0_rgba(1,0,63,0.35)]"
            />

            <div className="absolute left-0 top-0 w-[26%] min-w-[72px] -rotate-12">
              <Image
                src={backgroundStickers[3].src}
                alt={backgroundStickers[3].alt}
                width={backgroundStickers[3].width}
                height={backgroundStickers[3].height}
                sizes="140px"
                className="h-auto w-full drop-shadow-[0_10px_0_rgba(1,0,63,0.35)]"
              />
            </div>

            <div className="absolute -right-1 bottom-2 w-[22%] min-w-[64px] rotate-[10deg]">
              <Image
                src={backgroundStickers[0].src}
                alt={backgroundStickers[0].alt}
                width={backgroundStickers[0].width}
                height={backgroundStickers[0].height}
                sizes="120px"
                className="h-auto w-full drop-shadow-[0_10px_0_rgba(1,0,63,0.35)]"
              />
            </div>
          </div>

          <div className="relative z-20 mx-auto mt-2 flex w-fit -rotate-3 items-center gap-2 border-2 border-ink bg-paper px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink shadow-hard-sm">
            <CapsuleIcon className="h-3.5 w-3.5" />
            Quantum pill · lot 001
          </div>
        </div>
      </div>
    </section>
  );
}
