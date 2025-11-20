// Desktop Inquiry Form Component

"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

export function InquiryFormDesktop() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Inquiry from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Message:* ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/94777599299?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="hidden lg:flex w-full px-[120px] py-20 flex-col items-center justify-center gap-12">
      {/* Header */}
      <div className="self-stretch flex flex-col items-center justify-start gap-3">
        <div className="self-stretch text-center">
          <span className="text-white text-[56px] font-medium leading-10">
            Let's Build Something{" "}
          </span>
          <span className="text-primary text-[56px] font-medium leading-10">
            Great
          </span>
          <span className="text-white text-[56px] font-medium leading-10">
            {" "}
            Together
          </span>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <div className="text-center text-white text-base font-medium leading-5">
            Tell us about your next project — we'll help make it a reality
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[672px] flex flex-col items-start justify-start gap-6"
      >
        {/* Name & Phone Row */}
        <div className="w-[672px] flex items-center justify-between">
          {/* Name Field */}
          <div className="w-[324px] flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex items-center justify-start gap-2">
              <label
                htmlFor="name"
                className="text-white text-base font-medium leading-5"
              >
                Name
              </label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="self-stretch h-12 px-3 py-1 bg-white/10 rounded-xl flex items-center justify-start text-ash text-sm font-normal leading-[14px] placeholder:text-ash focus:outline-none focus:ring-1 focus:ring-white/20"
              style={{
                outline: "1px rgba(255, 255, 255, 0.20) solid",
                outlineOffset: "-1px",
              }}
            />
          </div>

          {/* Phone Field */}
          <div className="w-[324px] flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex items-center justify-start gap-2">
              <label
                htmlFor="phone"
                className="text-white text-base font-medium leading-5"
              >
                Phone
              </label>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 XX XXX XXXX"
              required
              className="self-stretch h-12 px-3 py-1 bg-white/10 rounded-xl flex items-center justify-start text-ash text-sm font-normal leading-[14px] placeholder:text-ash focus:outline-none focus:ring-1 focus:ring-white/20"
              style={{
                outline: "1px rgba(255, 255, 255, 0.20) solid",
                outlineOffset: "-1px",
              }}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="self-stretch flex items-center justify-start gap-2">
            <label
              htmlFor="email"
              className="text-white text-base font-medium leading-5"
            >
              Email
            </label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="self-stretch h-12 px-3 py-1 bg-white/10 rounded-xl flex items-center justify-start text-ash text-sm font-normal leading-[14px] placeholder:text-ash focus:outline-none focus:ring-1 focus:ring-white/20"
            style={{
              outline: "1px rgba(255, 255, 255, 0.20) solid",
              outlineOffset: "-1px",
            }}
          />
        </div>

        {/* Message Field */}
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="self-stretch flex items-center justify-start gap-2">
            <label
              htmlFor="message"
              className="text-white text-base font-medium leading-5"
            >
              Message
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            rows={3}
            className="self-stretch h-16 px-3 pt-[17px] pb-2 bg-white/10 rounded-xl flex items-start justify-start text-ash text-sm font-normal leading-[14px] placeholder:text-ash focus:outline-none focus:ring-1 focus:ring-white/20 resize-none"
            style={{
              outline: "1px rgba(255, 255, 255, 0.20) solid",
              outlineOffset: "-1px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[672px] h-12 bg-primary rounded-xl flex items-center justify-center gap-2"
        >
          <div className="text-white text-base font-medium leading-5">
            Enquire Now
          </div>
          <div className="w-5 h-5 relative overflow-hidden">
            <HugeiconsIcon
              icon={ArrowDownRight01Icon}
              size={20}
              color="white"
              strokeWidth={1.5}
            />
          </div>
        </button>
      </form>
    </div>
  );
}
