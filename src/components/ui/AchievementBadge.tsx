import { memo, ReactNode } from 'react';
import {
  DuotoneIcon,
  GraduationCap,
  BookOpen,
  Star,
  Flame,
  Crown,
  Trophy,
  Heart,
  Mic,
  Lock,
  colorSchemes,
} from '../icons';
import {
  Spade,
  Check,
  Award,
  Target,
  Dumbbell,
  Calendar,
  PenTool,
  Puzzle,
} from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  desc: string;
  icon: string;
  unlocked?: boolean;
}

// Map achievement hex codes to DuotoneIcon components
const achievementIconMap: Record<string, ReactNode> = {
  '1f0cf': <DuotoneIcon icon={Spade} size="md" colorScheme={colorSchemes.socialCulture} />,     // Playing card
  '1f4da': <DuotoneIcon icon={BookOpen} size="md" colorScheme={colorSchemes.careerGrowth} />,   // Books
  '1f4d6': <DuotoneIcon icon={BookOpen} size="md" colorScheme={colorSchemes.careerGrowth} />,   // Open book
  '1f393': <DuotoneIcon icon={GraduationCap} size="md" colorScheme={colorSchemes.careerGrowth} />, // Graduation cap
  '2705': <DuotoneIcon icon={Check} size="md" colorScheme={colorSchemes.careerGrowth} />,       // Check mark
  '1f3c5': <DuotoneIcon icon={Award} size="md" colorScheme={colorSchemes.stats} />,             // Medal
  '1f4af': <DuotoneIcon icon={Target} size="md" colorScheme={colorSchemes.stats} />,            // 100
  '1f31f': <DuotoneIcon icon={Star} size="md" colorScheme={colorSchemes.stats} />,              // Glowing star
  '1f525': <DuotoneIcon icon={Flame} size="md" colorScheme={colorSchemes.stats} />,             // Fire
  '1f4aa': <DuotoneIcon icon={Dumbbell} size="md" colorScheme={colorSchemes.careerGrowth} />,   // Flexed biceps
  '1f451': <DuotoneIcon icon={Crown} size="md" colorScheme={colorSchemes.stats} />,             // Crown
  '2b50': <DuotoneIcon icon={Star} size="md" colorScheme={colorSchemes.stats} />,               // Star
  '1f3c6': <DuotoneIcon icon={Trophy} size="md" colorScheme={colorSchemes.stats} />,            // Trophy
  '2764': <DuotoneIcon icon={Heart} size="md" colorScheme={colorSchemes.socialCulture} />,      // Heart
  '1f4c5': <DuotoneIcon icon={Calendar} size="md" colorScheme={colorSchemes.dailyWork} />,      // Calendar
  '1f3a4': <DuotoneIcon icon={Mic} size="md" colorScheme={colorSchemes.socialCulture} />,       // Microphone
  '270d': <DuotoneIcon icon={PenTool} size="md" colorScheme={colorSchemes.dailyWork} />,        // Writing hand
  '1f9e9': <DuotoneIcon icon={Puzzle} size="md" colorScheme={colorSchemes.socialCulture} />,    // Puzzle piece
};

const getAchievementIcon = (hexCode: string, isLocked: boolean): ReactNode => {
  if (isLocked) {
    return <DuotoneIcon icon={Lock} size="md" colorScheme={colorSchemes.ui} />;
  }
  if (achievementIconMap[hexCode]) {
    return achievementIconMap[hexCode];
  }
  // Fallback for unmapped icons
  return <DuotoneIcon icon={Star} size="md" colorScheme={colorSchemes.stats} />;
};

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'small' | 'medium' | 'large';
}

export const AchievementBadge = memo(function AchievementBadge({
  achievement,
  size = 'medium',
}: AchievementBadgeProps) {
  const isUnlocked = achievement.unlocked ?? false;

  return (
    <div className={`achievement-badge ${isUnlocked ? 'unlocked' : 'locked'} ${size}`}>
      <span className="badge-icon">
        {getAchievementIcon(achievement.icon, !isUnlocked)}
      </span>
      <span className="badge-name">{achievement.name}</span>
      {size !== 'small' && <span className="badge-desc">{achievement.desc}</span>}
    </div>
  );
});

interface AchievementMiniProps {
  achievement: Achievement;
}

export const AchievementMini = memo(function AchievementMini({
  achievement,
}: AchievementMiniProps) {
  return (
    <div className="achievement-mini">
      <span className="achievement-icon">
        {getAchievementIcon(achievement.icon, false)}
      </span>
      <span className="achievement-name">{achievement.name}</span>
    </div>
  );
});
