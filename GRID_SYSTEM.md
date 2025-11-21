# Grid System Implementation Guide

## Overview

This document explains the 12-column grid system implementation for the Janco Homes website, ensuring consistent layouts across all pages and screen sizes.

## Grid Specifications

### Desktop (≥768px)
- **Viewport Width**: 1440px (optimal)
- **Columns**: 12
- **Column Width**: 80px each
- **Gutter**: 20px (gap between columns)
- **Margins**: 120px (left/right)
- **Content Width**: 1200px (1440px - 240px margins)

### Mobile (<768px)
- **Viewport Width**: 393px (iPhone standard)
- **Columns**: 4
- **Gutter**: 16px
- **Margins**: 16px (left/right)
- **Content Width**: 361px (393px - 32px margins)

## Grid Calculation

### Column Spans
To calculate the width of elements spanning multiple columns:

**Formula**: `width = (columns × 80px) + ((columns - 1) × 20px)`

**Examples**:
- 1 column: 80px
- 2 columns: 180px (160px + 20px gutter)
- 3 columns: 285px (240px + 40px gutter) - **Service Cards**
- 4 columns: 387px (320px + 60px gutter) - **Property Cards (1/3)**
- 5 columns: 480px
- 6 columns: 590px (480px + 100px gutter) - **Half Width**
- 7 columns: 672px - **Forms**
- 8 columns: 793px - **Two-thirds Width**
- 12 columns: 1200px - **Full Content Width**

## File Structure

```
src/
├── lib/
│   ├── grid-system.ts          # Grid constants and utilities
│   └── design-tokens.ts         # Design tokens (imports grid system)
├── components/
│   └── layout/
│       └── Container.tsx        # Reusable container components
```

## Usage

### 1. Import Grid Utilities

```typescript
import { GRID_CLASSES, LAYOUT_WIDTHS, SECTION_SPACING } from '@/lib/grid-system';
import { PageContainer, ContentContainer, GridContainer } from '@/components/layout/Container';
```

### 2. Container Components

#### PageContainer
Full viewport width with 1440px max-width, centered:
```tsx
<PageContainer>
  {/* Your content */}
</PageContainer>
```

#### ContentContainer
1200px content width with 120px margins (responsive):
```tsx
<ContentContainer>
  {/* Your content */}
</ContentContainer>
```

#### Section with Background
Full-width section with background color:
```tsx
<Section background="bg-background-1" spacing="large">
  <ContentContainer>
    {/* Your content */}
  </ContentContainer>
</Section>
```

### 3. Grid Layouts

#### 12-Column Grid
```tsx
<GridContainer>
  <div className="col-span-4 lg:col-span-6">Column 1</div>
  <div className="col-span-4 lg:col-span-6">Column 2</div>
</GridContainer>
```

#### Custom Widths
Use predefined layout widths:
```tsx
<div className={LAYOUT_WIDTHS.third}>     {/* 387px - 4 columns */}</div>
<div className={LAYOUT_WIDTHS.half}>      {/* 590px - 6 columns */}</div>
<div className={LAYOUT_WIDTHS.twoThirds}> {/* 793px - 8 columns */}</div>
<div className={LAYOUT_WIDTHS.full}>      {/* 1200px - 12 columns */}</div>
```

## Section Patterns

### Pattern 1: Full-Width Background with Centered Content
```tsx
<section className="w-full bg-background-1 py-24">
  <ContentContainer>
    {/* Content limited to 1200px */}
  </ContentContainer>
</section>
```

### Pattern 2: Constrained Section
```tsx
<PageContainer className="py-24">
  <ContentContainer>
    {/* Content */}
  </ContentContainer>
</PageContainer>
```

### Pattern 3: Grid Layout
```tsx
<Section background="bg-white" spacing="large">
  <ContentContainer>
    <GridContainer>
      <div className="col-span-4">Card 1</div>
      <div className="col-span-4">Card 2</div>
      <div className="col-span-4">Card 3</div>
    </GridContainer>
  </ContentContainer>
</Section>
```

## Component Width Reference

### Common Component Widths

| Component | Columns | Width | Usage |
|-----------|---------|-------|-------|
| Service Card | 3 | 285px | Services grid (4 per row) |
| Property Card | 4 | 387px | Properties grid (3 per row) |
| Blog Card | 4 | 387px | Blogs grid (3 per row) |
| Half Section | 6 | 590px | Two-column layouts |
| Form Container | 7 | 672px | Inquiry forms |
| Two-thirds | 8 | 793px | Project cards |
| Full Width | 12 | 1200px | Headers, single-column content |

