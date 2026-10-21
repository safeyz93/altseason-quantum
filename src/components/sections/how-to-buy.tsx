import { CopyContract } from "@/components/copy-contract";
import { buySteps, token } from "@/lib/content";
import { kickerClass } from "@/components/ui/styles";

export function HowToBuy() {
  return (
    <section
      id="how-to-buy"
      aria-labelledby="buy-heading"
      className="relative scroll-mt-20 border-y-2 border-sky/40 bg-abyss px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className={kickerClass}>How to buy // four steps</p>
            <h2
              id="buy-heading"
              className="mt-3 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] uppercase leading-[0.88] text-paper"
            >
              Get the pill
              <br />
              <span className="text-neon">into your wallet.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/80">
              No presale, no whitelist, no secret link. You need a wallet, some
              SOL, and the exact contract address. Everything else is the same
              as any other Solana swap.
            </p>

            <div className="mt-6">
              <CopyContract variant="block" />
            </div>

            <div className="mt-4 flex items-start gap-3 border-2 border-neon/60 bg-ink p-4">
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border-2 border-neon font-mono text-[11px] font-bold text-neon"
              >
                !
              </span>
              <p className="text-[12px] leading-relaxed text-paper/85">
                Always verify the contract address before you trade. Lookalike
                tokens copy the name and the art — they cannot copy the address.
                If a link asks for your seed phrase, it is not the colony.
              </p>
            </div>

            <a
              href="https://pump.fun"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ice underline decoration-ice/40 decoration-2 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
            >
              Open pump.fun
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2">
            {buySteps.map((step) => (
              <li
                key={step.step}
                className="flex flex-col border-2 border-ink bg-paper p-4 text-ink shadow-hard-sm sm:p-5"
              >
                <span className="font-display text-4xl leading-none text-ink/20">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-lg uppercase leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
          Contract {token.contract.slice(0, 8)}…{token.contract.slice(-6)} ·{" "}
          {token.chain} · {token.launchpad}
        </p>
      </div>
    </section>
  );
}
