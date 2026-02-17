"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * ページ遷移時に常に画面上部へスクロールする
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
