"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Ensures /#experience, /#projects, /#contact scroll into view after navigation (incl. from other routes). */
export default function HomeHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      if (typeof window === "undefined" || window.location.pathname !== "/") return;
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
