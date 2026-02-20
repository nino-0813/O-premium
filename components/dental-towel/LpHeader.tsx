"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const NAV_ITEMS = [
  { href: "/#features", label: "Features" },
  { href: "/#comparison", label: "Comparison" },
  { href: "/#voices", label: "Testimonials" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/product", label: "About Product" },
  { href: "/sample-request", label: "Sample Request" },
] as const;

export default function LpHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const mobileNav = open && mounted && (
    <div
      id="lp-mobile-nav"
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="メニュー"
    >
      <button
        type="button"
        onClick={close}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-label="メニューを閉じる"
      />
      <div className="relative pt-6 pb-8 px-5 bg-card border-b border-border shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="font-script text-[11px] tracking-[0.28em] text-muted-foreground uppercase">Menu</span>
          <button
            type="button"
            onClick={close}
            className="h-11 w-11 flex items-center justify-center rounded-lg border border-border text-foreground hover:bg-secondary"
            aria-label="メニューを閉じる"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav aria-label="メインナビゲーション">
          <ul className="space-y-0">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="font-script flex items-center min-h-[48px] py-3 text-[15px] text-foreground hover:text-primary font-medium border-b border-border last:border-0 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative w-9 h-9 shrink-0 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo.webp"
                alt="O premium"
                width={36}
                height={36}
                className="object-contain"
              />
            </span>
            <span className="font-script text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              O premium
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="メインナビゲーション">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-script text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {label}
              </Link>
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
      </header>
      {mounted && createPortal(mobileNav, document.body)}
    </>
  );
}
