"use client";

import { useState } from "react";
import Link from "next/link";

type RequestType = "sample" | "quote";

interface RequestFormProps {
  type: RequestType;
}

const LABELS = {
  sample: {
    submit: "送信する",
    successTitle: "送信を受け付けました",
    successMessage: "サンプル請求のご依頼を承りました。2〜3営業日以内にご連絡いたします。",
  },
  quote: {
    submit: "送信する",
    successTitle: "送信を受け付けました",
    successMessage: "見積依頼を承りました。2〜3営業日以内にご連絡いたします。",
  },
};

export function RequestForm({ type }: RequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const labels = LABELS[type];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-stone-200 bg-stone-50/50 p-10 text-center">
        <h2 className="font-serif-elegant text-xl text-stone-800 mb-3">
          {labels.successTitle}
        </h2>
        <p className="text-stone-600 text-[15px] leading-relaxed mb-8">
          {labels.successMessage}
        </p>
        <Link
          href="/dental-towel"
          className="inline-flex items-center justify-center rounded-xl bg-accent text-white min-h-[48px] py-3 px-8 font-medium text-[15px] hover:bg-accent-hover transition-colors touch-manipulation"
        >
          製品ページへ戻る
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="clinic" className="block text-[13px] font-medium text-stone-700 mb-1.5">
          医院・クリニック名 <span className="text-stone-400">（任意）</span>
        </label>
        <input
          id="clinic"
          name="clinic"
          type="text"
          className="w-full min-h-[48px] rounded-lg border border-stone-200 bg-white py-3 px-4 text-[16px] text-stone-800 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="例：〇〇歯科クリニック"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-[13px] font-medium text-stone-700 mb-1.5">
          ご担当者名 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full min-h-[48px] rounded-lg border border-stone-200 bg-white py-3 px-4 text-[16px] text-stone-800 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="例：山田 太郎"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-stone-700 mb-1.5">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full min-h-[48px] rounded-lg border border-stone-200 bg-white py-3 px-4 text-[16px] text-stone-800 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="例：contact@example.com"
        />
      </div>
      <div>
        <label htmlFor="tel" className="block text-[13px] font-medium text-stone-700 mb-1.5">
          電話番号 <span className="text-stone-400">（任意）</span>
        </label>
        <input
          id="tel"
          name="tel"
          type="tel"
          className="w-full min-h-[48px] rounded-lg border border-stone-200 bg-white py-3 px-4 text-[16px] text-stone-800 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="例：03-1234-5678"
        />
      </div>
      {type === "quote" && (
        <div>
          <label htmlFor="quantity" className="block text-[13px] font-medium text-stone-700 mb-1.5">
            想定ご利用枚数 <span className="text-stone-400">（任意）</span>
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            className="w-full min-h-[48px] rounded-lg border border-stone-200 bg-white py-3 px-4 text-[16px] text-stone-800 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="例：50枚／月、100枚から検討など"
          />
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-stone-700 mb-1.5">
          {type === "sample" ? "ご要望・お問い合わせ" : "ご要望・備考"} <span className="text-stone-400">（任意）</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full min-h-[120px] rounded-lg border border-stone-200 bg-white py-3 px-4 text-[16px] text-stone-800 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-y"
          placeholder={type === "sample" ? "サンプルの送付先やご希望があればご記入ください。" : "希望納期・ロット・仕様のご希望などがあればご記入ください。"}
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto min-w-[200px] min-h-[48px] inline-flex items-center justify-center rounded-xl bg-accent text-white py-4 px-10 font-semibold text-[15px] hover:bg-accent-hover transition-colors active:scale-[0.98]"
        >
          {labels.submit}
        </button>
      </div>
    </form>
  );
}
