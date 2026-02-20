import Link from "next/link";

/**
 * サンプル請求CTA — 大きな余白 + 丸みのあるボタン + 上品な背景
 */
export default function CTA() {
  return (
    <section
      id="sample-request"
      className="relative py-24 md:py-32 overflow-hidden scroll-mt-20"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1120px] px-5 sm:px-8 text-center">
        <span className="text-[11px] tracking-[0.2em] text-white/70 uppercase">
          Sample Request
        </span>
        <h2 id="cta-heading" className="font-serif-elegant text-xl sm:text-2xl md:text-[2rem] font-medium text-white mt-2 mb-4 text-balance">
          まずは手に取って、品質を実感してください
        </h2>
        <p className="text-white/85 text-[14px] sm:text-[15px] max-w-lg mx-auto leading-relaxed mb-10 sm:mb-12">
          無料サンプルをお送りいたします。実際の肌触り・吸水性をお試しいただき、導入をご検討ください。
        </p>

        <div id="quote-request" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/sample-request"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-0 sm:min-w-[260px] min-h-[52px] bg-card text-primary py-4 px-8 sm:py-5 sm:px-10 rounded-full font-semibold text-[15px] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
          >
            無料サンプルを請求する
          </Link>
          <Link
            href="/quote-request"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-0 sm:min-w-[200px] min-h-[52px] border-2 border-white/60 text-white hover:bg-white/10 py-4 px-6 sm:py-5 sm:px-8 rounded-full font-medium text-[15px] transition-all duration-200 active:scale-[0.98]"
          >
            見積依頼はこちら
          </Link>
        </div>

        <p className="mt-10 text-[13px] text-white/70">
          通常、2〜3営業日以内にご連絡いたします。
        </p>
      </div>
    </section>
  );
}
