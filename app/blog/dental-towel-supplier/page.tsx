import type { Metadata } from "next";
import Link from "next/link";
import {
  buildArticleSchema,
  SITE_URL,
  type FAQItem,
} from "@/lib/schemas";
import JsonLd from "@/components/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";

const TITLE = "歯科医院向けフェイスタオルの仕入れ・サプライヤー選びのポイント";
const DESCRIPTION =
  "歯科専用フェイスタオルを仕入れる際のサプライヤー選びと確認ポイントを解説。結論として、サンプル検証・納期・最小ロット・洗濯保証の有無を確認し、LPから見積り・サンプル請求するのがおすすめです。";

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "最小発注数はありますか？",
    answer:
      "サプライヤーにより異なります。医院の規模に合わせた少量ロットから対応している業者を選ぶと、在庫リスクを抑えられます。見積依頼時にご確認ください。",
  },
  {
    question: "サンプルはもらえますか？",
    answer:
      "はい。当サイトの歯科専用フェイスタオル LP からサンプル請求が可能です。実物でサイズ・肌触り・洗濯後の状態を確認してから導入を検討できます。",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const url = `${SITE_URL}/blog/dental-towel-supplier`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: { title: TITLE, description: DESCRIPTION, url },
    alternates: { canonical: url },
  };
}

export default function Page() {
  const pageUrl = `${SITE_URL}/blog/dental-towel-supplier`;
  const articleSchema = buildArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: "2025-01-19",
    dateModified: "2025-01-19",
    pageUrl,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleBody faqItems={FAQ_ITEMS}>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          歯科医院向けフェイスタオルの仕入れ・サプライヤー選び
        </h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>結論：</strong>
          歯科専用フェイスタオルを仕入れる際は、サンプルで品質を確認し、納期・最小ロット・洗濯保証の有無をチェックしてから契約するのがおすすめです。以下で選び方のポイントをまとめます。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">サプライヤー選びの確認項目</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
          <li>サンプル提供の有無（実物検証ができるか）</li>
          <li>納期と安定供給（定期発注に対応できるか）</li>
          <li>最小発注数（医院規模に合ったロットか）</li>
          <li>洗濯・品質保証の有無</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">業者タイプの比較</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-3 font-semibold text-slate-900">項目</th>
                <th className="py-2 px-3 font-semibold text-slate-900">歯科専門業者</th>
                <th className="py-2 px-3 font-semibold text-slate-900">一般タオル業者</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-2 px-3">製品</td><td className="py-2 px-3">診療向け設計が明確</td><td className="py-2 px-3">汎用品が多い</td></tr>
              <tr><td className="py-2 px-3">サンプル</td><td className="py-2 px-3">用意していることが多い</td><td className="py-2 px-3">要問い合わせ</td></tr>
              <tr><td className="py-2 px-3">ロット</td><td className="py-2 px-3">医院向け少量から対応の例あり</td><td className="py-2 px-3">最小ロットが大きい場合あり</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-700">
          歯科専用フェイスタオルのサンプル請求・見積依頼は
          <Link href="/dental-towel" className="text-emerald-600 font-medium hover:underline mx-1">
            メイン LP
          </Link>
          から受け付けています。
        </p>
      </ArticleBody>
    </>
  );
}
