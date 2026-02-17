import type { FAQItem } from "@/lib/schemas";

/**
 * FAQ — カード型・余白を活かしたレイアウト
 */
interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <section
      className="py-20 md:py-24 bg-stone-50"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mb-12">
          <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
            FAQ
          </span>
          <h2 id="faq-heading" className="font-serif-elegant text-2xl md:text-[1.65rem] font-medium text-stone-800 mt-1">
            よくある質問
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-1 max-w-3xl">
          {items.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-100 bg-white p-6 md:p-7 shadow-card transition-shadow hover:shadow-soft"
            >
              <dt className="text-[15px] font-medium text-stone-800 mb-3">
                {faq.question}
              </dt>
              <dd className="text-[14px] text-stone-600 leading-[1.75]">
                {faq.answer}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
