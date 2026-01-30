// Icon color definitions by category group

export const colors = {
  cyan: '#11E8F6',
  orange: '#FDA400',
  pink: '#FF65BE',
  white: '#FFFFFF',
  lime: '#D2FF42',
} as const;

export type IconColorScheme = {
  primary: string;
  secondary: string;
};

// Color schemes by group
export const colorSchemes = {
  // Career & Growth - Orange + Cyan
  careerGrowth: {
    primary: colors.orange,
    secondary: colors.cyan,
  },
  // Social & Culture - Pink + Cyan
  socialCulture: {
    primary: colors.pink,
    secondary: colors.cyan,
  },
  // Industry/Workplace - Cyan + Orange
  industry: {
    primary: colors.cyan,
    secondary: colors.orange,
  },
  // Daily Work - Cyan + White
  dailyWork: {
    primary: colors.cyan,
    secondary: colors.white,
  },
  // Stats & Gamification - Orange + White
  stats: {
    primary: colors.orange,
    secondary: colors.white,
  },
  // UI & Navigation - Cyan + White
  ui: {
    primary: colors.cyan,
    secondary: colors.white,
  },
} as const;

// Map category IDs to color schemes
export const categoryColorMap: Record<string, IconColorScheme> = {
  // Career & Growth
  'interview': colorSchemes.careerGrowth,
  'leadership': colorSchemes.careerGrowth,
  'growth': colorSchemes.careerGrowth,
  'finance': colorSchemes.careerGrowth,
  'strategic-settler': colorSchemes.careerGrowth,

  // Social & Culture
  'social': colorSchemes.socialCulture,
  'networking': colorSchemes.socialCulture,
  'humor': colorSchemes.socialCulture,
  'diverse': colorSchemes.socialCulture,
  'wellbeing': colorSchemes.socialCulture,

  // Industry/Workplace
  'healthcare': colorSchemes.industry,
  'tech': colorSchemes.industry,
  'construction': colorSchemes.industry,
  'education': colorSchemes.industry,
  'hospitality': colorSchemes.industry,
  'admin': colorSchemes.industry,

  // Daily Work
  'day-to-day': colorSchemes.dailyWork,
  'meetings': colorSchemes.dailyWork,
  'phone-video': colorSchemes.dailyWork,
  'first-weeks': colorSchemes.dailyWork,
  'pre-arrival': colorSchemes.dailyWork,
};

// Get color scheme for a category
export function getColorScheme(category: string): IconColorScheme {
  return categoryColorMap[category] || colorSchemes.ui;
}
