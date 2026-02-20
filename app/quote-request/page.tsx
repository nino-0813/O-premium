import type { Metadata } from "next";
import Link from "next/link";
import LpHeader from "@/components/dental-towel/LpHeader";
import LpFooter from "@/components/dental-towel/LpFooter";
import { RequestForm } from "@/components/request/RequestForm";

export const metadata: Metadata = {
  title: "見積依頼",
  description:
    "歯科専用フェイスタオルの見積依頼。医院の規模・使用枚数に合わせたお見積りをご提案します。",
};

export default function QuoteRequestPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LpHeader />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
            <nav className="mb-10">
              <Link
                href="/"
                className="text-[13px] text-stone-500 hover:text-stone-800"
              >
                ← 製品ページへ戻る
              </Link>
            </nav>
            <div className="max-w-[560px]">
              <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
                Request
              </span>
              <h1 className="font-serif-elegant text-2xl md:text-3xl text-stone-800 mt-1 mb-4">
                見積依頼
              </h1>
              <p className="text-stone-600 text-[15px] leading-relaxed mb-10">
                ご医院の診療数・使用枚数に合わせたお見積りをご希望の方は、下記フォームよりお申し込みください。2〜3営業日以内にご連絡いたします。
              </p>
              <RequestForm type="quote" />
            </div>
          </div>
        </section>
      </main>
      <LpFooter />
    </div>
  );
}
