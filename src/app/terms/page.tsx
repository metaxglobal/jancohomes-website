"use client";

import { useEffect, useState } from "react";
import { TermsPageDesktop, TermsPageMobile } from "@/components/pages/terms";

export default function TermsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <TermsPageMobile /> : <TermsPageDesktop />;
}
