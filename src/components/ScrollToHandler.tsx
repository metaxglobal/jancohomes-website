"use client";

import { useEffect } from "react";

export default function ScrollToHandler() {
  useEffect(() => {
    const target = sessionStorage.getItem("janco_scrollTo");
    if (target) {
      sessionStorage.removeItem("janco_scrollTo");
      setTimeout(() => {
        // Find all elements with this ID and filter for the visible one
        const elements = document.querySelectorAll(`[id="${target}"]`);
        const visibleElement = Array.from(elements).find((el) => {
          const htmlEl = el as HTMLElement;
          return htmlEl.offsetParent !== null; // offsetParent is null if element or ancestor has display:none
        });
        if (visibleElement) {
          visibleElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, []);

  return null;
}
