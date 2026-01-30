// Icon color definitions by category group

export const colors = {
  cyan: '#11E8F6',
  orange: '#FDA400',
  pink: '#FF65BE',
  white: '#FFFFFF',
  lime: '#D2FF42',
} as const;

// Note: Originally designed for "duotone" icons with primary/secondary colors,
// but Lucide icons only support a single color. Keeping simple single-color API.
export type IconColorScheme = {
  primary: string;
};

// Color schemes by group
export const colorSchemes = {
  // Career & Growth - Orange
  careerGrowth: {
    primary: colors.orange,
  },
  // Social & Culture - Pink
  socialCulture: {
    primary: colors.pink,
  },
  // Industry/Workplace - Cyan
  industry: {
    primary: colors.cyan,
  },
  // Daily Work - Cyan
  dailyWork: {
    primary: colors.cyan,
  },
  // Stats & Gamification - Orange
  stats: {
    primary: colors.orange,
  },
  // UI & Navigation - Cyan
  ui: {
    primary: colors.cyan,
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
