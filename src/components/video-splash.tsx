"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { token } from "@/lib/content";
import { videoSplash } from "@/lib/assets";

export function VideoSplash() {
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const enterRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    enterRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button, [href], video[controls]",
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    if (reduced) videoRef.current?.pause();
  }, [reduced]);

  const dismiss = useCallback(() => {
    setVisible(false);
    document.body.style.overflow = "";
    window.setTimeout(() => {
      const main = document.getElementById("main-content");
      main?.focus({ preventScroll: true });
    }, 0);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="splash-title"
      className="fixed inset-0 z-[70] flex flex-col justify-end overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster={videoSplash.poster}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={videoSplash.webm} type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 dot-field opacity-25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-24 sm:px-6 sm:pb-12 lg:px-8">
        <div className="flex items-center gap-2 border-y-2 border-ice/40 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-ice">
          <span className="inline-block h-2 w-2 animate-pulse bg-neon motion-reduce:animate-none" />
          Timeline 001 · signal locked
        </div>

        <h1
          id="splash-title"
          className="mt-5 font-display text-[clamp(2.6rem,11vw,7.5rem)] uppercase leading-[0.82] tracking-[-0.01em] text-paper"
        >
          Altseason
          <br />
          <span className="text-neon">Quantum</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/85 sm:text-base">
          One tabby swallowed a green capsule and came back with the timeline
          where the charts never close. {token.ticker} is the proof. The colony
          is the witness.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            ref={enterRef}
            type="button"
            onClick={dismiss}
            className="inline-flex items-center gap-2 border-2 border-ink bg-ice px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-[4px_4px_0_0_#ffed00] transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
          >
            Enter the timeline
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex items-center border-2 border-ice/40 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ice transition-colors hover:border-ice hover:bg-ice hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
          >
            Skip intro
          </button>
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
          No audio · skip anytime · Esc to close
        </p>
      </div>
    </div>
  );
}
