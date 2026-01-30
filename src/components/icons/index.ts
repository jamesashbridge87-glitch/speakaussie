// Icon System Exports

// Duotone SVG icons (Lucide)
export {
  DuotoneIcon,
  StatsIcon,
  UIIcon,
  SocialIcon,
  CareerIcon,
  IndustryIcon,
  DailyIcon
} from './DuotoneIcon';

// Custom AI-generated icons
export { CustomIcon, CategoryIcon } from './CustomIcon';

// Color utilities
export {
  colors,
  colorSchemes,
  categoryColorMap,
  getColorScheme
} from './iconColors';

export type { IconColorScheme } from './iconColors';
export type { IconSize } from './types';
export { sizeMap } from './types';

// Re-export commonly used Lucide icons for convenience.
// Bundle analysis (2026-01-31): Tree-shaking works correctly - only used icons are bundled.
// Icon SVG data contributes ~12KB to the 771KB bundle (~1.5%).
// Icons here are re-exported for consistent import paths; unused icons are tree-shaken out.
export {
  // Gamification & achievements
  Flame,
  Star,
  Trophy,
  Crown,
  Medal,
  Sparkles,
  // UI & navigation
  ArrowLeft,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
  Play,
  Square,
  Search,
  AlertTriangle,
  RefreshCw,
  Loader2,
  // Progress & stats
  Target,
  TrendingUp,
  Timer,
  Calendar,
  BarChart3,
  Dumbbell,
  // Communication
  MessageCircle,
  MessageSquare,
  Mic,
  Phone,
  // Categories & scenarios
  Home,
  Briefcase,
  Building,
  GraduationCap,
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Plane,
  Globe,
  BookOpen,
  // User & social
  Users,
  Smile,
  Frown,
  // Features
  Lock,
  Heart,
  Volume2,
  HelpCircle,
  ThumbsUp,
  Repeat,
  Lightbulb,
  FileText,
  Laptop,
  Hand,
  Zap,
  Printer,
  Bug,
  Theater,
  Rocket,
  ClipboardList,
} from 'lucide-react';
