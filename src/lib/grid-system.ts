/**
 * Grid System Constants
 * Based on 12-column grid layout at 1440px viewport
 * Margin: 120px (left/right)
 * Gutter: 20px (between columns)
 * Column width: 80px
 * Content width: 1200px (1440px - 120px*2)
 */

import React from 'react';

export const GRID_CONSTANTS = {
  // Viewport
  DESKTOP_WIDTH: 1440,
  MOBILE_WIDTH: 393,
  
  // Desktop Grid
  DESKTOP_MARGIN: 120,
  DESKTOP_GUTTER: 20,
  DESKTOP_COLUMNS: 12,
  DESKTOP_COLUMN_WIDTH: 80,
  DESKTOP_CONTENT_WIDTH: 1200, // 1440 - (120 * 2)
  
  // Mobile Grid
  MOBILE_MARGIN: 16,
  MOBILE_GUTTER: 16,
  MOBILE_COLUMNS: 4,
  MOBILE_CONTENT_WIDTH: 361, // 393 - (16 * 2)
} as const;

/**
 * Grid Layout Classes
 * Use these pre-defined classes for consistent layouts
 */
export const GRID_CLASSES = {
  // Main Container (Full viewport width with centered content)
  container: "w-full mx-auto",
  
  // Desktop Container (1440px max-width, centered)
  desktopContainer: "w-full max-w-[1440px] mx-auto",
  
  // Content Container (1200px max-width with 120px margins)
  contentContainer: "w-full max-w-[1200px] mx-auto px-[120px]",
  
  // Mobile Content Container (361px with 16px margins)
  mobileContentContainer: "w-full max-w-[361px] mx-auto px-4",
  
  // Responsive Container
  responsiveContainer: "w-full max-w-[1200px] mx-auto px-4 lg:px-[120px]",
  
  // Grid Layouts
  grid12: "grid grid-cols-12 gap-5", // 12 columns with 20px gap
  grid6: "grid grid-cols-6 gap-5",
  grid4: "grid grid-cols-4 gap-5",
  grid3: "grid grid-cols-3 gap-5",
  
  // Column Spans (for 12-column grid)
  col1: "col-span-1",
  col2: "col-span-2",
  col3: "col-span-3",
  col4: "col-span-4",
  col5: "col-span-5",
  col6: "col-span-6",
  col7: "col-span-7",
  col8: "col-span-8",
  col9: "col-span-9",
  col10: "col-span-10",
  col11: "col-span-11",
  col12: "col-span-12",
} as const;

/**
 * Section Spacing Constants
 * Consistent vertical spacing for sections
 */
export const SECTION_SPACING = {
  // Desktop
  desktop: {
    paddingTop: "pt-24", // 96px
    paddingBottom: "pb-16", // 64px
    fullPadding: "py-24", // 96px top + bottom
    gap: "gap-12", // 48px between section elements
  },
  
  // Mobile
  mobile: {
    paddingTop: "pt-12", // 48px
    paddingBottom: "pb-12", // 48px
    fullPadding: "py-12", // 48px top + bottom
    gap: "gap-8", // 32px between section elements
  },
  
  // Responsive
  responsive: {
    paddingTop: "pt-12 lg:pt-24",
    paddingBottom: "pb-12 lg:pb-16",
    fullPadding: "py-12 lg:py-24",
    gap: "gap-8 lg:gap-12",
  },
} as const;

/**
 * Background Extension Utilities
 * For sections with colored backgrounds that extend beyond content width
 */
export const BACKGROUND_EXTENSION = {
  // Full width background with centered content
  fullWidth: "w-screen relative left-1/2 right-1/2 -mx-[50vw]",
  
  // Background that extends to viewport edges
  extendBg: "before:absolute before:inset-0 before:-z-10 before:w-screen before:left-1/2 before:-translate-x-1/2",
} as const;

/**
 * Calculate column width for custom layouts
 * @param columns - Number of columns to span (1-12)
 * @param includeGutters - Whether to include gutters in calculation
 */
export function calculateColumnWidth(columns: number, includeGutters: boolean = true): number {
  const { DESKTOP_COLUMN_WIDTH, DESKTOP_GUTTER } = GRID_CONSTANTS;
  
  if (includeGutters) {
    return (DESKTOP_COLUMN_WIDTH * columns) + (DESKTOP_GUTTER * (columns - 1));
  }
  
  return DESKTOP_COLUMN_WIDTH * columns;
}

