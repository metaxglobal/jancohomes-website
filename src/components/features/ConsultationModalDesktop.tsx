"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

interface ConsultationModalDesktopProps {
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

export default function ConsultationModalDesktop({
  isOpen,
  onClose,
}: ConsultationModalDesktopProps) {
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
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          source: "consultation-modal-desktop",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Keep modal open longer to show success message
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 3000);
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-[509px] flex-col items-center justify-center gap-8 rounded-[22px] bg-[#1A1A1A] p-6 outline outline-1 outline-white/10 outline-offset-[-1px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex w-full flex-col items-end justify-start self-stretch">
          <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
            <div className="flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex items-start justify-between self-stretch">
                <div className="flex items-center justify-start gap-2">
                  <div className="text-center">
                    <span className="text-[36px] font-medium leading-10 tracking-[-0.1rem] text-white">
                      Book a Free{" "}
                    </span>
                    <span className="text-[36px] font-medium leading-10 tracking-[-0.1rem] text-[#7CB342]">
                      Consultation
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-start gap-2.5 rounded-[11px] p-2.5 outline outline-1 outline-[#C2C2C2] outline-offset-[-1px] transition-opacity hover:opacity-80"
                  aria-label="Close modal"
                >
                  <div className="flex items-center justify-start gap-2.5">
                    <HugeiconsIcon
                      icon={Cancel01Icon}
                      size={20}
                      color="white"
                      strokeWidth={1.5}
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[437px] text-[16px] font-medium leading-5 text-ash">
              Tell us about your needs and we&apos;ll schedule a free consultation
              with one of our experts.
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-6 self-stretch"
        >
          {/* Name Field */}
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div className="inline-flex items-center justify-start gap-2 self-stretch">
              <div className="text-[16px] font-medium leading-5 text-white">
                Name
              </div>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="inline-flex h-12 items-center justify-start self-stretch overflow-hidden rounded-xl bg-white/10 px-3 py-1 text-[14px] font-normal leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-[#7CB342]"
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div className="inline-flex items-center justify-start gap-2 self-stretch">
              <div className="text-[16px] font-medium leading-5 text-white">
                Phone
              </div>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 XX XXX XXXX"
              className="inline-flex h-12 items-center justify-start self-stretch overflow-hidden rounded-xl bg-white/10 px-3 py-1 text-[14px] font-normal leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-[#7CB342]"
            />
            {errors.phone && (
              <p className="text-xs text-red-400">{errors.phone}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div className="inline-flex items-center justify-start gap-2 self-stretch">
              <div className="text-[16px] font-medium leading-5 text-white">
                Email
              </div>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="inline-flex h-12 items-center justify-start self-stretch overflow-hidden rounded-xl bg-white/10 px-3 py-1 text-[14px] font-normal leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-[#7CB342]"
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex h-[86px] flex-col items-start justify-start gap-2 self-stretch">
            <div className="inline-flex h-[14px] pb-[6px] items-center justify-start gap-2 self-stretch">
              <div className="text-[16px] font-medium leading-5 text-white">
                Message
              </div>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements, timeline, and budget..."
              rows={3}
              className="inline-flex h-16 items-start justify-start self-stretch overflow-hidden rounded-xl bg-white/10 px-3 pb-2 pt-[25px] text-[14px] font-normal leading-[14px] text-white outline outline-1 outline-white/20 outline-offset-[-1px] placeholder:text-[#99A1AF] focus:outline-[#7CB342]"
            />
            {errors.message && (
              <p className="text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-10 items-center justify-center gap-2 self-stretch rounded-xl bg-[#7CB342] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <div className="text-[16px] font-medium leading-5 text-white">
              {isSubmitting ? "Submitting..." : "Enquire Now"}
            </div>
            {!isSubmitting && (
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={20}
                color="white"
                strokeWidth={1.5}
              />
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="self-stretch rounded-lg bg-primary/20 border border-primary p-3 text-center text-[14px] text-white">
              ✓ Thank you! Our expert will contact you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="self-stretch rounded-lg bg-red-500/20 border border-red-500 p-3 text-center text-[14px] text-white">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
