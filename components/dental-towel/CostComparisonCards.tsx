/**
 * コスト比較をグラフカード化 — 1回あたりコストを視覚表示（BtoB SaaS風）
 */
export default function CostComparisonCards() {
  const generalCost = 25; // 円/回（使い捨て想定）
  const dedicatedCost = 6; // 円/回（50回使用想定）
  const maxCost = 30;

  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-labelledby="cost-comparison-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            Cost
          </span>
          <h2 id="cost-comparison-heading" className="font-serif-elegant text-2xl md:text-[1.75rem] font-medium text-stone-800 mt-1">
            1回あたりのコスト比較
          </h2>
          <p className="text-stone-500 text-[15px] mt-3 max-w-xl mx-auto">
            専用タオルは繰り返し使用で単価が下がり、総コストを大きく削減できます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 一般タオル */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-8 shadow-card">
            <p className="text-[13px] font-medium text-stone-500 mb-2">一般タオル・使い捨て想定</p>
            <p className="text-3xl font-semibold text-stone-700 mb-6">
              <span className="font-serif-elegant">{generalCost}</span>
              <span className="text-lg font-normal text-stone-500 ml-1">円/回</span>
            </p>
            <div className="h-4 rounded-full bg-stone-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-stone-400 transition-all duration-700"
                style={{ width: `${(generalCost / maxCost) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-[13px] text-stone-500">
              1枚25円の使い捨てを想定。年間使用量が多いほど負担が増えます。
            </p>
          </div>

          {/* 歯科専用タオル */}
          <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 shadow-soft relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="rounded-full bg-accent/20 px-2.5 py-1 text-[11px] font-medium text-accent">
                おすすめ
              </span>
            </div>
            <p className="text-[13px] font-medium text-accent mb-2">歯科専用フェイスタオル</p>
            <p className="text-3xl font-semibold text-stone-800 mb-6">
              <span className="font-serif-elegant text-accent">{dedicatedCost}</span>
              <span className="text-lg font-normal text-stone-500 ml-1">円/回</span>
            </p>
            <div className="h-4 rounded-full bg-stone-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-700"
                style={{ width: `${(dedicatedCost / maxCost) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-[13px] text-stone-600">
              50回使用想定。長く使うほど1回あたりのコストが下がります。
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-xl bg-stone-50 border border-stone-100 text-center">
          <p className="text-[15px] text-stone-600">
            <strong className="text-stone-800">約{Math.round((1 - dedicatedCost / generalCost) * 100)}%のコスト削減</strong>
            が期待できます（試算値。使用回数・条件により変動します）
          </p>
        </div>
      </div>
    </section>
  );
}
