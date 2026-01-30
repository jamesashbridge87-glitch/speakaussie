import { memo } from 'react';

interface Achievement {
  id: string;
  name: string;
  desc: string;
  icon: string;
  unlocked?: boolean;
}

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
        {isUnlocked ? String.fromCodePoint(parseInt(achievement.icon, 16)) : '\u{1f512}'}
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
        {String.fromCodePoint(parseInt(achievement.icon, 16))}
      </span>
      <span className="achievement-name">{achievement.name}</span>
    </div>
  );
});
