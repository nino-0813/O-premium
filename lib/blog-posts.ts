export const BLOG_POSTS = [
  {
    slug: "dental-towel-guide",
    title: "歯科医院向けフェイスタオル導入ガイド",
    description:
      "選び方、導入の流れ、運用のポイント。素材・サイズ・洗濯対応を確認し、サンプルで検証してから導入するのがおすすめです。",
    date: "2025-01-15",
  },
  {
    slug: "dental-towel-hygiene",
    title: "歯科医院のフェイスタオル衛生管理",
    description:
      "洗濯・滅菌・運用の考え方。60°C以上の高温洗濯と患者ごとの取り替えが基本です。",
    date: "2025-01-16",
  },
  {
    slug: "dental-towel-vs-disposable",
    title: "布フェイスタオル vs 使い捨てタオル",
    description:
      "歯科医院でのコスト・環境比較。50回以上使う前提なら布タオルの1回あたりコストは数十円以下に。",
    date: "2025-01-17",
  },
  {
    slug: "dental-towel-cost",
    title: "歯科医院のフェイスタオルコスト試算",
    description:
      "布タオルで削減できる金額の目安。使用回数50回以上で1回あたり数十円以下になる試算を解説。",
    date: "2025-01-18",
  },
  {
    slug: "dental-towel-supplier",
    title: "歯科医院向けフェイスタオルの仕入れ・サプライヤー選び",
    description:
      "サプライヤー選びの確認項目、業者タイプの比較。サンプル検証・納期・最小ロットのポイント。",
    date: "2025-01-19",
  },
] as const;

export type BlogPostSlug = (typeof BLOG_POSTS)[number]["slug"];
