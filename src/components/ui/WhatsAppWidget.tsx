"use client";

import React from "react";
import Image from "next/image";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppWidget({
  phoneNumber = "94712345678",
  message = "Hello! I'm interested in your construction services.",
}: WhatsAppWidgetProps) {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 focus:outline-none"
    >
      <div className="w-12 h-12 relative hover:scale-110 transition-transform duration-200">
        <Image
          src="/whatsapp icon.png"
          alt="WhatsApp"
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>
    </button>
  );
}
