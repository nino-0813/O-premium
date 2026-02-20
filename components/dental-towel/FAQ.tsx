"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/schemas";

/**
 * FAQ — アコーディオン式・カード型・余白を活かしたレイアウト
 */
interface FAQProps {
  items: FAQItem[];
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-soft overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left p-6 md:p-7 gap-4 min-h-[56px]"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-foreground pr-4">
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180 bg-accent-light text-primary border-accent-light" : ""
          }`}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
          <p className="text-[14px] text-muted-foreground leading-[1.8]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ items }: FAQProps) {
  return (
    <section
      className="py-20 md:py-28 bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="font-script text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            FAQ
          </span>
          <h2 id="faq-heading" className="font-serif-elegant text-2xl md:text-3xl font-medium text-foreground mt-2 text-balance">
            よくある質問
          </h2>
          <p className="text-muted-foreground text-[15px] mt-4 max-w-xl mx-auto leading-relaxed">
            導入に関するよくあるご質問をまとめました。
          </p>
        </div>
        <div className="grid gap-4 max-w-3xl mx-auto">
          {items.map((faq, i) => (
            <FAQAccordionItem key={i} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
