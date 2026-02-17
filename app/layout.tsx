import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, Playfair_Display } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "O premium",
    template: "%s | O premium",
  },
  description:
    "歯科医院向けの品質にこだわった製品。歯科専用フェイスタオルで、診療所の衛生・コスト・患者体験をサポートします。",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${noto.variable} ${shippori.variable} ${playfair.variable}`}>
      <body className="antialiased bg-white text-gray-800">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
