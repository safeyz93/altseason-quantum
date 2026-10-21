import { cn } from "@/lib/utils";

export const btnBase =
  "inline-flex items-center justify-center gap-2 border-2 border-ink px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-[transform,box-shadow,background-color,color] duration-100 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ice active:translate-y-1 active:shadow-none";

export const btnPrimary = cn(
  btnBase,
  "bg-ice text-ink shadow-hard-sm hover:-translate-y-0.5 hover:bg-neon hover:shadow-hard",
);

export const btnOnDark = cn(
  btnBase,
  "bg-transparent text-paper shadow-[3px_3px_0_0_#ffd51e] hover:-translate-y-0.5 hover:bg-paper hover:text-ink",
);

export const cardClass =
  "border-2 border-ink bg-paper text-ink shadow-hard";

export const kickerClass =
  "font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-neon";

export const displayClass =
  "font-display uppercase leading-[0.86] tracking-[-0.01em] text-paper";
