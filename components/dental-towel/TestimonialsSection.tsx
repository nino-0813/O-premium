/**
 * 現場の声 — 歯科医師・衛生士コメント（カード型テスティモニアル）
 */

const testimonials = [
  {
    role: "歯科医師",
    initial: "医",
    clinic: "都内開業 / 10年目",
    quote:
      "患者様の顔に直接触れるタオルは、高級感と肌触りの良いものを使いたいとずっと思っていました。O premium に変えてから、患者様の反応が明らかに変わりました。「このタオル、気持ちいいですね」と言っていただけることが増えています。",
  },
  {
    role: "歯科衛生士",
    initial: "衛",
    clinic: "神奈川県 / 勤務5年目",
    quote:
      "通常の穴開きタオルは薄くて軽く、すぐにズレ落ちてしまうのが悩みでした。O premium は程よい厚みと重さがあって治療しやすく、エアフロー時にも最適。スタッフ全員が使いやすさを実感しています。",
  },
  {
    role: "院長",
    initial: "院",
    clinic: "大阪府 / 開業15年",
    quote:
      "タオルを統一したことで、院内の見た目が整い、清潔感がぐっと上がりました。コスト面でも使い捨てから切り替えたことで年間の経費が下がり、衛生管理の手間も減っています。もっと早く導入すればよかったです。",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="voices"
      className="py-20 md:py-28 bg-secondary scroll-mt-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Voices
          </span>
          <h2 id="testimonials-heading" className="font-serif-elegant text-2xl md:text-3xl font-medium text-foreground mt-2 text-balance">
            現場の声
          </h2>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-xl mx-auto leading-relaxed">
            実際に O premium を導入された歯科医院の皆さまからの声をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              {/* Avatar + role */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                  <span className="text-primary font-serif-elegant text-lg">{t.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-[15px]">{t.role}</p>
                  <p className="text-[13px] text-muted-foreground">{t.clinic}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-[14px] text-foreground leading-[1.8] border-l-2 border-accent-light pl-5">
                {t.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
