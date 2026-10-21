import { Marquee } from "@/components/marquee";
import { ScatteredBackground } from "@/components/scattered-background";
import { SiteHeader } from "@/components/site-header";
import { VideoSplash } from "@/components/video-splash";
import { Community } from "@/components/sections/community";
import { Footer } from "@/components/sections/footer";
import { GallerySection } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { HowToBuy } from "@/components/sections/how-to-buy";
import { Roadmap } from "@/components/sections/roadmap";
import { Story } from "@/components/sections/story";
import { marqueeOneItems, marqueeTwoItems } from "@/lib/content";

export default function Home() {
  return (
    <>
      <VideoSplash />

      <a
        href="#main-content"
        className="sr-only z-[90] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:border-2 focus:border-ink focus:bg-ice focus:px-4 focus:py-3 focus:font-mono focus:text-[11px] focus:font-bold focus:uppercase focus:tracking-[0.16em] focus:text-ink"
      >
        Skip to content
      </a>

      <div className="relative isolate min-h-screen overflow-x-clip">
        <ScatteredBackground />

        <SiteHeader />

        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 outline-none"
        >
          <Hero />

          <Marquee items={marqueeOneItems} direction="left" tone="ink" />

          <GallerySection />
          <Story />
          <Roadmap />
          <HowToBuy />
          <Community />

          <Marquee items={marqueeTwoItems} direction="right" tone="ice" />
        </main>

        <Footer />
      </div>
    </>
  );
}
