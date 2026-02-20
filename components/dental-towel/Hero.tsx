/**
 * ヒーロー — 現場の歯科医師が考えたという信頼訴求
 * 大きなビジュアル + 余白多め + 上品なタイポグラフィ
 */
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-card"
      aria-label="メインビジュアル"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 sm:py-20 lg:py-28">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden />
              <span className="text-[13px] text-secondary-foreground">現場の歯科医師が考えた</span>
            </div>

            <p className="font-script text-base sm:text-lg text-muted-foreground mb-2 tracking-wide">
              O premium
            </p>
            <h1 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6 tracking-tight text-balance">
              歯科医院のための
              <br />
              高級フェイスタオル
            </h1>
            <p className="text-[15px] sm:text-base text-muted-foreground leading-[1.85] sm:leading-relaxed mb-8 max-w-lg">
              現場の歯科医師・衛生士が素材から設計した、
              <br className="sm:hidden" />
              歯科専用プレミアムフェイスタオル。
              <br className="sm:hidden" />
              <strong className="text-foreground font-medium">吸水性・耐久性・肌触り</strong>
              のすべてにこだわり、
              <br className="sm:hidden" />
              患者満足度と医院のブランド力を高めます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/sample-request"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground min-h-[48px] py-3.5 px-8 font-medium text-[15px] shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
              >
                無料サンプルを請求する
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-border text-foreground min-h-[48px] py-3.5 px-8 font-medium text-[15px] hover:bg-secondary transition-colors duration-200"
              >
                詳しく見る
              </a>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                "吸水・速乾性に優れ、診療後の拭き取りに最適",
                "高温洗濯・乾燥に対応し、衛生管理が容易",
                "使い捨てと比較してコスト削減効果が大きい",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-muted-foreground">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-primary text-xs font-semibold">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            {/* スマホ: 余白・背景でフレーム感を出す / PC: そのまま */}
            <div className="lg:max-w-lg mx-auto px-2 sm:px-0">
              <div className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] lg:shadow-soft border border-border bg-secondary/30 lg:bg-transparent">
                <Image
                  src="/images/hero-towel-stack.png"
                  alt="O premium 歯科専用プレミアムフェイスタオル"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 100vw, 50vw"
                />
                {/* スマホのみ: 下方向のグラデーションでコンテンツへ自然につなぐ */}
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-card/90 via-card/40 to-transparent pointer-events-none lg:hidden" aria-hidden />
                {/* スマホのみ: 控えめなキャプション */}
                <p className="absolute bottom-3 left-4 right-4 text-center text-[11px] tracking-[0.2em] text-foreground/70 font-medium uppercase lg:hidden">
                  O premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
