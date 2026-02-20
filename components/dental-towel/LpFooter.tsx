import Link from "next/link";
import Image from "next/image";

const COMPANY = {
  name: "合同会社Proof",
  corporateNumber: "6120903004360",
  representative: "奥濵　隆史",
  established: "2022年11月7日設立",
  capital: "300万円",
  business: [
    "衣料品、衣料雑貨品、繊維製品、日用品の企画、輸出入、製造及び販売",
    "各種コンサルティング業務",
    "物品の保管、管理、梱包及び配送",
    "上記各号に附帯する一切の事業",
  ],
  address: "〒567-0086　大阪府茨木市彩都やまぶき2-2-Ｂ209",
  bank: "GMOあおぞら銀行",
  homepage: "https://www.proof-filler.com",
  email: "proof.llc1107@gmail.com",
};

export default function LpFooter() {
  return (
    <footer className="border-t border-border bg-card py-12 px-5 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative w-9 h-9 shrink-0 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo.webp"
                alt="O premium"
                width={36}
                height={36}
                className="object-contain"
              />
            </span>
            <span className="font-script text-[10px] tracking-[0.28em] text-muted-foreground uppercase">O premium</span>
          </Link>

          {/* 会社概要 */}
          <div className="w-full max-w-2xl">
            <h2 className="font-script text-[11px] tracking-[0.2em] text-muted-foreground uppercase text-center mb-6">
              Company
            </h2>
            <dl className="grid gap-y-2 sm:gap-y-3 text-[12px] sm:text-[13px] text-muted-foreground">
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">会社名</dt>
                <dd>{COMPANY.name}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">法人番号</dt>
                <dd>{COMPANY.corporateNumber}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">代表社員</dt>
                <dd>{COMPANY.representative}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">創業</dt>
                <dd>{COMPANY.established}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">資本金</dt>
                <dd>{COMPANY.capital}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">事業内容</dt>
                <dd className="mt-0.5">
                  <ul className="list-none space-y-1">
                    {COMPANY.business.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">所在地</dt>
                <dd>{COMPANY.address}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">取引銀行</dt>
                <dd>{COMPANY.bank}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">homepage</dt>
                <dd>
                  <a
                    href={COMPANY.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {COMPANY.homepage}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-0.5">
                <dt className="sm:w-24 shrink-0 font-medium text-foreground">お問合せ先</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <nav className="flex flex-nowrap items-center justify-center gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden py-2 -mx-1 sm:mx-0" aria-label="フッターナビゲーション">
            <Link href="/" className="shrink-0 whitespace-nowrap text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              トップへ戻る
            </Link>
            <Link href="/sample-request" className="shrink-0 whitespace-nowrap text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              サンプル請求
            </Link>
            <Link href="/quote-request" className="shrink-0 whitespace-nowrap text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              見積依頼
            </Link>
            <Link href="/privacy" className="shrink-0 whitespace-nowrap text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
