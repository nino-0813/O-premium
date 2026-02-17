import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata = {
  title: "ブログ",
  description:
    "歯科専用フェイスタオルに関する記事。導入ガイド、衛生管理、コスト試算、仕入れのポイントなど。",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro — Note風の余白とタイポグラフィ */}
      <div className="max-w-[680px] mx-auto px-5 sm:px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <p className="text-[11px] tracking-[0.25em] text-stone-400 uppercase mb-4">
          Articles
        </p>
        <h1 className="font-serif-elegant text-3xl sm:text-[2rem] text-stone-900 tracking-tight leading-tight mb-5">
          ブログ
        </h1>
        <p className="text-[15px] text-stone-500 leading-relaxed max-w-md">
          歯科専用フェイスタオルについて、導入・衛生・コスト・仕入れのポイントをまとめています。
        </p>
      </div>

      {/* 記事一覧 — カード風・余白で区切り */}
      <div className="max-w-[680px] mx-auto px-5 sm:px-6 pb-24">
        <ul className="space-y-0" role="list">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-10 sm:py-12 border-b border-stone-100 last:border-0"
              >
                <span className="text-[11px] tracking-[0.2em] text-stone-400 uppercase">
                  {formatDate(post.date)}
                </span>
                <h2 className="font-serif-elegant text-xl sm:text-2xl text-stone-900 mt-2 mb-3 leading-snug group-hover:text-stone-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[15px] text-stone-500 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <span className="inline-block mt-4 text-[13px] text-stone-400 group-hover:text-accent transition-colors">
                  続きを読む →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <nav className="mt-16 pt-10 border-t border-stone-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-stone-500">
          <Link href="/blog" className="hover:text-stone-800 transition-colors">
            記事一覧
          </Link>
          <span className="text-stone-300" aria-hidden>·</span>
          <Link href="/" className="hover:text-stone-800 transition-colors">
            トップ
          </Link>
          <span className="text-stone-300" aria-hidden>·</span>
          <Link href="/dental-towel" className="hover:text-stone-800 transition-colors">
            製品詳細
          </Link>
        </nav>
      </div>
    </div>
  );
}
