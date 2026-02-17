/**
 * ファーストビュー — 診療チェア風背景画像 + オーバーレイで文字を読みやすく
 */
import Image from "next/image";

// 診療空間・清潔感のあるイメージ（差し替え可）
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden"
      aria-label="メインビジュアル"
    >
      {/* 背景画像：診療空間・清潔感のあるイメージ */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* オーバーレイ：文字を読みやすく・BtoBらしい落ち着いたトーン */}
      <div
        className="absolute inset-0 bg-stone-900/65"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-5 sm:px-8 py-14 sm:py-20 md:py-28">
        <p className="font-script text-base sm:text-lg md:text-xl text-white/80 mb-1 tracking-wide">
          O premium
        </p>
        <h1 className="font-serif-elegant text-[1.75rem] sm:text-[2.25rem] md:text-[3.5rem] text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight max-w-2xl">
          歯科専用フェイスタオル
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-xl leading-[1.75] mb-6 sm:mb-8">
          <strong className="text-white font-medium">衛生管理がしやすく、ランニングコストを抑えられる</strong>
          歯科診療所向けのフェイスタオルです。一般タオルと異なり、滅菌・洗濯サイクルに適した素材とサイズで、患者満足度と院内効率を両立します。
        </p>
        <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 text-[13px] font-medium tracking-[0.08em] text-white">
          歯科医院向け専用
        </span>
        <ul className="mt-12 space-y-4">
          {[
            "吸水・速乾性に優れ、診療後の拭き取りに最適",
            "高温洗濯・乾燥に対応し、衛生管理が容易",
            "使い捨てタオルと比較してコスト削減効果が大きい",
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3 text-stone-200">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white text-xs font-semibold">
                ✓
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
