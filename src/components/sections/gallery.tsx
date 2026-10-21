"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/assets";
import { kickerClass } from "@/components/ui/styles";

type Filter = "all" | GalleryCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All timelines" },
  ...galleryCategories,
];

export function GallerySection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const close = useCallback(() => {
    setOpenIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const step = useCallback(
    (direction: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + direction + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "Tab") {
        const focusable =
          dialogRef.current?.querySelectorAll<HTMLElement>("button, [href]");
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
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <section
      id="vault"
      aria-labelledby="vault-heading"
      className="relative scroll-mt-20 border-t-2 border-ink/60 bg-abyss px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={kickerClass}>The vault // 20 variants</p>
            <h2
              id="vault-heading"
              className="mt-3 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] uppercase leading-[0.88] text-paper"
            >
              Every timeline
              <br />
              <span className="text-neon">left a sticker.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ice/75">
              QZZ came back with proof. Some variants are cats, some are
              cosplay, and three are clearly a glitch in the simulation. Click
              any sticker to inspect it.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter stickers"
            className="flex flex-wrap gap-2"
          >
            {filters.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "border-2 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "border-ink bg-ice text-ink shadow-hard-sm"
                      : "border-ice/30 text-ice/70 hover:border-ice hover:text-paper",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ice/45">
          Showing {items.length} of {galleryItems.length} stickers
        </p>

        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setOpenIndex(index);
                }}
                aria-label={`Open sticker: ${item.label}`}
                className="group flex h-full w-full flex-col border-2 border-ink bg-ink text-left shadow-hard-sm transition-[transform,box-shadow] duration-100 hover:-translate-y-1 hover:shadow-hard focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ice"
              >
                <span className="relative flex aspect-[4/5] w-full items-center justify-center bg-ice/95 px-2 pt-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 1280px) 18vw, (min-width: 640px) 30vw, 45vw"
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                  <span className="absolute left-0 top-0 bg-ink px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ice">
                    {item.id}
                  </span>
                </span>
                <span className="flex items-center justify-between gap-2 border-t-2 border-ink bg-paper px-2.5 py-2">
                  <span className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink">
                    {item.label}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/70">
                    {item.category === "dog" ? "glitch" : item.category}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && openIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Sticker viewer: ${active.label}`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
        >
          <div className="relative flex w-full max-w-2xl flex-col border-2 border-ice/40 bg-ink shadow-[10px_10px_0_0_rgba(62,219,240,0.35)]">
            <div className="flex items-center justify-between gap-3 border-b-2 border-ice/25 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-display text-lg uppercase leading-none text-paper">
                  {active.label}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ice/60">
                  {active.id} · {active.category === "dog" ? "glitch variant" : active.category}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="shrink-0 border-2 border-ice/40 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ice transition-colors hover:border-ice hover:bg-ice hover:text-ink"
              >
                Close
              </button>
            </div>

            <div className="flex items-center justify-center bg-ice px-3 py-4 sm:py-6">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="h-auto max-h-[52vh] w-full max-w-[400px] object-contain drop-shadow-[0_16px_0_rgba(1,0,63,0.22)]"
              />
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <button
                type="button"
                onClick={() => step(-1)}
                className="border-2 border-ice/40 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ice transition-colors hover:border-ice hover:bg-ice hover:text-ink"
              >
                ← Prev
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ice/55">
                {(openIndex ?? 0) + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                className="border-2 border-ice/40 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ice transition-colors hover:border-ice hover:bg-ice hover:text-ink"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
