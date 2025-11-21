"use client";

import { useEffect } from "react";

export default function ScrollToHandler() {
  useEffect(() => {
    const target = sessionStorage.getItem("janco_scrollTo");
    if (target) {
      sessionStorage.removeItem("janco_scrollTo");
      // allow a tick for navigation to settle
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, []);

  return null;
}
