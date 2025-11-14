/**
 * Design Tokens Reference
 * Quick reference for using design tokens in components
 * All tokens are defined in tailwind.config.ts
 */

export const COLORS = {
  // Primary
  primary: "bg-primary text-primary border-primary",

  // Secondary
  secondary: "bg-secondary text-secondary border-secondary",
  secondarySupport: "bg-secondary-support text-secondary-support",

  // Backgrounds
  bg1: "bg-background-1", // Beige/Cream
  bg2: "bg-background-2", // Light Gray
  bg3: "bg-background-3", // Off White
  bgFooter: "bg-background-footer", // Dark Footer

  // White variants
  white: "bg-white text-white",
  whiteInput: "bg-white-input", // 10% opacity
  whiteStroke: "border-white-stroke", // 20% opacity

  // Neutral
  ash: "bg-ash text-ash border-ash",

  // Semantic
  success: "bg-success text-success",
  warning: "bg-warning text-warning",
  error: "bg-error text-error",
} as const;

export const TYPOGRAPHY = {
  // Font sizes with recommended use cases
  xs: "text-xs", // 12px - Small labels, captions
  sm: "text-sm", // 14px - Secondary text, descriptions
  base: "text-base", // 16px - Body text
  lg: "text-lg", // 18px - Emphasized body text
  xl: "text-xl", // 20px - Small headings
  "2xl": "text-2xl", // 24px - Section subheadings
  "3xl": "text-3xl", // 30px - Section headings
  "4xl": "text-4xl", // 36px - Page headings
  "5xl": "text-5xl", // 48px - Hero text
  "6xl": "text-6xl", // 60px - Large hero
  "7xl": "text-7xl", // 72px - Display text

  // Font weights
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
  extrabold: "font-extrabold", // 800
  black: "font-black", // 900
} as const;

export const SPACING = {
  // Common padding/margin patterns (mobile-first)
  section: "py-12 md:py-16 lg:py-20 xl:py-24", // Section vertical spacing
  container: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", // Container horizontal padding
  gap: {
    xs: "gap-2", // 8px
    sm: "gap-4", // 16px
    md: "gap-6", // 24px
    lg: "gap-8", // 32px
    xl: "gap-12", // 48px
  },
} as const;

export const BREAKPOINTS = {
  xs: "375px", // Small mobile
  sm: "640px", // Mobile landscape
  md: "768px", // Tablets
  lg: "1024px", // Laptops
  xl: "1280px", // Desktops
  "2xl": "1536px", // Large desktops
  "3xl": "1920px", // Full HD
  "4xl": "2560px", // 4K
} as const;

export const RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm", // 2px
  base: "rounded", // 4px
  md: "rounded-md", // 6px
  lg: "rounded-lg", // 8px
  xl: "rounded-xl", // 12px
  "2xl": "rounded-2xl", // 16px
  "3xl": "rounded-3xl", // 24px
  full: "rounded-full",
} as const;

// Usage example in components:
// import { COLORS, TYPOGRAPHY, SPACING } from '@/lib/design-tokens';
//
// <div className={cn(COLORS.bg3, SPACING.section)}>
//   <h1 className={cn(TYPOGRAPHY['4xl'], TYPOGRAPHY.bold, COLORS.secondary)}>
//     Title
//   </h1>
// </div>
