import { memo, ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  progress?: number;
  progressHint?: string;
  variant?: 'conversations' | 'time' | 'slang' | 'workplace' | 'quizzes' | 'achievements';
}

export const StatCard = memo(function StatCard({
  icon,
  value,
  label,
  progress,
  progressHint,
  variant = 'conversations',
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className={`stat-icon-wrap ${variant}`}>
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-content">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
      {progress !== undefined && (
        <div className="stat-progress">
          <div className="progress-bar">
            <div
              className={`progress-fill ${variant}`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          {progressHint && <span className="progress-hint">{progressHint}</span>}
        </div>
      )}
    </div>
  );
});
