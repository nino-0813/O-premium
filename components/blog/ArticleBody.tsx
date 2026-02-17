import Link from "next/link";
import type { FAQItem } from "@/lib/schemas";

interface ArticleBodyProps {
  children: React.ReactNode;
  faqItems?: FAQItem[];
}

export function ArticleBody({ children, faqItems }: ArticleBodyProps) {
  return (
    <article className="mx-auto max-w-[680px] px-5 sm:px-6 pt-8 pb-20">
      <div
        className="
          [&_h1]:font-serif-elegant [&_h1]:text-2xl [&_h1]:sm:text-[1.75rem] [&_h1]:text-stone-900 [&_h1]:tracking-tight [&_h1]:leading-tight [&_h1]:mb-8
          [&_h2]:font-serif-elegant [&_h2]:text-xl [&_h2]:text-stone-800 [&_h2]:mt-12 [&_h2]:mb-4
          [&_p]:text-[16px] [&_p]:text-stone-600 [&_p]:leading-[1.9] [&_p]:mb-6
          [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-stone-600 [&_ul]:text-[16px] [&_ul]:leading-[1.9] [&_ul]:space-y-2 [&_ul]:mb-6
          [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:text-stone-600 [&_ol]:text-[16px] [&_ol]:leading-[1.9] [&_ol]:space-y-2 [&_ol]:mb-6
          [&_table]:min-w-full [&_table]:text-[15px]
          [&_th]:py-3 [&_th]:px-4 [&_th]:font-semibold [&_th]:text-stone-800 [&_th]:border-b [&_th]:border-stone-200
          [&_td]:py-3 [&_td]:px-4 [&_td]:text-stone-600 [&_td]:border-b [&_td]:border-stone-100
          [&_a]:text-accent [&_a]:font-medium [&_a]:hover:underline [&_a]:underline-offset-2
        "
      >
        {children}
      </div>

      {faqItems && faqItems.length > 0 && (
        <section className="mt-16 pt-12 border-t border-stone-100">
          <h2 className="font-serif-elegant text-xl text-stone-800 mb-8">
            よくある質問
          </h2>
          <dl className="space-y-8">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <dt className="font-medium text-stone-800 mb-2 text-[15px]">
                  {faq.question}
                </dt>
                <dd className="text-[15px] text-stone-600 leading-[1.8]">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className="mt-14 pt-8 border-t border-stone-100">
        <Link
          href="/dental-towel"
          className="text-accent font-medium hover:underline underline-offset-2 text-[15px]"
        >
          歯科専用フェイスタオルの詳細・サンプル請求はこちら
        </Link>
      </div>

      <nav className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-stone-500">
        <Link href="/blog" className="hover:text-stone-800 transition-colors">
          ← 記事一覧
        </Link>
        <span className="text-stone-300" aria-hidden>·</span>
        <Link href="/" className="hover:text-stone-800 transition-colors">
          トップ
        </Link>
      </nav>
    </article>
  );
}
