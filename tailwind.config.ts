import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color
        primary: {
          DEFAULT: "#7CB342",
          50: "#F1F8E9",
          100: "#DCEDC8",
          200: "#C5E1A5",
          300: "#AED581",
          400: "#9CCC65",
          500: "#7CB342", // Main
          600: "#689F38",
          700: "#558B2F",
          800: "#33691E",
          900: "#1B5E20",
        },

        // Secondary Color (Dark)
        secondary: {
          DEFAULT: "#1A1A1A",
          support: "rgba(26, 26, 26, 0.75)", // 75% opacity
        },

        // Background Colors
        background: {
          1: "#E8E5DC", // Beige/Cream
          2: "#D9D9D9", // Light Gray
          3: "#F7F7F7", // Off White
          footer: "#0B0B0A", // Footer Dark
        },

        // Base Colors
        white: {
          DEFAULT: "#FFFFFF",
          input: "rgba(255, 255, 255, 0.1)", // 10% opacity for form inputs
          stroke: "rgba(255, 255, 255, 0.2)", // 20% opacity for borders/strokes
        },

        // Neutral
        ash: "#C2C2C2",

        // Semantic Colors (for future use - success, warning, error)
        success: "#4CAF50",
        warning: "#FF9800",
        error: "#F44336",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        // Add more fonts as discovered during development
      },

      fontSize: {
        // Mobile-first typography scale (base: 16px = 1rem)
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      },

      spacing: {
        // Using 4px base unit (0.25rem) - Standard spacing scale
        // 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
        // Tailwind default spacing already follows this pattern
        
        // Custom grid-specific spacing
        '120': '7.5rem', // 120px - Desktop margins
        '1200': '75rem', // 1200px - Content width
        '1440': '90rem', // 1440px - Desktop width
        '361': '22.5625rem', // 361px - Mobile content width
        '387': '24.1875rem', // 387px - 4-column width (third)
        '480': '30rem', // 480px - 5-column width
        '590': '36.875rem', // 590px - 6-column width (half)
        '672': '42rem', // 672px - 7-column width (forms)
        '793': '49.5625rem', // 793px - 8-column width (two-thirds)
        '285': '17.8125rem', // 285px - 3-column width (quarter/service cards)
      },

      // Mobile-first breakpoints (min-width)
      screens: {
        xs: "375px", // Small mobile (iPhone SE)
        sm: "640px", // Mobile landscape / Large phones
        md: "768px", // Tablets - MOBILE/DESKTOP BREAKPOINT
        lg: "1024px", // Laptops / Small desktops
        xl: "1280px", // Desktops
        "2xl": "1536px", // Large desktops / 2K
        "3xl": "1920px", // Full HD / 2K monitors
        "4xl": "2560px", // 4K monitors
      },

      // Container settings for responsive layouts
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // 16px mobile
          sm: "1.5rem", // 24px tablet
          md: "2rem", // 32px laptop
          lg: "7.5rem", // 120px desktop (matches Figma)
          xl: "7.5rem", // 120px large desktop
          "2xl": "7.5rem", // 120px 2K
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1440px", // Max content width (matches Figma design)
          "2xl": "1440px", // Keeps content at 1440px, increases margins
        },
      },

      // Grid column configuration
      gridTemplateColumns: {
        // Desktop 12-column grid
        '12': 'repeat(12, minmax(0, 1fr))',
        // Mobile 4-column grid
        '4': 'repeat(4, minmax(0, 1fr))',
      },

      // Border radius scale (will expand as needed)
      borderRadius: {
        none: "0",
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        full: "9999px",
      },

      // Box shadow presets (will add specific values as we extract from Figma)
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
        // Add custom shadows as extracted from Figma
      },

      // Z-index scale for layering
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
      },
    },
  },
  plugins: [],
};

export default config;
