import { redirect } from "next/navigation";

/**
 * 製品詳細はトップページに統合したため、/dental-towel は / へリダイレクト
 */
export default function DentalTowelPage() {
  redirect("/");
}
