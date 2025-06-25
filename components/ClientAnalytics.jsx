"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WTBRDHPQEH", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
