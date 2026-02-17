/**
 * 導入メリット — カードグリッド・番号付き
 */
export default function BenefitsSection() {
  const benefits = [
    {
      title: "衛生管理のしやすさ",
      points: [
        "高温洗濯・乾燥に対応した素材で、院内の洗濯ルートにそのまま組み込めます。",
        "サイズ・色を統一することで、滅菌パックや在庫管理がしやすくなります。",
        "患者ごとに清潔なタオルを提供でき、信頼感の向上につながります。",
      ],
    },
    {
      title: "ランニングコストの削減",
      points: [
        "使い捨てタオルと比べ、1枚あたりの単価を大幅に下げられる試算があります（例：50回使用で1回あたり数十円以下）。",
        "在庫・発注の頻度を減らし、業務効率を改善できます。",
      ],
    },
    {
      title: "環境負荷の低減",
      points: [
        "使い捨てに頼らないことで、廃棄物を削減できます。",
        "洗濯・再利用のサイクルで、サステナブルな診療所運営に貢献します。",
      ],
    },
    {
      title: "患者体験の向上",
      points: [
        "肌触り・吸水性を重視した設計で、診療後の拭き心地が良く、患者満足度の向上が期待できます。",
        "統一された見た目で、院内の清潔感・プロフェッショナルな印象を演出できます。",
      ],
    },
  ];

  return (
    <section
      className="py-20 md:py-24 bg-stone-50"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mb-14">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            Benefits
          </span>
          <h2 id="benefits-heading" className="font-serif-elegant text-2xl md:text-[1.65rem] font-medium text-stone-800 mt-1">
            導入メリット
          </h2>
        </div>
        <p className="text-stone-500 text-[15px] leading-relaxed mb-12 max-w-2xl">
          歯科専用フェイスタオルを導入することで、以下のようなメリットが得られます。
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-100 bg-white p-6 md:p-8 shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-serif-elegant text-sm font-medium text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif-elegant text-lg font-medium text-stone-800 mb-4">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2 text-[14px] text-stone-600 leading-relaxed">
                    {benefit.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-stone-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
