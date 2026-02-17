import Link from "next/link";
import type { FAQItem } from "@/lib/schemas";

interface ArticleBodyProps {
  children: React.ReactNode;
  faqItems?: FAQItem[];
}

export function ArticleBody({ children, faqItems }: ArticleBodyProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {children}
      {faqItems && faqItems.length > 0 && (
        <section className="mt-14 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">よくある質問</h2>
          <dl className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-1 text-slate-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      <p className="mt-12 pt-8 border-t border-slate-200">
        <Link
          href="/dental-towel"
          className="text-emerald-600 font-medium hover:underline"
        >
          歯科専用フェイスタオルの詳細・サンプル請求はこちら
        </Link>
      </p>
    </article>
  );
}
