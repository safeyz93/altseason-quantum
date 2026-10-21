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
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 3, left: 78, size: "clamp(154px, 19.2vw, 360px)", rotate: -14, opacity: 0.5, duration: 11, delay: 0 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 4, left: 30, size: "clamp(66px, 7.5vw, 138px)", rotate: 9, opacity: 0.14, duration: 13, delay: 1.4, hideOnMobile: true },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 13, left: 92, size: "clamp(60px, 6.6vw, 114px)", rotate: 18, opacity: 0.35, duration: 15, delay: 2.2, hideOnMobile: true },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 20, left: 2, size: "clamp(173px, 21.6vw, 403px)", rotate: -20, opacity: 0.28, duration: 12, delay: 0.8 },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 27, left: 88, size: "clamp(84px, 10.5vw, 192px)", rotate: 12, opacity: 0.42, duration: 14, delay: 2.8 },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 33, left: 46, size: "clamp(96px, 12.0vw, 211px)", rotate: -8, opacity: 0.2, duration: 16, delay: 1.1, hideOnMobile: true },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 39, left: 6, size: "clamp(90px, 11.2vw, 210px)", rotate: 16, opacity: 0.3, duration: 13, delay: 0.4 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 45, left: 82, size: "clamp(96px, 12.0vw, 225px)", rotate: -12, opacity: 0.36, duration: 12, delay: 2 },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 51, left: 92, size: "clamp(106px, 12.0vw, 230px)", rotate: 22, opacity: 0.3, duration: 15, delay: 1.6, hideOnMobile: true },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 56, left: 24, size: "clamp(72px, 9.0vw, 165px)", rotate: -18, opacity: 0.22, duration: 17, delay: 2.6 },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 62, left: 3, size: "clamp(173px, 21.6vw, 408px)", rotate: 10, opacity: 0.32, duration: 12, delay: 0.6 },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 68, left: 86, size: "clamp(84px, 10.5vw, 186px)", rotate: -22, opacity: 0.34, duration: 14, delay: 1.9 },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 74, left: 42, size: "clamp(60px, 6.9vw, 120px)", rotate: 14, opacity: 0.18, duration: 16, delay: 0.2, hideOnMobile: true },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 79, left: 10, size: "clamp(154px, 19.2vw, 360px)", rotate: -10, opacity: 0.3, duration: 13, delay: 2.4 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 84, left: 88, size: "clamp(90px, 11.1vw, 210px)", rotate: 18, opacity: 0.36, duration: 12, delay: 1.2 },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 89, left: 30, size: "clamp(106px, 13.0vw, 240px)", rotate: -16, opacity: 0.22, duration: 15, delay: 0.9, hideOnMobile: true },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 93, left: 62, size: "clamp(78px, 9.6vw, 180px)", rotate: 8, opacity: 0.26, duration: 14, delay: 2.1 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 96, left: 4, size: "clamp(60px, 7.2vw, 138px)", rotate: -24, opacity: 0.24, duration: 16, delay: 1.5, hideOnMobile: true },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 11, left: 44, size: "clamp(91px, 10.1vw, 187px)", rotate: 12, opacity: 0.22, duration: 14, delay: 0.3, hideOnMobile: true },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 18, left: 63, size: "clamp(78px, 9.0vw, 174px)", rotate: -9, opacity: 0.26, duration: 12, delay: 1.7 },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 24, left: 16, size: "clamp(134px, 15.8vw, 288px)", rotate: 15, opacity: 0.24, duration: 15, delay: 2.3 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 30, left: 71, size: "clamp(66px, 7.8vw, 150px)", rotate: -13, opacity: 0.26, duration: 13, delay: 0.9, hideOnMobile: true },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 36, left: 94, size: "clamp(60px, 6.9vw, 132px)", rotate: 20, opacity: 0.22, duration: 16, delay: 1.1, hideOnMobile: true },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 42, left: 54, size: "clamp(115px, 13.4vw, 254px)", rotate: -7, opacity: 0.2, duration: 17, delay: 2.6, hideOnMobile: true },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 49, left: 13, size: "clamp(87px, 10.2vw, 192px)", rotate: 14, opacity: 0.28, duration: 12, delay: 0.5 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 54, left: 76, size: "clamp(120px, 13.9vw, 264px)", rotate: -18, opacity: 0.26, duration: 14, delay: 1.8 },
  { src: backgroundStickers[5].src, width: backgroundStickers[5].width, height: backgroundStickers[5].height, top: 60, left: 34, size: "clamp(63px, 7.2vw, 135px)", rotate: 10, opacity: 0.2, duration: 16, delay: 2.9, hideOnMobile: true },
  { src: backgroundStickers[2].src, width: backgroundStickers[2].width, height: backgroundStickers[2].height, top: 65, left: 95, size: "clamp(69px, 8.1vw, 156px)", rotate: 22, opacity: 0.24, duration: 13, delay: 0.7 },
  { src: backgroundStickers[7].src, width: backgroundStickers[7].width, height: backgroundStickers[7].height, top: 71, left: 16, size: "clamp(130px, 15.4vw, 283px)", rotate: -11, opacity: 0.26, duration: 15, delay: 1.3 },
  { src: backgroundStickers[4].src, width: backgroundStickers[4].width, height: backgroundStickers[4].height, top: 77, left: 58, size: "clamp(60px, 6.9vw, 129px)", rotate: 17, opacity: 0.18, duration: 17, delay: 2.2, hideOnMobile: true },
  { src: backgroundStickers[1].src, width: backgroundStickers[1].width, height: backgroundStickers[1].height, top: 82, left: 90, size: "clamp(125px, 14.4vw, 269px)", rotate: -21, opacity: 0.28, duration: 12, delay: 0.4 },
  { src: backgroundStickers[6].src, width: backgroundStickers[6].width, height: backgroundStickers[6].height, top: 86, left: 22, size: "clamp(66px, 7.5vw, 144px)", rotate: 8, opacity: 0.22, duration: 14, delay: 1.6 },
  { src: backgroundStickers[0].src, width: backgroundStickers[0].width, height: backgroundStickers[0].height, top: 91, left: 48, size: "clamp(87px, 9.9vw, 186px)", rotate: -6, opacity: 0.24, duration: 16, delay: 2.4 },
  { src: backgroundStickers[3].src, width: backgroundStickers[3].width, height: backgroundStickers[3].height, top: 95, left: 77, size: "clamp(101px, 11.5vw, 221px)", rotate: 16, opacity: 0.26, duration: 13, delay: 0.8, hideOnMobile: true },
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
