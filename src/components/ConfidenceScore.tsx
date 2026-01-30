import { ConfidenceScoreData, LEVEL_LABELS, Milestone } from '../hooks/useConfidenceScore';
import { Icon } from './Icon';
import './ConfidenceScore.css';

interface ConfidenceScoreProps {
  data: ConfidenceScoreData;
  compact?: boolean;
}

export function ConfidenceScore({ data, compact = false }: ConfidenceScoreProps) {
  const { overall, breakdown, level, levelProgress, weeklyChange, encouragement } = data;

  if (compact) {
    return (
      <div className="confidence-score-compact">
        <div className="score-ring-compact">
          <svg viewBox="0 0 100 100" className="score-svg">
            <circle
              className="score-bg"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              className="score-fill"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${overall * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <text x="50" y="50" textAnchor="middle" dominantBaseline="central" className="score-text">
              {overall}
            </text>
          </svg>
        </div>
        <div className="compact-details">
          <span className="compact-label">Confidence</span>
          <span className="compact-level">{LEVEL_LABELS[level]}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="confidence-score">
      <div className="score-header">
        <h3>Your Confidence Score</h3>
        {weeklyChange > 0 && (
          <span className="weekly-change positive">+{weeklyChange} this week</span>
        )}
      </div>

      <div className="score-main">
        <div className="score-ring">
          <svg viewBox="0 0 100 100" className="score-svg">
            <circle
              className="score-bg"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
            />
            <circle
              className="score-fill"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#scoreGradientFull)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${overall * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient id="scoreGradientFull" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <text x="50" y="45" textAnchor="middle" className="score-number">
              {overall}
            </text>
            <text x="50" y="62" textAnchor="middle" className="score-label">
              / 100
            </text>
          </svg>
        </div>

        <div className="level-info">
          <div className="level-badge" data-level={level}>
            {LEVEL_LABELS[level]}
          </div>
          <div className="level-progress">
            <div className="level-progress-bar">
              <div
                className="level-progress-fill"
                style={{ width: `${Math.min(levelProgress, 100)}%` }}
              />
            </div>
            <span className="level-progress-text">
              {Math.round(levelProgress)}% to next level
            </span>
          </div>
        </div>
      </div>

      <div className="encouragement">
        <p>{encouragement}</p>
      </div>

      <div className="breakdown">
        <h4>Score Breakdown</h4>
        <div className="breakdown-items">
          <BreakdownItem
            label="Consistency"
            value={breakdown.consistency}
            max={30}
            icon="🔥"
            description="Based on your streak and weekly activity"
          />
          <BreakdownItem
            label="Experience"
            value={breakdown.experience}
            max={30}
            icon="📚"
            description="Based on total sessions and practice time"
          />
          <BreakdownItem
            label="Variety"
            value={breakdown.variety}
            max={20}
            icon="🎯"
            description="Based on practicing different categories"
          />
          <BreakdownItem
            label="Growth"
            value={breakdown.growth}
            max={20}
            icon="📈"
            description="Based on your improvement trend"
          />
        </div>
      </div>
    </div>
  );
}

interface BreakdownItemProps {
  label: string;
  value: number;
  max: number;
  icon: string;
  description: string;
}

function BreakdownItem({ label, value, max, icon, description }: BreakdownItemProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="breakdown-item">
      <div className="breakdown-header">
        <span className="breakdown-icon"><Icon emoji={icon} size="sm" /></span>
        <span className="breakdown-label">{label}</span>
        <span className="breakdown-value">{value}/{max}</span>
      </div>
      <div className="breakdown-bar">
        <div className="breakdown-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="breakdown-description">{description}</span>
    </div>
  );
}

interface MilestoneDisplayProps {
  milestones: Milestone[];
  nextMilestone: Milestone | null;
}

export function MilestoneDisplay({ milestones, nextMilestone }: MilestoneDisplayProps) {
  const achievedMilestones = milestones.filter(m => m.achieved);
  const recentAchievements = achievedMilestones.slice(-3);

  return (
    <div className="milestone-display">
      <h4>Milestones</h4>

      {nextMilestone && (
        <div className="next-milestone">
          <span className="next-milestone-label">Next up:</span>
          <div className="next-milestone-card">
            <span className="milestone-icon"><Icon emoji={nextMilestone.icon} size="lg" /></span>
            <div className="milestone-info">
              <span className="milestone-title">{nextMilestone.title}</span>
              <span className="milestone-description">{nextMilestone.description}</span>
              <div className="milestone-progress">
                <div className="milestone-progress-bar">
                  <div
                    className="milestone-progress-fill"
                    style={{ width: `${(nextMilestone.current / nextMilestone.requirement) * 100}%` }}
                  />
                </div>
                <span className="milestone-progress-text">
                  {nextMilestone.current} / {nextMilestone.requirement}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {recentAchievements.length > 0 && (
        <div className="achieved-milestones">
          <span className="achieved-label">Recent achievements:</span>
          <div className="achieved-grid">
            {recentAchievements.map(milestone => (
              <div key={milestone.id} className="achieved-milestone">
                <span className="milestone-icon"><Icon emoji={milestone.icon} size="md" /></span>
                <span className="milestone-title">{milestone.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="milestone-count">
        {achievedMilestones.length} of {milestones.length} milestones achieved
      </div>
    </div>
  );
}
