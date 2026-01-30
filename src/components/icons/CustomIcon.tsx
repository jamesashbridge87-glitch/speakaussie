import { useState } from 'react';
import { Folder } from 'lucide-react';
import { IconSize, sizeMap } from './types';

interface CustomIconProps {
  name: string;
  size?: IconSize;
  folder?: 'categories' | 'culture';
  className?: string;
  style?: React.CSSProperties;
  fallback?: string; // Emoji fallback if icon doesn't load
}

export function CustomIcon({
  name,
  size = 'md',
  folder = 'categories',
  className = '',
  style = {},
  fallback,
}: CustomIconProps) {
  const [hasError, setHasError] = useState(false);
  const pixelSize = sizeMap[size];
  const iconPath = `/icons/${folder}/${name}.png`;

  if (hasError && fallback) {
    return (
      <span
        className={`custom-icon-fallback ${className}`}
        style={{
          fontSize: pixelSize,
          lineHeight: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: pixelSize,
          height: pixelSize,
          ...style,
        }}
      >
        {fallback}
      </span>
    );
  }

  return (
    <img
      src={iconPath}
      alt={name}
      width={pixelSize}
      height={pixelSize}
      className={`custom-icon ${className}`}
      style={{
        flexShrink: 0,
        objectFit: 'contain',
        ...style,
      }}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

// Category-specific icon component
interface CategoryIconProps {
  category: string;
  size?: IconSize;
  className?: string;
}

export function CategoryIcon({ category, size = 'md', className }: CategoryIconProps) {
  // Map category IDs to icon names and fallbacks
  const iconMap: Record<string, { name: string; fallback: string }> = {
    // Career & Growth
    'interview': { name: 'interview', fallback: '🎯' },
    'leadership': { name: 'leadership', fallback: '👔' },
    'growth': { name: 'growth', fallback: '📈' },
    'finance': { name: 'finance', fallback: '💼' },
    'strategic-settler': { name: 'strategic-settler', fallback: '🎯' },

    // Social & Culture
    'social': { name: 'social', fallback: '🎉' },
    'networking': { name: 'networking', fallback: '🤝' },
    'humor': { name: 'humor', fallback: '😄' },
    'diverse': { name: 'diverse', fallback: '🌏' },
    'wellbeing': { name: 'wellbeing', fallback: '💚' },

    // Industry/Workplace
    'healthcare': { name: 'healthcare', fallback: '🏥' },
    'tech': { name: 'tech', fallback: '💻' },
    'construction': { name: 'construction', fallback: '🔨' },
    'education': { name: 'education', fallback: '📚' },
    'hospitality': { name: 'hospitality', fallback: '🛎️' },
    'admin': { name: 'admin', fallback: '📋' },

    // Daily Work
    'day-to-day': { name: 'day-to-day', fallback: '💼' },
    'meetings': { name: 'meetings', fallback: '📊' },
    'phone-video': { name: 'phone-video', fallback: '📱' },
    'first-weeks': { name: 'first-weeks', fallback: '🚀' },
    'pre-arrival': { name: 'pre-arrival', fallback: '✈️' },
  };

  const icon = iconMap[category];

  if (!icon) {
    const pixelSize = sizeMap[size];
    return <Folder size={pixelSize} />;
  }

  return (
    <CustomIcon
      name={icon.name}
      size={size}
      folder="categories"
      fallback={icon.fallback}
      className={className}
    />
  );
}
