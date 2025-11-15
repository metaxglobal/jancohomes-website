"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with your actual Google Apps Script Web App URL
      const SCRIPT_URL = process.env.NEXT_PUBLIC_FORM_SCRIPT_URL || "";

      if (!SCRIPT_URL) {
        console.warn("Form script URL not configured");
        // For now, just log the data
        console.log("Form data:", formData);
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // Note: With no-cors mode, we can't read the response
      // Assume success if no error is thrown
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry-form"
      className="w-full overflow-hidden bg-secondary py-12"
    >
      <div className="flex flex-col items-center gap-8 px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-center text-[36px] font-medium leading-[40px] text-white">
            Let&apos;s Build Something{" "}
            <span className="text-primary">Great</span> Together
          </h2>
          <p className="w-[361px] text-center text-[14px] font-normal leading-[14px] text-white">
            Tell us about your next project — we&apos;ll help make it a reality
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[393px]">
          <div className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[16px] font-medium leading-[20px] text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="h-10 rounded-[12px] bg-white/10 px-3 py-1 text-[14px] leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-ash focus:outline-2 focus:outline-primary"
              />
              {errors.name && (
                <span className="text-[12px] text-red-400">{errors.name}</span>
              )}
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[16px] font-medium leading-[20px] text-white"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+94 XX XXX XXXX"
                className="h-10 rounded-[12px] bg-white/10 px-3 py-1 text-[14px] leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-ash focus:outline-2 focus:outline-primary"
              />
              {errors.phone && (
                <span className="text-[12px] text-red-400">{errors.phone}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[16px] font-medium leading-[20px] text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="h-10 rounded-[12px] bg-white/10 px-3 py-1 text-[14px] leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-ash focus:outline-2 focus:outline-primary"
              />
              {errors.email && (
                <span className="text-[12px] text-red-400">{errors.email}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[16px] font-medium leading-[20px] text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={3}
                className="h-16 resize-none rounded-[12px] bg-white/10 px-3 pb-2 pt-[13px] text-[14px] leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-ash focus:outline-2 focus:outline-primary"
              />
              {errors.message && (
                <span className="text-[12px] text-red-400">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 rounded-[12px] bg-primary px-5 py-[10px] transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <span className="text-[16px] font-medium leading-[20px] text-white">
                {isSubmitting ? "Submitting..." : "Enquire Now"}
              </span>
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="white"
                strokeWidth={1.5}
              />
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="rounded-lg bg-primary/20 p-3 text-center text-[14px] text-white">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-lg bg-red-500/20 p-3 text-center text-[14px] text-white">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
