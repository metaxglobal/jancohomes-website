"use client";

import { useEffect, useState } from "react";
import { PrivacyPageDesktop, PrivacyPageMobile } from "@/components/pages/privacy";

export default function PrivacyPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <PrivacyPageMobile /> : <PrivacyPageDesktop />;
}
