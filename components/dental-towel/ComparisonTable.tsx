/**
 * 他社との違い — 表形式の比較セクション
 */
const rows = [
  {
    item: "素材・織り",
    ours: "歯科専用設計。超甘撚り綿100%、吸水・耐久に最適化",
    others: "デザイン重視が多く、業務用洗濯に不向きな場合あり",
  },
  {
    item: "サイズ",
    ours: "約35x34cm。診療に最適化された顔面・首まわり規格",
    others: "バラつきが大きく、在庫・洗濯管理が煩雑になりがち",
  },
  {
    item: "洗濯・乾燥耐性",
    ours: "60°C以上の高温洗濯・乾燥機対応。色落ち・縮みを抑制",
    others: "家庭用洗濯想定が多く、業務使用で劣化が早い",
  },
  {
    item: "ランニングコスト",
    ours: "50回以上使用で1回あたり数十円以下の試算",
    others: "安価でも耐久性が低く、買い替えで総コスト増",
  },
  {
    item: "衛生管理",
    ours: "滅菌パック・洗濯ルート想定の設計で管理しやすい",
    others: "医療用途を想定していないため、運用ルール整備が必要",
  },
];

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="py-20 md:py-28 bg-card scroll-mt-20"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Comparison
          </span>
          <h2 id="comparison-heading" className="font-serif-elegant text-2xl md:text-3xl font-medium text-foreground mt-2 text-balance">
            一般タオルとの違い
          </h2>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-xl mx-auto leading-relaxed">
            歯科専用だからこそ実現できる、現場に最適化された品質です。
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th scope="col" className="py-5 px-6 text-[12px] font-medium tracking-wider text-muted-foreground uppercase w-40">
                  比較項目
                </th>
                <th scope="col" className="py-5 px-6 text-[13px] font-semibold text-primary">
                  O premium
                </th>
                <th scope="col" className="py-5 px-6 text-[13px] font-semibold text-muted-foreground">
                  一般のフェイスタオル
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-0 transition-colors hover:bg-secondary"
                >
                  <td className="py-5 px-6 text-[13px] font-medium text-foreground whitespace-nowrap">
                    {row.item}
                  </td>
                  <td className="py-5 px-6 text-[14px] text-foreground leading-relaxed">
                    <span className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-primary">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {row.ours}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-[14px] text-muted-foreground leading-relaxed">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards — 2列表示 */}
        <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4">
          {rows.map((row, i) => (
            <div key={i} className="rounded-xl sm:rounded-2xl border border-border bg-card p-3 sm:p-5 shadow-card min-w-0">
              <p className="text-[11px] sm:text-[12px] font-medium tracking-wider text-muted-foreground uppercase mb-2 sm:mb-3">
                {row.item}
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="rounded-lg bg-accent-light border border-accent-light p-2 sm:p-3">
                  <p className="text-[10px] sm:text-[11px] font-medium text-primary mb-0.5 sm:mb-1">O premium</p>
                  <p className="text-[12px] sm:text-[14px] text-foreground leading-relaxed">{row.ours}</p>
                </div>
                <div className="rounded-lg bg-secondary p-2 sm:p-3">
                  <p className="text-[10px] sm:text-[11px] font-medium text-muted-foreground mb-0.5 sm:mb-1">一般タオル</p>
                  <p className="text-[12px] sm:text-[14px] text-muted-foreground leading-relaxed">{row.others}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
