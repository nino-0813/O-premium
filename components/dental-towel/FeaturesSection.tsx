/**
 * 商品特徴 — 吸水性・耐久性・肌触りの3カード
 */
import Image from "next/image";

const features = [
  {
    title: "優れた吸水・速乾性",
    description:
      "超甘撚り糸を使用し、一般タオルの約1.5倍の吸水力を実現。診療後の拭き取りに最適な、素早く水分を吸い取る設計です。",
    iconSrc: "/images/icon-absorb.webp",
    iconAlt: "吸水・速乾性のアイコン",
  },
  {
    title: "高い耐久性",
    description:
      "高温洗濯（60°C以上）・業務用乾燥機に対応。パイピング縫製でほつれを防ぎ、50回以上の洗濯サイクルでも品質を維持します。",
    iconSrc: "/images/icon-wash.webp",
    iconAlt: "洗濯・乾燥耐性のアイコン",
  },
  {
    title: "極上の肌触り",
    description:
      "超甘撚り糸で織りあげた、ふわふわで柔らかい触感。患者様の顔に直接触れるタオルだからこそ、肌触りの良さにこだわりました。",
    iconSrc: "/images/icon-feel.webp",
    iconAlt: "肌触りのアイコン",
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

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-card hover:shadow-soft hover:border-accent-light transition-all duration-300 min-w-0"
            >
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-accent-light mb-3 sm:mb-4 lg:mb-6">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  fill
                  className="object-contain p-0.5"
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                />
              </div>
              <h3 className="font-serif-elegant text-sm sm:text-base lg:text-lg font-medium text-foreground mb-1.5 sm:mb-2 lg:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[11px] sm:text-[13px] lg:text-[14px] text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
