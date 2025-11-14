# Janco Home & Construction Website

A high-performance, responsive landing page built with Next.js 16, TypeScript, and Tailwind CSS following modern web development best practices.

## 🏗️ Project Structure

```
jancohomes-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── ui/                 # Atomic components (Atoms)
│   │   │                       # Button, Input, Icon, etc.
│   │   └── features/           # Complex sections (Organisms)
│   │                           # HeroSection, ProjectsShowcase, etc.
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn for className merging)
│   └── styles/
│       └── globals.css         # Global styles and Tailwind imports
├── public/                     # Static assets
├── .husky/                     # Git hooks for code quality
└── Configuration files
```

## 🚀 Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS 4
- **Code Quality:** ESLint, Prettier, Husky
- **Utilities:** clsx, tailwind-merge

## 📋 Development Principles

### 1. Mobile-First Development

All styles are written for the smallest mobile viewport first, then progressively enhanced using Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, `xl:`).

### 2. Atomic Design Pattern

- **Atoms** (`/components/ui/`): Small, reusable components (Button, Input)
- **Organisms** (`/components/features/`): Complex page sections (HeroSection, Footer)
- **Pages** (`/app/`): Composed from organisms

### 3. Design Token System

All design tokens (colors, typography, spacing) are centralized in `tailwind.config.js` using semantic naming:

- `primary`, `secondary` (not `blue-500`)
- Font sizes in `rem` units
- Consistent spacing scale

### 4. Static Site Generation (SSG)

The entire site is built for SSG (default Next.js behavior) for maximum performance.

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint issues
npm run format      # Format all files with Prettier
npm run format:check # Check formatting
```

## 🔧 Code Quality Automation

### Pre-commit Hooks (Husky)

Every commit automatically:

1. Runs ESLint and auto-fixes issues
2. Formats code with Prettier
3. Ensures TypeScript type safety

### ESLint Rules

- React/Next.js best practices
- TypeScript strict rules
- Consistent code style
- No unused variables/imports

## 📦 Component Architecture

### Creating a New Component

```tsx
// src/components/ui/Button.tsx
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-colors",
        variant === "primary" && "bg-primary text-white hover:bg-primary/90",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Best Practices

- ✅ Use semantic HTML elements
- ✅ Accept `className` prop and merge with `cn()`
- ✅ Use `variant` prop instead of boolean props
- ✅ Include `:focus-visible` states for accessibility
- ✅ Export as named exports (not default)

## 🎨 Styling Guidelines

### Tailwind CSS Usage

```tsx
// ✅ Good: Mobile-first
<div className="p-4 md:p-6 lg:p-8">

// ❌ Bad: Desktop-first
<div className="p-8 md:p-6 sm:p-4">

// ✅ Good: Semantic tokens
<div className="bg-primary text-white">

// ❌ Bad: Raw color values
<div className="bg-blue-500 text-white">
```

## 🔄 Git Workflow

1. Work on feature branches
2. Commits automatically run quality checks (Husky)
3. Merge to `main` after review

## 📄 Pages to Build

- `/` - Homepage (Hero, About, Services, Projects, Articles, Lead Capture)
- `/articles` - Blog posts listing
- `/real-estate` - Real estate listings

## 🎯 Next Steps: Phase 2

Phase 1 ✅ Complete!

**Ready for Phase 2: Design Token Extraction**

- Provide Figma color palette
- Provide typography scale
- Provide spacing scale
- Configure `tailwind.config.js`

---

Built with ❤️ following the Web Development Blueprint 2.0
