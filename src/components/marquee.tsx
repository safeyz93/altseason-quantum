import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  tone?: "ink" | "ice" | "neon";
  className?: string;
};

const tones = {
  ink: "border-ink bg-ink text-ice",
  ice: "border-ink bg-ice text-ink",
  neon: "border-ink bg-neon text-ink",
} as const;

export function Marquee({
  items,
  direction = "left",
  tone = "ink",
  className,
}: MarqueeProps) {
  const animation =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden border-y-2 py-3",
        tones[tone],
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max hover:[animation-play-state:paused] motion-reduce:animate-none",
          animation,
        )}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item, index) => (
              <span
                key={`${copy}-${item}-${index}`}
                className="flex shrink-0 items-center gap-5 pr-5 font-display text-lg uppercase tracking-[0.06em] sm:text-xl"
              >
                {item}
                <CapsuleDot />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CapsuleDot() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
    >
      <path
        d="M15 3.5a5 5 0 0 1 7 7l-8.5 8.5a5 5 0 0 1-7-7L15 3.5Z"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path d="M9.4 9.4 15 15" stroke="currentColor" strokeWidth="2.6" />
    </svg>
  );
}
