// Shared types for icon components

/**
 * Standard icon sizes used across the icon system.
 * Maps to pixel values in sizeMap.
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Pixel sizes for each IconSize value.
 * xs=16, sm=20, md=24, lg=32, xl=48
 */
export const sizeMap: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
};
