import { CapsuleIcon, CopyContract } from "@/components/copy-contract";
import { TelegramIcon } from "@/components/site-header";
import { demoNote, footer, navLinks, token } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t-[3px] border-sky/60 bg-ink px-4 pb-8 pt-14 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b-2 border-sky/40 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper/55">
              Timeline 001 · community token
            </p>
            <p className="mt-3 font-display text-[clamp(2rem,6vw,4.75rem)] uppercase leading-[0.82]">
              Altseason
              <br />
              <span className="text-neon">Quantum</span>
              <span className="text-paper/35"> — $QZZ</span>
            </p>
          </div>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 border-2 border-ice/40 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ice transition-colors hover:border-ice hover:bg-ice hover:text-ink"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="max-w-xs text-[13px] leading-relaxed text-paper/70">
              One tabby. One capsule. One timeline where altseason never closed.
              A meme project made by the people who keep posting the stickers.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 border-2 border-ice/20 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/60">
              <CapsuleIcon className="h-3 w-3" />
              {token.chain} · {token.launchpad}
            </p>
          </div>

          <nav aria-label="Footer sections">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-paper/55">
              Sections
            </h2>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/80 transition-colors hover:text-neon"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-paper/55">
              Community
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={token.socials.telegram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/80 transition-colors hover:text-neon"
                >
                  <TelegramIcon className="h-3.5 w-3.5" />
                  Telegram
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/40">
                  X / Twitter — soon
                </span>
              </li>
              <li>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/80 transition-colors hover:text-neon"
                >
                  pump.fun ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-paper/55">
              Contract
            </h2>
            <p className="mt-3 break-all font-mono text-[10px] leading-relaxed text-paper/75">
              {token.contract}
            </p>
            <CopyContract variant="compact" className="mt-3 border-ice/40" />
          </div>
        </div>

        <div className="mt-10 border-2 border-ice/20 p-4 sm:p-5">
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-neon">
            Risk disclaimer
          </h2>
          <p className="mt-2 max-w-4xl text-[12px] leading-relaxed text-paper/75 sm:text-[13px]">
            {footer.disclaimer}
          </p>
          <p className="mt-3 font-mono text-[10px] leading-relaxed text-paper/50">
            {footer.note} {demoNote}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-sky/30 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {token.year} {token.name} — {token.ticker}
          </p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
