import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/schemas";
import LpHeader from "@/components/dental-towel/LpHeader";
import LpFooter from "@/components/dental-towel/LpFooter";
import Image from "next/image";
import ProductGallerySection from "@/components/dental-towel/ProductGallerySection";

const PRODUCT_TITLE = "商品紹介｜O premium 歯科専用フェイスタオル";
const PRODUCT_DESCRIPTION =
  "元歯科助手の「こんな商品があったらいいな」から生まれた、歯科専用フェイスタオル O premium のストーリーと商品をご紹介します。";

const PRODUCT_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/benefits.webp", alt: "O premium タオルと歯科診療室" },
  { src: "/images/gallery-1.webp", alt: "O premium タオルを積んだ様子" },
  { src: "/images/gallery-2.webp", alt: "O premium 歯科ユニット上のタオル" },
  { src: "/images/gallery-3.webp", alt: "O premium タオルを手に持つ様子" },
  { src: "/images/gallery-4.webp", alt: "O premium タオルとカウンター" },
];

export const metadata: Metadata = {
  title: PRODUCT_TITLE,
  description: PRODUCT_DESCRIPTION,
  openGraph: {
    title: PRODUCT_TITLE,
    description: PRODUCT_DESCRIPTION,
    url: `${SITE_URL}/product`,
    type: "website",
    locale: "ja_JP",
  },
  alternates: {
    canonical: `${SITE_URL}/product`,
  },
  robots: { index: true, follow: true },
};

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <LpHeader />
      <main id="main" className="flex-1">
        {/* パンくず・タイトル */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-[720px] px-5 sm:px-8 py-10 sm:py-14">
            <nav className="mb-8 text-sm text-muted-foreground" aria-label="パンくず">
              <Link href="/" className="hover:text-foreground transition-colors">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">商品紹介</span>
            </nav>
            <p className="font-script text-lg text-muted-foreground tracking-wide">O premium</p>
            <h1 className="font-serif-elegant text-2xl sm:text-3xl text-foreground mt-1">
              商品紹介
            </h1>
          </div>
        </section>

        {/* ストーリー */}
        <section className="py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-[720px] px-5 sm:px-8">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] max-w-[520px] mx-auto rounded-2xl overflow-hidden border border-border bg-secondary/30 shadow-soft mb-10 sm:mb-14">
              <Image
                src="/images/hero.webp"
                alt="O premium 歯科専用プレミアムフェイスタオル"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 520px"
                priority
              />
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-[15px] sm:text-base text-foreground leading-[1.9] mb-6">
                私たちは<strong className="font-medium">元歯科助手</strong>
                です。現場で働くなかで、「もっと患者様に気持ちよく使ってもらえるタオルがあったら」「診療の流れに合って、スタッフも扱いやすいものがあったら」と、ずっと考えていました。
              </p>
              <p className="text-[15px] sm:text-base text-foreground leading-[1.9] mb-6">
                そんな<strong className="font-medium">「こんな商品があったらいいな」</strong>
                という想いから生まれたのが、O premium 歯科専用フェイスタオルです。吸水性・耐久性・肌触りにこだわり、現場の声を形にしました。
              </p>
              <p className="text-[15px] sm:text-base text-muted-foreground leading-[1.9]">
                歯科医院のあたたかいおもてなしと、患者様の安心につながるタオルを、これからも届けていきます。
              </p>
            </div>
          </div>
        </section>

        {/* 商品画像 */}
        <section className="py-14 sm:py-20 bg-card border-y border-border">
          <div className="mx-auto max-w-[720px] px-5 sm:px-8">
            <h2 className="font-serif-elegant text-xl sm:text-2xl text-foreground mb-8 sm:mb-10">
              商品の様子
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {PRODUCT_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-secondary/30"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <ProductGallerySection />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[720px] px-5 sm:px-8 text-center">
            <p className="text-muted-foreground text-[15px] mb-6">
              実際の手触りや仕様をご確認いただける、無料サンプルをご用意しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sample-request"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground min-h-[48px] py-3 px-8 font-medium text-[15px] shadow-soft hover:shadow-lg transition-all duration-200"
              >
                無料サンプルを請求する
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border-2 border-border text-foreground min-h-[48px] py-3 px-8 font-medium text-[15px] hover:bg-secondary transition-colors duration-200"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LpFooter />
    </div>
  );
}
