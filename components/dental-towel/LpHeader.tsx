import Link from "next/link";

export default function LpHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-stone-500 hover:text-stone-800 transition-colors duration-200"
        >
          <span className="text-xl font-serif-elegant font-light text-stone-600 border border-stone-300 rounded-full w-9 h-9 flex items-center justify-center">
            O
          </span>
          <span className="text-[11px] tracking-[0.28em] text-stone-500 uppercase">
            O premium
          </span>
        </Link>
        <Link
          href="/"
          className="text-[13px] text-stone-500 hover:text-stone-800 border-b border-stone-300 pb-0.5 transition-colors duration-200"
        >
          トップへ戻る
        </Link>
      </div>
    </header>
  );
}
