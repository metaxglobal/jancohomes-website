"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      const SCRIPT_URL = process.env.NEXT_PUBLIC_FORM_SCRIPT_URL || "";

      if (!SCRIPT_URL) {
        console.warn("Form script URL not configured");
        console.log("Consultation form data:", formData);
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
        }, 2000);
        return;
      }

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "consultation",
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[361px] rounded-[22px] bg-secondary p-6 outline outline-1 outline-ash outline-offset-[-1px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-8 flex flex-col gap-[10px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex h-10 items-center gap-2">
                <h2 className="text-[22px] font-medium leading-6 text-white">
                  Book a Free <span className="text-primary">Consultation</span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-[11px] p-[10px] outline outline-1 outline-white/10 outline-offset-[-1px] transition-colors hover:bg-white/10"
                aria-label="Close modal"
              >
                <HugeiconsIcon
                  icon={Cancel01Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.5}
                />
              </button>
            </div>
            <p className="w-[244px] text-[14px] font-medium leading-[14px] text-[#99A1AF]">
              Tell us about your needs and we&apos;ll schedule a free consultation
              with one of our experts.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modal-name"
              className="text-[16px] font-medium leading-5 text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="h-9 rounded-[12px] bg-white/10 px-3 py-1 text-[12px] leading-4 text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-2 focus:outline-primary"
            />
            {errors.name && (
              <span className="text-[12px] text-red-400">{errors.name}</span>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modal-phone"
              className="text-[16px] font-medium leading-5 text-white"
            >
              Phone
            </label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 XX XXX XXXX"
              className="h-9 rounded-[12px] bg-white/10 px-3 py-1 text-[12px] leading-4 text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-2 focus:outline-primary"
            />
            {errors.phone && (
              <span className="text-[12px] text-red-400">{errors.phone}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modal-email"
              className="text-[16px] font-medium leading-5 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="h-9 rounded-[12px] bg-white/10 px-3 py-1 text-[12px] leading-4 text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-2 focus:outline-primary"
            />
            {errors.email && (
              <span className="text-[12px] text-red-400">{errors.email}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="flex h-[86px] flex-col gap-4">
            <label
              htmlFor="modal-message"
              className="h-[14px] text-[16px] font-medium leading-5 text-white"
            >
              Message
            </label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements, timeline, and budget..."
              rows={3}
              className="h-16 resize-none rounded-[12px] bg-white/10 px-3 pb-2 pt-[10px] text-[12px] leading-4 text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-2 focus:outline-primary"
            />
            {errors.message && (
              <span className="text-[12px] text-red-400">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-10 items-center justify-center gap-2 rounded-[12px] bg-primary transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <span className="text-[16px] font-medium leading-5 text-white">
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
            <div className="rounded-lg bg-primary/20 p-3 text-center text-[12px] text-white">
              Thank you! We&apos;ll contact you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="rounded-lg bg-red-500/20 p-3 text-center text-[12px] text-white">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
