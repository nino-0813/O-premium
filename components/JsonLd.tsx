/**
 * JSON-LD を初期HTMLに出力するコンポーネント（SSR/SSGで描画）
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
