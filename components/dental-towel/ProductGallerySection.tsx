"use client";

import { useState } from "react";
import ProductGallery from "./ProductGallery";

export default function ProductGallerySection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-8 md:py-12 bg-card" aria-label="商品画像">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent text-primary min-h-[48px] py-3 px-8 font-medium text-[15px] hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            商品画像を見る
          </button>
        </div>
      </section>
      <ProductGallery open={open} onClose={() => setOpen(false)} />
    </>
  );
}
