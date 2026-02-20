/**
 * Before / After — 一般タオルの課題 vs 専用タオル導入後の改善（感情に訴えるBtoB風）
 */
export default function BeforeAfterSection() {
  const before = [
    "在庫・発注の手間が続き、コストが読みにくい",
    "患者ごとの衛生管理に不安が残る",
    "サイズや品質がバラつき、見た目が統一されない",
    "使い捨ての廃棄が気になる",
  ];

  const after = [
    "洗濯ルートに組み込むだけで、ランニングコストが明確に",
    "患者ごとに清潔なタオルを提供でき、安心感を届けられる",
    "規格統一で院内の清潔感・プロフェッショナルな印象に",
    "再利用で廃棄を減らし、環境負荷も軽減",
  ];

  return (
    <section
      className="py-20 md:py-28 bg-stone-50"
      aria-labelledby="before-after-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            Transformation
          </span>
          <h2 id="before-after-heading" className="font-serif-elegant text-2xl md:text-[1.75rem] font-medium text-stone-800 mt-1">
            導入前と導入後
          </h2>
          <p className="text-stone-500 text-[15px] mt-3 max-w-xl mx-auto">
            一般タオルから歯科専用へ。医院の「当たり前」が変わります。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8 md:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-200 text-stone-500 text-sm font-semibold">
                Before
              </span>
              <h3 className="font-serif-elegant text-xl font-medium text-stone-700">
                一般タオルの課題
              </h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border-2 border-accent/25 bg-white p-8 md:p-10 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[100px]" aria-hidden />
            <div className="relative flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white text-sm font-semibold">
                After
              </span>
              <h3 className="font-serif-elegant text-xl font-medium text-stone-800">
                専用タオル導入後の改善
              </h3>
            </div>
            <ul className="space-y-4 relative">
              {after.map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-700">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-[15px] leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
