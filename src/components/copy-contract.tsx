import { cn } from "@/lib/utils";
import { token } from "@/lib/content";

type CopyContractProps = {
  variant?: "compact" | "button" | "block";
  className?: string;
};

const pendingTitle = "Contract address coming soon";

export function CopyContract({ variant = "compact", className }: CopyContractProps) {
  if (variant === "block") {
    return (
      <div
        className={cn(
          "flex flex-col gap-3 border-2 border-ice/30 bg-ink p-4 text-paper sm:flex-row sm:items-center sm:justify-between",
          className,
        )}
      >
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ice/70">
            Contract · Solana
          </p>
          <p className="mt-1 break-all font-mono text-[12px] leading-relaxed text-paper sm:text-sm">
            {token.contract}
          </p>
        </div>
        <button
          type="button"
          aria-disabled="true"
          title={pendingTitle}
          className="shrink-0 cursor-not-allowed border-2 border-ice/40 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ice/70"
        >
          Soon
        </button>
      </div>
    );
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        aria-disabled="true"
        title={pendingTitle}
        className={cn(
          "inline-flex cursor-not-allowed items-center justify-center gap-2 border-2 border-ink bg-paper px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60 shadow-[3px_3px_0_0_#ab03a9]",
          className,
        )}
      >
        <CapsuleIcon />
        Soon
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-disabled="true"
      title={pendingTitle}
      className={cn(
        "inline-flex cursor-not-allowed items-center gap-2 border-2 border-paper/30 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-paper/70",
        className,
      )}
    >
      <CapsuleIcon className="h-3.5 w-3.5" />
      Soon
    </button>
  );
}

export function CapsuleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
      fill="none"
    >
      <path
        d="M14.9 3.4a5.1 5.1 0 0 1 7.2 7.2l-9.3 9.3a5.1 5.1 0 0 1-7.2-7.2l9.3-9.3Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M9.2 9.1 16 15.9" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}
