import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ALTSEASON QUANTUM ($QZZ) — The cat that swallowed the quantum pill",
  description:
    "One tabby. One capsule. One timeline where altseason never closed. ALTSEASON QUANTUM ($QZZ) is a community-run meme token on Solana. Not financial advice.",
  icons: { icon: "/icons/favicon.png" },
  openGraph: {
    title: "ALTSEASON QUANTUM ($QZZ)",
    description:
      "The cat took the quantum pill and came back with altseason. Community meme token on Solana.",
    images: ["/images/Hero%20Image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-abyss text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
