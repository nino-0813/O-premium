import type { Metadata } from "next";
import Link from "next/link";
import {
  buildArticleSchema,
  SITE_URL,
  type FAQItem,
} from "@/lib/schemas";
import JsonLd from "@/components/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";

const TITLE = "布フェイスタオル vs 使い捨てタオル｜歯科医院のコスト・環境比較";
const DESCRIPTION =
  "歯科医院で布のフェイスタオルと使い捨てタオルを比較。結論として、50回以上使う前提なら布タオルの1回あたりコストは数十円以下になり、環境負荷も削減できます。";

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "布タオルと使い捨て、どちらが安いですか？",
    answer:
      "使用回数によります。布タオルは初期単価は高めでも、50回以上使用すれば1回あたり数十円以下になる試算が一般的です。使い捨ては1回あたり数十円〜百円前後のため、年間で多く使う場合は布の方が総コストを抑えられることが多いです。",
  },
  {
    question: "環境面ではどうですか？",
    answer:
      "布タオルは洗濯・再利用のため廃棄物が少なく、使い捨てに比べて環境負荷を抑えられます。洗濯時の水・エネルギーはかかりますが、ライフサイクル全体では削減効果が大きいとされています。",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const url = `${SITE_URL}/blog/dental-towel-vs-disposable`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: { title: TITLE, description: DESCRIPTION, url },
    alternates: { canonical: url },
  };
}

export default function Page() {
  const pageUrl = `${SITE_URL}/blog/dental-towel-vs-disposable`;
  const articleSchema = buildArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: "2025-01-17",
    dateModified: "2025-01-17",
    pageUrl,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleBody faqItems={FAQ_ITEMS}>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          布フェイスタオル vs 使い捨てタオル
        </h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>結論：</strong>
          歯科医院では、布の歯科専用フェイスタオルを50回以上使用する前提であれば、1回あたりのコストは数十円以下になり、使い捨てより総コスト・環境負荷の両面で有利になることが多いです。以下で比較します。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">コスト比較（目安）</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-3 font-semibold text-slate-900">項目</th>
                <th className="py-2 px-3 font-semibold text-slate-900">布タオル</th>
                <th className="py-2 px-3 font-semibold text-slate-900">使い捨て</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-2 px-3">初期単価（1枚）</td><td className="py-2 px-3">数百円程度</td><td className="py-2 px-3">数十円〜百円前後</td></tr>
              <tr><td className="py-2 px-3">50回使用時の1回あたり</td><td className="py-2 px-3">数十円以下</td><td className="py-2 px-3">―</td></tr>
              <tr><td className="py-2 px-3">廃棄物</td><td className="py-2 px-3">少ない</td><td className="py-2 px-3">多い</td></tr>
              <tr><td className="py-2 px-3">患者の肌触り</td><td className="py-2 px-3">良い</td><td className="py-2 px-3">製品による</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">選ぶときのポイント</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
          <li>診療数が多い医院ほど、布タオルのコスト優位性が大きい</li>
          <li>洗濯ルートが確保できるかが布タオル導入の前提</li>
          <li>環境方針を打ち出している医院では布タオルが訴求しやすい</li>
        </ul>

        <p className="text-slate-700">
          歯科専用フェイスタオルの詳細・見積りは
          <Link href="/" className="text-emerald-600 font-medium hover:underline mx-1">
            LP
          </Link>
          からどうぞ。
        </p>
      </ArticleBody>
    </>
  );
}
