/**
 * Responsive utility classes for consistent styling across breakpoints
 * Following mobile-first approach with Tailwind
 */

// Container Classes
// Desktop: 1440px viewport with 120px padding = 1200px content width
// On larger screens: content stays 1200px, margins grow
export const containerClasses = 
  "w-full px-4 md:px-8 lg:px-[120px] lg:max-w-[1440px] lg:mx-auto";

export const containerNarrow = 
  "w-full px-4 md:px-8 lg:px-[120px] lg:max-w-[1200px] lg:mx-auto";

export const containerWide = 
  "w-full px-4 md:px-8 lg:px-[120px] lg:max-w-[1440px] lg:mx-auto";

// Section Spacing
export const sectionSpacing = 
  "py-12 md:py-16 lg:py-24";

export const sectionSpacingSmall = 
  "py-8 md:py-12 lg:py-16";

export const sectionSpacingLarge = 
  "py-16 md:py-24 lg:py-32";

// Typography
export const headingXL = 
  "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight";

export const headingLarge = 
  "text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight";

export const headingMedium = 
  "text-xl md:text-3xl lg:text-4xl font-bold leading-tight";

export const headingSmall = 
  "text-lg md:text-2xl lg:text-3xl font-semibold leading-tight";

export const bodyLarge = 
  "text-base md:text-lg lg:text-xl leading-relaxed";

export const bodyMedium = 
  "text-sm md:text-base lg:text-lg leading-relaxed";

export const bodySmall = 
  "text-xs md:text-sm lg:text-base leading-relaxed";

// Grid Layouts
export const grid2Cols = 
  "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10";

export const grid3Cols = 
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10";

export const grid4Cols = 
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10";

export const gridAuto = 
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto-fit gap-6 md:gap-8 lg:gap-10";

// Card Styles
export const cardBase = 
  "rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow";

export const cardPadding = 
  "p-4 md:p-6 lg:p-8";

export const cardPaddingSmall = 
  "p-3 md:p-4 lg:p-6";

// Button Sizes
export const buttonSizeMedium = 
  "px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-sm md:text-base lg:text-lg";

export const buttonSizeSmall = 
  "px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm lg:text-base";

export const buttonSizeLarge = 
  "px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-base md:text-lg lg:text-xl";

// Flexbox Utilities
export const flexCenter = 
  "flex items-center justify-center";

export const flexBetween = 
  "flex items-center justify-between";

export const flexStart = 
  "flex items-center justify-start";

export const flexEnd = 
  "flex items-center justify-end";

export const flexCol = 
  "flex flex-col";

export const flexColCenter = 
  "flex flex-col items-center justify-center";

// Gap Utilities
export const gapSmall = 
  "gap-3 md:gap-4 lg:gap-6";

export const gapMedium = 
  "gap-4 md:gap-6 lg:gap-8";

export const gapLarge = 
  "gap-6 md:gap-8 lg:gap-12";

// Show/Hide Utilities
export const showMobile = "block md:hidden";
export const showTablet = "hidden md:block lg:hidden";
export const showDesktop = "hidden lg:block";
export const showTabletUp = "hidden md:block";
export const showDesktopUp = "hidden lg:block";
export const hideMobile = "hidden md:block";
export const hideTablet = "block md:hidden lg:block";
export const hideDesktop = "block lg:hidden";

// Aspect Ratios
export const aspectSquare = "aspect-square";
export const aspectVideo = "aspect-video";
export const aspect4x3 = "aspect-[4/3]";
export const aspect3x4 = "aspect-[3/4]";
export const aspect16x9 = "aspect-[16/9]";

/**
 * Utility function to combine responsive classes
 * @param classes - Array of class strings to combine
 * @returns Combined class string
 */
export function combineResponsive(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Breakpoint helper for conditional rendering
 */
export const breakpoints = {
  mobile: { max: 767 },
  tablet: { min: 768, max: 1023 },
  desktop: { min: 1024 },
  lg: { min: 1024 },
  xl: { min: 1280 },
  "2xl": { min: 1536 },
} as const;
