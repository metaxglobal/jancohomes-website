/**
 * Container Components
 * Reusable layout containers for consistent grid alignment
 */

import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Main Container - Full viewport width with 1440px max-width, centered
 * Use this as the outermost container for sections
 */
export function PageContainer({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('w-full max-w-[1440px] mx-auto', className)}>
      {children}
    </Component>
  );
}

/**
 * Content Container - 1200px content width with 120px margins
 * Use this inside PageContainer for actual content
 */
export function ContentContainer({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('w-full max-w-[1200px] mx-auto px-4 lg:px-[120px]', className)}>
      {children}
    </Component>
  );
}

/**
 * Grid Container - 12-column grid layout
 * Use this for complex multi-column layouts
 */
export function GridContainer({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-5', className)}>
      {children}
    </Component>
  );
}

/**
 * Section Wrapper - Full-width section with background support
 * Handles background color extension beyond content width
 */
interface SectionProps extends ContainerProps {
  background?: string;
  spacing?: 'none' | 'small' | 'medium' | 'large';
}

export function Section({ children, className, background, spacing = 'large', as: Component = 'section' }: SectionProps) {
  const spacingClasses = {
    none: '',
    small: 'py-12 lg:py-16',
    medium: 'py-16 lg:py-24',
    large: 'py-24 lg:py-32',
  };

  return (
    <Component className={cn('w-full relative', background, spacingClasses[spacing], className)}>
      {children}
    </Component>
  );
}

/**
 * Centered Section - Section with centered content container
 * Most common pattern: full-width background + centered content
 */
export function CenteredSection({ children, className, background, spacing = 'large' }: SectionProps) {
  return (
    <Section background={background} spacing={spacing} className={className}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Section>
  );
}

/**
 * Column Span Component
 * For use within GridContainer
 */
interface ColumnProps extends ContainerProps {
  span?: number; // 1-12 for desktop
  mobileSpan?: number; // 1-4 for mobile
}

export function Column({ children, className, span = 12, mobileSpan = 4, as: Component = 'div' }: ColumnProps) {
  const spanClass = `col-span-${mobileSpan} lg:col-span-${span}`;
  
  return (
    <Component className={cn(spanClass, className)}>
      {children}
    </Component>
  );
}
