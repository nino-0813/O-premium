"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const PRODUCT_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/benefits.webp", alt: "O premium タオルと歯科診療室" },
  { src: "/images/gallery-1.webp", alt: "O premium タオルを積んだ様子" },
  { src: "/images/gallery-2.webp", alt: "O premium 歯科ユニット上のタオル" },
  { src: "/images/gallery-3.webp", alt: "O premium タオルを手に持つ様子" },
  { src: "/images/gallery-4.webp", alt: "O premium タオルとカウンター" },
];

type ProductGalleryProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProductGallery({ open, onClose }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? PRODUCT_IMAGES.length - 1 : i - 1));
  }, []);
  const goNext = useCallback(() => {
    setIndex((i) => (i === PRODUCT_IMAGES.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose, goPrev, goNext]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const current = PRODUCT_IMAGES[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="商品画像ギャラリー"
    >
      {/* 閉じるボタン — 画面右上に固定で常にクリック可能 */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 z-[101] flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        aria-label="閉じる"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-4xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >

        {/* メイン画像 — 前後ボタンは画像の内側左右に配置（閉じるボタンと重ならない） */}
        <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* 前へ — 画像の左端内側 */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            aria-label="前の画像"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* 次へ — 画像の右端内側 */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            aria-label="次の画像"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* カウンター・サムネイル */}
        <p className="text-white/80 text-sm mt-4">
          {index + 1} / {PRODUCT_IMAGES.length}
        </p>
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {PRODUCT_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                i === index ? "border-primary ring-2 ring-primary/50" : "border-white/30 hover:border-white/60"
              }`}
            >
              <span className="relative block w-full h-full">
                <Image src={img.src} alt="" fill className="object-cover" sizes="56px" />
              </span>
            </button>
          ))}
        </div>
        {/* 戻るボタン */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="mt-6 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white text-[15px] font-medium transition-colors"
        >
          戻る
        </button>
      </div>
    </div>
  );
}
