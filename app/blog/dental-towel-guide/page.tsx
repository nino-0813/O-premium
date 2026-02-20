import type { Metadata } from "next";
import Link from "next/link";
import {
  buildArticleSchema,
  SITE_URL,
  type FAQItem,
} from "@/lib/schemas";
import JsonLd from "@/components/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";

const TITLE = "歯科医院向けフェイスタオル導入ガイド｜選び方・運用のポイント";
const DESCRIPTION =
  "歯科専用フェイスタオルの選び方、導入の流れ、運用のポイントを解説。結論として、素材・サイズ・洗濯対応を確認し、サンプルで検証してから導入するのがおすすめです。";

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "歯科医院でフェイスタオルを導入するメリットは？",
    answer:
      "衛生管理のしやすさ、ランニングコストの削減、環境負荷の低減、患者体験の向上が主なメリットです。使い捨てと比べて総コストを抑えつつ、清潔なタオルを提供できます。",
  },
  {
    question: "導入時には何を確認すればよいですか？",
    answer:
      "素材（綿・綿混、高温洗濯対応）、サイズ（院内で統一できるか）、枚数（診療数×ローテーション）、洗濯ルートの確保を確認してください。サンプル請求で実物を検証することをおすすめします。",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const url = `${SITE_URL}/blog/dental-towel-guide`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: { title: TITLE, description: DESCRIPTION, url },
    alternates: { canonical: url },
  };
}

export default function Page() {
  const pageUrl = `${SITE_URL}/blog/dental-towel-guide`;
  const articleSchema = buildArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    pageUrl,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleBody faqItems={FAQ_ITEMS}>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          歯科医院向けフェイスタオル導入ガイド
        </h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>結論：</strong>
          歯科専用フェイスタオルは、素材・サイズ・洗濯対応を確認し、サンプルで検証してから導入するのがおすすめです。以下で選び方と運用のポイントをまとめます。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">選び方のポイント</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
          <li>高温洗濯・乾燥機対応の素材（綿または綿混紡）</li>
          <li>院内で統一できるサイズ・色（在庫・洗濯管理のしやすさ）</li>
          <li>吸水・速乾性（診療後の拭き心地と乾燥効率）</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">導入フロー</h2>
        <ol className="list-decimal list-inside text-slate-700 space-y-2 mb-6">
          <li>必要枚数の試算（診療数×ローテーション日数など）</li>
          <li>サンプル請求で実物を確認</li>
          <li>洗濯ルートの確保・担当の明確化</li>
          <li>本導入と運用ルールの共有</li>
        </ol>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">製品タイプの比較</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-3 font-semibold text-slate-900">項目</th>
                <th className="py-2 px-3 font-semibold text-slate-900">歯科専用</th>
                <th className="py-2 px-3 font-semibold text-slate-900">一般タオル</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-2 px-3">洗濯対応</td><td className="py-2 px-3">高温・乾燥機対応</td><td className="py-2 px-3">製品による</td></tr>
              <tr><td className="py-2 px-3">サイズ統一</td><td className="py-2 px-3">規格品で統一しやすい</td><td className="py-2 px-3">バラつきあり</td></tr>
              <tr><td className="py-2 px-3">コスト</td><td className="py-2 px-3">長く使うほど1回あたり低コスト</td><td className="py-2 px-3">買い替えで総コスト増の可能性</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-700">
          詳細な製品比較やサンプル請求は
          <Link href="/" className="text-emerald-600 font-medium hover:underline mx-1">
            歯科専用フェイスタオル LP
          </Link>
          からご確認ください。
        </p>
      </ArticleBody>
    </>
  );
}
