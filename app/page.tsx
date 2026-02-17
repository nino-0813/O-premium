import Link from "next/link";

export const metadata = {
  title: "O premium",
  description:
    "歯科医院向けの品質にこだわった製品をご提供。歯科専用フェイスタオルで、診療所の衛生・コスト・患者体験をサポートします。",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* 微細なパターン */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1c1917 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <main className="relative flex-1 flex flex-col items-center justify-center px-5 py-20">
        <Link
          href="/"
          className="flex flex-col items-center mb-16"
          aria-label="O premium トップ"
        >
          <span className="font-serif-elegant text-4xl md:text-5xl text-stone-600 border border-stone-300 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
            O
          </span>
          <span className="text-[11px] tracking-[0.35em] text-stone-500 uppercase">
            O premium
          </span>
        </Link>

        <p className="font-script text-xl md:text-2xl text-stone-400 mb-2 tracking-wide">
          For dental care
        </p>
        <p className="font-serif-elegant text-stone-700 text-center max-w-sm mb-16 text-[15px] leading-relaxed">
          歯科医院の「当たり前」を、少しだけ丁寧に。
        </p>

        <nav className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
          <Link
            href="/dental-towel"
            className="inline-flex items-center justify-center rounded-xl bg-accent hover:bg-accent-hover text-white py-4 px-8 font-medium text-[15px] transition-colors duration-200"
          >
            歯科専用フェイスタオル
          </Link>
          <Link
            href="/blog/dental-towel-guide"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 text-stone-600 hover:bg-white hover:border-stone-400 py-4 px-8 font-medium text-[15px] transition-colors duration-200"
          >
            記事を読む
          </Link>
        </nav>

        <p className="mt-12 text-[13px] text-stone-400">
          <Link href="/blog/dental-towel-guide" className="hover:text-stone-600">
            導入ガイド
          </Link>
          <span className="mx-2">·</span>
          <Link href="/blog/dental-towel-hygiene" className="hover:text-stone-600">
            衛生管理
          </Link>
          <span className="mx-2">·</span>
          <Link href="/blog/dental-towel-cost" className="hover:text-stone-600">
            コスト試算
          </Link>
        </p>
      </main>

      <footer className="relative py-8 text-center border-t border-stone-100">
        <p className="text-[11px] text-stone-400 tracking-widest">
          © 2025 O premium. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
