# Janco Homes & Construction Website

A professional Next.js website for Janco Home & Construction, featuring a comprehensive 12-column grid system for consistent, pixel-perfect layouts across all devices.

## 🎯 Project Overview

This is a modern construction and real estate website built with Next.js 16, TypeScript, and Tailwind CSS, following a strict 12-column grid system for optimal design consistency.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📐 Grid System

This project uses a **12-column grid system** with the following specifications:

- **Desktop Width**: 1440px (optimal viewport)
- **Content Width**: 1200px (with 120px margins)
- **Columns**: 12
- **Gutter**: 20px
- **Breakpoint**: 768px (mobile/desktop)

### Quick Grid Reference

| Columns | Width | Common Usage |
|---------|-------|--------------|
| 3 cols  | 285px | Service cards (4 per row) |
| 4 cols  | 387px | Property/Blog cards (3 per row) |
| 6 cols  | 590px | Half-width sections |
| 7 cols  | 672px | Forms |
| 8 cols  | 793px | Main content, project cards |
| 12 cols | 1200px | Full content width |

**See Full Documentation**: 
- 📘 [`GRID_SYSTEM.md`](./GRID_SYSTEM.md) - Complete grid system guide
- ⚡ [`GRID_QUICK_REFERENCE.md`](./GRID_QUICK_REFERENCE.md) - Quick reference  
- 📋 [`GRID_IMPLEMENTATION_PLAN.md`](./GRID_IMPLEMENTATION_PLAN.md) - Refactoring plan

## 🏗️ Project Structure

```
jancohomes-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── blogs/             # Blog pages
│   │   ├── projects/          # Projects pages
│   │   ├── properties/        # Properties pages
│   │   ├── privacy/           # Privacy policy
│   │   └── terms/             # Terms & conditions
│   ├── components/
│   │   ├── features/          # Feature-specific components
│   │   │   ├── hero/         # Hero sections
│   │   │   ├── about/        # About sections
│   │   │   ├── services/     # Services sections
│   │   │   ├── projects/     # Project sections
│   │   │   └── ...
│   │   ├── layout/           # Layout components (NEW)
│   │   │   └── Container.tsx # Grid containers
│   │   └── pages/            # Page-level components
│   ├── lib/
│   │   ├── grid-system.ts    # Grid utilities (NEW)
│   │   ├── design-tokens.ts  # Design tokens
│   │   └── utils.ts          # Utilities
│   └── styles/
│       └── globals.css       # Global styles
├── public/                    # Static assets
├── GRID_SYSTEM.md            # Grid documentation (NEW)
├── GRID_QUICK_REFERENCE.md   # Quick reference (NEW)
├── GRID_IMPLEMENTATION_PLAN.md # Implementation plan (NEW)
├── ARCHITECTURE.md           # Project architecture
├── PROJECT_SETUP.md         # Setup guide
└── PROPERTIES_DATA.md       # Properties data structure
```

## 🎨 Tech Stack

- **Framework**: Next.js 16.0.3 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Hugeicons React
- **Fonts**: Inter (Google Fonts)
- **Image Optimization**: Next.js Image

## 📱 Responsive Design

### Breakpoints
```typescript
mobile:  < 768px   // 393px optimal (iPhone standard)
desktop: ≥ 768px   // 1440px optimal
```

### Grid System
- **Desktop**: 12-column grid, 120px margins, 20px gutters
- **Mobile**: 4-column grid, 16px margins, 16px gutters

## 🎯 Key Features

- ✅ 12-column grid system for pixel-perfect layouts
- ✅ Fully responsive (mobile & desktop)
- ✅ Component-based architecture (Desktop/Mobile separation)
- ✅ Type-safe with TypeScript
- ✅ Optimized images with Next.js
- ✅ SEO-friendly structure
- ✅ Fast builds with Turbopack

## 📚 Documentation

### Grid System (NEW)
- [`GRID_SYSTEM.md`](./GRID_SYSTEM.md) - Complete documentation
- [`GRID_QUICK_REFERENCE.md`](./GRID_QUICK_REFERENCE.md) - Quick reference
- [`GRID_IMPLEMENTATION_PLAN.md`](./GRID_IMPLEMENTATION_PLAN.md) - Migration plan

### Project Documentation
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) - Architecture overview
- [`PROJECT_SETUP.md`](./PROJECT_SETUP.md) - Detailed setup guide
- [`PROPERTIES_DATA.md`](./PROPERTIES_DATA.md) - Properties data structure

## 🔧 Development Guide

### Using the Grid System

```tsx
import { ContentContainer, GridContainer } from '@/components/layout/Container';

// Full-width section with centered content
<section className="w-full bg-background-1 py-24">
  <ContentContainer>
    <h2>Section Title</h2>
  </ContentContainer>
</section>

// 3-column card grid
<ContentContainer>
  <GridContainer>
    <div className="col-span-4">Card 1</div>
    <div className="col-span-4">Card 2</div>
    <div className="col-span-4">Card 3</div>
  </GridContainer>
</ContentContainer>
```

### Running Development Mode
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Type Checking
TypeScript checking happens automatically during build.

## 🎨 Design Tokens

### Colors
- **Primary**: `#7CB342` (Green)
- **Secondary**: `#1A1A1A` (Dark)
- **Background 1**: `#E8E5DC` (Beige)
- **Background 2**: `#D9D9D9` (Gray)
- **Background 3**: `#F7F7F7` (Off-white)

### Typography
- **Font**: Inter
- **Sizes**: 12px - 72px (responsive)
- **Weights**: 300, 400, 500

## 📊 Build Status

✅ **All Builds Passing**  
- 8 routes generated
- TypeScript checks passing
- Optimized production build

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (recommended) - [Deploy](https://vercel.com/new)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🤝 Contributing

1. Follow the 12-column grid system strictly
2. Use predefined container components
3. Test on multiple breakpoints (393px, 768px, 1440px)
4. Run `npm run build` before committing
5. Document new components

## 📝 License

Copyright © 2025 Janco Home & Construction. All rights reserved.

---

**Maintained by**: Meta X Global  
**Version**: 1.0.0  
**Last Updated**: November 20, 2025