## Spacing Guidelines

### Vertical Spacing (Sections)
```typescript
// Desktop
py-24  // 96px top/bottom (large sections)
py-16  // 64px top/bottom (medium sections)
pt-24 pb-16  // Mixed spacing

// Mobile
py-12  // 48px top/bottom

// Responsive
className={SECTION_SPACING.responsive.fullPadding}
```

### Gaps (Between Elements)
```typescript
gap-12  // 48px (desktop section elements)
gap-8   // 32px (mobile section elements)
gap-5   // 20px (grid gutters)
gap-6   // 24px (card content)
```

## Responsive Breakpoints

```typescript
// Tailwind breakpoints
xs: 375px   // Small mobile
sm: 640px   // Mobile landscape
md: 768px   // TABLET - Mobile/Desktop breakpoint
lg: 1024px  // Laptop
xl: 1280px  // Desktop
2xl: 1536px // Large desktop
```

### Usage
```tsx
className="w-full md:w-[387px] lg:w-[590px]"
```

## Background Color Extension

For sections with colored backgrounds that extend beyond content width:

```tsx
<section className="w-full bg-background-1">
  <PageContainer className="py-24">
    <ContentContainer>
      {/* Content limited to 1200px */}
    </ContentContainer>
  </PageContainer>
</section>
```

The section background extends full-width, while content stays within grid boundaries.

## Migration Checklist

When refactoring existing components:

- [ ] Replace fixed widths with grid-based widths
- [ ] Use `PageContainer` for 1440px constraint
- [ ] Use `ContentContainer` for 1200px content area
- [ ] Replace `lg:px-[120px]` with `ContentContainer`
- [ ] Use `GridContainer` for multi-column layouts
- [ ] Update breakpoint from `lg:` to `md:` (768px)
- [ ] Apply consistent vertical spacing
- [ ] Ensure backgrounds extend properly
- [ ] Test on multiple screen sizes

## Examples

### Hero Section
```tsx
<section className="w-full bg-secondary overflow-hidden">
  <PageContainer className="relative h-[860px]">
    {/* Absolute positioned content with grid alignment */}
    <div className="absolute left-120 top-[254px] w-[512px]">
      {/* Content */}
    </div>
  </PageContainer>
</section>
```

### Services Grid
```tsx
<Section background="bg-white" spacing="large">
  <ContentContainer>
    <div className="flex flex-col gap-12">
      <h2>Our Services</h2>
      <div className="grid grid-cols-4 gap-5">
        {services.map(service => (
          <div className="w-285">{/* Service Card */}</div>
        ))}
      </div>
    </div>
  </ContentContainer>
</Section>
```

### Properties Grid (3 columns)
```tsx
<Section background="bg-white" spacing="large">
  <ContentContainer>
    <div className="grid grid-cols-3 gap-5">
      {properties.map(property => (
        <div className="w-387">{/* Property Card */}</div>
      ))}
    </div>
  </ContentContainer>
</Section>
```

## Debug Mode

Enable grid overlay during development:

```tsx
import { GridDebugOverlay } from '@/lib/grid-system';

// In your layout or page
<GridDebugOverlay />
```

This will show a visual overlay of the 12-column grid (development only).

## Best Practices

1. **Always use grid-based widths** instead of arbitrary values
2. **Maintain consistent margins** (120px desktop, 16px mobile)
3. **Use semantic containers** (PageContainer, ContentContainer)
4. **Apply responsive spacing** from SECTION_SPACING constants
5. **Test on multiple breakpoints** (393px, 768px, 1024px, 1440px, 1920px+)
6. **Extend backgrounds properly** for colored sections
7. **Align all content** to the 12-column grid
8. **Use predefined widths** from LAYOUT_WIDTHS

## Common Pitfalls

❌ **Don't**:
- Use arbitrary widths like `w-[400px]`
- Mix different margin values
- Use `lg:` breakpoint for mobile/desktop split (use `md:`)
- Forget to extend section backgrounds
- Hard-code spacing values

✅ **Do**:
- Use grid-calculated widths from LAYOUT_WIDTHS
- Use consistent margins (120px/16px)
- Use `md:` breakpoint for mobile/desktop (768px)
- Wrap sections with proper containers
- Use spacing constants from SECTION_SPACING

## Next Steps

1. Refactor all existing components to use grid system
2. Update all section layouts with proper containers
3. Ensure consistent spacing across pages
4. Test responsive behavior
5. Validate alignment with grid debug overlay

---

**Last Updated**: November 20, 2025  
**Version**: 1.0
