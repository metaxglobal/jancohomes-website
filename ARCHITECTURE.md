# Project Architecture - Janco Home & Construction

## ✅ Clean Next.js 16 Structure

```
jancohomes-website/
├── src/                        # ALL source code lives here
│   ├── app/                    # Next.js App Router (ONLY location)
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── articles/           # Blog listing page (to be created)
│   │   └── real-estate/        # Real estate page (to be created)
│   │
│   ├── components/
│   │   ├── ui/                 # Atoms: Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── ...
│   │   │
│   │   └── features/           # Organisms: Page sections
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       ├── AboutUsSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── ProjectsShowcase.tsx
│   │       ├── ArticlesSection.tsx
│   │       ├── LeadCaptureSection.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # cn() className merger
│   │
│   └── styles/                 # Global styles
│       └── globals.css         # Tailwind imports & global CSS
│
├── public/                     # Static assets (images, favicon, etc.)
│   └── favicon.ico
│
├── Configuration Files
├── .husky/                     # Git hooks
├── .lintstagedrc.json          # Lint-staged config
├── .prettierrc                 # Prettier config
├── eslint.config.mjs           # ESLint config
├── next.config.ts              # Next.js config
├── tailwind.config.js          # Design tokens (to be created)
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies & scripts
```

## 🚨 Critical Rules

### 1. Single Source of Truth

- ✅ **ONLY** `/src/app/` directory exists (no duplicate `/app` at root)
- ✅ All components live in `/src/components/`
- ✅ All utilities live in `/src/lib/`
- ✅ All styles live in `/src/styles/`

### 2. Next.js 16 Conventions

Next.js automatically detects the `/src` directory and uses `/src/app/` as the App Router.

**File-based routing:**

```
src/app/page.tsx              → / (Homepage)
src/app/articles/page.tsx     → /articles
src/app/real-estate/page.tsx  → /real-estate
src/app/layout.tsx            → Root layout for all pages
```

### 3. Import Aliases

All imports use the `@/*` alias pointing to `/src/*`:

```tsx
// ✅ Correct
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { HeroSection } from "@/components/features/HeroSection";

// ❌ Wrong
import { cn } from "../../../lib/utils";
```

### 4. Component Organization

**Atoms (`/components/ui/`):**

- Small, reusable, single-purpose
- Accept `className` prop
- Use `variant` prop pattern
- Examples: Button, Input, Card, Badge

**Organisms (`/components/features/`):**

- Complex, composed of multiple atoms
- Represent full page sections
- Examples: Header, Footer, HeroSection

**Pages (`/app/`):**

- Compose organisms
- Handle routing
- Define metadata for SEO

## 📁 File Naming Conventions

```tsx
// Components: PascalCase
Button.tsx;
HeroSection.tsx;

// Utilities: camelCase
utils.ts;
api - helpers.ts;

// Pages: lowercase (Next.js convention)
page.tsx;
layout.tsx;
```

## 🔄 Git Workflow

```bash
# 1. Create feature branch
git checkout -b feature/hero-section

# 2. Make changes
# Pre-commit hook automatically:
#    - Runs ESLint --fix
#    - Runs Prettier
#    - Ensures types are valid

# 3. Commit (quality checks run automatically)
git commit -m "feat: add HeroSection component"

# 4. Push and create PR
git push origin feature/hero-section
```

## 🎯 Current Status

### ✅ Phase 1: Complete

- [x] Next.js 16 with App Router
- [x] TypeScript with strict mode
- [x] Tailwind CSS 4
- [x] Clean `/src` structure
- [x] ESLint + Prettier + Husky
- [x] Path aliases (`@/*`)
- [x] Utility functions (`cn()`)

### 🔜 Phase 2: Design Tokens

**Next step:** Extract design tokens from Figma

Required information:

1. **Color Palette**
   - Primary colors
   - Secondary colors
   - Neutral colors
   - Semantic colors (success, warning, error)

2. **Typography Scale**
   - Font families
   - Font sizes (will convert to rem)
   - Font weights
   - Line heights

3. **Spacing Scale**
   - Base unit (4px or 8px)
   - Padding/margin scale

4. **Other Tokens**
   - Border radius values
   - Shadow definitions
   - Breakpoints (if custom)

## 🛡️ Quality Guarantees

Every commit ensures:

- ✅ No ESLint errors
- ✅ Consistent code formatting
- ✅ No TypeScript errors
- ✅ Clean, maintainable code

## 📚 Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

**Ready for Phase 2: Provide Figma design tokens to configure `tailwind.config.js`**
