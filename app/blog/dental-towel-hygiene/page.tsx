import type { Metadata } from "next";
import Link from "next/link";
import {
  buildArticleSchema,
  SITE_URL,
  type FAQItem,
} from "@/lib/schemas";
import JsonLd from "@/components/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";

const TITLE = "歯科医院のフェイスタオル衛生管理｜洗濯・滅菌・運用の考え方";
const DESCRIPTION =
  "歯科診療所でフェイスタオルを衛生管理するための洗濯温度、乾燥、滅菌の考え方を解説。結論として、60°C以上の高温洗濯と患者ごとの取り替えが基本です。";

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "フェイスタオルは何度で洗濯すればよいですか？",
    answer:
      "60°C以上の高温洗濯を推奨します。製品によっては漂白剤の使用も可能です。院内の洗濯ルートに組み込み、患者ごとに清潔なタオルを提供する運用にすると安心です。",
  },
  {
    question: "乾燥機は使ってもよいですか？",
    answer:
      "歯科専用フェイスタオルは乾燥機使用を想定した設計のものが多いです。使用前に取扱表示を確認し、高温乾燥に対応している製品を選んでください。",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const url = `${SITE_URL}/blog/dental-towel-hygiene`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: { title: TITLE, description: DESCRIPTION, url },
    alternates: { canonical: url },
  };
}

export default function Page() {
  const pageUrl = `${SITE_URL}/blog/dental-towel-hygiene`;
  const articleSchema = buildArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: "2025-01-16",
    dateModified: "2025-01-16",
    pageUrl,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleBody faqItems={FAQ_ITEMS}>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          歯科医院のフェイスタオル衛生管理
        </h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>結論：</strong>
          歯科診療所では、フェイスタオルを患者ごとに取り替え、60°C以上の高温洗濯と十分な乾燥で衛生を保つ運用が基本です。以下で洗濯・滅菌・運用の考え方をまとめます。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">洗濯のポイント</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
          <li>洗濯温度：60°C以上が望ましい（細菌・ウイルス低減のため）</li>
          <li>漂白剤：製品表示に従い、使用可能な場合は活用</li>
          <li>乾燥：乾燥機使用可の製品はしっかり乾かしてから保管</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">運用の基本</h2>
        <p className="text-slate-700 mb-4">
          患者ごとに清潔なタオルを提供し、使用後は洗濯待ちのカゴなどに分けて、洗濯済みと未洗濯を混同しないようにします。枚数は診療数とローテーション日数で確保してください。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">洗濯方法の比較</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-3 font-semibold text-slate-900">項目</th>
                <th className="py-2 px-3 font-semibold text-slate-900">推奨</th>
                <th className="py-2 px-3 font-semibold text-slate-900">備考</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-2 px-3">洗濯温度</td><td className="py-2 px-3">60°C以上</td><td className="py-2 px-3">家庭用洗濯機でも対応可能な機種あり</td></tr>
              <tr><td className="py-2 px-3">乾燥</td><td className="py-2 px-3">乾燥機または十分な自然乾燥</td><td className="py-2 px-3">製品表示を確認</td></tr>
              <tr><td className="py-2 px-3">取り替え</td><td className="py-2 px-3">患者ごと</td><td className="py-2 px-3">交差感染防止の基本</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-700">
          歯科専用フェイスタオルの製品仕様やサンプル請求は
          <Link href="/" className="text-emerald-600 font-medium hover:underline mx-1">
            こちら
          </Link>
          から。
        </p>
      </ArticleBody>
    </>
  );
}
