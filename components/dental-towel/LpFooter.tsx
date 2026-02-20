import Link from "next/link";

export default function LpFooter() {
  return (
    <footer className="border-t border-border bg-card py-12 px-5 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-serif-elegant text-lg text-primary border border-primary/30 rounded-full w-9 h-9 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
              O
            </span>
            <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">O premium</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="フッターナビゲーション">
            <Link href="/" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              トップへ戻る
            </Link>
            <Link href="/sample-request" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              サンプル請求
            </Link>
            <Link href="/quote-request" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              見積依頼
            </Link>
          </nav>
          <p className="text-[11px] text-muted-foreground tracking-[0.15em]">
            &copy; 2025 PLUS CARE ITEMS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
