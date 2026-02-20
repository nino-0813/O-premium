/**
 * JSON-LD 構造化データ（schema.org）生成
 * SEO・AI引用用。初期HTMLに含めるためServer側で生成。
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export interface FAQItem {
  question: string;
  answer: string;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "歯科専用フェイスタオル販売",
    url: SITE_URL,
    description: "歯科医院向け専用フェイスタオルを提供。衛生・コスト・環境に配慮した布タオルで診療所の満足度を向上します。",
  };
}

export function buildProductSchema(params: {
  name: string;
  description: string;
  pageUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    url: params.pageUrl,
    category: "歯科医院向けフェイスタオル",
    brand: {
      "@type": "Brand",
      name: "歯科専用フェイスタオル",
    },
  };
}

export function buildFAQSchema(faqs: FAQItem[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: pageUrl,
  };
}

export function buildArticleSchema(params: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  pageUrl: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    url: params.pageUrl,
    ...(params.imageUrl && { image: params.imageUrl }),
    publisher: {
      "@type": "Organization",
      name: "歯科専用フェイスタオル販売",
      url: SITE_URL,
    },
  };
}

/** JSON-LD を script タグで出力する場合は、JsonLd コンポーネントを使用してください */
