import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-stone-100/80">
        <div className="max-w-[680px] mx-auto px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors min-h-[44px] flex items-center shrink-0"
          >
            <span className="font-serif-elegant text-[1.1rem] text-stone-700 border border-stone-300 rounded-full w-8 h-8 flex items-center justify-center leading-none">
              O
            </span>
            <span className="text-[12px] sm:text-[13px] tracking-widest text-stone-500 uppercase">
              ブログ
            </span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-8 flex-wrap justify-end" aria-label="ブログナビゲーション">
            <Link
              href="/blog"
              className="text-[13px] text-stone-500 hover:text-stone-800 transition-colors min-h-[44px] flex items-center py-2 touch-manipulation"
            >
              記事一覧
            </Link>
            <Link
              href="/"
              className="text-[13px] text-stone-500 hover:text-stone-800 transition-colors min-h-[44px] flex items-center py-2 touch-manipulation"
            >
              トップ
            </Link>
            <Link
              href="/dental-towel"
              className="text-[13px] text-stone-600 hover:text-stone-900 font-medium transition-colors min-h-[44px] flex items-center py-2 touch-manipulation"
            >
              製品詳細
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
