import type { CSSProperties } from "react";
import Image from "next/image";
import { backgroundStickers } from "@/lib/assets";

type Scatter = {
  src: string;
  width: number;
  height: number;
  top: number;
  left: number;
  size: string;
  rotate: number;
  opacity: number;
  duration: number;
  delay: number;
  hideOnMobile?: boolean;
};

const scatter: Scatter[] = [
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 3, left: 78, size: "clamp(64px, 8vw, 150px)", rotate: -14, opacity: 0.5, duration: 11, delay: 0 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 4, left: 30, size: "clamp(44px, 5vw, 92px)", rotate: 9, opacity: 0.14, duration: 13, delay: 1.4, hideOnMobile: true },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 13, left: 92, size: "clamp(40px, 4.4vw, 76px)", rotate: 18, opacity: 0.35, duration: 15, delay: 2.2, hideOnMobile: true },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 20, left: 2, size: "clamp(72px, 9vw, 168px)", rotate: -20, opacity: 0.28, duration: 12, delay: 0.8 },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 27, left: 88, size: "clamp(56px, 7vw, 128px)", rotate: 12, opacity: 0.42, duration: 14, delay: 2.8 },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 33, left: 46, size: "clamp(40px, 5vw, 88px)", rotate: -8, opacity: 0.2, duration: 16, delay: 1.1, hideOnMobile: true },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 39, left: 6, size: "clamp(60px, 7.5vw, 140px)", rotate: 16, opacity: 0.3, duration: 13, delay: 0.4 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 45, left: 82, size: "clamp(64px, 8vw, 150px)", rotate: -12, opacity: 0.36, duration: 12, delay: 2 },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 51, left: 92, size: "clamp(44px, 5vw, 96px)", rotate: 22, opacity: 0.3, duration: 15, delay: 1.6, hideOnMobile: true },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 56, left: 24, size: "clamp(48px, 6vw, 110px)", rotate: -18, opacity: 0.22, duration: 17, delay: 2.6 },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 62, left: 3, size: "clamp(72px, 9vw, 170px)", rotate: 10, opacity: 0.32, duration: 12, delay: 0.6 },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 68, left: 86, size: "clamp(56px, 7vw, 124px)", rotate: -22, opacity: 0.34, duration: 14, delay: 1.9 },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 74, left: 42, size: "clamp(40px, 4.6vw, 80px)", rotate: 14, opacity: 0.18, duration: 16, delay: 0.2, hideOnMobile: true },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 79, left: 10, size: "clamp(64px, 8vw, 150px)", rotate: -10, opacity: 0.3, duration: 13, delay: 2.4 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 84, left: 88, size: "clamp(60px, 7.4vw, 140px)", rotate: 18, opacity: 0.36, duration: 12, delay: 1.2 },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 89, left: 30, size: "clamp(44px, 5.4vw, 100px)", rotate: -16, opacity: 0.22, duration: 15, delay: 0.9, hideOnMobile: true },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 93, left: 62, size: "clamp(52px, 6.4vw, 120px)", rotate: 8, opacity: 0.26, duration: 14, delay: 2.1 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 96, left: 4, size: "clamp(40px, 4.8vw, 92px)", rotate: -24, opacity: 0.24, duration: 16, delay: 1.5, hideOnMobile: true },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 11, left: 44, size: "clamp(38px, 4.2vw, 78px)", rotate: 12, opacity: 0.22, duration: 14, delay: 0.3, hideOnMobile: true },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 18, left: 63, size: "clamp(52px, 6vw, 116px)", rotate: -9, opacity: 0.26, duration: 12, delay: 1.7 },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 24, left: 16, size: "clamp(56px, 6.6vw, 120px)", rotate: 15, opacity: 0.24, duration: 15, delay: 2.3 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 30, left: 71, size: "clamp(44px, 5.2vw, 100px)", rotate: -13, opacity: 0.26, duration: 13, delay: 0.9, hideOnMobile: true },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 36, left: 94, size: "clamp(40px, 4.6vw, 88px)", rotate: 20, opacity: 0.22, duration: 16, delay: 1.1, hideOnMobile: true },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 42, left: 54, size: "clamp(48px, 5.6vw, 106px)", rotate: -7, opacity: 0.2, duration: 17, delay: 2.6, hideOnMobile: true },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 49, left: 13, size: "clamp(58px, 6.8vw, 128px)", rotate: 14, opacity: 0.28, duration: 12, delay: 0.5 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 54, left: 76, size: "clamp(50px, 5.8vw, 110px)", rotate: -18, opacity: 0.26, duration: 14, delay: 1.8 },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 60, left: 34, size: "clamp(42px, 4.8vw, 90px)", rotate: 10, opacity: 0.2, duration: 16, delay: 2.9, hideOnMobile: true },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 65, left: 95, size: "clamp(46px, 5.4vw, 104px)", rotate: 22, opacity: 0.24, duration: 13, delay: 0.7 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 71, left: 16, size: "clamp(54px, 6.4vw, 118px)", rotate: -11, opacity: 0.26, duration: 15, delay: 1.3 },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 77, left: 58, size: "clamp(40px, 4.6vw, 86px)", rotate: 17, opacity: 0.18, duration: 17, delay: 2.2, hideOnMobile: true },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 82, left: 90, size: "clamp(52px, 6vw, 112px)", rotate: -21, opacity: 0.28, duration: 12, delay: 0.4 },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 86, left: 22, size: "clamp(44px, 5vw, 96px)", rotate: 8, opacity: 0.22, duration: 14, delay: 1.6 },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 91, left: 48, size: "clamp(58px, 6.6vw, 124px)", rotate: -6, opacity: 0.24, duration: 16, delay: 2.4 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 95, left: 77, size: "clamp(42px, 4.8vw, 92px)", rotate: 16, opacity: 0.26, duration: 13, delay: 0.8, hideOnMobile: true },
];

export function ScatteredBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <div className="absolute inset-0 grid-field opacity-[0.5]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(62,219,240,0.22),transparent_60%)]" />
      {scatter.map((item, index) => {
        const style: CSSProperties & { "--float-rotate"?: string } = {
          top: `${item.top}%`,
          left: `${item.left}%`,
          width: item.size,
          opacity: item.opacity,
          animationDuration: `${item.duration}s`,
          animationDelay: `${item.delay}s`,
          "--float-rotate": `${item.rotate}deg`,
        };

        return (
          <div
            key={`${item.src}-${index}`}
            style={style}
            className={`absolute animate-float motion-reduce:animate-none ${
              item.hideOnMobile ? "hidden lg:block" : ""
            }`}
          >
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              className="h-auto w-full drop-shadow-[0_12px_18px_rgba(1,0,63,0.45)]"
              priority={false}
            />
          </div>
        );
      })}
    </div>
  );
}
