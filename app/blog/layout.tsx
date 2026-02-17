import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <Link
            href="/dental-towel"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← 歯科専用フェイスタオル LP
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
