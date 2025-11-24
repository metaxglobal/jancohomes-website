// Desktop Inquiry Form Component - Figma Spec

"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function InquiryFormDesktop() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
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
          source: "inquiry-form-desktop",
          type: "inquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
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

  return (
    <section className="w-full bg-[#1A1A1A] flex flex-col items-start gap-2.5 relative overflow-hidden">
      <div className="self-stretch h-[642px] px-6 md:px-12 lg:px-20 xl:px-[120px] flex flex-col items-center justify-center gap-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-center">
              <span className="text-white text-[56px] font-medium leading-10 tracking-[-0.2rem]">
                Let&apos;s Build Something{" "}
              </span>
              <span className="text-primary text-[56px] font-medium leading-10 tracking-[-0.2rem]">
                Great
              </span>
              <span className="text-white text-[56px] font-medium leading-10 tracking-[-0.2rem]">
                {" "}Together
              </span>
            </h2>
            <p className="text-center text-white text-base font-medium leading-5">
              Tell us about your next project — we&apos;ll help make it a reality
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-[672px] flex flex-col gap-6">
            {/* Name & Phone Row */}
            <div className="w-[672px] flex items-center justify-between">
              {/* Name Field */}
              <div className="w-[324px] flex flex-col gap-2">
                <label className="text-white text-base font-medium leading-5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 px-3 py-1 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-ash text-sm font-normal leading-[14px] focus:outline-none focus:border-primary"
                />
                {errors.name && (
                  <span className="text-[12px] text-red-400">{errors.name}</span>
                )}
              </div>

              {/* Phone Field */}
              <div className="w-[324px] flex flex-col gap-2">
                <label className="text-white text-base font-medium leading-5">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+94 XX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 px-3 py-1 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-ash text-sm font-normal leading-[14px] focus:outline-none focus:border-primary"
                />
                {errors.phone && (
                  <span className="text-[12px] text-red-400">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-base font-medium leading-5">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="h-12 px-3 py-1 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-ash text-sm font-normal leading-[14px] focus:outline-none focus:border-primary"
              />
              {errors.email && (
                <span className="text-[12px] text-red-400">{errors.email}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-base font-medium leading-5">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="h-16 pt-[17px] pb-2 px-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-ash text-sm font-normal leading-[14px] focus:outline-none focus:border-primary resize-none"
              />
              {errors.message && (
                <span className="text-[12px] text-red-400">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[672px] h-12 bg-primary rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-white text-base font-medium leading-5">
                {isSubmitting ? "Submitting..." : "Enquire Now"}
              </span>
              <div className="w-5 h-5">
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="w-[672px] px-4 py-3 bg-primary/20 border border-primary rounded-xl">
                <p className="text-white text-sm text-center">
                  ✓ Thank you! Our expert will contact you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="w-[672px] px-4 py-3 bg-red-500/20 border border-red-500 rounded-xl">
                <p className="text-white text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      
      {/* Background Blur Effects */}
      <div 
        className="w-[351.10px] h-[351.10px] opacity-[0.07] bg-[#7CB342] rounded-full absolute bottom-0 left-0"
        style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
      />
      <div 
        className="w-[351.10px] h-[351.10px] opacity-[0.07] bg-[#7CB342] rounded-full absolute bottom-0 right-0"
        style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
      />
    </section>
  );
}
