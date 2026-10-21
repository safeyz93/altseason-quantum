import Link from "next/link";
import { CopyContract, CapsuleIcon } from "@/components/copy-contract";
import { navLinks, token } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-sky/70 bg-abyss/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="group flex items-center gap-2.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ice"
        >
          <span className="grid h-9 w-9 place-items-center border-2 border-ice bg-ink text-ice transition-colors group-hover:bg-ice group-hover:text-ink">
            <CapsuleIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-paper">$QZZ</span>
            <span className="mt-0.5 hidden font-mono text-[9px] uppercase tracking-[0.24em] text-ice/70 sm:block">
              Altseason Quantum
            </span>
          </span>
        </Link>

        <nav aria-label="Sections" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-ice focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ice"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CopyContract variant="compact" className="hidden sm:inline-flex" />
          <a
            href={token.socials.telegram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border-2 border-ink bg-ice px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-neon focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper"
          >
            <TelegramIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Telegram</span>
            <span className="sm:hidden">TG</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M21.9 4.3a1.2 1.2 0 0 0-1.2-.2L2.9 11.2a1.2 1.2 0 0 0 .1 2.3l4.3 1.3 1.6 5.2a1.2 1.2 0 0 0 2 .5l2.4-2.3 4.3 3.2a1.2 1.2 0 0 0 1.9-.7l3-14.7a1.2 1.2 0 0 0-.6-1.4ZM9.6 14.1l8.4-6.4-6.7 7.4-.3 3-1.4-4Z" />
    </svg>
  );
}
