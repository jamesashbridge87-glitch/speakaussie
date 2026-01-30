import { useEffect, useState } from 'react';
import {
  DuotoneIcon,
  Sparkles,
  Flame,
  Star,
  Crown,
  colorSchemes,
} from './icons';
import { Rocket } from 'lucide-react';
import './CelebrationToast.css';

// Map celebration icons to Lucide components
const celebrationIconMap: Record<string, React.ReactNode> = {
  '🎉': <DuotoneIcon icon={Sparkles} size="xl" colorScheme={colorSchemes.socialCulture} />,
  '🔥': <DuotoneIcon icon={Flame} size="xl" colorScheme={colorSchemes.stats} />,
  '⭐': <DuotoneIcon icon={Star} size="xl" colorScheme={colorSchemes.stats} />,
  '🚀': <DuotoneIcon icon={Rocket} size="xl" colorScheme={colorSchemes.careerGrowth} />,
  '👑': <DuotoneIcon icon={Crown} size="xl" colorScheme={colorSchemes.stats} />,
};

const getCelebrationIcon = (emoji: string) => {
  return celebrationIconMap[emoji] || <span style={{ fontSize: 48 }}>{emoji}</span>;
};

export interface CelebrationData {
  id: string;
  type: 'first-session' | 'streak' | 'milestone' | 'level-up' | 'phase-complete';
  title: string;
  message: string;
  icon: string;
}

interface CelebrationToastProps {
  celebration: CelebrationData | null;
  onDismiss: () => void;
  autoDismissMs?: number;
}

export function CelebrationToast({
  celebration,
  onDismiss,
  autoDismissMs = 5000,
}: CelebrationToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (celebration) {
      setIsVisible(true);
      setIsLeaving(false);

      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(() => {
          setIsVisible(false);
          onDismiss();
        }, 300);
      }, autoDismissMs);

      return () => clearTimeout(timer);
    }
  }, [celebration, autoDismissMs, onDismiss]);

  if (!celebration || !isVisible) return null;

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      onDismiss();
    }, 300);
  };

  return (
    <div className={`celebration-toast ${isLeaving ? 'leaving' : ''}`}>
      <div className="celebration-confetti" />
      <button className="celebration-close" onClick={handleDismiss}>
        &times;
      </button>
      <div className="celebration-icon">{getCelebrationIcon(celebration.icon)}</div>
      <h3 className="celebration-title">{celebration.title}</h3>
      <p className="celebration-message">{celebration.message}</p>
    </div>
  );
}

// Pre-defined celebration messages
export const CELEBRATIONS = {
  firstSession: (): CelebrationData => ({
    id: 'first-session',
    type: 'first-session',
    title: 'First Session Complete!',
    message: "You did it! You've taken the first step on your confidence journey. Come back tomorrow to keep the momentum going!",
    icon: '🎉',
  }),

  streakMilestone: (days: number): CelebrationData => ({
    id: `streak-${days}`,
    type: 'streak',
    title: `${days}-Day Streak!`,
    message: `Amazing consistency! You've practiced ${days} days in a row. You're building a powerful habit!`,
    icon: '🔥',
  }),

  sessionMilestone: (count: number): CelebrationData => ({
    id: `sessions-${count}`,
    type: 'milestone',
    title: `${count} Sessions!`,
    message: `You've completed ${count} practice sessions. Your dedication is paying off!`,
    icon: '⭐',
  }),

  levelUp: (newLevel: string): CelebrationData => ({
    id: `level-${newLevel}`,
    type: 'level-up',
    title: 'Level Up!',
    message: `You've reached "${newLevel}"! Your confidence is growing stronger every day.`,
    icon: '🚀',
  }),

  phaseComplete: (phaseName: string, nextPhaseName: string): CelebrationData => ({
    id: `phase-${phaseName}`,
    type: 'phase-complete',
    title: `${phaseName} Complete!`,
    message: `You've completed the ${phaseName} phase. Next up: ${nextPhaseName}!`,
    icon: '👑',
  }),
};

// Hook to manage celebrations
export function useCelebrations() {
  const [currentCelebration, setCurrentCelebration] = useState<CelebrationData | null>(null);
  const [celebrationQueue, setCelebrationQueue] = useState<CelebrationData[]>([]);

  const showCelebration = (celebration: CelebrationData) => {
    if (currentCelebration) {
      setCelebrationQueue(prev => [...prev, celebration]);
    } else {
      setCurrentCelebration(celebration);
    }
  };

  const dismissCelebration = () => {
    if (celebrationQueue.length > 0) {
      const [next, ...rest] = celebrationQueue;
      setCurrentCelebration(next);
      setCelebrationQueue(rest);
    } else {
      setCurrentCelebration(null);
    }
  };

  return {
    currentCelebration,
    showCelebration,
    dismissCelebration,
  };
}
