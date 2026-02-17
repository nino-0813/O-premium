import type { Metadata } from "next";
import {
  buildOrganizationSchema,
  buildProductSchema,
  buildFAQSchema,
  type FAQItem,
  SITE_URL,
} from "@/lib/schemas";
import JsonLd from "@/components/JsonLd";
import LpHeader from "@/components/dental-towel/LpHeader";
import LpFooter from "@/components/dental-towel/LpFooter";
import Hero from "@/components/dental-towel/Hero";
import ComparisonTable from "@/components/dental-towel/ComparisonTable";
import CostComparisonCards from "@/components/dental-towel/CostComparisonCards";
import BenefitsSection from "@/components/dental-towel/BenefitsSection";
import BeforeAfterSection from "@/components/dental-towel/BeforeAfterSection";
import PatientExperienceSection from "@/components/dental-towel/PatientExperienceSection";
import ScientificEvidence from "@/components/dental-towel/ScientificEvidence";
import FAQ from "@/components/dental-towel/FAQ";
import CTA from "@/components/dental-towel/CTA";

const LP_TITLE = "歯科専用フェイスタオル｜衛生・コスト・環境に配慮した歯科医院向けタオル";
const LP_DESCRIPTION =
  "歯科医院向けの専用フェイスタオル。一般タオルとの違い、導入メリット、科学的根拠を解説。サンプル請求・見積依頼受付中。";

const FAQ_DATA: FAQItem[] = [
  {
    question: "歯科専用フェイスタオルとは何ですか？",
    answer:
      "歯科診療所で患者の顔面・首まわりを拭くために用いる、洗濯・乾燥を繰り返して再利用する布製のタオルです。使い捨てのペーパータオルとは区別され、高温洗濯や乾燥機に耐える素材・サイズで設計されています。",
  },
  {
    question: "一般のフェイスタオルとどう違いますか？",
    answer:
      "歯科専用は、診療所での利用を前提にした素材・サイズ・耐久性で設計されています。高温洗濯・乾燥に対応し、患者ごとの取り替えと洗濯サイクルを想定しているため、衛生管理や在庫管理がしやすく、ランニングコストの削減にもつながります。",
  },
  {
    question: "コストはどの程度かかりますか？",
    answer:
      "初期費用は一般タオルより高めになる場合がありますが、1枚を50回以上使用することを想定すると、1回あたりのコストは数十円以下になる試算があります。使い捨てタオルと比較すると、年間で大きな削減効果が期待できます。医院の規模・使用枚数に応じた見積りをご用意しています。",
  },
  {
    question: "洗濯・滅菌はどうすればよいですか？",
    answer:
      "高温（60°C以上）での洗濯と、乾燥機による乾燥を推奨しています。漂白剤の使用も可能な製品を選ぶと、衛生面でより安心です。院内の既存の洗濯ルートに組み込んでいただく形で運用できます。",
  },
  {
    question: "サンプルや見積りは依頼できますか？",
    answer:
      "はい。サンプル請求・見積依頼を承っています。ページ下部の「サンプル請求」「見積依頼」からお申し込みください。通常、2〜3営業日以内にご連絡いたします。",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const url = `${SITE_URL}/dental-towel`;
  return {
    title: LP_TITLE,
    description: LP_DESCRIPTION,
    openGraph: {
      title: LP_TITLE,
      description: LP_DESCRIPTION,
      url,
      type: "website",
      locale: "ja_JP",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function DentalTowelPage() {
  const pageUrl = `${SITE_URL}/dental-towel`;
  const organizationSchema = buildOrganizationSchema();
  const productSchema = buildProductSchema({
    name: "歯科専用フェイスタオル",
    description: LP_DESCRIPTION,
    pageUrl,
  });
  const faqSchema = buildFAQSchema(FAQ_DATA, pageUrl);

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <div className="min-h-screen flex flex-col">
        <LpHeader />
        <main id="main" className="flex-1">
          <Hero />
          <ComparisonTable />
          <CostComparisonCards />
          <BenefitsSection />
          <BeforeAfterSection />
          <PatientExperienceSection />
          <ScientificEvidence />
          <FAQ items={FAQ_DATA} />
          <CTA />
        </main>
        <LpFooter />
      </div>
    </>
  );
}
