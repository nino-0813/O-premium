/**
 * 強いCTA — 背景を変え、サンプル請求を強調（BtoB SaaS風）
 */
export default function CTA() {
  return (
    <section
      id="sample-request"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* 背景：アクセントベースでメリハリ */}
      <div className="absolute inset-0 bg-accent" />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.12) 0%, transparent 50%)`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1120px] px-5 sm:px-8 text-center">
        <span className="text-[11px] tracking-[0.2em] text-white/70 uppercase">
          Request
        </span>
        <h2 id="cta-heading" className="font-serif-elegant text-2xl md:text-[2rem] font-medium text-white mt-1 mb-4">
          まずは手に取って、品質を実感してください
        </h2>
        <p className="text-white/90 text-[15px] max-w-lg mx-auto leading-relaxed mb-12">
          歯科専用フェイスタオルのサンプル請求や、ご医院に合わせた見積りをご希望の方は、下記よりお問い合わせください。
        </p>

        <div id="quote-request" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* メインCTA：サンプル請求を強調 */}
          <a
            href="#sample-request"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-[260px] bg-white text-accent py-5 px-10 rounded-xl font-semibold text-[15px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
          >
            サンプル請求はこちら
          </a>
          <a
            href="#quote-request"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] border-2 border-white/80 text-white hover:bg-white/15 py-5 px-8 rounded-xl font-medium text-[15px] transition-all duration-200"
          >
            見積依頼
          </a>
        </div>

        <p className="mt-10 text-[13px] text-white/80">
          通常、2〜3営業日以内にご連絡いたします。
        </p>
      </div>
    </section>
  );
}
