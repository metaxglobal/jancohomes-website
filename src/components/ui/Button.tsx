import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // Variants
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary-600 active:bg-primary-700",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary",
        variant === "outline" &&
          "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",

        // Sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-5 py-[10px] text-base",
        size === "lg" && "px-6 py-3 text-lg",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
