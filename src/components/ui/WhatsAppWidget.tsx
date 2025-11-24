"use client";

import React, { useState } from "react";
import Image from "next/image";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppWidget({
  phoneNumber = "94712345678", // Replace with actual phone number
  message = "Hello! I'm interested in your construction services.",
}: WhatsAppWidgetProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Redirect to WhatsApp directly - no logging needed
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div
        className={`
          relative w-14 h-14 md:w-16 md:h-16 
          rounded-full shadow-lg 
          transition-all duration-300 ease-in-out
          ${isHovered ? "scale-110 shadow-2xl" : "scale-100"}
        `}
        style={{
          boxShadow: isHovered
            ? "0 20px 40px rgba(124, 179, 66, 0.4)"
            : "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src="/whatsapp icon.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="w-full h-full object-contain"
          priority
        />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 animate-ping" />
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-secondary text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-secondary" />
        </div>
      )}
    </button>
  );
}
