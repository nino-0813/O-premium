/**
 * 患者体験セクション — 清潔感・プロフェッショナル印象・肌触り（感情訴求）
 */
export default function PatientExperienceSection() {
  const items = [
    {
      title: "清潔感",
      description: "患者ごとに新しいタオルを提供。統一された洗濯・管理で、「きちんとしている医院」という信頼を伝えられます。",
      icon: "◎",
    },
    {
      title: "プロフェッショナル印象",
      description: "サイズ・色を揃えるだけで、院内の見た目が整い、プロの診療所らしい落ち着いた印象を与えます。",
      icon: "◎",
    },
    {
      title: "肌触り",
      description: "吸水・速乾に優れた素材で、診療後の拭き心地が良い。小さな気遣いが、患者の満足度につながります。",
      icon: "◎",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-labelledby="patient-experience-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            Patient Experience
          </span>
          <h2 id="patient-experience-heading" className="font-serif-elegant text-2xl md:text-[1.75rem] font-medium text-stone-800 mt-1">
            患者様に届く体験
          </h2>
          <p className="text-stone-500 text-[15px] mt-3 max-w-xl mx-auto">
            タオルひとつで、来院時の印象と満足度は変わります。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-100 bg-stone-50/30 p-8 shadow-card hover:shadow-soft hover:border-stone-200/80 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent text-xl font-serif-elegant mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif-elegant text-lg font-medium text-stone-800 mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] text-stone-600 leading-[1.75]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
