import { useState, useEffect, ReactNode } from 'react';
import { useGamification } from '../hooks/useGamification';
import { DuotoneIcon, Flame, Star, Sparkles, colorSchemes } from './icons';
import { Dumbbell, AlertTriangle, RefreshCw, Rocket, X } from 'lucide-react';
import './StreakReminder.css';

interface StreakReminderProps {
  variant?: 'banner' | 'toast';
  onDismiss?: () => void;
}

export function StreakReminder({ variant = 'banner', onDismiss }: StreakReminderProps) {
  const { streak, maxStreak } = useGamification();
  const [isVisible, setIsVisible] = useState(true);
  const [hasPracticedToday, setHasPracticedToday] = useState(false);

  useEffect(() => {
    // Check if user has practiced today by checking localStorage
    const lastActivity = localStorage.getItem('aussie_slang_gamification');
    if (lastActivity) {
      try {
        const data = JSON.parse(lastActivity);
        const today = new Date().toDateString();
        setHasPracticedToday(data.lastActivity === today);
      } catch {
        setHasPracticedToday(false);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  // Determine message and styling based on streak status
  const getStreakContent = (): { icon: ReactNode; title: string; message: string; type: string } => {
    if (hasPracticedToday) {
      // User has already practiced today - show encouragement
      if (streak >= 7) {
        return {
          icon: <DuotoneIcon icon={Flame} size="md" colorScheme={colorSchemes.stats} />,
          title: `${streak} day streak!`,
          message: "You're on fire! Keep it up tomorrow!",
          type: 'success',
        };
      } else if (streak >= 3) {
        return {
          icon: <DuotoneIcon icon={Dumbbell} size="md" colorScheme={colorSchemes.careerGrowth} />,
          title: `${streak} day streak!`,
          message: 'Great progress! See you tomorrow!',
          type: 'success',
        };
      } else if (streak > 0) {
        return {
          icon: <DuotoneIcon icon={Star} size="md" colorScheme={colorSchemes.stats} />,
          title: 'Nice work today!',
          message: `${streak} day streak - building momentum!`,
          type: 'success',
        };
      } else {
        return {
          icon: <DuotoneIcon icon={Sparkles} size="md" colorScheme={colorSchemes.socialCulture} />,
          title: 'Great start!',
          message: 'Come back tomorrow to start a streak!',
          type: 'neutral',
        };
      }
    } else {
      // User hasn't practiced today - show reminder/warning
      if (streak > 0) {
        return {
          icon: <DuotoneIcon icon={AlertTriangle} size="md" colorScheme={colorSchemes.stats} />,
          title: `Don't lose your ${streak} day streak!`,
          message: 'Practice now to keep it going!',
          type: 'warning',
        };
      } else if (maxStreak > 0) {
        return {
          icon: <DuotoneIcon icon={RefreshCw} size="md" colorScheme={colorSchemes.careerGrowth} />,
          title: 'Start a new streak!',
          message: `Your best was ${maxStreak} days. Beat it!`,
          type: 'neutral',
        };
      } else {
        return {
          icon: <DuotoneIcon icon={Rocket} size="md" colorScheme={colorSchemes.careerGrowth} />,
          title: "Let's get started!",
          message: 'Practice daily to build your streak!',
          type: 'neutral',
        };
      }
    }
  };

  const content = getStreakContent();

  if (variant === 'toast') {
    return (
      <div className={`streak-toast ${content.type}`} role="status" aria-live="polite">
        <span className="streak-toast-icon">{content.icon}</span>
        <div className="streak-toast-content">
          <strong>{content.title}</strong>
          <p>{content.message}</p>
        </div>
        <button className="streak-toast-dismiss" onClick={handleDismiss} aria-label="Dismiss">
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className={`streak-banner ${content.type}`} role="status" aria-live="polite">
      <span className="streak-banner-icon">{content.icon}</span>
      <div className="streak-banner-content">
        <strong>{content.title}</strong>
        <span className="streak-banner-message">{content.message}</span>
      </div>
      {streak > 0 && (
        <div className="streak-counter">
          <span className="streak-number">{streak}</span>
          <span className="streak-label">days</span>
        </div>
      )}
      <button className="streak-banner-dismiss" onClick={handleDismiss} aria-label="Dismiss">
        <X size={16} />
      </button>
    </div>
  );
}

export default StreakReminder;
