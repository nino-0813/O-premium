/**
 * 現場の声 — 歯科医師・衛生士コメント（編集風テスティモニアル）
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
      className="py-20 md:py-28 bg-background scroll-mt-20 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* 控えめなアクセントライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 relative">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Voices
          </span>
          <h2 id="testimonials-heading" className="font-serif-elegant text-2xl md:text-[2rem] lg:text-[2.25rem] font-medium text-foreground mt-2 text-balance tracking-tight">
            現場の声
          </h2>
          <p className="text-muted-foreground text-[15px] mt-5 max-w-lg mx-auto leading-relaxed">
            実際に O premium を導入された歯科医院の皆さまからの声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group rounded-xl sm:rounded-2xl bg-card border border-border/80 p-3 sm:p-5 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(74,103,65,0.08)] hover:border-primary/20 transition-all duration-300 min-w-0"
            >
              {/* 引用マーク */}
              <span className="font-serif-elegant text-2xl sm:text-3xl md:text-5xl text-primary/20 leading-none block mb-1 sm:mb-2 select-none" aria-hidden>
                “
              </span>

              {/* コメント本文 */}
              <blockquote className="text-[10px] sm:text-[12px] md:text-[15px] text-foreground/90 leading-[1.7] sm:leading-[1.8] md:leading-[1.85] mb-3 sm:mb-4 md:mb-8">
                {t.quote}
              </blockquote>

              {/* プロフィール */}
              <footer className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors">
                  <span className="text-primary font-serif-elegant text-xs sm:text-sm md:text-lg font-medium">{t.initial}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-[10px] sm:text-[12px] md:text-[15px]">
                    {t.role}
                  </p>
                  <p className="text-[9px] sm:text-[11px] md:text-[13px] text-muted-foreground mt-0.5">
                    {t.clinic}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
