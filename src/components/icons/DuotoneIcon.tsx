import { LucideIcon } from 'lucide-react';
import { IconColorScheme, colorSchemes } from './iconColors';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
};

interface DuotoneIconProps {
  icon: LucideIcon;
  size?: IconSize;
  colorScheme?: IconColorScheme;
  className?: string;
  style?: React.CSSProperties;
}

export function DuotoneIcon({
  icon: Icon,
  size = 'md',
  colorScheme = colorSchemes.ui,
  className = '',
  style = {},
}: DuotoneIconProps) {
  const pixelSize = sizeMap[size];

  return (
    <Icon
      size={pixelSize}
      color={colorScheme.primary}
      className={`duotone-icon ${className}`}
      style={{
        flexShrink: 0,
        ...style,
      }}
      strokeWidth={2}
    />
  );
}

// Pre-configured icon components for common use cases
export function StatsIcon({ icon, size = 'md' }: { icon: LucideIcon; size?: IconSize }) {
  return <DuotoneIcon icon={icon} size={size} colorScheme={colorSchemes.stats} />;
}

export function UIIcon({ icon, size = 'md' }: { icon: LucideIcon; size?: IconSize }) {
  return <DuotoneIcon icon={icon} size={size} colorScheme={colorSchemes.ui} />;
}

export function SocialIcon({ icon, size = 'md' }: { icon: LucideIcon; size?: IconSize }) {
  return <DuotoneIcon icon={icon} size={size} colorScheme={colorSchemes.socialCulture} />;
}

export function CareerIcon({ icon, size = 'md' }: { icon: LucideIcon; size?: IconSize }) {
  return <DuotoneIcon icon={icon} size={size} colorScheme={colorSchemes.careerGrowth} />;
}

export function IndustryIcon({ icon, size = 'md' }: { icon: LucideIcon; size?: IconSize }) {
  return <DuotoneIcon icon={icon} size={size} colorScheme={colorSchemes.industry} />;
}

export function DailyIcon({ icon, size = 'md' }: { icon: LucideIcon; size?: IconSize }) {
  return <DuotoneIcon icon={icon} size={size} colorScheme={colorSchemes.dailyWork} />;
}
