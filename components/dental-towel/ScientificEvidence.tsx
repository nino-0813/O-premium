/**
 * 科学的根拠セクション — エディトリアル・左ラインアクセント
 */
export default function ScientificEvidence() {
  const blocks = [
    {
      label: "定義",
      text: "歯科専用フェイスタオルとは、歯科診療所において患者の顔面・首まわりを拭くために用いられる、洗濯・乾燥を繰り返して再利用する布製のタオルを指します。使い捨てのペーパータオルとは区別されます。",
    },
    {
      label: "衛生管理の根拠",
      text: "布製タオルは、適切な洗濯（高温洗濯や漂白剤の使用など）により、細菌やウイルスの除去が可能であることが、洗濯・衛生に関する研究で示されています。歯科医院では、患者ごとに取り替え、洗濯済みのタオルを提供することで、交差感染のリスクを低減できます。",
    },
    {
      label: "素材と耐久性",
      text: "綿や綿混紡で、高温（例：60°C以上）での洗濯および乾燥機による乾燥に耐える製品を選ぶことで、衛生面と耐久性を両立できます。これにより、1枚あたりの使用回数を増やし、コスト効率を高められます。",
    },
  ];

  return (
    <section
      className="py-20 md:py-24 bg-white"
      aria-labelledby="evidence-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mb-12">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            Evidence
          </span>
          <h2 id="evidence-heading" className="font-serif-elegant text-2xl md:text-[1.65rem] font-medium text-stone-800 mt-1">
            科学的根拠・衛生面の考え方
          </h2>
        </div>
        <p className="text-stone-500 text-[15px] leading-relaxed mb-10 max-w-2xl">
          歯科診療所では、患者ごとに清潔な器材・資材を使用することが基本です。フェイスタオルについても同様の考え方が適用されます。
        </p>
        <div className="rounded-2xl border border-stone-100 bg-cream/50 p-6 md:p-10 space-y-8">
          {blocks.map((block, i) => (
            <div key={i} className="flex gap-6">
              <div className="hidden sm:block w-px shrink-0 bg-accent/30 self-stretch" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase mb-2">
                  {block.label}
                </p>
                <p className="text-[15px] text-stone-600 leading-[1.8]">
                  {block.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
