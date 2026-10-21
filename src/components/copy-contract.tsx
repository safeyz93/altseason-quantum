"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { token } from "@/lib/content";

type CopyContractProps = {
  variant?: "compact" | "button" | "block";
  className?: string;
};

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = value;
      area.setAttribute("readonly", "");
      area.style.position = "absolute";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
}

export function CopyContract({ variant = "compact", className }: CopyContractProps) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  async function handleCopy() {
    const ok = await copyText(token.contract);
    if (!ok) return;
    setCopied(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 2200);
  }

  if (variant === "block") {
    return (
      <div
        className={cn(
          "flex flex-col gap-3 border-2 border-ink bg-ink p-4 text-paper sm:flex-row sm:items-center sm:justify-between",
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
          onClick={handleCopy}
          className="shrink-0 border-2 border-ice bg-ice px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-neon focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Contract address copied to clipboard" : ""}
        </span>
      </div>
    );
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "inline-flex items-center justify-center gap-2 border-2 border-ink bg-paper px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-[3px_3px_0_0_#c0fefc] transition-[transform,box-shadow] duration-100 hover:-translate-y-0.5 hover:shadow-hard active:translate-y-1 active:shadow-none",
          className,
        )}
      >
        <CapsuleIcon />
        {copied ? "Contract copied" : "Copy contract"}
        <span className="sr-only" aria-live="polite">
          {copied ? "Contract address copied to clipboard" : ""}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? "Contract copied" : "Copy contract address"}
      className={cn(
        "inline-flex items-center gap-2 border-2 border-ice/40 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ice transition-colors hover:border-ice hover:bg-ice hover:text-ink",
        className,
      )}
    >
      <CapsuleIcon className="h-3.5 w-3.5" />
      {copied ? "Copied" : "Copy CA"}
      <span className="sr-only" aria-live="polite">
        {copied ? "Contract address copied to clipboard" : ""}
      </span>
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
