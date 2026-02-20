import type { Metadata } from "next";
import Link from "next/link";
import {
  buildArticleSchema,
  SITE_URL,
  type FAQItem,
} from "@/lib/schemas";
import JsonLd from "@/components/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";

const TITLE = "歯科医院のフェイスタオルコスト試算｜布タオルで削減できる金額の目安";
const DESCRIPTION =
  "歯科医院でフェイスタオルを布製品にした場合のコスト試算と削減効果の目安を解説。結論として、使用回数50回以上で1回あたり数十円以下になり、年間では大きな差が出る場合があります。";

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "布タオルは何回くらい使えますか？",
    answer:
      "製品や洗濯条件によりますが、歯科専用として設計されたものは50回〜100回以上使用できることを想定しているものが多いです。高温洗濯に耐える素材選びが重要です。",
  },
  {
    question: "見積りは依頼できますか？",
    answer:
      "はい。医院の診療数・使用枚数に合わせた見積りを承っています。LPの「見積依頼」からお申し込みください。2〜3営業日以内にご連絡します。",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const url = `${SITE_URL}/blog/dental-towel-cost`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: { title: TITLE, description: DESCRIPTION, url },
    alternates: { canonical: url },
  };
}

export default function Page() {
  const pageUrl = `${SITE_URL}/blog/dental-towel-cost`;
  const articleSchema = buildArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: "2025-01-18",
    dateModified: "2025-01-18",
    pageUrl,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleBody faqItems={FAQ_ITEMS}>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          歯科医院のフェイスタオルコスト試算
        </h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>結論：</strong>
          布の歯科専用フェイスタオルを50回以上使用する前提だと、1回あたりのコストは数十円以下になる試算が一般的です。使い捨てと比べると、年間で数万円〜十数万円の差が出るケースもあります。以下で試算の考え方をまとめます。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">試算の前提（例）</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
          <li>1日あたり患者数：30人 → 1日30枚使用</li>
          <li>布タオル：1枚500円、80回使用 → 1回あたり約6円</li>
          <li>使い捨て：1枚25円と仮定 → 1回あたり25円</li>
          <li>差額：1回あたり約19円 × 30人/日 × 営業日で年間差が大きくなる</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">コスト比較表（1回あたり目安）</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-3 font-semibold text-slate-900">使用回数</th>
                <th className="py-2 px-3 font-semibold text-slate-900">布（1枚500円時）</th>
                <th className="py-2 px-3 font-semibold text-slate-900">使い捨て25円/枚</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-2 px-3">20回</td><td className="py-2 px-3">25円</td><td className="py-2 px-3">25円</td></tr>
              <tr><td className="py-2 px-3">50回</td><td className="py-2 px-3">10円</td><td className="py-2 px-3">25円</td></tr>
              <tr><td className="py-2 px-3">80回</td><td className="py-2 px-3">約6円</td><td className="py-2 px-3">25円</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-700">
          実際の単価・枚数に合わせた見積りは
          <Link href="/" className="text-emerald-600 font-medium hover:underline mx-1">
            歯科専用フェイスタオル LP の見積依頼
          </Link>
          からご依頼ください。
        </p>
      </ArticleBody>
    </>
  );
}
