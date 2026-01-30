import { Achievement } from '../hooks/useAchievements';
import {
  DuotoneIcon,
  Lock,
  Target,
  Flame,
  Trophy,
  MessageSquare,
  Timer,
  Home,
  Briefcase,
  Star,
  Mic,
  Calendar,
  colorSchemes,
} from './icons';
import { Zap, Clock } from 'lucide-react';
import './AchievementDisplay.css';

// Map achievement emoji icons to DuotoneIcon components
const getAchievementIcon = (emoji: string, isLocked: boolean, size: 'md' | 'lg' = 'lg') => {
  if (isLocked) {
    return <DuotoneIcon icon={Lock} size={size} colorScheme={colorSchemes.ui} />;
  }

  const iconMap: Record<string, React.ReactNode> = {
    '🎯': <DuotoneIcon icon={Target} size={size} colorScheme={colorSchemes.careerGrowth} />,
    '🔥': <DuotoneIcon icon={Flame} size={size} colorScheme={colorSchemes.stats} />,
    '⚡': <DuotoneIcon icon={Zap} size={size} colorScheme={colorSchemes.stats} />,
    '🏆': <DuotoneIcon icon={Trophy} size={size} colorScheme={colorSchemes.stats} />,
    '💬': <DuotoneIcon icon={MessageSquare} size={size} colorScheme={colorSchemes.industry} />,
    '🗣️': <DuotoneIcon icon={MessageSquare} size={size} colorScheme={colorSchemes.socialCulture} />,
    '💯': <DuotoneIcon icon={Target} size={size} colorScheme={colorSchemes.stats} />,
    '⏱️': <DuotoneIcon icon={Timer} size={size} colorScheme={colorSchemes.dailyWork} />,
    '⌛': <DuotoneIcon icon={Timer} size={size} colorScheme={colorSchemes.dailyWork} />,
    '🕐': <DuotoneIcon icon={Clock} size={size} colorScheme={colorSchemes.dailyWork} />,
    '🏠': <DuotoneIcon icon={Home} size={size} colorScheme={colorSchemes.dailyWork} />,
    '💼': <DuotoneIcon icon={Briefcase} size={size} colorScheme={colorSchemes.careerGrowth} />,
    '🌟': <DuotoneIcon icon={Star} size={size} colorScheme={colorSchemes.stats} />,
    '🎙️': <DuotoneIcon icon={Mic} size={size} colorScheme={colorSchemes.socialCulture} />,
    '📅': <DuotoneIcon icon={Calendar} size={size} colorScheme={colorSchemes.dailyWork} />,
    '🦘': <span style={{ fontSize: size === 'md' ? 24 : 32 }}>🦘</span>, // Keep kangaroo as emoji (no Lucide equivalent)
  };

  return iconMap[emoji] || <DuotoneIcon icon={Star} size={size} colorScheme={colorSchemes.stats} />;
};

export interface AchievementWithProgress {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'streak' | 'sessions' | 'time' | 'modes' | 'special';
  unlocked: boolean;
  unlockedAt?: Date;
  progress?: { current: number; target: number };
}

interface AchievementDisplayProps {
  achievements: AchievementWithProgress[];
}

interface AchievementToastProps {
  achievements: Achievement[];
  onDismiss: () => void;
}

const categoryLabels: Record<string, string> = {
  streak: 'Streak',
  sessions: 'Sessions',
  time: 'Practice Time',
  modes: 'Practice Modes',
  special: 'Special',
};

export function AchievementDisplay({ achievements }: AchievementDisplayProps) {
  const categories = ['streak', 'sessions', 'time', 'modes', 'special'];
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="achievement-display">
      <div className="achievement-header">
        <h3>Achievements</h3>
        <span className="achievement-count">
          {unlockedCount} / {achievements.length} unlocked
        </span>
      </div>

      {categories.map(category => {
        const categoryAchievements = achievements.filter(a => a.category === category);
        if (categoryAchievements.length === 0) return null;

        return (
          <div key={category} className="achievement-category">
            <h4>{categoryLabels[category]}</h4>
            <div className="achievement-grid">
              {categoryAchievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                >
                  <div className="achievement-icon">
                    {getAchievementIcon(achievement.icon, !achievement.unlocked, 'lg')}
                  </div>
                  <div className="achievement-info">
                    <span className="achievement-title">{achievement.title}</span>
                    <span className="achievement-description">{achievement.description}</span>
                    {!achievement.unlocked && achievement.progress && (
                      <div className="achievement-progress">
                        <div className="achievement-progress-bar">
                          <div
                            className="achievement-progress-fill"
                            style={{
                              width: `${(achievement.progress.current / achievement.progress.target) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="achievement-progress-text">
                          {formatProgress(achievement.progress.current, achievement.progress.target, achievement.category)}
                        </span>
                      </div>
                    )}
                    {achievement.unlocked && achievement.unlockedAt && (
                      <span className="achievement-date">
                        Unlocked {formatDate(achievement.unlockedAt)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AchievementToast({ achievements, onDismiss }: AchievementToastProps) {
  if (achievements.length === 0) return null;

  return (
    <div className="achievement-toast-overlay" onClick={onDismiss}>
      <div className="achievement-toast" onClick={e => e.stopPropagation()}>
        <div className="toast-header">
          <span className="toast-title">
            {achievements.length === 1 ? 'Achievement Unlocked!' : `${achievements.length} Achievements Unlocked!`}
          </span>
        </div>
        <div className="toast-achievements">
          {achievements.map(achievement => (
            <div key={achievement.id} className="toast-achievement">
              <span className="toast-icon">{getAchievementIcon(achievement.icon, false, 'lg')}</span>
              <div className="toast-info">
                <span className="toast-achievement-title">{achievement.title}</span>
                <span className="toast-achievement-desc">{achievement.description}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="toast-dismiss" onClick={onDismiss}>
          Awesome!
        </button>
      </div>
    </div>
  );
}

function formatProgress(current: number, target: number, category: string): string {
  if (category === 'time') {
    const formatTime = (seconds: number) => {
      if (seconds < 60) return `${seconds}s`;
      if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
      return `${(seconds / 3600).toFixed(1)}h`;
    };
    return `${formatTime(current)} / ${formatTime(target)}`;
  }
  return `${current} / ${target}`;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
}
