import { useState, useEffect } from 'react';
import { useGamification } from '../hooks/useGamification';
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
  const getStreakContent = () => {
    if (hasPracticedToday) {
      // User has already practiced today - show encouragement
      if (streak >= 7) {
        return {
          icon: '&#x1f525;',
          title: `${streak} day streak!`,
          message: "You're on fire! Keep it up tomorrow!",
          type: 'success',
        };
      } else if (streak >= 3) {
        return {
          icon: '&#x1f4aa;',
          title: `${streak} day streak!`,
          message: 'Great progress! See you tomorrow!',
          type: 'success',
        };
      } else if (streak > 0) {
        return {
          icon: '&#x2b50;',
          title: 'Nice work today!',
          message: `${streak} day streak - building momentum!`,
          type: 'success',
        };
      } else {
        return {
          icon: '&#x1f389;',
          title: 'Great start!',
          message: 'Come back tomorrow to start a streak!',
          type: 'neutral',
        };
      }
    } else {
      // User hasn't practiced today - show reminder/warning
      if (streak > 0) {
        return {
          icon: '&#x26a0;',
          title: `Don't lose your ${streak} day streak!`,
          message: 'Practice now to keep it going!',
          type: 'warning',
        };
      } else if (maxStreak > 0) {
        return {
          icon: '&#x1f504;',
          title: 'Start a new streak!',
          message: `Your best was ${maxStreak} days. Beat it!`,
          type: 'neutral',
        };
      } else {
        return {
          icon: '&#x1f680;',
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
      <div className={`streak-toast ${content.type}`}>
        <span className="streak-toast-icon" dangerouslySetInnerHTML={{ __html: content.icon }} />
        <div className="streak-toast-content">
          <strong>{content.title}</strong>
          <p>{content.message}</p>
        </div>
        <button className="streak-toast-dismiss" onClick={handleDismiss} aria-label="Dismiss">
          &#x2715;
        </button>
      </div>
    );
  }

  return (
    <div className={`streak-banner ${content.type}`}>
      <span className="streak-banner-icon" dangerouslySetInnerHTML={{ __html: content.icon }} />
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
        &#x2715;
      </button>
    </div>
  );
}

export default StreakReminder;
