"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

const NAV_ITEMS = [
  { href: "#features", label: "商品特徴" },
  { href: "#comparison", label: "他社との違い" },
  { href: "#voices", label: "現場の声" },
  { href: "#benefits", label: "導入メリット" },
  { href: "#sample-request", label: "サンプル請求" },
] as const;

export default function LpHeader() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <span className="text-xl font-serif-elegant font-light text-primary border border-primary/30 rounded-full w-9 h-9 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
            O
          </span>
          <span className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            O premium
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="メインナビゲーション">
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex md:hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-secondary active:bg-muted transition-colors"
          aria-expanded={open}
          aria-controls="lp-mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span className="sr-only">{open ? "閉じる" : "メニュー"}</span>
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay nav */}
      {open && (
        <div id="lp-mobile-nav" className="fixed inset-0 z-40 md:hidden" style={{ top: "73px" }}>
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            aria-label="メニューを閉じる"
          />
          <nav className="relative bg-card border-b border-border shadow-lg py-2 px-5">
            <ul>
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={close}
                    className="flex items-center min-h-[48px] py-3 text-[15px] text-foreground hover:text-primary font-medium border-b border-border/30 last:border-0 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
