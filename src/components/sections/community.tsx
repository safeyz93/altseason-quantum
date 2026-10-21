import { CopyContract } from "@/components/copy-contract";
import { TelegramIcon } from "@/components/site-header";
import { community, demoNote, token } from "@/lib/content";
import { kickerClass } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="relative scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className={kickerClass}>{community.kicker}</p>
          <h2
            id="community-heading"
            className="mt-3 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] uppercase leading-[0.88] text-paper"
          >
            Cats assemble
            <br />
            <span className="text-neon">in the group chat.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/80">
            {community.body}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-px border-2 border-sky/60 bg-abyss">
            {community.stats.map((stat) => (
              <div key={stat.label} className="bg-sky px-3 py-4">
                <dd className="font-display text-2xl leading-none text-paper sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/60">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
            {demoNote}
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {community.channels.map((channel) => {
            const isLive = channel.state === "live";
            const isSoon = channel.state === "soon";

            return (
              <li key={channel.id}>
                {isLive && channel.href ? (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-4 border-2 border-ink bg-ice p-4 text-ink shadow-hard transition-transform duration-100 hover:-translate-y-0.5 sm:p-5"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-paper">
                        <TelegramIcon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-lg uppercase leading-none">
                          {channel.label}
                        </span>
                        <span className="mt-1 block truncate font-mono text-[11px] tracking-[0.04em] text-ink/60">
                          {channel.handle} · {channel.note}
                        </span>
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 border-2 border-ink bg-neon px-2.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                      Live
                      <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                ) : (
                  <div
                    className={cn(
                      "flex items-center justify-between gap-4 border-2 border-ice/20 bg-sky p-4 sm:p-5",
                      isSoon && "opacity-85",
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center border-2 border-ice/30 text-ice/70">
                        {channel.id === "x" ? (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="currentColor"
                          >
                            <path d="M17.6 3h3.3l-7.2 8.2L22 21h-6.5l-5-6.4L4.6 21H1.3l7.7-8.8L1.7 3h6.6l4.6 6 4.7-6Zm-1.2 16h1.8L7.5 4.9H5.6L16.4 19Z" />
                          </svg>
                        ) : (
                          <span className="font-mono text-xs">CA</span>
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-lg uppercase leading-none text-paper">
                          {channel.label}
                        </span>
                        <span className="mt-1 block truncate font-mono text-[11px] tracking-[0.04em] text-paper/60">
                          {channel.handle} · {channel.note}
                        </span>
                      </span>
                    </span>
                    {isSoon ? (
                      <span className="shrink-0 border-2 border-neon/60 px-2.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-neon">
                        Soon
                      </span>
                    ) : (
                      <CopyContract variant="compact" className="shrink-0" />
                    )}
                  </div>
                )}
              </li>
            );
          })}

          <li className="mt-2 flex flex-wrap items-center justify-between gap-3 border-2 border-dashed border-ice/25 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
              Full address:{" "}
              <span className="break-all text-paper/85">{token.contract}</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
