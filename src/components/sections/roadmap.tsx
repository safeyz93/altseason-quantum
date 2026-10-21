import { cn } from "@/lib/utils";
import { roadmap, type RoadmapStatus } from "@/lib/content";
import { kickerClass } from "@/components/ui/styles";

const statusStyles: Record<RoadmapStatus, string> = {
  done: "border-ink bg-ink text-ice",
  active: "border-ink bg-neon text-ink",
  next: "border-ink/30 bg-transparent text-ink/75",
};

const statusLabels: Record<RoadmapStatus, string> = {
  done: "Shipped",
  active: "In motion",
  next: "Next",
};

export function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="relative scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className={kickerClass}>Roadmap // no dates, just signals</p>
          <h2
            id="roadmap-heading"
            className="mt-3 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] uppercase leading-[0.88] text-paper"
          >
            The cat has
            <br />
            <span className="text-neon">a plan.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">
            Four phases, zero price targets. This is a meme project run by the
            people in the group chat — so the roadmap tracks what the colony
            ships, not what the chart does.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {roadmap.map((phase) => {
            const isActive = phase.status === "active";
            return (
              <li
                key={phase.phase}
                className={cn(
                  "relative flex flex-col border-2 p-5 sm:p-6",
                  isActive
                    ? "border-ink bg-ink text-paper shadow-[8px_8px_0_0_#ffd51e]"
                    : "border-ink bg-paper text-ink shadow-hard",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.24em]",
                        isActive ? "text-paper/55" : "text-ink/50",
                      )}
                    >
                      Phase {phase.phase}
                    </p>
                    <h3
                      className={cn(
                        "mt-1 font-display text-2xl uppercase leading-none sm:text-3xl",
                        isActive ? "text-paper" : "text-ink",
                      )}
                    >
                      {phase.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 border-2 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em]",
                      statusStyles[phase.status],
                      isActive && "border-ink",
                    )}
                  >
                    {phase.status === "active" ? (
                      <span className="inline-block h-1.5 w-1.5 animate-pulse bg-ink motion-reduce:animate-none" />
                    ) : null}
                    {statusLabels[phase.status]}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    isActive ? "text-paper/80" : "text-ink/70",
                  )}
                >
                  {phase.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-1 inline-block h-2 w-2 shrink-0 border",
                          isActive
                            ? "border-ice bg-neon"
                            : phase.status === "done"
                              ? "border-ink bg-ink"
                              : "border-ink bg-transparent",
                        )}
                      />
                      <span
                        className={cn(
                          "font-mono text-[11px] leading-relaxed tracking-[0.01em]",
                          isActive ? "text-paper/90" : "text-ink/80",
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
          Status is updated by the colony. No phase promises a price or a return.
        </p>
      </div>
    </section>
  );
}
