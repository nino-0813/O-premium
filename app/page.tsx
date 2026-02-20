import type { Metadata } from "next";
import {
  buildOrganizationSchema,
  buildProductSchema,
  buildFAQSchema,
  SITE_URL,
} from "@/lib/schemas";
import { FAQ_DATA } from "@/lib/faq-data";
import JsonLd from "@/components/JsonLd";
import LpHeader from "@/components/dental-towel/LpHeader";
import LpFooter from "@/components/dental-towel/LpFooter";
import Hero from "@/components/dental-towel/Hero";
import FeaturesSection from "@/components/dental-towel/FeaturesSection";
import ComparisonTable from "@/components/dental-towel/ComparisonTable";
import ProductGallerySection from "@/components/dental-towel/ProductGallerySection";
import TestimonialsSection from "@/components/dental-towel/TestimonialsSection";
import BenefitsSection from "@/components/dental-towel/BenefitsSection";
import FAQ from "@/components/dental-towel/FAQ";
import CTA from "@/components/dental-towel/CTA";
import AnimateIn from "@/components/AnimateIn";

const LP_TITLE = "歯科専用フェイスタオル｜O premium｜歯科医院向け高級タオル";
const LP_DESCRIPTION =
  "現場の歯科医師が考えた歯科専用フェイスタオル。吸水性・耐久性・肌触りにこだわり、患者満足度と医院ブランド力を高めます。無料サンプル請求・見積依頼受付中。";

export async function generateMetadata(): Promise<Metadata> {
  const url = SITE_URL;
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

export default function Home() {
  const pageUrl = SITE_URL;
  const organizationSchema = buildOrganizationSchema();
  const productSchema = buildProductSchema({
    name: "O premium 歯科専用フェイスタオル",
    description: LP_DESCRIPTION,
    pageUrl,
  });
  const faqSchema = buildFAQSchema(FAQ_DATA, pageUrl);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <JsonLd data={organizationSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <AnimateIn delay={0} threshold={0}>
        <LpHeader />
      </AnimateIn>
      <main id="main" className="flex-1">
        <AnimateIn delay={120}>
          <Hero />
        </AnimateIn>
        <AnimateIn>
          <FeaturesSection />
        </AnimateIn>
        <AnimateIn>
          <ComparisonTable />
        </AnimateIn>
        <AnimateIn>
          <ProductGallerySection />
        </AnimateIn>
        <AnimateIn>
          <TestimonialsSection />
        </AnimateIn>
        <AnimateIn>
          <BenefitsSection />
        </AnimateIn>
        <AnimateIn>
          <CTA />
        </AnimateIn>
        <AnimateIn>
          <FAQ items={FAQ_DATA} />
        </AnimateIn>
      </main>
      <AnimateIn>
        <LpFooter />
      </AnimateIn>
    </div>
  );
}
