import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "O premium｜歯科専用プレミアムタオル",
  description:
    "現場の歯科衛生士が考えた、歯科専用フェイスタオル。超甘撚り糸で吸水性に優れ、治療しやすく患者様を守ります。綿100%、約35×34cm。",
};

const SCENE_IMAGE =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header with Nav */}
      <header className="sticky top-0 z-50 border-b border-stone-100 bg-white/95 backdrop-blur-sm">
        <div className="max-w-[1120px] mx-auto px-5 py-4 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-stone-600 hover:text-stone-800 transition-colors"
          >
            <span className="font-serif-elegant text-xl text-stone-600 border border-stone-300 rounded-full w-9 h-9 flex items-center justify-center">
              O
            </span>
            <span className="text-[11px] tracking-[0.22em] text-stone-500 uppercase">
              O premium
            </span>
          </Link>
          <nav className="flex items-center gap-6" aria-label="メインナビゲーション">
            <a href="#features" className="text-[13px] text-stone-500 hover:text-stone-800 hidden sm:inline">
              特徴
            </a>
            <a href="#voices" className="text-[13px] text-stone-500 hover:text-stone-800 hidden sm:inline">
              現場の声
            </a>
            <a href="#contact" className="text-[13px] text-stone-500 hover:text-stone-800 hidden sm:inline">
              お問い合わせ
            </a>
            <Link
              href="/dental-towel"
              className="text-[13px] font-medium text-stone-700 border-b border-stone-400 pb-0.5 hover:text-stone-900"
            >
              製品詳細
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50/80 px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
              <span className="text-[13px] text-stone-600">現場の歯科衛生士が考えた</span>
            </div>
            <h1 className="font-serif-elegant text-3xl sm:text-4xl md:text-[2.75rem] text-stone-800 tracking-tight mb-2">
              歯科専用
              <span className="block mt-1">O premium</span>
            </h1>
            <p className="text-stone-500 text-[15px] mb-1">オー・プレミアム</p>
            <p className="font-serif-elegant text-lg text-stone-600 mb-14">プレミアムタオル</p>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative aspect-[4/5] max-w-lg rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shadow-soft">
                <Image
                  src="/unnamed.jpg"
                  alt="O premium 歯科専用フェイスタオル。中央の穴が治療しやすいベストなサイズです。"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="font-serif-elegant text-xl md:text-2xl text-stone-700 leading-relaxed mb-8">
                  超甘撚り糸で織りあげた
                  <br />
                  <strong className="text-stone-800">吸水性に優れ、とにかくふわふわ</strong>
                  のタオルです。
                </p>
                <dl className="space-y-3 text-[15px] text-stone-600 mb-10">
                  <div className="flex gap-3">
                    <dt className="font-medium text-stone-500 w-20 shrink-0">サイズ</dt>
                    <dd>約35×34 cm</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="font-medium text-stone-500 w-20 shrink-0">素材</dt>
                    <dd>綿100%</dd>
                  </div>
                </dl>
                <Link
                  href="/dental-towel"
                  className="inline-flex items-center justify-center rounded-lg bg-stone-900 text-white py-3.5 px-8 font-medium text-[15px] hover:bg-stone-800 transition-colors"
                >
                  製品詳細・お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Image - 2nd visual */}
        <section className="py-12 md:py-16 bg-stone-50/60">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
            <h2 className="font-serif-elegant text-lg text-stone-600 mb-8 text-center">製品イメージ</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-card">
                <Image
                  src="/unnamed.jpg"
                  alt="O premium タオル。ふわふわの質感と適度な厚み。"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-card">
                <Image
                  src="/Yellow Black Minimalist Bath Towel Clothing Label.jpg"
                  alt="O premium プレミアムタオル。パッケージ・ラベル。"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 商品仕様カード */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
            <h2 className="font-serif-elegant text-xl md:text-2xl text-stone-800 mb-10 text-center">商品仕様</h2>
            <div className="max-w-2xl mx-auto rounded-2xl border border-stone-200 bg-white p-8 md:p-10 shadow-soft">
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-[15px]">
                <div className="flex gap-4">
                  <dt className="font-medium text-stone-500 w-24 shrink-0">サイズ</dt>
                  <dd className="text-stone-700">約35×34 cm</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-stone-500 w-24 shrink-0">素材</dt>
                  <dd className="text-stone-700">綿100%</dd>
                </div>
                <div className="flex gap-4 sm:col-span-2">
                  <dt className="font-medium text-stone-500 w-24 shrink-0">特徴</dt>
                  <dd className="text-stone-700">
                    超甘撚り糸／パイピング縫製／治療に適した穴（○）サイズ／吸水性・肌触りに優れる
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ご使用シーン - 画像付き */}
        <section className="py-16 md:py-24 bg-stone-50/80">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
            <h2 className="font-serif-elegant text-xl md:text-2xl text-stone-800 mb-4 text-center">ご使用シーン</h2>
            <p className="text-stone-500 text-[15px] text-center mb-12 max-w-xl mx-auto">
              歯科治療・クリーニング時やエアフロー時など、さまざまな診療シーンでご利用いただけます。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl overflow-hidden border border-stone-100 bg-white shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={SCENE_IMAGE}
                    alt="歯科診療・クリーニングの様子"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-medium text-stone-800 mb-2">歯科治療・クリーニング時</p>
                  <p className="text-[14px] text-stone-600 leading-relaxed">
                    飛散する水はねや破片から患者様を守り、治療しやすい環境を。
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-100 bg-white shadow-card">
                <div className="relative aspect-[4/3] bg-stone-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif-elegant text-6xl text-stone-300">O</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-medium text-stone-800 mb-2">エアフロー時</p>
                  <p className="text-[14px] text-stone-600 leading-relaxed">
                    程よい厚みと重さでズレにくく、エアフロー時にも最適です。
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-100 bg-white shadow-card">
                <div className="relative aspect-[4/3] bg-stone-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif-elegant text-6xl text-stone-300">O</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-medium text-stone-800 mb-2">患者様のリラックス</p>
                  <p className="text-[14px] text-stone-600 leading-relaxed">
                    高級感と肌触りで、リラックスした状態で治療を受けていただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
            <h2 className="font-serif-elegant text-xl md:text-2xl text-stone-800 mb-10">こだわり</h2>
            <ul className="space-y-10 max-w-2xl">
              <li className="flex gap-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-bold mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="font-medium text-stone-800 mb-2">患者様を守る</p>
                  <p className="text-[15px] text-stone-600 leading-relaxed">
                    歯科治療やクリーニング時に飛散する不快な水はね、歯や金属の破片から患者様を守ります。
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-bold mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="font-medium text-stone-800 mb-2">ベストな穴（○）のサイズ</p>
                  <p className="text-[15px] text-stone-600 leading-relaxed">
                    治療しやすく、患者様の不快感を取り除くベストな穴（オー）のサイズにこだわりました。
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-bold mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="font-medium text-stone-800 mb-2">肌触りと耐久性</p>
                  <p className="text-[15px] text-stone-600 leading-relaxed">
                    毛羽立ちが少なく肌触りのよい超甘撚り糸で織りあげ、ほつれ防止にパイピング縫製を施しました。
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-bold mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="font-medium text-stone-800 mb-2">穴あきと色の組み合わせ</p>
                  <p className="text-[15px] text-stone-600 leading-relaxed">
                    歯科用・穴あきに対応したカラーバリエーションをご用意。商品名には「歯科用」「穴あき」に加え、色味（グレー・汚れが目立たない）などの情報を明記しているので、医院の雰囲気や運用に合わせて選べます。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section id="voices" className="py-16 md:py-24 bg-stone-50/60 scroll-mt-20">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
            <h2 className="font-serif-elegant text-xl md:text-2xl text-stone-800 mb-12 text-center">現場の声</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-stone-100 bg-white p-8 md:p-10 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-stone-500 font-serif-elegant text-lg">医</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">歯科医師の声</p>
                    <p className="text-[13px] text-stone-500">医療現場より</p>
                  </div>
                </div>
                <blockquote className="text-[15px] text-stone-700 leading-relaxed border-l-2 border-stone-200 pl-5">
                  「患者様の顔に直接触れるタオルは高級感と肌触りの良いものにし、リラックスした状態で治療を受けていただきたい!」
                </blockquote>
              </div>
              <div className="rounded-2xl border border-stone-100 bg-white p-8 md:p-10 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-serif-elegant text-lg">衛</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">歯科衛生士の声</p>
                    <p className="text-[13px] text-stone-500">現場の声</p>
                  </div>
                </div>
                <blockquote className="text-[15px] text-stone-700 leading-relaxed border-l-2 border-stone-200 pl-5">
                  「通常の穴開きタオルは薄いものが多く軽くてすぐにズレ落ちてしまうが、O premium は程よい厚みと重さがあって治療しやすい! エアフロー時にも最適です!」
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 md:py-28 bg-stone-900 scroll-mt-20">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8 text-center">
            <p className="font-script text-lg text-white/80 mb-2">O premium</p>
            <h2 className="font-serif-elegant text-2xl md:text-3xl text-white mb-6">歯科専用プレミアムタオル</h2>
            <p className="text-stone-300 text-[15px] mb-10 max-w-md mx-auto">
              製品の詳細・サンプル請求・お問い合わせはこちらから。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dental-towel"
                className="inline-flex items-center justify-center rounded-lg bg-white text-stone-900 py-4 px-10 font-medium text-[15px] hover:bg-stone-100 transition-colors"
              >
                製品詳細・お問い合わせ
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border-2 border-stone-500 text-stone-200 py-4 px-8 font-medium text-[15px] hover:bg-stone-800 transition-colors"
              >
                記事を読む
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-100 bg-stone-50/30">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-8" aria-label="フッターナビゲーション">
            <Link href="/dental-towel" className="text-[13px] text-stone-600 hover:text-stone-800">
              製品詳細
            </Link>
            <Link href="/blog" className="text-[13px] text-stone-600 hover:text-stone-800">
              ブログ
            </Link>
            <a href="#contact" className="text-[13px] text-stone-600 hover:text-stone-800">
              お問い合わせ
            </a>
          </nav>
          <div className="flex flex-col items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 mb-4">
              <span className="font-serif-elegant text-stone-600 border border-stone-300 rounded-full w-9 h-9 flex items-center justify-center text-sm">
                O
              </span>
              <span className="text-[10px] tracking-widest uppercase">O premium</span>
            </Link>
            <p className="text-[11px] text-stone-400 tracking-widest">© 2025 O premium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
