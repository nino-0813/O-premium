import Link from "next/link";

export default function LpFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white py-12 px-5 sm:px-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-stone-400 hover:text-stone-600 transition-colors">
          <span className="font-serif-elegant text-lg text-stone-500 border border-stone-300 rounded-full w-9 h-9 flex items-center justify-center">
            O
          </span>
          <span className="text-[10px] tracking-[0.28em] uppercase">O premium</span>
        </Link>
        <Link href="/" className="text-[13px] text-stone-500 hover:text-stone-700 border-b border-stone-300 pb-0.5">
          トップへ戻る
        </Link>
        <p className="text-[11px] text-stone-400 tracking-[0.15em] mt-2">
          © 2025 PLUS CARE ITEMS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
