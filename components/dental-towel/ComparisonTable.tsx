/**
 * 一般タオルとの比較表 — カード風・読みやすいテーブル
 */
export default function ComparisonTable() {
  const rows = [
    {
      item: "素材・織り",
      dental: "歯科専用：綿または綿混、診療向け織り（吸水・耐久）",
      general: "一般：デザイン重視が多く、診療での繰り返し洗濯に不向きな場合あり",
    },
    {
      item: "サイズ",
      dental: "歯科専用：顔面・首まわりに合わせた規格（例：約35×80cm）",
      general: "一般：バラつきが大きく、在庫・洗濯管理が煩雑",
    },
    {
      item: "洗濯・乾燥",
      dental: "歯科専用：高温洗濯・乾燥機想定、色落ち・縮みを抑制",
      general: "一般：家庭用洗濯想定が多く、業務用だと劣化が早いことがある",
    },
    {
      item: "コスト（1枚あたり目安）",
      dental: "歯科専用：初期単価は高めでも、50回以上使用で1回あたり数十円以下になる試算",
      general: "一般：安価なものは耐久性が低く、買い替え頻度で総コストが増える場合あり",
    },
    {
      item: "衛生・滅菌",
      dental: "歯科専用：滅菌パック・洗濯ルートを想定した管理がしやすい設計",
      general: "一般：用途が想定されていないため、院内ルールに合わせた運用が必要",
    },
  ];

  return (
    <section
      className="py-20 md:py-24 bg-white"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mb-12">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            Comparison
          </span>
          <h2 id="comparison-heading" className="font-serif-elegant text-2xl md:text-[1.65rem] font-medium text-stone-800 mt-1">
            一般タオルとの比較
          </h2>
        </div>
        <p className="text-stone-500 text-[15px] leading-relaxed mb-10 max-w-2xl">
          歯科専用フェイスタオルは、診療所での利用を前提に設計されています。一般のフェイスタオルとの主な違いは以下のとおりです。
        </p>
        <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/80">
                <th scope="col" className="py-4 px-6 text-[12px] font-medium tracking-wider text-stone-500 uppercase w-36">
                  比較項目
                </th>
                <th scope="col" className="py-4 px-6 text-[13px] font-semibold text-stone-800">
                  歯科専用フェイスタオル
                </th>
                <th scope="col" className="py-4 px-6 text-[13px] font-semibold text-stone-800">
                  一般のフェイスタオル
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-stone-50 last:border-0 transition-colors hover:bg-stone-50/50"
                >
                  <td className="py-4 px-6 text-[13px] font-medium text-stone-700 whitespace-nowrap">
                    {row.item}
                  </td>
                  <td className="py-4 px-6 text-[14px] text-stone-600 leading-relaxed">
                    {row.dental}
                  </td>
                  <td className="py-4 px-6 text-[14px] text-stone-500 leading-relaxed">
                    {row.general}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
