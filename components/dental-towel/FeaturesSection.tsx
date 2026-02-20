/**
 * 商品特徴 — 吸水性・耐久性・肌触りの3カード
 */
import Image from "next/image";

const features = [
  {
    title: "優れた吸水・速乾性",
    description:
      "超甘撚り糸を使用し、一般タオルの約1.5倍の吸水力を実現。診療後の拭き取りに最適な、素早く水分を吸い取る設計です。",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3C14 3 6 10 6 16a8 8 0 1016 0c0-6-6-13-8-13z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18a4 4 0 004 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "高い耐久性",
    description:
      "高温洗濯（60°C以上）・業務用乾燥機に対応。パイピング縫製でほつれを防ぎ、50回以上の洗濯サイクルでも品質を維持します。",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M12 3L4 8v8l8 5 8-5V8l-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(2,2)"/>
        <path d="M12 13v8M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(2,2)"/>
      </svg>
    ),
  },
  {
    title: "極上の肌触り",
    description:
      "超甘撚り糸で織りあげた、ふわふわで柔らかい触感。患者様の顔に直接触れるタオルだからこそ、肌触りの良さにこだわりました。",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(2,2)"/>
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-background scroll-mt-20"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Features
          </span>
          <h2 id="features-heading" className="font-serif-elegant text-2xl md:text-3xl font-medium text-foreground mt-2 text-balance">
            3つのこだわり
          </h2>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-xl mx-auto leading-relaxed">
            現場の声を反映し、歯科診療に最適化された品質をお届けします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-soft hover:border-accent-light transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-light text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif-elegant text-lg font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product texture image */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-border shadow-soft max-w-3xl mx-auto">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/towel-texture.jpg"
              alt="O premium タオルの繊維アップ。超甘撚り糸によるふわふわの質感。"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
