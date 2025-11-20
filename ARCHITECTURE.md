# Project Architecture - Janco Home & Construction

## ✅ Clean Next.js 16 Structure

```
jancohomes-website/
├── src/                        # ALL source code lives here
│   ├── app/                    # Next.js App Router (ONLY location)
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage (uses features/ sections)
│   │   ├── blogs/              # Blog pages
│   │   │   ├── page.tsx        # Blog listing (uses pages/blogs)
│   │   │   └── [id]/           # Individual blog post
│   │   ├── projects/           # Projects pages
│   │   │   └── page.tsx        # Projects listing (uses pages/projects)
│   │   ├── properties/         # Properties pages
│   │   │   └── page.tsx        # Properties listing
│   │   ├── terms/              # Terms & Privacy
│   │   │   └── page.tsx
│   │   └── privacy/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                 # Atoms: Reusable UI components
│   │   │   └── Button.tsx
│   │   │
│   │   ├── features/           # Home Page Sections (Mobile + Desktop variants)
│   │   │   ├── navigation/
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   ├── DesktopNav.tsx
│   │   │   │   └── index.ts    # Barrel export
│   │   │   ├── hero/
│   │   │   │   ├── HeroMobile.tsx
│   │   │   │   ├── HeroDesktop.tsx
│   │   │   │   └── index.ts
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── projects/       # Home page projects section
│   │   │   ├── testimonials/
│   │   │   ├── blogs/          # Home page blogs section
│   │   │   ├── real-estate/    # Home page real estate section
│   │   │   ├── inquiry-form/
│   │   │   ├── footer/
│   │   │   ├── ConsultationModal.tsx
│   │   │   ├── BlogArticleCard.tsx
│   │   │   ├── FeaturedProjectCard.tsx  # For home page
│   │   │   ├── ProjectCard.tsx          # For projects page
│   │   │   └── PropertyCard.tsx
│   │   │
│   │   └── pages/              # Full Page Components (Mobile + Desktop variants)
│   │       └── projects/
│   │           ├── ProjectsPageMobile.tsx
│   │           ├── ProjectsPageDesktop.tsx
│   │           └── index.ts    # Barrel export
│   │       (Future: blogs/, properties/, terms/, privacy/)
│   │
│   ├── data/                   # Data files
│   │   └── properties.ts
│   │
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts            # cn() className merger
│   │   └── design-tokens.ts
│   │
│   └── styles/                 # Global styles
│       └── globals.css         # Tailwind imports & global CSS
│
├── public/                     # Static assets
│   ├── blogs/
│   ├── projects/
│   └── real states/
│
├── Configuration Files
├── eslint.config.mjs
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚨 Critical Rules

### 1. Single Source of Truth

- ✅ **ONLY** `/src/app/` directory exists (no duplicate `/app` at root)
- ✅ All components live in `/src/components/`
- ✅ All utilities live in `/src/lib/`
- ✅ All styles live in `/src/styles/`

### 2. Component Organization Pattern

**Features (`/components/features/`)** - Home Page Sections:
- Contains sections displayed on the home page
- Each section has Mobile and Desktop variants
- Structure: `features/{section}/{SectionMobile.tsx, SectionDesktop.tsx, index.ts}`
- Examples: hero/, about/, services/, navigation/, footer/

**Pages (`/components/pages/`)** - Full Page Components:
- Contains complete page components for dedicated routes
- Each page has Mobile and Desktop variants
- Structure: `pages/{page}/{PageMobile.tsx, PageDesktop.tsx, index.ts}`
- Examples: projects/, blogs/, properties/, terms/, privacy/

**Pattern:**
```tsx
// components/pages/projects/index.ts
export { ProjectsPageMobile } from "./ProjectsPageMobile";
export { ProjectsPageDesktop } from "./ProjectsPageDesktop";

// app/projects/page.tsx
import { ProjectsPageMobile, ProjectsPageDesktop } from "@/components/pages/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="lg:hidden">
        <ProjectsPageMobile />
      </div>
      <div className="hidden lg:block">
        <ProjectsPageDesktop />
      </div>
    </>
  );
}
```

### 3. Next.js 16 Conventions

Next.js automatically detects the `/src` directory and uses `/src/app/` as the App Router.

**File-based routing:**

```
src/app/page.tsx              → / (Homepage)
src/app/projects/page.tsx     → /projects
src/app/blogs/page.tsx        → /blogs
src/app/properties/page.tsx   → /properties
src/app/layout.tsx            → Root layout for all pages
```

### 4. Import Aliases

All imports use the `@/*` alias pointing to `/src/*`:

```tsx
// ✅ Correct
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { HeroMobile, HeroDesktop } from "@/components/features/hero";
import { ProjectsPageMobile } from "@/components/pages/projects";

// ❌ Wrong
import { cn } from "../../../lib/utils";
```

### 5. Component Organization

**Atoms (`/components/ui/`):**

- Small, reusable, single-purpose
- Accept `className` prop
- Use `variant` prop pattern
- Examples: Button, Input, Card, Badge

**Features (`/components/features/`):**

- Home page sections only
- Mobile and Desktop variants
- Each folder has index.ts for barrel export
- Examples: Header, Footer, HeroSection, AboutSection

**Pages (`/components/pages/`):**

- Full page components for dedicated routes
- Mobile and Desktop variants
- Each folder has index.ts for barrel export
- Examples: ProjectsPage, BlogsPage, PropertiesPage

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