/**
 * Generate Tailwind width class for column spans
 * @param columns - Number of columns to span (1-12)
 */
export function getColumnWidthClass(columns: number): string {
  const width = calculateColumnWidth(columns);
  return `w-[${width}px]`;
}

/**
 * Predefined Layout Widths
 * Common width combinations based on grid columns
 */
export const LAYOUT_WIDTHS = {
  // Full content width (12 columns)
  full: "w-[1200px]", // 12 cols: 960px + 11 gutters: 220px = 1200px
  
  // Half width (6 columns)
  half: "w-[590px]", // 6 cols: 480px + 5 gutters: 100px = 590px
  
  // Third width (4 columns)
  third: "w-[387px]", // 4 cols: 320px + 3 gutters: 60px = 387px (property cards)
  
  // Two-thirds (8 columns)
  twoThirds: "w-[793px]", // 8 cols: 640px + 7 gutters: 140px = 793px
  
  // Quarter (3 columns)
  quarter: "w-[285px]", // 3 cols: 240px + 2 gutters: 40px = 285px (service cards)
  
  // 5 columns
  fiveCol: "w-[480px]", // 5 cols: 400px + 4 gutters: 80px = 480px
  
  // 7 columns
  sevenCol: "w-[672px]", // 7 cols: 560px + 6 gutters: 120px = 672px (forms)
  
  // 9 columns
  nineCol: "w-[896px]", // 9 cols: 720px + 8 gutters: 160px = 896px
} as const;

/**
 * Responsive Typography based on viewport
 */
export const RESPONSIVE_TEXT = {
  // Hero Titles
  heroTitle: "text-[40px] leading-9 lg:text-[72px] lg:leading-[64px]",
  
  // Section Titles
  sectionTitle: "text-2xl leading-6 lg:text-[72px] lg:leading-[64px]",
  
  // Section Headings
  sectionHeading: "text-2xl leading-6 lg:text-4xl lg:leading-10",
  
  // Body Text
  body: "text-sm leading-[14px] lg:text-base lg:leading-5",
  
  // Labels
  label: "text-xs leading-4 lg:text-sm lg:leading-4",
  
  // Small Text
  small: "text-xs leading-4 lg:text-sm lg:leading-[14px]",
} as const;

/**
 * Component Wrapper with Grid Alignment
 * Use this for consistent section layouts
 */
export function getSectionClasses(config: {
  background?: string;
  extendBackground?: boolean;
  spacing?: 'desktop' | 'mobile' | 'responsive';
} = {}): string {
  const {
    background = '',
    extendBackground = false,
    spacing = 'responsive',
  } = config;
  
  const classes: string[] = ['relative'];
  
  // Background
  if (background) {
    classes.push(background);
  }
  
  // Background extension
  if (extendBackground) {
    classes.push('w-full');
  }
  
  // Spacing
  const spacingConfig = SECTION_SPACING[spacing];
  classes.push(spacingConfig.fullPadding);
  
  return classes.join(' ');
}

/**
 * Grid Debug Overlay (Development Only)
 * Add this component to visualize the grid system
 * 
 * Note: Import and use this in a Client Component file
 * Example in layout:
 * 
 * 'use client';
 * import { GridDebugOverlay } from '@/lib/grid-system';
 * 
 * export default function Layout() {
 *   return (
 *     <>
 *       {process.env.NODE_ENV === 'development' && <GridDebugOverlay />}
 *       {children}
 *     </>
 *   );
 * }
 */
export function GridDebugOverlay() {
  'use client';
  
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return React.createElement(
    'div',
    { className: 'fixed inset-0 pointer-events-none z-50 hidden lg:block' },
    React.createElement(
      'div',
      { className: 'max-w-[1440px] mx-auto h-full px-[120px]' },
      React.createElement(
        'div',
        { className: 'grid grid-cols-12 gap-5 h-full opacity-10' },
        Array.from({ length: 12 }).map((_, i) =>
          React.createElement('div', {
            key: i,
            className: 'bg-primary h-full'
          })
        )
      )
    )
  );
}
