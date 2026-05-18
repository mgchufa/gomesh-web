"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export function TallyLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, [pathname]);

  return (
    <Script
      src="https://tally.so/widgets/embed.js"
      strategy="afterInteractive"
    />
  );
}
