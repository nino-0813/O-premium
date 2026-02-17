"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#features", label: "特徴" },
  { href: "#voices", label: "現場の声" },
  { href: "#contact", label: "お問い合わせ" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* ハンバーガーボタン（sm以下で表示） */}
      <div className="flex items-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav"
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
        <Link
          href="/dental-towel"
          className="text-[13px] font-medium text-stone-700 border-b border-stone-400 pb-0.5 hover:text-stone-900 min-h-[44px] flex items-center"
        >
          製品詳細
        </Link>
      </div>

      {/* オーバーレイ + ドロワー（スマホのみ・open時のみ表示） */}
      {open && (
      <div
        id="mobile-nav"
        className="fixed inset-0 z-40 sm:hidden"
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={close}
          className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
          aria-label="メニューを閉じる"
        />
        <nav
          className="absolute top-[73px] left-0 right-0 bg-white border-b border-stone-100 shadow-lg py-4 px-5"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-0">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="flex items-center min-h-[48px] py-3 text-[15px] text-stone-700 hover:text-stone-900 font-medium border-b border-stone-50 last:border-0"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/dental-towel"
                onClick={close}
                className="flex items-center min-h-[48px] py-3 text-[15px] text-stone-700 hover:text-stone-900 font-medium"
              >
                製品詳細
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      )}

      {/* デスクトップナビ（sm以上で表示） */}
      <nav className="hidden sm:flex items-center gap-6" aria-label="メインナビゲーション">
        <a href="#features" className="text-[13px] text-stone-500 hover:text-stone-800 min-h-[44px] flex items-center">
          特徴
        </a>
        <a href="#voices" className="text-[13px] text-stone-500 hover:text-stone-800 min-h-[44px] flex items-center">
          現場の声
        </a>
        <a href="#contact" className="text-[13px] text-stone-500 hover:text-stone-800 min-h-[44px] flex items-center">
          お問い合わせ
        </a>
        <Link
          href="/dental-towel"
          className="text-[13px] font-medium text-stone-700 border-b border-stone-400 pb-0.5 hover:text-stone-900 min-h-[44px] flex items-center"
        >
          製品詳細
        </Link>
      </nav>
    </>
  );
}
