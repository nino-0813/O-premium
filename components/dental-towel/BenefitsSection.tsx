/**
 * 導入メリット — 患者満足・ブランディング中心のカードグリッド
 */
import Image from "next/image";

const benefits = [
  {
    title: "患者満足度の向上",
    description:
      "吸水性・肌触りに優れたタオルで、診療後の体験が向上。「このタオル、気持ちいい」という声が、医院への信頼に変わります。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "医院ブランディング",
    description:
      "統一されたタオルで院内の清潔感・プロフェッショナルな印象を演出。細部へのこだわりが、医院の格を高めます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "衛生管理の効率化",
    description:
      "高温洗濯・乾燥対応で、院内の洗濯ルートにそのまま組み込み可能。滅菌パック管理もしやすい設計です。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "コスト削減",
    description:
      "使い捨てから切り替えることで年間コストを約76%削減。在庫・発注の手間も減り、業務効率が向上します。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 md:py-28 bg-card scroll-mt-20"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-border/50">
            <Image
              src="/images/dental-clinic.jpg"
              alt="清潔感のある歯科医院の診療室"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Benefits
            </span>
            <h2 id="benefits-heading" className="font-serif-elegant text-2xl md:text-3xl font-medium text-foreground mt-2 mb-4 text-balance">
              導入メリット
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-10">
              O premium の導入は、患者体験の向上だけでなく、医院経営にもプラスの効果をもたらします。
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-[15px] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
