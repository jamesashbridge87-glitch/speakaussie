import { useNavigate } from 'react-router-dom';
import { useGamification } from '../hooks/useGamification';
import { useProgressTracking } from '../hooks/useProgressTracking';
import { useWorkplaceProgress } from '../hooks/useWorkplaceProgress';
import { useSlangProgress } from '../hooks/useSlangProgress';
import './UnifiedDashboard.css';

export function UnifiedDashboard() {
  const navigate = useNavigate();

  // Gamification stats
  const {
    xp,
    level,
    streak,
    maxStreak,
    cardsViewed,
    quizzesCompleted,
    getXPProgress,
    getUnlockedAchievements,
    getAllAchievements,
  } = useGamification();

  // Progress tracking stats
  const { getStats } = useProgressTracking();

  // Workplace progress
  const { getOverallProgress: getWorkplaceOverall } = useWorkplaceProgress();

  // Slang progress
  const { getLearnedCount, getMasteredCount } = useSlangProgress();

  const xpProgress = getXPProgress();
  const progressStats = getStats();
  const workplaceProgress = getWorkplaceOverall();
  const slangLearned = getLearnedCount();
  const slangMastered = getMasteredCount();
  const unlockedAchievements = getUnlockedAchievements();
  const allAchievements = getAllAchievements();

  // Format time display
  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    if (mins < 60) return `${mins}m`;
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
  };

  return (
    <div className="unified-dashboard">
      <header className="dashboard-header">
        <button className="back-btn" onClick={() => navigate('/app')}>
          ← Back to Main
        </button>
        <div className="header-brand">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Your Aussie Uncle"
            className="header-logo"
          />
          <h1>SpeakAussie</h1>
        </div>
        <p className="header-subtitle">Your Progress Dashboard</p>
      </header>

      <main className="dashboard-main">
        {/* Level & XP Section */}
        <section className="dashboard-section level-section">
          <div className="level-display">
            <div className="level-badge">
              <span className="level-icon">&#x1f3c6;</span>
              <span className="level-number">{level}</span>
            </div>
            <div className="level-info">
              <h2>Level {level}</h2>
              <div className="xp-bar-container">
                <div className="xp-bar">
                  <div
                    className="xp-fill"
                    style={{ width: `${Math.min(xpProgress.percentage, 100)}%` }}
                  ></div>
                </div>
                <span className="xp-text">
                  {xpProgress.progress} / {xpProgress.needed} XP to Level {level + 1}
                </span>
              </div>
            </div>
          </div>
          <div className="total-xp">
            <span className="xp-icon">&#x2b50;</span>
            <span className="xp-value">{xp}</span>
            <span className="xp-label">Total XP</span>
          </div>
        </section>

        {/* Streak Section */}
        <section className="dashboard-section streak-section">
          <div className="streak-card current">
            <span className="streak-icon">&#x1f525;</span>
            <div className="streak-info">
              <span className="streak-value">{streak}</span>
              <span className="streak-label">Day Streak</span>
            </div>
          </div>
          <div className="streak-card best">
            <span className="streak-icon">&#x1f4aa;</span>
            <div className="streak-info">
              <span className="streak-value">{maxStreak}</span>
              <span className="streak-label">Best Streak</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="dashboard-section stats-grid">
          {/* Conversation Sessions */}
          <div className="stat-card">
            <div className="stat-icon-wrap conversations">
              <span className="stat-icon">&#x1f4ac;</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{progressStats.totalSessions}</span>
              <span className="stat-label">Conversations</span>
            </div>
            <div className="stat-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill conversations"
                  style={{ width: `${Math.min((progressStats.totalSessions / 50) * 100, 100)}%` }}
                ></div>
              </div>
              <span className="progress-hint">{progressStats.sessionsThisWeek} this week</span>
            </div>
          </div>

          {/* Practice Time */}
          <div className="stat-card">
            <div className="stat-icon-wrap time">
              <span className="stat-icon">&#x23f1;</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{formatTime(progressStats.totalPracticeTime)}</span>
              <span className="stat-label">Practice Time</span>
            </div>
            <div className="stat-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill time"
                  style={{ width: `${Math.min((progressStats.totalPracticeTime / 3600) * 100, 100)}%` }}
                ></div>
              </div>
              <span className="progress-hint">{formatTime(progressStats.practiceTimeThisWeek)} this week</span>
            </div>
          </div>

          {/* Slang Terms */}
          <div className="stat-card">
            <div className="stat-icon-wrap slang">
              <span className="stat-icon">&#x1f4da;</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{slangMastered}</span>
              <span className="stat-label">Slang Mastered</span>
            </div>
            <div className="stat-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill slang"
                  style={{ width: `${Math.min((slangMastered / 50) * 100, 100)}%` }}
                ></div>
              </div>
              <span className="progress-hint">{slangLearned} terms learned</span>
            </div>
          </div>

          {/* Workplace Phrases */}
          <div className="stat-card">
            <div className="stat-icon-wrap workplace">
              <span className="stat-icon">&#x1f4bc;</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{workplaceProgress.learned}</span>
              <span className="stat-label">Workplace Phrases</span>
            </div>
            <div className="stat-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill workplace"
                  style={{ width: `${workplaceProgress.percentage}%` }}
                ></div>
              </div>
              <span className="progress-hint">{workplaceProgress.situationsComplete} situations complete</span>
            </div>
          </div>

          {/* Quizzes */}
          <div className="stat-card">
            <div className="stat-icon-wrap quizzes">
              <span className="stat-icon">&#x2753;</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{quizzesCompleted}</span>
              <span className="stat-label">Quizzes Completed</span>
            </div>
            <div className="stat-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill quizzes"
                  style={{ width: `${Math.min((quizzesCompleted / 20) * 100, 100)}%` }}
                ></div>
              </div>
              <span className="progress-hint">{cardsViewed} cards viewed</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="stat-card">
            <div className="stat-icon-wrap achievements">
              <span className="stat-icon">&#x1f3c5;</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{unlockedAchievements.length}</span>
              <span className="stat-label">Achievements</span>
            </div>
            <div className="stat-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill achievements"
                  style={{ width: `${(unlockedAchievements.length / allAchievements.length) * 100}%` }}
                ></div>
              </div>
              <span className="progress-hint">{allAchievements.length - unlockedAchievements.length} to unlock</span>
            </div>
          </div>
        </section>

        {/* Achievements Preview */}
        <section className="dashboard-section achievements-preview">
          <h3>Recent Achievements</h3>
          {unlockedAchievements.length === 0 ? (
            <p className="no-achievements">Start learning to unlock achievements!</p>
          ) : (
            <div className="achievements-row">
              {unlockedAchievements.slice(-4).map((achievement) => (
                <div key={achievement.id} className="achievement-mini">
                  <span className="achievement-icon">
                    {String.fromCodePoint(parseInt(achievement.icon, 16))}
                  </span>
                  <span className="achievement-name">{achievement.name}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Links */}
        <section className="dashboard-section quick-links">
          <h3>Continue Learning</h3>
          <div className="links-row">
            <button className="quick-link slang" onClick={() => navigate('/slang')}>
              <span className="link-icon">&#x1f4da;</span>
              <span className="link-text">Slang</span>
            </button>
            <button className="quick-link workplace" onClick={() => navigate('/workplace')}>
              <span className="link-icon">&#x1f4bc;</span>
              <span className="link-text">Workplace</span>
            </button>
            <button className="quick-link speak" onClick={() => navigate('/speak')}>
              <span className="link-icon">&#x1f3a4;</span>
              <span className="link-text">Speak</span>
            </button>
            <button className="quick-link practice" onClick={() => navigate('/app')}>
              <span className="link-icon">&#x1f4ac;</span>
              <span className="link-text">Practice</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>
          Powered by{' '}
          <a href="https://youraussieuncle.com" target="_blank" rel="noopener noreferrer">
            Your Aussie Uncle
          </a>
        </p>
      </footer>
    </div>
  );
}

export default UnifiedDashboard;
